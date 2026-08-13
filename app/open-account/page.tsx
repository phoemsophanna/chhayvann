"use client";

import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { api } from "../config";
import { useTranslation } from "react-i18next";
import Popup from "@/components/elements/Popup";
export default function Account_Open_One() {
    const {t, i18n} = useTranslation();
    const [banner, setBanner] = useState<any>(null);
    const [individual, setIndividual] = useState<any>(null);
    const [captchaToken, setCaptchaToken] = useState<any>("");
    const [privacy, setPrivacy] = useState<any>([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/individual-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                setIndividual(res.data.individual);
                setBanner(res.data.pageBanner);
            }
        });
    },[i18n.language]);

    const submitOpenAccountForm = (e:any) => {
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("captcha", captchaToken);
        formData.append("privacy", JSON.stringify(privacy));
        if(captchaToken) {
            axios.post(`${api.BASE_URL}/submit-account-individual`,formData,{
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                if(res.data.status == "success") {
                    setActive(true);
                    form.reset();
                }
            });
        }
    }

    const checkPrivacy = (event: any) => {
        if(event?.checked) {
            const findPrivacy = privacy.some((q:any) => q == event?.dataset?.value);
            if(!findPrivacy){
                setPrivacy([...privacy,event?.dataset?.value]);
            }
        } else {
            const findPrivacy = privacy.filter((q:any) => q != event?.dataset?.value);
            if(findPrivacy){
                setPrivacy(findPrivacy);
            }
        }
    }

    if(!individual) return null;

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={individual?.title} breadcrumbImage={banner?.image}>
                <section className="submit-form open-account-form" style={{padding: "80px 0 80px",backgroundColor: "#fff"}}>
                    <div className="container">
                        <div className="sec-title withtext text-center" style={{paddingBottom: 30}}>
                            <h2>{individual?.title}</h2>
                            <div className="text">
                                <p>
                                    {individual?.summary}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-form open-account submit-cv-form">
                                    <form id="contact-form" onSubmit={(e:any) => {
                                        e.preventDefault();
                                        submitOpenAccountForm(e);
                                    }} className="default-form2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group mb-3">
                                                    <div className="input-box">
                                                        <label htmlFor="" className="form-label" style={{lineHeight: 1}}>First Name
                                                            <span className="text-danger"> *</span>
                                                        </label>
                                                        <input
                                                        type="text"
                                                        name="firstname"
                                                        required
                                                        placeholder="First Name"
                                                        className="mb-3"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group mb-3">
                                                    <div className="input-box">
                                                        <label htmlFor="" className="form-label" style={{lineHeight: 1}}>Last Name
                                                            <span className="text-danger"> *</span>
                                                        </label>
                                                        <input type="text" name="lastname" id="formPhone"
                                                            placeholder="Last Name" required className="mb-3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group mb-3">
                                                    <div className="input-box">
                                                        <label htmlFor="" className="form-label" style={{lineHeight: 1}}>Phone
                                                            <span className="text-danger"> *</span>
                                                        </label>
                                                        <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        required
                                                        placeholder="Phone Number"
                                                        className="mb-3"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group mb-3">
                                                    <div className="input-box">
                                                        <label htmlFor="" className="form-label" style={{lineHeight: 1}}>Email
                                                        </label>
                                                        <input type="email" name="email" id="formSubject"
                                                            placeholder="Email Address" className="mb-3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {
                                                individual?.privacy.map((q:any,i:any) => (
                                                    <div className="col-xl-12 col-lg-12" key={i}>
                                                        <div className="form-group">
                                                            <div className="input-box" style={{display: "flex", gap: 15}}>
                                                                <input type="checkbox" style={{
                                                                    width: 20,
                                                                    height: 20,
                                                                    flex: "3%"
                                                                }} name="" required onChange={(event) => checkPrivacy(event.target)} data-value={q?.title} id={`permission-${i}`} />
                                                                <label htmlFor={`permission-${i}`} style={{lineHeight: 1.3,flex: "97%"}}>
                                                                    {i18n.language == "KHM" && q?.titleKm ? q?.titleKm : q?.title}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className="col-12">
                                                <div className="row" style={{alignItems: "center"}}>
                                                    <div className="col-md-6">
                                                        <div className="button-box" style={{textAlign: "left"}}>
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
                                                                    <span className="txt">{t("RequestApplication")}</span>
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
            <Popup active={active} setActive={setActive} title={`Save open Account Individual is successfully!`} />
        </div>
    )
}
