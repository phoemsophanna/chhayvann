"use client";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../config";

export default function Courses_Page() {
    const {t, i18n} = useTranslation();
    const [banner, setBanner] = useState<any>(null);
    const [careers, setCareers] = useState<any>([]);
    const [career, setCareer] = useState<any>(null);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/career-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setBanner(res.data.banner);
                setCareers(res.data.careers);
                setCareer(res.data.career);
            }
        });
    },[i18n.language])

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.Career")} breadcrumbImage={banner?.image}>
                <section className="quick-career-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 sec-title withtext text-center">
                                <h2>{career?.title}</h2>
                                <div className="text">
                                    <p>
                                        {career?.summary}
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="sec-title small-weight withtext text-center">
                                    <h2>{career?.subtitle}</h2>
                                </div>
                                <div className="career-container">
                                    {
                                        careers.length > 0 ? (
                                            <>
                                                {
                                                    careers?.map((q:any) => {
                                                        return (
                                                            <Link href={`/career/${q.id}`} key={q?.id}>
                                                                <div className="career-item">
                                                                    <h2>{q?.title}</h2>
                                                                    <p>{q?.location}</p>
                                                                    <p><b>{t("ApplicationDeadline")}</b> {q?.deadline}</p>
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })
                                                }
                                            </>
                                        ) : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
