'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "@/app/config";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.banner-slider-button-next',
        prevEl: '.banner-slider-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
    const [slider, setSlider] = useState([]);
    const { i18n } = useTranslation();

    useEffect(() => {
        axios.get(`${api.BASE_URL}/sliders`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setSlider(res.data.sliders);
            }
        });
    },[i18n.language]);

    if(slider.length <= 0) return <>
        <style>{`
            .about-style1 {
                padding-top: 230px;
            }

            @media screen and (max-width: 1200px) {
                .about-style1 {
                    padding-top: 310px;
                }
            }

            @media screen and (max-width: 768px) { 
                .about-style1 {
                    padding-top: 30px;
                }
            }
        `}</style>
    </>;

  return (
    <>
        <section className="main-slider-style2">
            <Swiper {...swiperOptions} className="banner-slider">
                {
                    slider.length > 0 ? (
                        <>
                            {
                                slider?.map((q:any,index:any) => (
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="image-layer" style={{ backgroundImage: `url(${api.FILE_URL}${q?.image})` }}>
                                            </div>
                                            <div className="container">
                                                <div className="content-box text-center">
                                                    <div className="big-title big-title--two">
                                                        <h2>{q?.title}</h2>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="text-right">
                                                            <p>
                                                                {q?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {
                                                        q?.linkTo ? (
                                                            <div className="btn-box">
                                                                <Link className="" href={q?.linkTo} target="_blank">
                                                                    {q?.linkLabel ? q?.linkLabel : "More"}
                                                                    <span className="icon-right-arrow"></span>
                                                                </Link>
                                                            </div>
                                                        ) : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </>
                    ) : (
                        <>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="image-layer-2" style={{ backgroundColor: "#fff" }}>
                                    </div>
                                    <div className="container">
                                        <div className="content-box text-center">
                                            <div className="big-title big-title--two">
                                                <h2>Global Markets</h2>
                                            </div>
                                            <div className="text-box">
                                                <div className="text-right">
                                                    <p>Need assistance?<br /> Speak with our trading expert today.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="" href="#">
                                                    More
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                }
                
            </Swiper>


            <div className="banner-slider-nav banner-slider-nav--style2">
                <div className="banner-slider-control banner-slider-button-prev">
                    <span><i className="icon-arrow-left" aria-hidden="true"></i></span>
                </div>
                <div className="banner-slider-control banner-slider-button-next">
                    <span><i className="icon-arrow-right" aria-hidden="true"></i></span>
                </div>
            </div>
        </section>
    </>
  )
}