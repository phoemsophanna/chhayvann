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
import { sanitizeHtml } from "@/utils/sanitizeHtml";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    pagination: {
        clickable: true,
    }
}

export default function About_Page() {
    const { t, i18n } = useTranslation();
    const [about, setAbout] = useState<any>(null);
    const [partner, setPartner] = useState([]);
    const [awards, setAward] = useState([]);
    const [banner, setBanner] = useState<any>(null);
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
                setBanner(res.data.banner);
            }
        });
    },[i18n.language]);
    
    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.AboutUs")} breadcrumbImage={banner?.image}>
                <section className="about-style2 pdtop">
                    <div className="container">
                        <div className="row">
                            {
                                about?.thumbnail?.length > 0 ? (
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-style2__left about-style2__left-style3">
                                            <div className="img-box1">
                                                <Swiper {...swiperOptions} className="awards-style1-carousel">
                                                    {
                                                        about?.thumbnail?.map((q:any) => (
                                                            <SwiperSlide>
                                                                <Image src={`${q ? api.FILE_URL + q : "/assets/images/about/about-v2-2.webp"}`} alt="Image" width={900} height={900} priority />
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                    {
                                                        about?.thumbnail?.length > 1 ? (
                                                            <>
                                                                <button className="owl-nav-style-about owl-prev"><span className="left icon-arrow-left"></span></button>
                                                                <button className="owl-nav-style-about owl-next"><span className="icon-arrow-right"></span></button>
                                                            </>
                                                        ) : ""
                                                    }
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                ) : ""
                            }

                            <div className="col-xl-6 col-lg-6">
                                <div className="about-style2__right">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>{about?.subtitle}</h4>
                                        </div>
                                        <h2>{about?.companyName}</h2>
                                        <div className="text">
                                            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(about?.aboutCompany) }} />
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
