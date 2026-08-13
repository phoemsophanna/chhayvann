"use client";
import { api } from "@/app/config";
import Layout from "@/components/layout/Layout";
import ProductDetail from "@/components/sections/InnerPage/ProductDetail";
import { sanitizeHtml } from "@/utils/sanitizeHtml";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

// ✅ Server component
export default function Team_One() {
  // params is a Promise now
  const { slug } = useParams();

  const [team, setTeam] = useState<any>(null);
  const [banner, setBanner] = useState<any>(null);
  const [cover, setCover] = useState<any>(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    axios.get(`${api.BASE_URL}/team-detail/${slug}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": i18n.language
      }
    }).then((res) => {
      setTeam(res.data.team);
      setBanner(res.data.banner);
      setCover(res.data.sites);
    });
  },[i18n.language])

  if(!team) return null;

  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitleTwo={t("HEADER.co_founders")}>
      <section className="team-banner" style={{backgroundImage: `url(${api.FILE_URL}${cover?.background})`}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="content-text">
              <h2>{team?.name}</h2>
              <p>{team?.position}</p>
            </div>
            <div className="content-image">
              <Image src={`${api.FILE_URL}${team?.image}`} alt="Image" width={170} height={170} priority />
            </div>
          </div>
        </div>
      </section>
      {
        team?.description ? (
          <section className="team-style1 team-style1--style2">
            <div className="container">
              <div dangerouslySetInnerHTML={{__html: sanitizeHtml(team?.description)}} />
            </div>
          </section>
        ) : ""
      }
    </Layout>
  );
}
