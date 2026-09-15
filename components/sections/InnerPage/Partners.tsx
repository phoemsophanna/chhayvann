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
                            <ul className="row">
                                {
                                    partner?.map((q:any, i:any) => {
                                        return <li key={i}>
                                            <Link href={q?.link ? q?.link : "#"} target={q?.link ? "_blank" : ""}>
                                                <img src={`${api.FILE_URL}${q?.image}`} alt="Image" width={285} height={150} />
                                            </Link>
                                        </li>;
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