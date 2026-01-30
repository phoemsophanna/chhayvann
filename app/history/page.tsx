"use client";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../config";


export default function History_Page() {
    const [banner, setBanner] = useState<any>(null);
    const [history, setHistory] = useState<any>(null);
    const { i18n } = useTranslation();
    useEffect(() => {
        axios.get(`${api.BASE_URL}/history`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setBanner(res.data.banner);
                setHistory(res.data.history);
            }
        });
    },[i18n.language]);

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Our History" breadcrumbImage={banner?.image}>
                <section className="history-style1">
                    <div className="container">
                        <i className="border-line1"></i>
                        <ul className="history-style1__inner">
                            {
                                history?.map((q:any,index: any) => (
                                    <li className={`single-history-style1 ${(index + 1) % 2 == 0 ? "instyle2" : ""}`} key={index}>
                                        <div className="img-box">
                                            <Image src={`${api.FILE_URL}${q.image}`} alt="History" width={370} height={295} priority />
                                        </div>
                                        <div className="year-box">
                                            <h3>{q?.year}</h3>
                                            <div className="border-line"></div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">
                                                    {q?.title}
                                                </Link></h3>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    {q?.summary}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
