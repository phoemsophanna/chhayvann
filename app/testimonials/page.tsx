"use client";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../config";


export default function Testimonial_Page() {
    const { t, i18n } = useTranslation();
    const [testimonial, setTestimonial] = useState<any>(null);
    const [banner, setBanner] = useState<any>(null);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/testimonial-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setBanner(res.data.banner);
                setTestimonial(res.data.testimonials);
            }
        });
    },[i18n.language])

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.Testimonials")} breadcrumbImage={banner?.image}>
                <section className="testimonial-style1 testimonial-style1--style2">
                    <div className="container">
                        <div className="row masonary-layout">
                            {
                                testimonial?.map((q:any,index:any) => (
                                    <div className="col-xl-4" key={index}>
                                        <div className="single-testimonial-style1">
                                            <div className="bottom-box">
                                                <div className="icon">
                                                    <Image src={`${api.FILE_URL}${q?.reviewerProfile}`} width={120} height={120} alt={q?.reviewerProfile} />
                                                </div>
                                                <div className="content-name">
                                                    <h3>{q?.reviewerName}</h3>
                                                    <span>{q?.reviewerPosition}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="text-box">
                                                <p>{q?.comment}</p>
                                            </div>
                                            <div className="quote-icon">
                                                <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
