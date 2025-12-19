
import Layout from "@/components/layout/Layout";
import Work from "@/components/sections/home1/Work";
import Choose from "@/components/sections/home3/Choose";
import Video from "@/components/sections/home3/Video";
import Highlights from "@/components/sections/InnerPage/Highlights";
import Image from "next/image";
import Link from "next/link";

export default function Accounts_Page() {

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Trading">
                <Video />
                <Work/>
                {/* <Choose/> */}
            </Layout>
        </div>
    )
}
