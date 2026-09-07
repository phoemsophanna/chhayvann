
import { api } from "@/app/config";
import VideoModal from "@/components/elements/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { sanitizeHtml } from "@/utils/sanitizeHtml";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    const { t, i18n } = useTranslation();
    const swiperRef = useRef<any>(null);

    const [activeVideo, setActiveVideo] = useState<any>(null);
    useEffect(() => {
        if (videoTrade?.length > 0) {
            setActiveVideo(videoTrade[0]);
        }
    }, [videoTrade]);
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
                            onSlideChange={(swiper) => {
                                const currentSlide = videoTrade?.[swiper.realIndex];

                                if (currentSlide) {
                                    setActiveVideo(currentSlide);
                                }
                            }}
                        >
                            {videoTrade?.map((q: any, index: number) => (
                                <SwiperSlide key={q?.id || index}>
                                    <div
                                        className="video-style1__img wow fadeInDown animated"
                                        data-wow-delay="00ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <Image
                                            src={
                                                q?.image
                                                    ? api.FILE_URL + q.image
                                                    : "/assets/images/resources/video-v1-1.jpg"
                                            }
                                            alt={q?.title_eng || "Image"}
                                            width={570}
                                            height={464}
                                            priority={index === 0}
                                        />

                                        <div className="overlay">
                                            <VideoModal videoSrc={q?.videoLink} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
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
                        <div
                            className="video-style1__content wow fadeInUp animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            <AnimatePresence mode="wait">
                                {activeVideo && (
                                    <motion.div
                                        key={activeVideo.id}
                                        initial={{
                                            opacity: 0,
                                            y: 30,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <div className="sec-title withtext">

                                            {/* Subtitle */}
                                            <div className="sub-title">
                                                <span>
                                                    {i18n.language === "KHM"
                                                        ? activeVideo.subtitle_km
                                                        : activeVideo.subtitle_eng}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2>
                                                {i18n.language === "KHM"
                                                    ? activeVideo.title_km
                                                    : activeVideo.title_eng}
                                            </h2>

                                            {/* Description */}
                                            <div className="text">
                                                {i18n.language === "KHM"
                                                    ? activeVideo.des_km
                                                        ? (
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: sanitizeHtml(
                                                                        activeVideo.des_km
                                                                    ),
                                                                }}
                                                            />
                                                        )
                                                        : null
                                                    : activeVideo.des_eng
                                                        ? (
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: sanitizeHtml(
                                                                        activeVideo.des_eng
                                                                    ),
                                                                }}
                                                            />
                                                        )
                                                        : null}
                                            </div>

                                        </div>

                                        {/* Button */}
                                        {activeVideo.link && (
                                            <div className="bottom-box">
                                                <div className="left-box">
                                                    <div className="btn-box">
                                                        <Link
                                                            className="btn-one"
                                                            target="_blank"
                                                            href={activeVideo.link}
                                                        >
                                                            <span className="txt">
                                                                {t("MoreVideos")}
                                                            </span>
                                                            <i className="icon-right-arrow"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}