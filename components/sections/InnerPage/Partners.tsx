"use client";

import CountUp from "react-countup";
import FadeIn from "@/components/elements/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/app/config";
import { useState } from "react";


export default function Partners({about, partner}: any) {
  return (
    <>
        <section className="partner-style1 partner-style1--about-page">
            <div className="container">
                <div className="partner-style1__top text-center justify-content-center">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>{about?.subtitlePartner}</h4>
                        </div>
                        <h2>{about?.titlePartner}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <FadeIn delay={0.0}>
                        <div className="partner-style1__img">
                            <Image src={about?.image5 ? api.FILE_URL + about?.image5 : "/assets/images/brand/partners-v1-img1.webp"} alt="Image" width={570} height={454} priority />
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <FadeIn direction="down" delay={0.0}>
                        <div className="partner-style1__brand">
                            <ul className="clearfix">
                                <li>
                                    <Link href={partner[0]?.link ? partner[0]?.link : "#"} target={partner[0]?.link ? "_blank" : ""}>
                                        <img src={`${api.FILE_URL}${partner[0]?.image}`} alt="Image" width={285} height={150} />
                                    </Link>
                                </li>
                                {
                                    partner[1] ? (
                                        <li>
                                            <Link href={partner[1]?.link ? partner[1]?.link : "#"} target={partner[1]?.link ? "_blank" : ""}>
                                                <img src={`${api.FILE_URL}${partner[1]?.image}`} alt="Image" width={285} height={150} />
                                            </Link>
                                        </li>
                                    ) : ""
                                }
                            </ul>
                            <ul className="middle-box clearfix">
                                {
                                    partner[2] ? (
                                        <li>
                                            <Link href={partner[2]?.link ? partner[2]?.link : "#"} target={partner[2]?.link ? "_blank" : ""}>
                                                <img src={`${api.FILE_URL}${partner[2]?.image}`} alt="Image" width={285} height={150} />
                                            </Link>
                                        </li>
                                    ) : ""
                                }
                                <li className="counting-box" style={partner?.length < 2 ? {maxWidth: "100%"} : {}}>
                                    <div className="count-box text-center">
                                        <div className="odometer-counting">
                                            <h2 className="odometer"><CountUp end={about?.valuePartner.replace("+","")} duration={2.5} /></h2>
                                            <span>+</span>
                                        </div>
                                        <p>Industry Leaders <br />with Us</p>
                                    </div>
                                </li>
                                {
                                    partner[3] ? (
                                        <li>
                                            <Link href={partner[3]?.link ? partner[3]?.link : "#"} target={partner[3]?.link ? "_blank" : ""}>
                                                <img src={`${api.FILE_URL}${partner[3]?.image}`} alt="Image" width={285} height={150} />
                                            </Link>
                                        </li>
                                    ) : ""
                                }
                            </ul>
                            <ul className="clearfix">
                                {
                                    partner?.map((q:any, i:any) => {
                                        if(i > 3) {
                                            return <li key={i}>
                                                <Link href={q?.link ? q?.link : "#"} target={q?.link ? "_blank" : ""}>
                                                    <img src={`${api.FILE_URL}${q?.image}`} alt="Image" width={285} height={150} />
                                                </Link>
                                            </li>;
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}