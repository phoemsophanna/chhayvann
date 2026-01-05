"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Form Request Individual Account">
                <section className="submit-form open-account-form" style={{padding: "80px 0 80px",backgroundColor: "#fff"}}>
                    <div className="container">
                        <div className="sec-title withtext text-center" style={{paddingBottom: 30}}>
                            <h2>Form Request Individual Account</h2>
                            <div className="text">
                                <p style={{fontSize: 18, fontWeight: 500}}>
                                    To Request for a Corporate Account Type <Link href="/corporate">Click</Link>
                                </p>
                            </div>
                            <div className="text">
                                <p>
                                    At Chhayvann,  we believe ourselves well placed to capture opportunities ahead. We are also strengthening our franchise in the country and fortify our 
                                    position as Cambodia’s safest bank.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-form open-account submit-cv-form">
                                    <form id="contact-form" className="default-form2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        placeholder="First Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="form_phone" id="formPhone"
                                                            placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="form_subject" id="formSubject"
                                                            placeholder="Email Address" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input
                                                        type="date"
                                                        name="date"
                                                        required
                                                        placeholder="Date of Birth"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="form_subject" id="formSubject"
                                                            placeholder="NID Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <label htmlFor="fileFront" className="fileCV"><i className="fas fa-upload"></i> Upload Front ID or Passport</label><span style={{marginLeft: "10px"}}>Max size 10MB.</span>
                                                        <input type="file" onChange={handleFrontChange} style={{visibility: "hidden", position: "absolute"}} name="form_subject" id="fileFront"
                                                            placeholder="Email Address" />
                                                    </div>
                                                    {front && <>
                                                        <div style={{position: "relative"}}>
                                                            <img src={front} alt="" style={{marginTop: 15,borderRadius: 15}} />
                                                            <i className="fa fa-times-circle" 
                                                                onClick={removeFrontChange}
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
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <label htmlFor="fileBack" className="fileCV"><i className="fas fa-upload"></i> Upload Back ID or Passport</label><span style={{marginLeft: "10px"}}>Max size 10MB.</span>
                                                        <input type="file" onChange={handleBackChange} style={{visibility: "hidden", position: "absolute"}} name="form_subject" id="fileBack"
                                                            placeholder="Email Address" />
                                                    </div>
                                                    {back && <>
                                                        <div style={{position: "relative"}}>
                                                            <img src={front} alt="" style={{marginTop: 15,borderRadius: 15}} />
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
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-box" style={{display: "flex", gap: 15}}>
                                                        <input type="checkbox" style={{
                                                            width: 20,
                                                            height: 20,
                                                            flex: "3%"
                                                        }} name="" id="permission" />
                                                        <label htmlFor="permission" style={{lineHeight: 1.3,flex: "97%"}}>
                                                            Allow to give the permission to use the information for the purpose of opening the account. Your Data will be kept confidential and will not be shared with any third party.
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-box" style={{display: "flex", gap: 15}}>
                                                        <input type="checkbox" style={{
                                                            width: 20,
                                                            height: 20,
                                                            flex: "3%"
                                                        }} name="" id="permission" />
                                                        <label htmlFor="permission" style={{lineHeight: 1.3,flex: "97%"}}>
                                                            Confirm that the provided information are accurate and authentic.
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row" style={{alignItems: "center"}}>
                                                    <div className="col-md-6">
                                                        <div className="button-box">
                                                            <ReCAPTCHA
                                                                sitekey="6LdboZkpAAAAAEvN_JobJlaphv_g3oGY399KoJO3"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="button-box text-md-end text-start">
                                                            <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                                type="hidden" />
                                                            <div className="btn-box">
                                                                <button className="btn-one" type="submit"
                                                                    data-loading-text="Please wait...">
                                                                    <span className="txt">Request Application</span>
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
        </div>
    )
}
