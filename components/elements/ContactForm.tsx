"use client";

import { api } from "@/app/config";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

export default function ContactForm({setActive}:any) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    token: ""
  });
  const { t, i18n } = useTranslation();
  const [captchaToken, setCaptchaToken] = useState<any>("");
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    if(captchaToken) {
        try {
          const res = await fetch(`${api.BASE_URL}/sending-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (res.ok) {
            setStatus("success");
            setFormData({ 
                firstname: "",
                lastname: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
                token: "" 
            });
            setActive(true);
          } else {
            setStatus("error");
          }
        } catch (err) {
          console.error(err);
          setStatus("error");
        }
    }
  };

  return (

  <form id="contact-form" onSubmit={handleSubmit} className="default-form2">
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input
                    type="text"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    />
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input
                    type="text"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    />
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input type="text" name="phone" value={formData.phone} id="phone"
                        placeholder="Phone number" onChange={handleChange} />
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    />
                </div>
            </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="form-group">
                <div className="input-box">
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} id="formSubject"
                        placeholder="Subject" />
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message goes here"
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
    {status === "loading" && <p>Sending...</p>}
      {status === "success" && <p>Message sent successfully ✅</p>}
      {status === "error" && <p>Something went wrong ❌</p>}
  </form>
  );
}
