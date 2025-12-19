import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";


export default function Testimonial_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Testimonials" breadcrumbTitleTwo="About">
                <section className="testimonial-style1 testimonial-style1--style2">
                    <div className="container">
                        <div className="row masonary-layout">

                            <div className="col-xl-4">
                                <div className="single-testimonial-style1">
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <Image src={"/assets/images/team/team-v1-2.webp"} width={120} height={120} alt="" />
                                        </div>
                                        <div className="content-name">
                                            <h3>Newton Lester</h3>
                                            <span>Forex Trader</span>
                                            {/* <div className="top-box">
                                                <div className="right">
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="point">
                                                        <p>5.0</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    <div className="text-box">
                                        <p>The platform&apos;s tools and resources significantly improved
                                            my trading strategy. Tradebrohas been instrumental in my
                                            trading success.</p>
                                    </div>
                                    <div className="quote-icon">
                                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="single-testimonial-style1">
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <Image src={"/assets/images/team/team-v1-1.webp"} width={120} height={120} alt="" />
                                        </div>
                                        <div className="content-name">
                                            <h3>Oakley Hamilton</h3>
                                            <span>Company One</span>
                                            {/* <div className="top-box">
                                                <div className="right">
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="point">
                                                        <p>5.0</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    <div className="text-box">
                                        <p>The platform&apos;s tools and resources significantly improved
                                            my trading strategy. Tradebrohas been instrumental in my
                                            trading success.</p>
                                    </div>
                                    <div className="quote-icon">
                                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="single-testimonial-style1">
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <Image src={"/assets/images/team/team-v1-4.webp"} width={120} height={120} alt="" />
                                        </div>
                                        <div className="content-name">
                                            <h3>Flag Edric Stanley</h3>
                                            <span>Company Two</span>
                                            {/* <div className="top-box">
                                                <div className="right">
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="point">
                                                        <p>5.0</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    <div className="text-box">
                                        <p>The platform&apos;s tools and resources significantly improved
                                            my trading strategy. Tradebrohas been instrumental in my
                                            trading success.</p>
                                    </div>
                                    <div className="quote-icon">
                                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="single-testimonial-style1">
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <Image src={"/assets/images/team/team-v1-2.webp"} width={120} height={120} alt="" />
                                        </div>
                                        <div className="content-name">
                                            <h3>Newton Lester</h3>
                                            <span>Forex Trader</span>
                                            {/* <div className="top-box">
                                                <div className="right">
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="point">
                                                        <p>5.0</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    <div className="text-box">
                                        <p>The platform&apos;s tools and resources significantly improved
                                            my trading strategy. Tradebrohas been instrumental in my
                                            trading success.</p>
                                    </div>
                                    <div className="quote-icon">
                                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="single-testimonial-style1">
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <Image src={"/assets/images/team/team-v1-2.webp"} width={120} height={120} alt="" />
                                        </div>
                                        <div className="content-name">
                                            <h3>Newton Lester</h3>
                                            <span>Forex Trader</span>
                                            {/* <div className="top-box">
                                                <div className="right">
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="point">
                                                        <p>5.0</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    <div className="text-box">
                                        <p>The platform&apos;s tools and resources significantly improved
                                            my trading strategy. Tradebrohas been instrumental in my
                                            trading success.</p>
                                    </div>
                                    <div className="quote-icon">
                                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="single-testimonial-style1">
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <Image src={"/assets/images/team/team-v1-2.webp"} width={120} height={120} alt="" />
                                        </div>
                                        <div className="content-name">
                                            <h3>Newton Lester</h3>
                                            <span>Forex Trader</span>
                                            {/* <div className="top-box">
                                                <div className="right">
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="point">
                                                        <p>5.0</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    <div className="text-box">
                                        <p>The platform&apos;s tools and resources significantly improved
                                            my trading strategy. Tradebrohas been instrumental in my
                                            trading success.</p>
                                    </div>
                                    <div className="quote-icon">
                                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} priority />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
