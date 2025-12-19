
import ContactForm from "@/components/elements/ContactForm";
import Layout from "@/components/layout/Layout";
import Link from "next/link";


export default function Courses_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Contact Us">
                <section className="quick-contact-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="quick-contact-style1__content">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>Contact</h4>
                                        </div>
                                        <h2>Let&apos;s Talk, Experts Ready Help You</h2>
                                        <div className="text">
                                            <p>If you have any questions, need support, or would like more information about our services, please feel free to contact us. Our team is happy to assist you and will respond as soon as possible.</p>
                                            <p>You can reach us via phone, email, or by using the contact form on this website. We look forward to hearing from you.</p>
                                        </div>
                                    </div>
                                    <div className="social-link">
                                        <h4>Get Social</h4>
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com/">
                                                    <i className="icon-facebook"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.twitter.com/">
                                                    <i className="icon-telegram-1"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.youtube.com/">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/">
                                                    <i className="fab fa-youtube"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="faq-box">
                                        <div className="faq-box-inner">
                                            <div className="icon">
                                                <span className="icon-guide"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span><span className="path9"></span><span
                                                        className="path10"></span>
                                                </span>
                                            </div>
                                            <div className="text">
                                                <p>Answers to 100+ Questions.</p>
                                                <Link href="/faq">
                                                    Explore Faq’s
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-xl-6 col-lg-6">
                                <div className="quick-contact-style1-info">
                                    <div className="inner-title">
                                        <h3>Contact Info</h3>
                                    </div>
                                    <div className="list-item">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-map"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>Address</h4>
                                                    <p>31 St 286, Sangkat Olympic, Khan Chamkarmon, Phnom Penh, Phnom Penh, 12312 Cambodia</p>
                                                </div>
                                            </li>
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
                                                    <h4>Phone</h4>
                                                    <p><Link href="tel:180098765432">012-XXX-XXX</Link></p>
                                                    <p><Link href="tel:180098765432">023-XXX-XXX</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-read"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>Email</h4>
                                                    <p><Link href="mailto:sendmail@tradebro.com">info@chhayvann.com.kh</Link></p>
                                                </div>
                                            </li>
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
                                                    <h4>Office Hours</h4>
                                                    <p>Mon - Sat: 8.00am to 5.00pm</p>
                                                </div>
                                            </li>
                                        </ul>
                                        {/* <div className="btn-box">
                                            <Link className="btn-one"
                                                href="https://www.google.com/maps/search/280%2F5++Granite+Run+Drive+Suite,+%0D%0AHouston+-+90010./@29.8155408,-96.0607242,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                                                <span className="txt">View On Map</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div> */}
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
                                <h4>Send Message</h4>
                            </div>
                            <h2>Send Us a Message Anytime</h2>
                        </div>
                        <div className="row">
                            
                            <div className="col-xl-12">
                                <div className="contact-form">
                                    <ContactForm/>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9652712261563!2d104.90896767505345!3d11.554347388645692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095119dd0d6979%3A0x9c07de665be7dd15!2s31%20St%20286%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1766027839629!5m2!1sen!2skh" width="100%" height="450" loading="lazy"></iframe>
            </Layout>
        </div>
    )
}
