
"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "@/app/config";
import axios from "axios";
import Popup from "@/components/elements/Popup";

export default function Courses_Page() {
    const { slug } = useParams();
    const {t, i18n} = useTranslation();
    const [banner, setBanner] = useState<any>(null);
    const [career, setCareer] = useState<any>(null);
    const [captchaToken, setCaptchaToken] = useState<any>("");
    const [file, setFile] = useState<any>("");
    const [active, setActive] = useState(false);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/career-detail/${slug}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setBanner(res.data.banner);
                setCareer(res.data.career);
            }
        });
    },[i18n.language]);

    const submitCareerForm = (e:any) => {
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("captcha", captchaToken);
        formData.append("careerId", String(slug));
        if(captchaToken && file) {
            axios.post(`${api.BASE_URL}/career-apply`,formData,{
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept-Language": i18n.language
                }
            }).then((res) => {
                if(res.data.status == "success") {
                    setActive(true);
                    form.reset();
                }
            });
        }
    }

    const handleChangeFile = (e:any) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFile(e.target.files?.[0]?.name);
        const url = URL.createObjectURL(file);
        console.log(url);
    }

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={career?.title} breadcrumbImage={banner?.image}>
                <section className="quick-career-style1 detail-career">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 sec-title withtext text-start">
                                <Link href="/career" style={{display: "inline-block", marginBottom: "20px", color: "#684d07"}}>
                                    <i className="fas fa-arrow-left"></i> {t("BackToAllJob")}
                                </Link>
                                <h2>{career?.title}</h2>
                                <div className="text">
                                    <p style={{marginBottom: "5px"}}>
                                        {career?.location}
                                    </p>
                                    <p>
                                        <b>{t("ApplicationDeadline")}</b> {career?.deadline}
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="sec-title sub-title withtext text-start" style={{paddingTop: 30, borderTop: "1px solid #eaeaea"}}>
                                    <h2>{t("JOBDESCRIPTION")}</h2>
                                    <div className="text">
                                        <div dangerouslySetInnerHTML={{__html: career?.des}} />
                                    </div>
                                </div>

                                <div className="sec-title sub-title withtext text-start">
                                    <h2>{t("JOBREQUIREMENT")}</h2>
                                    <div className="text">
                                        <div dangerouslySetInnerHTML={{__html: career?.content}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="submit-form" style={{padding: "0 0 80px",backgroundColor: "#fff"}}>
                    <div className="container">
                        <div className="sec-title text-start" style={{paddingBottom: 30}}>
                            <h2>{t("SendUsaMessageAnytime")}</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-form submit-cv-form">
                                    <form id="contact-form" onSubmit={(e) => {
                                        e.preventDefault();
                                        submitCareerForm(e);
                                    }} className="default-form2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                            type="text"
                                                            name="firstname"
                                                            required
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="lastname" id="formPhone"
                                                            placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        required
                                                        placeholder="Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="email" name="email" id="formSubject"
                                                            placeholder="Email Address" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <label htmlFor="fileCV" className="fileCV"><i className="fas fa-upload"></i> Upload your CV</label><span style={{marginLeft: "10px"}}>Max file size 10MB.</span>
                                                        <input type="file" onChange={(e) => handleChangeFile(e)} style={{visibility: "hidden", position: "absolute"}} name="fileCV" id="fileCV"
                                                            placeholder="Email Address" accept=".pdf" />
                                                        
                                                    </div>
                                                    {
                                                        file && (
                                                            <div className="input-box mt-2">
                                                                <img src="/assets/images/google-docs.png" alt="" width={35} /> {file} 
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <textarea
                                                        name="message"
                                                        required
                                                        rows={4}
                                                        placeholder="Why do you want to work with us?"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row" style={{alignItems: "centers"}}>
                                                    <div className="col-md-6">
                                                        <div className="button-box text-start">
                                                            <ReCAPTCHA
                                                                sitekey="6LdboZkpAAAAAEvN_JobJlaphv_g3oGY399KoJO3"
                                                                onChange={(token) => setCaptchaToken(token)}
                                                                onExpired={() => setCaptchaToken(null)}
                                                            />
                                                            {!captchaToken && <div className="text-danger">Please verify that you are not a robot.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="button-box text-md-end text-start">
                                                            <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                                type="hidden" />
                                                            <div className="btn-box">
                                                                <button className="btn-one" type="submit"
                                                                    data-loading-text="Please wait...">
                                                                    <span className="txt">{t("SubmitApplication")}</span>
                                                                    <i className="icon-right-arrow"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            <Popup active={active} setActive={setActive} title={"Save Application"} des={"Sending career application is ready!"} />
        </div>
    )
}
