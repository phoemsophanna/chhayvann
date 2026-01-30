"use client";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../config";

export default function Organization_Page() {
    const { i18n } = useTranslation();
    const [organization, setOrganization] = useState<any>(null);
    useEffect(() => {
        fetchOrganization();
    },[i18n.language]);

    const fetchOrganization = async () => {
        const res = await fetch(`${api.BASE_URL}/organization`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        });
        const response = await res.json();
        setOrganization(response);
    }

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Organization" breadcrumbImage={organization?.banner?.image}>
                <section className="about-style2 pb-0">
                    <div dangerouslySetInnerHTML={{__html: organization?.organization?.des}} />
                </section>
            </Layout>
        </div>
    )
}
