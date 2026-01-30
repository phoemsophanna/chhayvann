"use client";

import { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "../config";
import { useSearchParams } from "next/navigation";

export default function Blog_Page_One() {
  const [banner, setBanner] = useState<any>(null);
  const [news, setNews] = useState<any>([]);
  const [category, setCategory] = useState<any>(null);
  const { t, i18n } = useTranslation();
  const [categoryId, setCategoryId] = useState<any>(null);

  useEffect(() => {
    // Safe: only runs on client
    const params = new URLSearchParams(window.location.search);
    setCategoryId(params.get("categoryId") || "0");
  }, []);

  useEffect(() => {
    fetchNews(categoryId);
  }, [i18n.language, categoryId]);

  const fetchNews = async (categoryId: any) => {
    try {
      const res = await axios.get(
        `${api.BASE_URL}/article-page?categoryId=${categoryId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": i18n.language,
          },
        }
      );

      if (res.data.status === "success") {
        setBanner(res.data.banner || null);
        setCategory(res.data.category || null);
        setNews(res.data.articles || []);
      } else {
        setBanner(null);
        setCategory(null);
        setNews([]);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setBanner(null);
      setCategory(null);
      setNews([]);
    }
  };

  if(!news) return null;

  return (
    <div>
      <Layout
        headerStyle={1}
        footerStyle={3}
        breadcrumbTitle={t("HEADER.NewsResearch")}
        breadcrumbImage={banner?.image}
      >
        <section className="blog-page-one">
          <div className="container">
            <Swiper slidesPerView="auto"
                    spaceBetween={10}
                    freeMode={true}
                    speed={600} className="tabs-button-box clearfix">
              {
                category?.map((q:any) => {
                  return <SwiperSlide key={q.id} onClick={() => fetchNews(q?.id)} style={{cursor: "pointer"}} className="swiper-slide tab-btn-item active-btn-item">
                            <h3>{q?.title}</h3>
                          </SwiperSlide>;
                })
              }
          </Swiper>
            <div className="row">
              {news.map((post:any, i:any) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
                  <div className="single-blog-style5 single-blog-style5--style6">
                    {/* ---------- Image Box ---------- */}
                    <div className="img-box relative group">
                      <Link href={`/blog-1/${post.id}`}>
                        <Image
                          src={`${api.FILE_URL}${post.image}`}
                          alt={post.title}
                          width={370}
                          height={270}
                          priority
                          className="rounded-md"
                        />
                      </Link>
                    </div>

                    {/* ---------- Content Box ---------- */}
                    <div className="content-box">
                      <div className="top-box">
                        <div className="category">
                          <div className="icon">
                            <i className="icon-hashtag"></i>
                          </div>
                          <h6>{post.category?.title}</h6>
                        </div>
                        <div className="date">
                          <div className="icon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <h6>{post?.date}</h6>
                        </div>
                      </div>

                      <div className="title-box">
                        <h3>
                          <Link href={`/blog-1/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p>{post.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- Pagination ---------- */}
            {/* <ul className="styled-pagination clearfix">
              <li className="arrow prev">
                <Link href="#">
                  <span className="icon-arrow-left left"></span>
                </Link>
              </li>
              <li className="active">
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#">2</Link>
              </li>
              <li>
                <Link href="#" className="border-line">
                  3
                </Link>
              </li>
              <li className="arrow next">
                <Link href="#">
                  <span className="icon-arrow-right right"></span>
                </Link>
              </li>
            </ul> */}
          </div>
        </section>
      </Layout>
    </div>
  );
}
