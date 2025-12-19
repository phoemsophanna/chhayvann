import Layout from "@/components/layout/Layout";
import Choose from "@/components/sections/home3/Choose";
import Awards from "@/components/sections/InnerPage/Awards";
import Counter from "@/components/sections/InnerPage/Counter";
import Partners from "@/components/sections/InnerPage/Partners";
import Statement from "@/components/sections/InnerPage/Statement";
import Image from "next/image";
import Link from "next/link";


export default function About_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="About Us">
                <section className="about-style2 pdtop">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6">
                                <div className="about-style2__left about-style2__left-style3">
                                    {/* <div className="shape1">
                                        <Image src="/assets/images/shapes/about-v2-shape22.png" alt="Shape" width={456} height={456} priority />
                                    </div> */}
                                    <div className="img-box1">
                                        <Image src="/assets/images/about/about-v2-2.webp" alt="Image" width={300} height={460} priority />
                                    </div>
                                    {/* <div className="experience-box">
                                        <div className="experience-box__bg"
                                            style={{ backgroundImage: "url(/assets/images/shapes/about-v2-shape11.png)" }}>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-bull"><span className="path1"></span><span className="path2"></span><span
                                                    className="path3"></span><span className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h2>24+ <span>Years</span></h2>
                                        </div>
                                        <div className="text">
                                            <h3>Experience in the Market</h3>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="about-style2__right">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>About Us</h4>
                                        </div>
                                        <h2>CHHAY VANN CO., LTD</h2>
                                        <div className="text">
                                            <p>
                                                It is a long established fact that reader will be distracted by the readable
                                                content of a page when looking atlayout point of making here is that it has a
                                                more-or-less normal distribution all letters as opposed to using.
                                            </p>
                                            <p>
                                                It is a long established fact that reader will be distracted by the readable
                                                content of a page when looking atlayout point of making here is that it has a
                                                more-or-less normal distribution all letters as opposed to using.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="purpose-box">
                                        <div className="icon">
                                            <span className="icon-medical-history"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span><span
                                                    className="path10"></span><span className="path11"></span>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <h3>Our Journey</h3>
                                            <p>Nor again is there anyone who loves or pursues all itself because it is pain.</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/about">
                                            <span className="txt">Explore History</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Statement/>
                <Choose/>
                {/* <Counter/> */}
                <Partners/>
                <Awards/>
            </Layout>
        </div>
    )
}
