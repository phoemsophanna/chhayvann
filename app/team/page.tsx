"use client";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../config";
import { useTranslation } from "react-i18next";


export default function Team_Page() {
    const { t, i18n } = useTranslation();
    const [team, setTeam] = useState<any>(null);
    const [manager, setManager] = useState<any>(null);
    const [banner, setBanner] = useState<any>(null);
    const [cover, setCover] = useState<any>(null);

    useEffect(() => {
        axios.get(`${api.BASE_URL}/team`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                const team = res.data.team;
                setManager(team?.filter((q:any,index:any) => index < 2));
                setTeam(team?.filter((q:any,index:any) => index >= 2));
                setBanner(res.data.banner);
                setCover(res.data.sites);
            }
        });
    },[i18n.language]);

    return (
        <div>
            {
                cover?.backgroundCover ? (
                    <style>
                        {`
                            .single-team-style1 .img-box:after {
                                background-image: url(${api.FILE_URL}${cover?.backgroundCover});
                            }
                        `}
                    </style>
                ) : ""
            }
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.co_founders")} breadcrumbImage={banner?.image}>
                <section className="team-style1 team-style1--style2">
                    <div className="container">
                        <h2>FOUNDERS & BOARD OF DIRECTORS</h2>
                        <div className="row justify-content-center gap-lg-4">
                            {
                                manager?.map((q:any,index:any) => (
                                    <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                        <div className="single-team-style1">
                                            <div className="top-box">
                                                <div className="img-box">
                                                    <Image src={`${api.FILE_URL}${q?.image}`} alt="Image" width={700} height={700} priority />
                                                </div>
                                                {/* <div className="text-box">
                                                    <h6>
                                                        {q?.experience}
                                                    </h6>
                                                </div> */}
                                            </div>
                                            <div className="middle-box text-center">
                                                <h3><Link href={q?.description ? `/team/${q?.slug}` : "#"}>
                                                    {q?.name}
                                                </Link></h3>
                                                <p className="mb-3">
                                                    {q?.position}
                                                </p>
                                                {
                                                    q?.description ? (
                                                        <Link href={q?.description ? `/team/${q?.slug}` : "#"} className="see-more">
                                                            See More
                                                        </Link>
                                                    ) : ""
                                                }
                                            </div>
                                            {
                                                q?.linkedin || q?.telegram || q?.facebook || q?.email ? 
                                                <div className="bottom-box">
                                                    <div className="left">
                                                        {
                                                            q?.email ? (
                                                                <>
                                                                    <div className="icon">
                                                                        <span className="icon-message"><span className="path1"></span><span
                                                                                className="path2"></span><span className="path3"></span><span
                                                                                className="path4"></span><span className="path5"></span><span
                                                                                className="path6"></span>
                                                                        </span>
                                                                    </div>
                                                                    <Link target="_blank" href={`mailto:${q?.email}`}>Email me</Link>
                                                                </>
                                                            ) : ""
                                                        }
                                                    </div>
                                                    <ul className="right">
                                                        {
                                                            q?.facebook ? (
                                                                <li>
                                                                    <Link href={q?.facebook} target="_blank">
                                                                        <i className="icon-facebook"></i>
                                                                    </Link>
                                                                </li>
                                                            ) : ""
                                                        }
                                                        {
                                                            q?.telegram ? (
                                                                <li>
                                                                    <Link href={q?.telegram} target="_blank">
                                                                        <i className="fab fa-telegram-plane"></i>
                                                                    </Link>
                                                                </li>
                                                            ) : ""
                                                        }
                                                        {
                                                            q?.linkedin ? (
                                                                <li>
                                                                    <Link href={q?.linkedin} target="_blank">
                                                                        <i className="icon-linkedin"></i>
                                                                    </Link>
                                                                </li>
                                                            ) : ""
                                                        }
                                                    </ul>
                                                </div> : ""
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            team?.length > 0 ? (
                                <div className="row justify-content-center">
                                    {
                                        team?.map((q:any,index:any) => (
                                            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                                <div className="single-team-style1">
                                                    <div className="top-box">
                                                        <div className="img-box">
                                                            <Image src={`${api.FILE_URL}${q?.image}`} alt="Image" width={700} height={700} priority />
                                                        </div>
                                                        {/* <div className="text-box">
                                                            <h6>
                                                                {q?.experience}
                                                            </h6>
                                                        </div> */}
                                                    </div>
                                                    <div className="middle-box text-center">
                                                        <h3><Link href={q?.description ? `/team/${q?.slug}` : "#"}>
                                                            {q?.name}
                                                        </Link></h3>
                                                        <p className="mb-3">
                                                            {q?.position}
                                                        </p>
                                                        {
                                                            q?.description ? (
                                                                <Link href={q?.description ? `/team/${q?.slug}` : "#"} className="see-more">
                                                                    See More
                                                                </Link>
                                                            ) : ""
                                                        }
                                                    </div>
                                                    {
                                                        q?.linkedin || q?.telegram || q?.facebook || q?.email ? 
                                                        <div className="bottom-box">
                                                            <div className="left">
                                                                {
                                                                    q?.email ? (
                                                                        <>
                                                                            <div className="icon">
                                                                                <span className="icon-message"><span className="path1"></span><span
                                                                                        className="path2"></span><span className="path3"></span><span
                                                                                        className="path4"></span><span className="path5"></span><span
                                                                                        className="path6"></span>
                                                                                </span>
                                                                            </div>
                                                                            <Link target="_blank" href={`mailto:${q?.email}`}>Email me</Link>
                                                                        </>
                                                                    ) : ""
                                                                }
                                                            </div>
                                                            <ul className="right">
                                                                {
                                                                    q?.facebook ? (
                                                                        <li>
                                                                            <Link href={q?.facebook} target="_blank">
                                                                                <i className="icon-facebook"></i>
                                                                            </Link>
                                                                        </li>
                                                                    ) : ""
                                                                }
                                                                {
                                                                    q?.telegram ? (
                                                                        <li>
                                                                            <Link href={q?.telegram} target="_blank">
                                                                                <i className="fab fa-telegram-plane"></i>
                                                                            </Link>
                                                                        </li>
                                                                    ) : ""
                                                                }
                                                                {
                                                                    q?.linkedin ? (
                                                                        <li>
                                                                            <Link href={q?.linkedin} target="_blank">
                                                                                <i className="icon-linkedin"></i>
                                                                            </Link>
                                                                        </li>
                                                                    ) : ""
                                                                }
                                                            </ul>
                                                        </div> : ""
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : ""
                        }
                    </div>
                </section>
            </Layout>
        </div>
    )
}
