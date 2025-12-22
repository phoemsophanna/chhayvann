
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

export default function Footer3() {
    const [dropdown, setDropdown] = useState(0);
    return (
        <>
        
            <footer className="footer-style3">
                

                <div className="footer-main-style3">
                    <div className="container">
                        <div className="row">
                            

                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                {/* <div className="single-footer-widget-style3 mr-minus20 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="single-footer-widget-style3__bg"
                                        style={{ backgroundImage: "url(/assets/images/shapes/footer-v3-single-bg.jpg)" }}>
                                    </div>
                                    <div className="single-footer-widget-style3-info">
                                        <div className="icon">
                                            <Image src="/assets/images/icon/footer-v3-icon1.png" alt="Icon" width={38} height={30} priority />
                                        </div>
                                        <div className="title2">
                                            <h3>Participate in <br />Our Discord Community.</h3>
                                            <p>Be a part of our update community.</p>
                                        </div>
                                        <div className="images-links">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="img-box img-box1">
                                                        <Image src="/assets/images/footer/footer-v3-members1.png" alt="Image" width={30} height={38} priority />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="img-box img-box2">
                                                        <Image src="/assets/images/footer/footer-v3-members2.png" alt="Image" width={30} height={38} priority />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="img-box img-box3">
                                                        <Image src="/assets/images/footer/footer-v3-members3.png" alt="Image" width={30} height={38} priority />
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="text">
                                                <p>25k Members <br />in Our Community</p>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="#">
                                                <span className="txt">Accept Invite</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="members-box">
                                            <div className="box"></div>
                                            <p>4,235 Online.</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="single-footer-widget wow fadeInUp" data-wow-duration="1200ms"
                                    data-wow-delay="000ms">
                                        <div className="single-footer-widget-style3__bg"
                                        style={{ backgroundImage: "url(/assets/images/shapes/footer-v3-single-bg.jpg)" }}>
                                    </div>
                                    <div className="single-footer-widget-contact">
                                        <div className="footer-logo-style1">
                                            <Link href="/">
                                                <Image src="/assets/images/Chhayvann-png.png" alt="Logo" width={90} height={27} priority />
                                            </Link>
                                        </div>
                                        <div className="text-box">
                                            <p> Business it will frequently to occur that pleasures have all repudiated
                                            and annoyances accepted.</p>
                                            <p> Business it will frequently to occur that pleasures have all repudiated
                                            and annoyances accepted.</p>
                                        </div>
                                        <div className="your-trading">
                                            <div className="title1">
                                                <h3>Begin Your Trading,</h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="https://www.oanda.com/us-en/trading/account-comparison/"
                                                    className="btn-one">
                                                    <span className="txt">
                                                        New Account
                                                        <i className="icon-right-arrow"></i>
                                                    </span>
                                                </Link>
                                                <Link href="https://qxbroker.com/landing/investing?lid=268729&gad_source=1"
                                                    className="btn-one">
                                                    <span className="txt">
                                                        Sign In
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
                                        }}>Company <span className={`fa fa-angle-right ${dropdown == 1 ? "active" : ""}`}></span></h3>
                                    </div>
                                    <div className={`footer-widget-links-style3 ${dropdown == 1 ? "active" : ""}`}>
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="/about">
                                                    About Us
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    Services
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products">
                                                    Products
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/trading">
                                                    Trading
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Online Trading
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-1">
                                                    News & Research
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/history">
                                                    History
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    Faq's
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Careers
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    Contact Us
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
                                        }}>Contact Us <span className={`fa fa-angle-right ${dropdown == 2 ? "active" : ""}`}></span></h3>
                                    </div>
                                    <ul className={`single-footer-widget-style3-post clearfix ${dropdown == 2 ? "active" : ""}`}>
                                        <li>
                                            Phone: 012-XXX-XXX
                                        </li>
                                        <li>
                                            Phone: 023-XXX-XXX
                                        </li>
                                        <li>
                                            Email: info@chayvann.com.kh
                                        </li>
                                        <li>
                                            Address: No. 31, St. 286, Sangkat Olympic, Khan Chamkamorn, Phnom Penh, Cambodia.
                                        </li>
                                        <li>
                                            Follow Us:
                                            <ul className="social-container">
                                                <li className="facebook-icon">
                                                    <a href="">
                                                        <i className="icon-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="telegram-icon">
                                                    <a href="">
                                                        <i className="icon-telegram-1"></i>
                                                    </a>
                                                </li>
                                                <li className="instagram-icon">
                                                    <a href="">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li className="youtube-icon">
                                                    <a href="">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                </li>
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
                                    Copyrights © {new Date().getFullYear()} <Link href="/index-3">Chhayvann. </Link> All rights reserved.
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
