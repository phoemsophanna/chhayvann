
import VideoModal from "@/components/elements/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Video({trade}: any) {
    const { t } = useTranslation();
    
  return (
    <>
        <section className="video-style1">
            {/* <div className="video-style1__shape1">
                <Image src="/assets/images/shapes/video-v1-shape1.png" alt="Shape" width={995} height={704} priority />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="video-style1__img wow fadeInDown animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <Image src="/assets/images/resources/video-v1-1.jpg" alt="Image" width={570} height={464} priority />
                            <div className="overlay">
                                <VideoModal videoSrc={trade?.linkVideo} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="video-style1__content wow fadeInUp animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title withtext">
                                <div className="sub-title">
                                    <h4>{trade?.subtitle}</h4>
                                </div>
                                <h2>{trade?.title}</h2>
                                <div className="text">
                                    <div dangerouslySetInnerHTML={{__html: trade?.des}} />
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