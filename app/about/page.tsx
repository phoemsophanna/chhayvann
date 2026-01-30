"use client";
import Layout from "@/components/layout/Layout";
import Choose from "@/components/sections/home3/Choose";
import Awards from "@/components/sections/InnerPage/Awards";
import Partners from "@/components/sections/InnerPage/Partners";
import Statement from "@/components/sections/InnerPage/Statement";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../config";

export default function About_Page() {
    const { t, i18n } = useTranslation();
    const [about, setAbout] = useState<any>(null);
    const [partner, setPartner] = useState([]);
    const [awards, setAward] = useState([]);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/aboutus`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setAbout(res.data.aboutus);
                setAward(res.data.awards);
                setPartner(res.data.partners);
            }
        });
    },[i18n.language]);
    
    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="About Us">
                <section className="about-style2 pdtop">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6">
                                <div className="about-style2__left about-style2__left-style3">
                                    <div className="img-box1">
                                        <Image src={`${about?.thumbnail ? api.FILE_URL + about?.thumbnail : "/assets/images/about/about-v2-2.webp"}`} alt="Image" width={300} height={460} priority />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="about-style2__right">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>{about?.subtitle}</h4>
                                        </div>
                                        <h2>{about?.companyName}</h2>
                                        <div className="text">
                                            <div dangerouslySetInnerHTML={{__html: about?.aboutCompany}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Statement about={about} />
                <Choose/>
                {/* <Counter/> */}
                { partner.length > 0 ? <Partners partner={partner} about={about} /> : "" }
                { awards.length > 0 ? <Awards awards={awards} about={about} /> : "" }
            </Layout>
        </div>
    )
}
