"use client";

import Layout from "@/components/layout/Layout";
import CoursesDetails from "@/components/sections/InnerPage/CourseDetails";
import Image from "next/image";
import Link from "next/link";
import VideoModal from "@/components/elements/VideoPopup";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Courses_Details_Page() {
    const [activeTab, setActiveTab] = useState("popular");
    const { slug } = useParams();
    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={Number(slug) == 1 ? "Exchange Rate" : "Money Tranfer"} breadcrumbTitleTwo="Services">
                {
                    Number(slug) == 1 ? 
                        <>
                        <section className="currency-pairs-style1">
                            <div className="container">
                                <div className="sec-title withtext text-center">
                                    <h2>Most Popular Currency</h2>
                                    <div className="text">
                                        <p>Discover the most competitive prices in the market, updated <br />regularly for your
                                            advantage.</p>
                                    </div>
                                </div>

                                <div className="currency-pairs-style1__inner">

                                    <div className="currency-pairs-style1__tab">
                                        {/* <div className="currency-pairs-style1__tab-btn">
                                            <ul className="tabs-button-box clearfix">
                                                <li className={`tab-btn-item ${activeTab === "popular" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("popular")}>
                                                    <h3>Popular</h3>
                                                    <div className="icon">
                                                        <i className="icon-arrow-down"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "majors" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("majors")}>
                                                    <h3>Majors</h3>
                                                    <div className="icon">
                                                        <i className="icon-arrow-down"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "minors" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("minors")}>
                                                    <h3>Minors</h3>
                                                    <div className="icon">
                                                        <i className="icon-arrow-down"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="search-box">
                                                <form className="search-form" action="#">
                                                    <input placeholder="Search the instruments..." type="text" />
                                                    <button type="submit">
                                                        <i className="icon-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div> */}

                                        <div className="tabs-content-box">

                                            {activeTab === "popular" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="popular">
                                                <div className="currency-pairs-style1-tab-content-box-item">

                                                    <div className="single-currency-pairs-style1">
                                                        <div className="table-outer">
                                                            <table className="pricing-table">
                                                                <thead className="table-header">
                                                                    <tr>
                                                                        <th className="name">Instrument</th>
                                                                        <th style={{width: "30%"}}>Sell</th>
                                                                        <th style={{width: "30%"}}>Buy</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    
                                                                    <tr>
                                                                        <td>
                                                                            <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                <img src="/assets/images/dollar.webp" style={{width: 120, marginRight: 15}} alt="" />
                                                                                <h6>eur</h6>
                                                                                <div className="icon-box">
                                                                                    <i className="icon-exchange"></i>
                                                                                </div>
                                                                                <h6>usd</h6>
                                                                            </div>
                                                                        </td>

                                                                        <td className="sell">
                                                                            $1.06199
                                                                        </td>
                                                                        <td className="buy">
                                                                            $1.06185
                                                                        </td>
                                                                    </tr>
                                                                    

                                                                    <tr>
                                                                        <td>
                                                                            <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                <img src="/assets/images/riel.png" style={{width: 120, marginRight: 15}} alt="" />
                                                                                <h6>usd</h6>
                                                                                <div className="icon-box">
                                                                                    <i className="icon-exchange"></i>
                                                                                </div>
                                                                                <h6>riel</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td className="sell">
                                                                            ៛4080
                                                                        </td>
                                                                        <td className="buy">
                                                                            ៛4050
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>
                                                                            <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                <img src="/assets/images/aus.png" style={{width: 120, marginRight: 15}} alt="" />
                                                                                <h6>gbp</h6>
                                                                                <div className="icon-box">
                                                                                    <i className="icon-exchange"></i>
                                                                                </div>
                                                                                <h6>usd</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td className="sell">
                                                                            $0.65982
                                                                        </td>
                                                                        <td className="buy">
                                                                            $0.65994
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>
                                                                            <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                <img src="/assets/images/aus.png" style={{width: 120, marginRight: 15}} alt="" />
                                                                                <h6>aud</h6>
                                                                                <div className="icon-box">
                                                                                    <i className="icon-exchange"></i>
                                                                                </div>
                                                                                <h6>usd</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td className="sell">
                                                                            $0.89652
                                                                        </td>
                                                                        <td className="buy">
                                                                            $0.89665
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>
                                                                            <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                <img src="/assets/images/dong.png" style={{width: 120, marginRight: 15}} alt="" />
                                                                                <h6>eur</h6>
                                                                                <div className="icon-box">
                                                                                    <i className="icon-exchange"></i>
                                                                                </div>
                                                                                <h6>gbp</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td className="sell">
                                                                            $25.458
                                                                        </td>
                                                                        <td className="buy">
                                                                            $22.398
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>
                                                                            <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                <img src="/assets/images/dollar.webp" style={{width: 120, marginRight: 15}} alt="" />
                                                                                <h6>aud</h6>
                                                                                <div className="icon-box">
                                                                                    <i className="icon-exchange"></i>
                                                                                </div>
                                                                                <h6>cad</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td className="sell">
                                                                            $14.785
                                                                        </td>
                                                                        <td className="buy">
                                                                            $13.625
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
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
                        <section className="account-detail-style1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="account-detail-style1__content">
                                            <div className="intro-box">
                                                <p>Demoralized by the charms pleasure the moment blinded by desired that they cannot
                                                    foresee that pain and trouble that are bound to ensue equal blame belongs to those
                                                    who fail in their which is the same as saying through shrinking foresee the pain and
                                                    trouble idea of denouncings master-builder of human happiness no one rejects
                                                    dislikes or avoids.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        </>
                    : ""
                }
                {
                    Number(slug) == 2 ? 
                        <section className={`account-detail-style1 pt-80`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="account-detail-style1__content">
                                            <div className="intro-box">
                                                <div className="offers-box-img">
                                                    <Image src="/assets/images/resources/account-v1-4.webp" alt="Image" width={350} height={375} priority />
                                                </div>
                                                <h2>LBMA Gold 99.99%</h2>
                                                <p>Demoralized by the charms pleasure the moment blinded by desired that they cannot
                                                    foresee that pain and trouble that are bound to ensue equal blame belongs to those
                                                    who fail in their which is the same as saying through shrinking foresee the pain and
                                                    trouble idea of denouncings master-builder of human happiness no one rejects
                                                    dislikes or avoids.</p>
                                            </div>

                                            {/* <div className="offers-box">
                                                <div className="row">
                                                    
                                                    <div className="col-xl-6 col-lg-12 col-md-6">
                                                        <div className="offers-box-text">
                                                            <div className="offers-box-text-benefits-box">
                                                                <div className="icon">
                                                                    <span className="icon-checkmark-2"><span className="path1"></span><span
                                                                            className="path2"></span><span className="path3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                    <h3>Benefits</h3>
                                                                    <p>Trouble that are bound to ensue and equal blame desires to
                                                                        obtain.</p>
                                                                </div>
                                                                <div className="list-item">
                                                                    <ul>
                                                                        <li>
                                                                            <p>Lower Spreads</p>
                                                                        </li>
                                                                        <li>
                                                                            <p>Access to Major Markets</p>
                                                                        </li>
                                                                        <li>
                                                                            <p>Full Market Access</p>
                                                                        </li>
                                                                        <li>
                                                                            <p>Educational Resources</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="offers-box-text-benefits-box offers-box-text-trading-technology">
                                                                <div className="icon">
                                                                    <span className="icon-checkmark-2"><span className="path1"></span><span
                                                                            className="path2"></span><span className="path3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                    <h3>Trading Technology</h3>
                                                                    <p>
                                                                        Holds in these matters to this principle of selection rejects.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <div className="standard-account-info-box">
                                                <div className="title-box">
                                                    <h3>Standard Account Info</h3>
                                                    <p>Bound to ensue and equal blame belongs to those who fail in their,</p>
                                                </div>
                                                <div className="standard-account-info-box__inner">
                                                    <div className="row">

                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-standard-account-info-box">
                                                                <div className="left">
                                                                    <div className="icon">
                                                                        <span className="icon-right-arrow-2"><span
                                                                                className="path1"></span><span className="path2"></span>
                                                                        </span>
                                                                    </div>
                                                                    <p>Initial Deposit</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>$100</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-standard-account-info-box">
                                                                <div className="left">
                                                                    <div className="icon">
                                                                        <span className="icon-right-arrow-2"><span
                                                                                className="path1"></span><span className="path2"></span>
                                                                        </span>
                                                                    </div>
                                                                    <p>Leverage</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>Upto 1:3000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-standard-account-info-box">
                                                                <div className="left">
                                                                    <div className="icon">
                                                                        <span className="icon-right-arrow-2"><span
                                                                                className="path1"></span><span className="path2"></span>
                                                                        </span>
                                                                    </div>
                                                                    <p>Order Volume</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>0.01 - 500 lots</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-standard-account-info-box">
                                                                <div className="left">
                                                                    <div className="icon">
                                                                        <span className="icon-right-arrow-2"><span
                                                                                className="path1"></span><span className="path2"></span>
                                                                        </span>
                                                                    </div>
                                                                    <p>Spread</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>Fixed from 3 pis</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-standard-account-info-box">
                                                                <div className="left">
                                                                    <div className="icon">
                                                                        <span className="icon-right-arrow-2"><span
                                                                                className="path1"></span><span className="path2"></span>
                                                                        </span>
                                                                    </div>
                                                                    <p>24/7 Support</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>Yes</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-standard-account-info-box">
                                                                <div className="left">
                                                                    <div className="icon">
                                                                        <span className="icon-right-arrow-2"><span
                                                                                className="path1"></span><span className="path2"></span>
                                                                        </span>
                                                                    </div>
                                                                    <p>Multi Language CC</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>Yes</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div> */}


                                            {/* <div className="why-choose-us">
                                                <div className="title-box">
                                                    <h3>Why Choose Us</h3>
                                                    <p>Denounce with righteous indignation and dislike men who are so beguiled, </p>
                                                </div>
                                                <div className="why-choose-us__inner">
                                                    <div className="row">

                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-why-choose-us">
                                                                <div className="icon-box">
                                                                    <span className="icon-line-chart"><span className="path1"></span><span
                                                                            className="path2"></span><span className="path3"></span><span
                                                                            className="path4"></span><span className="path5"></span><span
                                                                            className="path6"></span><span className="path7"></span><span
                                                                            className="path8"></span><span className="path9"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                        <h3>No Commissions</h3>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                    <div className="text">
                                                                        <p>Foresee the pain & trouble that are bound to ensures all
                                                                            equal shrinking like best obligations.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-why-choose-us">
                                                                <div className="icon-box">
                                                                    <span className="icon-statistics"><span className="path1"></span><span
                                                                            className="path2"></span><span className="path3"></span><span
                                                                            className="path4"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                        <h3>Flexible Leverage</h3>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                    <div className="text">
                                                                        <p>Frequently occur that pleasures have to be repudiated
                                                                            annoyances accepted perfectly repudiated.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-why-choose-us">
                                                                <div className="icon-box">
                                                                    <span className="icon-deposit"><span className="path1"></span><span
                                                                            className="path2"></span><span className="path3"></span><span
                                                                            className="path4"></span><span className="path5"></span><span
                                                                            className="path6"></span><span className="path7"></span><span
                                                                            className="path8"></span><span className="path9"></span><span
                                                                            className="path10"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                        <h3>Low Minimum Deposit</h3>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                    <div className="text">
                                                                        <p>Obligation that business it will occurs pleasure to be
                                                                            repudiated business it will frequently.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                                            <div className="single-why-choose-us">
                                                                <div className="icon-box">
                                                                    <span className="icon-chat"><span className="path1"></span><span
                                                                            className="path2"></span><span className="path3"></span><span
                                                                            className="path4"></span><span className="path5"></span><span
                                                                            className="path6"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                        <h3>24/6 Support</h3>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                    <div className="text">
                                                                        <p>Complete account of the system and expounds the actual
                                                                            teachings great explorer of the truth. </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                    : ""
                }
            </Layout>
        </div>
    )
}
