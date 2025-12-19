
import FadeIn from "@/components/elements/FadeIn";
import Link from "next/link";

export default function Choose() {

  return (
    <>
        <section className="choose-style2">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Why Choose Us</h4>
                    </div>
                    <h2>The Top Choice for Traders</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for
                            your advantage.
                        </p>
                    </div>
                </div>
                <FadeIn direction="up" delay={0.0}>
                <ul className="row clearfix">

                    
                    <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-businessman"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Friendly & Expert</Link></h3>
                                <p>
                                    YLG is a member of SBMA (Singapore Bullion Market Association)
                                </p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-security"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Regulated & Secure</Link></h3>
                                <p>
                                    YLG mainly import and export London Bullion Market Association (LBMA) accredited refineries gold and silver bars
                                </p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-bill"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span><span
                                            className="path5"></span><span className="path6"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">24/7 Support</Link></h3>
                                <p>24 hours trading of precious metals</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-high-five"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Trusted Broker</Link></h3>
                                <p>Wide range of products including Gold bar, Gold/Silver scrap, Gold/Silver dore, Gold/Silver granules and etc.</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-trend"><span className="path1"></span><span className="path2"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Global Market Access</Link></h3>
                                <p>Automatic price setting and order submission no need to monitor gold prices all the time</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6 col-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-24-hours"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">24/6 Market Access</Link></h3>
                                <p>We use international reputable secured carriers such as Brinks, Malca-Amit, Loomis for shipment</p>
                            </div>
                        </div>
                    </li>

                </ul>
                </FadeIn>
            </div>
        </section>
    </>
  )
}