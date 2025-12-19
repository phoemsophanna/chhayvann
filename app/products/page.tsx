"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "1",
    title: "Argor Heraeus",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    author: "Silver Scott",
    image: "/assets/images/products/products1.png",
  },
  {
    slug: "2",
    title: "Metalor SA",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    author: "z.olivia",
    image: "/assets/images/products/products2.png",
  },
  {
    slug: "3",
    title: "RAND",
    category: "RAND",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    author: "t.maverick",
    image: "/assets/images/products/products3.png",
  },
  {
    slug: "4",
    title: "Valcambi",
    category: "Valcambi",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    author: "N.Isabella",
    image: "/assets/images/products/products4.png",
  },
  {
    slug: "5",
    title: "Perth Mint",
    category: "Perth Mint",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    author: "Silver Scott",
    image: "/assets/images/products/products5.png",
  },
  {
    slug: "6",
    title: "Asahi",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    author: "z.olivia",
    image: "/assets/images/products/products6.png",
  },
  {
    slug: "7",
    title: "Mitsubishi",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    author: "t.maverick",
    image: "/assets/images/products/products7.png",
  },
  {
    slug: "8",
    title: "PAMP",
    category: "PAMP",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    author: "N.Isabella",
    image: "/assets/images/products/products8.png",
  }
];

export default function Blog_Page_Two() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox slides (use same images as blog posts)
  const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
    <div>
      <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Products">
        <section className="blog-page-two">
          <div className="container">
            <div className="row">
              {blogPosts.map((post, i) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-6" key={post.slug}>
                  <div className="single-blog-style4">
                    {/* <div className="category-box">
                      <div className="icon">
                        <span className="icon-hashtag"></span>
                      </div>
                      <h6>{post.category}</h6>
                    </div> */}

                    <div className="img-box relative group">
                      <Image
                        src={post.image}
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
                      {/* <ul className="meta-box clearfix">
                        <li>
                          <div className="icon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <h6>{post.date}</h6>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                          </div>
                          <h6>{post.author}</h6>
                        </li>
                      </ul> */}

                      <div className="title-box">
                        <h3>
                          <Link href={`/products/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>
                          Gold Bar 1 KG
                        </p>
                        <p>
                          Country: Cambodia
                        </p>
                      </div>

                      <div className="btn-box">
                        <Link className="show-btn" href={`/products/${post.slug}`}>
                          Read More <i className="icon-right-arrow"></i>
                        </Link>
                        <Link className="overlay-btn" href={`/products/${post.slug}`}>
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
