"use client";

import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { api } from "@/app/config";
import { useTranslation } from "react-i18next";

export default function Courses_Details_Page() {
    const { i18n } = useTranslation();
    const { slug } = useParams();
    const [service, setService] = useState<any>(null);
    const [banner, setBanner] = useState<any>(null);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/service/${slug}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setService(res.data.service);
                setBanner(res.data.banner);
            }
        });
    },[i18n.language]);

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={service?.title} breadcrumbImage={banner?.image}>
                <section className={`account-detail-style1 pt-80`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="account-detail-style1__content">
                                    <div className="intro-box">
                                        <div className="offers-box-img">
                                            <Image src={`${api.FILE_URL}${service?.image}`} alt="Image" width={350} height={375} priority />
                                        </div>
                                        <h2>{service?.title}</h2>
                                        <div dangerouslySetInnerHTML={{__html: service?.content}} />
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
