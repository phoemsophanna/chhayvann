
import ContactForm from "@/components/elements/ContactForm";
import Layout from "@/components/layout/Layout";
import Link from "next/link";


const data = [
    {
        slug: 1,
        name: "Card Dispute Resolution Officer",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2026"
    },
    {
        slug: 2,
        name: "Consumer Credit Analyst",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2026"
    },
    {
        slug: 3,
        name: "Senior Product Marketing Executive",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2026"
    },
    {
        slug: 4,
        name: "Chief Teller (Stung Treng)",
        position: "Head Office, Phnom Penh",
        dateline: "December 31, 2026"
    },
];

export default function Courses_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Careers">
                <section className="quick-career-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 sec-title withtext text-center">
                                <h2>Work and grow with Chhayvann Co., Ltd.</h2>
                                <div className="text">
                                    <p>
                                        At Chhayvann,  we believe ourselves well placed to capture opportunities ahead. We are also strengthening our franchise in the country and fortify our 
                                        position as Cambodia’s safest bank.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="sec-title small-weight withtext text-center">
                                    <h2>Work and grow with Chhayvann</h2>
                                </div>
                                <div className="career-container">
                                    {
                                        data?.map((q) => {
                                            return (
                                                <Link href={`/career/${q.slug}`}>
                                                    <div className="career-item">
                                                        <h2>{q.name}</h2>
                                                        <p>{q.position}</p>
                                                        <p><b>Application deadline</b> {q.dateline}</p>
                                                        <span>
                                                            <i className="fas fa-arrow-right"></i>
                                                        </span>
                                                    </div>
                                                </Link>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
