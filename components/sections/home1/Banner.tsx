'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Image from "next/image";
import Link from "next/link";
import VideoModal from "@/components/elements/VideoPopup";

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
        nextEl: '.banner-slider-button-prev',
        prevEl: '.banner-slider-button-next',
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
  return (
    <>
        <section className="main-slider-style1">
            <div className="main-slider-style1__inner">
                <iframe style={{width: "100%",height: "100%"}} src="https://www.youtube.com/embed/ajEm-7CMFpA?autoplay=1&mute=1" allow="autoplay; encrypted-media;">
                </iframe>
            </div>

            {/* <ul className="main-slider-style1__highlights clearfix">
                <li>
                    <div className="icon">
                        <span className="icon-success"><span className="path1"></span><span className="path2"></span><span
                                className="path3"></span></span>
                    </div>
                    <p>Up to <span>$500 Bonus</span> on First Deposit!</p>
                </li>
                <li>
                    <div className="icon">
                        <span className="icon-success"><span className="path1"></span><span className="path2"></span><span
                                className="path3"></span></span>
                    </div>
                    <p>Stay Informed, <Link href="#">Subscribe</Link> Now!</p>
                </li>
                <li>
                    <div className="icon">
                        <span className="icon-success"><span className="path1"></span><span className="path2"></span><span
                                className="path3"></span></span>
                    </div>
                    <p>Trading with a <Link href="#">Free Demo</Link> Account!</p>
                </li>
                <li>
                    <div className="icon">
                        <span className="icon-success"><span className="path1"></span><span className="path2"></span><span
                                className="path3"></span></span>
                    </div>
                    <p>Download our Free <Link href="#">eBooks</Link></p>
                </li>
            </ul> */}

            <div className="">
                <Swiper {...swiperOptions} className="swiper-container banner-slider-two">
                        
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/slides/slide-v1-1.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="content-box">
                                <div className="big-title">
                                    <h2>Secure<br /> investing for<br /> every trader</h2>
                                </div>
                                <div className="text">
                                    <p>Invest confidently with advanced security measures tailored to protect your
                                        trades.</p>
                                </div>
                                <div className="bottom-box">
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/markets">
                                            <span className="txt">Explore Markets</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                    <div className="text-box">
                                        <h4>Master Trading <br />in Minutes...</h4>
                                        <VideoModal/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/slides/slide-v1-2.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="content-box">
                                <div className="big-title">
                                    <h2>Master<br /> markets with<br /> every trade</h2>
                                </div>
                                <div className="text">
                                    <p>Unlock market insights and improve your strategy with every trade you make for
                                        consistent success.</p>
                                </div>
                                <div className="bottom-box">
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/markets">
                                            <span className="txt">Explore Markets</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                    <div className="text-box">
                                        <h4>Master Trading <br />in Minutes...</h4>
                                        <VideoModal/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/slides/slide-v1-3.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="content-box">
                                <div className="big-title">
                                    <h2>Best trading<br /> tools for your<br /> success.</h2>
                                </div>
                                <div className="text">
                                    <p>Access top-tier trading tools designed to elevate your success and maximize
                                        profits effortlessly.</p>
                                </div>
                                <div className="bottom-box">
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/markets">
                                            <span className="txt">Explore Markets</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                    <div className="text-box">
                                        <h4>Master Trading <br />in Minutes...</h4>
                                        <VideoModal/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="banner-slider-nav">
                        <div className="banner-slider-control banner-slider-button-prev">
                            <span><i className="icon-arrow-left" aria-hidden="true"></i></span>
                        </div>
                        <div className="banner-slider-control banner-slider-button-next">
                            <span><i className="icon-arrow-right" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </Swiper>
            </div>

        </section>
    </>
  )
}