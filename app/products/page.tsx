"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { api } from "../config";
import { useTranslation } from "react-i18next";

export default function Blog_Page_Two() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [banner, setBanner] = useState<any>(null);
  const [slides, setSlides] = useState<any>(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    axios.get(`${api.BASE_URL}/products`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": i18n.language
      }
    }).then((res) => {
      setProducts(res.data.products);
      setBanner(res.data.banner)
    });
  },[i18n.language])
  // Lightbox slides (use same images as blog posts)

  useEffect(() => {
    setSlides(products.map((post:any) => ({ src: api.FILE_URL + post?.gallery[0] })));
  },[products])

  console.log(products);

  return (
    <div>
      <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.Products")} breadcrumbImage={banner?.image}>
        <section className="blog-page-two">
          <div className="container">
            <div className="row">
              {products.map((post:any, i:any) => (
                <div className={`col-xl-${products?.length > 3 ? "3" : products?.length > 2 ? "4" : products?.length > 1 ? "6" : "12"} col-lg-6 col-md-6 col-6`} key={post.id}>
                  <div className="single-blog-style4">

                    <div className="img-box relative group">
                      <Image
                        src={`${api.FILE_URL}${post?.gallery[0]}`}
                        alt={post.title}
                        width={270}
                        height={240}
                        priority
                      />
                      <div className="overlay-icon">
                        <Link href="#"
                          className="lightbox-image"
                          onClick={() => {
                            setIndex(i);
                            setOpen(true);
                          }}
                        >
                          <i className="icon-maximize"></i>
                        </Link>
                      </div>
                    </div>

                    <div className="content-box">
                      <div className="title-box">
                        <h3>
                          <Link href={`/products/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p>
                          {post?.type}
                        </p>
                        <p>
                          {post?.country}
                        </p>
                      </div>

                      <div className="btn-box">
                        <Link className="show-btn" href={`/products/${post.id}`}>
                          Read More <i className="icon-right-arrow"></i>
                        </Link>
                        <Link className="overlay-btn" href={`/products/${post.id}`}>
                          Read More <i className="icon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Lightbox Component */}
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={slides}
          />
        </section>
      </Layout>
    </div>
  );
}
