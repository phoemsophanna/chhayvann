'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Accordion from "@/components/sections/InnerPage/Accordion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { api } from "../config";

export default function Faq_Page() {
    const { t, i18n } = useTranslation();
    const [privacy, setPrivacy] = useState<any>(null);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/privacy-policy-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setPrivacy(res.data.privacyPolicy);
            }
        });
    },[i18n.language]);

    if(!privacy) return null;

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("PrivacyPolicy")} breadcrumbImage={privacy?.thumbnail}>
                <section className="faq-style2">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{__html: privacy?.description}} />
                    </div>
                </section>
            </Layout>
        </div>
    )
}
