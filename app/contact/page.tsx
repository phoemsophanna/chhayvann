"use client";
import ContactForm from "@/components/elements/ContactForm";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../config";
import Popup from "@/components/elements/Popup";


export default function Courses_Page() {
    const { t, i18n } = useTranslation();
    const [contact, setContact] = useState<any>(null);
    const [banner, setBanner] = useState<any>(null);
    const [active, setActive] = useState<any>(false);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/contact-us-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setBanner(res.data.pageBanner);
                setContact(res.data.contact);
            }
        });
    },[i18n.language]);

    if(!contact) return null;

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.ContactUs")} breadcrumbImage={banner?.image}>
                <section className="quick-contact-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="quick-contact-style1__content">
                                    <img src={`${api.FILE_URL}${contact?.thumbnail}`} alt="" style={{borderRadius: 20}} />
                                </div>
                            </div>
                    
                            <div className="col-xl-6 col-lg-6">
                                <div className="quick-contact-style1-info">
                                    <div className="inner-title">
                                        <h3>{t("ContactInfo")}</h3>
                                    </div>
                                    <div className="list-item">
                                        <ul>
                                            {
                                                contact?.phoneNumber?.length > 0 ? (
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-phone-vibration"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span><span className="path7"></span><span
                                                                    className="path8"></span><span className="path9"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{t("Phone")}</h4>
                                                            {
                                                                contact?.phoneNumber?.map((q:any,i:any) => {
                                                                    return <p key={i}><Link href={`tel:${q?.number}`}>{q?.number}</Link></p>;
                                                                })
                                                            }
                                                        </div>
                                                    </li>
                                                ) : ""
                                            }
                                            {
                                                contact?.email1 || contact?.email2 ? (
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-read"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{t("Email")}</h4>
                                                            {
                                                                contact?.email1 ? (
                                                                    <p><Link href={`mailto:${contact?.email1}`}>{contact?.email1}</Link></p>
                                                                ) : ""
                                                            }

                                                            {
                                                                contact?.email2 ? (
                                                                    <p><Link href={`mailto:${contact?.email2}`}>{contact?.email2}</Link></p>
                                                                ) : ""
                                                            }
                                                        </div>
                                                    </li>
                                                ) : ""
                                            }
                                            {
                                                contact?.email1 || contact?.email2 ? (
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-alarm-clock"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span><span className="path7"></span><span
                                                                    className="path8"></span><span className="path9"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{t("OfficeHours")}</h4>
                                                            {
                                                                contact?.working1 ? (
                                                                    <p>{contact?.working1}</p>
                                                                ) : ""
                                                            }

                                                            {
                                                                contact?.working2 ? (
                                                                    <p>{contact?.working2}</p>
                                                                ) : ""
                                                            }
                                                        </div>
                                                    </li>
                                                ) : ""
                                            }
                                            {
                                                contact?.address ? (
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-map"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{t("Address")}</h4>
                                                            <p>{contact?.address}</p>
                                                        </div>
                                                    </li>
                                                ) : ""
                                            }
                                            <li>
                                                <div className="quick-contact-style1__content">
                                                    <div className="social-link">
                                                        <h4>{t("GetSocial")}</h4>
                                                        <ul>
                                                            {
                                                                contact?.facebookLink ? (
                                                                    <li>
                                                                        <Link href={contact?.facebookLink} target="_blank">
                                                                            <i className="icon-facebook"></i>
                                                                        </Link>
                                                                    </li>
                                                                ) : ""
                                                            }
                                                            <li>
                                                                <Link href={contact?.telegramLink} target="_blank">
                                                                    <i className="icon-telegram-1"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href={contact?.instagramLink} target="_blank">
                                                                    <i className="fab fa-instagram"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href={contact?.youtube} target="_blank">
                                                                    <i className="fab fa-youtube"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="main-contact-form">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>{contact?.subtitle}</h4>
                            </div>
                            <h2>{contact?.title}</h2>
                        </div>
                        <div className="row">
                            
                            <div className="col-xl-12">
                                <div className="contact-form">
                                    <ContactForm setActive={setActive} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="embedMap" dangerouslySetInnerHTML={{__html: contact?.embedMap}} />
            </Layout>
            <Popup active={active} setActive={setActive} title={contact?.titlePopup} des={contact?.summaryPopup} />
        </div>
    )
}
