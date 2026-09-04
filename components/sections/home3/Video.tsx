
import { api } from "@/app/config";
import VideoModal from "@/components/elements/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { sanitizeHtml } from "@/utils/sanitizeHtml";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react";

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
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    pagination: {
        clickable: true,
    }
}

export default function Video({trade, videoTrade}: any) {
    const { t } = useTranslation();
    const swiperRef = useRef<any>(null);
    // console.log(videoTrade);
  return (
    <>
        <section className="video-style1">
            {/* <div className="video-style1__shape1">
                <Image src="/assets/images/shapes/video-v1-shape1.png" alt="Shape" width={995} height={704} priority />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <Swiper 
                            {...swiperOptions} 
                            className="awards-style1-carousel"
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}

                        >
                            {
                                videoTrade?.map((q:any) => (
                                    <SwiperSlide>
                                        <div className="video-style1__img wow fadeInDown animated" data-wow-delay="00ms"
                                            data-wow-duration="1500ms">
                                            <Image src={q?.image ? api.FILE_URL+q?.image : `/assets/images/resources/video-v1-1.jpg`} alt="Image" width={570} height={464} priority />
                                            <div className="overlay">
                                                <VideoModal videoSrc={q?.videoLink} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            {
                                videoTrade?.length > 1 ? (
                                    <>
                                        <button className="owl-nav-style-about owl-prev" onClick={() => swiperRef.current?.slidePrev()}><span className="left icon-arrow-left"></span></button>
                                        <button className="owl-nav-style-about owl-next" onClick={() => swiperRef.current?.slideNext()}><span className="icon-arrow-right"></span></button>
                                    </>
                                ) : ""
                            }
                        </Swiper>
                    </div>
                    <div className="col-xl-6">
                        <div className="video-style1__content wow fadeInUp animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title withtext">
                                <div className="sub-title">
                                    <span>{trade?.subtitle ? trade?.subtitle : "HOW TO USE OUR PLATFORM"}</span>
                                </div>
                                <h2>{trade?.title ? trade?.title : "Easy to Follow Video"}</h2>
                                <div className="text">
                                    {
                                        trade?.des ? (
                                            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(trade?.des) }} />
                                        ) : <>
                                            <p>Watch our videos to understand how to use the CHHAYVANN CO., LTD platform for physical gold and silver. Learn step‑by‑step how to trade securely, check live prices, and manage your transactions with confidence.</p>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="bottom-box">
                                <div className="left-box">
                                    <div className="btn-box">
                                        {
                                            trade?.link ? (
                                                <Link className="btn-one" target="_blank" href={`${trade?.link ? trade?.link : "#"}`}>
                                                    <span className="txt">{t("MoreVideos")}</span>
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}