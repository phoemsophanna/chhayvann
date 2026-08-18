"use client"
import Layout from "@/components/layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { sanitizeHtml } from "@/utils/sanitizeHtml";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    pagination: {
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function Platform_Page() {
    const { t, i18n } = useTranslation();
    const [banner, setBanner] = useState<any>(null);
    const [sites, setSites] = useState<any>(null);
    const [mobiles, setMobiles] = useState<any>([]);
    const [pc, setPc] = useState<any>([]);
    const [service_one, setService_one] = useState<any>([]);
    const [service_two, setService_two] = useState<any>([]); 
    const [activeTab, setActiveTab] = useState<any>("1");
    const [play, setPlay] = useState<any>(false);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/platform`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                var service1:any = [];
                var service2:any = [];
                res.data?.services?.map((q:any,index:any) => {
                    if((index + 1) % 2 == 0){
                        service1.push(q);
                    } else {
                        service2.push(q);
                    }
                });
                console.log(res.data);
                setService_one(service1);
                setService_two(service2);
                setBanner(res.data.banner);
                setSites(res.data?.sites);
                setMobiles(res.data?.mobile_steps);
                setPc(res.data?.pc_steps);
            }
        });
    },[i18n.language]);

    const generateEmbed = (url: string) => {
        try {
            const parsedUrl = new URL(url);
            let videoId = parsedUrl.searchParams.get("v");
            if (!videoId && parsedUrl.hostname === "youtu.be") {
                videoId = parsedUrl.pathname.substring(1);
            }
            if (!videoId) {
                return null;
            }
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=0`;
        } catch (error) {
            return null;
        }
    };
    
    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.Platform")} breadcrumbImage={banner?.image}>
                <section className="team-style1 bg-color p-0 online-trading">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="content-text">
                                    <h2>{sites?.title}</h2>
                                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(sites?.description)}} />
                                    <Link href={"/open-account"} target="_blank" className="mx-2 btn-account">
                                        <i className="far fa-user-circle"></i> {t("HEADER.OpenAccount")}
                                    </Link>
                                    {
                                        sites?.label ? (
                                            <a href={sites?.linkTo ? sites?.linkTo : "https://onlinetrade.chhayvann.com.kh/"} target="_blank" className="btn-login btn-account">
                                                <i className="fas fa-sign-in-alt"></i> {sites?.label}
                                            </a>
                                        ) : ""
                                    }
                                </div>
                            </div>
                            {
                                sites?.image ? (
                                    <div className="col-md-6">
                                        <div className="content-image">
                                            <Image src={api.FILE_URL + sites?.image} alt="" width={800} height={800} priority />
                                        </div>
                                    </div> 
                                ) : ""
                            }
                        </div>
                    </div>
                </section>
                <section className="team-style1 trading-service">
                    <div className="container">
                        <h2 className="mb-2 text-center">{ sites?.service_title }</h2>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3 col-6 order-lg-1 order-2">
                                {
                                    service_one?.map((q:any) => (
                                        <div className="service-item" key={q.id}>
                                            {
                                                q?.icon ?
                                                <div className="icon">
                                                    <Image src={api.FILE_URL + q?.icon} width={800} height={800} alt="" priority />
                                                </div> : ""
                                            }
                                            <p>{q?.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-md-6 order-lg-2 order-1">
                                <Image src={sites?.image2 ? api.FILE_URL + sites?.image2 : `/assets/images/frame-mobile.webp`} style={{width: "100%"}} width={900} height={900} alt="" priority />
                            </div>
                            <div className="col-md-3 col-6 order-lg-3 order-3">
                                {
                                    service_two?.map((q:any) => (
                                        <div className="service-item" key={q.id}>
                                            {
                                                q?.icon ?
                                                <div className="icon">
                                                    <Image src={api.FILE_URL + q?.icon} width={800} height={800} alt="" priority />
                                                </div> : ""
                                            }
                                            <p>{q?.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-md-8 order-4">
                                <div className="content-service">
                                    {
                                        sites?.link || sites?.link2 || sites?.link3 ? <>
                                            <h4>Now available on <a href="">iOS</a> and <a href="">Android!</a></h4>
                                            <div className="image">
                                                {
                                                    sites?.link ? (
                                                        <div className="img">
                                                            <a href={sites?.link} target="_blank">
                                                                <Image src={api.FILE_URL + sites?.platform1} width={800} height={800} alt="" priority />
                                                            </a>
                                                        </div>
                                                    ) : ""
                                                }
                                                {
                                                    sites?.link2 ? (
                                                        <div className="img">
                                                            <a href={sites?.link2} target="_blank">
                                                                <Image src={api.FILE_URL + sites?.platform2} width={800} height={800} alt="" priority />
                                                            </a>
                                                        </div>
                                                    ) : ""
                                                }
                                                {
                                                    sites?.link3 ? (
                                                        <div className="img">
                                                            <a href={sites?.link3} target="_blank">
                                                                <Image src={api.FILE_URL + sites?.platform3} width={800} height={800} alt="" priority />
                                                            </a>
                                                        </div>
                                                    ) : ""
                                                }
                                            </div> 
                                        </> : ""
                                    }
                                    {
                                        sites?.phoneNumber || sites?.whatsapp || sites?.linkedin ? (
                                            <>
                                                <h4>{t("contact_customer_service")} <i className="fas fa-headset"></i></h4>
                                                <div className="contact">
                                                    {
                                                        sites?.phoneNumber ? (
                                                            <div className="contact-item phone">
                                                                <a href={`tel:${sites?.phoneNumber}`} target="_blank">
                                                                    <i className="fas fa-phone-alt"></i>
                                                                    {sites?.phoneNumber}
                                                                </a>
                                                            </div>
                                                        ) : ""
                                                    }
                                                    {
                                                        sites?.whatsapp ? (
                                                            <div className="contact-item whatsapp">
                                                                <a href={sites?.whatsapp} target="_blank">
                                                                    <i className="fab fa-whatsapp"></i>
                                                                    Whatsapp
                                                                </a>
                                                            </div>
                                                        ) : ""
                                                    }
                                                    {
                                                        sites?.linkedin ? (
                                                            <div className="contact-item linkedin">
                                                                <a href={sites?.linkedin} target="_blank">
                                                                    <i className="fab fa-linkedin-in"></i>
                                                                    Linkedin
                                                                </a>
                                                            </div>
                                                        ) : ""
                                                    }
                                                </div>
                                            </>
                                        ) : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-style1 bg-color trading-service">
                    <div className="container">
                        <h2 className="text-center mb-3">{sites?.guide_title}</h2>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "1" ? "active" : ""}`}
                                    onClick={() => setActiveTab("1")}
                                >
                                    {t("on_pc")}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "2" ? "active" : ""}`}
                                    onClick={() => setActiveTab("2")}
                                >
                                    {t("on_mobile")}
                                </button>
                            </li>
                        </ul>

                        {/* TabContent */}
                        <div className="tab-content mt-3">
                            <div className={`tab-pane ${activeTab === "1" ? "show active" : ""}`}>
                                <Swiper {...swiperOptions} className="step-style1-carousel">
                                    {
                                        pc?.map((q:any,index:any) => (
                                            <SwiperSlide key={index}>
                                                <div className="single-step-style1">
                                                    {
                                                        q?.image ? (
                                                            <div className="icon">
                                                                <span className="label">{index + 1}</span>
                                                                <img src={api.FILE_URL + q?.image} width={800} height={800} alt="" />
                                                            </div>
                                                        ) : ""
                                                    }
                                                    <div className="title">
                                                        <span>{t("step")} {index + 1}/{pc?.length}</span>
                                                        <h3>{q?.title}</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            {q?.summary}
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>

                            <div className={`tab-pane ${activeTab === "2" ? "show active" : ""}`}>
                                <Swiper {...swiperOptions} className="step-style1-carousel">
                                    {
                                        mobiles?.map((q:any,index:any) => (
                                            <SwiperSlide key={index}>
                                                <div className="single-step-style1">
                                                    {
                                                        q?.image ? (
                                                            <div className="icon">
                                                                <span className="label">{index + 1}</span>
                                                                <img src={api.FILE_URL + q?.image} width={800} height={800} alt="" />
                                                            </div>
                                                        ) : ""
                                                    }
                                                    <div className="title">
                                                        <span>{t("step")} {index + 1}/{mobiles?.length}</span>
                                                        <h3>{q?.title}</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            {q?.summary}
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-style1 trading-service">
                    <div className="container">
                        <h2 className="text-center mb-5">{ sites?.video_title }</h2>
                        <div className={`video-content ${play ? "active" : ""}`}>
                            {
                                play ? (
                                    <iframe src={`${generateEmbed(sites?.video_link)}`} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                ) : (
                                    <>
                                        <div className="play-btn2" onClick={() => setPlay((prev:any) => !prev)}>
                                            <i className="fas fa-play-circle"></i>
                                        </div>
                                        <Image src={sites?.video_thumbnail ? api.FILE_URL + sites?.video_thumbnail : `/assets/images/banner.webp`} width={800} height={800} alt="" />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
