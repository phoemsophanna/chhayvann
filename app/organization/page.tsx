import Layout from "@/components/layout/Layout";
import Choose from "@/components/sections/home3/Choose";
import Awards from "@/components/sections/InnerPage/Awards";
import Counter from "@/components/sections/InnerPage/Counter";
import Partners from "@/components/sections/InnerPage/Partners";
import Statement from "@/components/sections/InnerPage/Statement";
import Image from "next/image";
import Link from "next/link";


export default function Organization_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="About Us">
                <section className="about-style2 pb-0">
                    <img src="/assets/images/Organization-chart-3.jpg" style={{width: "100%"}} alt="" />
                </section>
            </Layout>
        </div>
    )
}
