'use client';
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home3/Banner";
import Blog from "@/components/sections/home3/Blog";
import Choose from "@/components/sections/home3/Choose";
import Video from "@/components/sections/home3/Video";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "./config";

export default function Home_One() {
    const { i18n } = useTranslation();
    const [homepage, setHomepage] = useState(null);
    const [trade, setTrade] = useState(null);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/homepage`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setHomepage(res.data.homepage);
                setTrade(res.data.howTrade);
                setNews(res.data.news);
            }
        });
    }, [i18n.language])

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3}>
                <Banner/>
                <About homepage={homepage} />
                <Choose />
                <Video trade={trade} />
                {news.length > 0 ? <Blog homepage={homepage} news={news} /> : ""}
            </Layout>
        </div>
    )
}

// export async function generateMetadata({ params, searchParams }:any, parent:any) {
// 	return {
// 		title: "HOME | CHHAYVANN CO., LTD.",
// 		description: "BEAUTY BEGINS HERE-DISCOVER, CREATES, GLOW",
// 		keywords: ["CHHAYVANN CO., LTD", "chhayvann", "trading", "gold"],
// 		siteName: "CHHAYVANN CO., LTD.",
// 		authors: [{ name: "Camgotech", url: "https://camgotech.com" }],
// 		openGraph: {
// 			images: ['assets/images/Chhayvann-png.png'],
// 		},
// 	};
// }
