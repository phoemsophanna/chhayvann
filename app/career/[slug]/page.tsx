
"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const data = [
    {
        slug: 1,
        name: "Card Dispute Resolution Officer",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2023"
    },
    {
        slug: 2,
        name: "Consumer Credit Analyst",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2023"
    },
    {
        slug: 3,
        name: "Senior Product Marketing Executive",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2023"
    },
    {
        slug: 4,
        name: "Chief Teller (Stung Treng)",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2023"
    },
];

interface Career {
    slug: any,
    name: any,
    position: any,
    dateline: any
}

export default function Courses_Page() {
    const { slug } = useParams();
    const [ career, setCareer ] = useState<Career>();
    useEffect(() => {
        setCareer(data.find((q) => Number(q.slug) == Number(slug)));
    },[slug]);

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Careers Details">
                <section className="quick-career-style1 detail-career">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 sec-title withtext text-start">
                                <Link href="/career" style={{display: "inline-block", marginBottom: "20px", color: "#684d07"}}>
                                    <i className="fas fa-arrow-left"></i> Back to all job
                                </Link>
                                <h2>{career?.name}</h2>
                                <div className="text">
                                    <p style={{marginBottom: "5px"}}>
                                        {career?.position}
                                    </p>
                                    <p>
                                        <b>Application deadline</b> {career?.dateline}
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="sec-title sub-title withtext text-start" style={{paddingTop: 30, borderTop: "1px solid #eaeaea"}}>
                                    <h2>POSITION DESCRIPTION</h2>
                                    <div className="text">
                                        <p>
                                            Card Dispute Resolution Officer is to monitor daily suspicious declines 
                                            and approve transactions on both the issuing and acquiring sides by calling 
                                            to inform/verify with the cardholder/merchant in order to reduce declines 
                                            occurring and prevent cardholder/bank financial losses.
                                        </p>
                                    </div>
                                </div>

                                <div className="sec-title sub-title withtext text-start">
                                    <h2 >DUTY & RESPONSIBILITY</h2>
                                    <div className="text">
                                        <ul role="list">
                                            <li>
                                                To monitor transactions on both the issuing and acquiring sides (Visa/UPI Debit Card, Visa/Master Credit Card, ATM/CSS Card, Merchant POS, Merchant E-Commerce, and ATM).
                                            </li>
                                            <li>
                                                Monitor/review suspicious account/transaction activity on QR payments, WeChat payments, POS payments, e-commerce payments, and ATM.
                                            </li>
                                            <li>
                                                Monitor/review the offline transactions and investigation/confirmation with the cardholder.
                                            </li>
                                            <li>
                                                Call cardholders/merchants to collect relevant information and verify transactions in case they are suspicious.
                                            </li>
                                            <li>
                                                Block cards/funds in case the transactions are suspicious.
                                            </li>
                                            <li>
                                                Follow up on the previous suspicious transactions.
                                            </li>
                                            <li>
                                                To support call-in/email inquiries from the cardholder/merchant/branch and provide a solution if needed.
                                            </li>
                                            <li>
                                                To understand the workflow in the department.
                                            </li>
                                            <li>
                                                To understand the Rule of Chargeback/Dispute on Card Scheme (Visa/Master/UPl/CSS).
                                            </li>
                                            <li>
                                                To properly update the report to the supervisor and perform other duties as assigned by the manager.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sec-title withtext text-start">
                                    <div className="text">
                                        <p><b>How to apply</b></p>
                                        <p>Interested and qualified applicants should submit your updated Cover Letter and CV stating the position applied for with your current photo (4x6) through
                                            <Link href={`mailto:info@chayvann.com.kh`} style={{color: "#684d07"}}> info@chayvann.com.kh</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="submit-form" style={{padding: "0 0 80px",backgroundColor: "#fff"}}>
                    <div className="container">
                        <div className="sec-title text-start" style={{paddingBottom: 30}}>
                            <h2>Send Us a Message Anytime</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-form submit-cv-form">
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
                                                        <label htmlFor="fileCV" className="fileCV"><i className="fas fa-upload"></i> Upload your CV</label><span style={{marginLeft: "10px"}}>Max file size 10MB.</span>
                                                        <input type="file" style={{visibility: "hidden", position: "absolute"}} name="form_subject" id="fileCV"
                                                            placeholder="Email Address" />
                                                    </div>
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
                                                                    <span className="txt">Submit Application</span>
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
