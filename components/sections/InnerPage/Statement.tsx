'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/app/config";

export default function Statement({about}:any) {

    // tab
    const [activeTab, setActiveTab] = useState("vision");

  return (
    <>
        <section className="statement-style1">
            <div className="container">
                <div className="statement-style1__inner">
                    <div className="statement-style1__tab">

                        <div className="statement-style1__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${activeTab === "vision" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("vision")}>
                                    <h3>{about?.titleVision}</h3>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "mission" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("mission")}>
                                    <h3>{about?.titleMission}</h3>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "value" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("value")}>
                                    <h3>{about?.titleValue}</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">

                            {activeTab === "mission" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="mission">
                                <div className="statement-style1-tab-content-box-item">

                                    <div className="single-statement-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 order-md-1 order-2">
                                                <div className="single-statement-style1__content">
                                                    <div className="title">
                                                        <h2>{about?.titleMission}</h2>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{__html: about?.desMission}} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 order-md-2 order-1">
                                                <div className="single-statement-style1__img">
                                                    <Image src={about?.image2 ? api.FILE_URL + about?.image2 : "/assets/images/resources/statement-v1-1.webp"} alt="Image" width={470} height={345} priority />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )}
                            
                            {activeTab === "vision" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="vision">
                                <div className="statement-style1-tab-content-box-item">
                                    <div className="single-statement-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 order-md-1 order-2">
                                                <div className="single-statement-style1__content">
                                                    <div className="title">
                                                        <h2>
                                                            {about?.titleVision}
                                                        </h2>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{__html: about?.desVision}} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 order-md-2 order-1">
                                                <div className="single-statement-style1__img">
                                                    <Image src={about?.image3 ? api.FILE_URL + about?.image3 : "/assets/images/about/vision.jpg"} alt="Image" width={470} height={345} priority />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "value" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="value">
                                <div className="statement-style1-tab-content-box-item">
                                    <div className="single-statement-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 order-md-1 order-2">
                                                <div className="single-statement-style1__content">
                                                    <div className="title">
                                                        <h2>{about?.titleValue}</h2>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{__html: about?.desValue}} />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 order-md-2 order-1">
                                                <div className="single-statement-style1__img">
                                                    <Image src={about?.image4 ? api.FILE_URL + about?.image4 : "/assets/images/about/value.jpg"} alt="Image" width={470} height={345} priority />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}