"use client"
import Layout from "@/components/layout/Layout";
import Work from "@/components/sections/home1/Work";
import Video from "@/components/sections/home3/Video";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config";
import { useTranslation } from "react-i18next";

export default function Accounts_Page() {
    const { t, i18n } = useTranslation();
    const [trading, setTrading] = useState<any>(null);
    const [tradings, setTradings] = useState<any>(null);
    const [howTrade, setHowTrade] = useState<any>(null);
    const [banner, setBanner] = useState<any>(null);
    useEffect(() => {
        axios.get(`${api.BASE_URL}/trading`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setTrading(res.data.trading);
                setTradings(res.data.tradings);
                setBanner(res.data.banner);
                setHowTrade(res.data.howTrade);
            }
        });
    },[i18n.language]);
    
    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.Trading")} breadcrumbImage={banner?.image}>
                <Video trade={howTrade} />
                <Work trade={trading} trades={tradings} />
                {/* <Choose/> */}
            </Layout>
        </div>
    )
}
