import Marquee from "@/components/elements/Marquee";
import Layout from "@/components/layout/Layout";
import Courses from "@/components/sections/InnerPage/Courses";
import Image from "next/image";
import Link from "next/link";


export default function Courses_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Services">
                <Courses/>
            </Layout>
        </div>
    )
}
