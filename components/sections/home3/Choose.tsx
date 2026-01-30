"use-client";
import { api } from "@/app/config";
import FadeIn from "@/components/elements/FadeIn";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Choose() {
    const [whyChoose, setWhyChoose] = useState<any>(null);
    const { i18n } = useTranslation();
    useEffect(() => {
        axios.get(`${api.BASE_URL}/whychoose`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setWhyChoose(res.data.why_choose);
            }
        });
    }, [i18n.language])
  return (
    <>
        <section className="choose-style2">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>{whyChoose?.subtitle}</h4>
                    </div>
                    <h2>{whyChoose?.title}</h2>
                    <div className="text">
                        <p>
                            {whyChoose?.summary}
                        </p>
                    </div>
                </div>
                <FadeIn direction="up" delay={0.0}>
                <ul className="row clearfix">
                    {
                        whyChoose?.titleOne ? (
                            <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                                <div className="single-choose-style2 text-center">
                                    <div className="top-box">
                                        <div className="icon">
                                            {
                                                whyChoose?.image ? (
                                                    <img src={`${api.FILE_URL}${whyChoose?.image}`} style={{width: 35}} alt={whyChoose?.image} />
                                                ) : (
                                                    <span className="icon-businessman"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3><Link href="#">{whyChoose?.titleOne}</Link></h3>
                                        <p>
                                            {whyChoose?.desOne}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ) : ""
                    }

                    {
                        whyChoose?.titleTwo ? (
                            <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                                <div className="single-choose-style2 text-center">
                                    <div className="top-box">
                                        <div className="icon">
                                            {
                                                whyChoose?.image2 ? (
                                                    <img src={`${api.FILE_URL}${whyChoose?.image2}`} style={{width: 35}} alt={whyChoose?.image2} />
                                                ) : (
                                                    <span className="icon-security"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3><Link href="#">{whyChoose?.titleTwo}</Link></h3>
                                        <p>
                                            {whyChoose?.desTwo}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ) : ""
                    }

                    {
                        whyChoose?.titleThree ? (
                            <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                                <div className="single-choose-style2 text-center">
                                    <div className="top-box">
                                        <div className="icon">
                                            {
                                                whyChoose?.image3 ? (
                                                    <img src={`${api.FILE_URL}${whyChoose?.image3}`} style={{width: 35}} alt={whyChoose?.image3} />
                                                ) : (
                                                    <span className="icon-bill"><span className="path1"></span><span className="path2"></span><span
                                                        className="path3"></span><span className="path4"></span><span
                                                        className="path5"></span><span className="path6"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3><Link href="#">{whyChoose?.titleThree}</Link></h3>
                                        <p>
                                            {whyChoose?.desThree}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ) : ""
                    }
                    
                    {
                        whyChoose?.titleFour ? (
                            <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                                <div className="single-choose-style2 text-center">
                                    <div className="top-box">
                                        <div className="icon">
                                            {
                                                whyChoose?.image4 ? (
                                                    <img src={`${api.FILE_URL}${whyChoose?.image4}`} style={{width: 35}} alt={whyChoose?.image4} />
                                                ) : (
                                                    <span className="icon-high-five"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3><Link href="#">{whyChoose?.titleFour}</Link></h3>
                                        <p>
                                            {whyChoose?.desFour}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ) : ""
                    }

                    {
                        whyChoose?.titleFive ? (
                            <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                                <div className="single-choose-style2 text-center">
                                    <div className="top-box">
                                        <div className="icon">
                                            {
                                                whyChoose?.image4 ? (
                                                    <img src={`${api.FILE_URL}${whyChoose?.image5}`} style={{width: 35}} alt={whyChoose?.image5} />
                                                ) : (
                                                    <span className="icon-trend"><span className="path1"></span><span className="path2"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3><Link href="#">{whyChoose?.titleFive}</Link></h3>
                                        <p>
                                            {whyChoose?.desFive}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ) : ""
                    }
                    
                    {
                        whyChoose?.titleSix ? (
                            <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                                <div className="single-choose-style2 text-center">
                                    <div className="top-box">
                                        <div className="icon">
                                            {
                                                whyChoose?.image6 ? (
                                                    <img src={`${api.FILE_URL}${whyChoose?.image6}`} style={{width: 35}} alt={whyChoose?.image6} />
                                                ) : (
                                                    <span className="icon-24-hours"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3><Link href="#">{whyChoose?.titleSix}</Link></h3>
                                        <p>
                                            {whyChoose?.desSix}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ) : ""
                    }

                </ul>
                </FadeIn>
            </div>
        </section>
    </>
  )
}