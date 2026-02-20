
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { useAppStore } from "@/store/useAppStore";
import { api } from "@/app/config";
import { useTranslation } from "react-i18next";

export default function Footer3() {
    const [dropdown, setDropdown] = useState(0);
    const { general, contact } = useAppStore();
    const { t, i18n } = useTranslation();
    // console.log(contact);
    return (
        <>
            <footer className="footer-style3">
                <div className="footer-main-style3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget wow fadeInUp" data-wow-duration="1200ms"
                                    data-wow-delay="000ms">
                                        <div className="single-footer-widget-style3__bg"
                                        style={{ backgroundImage: "url(/assets/images/shapes/footer-v3-single-bg.jpg)" }}>
                                    </div>
                                    <div className="single-footer-widget-contact">
                                        <div className="footer-logo-style1">
                                            <Link href="/">
                                                <Image src={`${general?.logo_footer ? api.FILE_URL + general?.logo_footer : "/assets/images/Chhayvann-png.png"}`} alt="Logo" width={90} height={27} priority />
                                            </Link>
                                        </div>
                                        <div className="text-box">
                                            <p>
                                                {general?.summary}
                                            </p>
                                        </div>
                                        <div className="your-trading">
                                            <div className="title1">
                                                <h3>{t("BeginYourTrading")}</h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="/individual"
                                                    className="btn-one">
                                                    <span className="txt">
                                                        {t("HEADER.OpenIndividualAccount")}
                                                        <i className="icon-right-arrow"></i>
                                                    </span>
                                                </Link>
                                                <Link href="/corporate"
                                                    className="btn-one">
                                                    <span className="txt">
                                                        {t("HEADER.OpenCorporateAccount")}
                                                        <i className="icon-right-arrow"></i>
                                                    </span>
                                                </Link>
                                                <Link href="https://onlinetrade.chhayvann.com.kh/" target="_blank"
                                                    className="btn-one">
                                                    <span className="txt">
                                                        {t("SignIn")}
                                                        <i className="icon-right-arrow"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style3 plr30 wow fadeInDown" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="title">
                                        <h3 onClick={() => {
                                            if(dropdown != 1){
                                                setDropdown(1)
                                            } else {
                                                setDropdown(0);
                                            }
                                        }}>{t("HEADER.Company")} <span className={`fa fa-angle-right ${dropdown == 1 ? "active" : ""}`}></span></h3>
                                    </div>
                                    <div className={`footer-widget-links-style3 ${dropdown == 1 ? "active" : ""}`}>
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="/about">
                                                    {t("HEADER.AboutUs")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    {t("HEADER.Services")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products">
                                                    {t("HEADER.Products")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/trading">
                                                    {t("HEADER.Trading")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={general?.OnlineTrading ? general?.OnlineTrading : "https://onlinetrade.chhayvann.com.kh/"} target="_blank">
                                                    {t("HEADER.OnlineTrading")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            {
                                                general?.article > 0 ? (
                                                    <li>
                                                        <Link href="/blog-1">
                                                            {t("HEADER.NewsResearch")}
                                                            <i className="icon-right-arrow"></i>
                                                        </Link>
                                                    </li>
                                                ) : ""
                                            }
                                            <li>
                                                <Link href="/history">
                                                    {t("HEADER.History")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    {t("FAQ")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/career">
                                                    {t("HEADER.Career")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    {t("HEADER.ContactUs")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy">
                                                    {t("PrivacyPolicy")}
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style3 ml20 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="single-footer-widget-style3__bg last-footer style2"
                                        style={{ backgroundImage: "url(/assets/images/shapes/footer-v3-single-bg.jpg)" }}
                                    >
                                    </div>
                                    <div className="title title1">
                                        <h3 onClick={() => {
                                            if(dropdown != 2){
                                                setDropdown(2)
                                            } else {
                                                setDropdown(0);
                                            }
                                        }}>{t("Information")} <span className={`fa fa-angle-right ${dropdown == 2 ? "active" : ""}`}></span></h3>
                                    </div>
                                    <ul className={`single-footer-widget-style3-post clearfix ${dropdown == 2 ? "active" : ""}`}>
                                        {
                                            contact?.phoneNumber ? (
                                                <>
                                                    {
                                                        contact?.phoneNumber.map((q:any,i:any) => (
                                                            <li key={i}>
                                                                {t("Phone")}: {q?.number}
                                                            </li>
                                                        ))
                                                    }
                                                </>
                                            ) : ""
                                        }
                                        {
                                            contact?.email1 ? (
                                                <li>
                                                    {t("Email")}: {contact?.email1}
                                                </li>
                                            ) : ""
                                        }
                                        <li>
                                            {t("Address")}: {contact?.address}
                                        </li>
                                        <li>
                                            {t("FollowUs")}:
                                            <ul className="social-container">
                                                {
                                                    contact?.facebookLink ? (
                                                        <li className="facebook-icon">
                                                            <a href={contact?.facebookLink} target="_blank">
                                                                <i className="icon-facebook"></i>
                                                            </a>
                                                        </li>
                                                    ) : ""
                                                }
                                                {
                                                    contact?.telegramLink ? (
                                                        <li className="telegram-icon">
                                                            <a href={contact?.telegramLink} target="_blank">
                                                                <i className="icon-telegram-1"></i>
                                                            </a>
                                                        </li>
                                                    ) : ""
                                                }
                                                {
                                                    contact?.instagramLink ? (
                                                        <li className="instagram-icon">
                                                            <a href={contact?.instagramLink} target="_blank">
                                                                <i className="fab fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                    ) : ""
                                                }
                                                {
                                                    contact?.youtube ? (
                                                        <li className="youtube-icon">
                                                            <a href={contact?.youtube} target="_blank">
                                                                <i className="fab fa-youtube"></i>
                                                            </a>
                                                        </li>
                                                    ) : ""
                                                }
                                                {
                                                    contact?.line ? (
                                                        <li className="line-icon">
                                                            <a href={contact?.line} target="_blank">
                                                                <i className="fab fa-line"></i>
                                                            </a>
                                                        </li>
                                                    ) : ""
                                                }
                                                {
                                                    contact?.whatsapp ? (
                                                        <li className="whatsapp-icon">
                                                            <a href={contact?.whatsapp} target="_blank">
                                                                <i className="fab fa-whatsapp"></i>
                                                            </a>
                                                        </li>
                                                    ) : ""
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                

                <div className="footer-bottom-style3">
                    <div className="container">
                        <div className="bottom-inner-style3">
                            <div className="copyright-text-style3 wow fadeInLeft" data-wow-duration="1500ms"
                                data-wow-delay="000ms">
                                <p>
                                    Copyrights © {new Date().getFullYear()} <Link href="/">Chhayvann. </Link> All rights reserved.
                                </p>
                            </div>
                            <div className="payment-methods wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="text">
                                    <p>Designed By: <a href="https://camgotech.com/" target="_blank">www.camgotech.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
