'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Accordion from "@/components/sections/InnerPage/Accordion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { api } from "../config";
import i18n from "@/utils/i18n-client";

export default function Faq_Page() {
    const [activeTab, setActiveTab] = useState("account");

    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState<any>([]);
    const [banner, setBanner] = useState<any>(null);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/faq-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setCategory(res.data.category);
                setBanner(res.data.banner);
                setActiveTab(`Faq-${res.data.category[0]?.id}`);
            }
        });
    },[i18n.language]);

    if(!category) return null;

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("FAQ")} breadcrumbImage={banner?.image}>
                <section className="faq-style2">
                    <div className="container">
                        <div className="faq-style2__inner">
                            <div className="faq-style2__tab">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4">
                                        <div className="faq-style2__tab-btn">
                                            <ul className="tabs-button-box clearfix">
                                                {
                                                    category?.map((q:any) => (
                                                        <li key={q.id} className={`tab-btn-item ${activeTab === `Faq-${q?.id}` ? "active-btn-item" : ""}`} onClick={() => setActiveTab(`Faq-${q?.id}`)}>
                                                            <h3>{q?.title}</h3>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-8">
                                        <div className="tabs-content-box">
                                            {
                                                category?.map((q:any) => (
                                                    <div key={q?.id} className={`tab-content-box-item ${activeTab == `Faq-${q?.id}` ? "tab-content-box-item-active" : ""} fadeIn`} id={`Faq-${q?.id}`}>
                                                        {
                                                            q?.faq ? (
                                                                <Accordion items={q?.faq} />
                                                            ) : ""
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
