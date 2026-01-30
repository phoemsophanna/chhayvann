
import RoundTextScript from "@/components/elements/CircleText";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";


export default function About({homepage}:any) {
    const { t } = useTranslation();
  return (
    <>
        <section className="about-style1">
            <RoundTextScript />
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6">
                        <div className="about-style1__img" style={{marginRight: 0}}>
                            <div className="img-box wow fadeInLeft animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <Image src="/assets/images/trading-2.png" alt="Image" width={100} height={100} priority />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="about-style1__content wow fadeInRight animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>{homepage?.subtitle}</h4>
                                </div>
                                <h2>{homepage?.companyName}</h2>
                            </div>
                            <div className="text">
                                <div dangerouslySetInnerHTML={{__html: homepage?.aboutCompany}} />
                            </div>
                            <div className="btn-box">
                                <Link href="/about">
                                    {t("ReadMore")}
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}