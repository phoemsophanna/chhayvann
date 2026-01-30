'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import { useTranslation } from "react-i18next";

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

export default function Work({trade,trades}: any) {
    const { t } = useTranslation();
  return (
    <>
        <section className="how-it-work-style1">
            <div className="container">
                <div className="how-it-work-style1__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>{trade?.subtitle}</h4>
                        </div>
                        <h2>{trade?.title}</h2>
                    </div>
                    <div className="text">
                        <div className="main-header-style1__content-top-middle">
                            <div className="btn-box">
                                <Link className="btn-one active" href="/individual">
                                    <span className="txt">{t("HEADER.OpenIndividualAccount")}</span>
                                </Link>
                                <Link className="btn-one" href="/corporate">
                                    <span className="txt">{t("HEADER.OpenCorporateAccount")}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="slider-content relative">
                            <Swiper {...swiperOptions} className="how-it-work-style1-carousel">
                                {
                                    trades?.map((q:any) => (
                                        <SwiperSlide key={q?.id}>
                                            <div className="single-how-it-work-style1">
                                                <div className="count-box">
                                                    <div className="step">
                                                        <h6>{q?.step}</h6>
                                                    </div>
                                                </div>
                                                <div className="content-box">
                                                    <div className="title">
                                                        <h3><Link href="#">{q?.title}</Link></h3>
                                                        <p>
                                                            {q?.summary}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                                <div className="owl-nav-style-one">
                                    <div className="owl-nav disabled">
                                        <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                        <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                    </div>
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}