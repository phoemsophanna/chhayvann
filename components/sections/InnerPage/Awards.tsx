'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import { api } from "@/app/config";
import { useEffect, useState } from "react";

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
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Awards({awards,about}: any) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    },[])
  return (
    <>
        <section className="awards-style1">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>{about?.subtitleAward}</h4>
                    </div>
                    <h2>{about?.titleAward}</h2>
                    <div className="text">
                        <p>
                            {about?.summaryAward}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="awards-style1-carousel">
                            {
                                awards?.map((q:any) => (
                                    <SwiperSlide>
                                        <div className="single-awards-style1">
                                            <div className="single-awards-style1__shape1">
                                                <Image src="/assets/images/shapes/shape1.png" alt="Shape" width={165} height={175} priority />
                                            </div>
                                            <div className="icon">
                                                <img src={`${api.FILE_URL}${q?.image}`} width={100} height={100} alt="" />
                                            </div>
                                            <div className="title">
                                                <h3><Link href="#">
                                                    {q?.title}
                                                </Link></h3>
                                            </div>
                                            <div className="border-line"></div>
                                            <div className="text">
                                                <p>
                                                    {q?.summary}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            
                            {
                                isMobile ? (
                                    <>
                                        {
                                            awards?.length > 1 ? (
                                                <div className="owl-nav-style-one">
                                                    <div className="owl-nav">
                                                        <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                        <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                    </div>
                                                </div>
                                            ) : ""
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            awards?.length > 3 ? (
                                                <div className="owl-nav-style-one">
                                                    <div className="owl-nav">
                                                        <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                        <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                    </div>
                                                </div>
                                            ) : ""
                                        }
                                    </>
                                )
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}