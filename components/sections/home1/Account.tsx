'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Image from "next/image";
import Link from "next/link";

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


export default function Account() {
  return (
    <>
        <section className="account-style1">
            <div className="container">
                <div className="sec-title">
                    <div className="sub-title">
                        <h4>Services</h4>
                    </div>
                    <h2>Explore Our Services</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12 relative">
                        <Swiper {...swiperOptions} className="account-style1-carousel">
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-2.webp" alt="Image" width={370} height={240} priority />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3 className="text-center"><Link href="#">Bullion Trading</Link></h3>
                                        <p>Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
                                    </div>
                                    
                                    <div className="bottom-box justify-content-center">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-2.webp" alt="Image" width={370} height={240} priority />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3 className="text-center"><Link href="#">99.99% GOLD BARS</Link></h3>
                                        <p>Cases are perfectly simple and easy to distinguish in a free hour...</p>
                                    </div>
                                    
                                    <div className="bottom-box justify-content-center">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-3.webp" alt="Image" width={370} height={240} priority />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3 className="text-center"><Link href="#">99.5% Gold Bars</Link></h3>
                                        <p>Holds in these matters to this principle of selection rejects pleasures...
                                        </p>
                                    </div>
                                    
                                    <div className="bottom-box justify-content-center">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-3.webp" alt="Image" width={370} height={240} priority />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3 className="text-center"><Link href="#">Gold And Silver Scrap</Link></h3>
                                        <p>Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
                                    </div>
                                    
                                    <div className="bottom-box justify-content-center">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-2.webp" alt="Image" width={370} height={240} priority />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3 className="text-center"><Link href="#">Online Trading</Link></h3>
                                        <p>Cases are perfectly simple and easy to distinguish in a free hour...</p>
                                    </div>
                                    
                                    <div className="bottom-box justify-content-center">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="owl-nav-style-one">
                            <div className="owl-nav disabled">
                                <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                <button className="owl-next"><span className="icon-arrow-right"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}