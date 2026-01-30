"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "@/app/config";
import axios from "axios";

// ✅ Server component
export default function BlogSinglePage_One() {
  // params is a Promise now
  const { slug } = useParams();
  const [banner, setBanner] = useState<any>(null);
  const [news, setNews] = useState<any>([]);
  const [article, setArticle] = useState<any>([]);
  const [category, setCategory] = useState<any>(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    axios.get(`${api.BASE_URL}/article-detail/${slug}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": i18n.language
      }
    }).then((res) => {
      if(res.data.status == "success") {
        setBanner(res.data.banner);
        setCategory(res.data.category);
        setNews(res.data.articles);
        setArticle(res.data.article);
      }
    })
  },[i18n.language])

  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={article?.title} breadcrumbTitleTwo={t("HEADER.NewsResearch")} breadcrumbImage={banner?.image}>
      <section className="blog-details">
          <div className="container">
            <div className="row">
              {/* Left content */}
              <div className="col-xl-8">
                <div className="blog-details__content">
                  <div className="blog-details-top">
                    <div className="img-box">
                      <img
                        src={`${api.FILE_URL}${article?.image}`}
                        alt={article?.title}
                        width={870}
                        height={500}
                        className="img-fluid"
                      />
                    </div>
                    <div className="content-box">
                      <div className="title-box">
                        <h3>{article.title}</h3>
                      </div>
                      <div className="top-box">
                        <div className="category">
                          <div className="icon"><i className="icon-hashtag"></i></div>
                          <h6>{article?.category?.title}</h6>
                        </div>
                        <ul>
                          <li>
                            <div className="icon"><i className="fa fa-calendar"></i></div>
                            <h6>{article?.date}</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: article?.content}} />
                </div>
                <div className="blog-details-tag">
                    <div className="title">
                        {/* <div className="icon">
                            <Image src="/assets/images/icon/icon-tags.png" alt="Icon" width={14} height={16} priority />
                        </div> */}
                        <h4>Shared: </h4>
                    </div>
                    <ul className="clearfix">
                        <li><Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link></li>
                        <li><Link href="#">
                          <i className="fab fa-telegram-plane"></i>
                        </Link></li>
                    </ul>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="col-xl-4">
                <div className="blog-page__sidebar">
                  {/* Categories */}
                  {
                    category?.length > 0 ? (
                      <div className="single-sidebar-box">
                        <div className="sidebar-title">
                          <h3>{t("Categories")}</h3>
                        </div>
                        <ul className="single-sidebar__categories clearfix">
                          {category?.map((cat:any) => (
                            <li key={cat?.id}>
                              <Link href={`/blog-1?categoryId=${cat?.id}`}>
                                <p>
                                  {cat?.title}
                                </p>
                                <div className="icon">
                                  <i className="icon-arrow-right"></i>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : ""
                  }

                  {/* Popular Posts */}
                  {
                    news?.length > 0 ? (
                      <div className="single-sidebar-box">
                        <div className="sidebar-title">
                          <h3>{t("RecentNews")}</h3>
                        </div>
                        <ul className="single-sidebar__post clearfix">
                          {news.map((p:any) => (
                            <li key={p.id}>
                              <div className="category">
                                <div className="icon">
                                  <i className="icon-hashtag"></i>
                                </div>
                                <h6>{p?.category?.title}</h6>
                              </div>
                              <div className="title-box">
                                <h4>
                                  <a href={`/blog-1/${p.id}`}>{p?.title}</a>
                                </h4>
                              </div>
                              <div className="btn-box">
                                <a
                                  className="show-btn"
                                  href={`/blog-1/${p.id}`}
                                >
                                  {t("ReadMore")} <i className="icon-right-arrow"></i>
                                </a>
                                <a
                                  className="overlay-btn"
                                  href={`/blog-1/${p.id}`}
                                >
                                  {t("ReadMore")} <i className="icon-right-arrow"></i>
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : ""
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
}
