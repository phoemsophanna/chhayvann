"use client";

import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { api } from "../config";
import { useTranslation } from "react-i18next";
import Popup from "@/components/elements/Popup";
export default function Home_One() {
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const handleFrontChange = (e:any) => {
        setFront(URL.createObjectURL(e.target.files[0]));
    }

    const handleBackChange = (e:any) => {
        setBack(URL.createObjectURL(e.target.files[0]));
    }

    const removeFrontChange = () => {
        setFront("");
    }

    const removeBackChange = () => {
        setBack("");
    }

    const {t, i18n} = useTranslation();
    const [banner, setBanner] = useState<any>(null);
    const [corparate, setCorparate] = useState<any>(null);
    const [captchaToken, setCaptchaToken] = useState<any>("");
    const [privacy, setPrivacy] = useState<any>([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/corparate-page`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success"){
                console.log(res.data);
                setCorparate(res.data.corparate);
            }
        });
    },[i18n.language]);

    const submitOpenAccountForm = (e:any) => {
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("captcha", captchaToken);
        formData.append("privacy", JSON.stringify(privacy));
        if(captchaToken && back) {
            axios.post(`${api.BASE_URL}/submit-account-corporate`,formData,{
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                if(res.data.status == "success") {
                    setActive(true);
                    setBack("");
                    setFront("");
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

    if(!corparate) return null;

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Form Request Individual Account">
                <section className="submit-form open-account-form" style={{padding: "80px 0 80px",backgroundColor: "#fff"}}>
                    <div className="container">
                        <div className="sec-title withtext text-center" style={{paddingBottom: 30}}>
                            <h2>{corparate?.title}</h2>
                            <div className="text">
                                <p style={{fontSize: 18, fontWeight: 500}}>
                                    {corparate?.subtitle} <Link href="/individual">{t("Click")}</Link>
                                </p>
                            </div>
                            <div className="text">
                                <p>
                                    {corparate?.summary}
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
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            required
                                                            placeholder="Company Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                            type="text"
                                                            name="certNumber"
                                                            required
                                                            placeholder="Certificate of Incorporation Number"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="contactName" required id="formPhone"
                                                            placeholder="Contact Name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                        type="text"
                                                        name="phone"
                                                        required
                                                        placeholder="Contact Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                            </div>                                            

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="email" id="formSubject"
                                                            placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-8">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <label htmlFor="fileBack" className="fileCV"><i className="fas fa-upload"></i> Attached Certificate of Incorporation</label><span style={{marginLeft: "10px"}}>Max size 10MB.</span>
                                                        <input type="file" onChange={handleBackChange} style={{visibility: "hidden", position: "absolute"}} name="certFile" id="fileBack"
                                                            placeholder="Email Address" />
                                                        {!back && <div className="text-danger">Please Upload Front ID Card.</div>}
                                                    </div>
                                                    {back && <>
                                                        <div style={{position: "relative"}}>
                                                            <img src={back} alt="" style={{marginTop: 15,borderRadius: 15}} />
                                                            <i className="fa fa-times-circle" 
                                                                onClick={removeBackChange}
                                                                style={{
                                                                    position: "absolute", 
                                                                    right: 10, 
                                                                    top: 25,
                                                                    color: "#fff",
                                                                    background: "red",
                                                                    height: 25,
                                                                    width: 25,
                                                                    textAlign: "center",
                                                                    lineHeight: "1.4",
                                                                    borderRadius: "100%",
                                                                    cursor: "pointer",
                                                                }}
                                                            ></i>
                                                        </div>
                                                    </> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {
                                                corparate?.privacy.map((q:any,i:any) => (
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
                                                        <div className="button-box">
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
            <Popup active={active} setActive={setActive} title={`Save Corporate Account is successfully!`} />
        </div>
    )
}
