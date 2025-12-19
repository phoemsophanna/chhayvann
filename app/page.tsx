
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Account from "@/components/sections/home1/Account";
import Banner from "@/components/sections/home3/Banner";
import Counter from "@/components/sections/home1/Counter";
import Global from "@/components/sections/home1/Global";
import Instruments from "@/components/sections/home1/Instruments";
import Platforms from "@/components/sections/home1/Platforms";
import Testimonial from "@/components/sections/home1/Testimonial";
import Work from "@/components/sections/home1/Work";
import Blog from "@/components/sections/home3/Blog";
import Choose from "@/components/sections/home3/Choose";
import Video from "@/components/sections/home3/Video";
export default function Home_One() {
    return (
        <div>
            <Layout headerStyle={1} footerStyle={3}>
                <Banner/>
                <About/>
                {/* <Counter/> */}
                <Account/>
                <Choose/>
                <Video/>
                <Blog/>
                {/* <Platforms/> */}
                {/* <Work/> */}
                {/* <Testimonial/> */}
                {/* <Global/> */}
            </Layout>
        </div>
    )
}
