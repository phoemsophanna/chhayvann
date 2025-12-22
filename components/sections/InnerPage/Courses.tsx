'use client'
import { useState } from "react";
import VideoModal from "@/components/elements/VideoPopup";
import Image from "next/image";
import Link from "next/link";


export default function Courses() {

    // tab
    const [activeTab, setActiveTab] = useState("beginners");

  return (
    <>
        <section className="courses-offered-style1">
            <div className="container">
                <div className="sec-title text-center">
                    {/* <div className="sub-title">
                        <h4>Services</h4>
                    </div> */}
                    {/* <h2>Discover the Services We Offer</h2> */}
                    <p>Internal Transfer Loco London is the gold transfer service between YLG customers.(The transferor and transferee have to be YLG customers) External Transfer Loco London is the gold transfer service from YLG customers to overseas such as Dubai, Hong Kong or Italy. On the contrary, gold can be transferred from overseas to YLG customers as well.</p>
                </div>
                <div className="courses-offered-style1__inner">
                    <div className="courses-offered-style1__tab">

                        {/* <div className="courses-offered-style1__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${activeTab === "beginners" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("beginners")}>
                                    <h3>Beginners</h3>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "advanced" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("advanced")}>
                                    <h3>Advanced</h3>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                            </ul>
                        </div> */}

                        <div className="tabs-content-box">
                            {activeTab === "beginners" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="beginners">
                                <div className="courses-offered-style1-tab-content-box-item">

                                    <div className="tab-single-courses-offered-style1">
                                        <div className="row">
                                            
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <Link href={"/service/1"}>
                                                            <div className="inner">
                                                                <Image src="/assets/images/resources/courses-offered-v1-1.webp" alt="Image" width={255} height={190} priority />
                                                                {/* <div className="overlay-icon" style={{display: "none"}}>
                                                                    <VideoModal/>
                                                                </div> */}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <Link href="/service/1">Exchange Rate</Link>
                                                        </h3>
                                                    </div>
                                                    {/* <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>8 Lectures _ 2h 15 Mins Duration</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-2.webp" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Money Tranfer</a>
                                                        </h3>
                                                    </div>
                                                    {/* <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>5 Lectures _ 1h 26 Mins Duration</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "advanced" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="advanced">
                                <div className="courses-offered-style1-tab-content-box-item">
                                    <div className="tab-single-courses-offered-style1">
                                        <div className="row">
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-1.jpg" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Strategies for Successful Day Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>8 Lectures _ 2h 15 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-2.jpg" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Mastering the Basics of Forex Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>5 Lectures _ 1h 26 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-3.jpg" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Navigating Forex Trading for Beginners</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>4 Lectures _ 1h 30 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-4.jpg" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Navigating Forex Trading for Beginners</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>4 Lectures _ 1h 30 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-5.jpg" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Strategies for Successful Day Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>8 Lectures _ 2h 15 Mins Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="single-courses-offered-style1">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <Image src="/assets/images/resources/courses-offered-v1-6.jpg" alt="Image" width={255} height={190} priority />
                                                            <div className="overlay-icon" style={{display: "none"}}>
                                                                <VideoModal/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3>
                                                            <a href="#">Mastering the Basics of Forex Trading</a>
                                                        </h3>
                                                    </div>
                                                    <div className="bottom-box">
                                                        <div className="icon">
                                                            <i className="icon-read-1"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>5 Lectures _ 1h 26 Mins Duration</p>
                                                        </div>
                                                    </div>
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