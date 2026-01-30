"use client";
import { useState } from "react";
import Image from "next/image";
import { api } from "@/app/config";
const ProductDetail = ({post}:any) => {
    const [photoChanged, setPhotoChanged] = useState("");
    return <>
        <section className="blog-details products-detail">
          <div className="container">
            <div className="row">
              {/* Left content */}
              <div className="col-xl-6">
                <div className="blog-details__content">
                  <div className="row">
                    <div className="col-md-3 col-12 order-md-1 order-2">
                      <div className="gallery-products">
                        {
                          post?.gallery?.map((q:any) => {
                            return <div className={`img-box ${photoChanged == `${api.FILE_URL}${q}` ? 'active' : ""}`} onClick={() => setPhotoChanged(`${api.FILE_URL}${q}`)}>
                                    <Image
                                      src={`${api.FILE_URL}${q}`}
                                      alt={post.title}
                                      width={870}
                                      height={500}
                                      className="img-fluid"
                                    />
                                  </div>;
                          })
                        }
                      </div>
                    </div>
                    <div className="col-md-9 col-12 order-md-2 order-1">
                      <div className="blog-details-top">
                        <div className="img-box">
                          <Image
                            src={photoChanged ? photoChanged : `${api.FILE_URL}${post?.gallery[0]}`}
                            alt={post.title}
                            width={870}
                            height={500}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="blog-details__content">
                  <div className="blog-details-top">
                    <div className="content-box">
                      <div className="title-box">
                        <h3>{post?.title}</h3>
                      </div>
                      <ul>
                        <li>Type: {post?.type}</li>
                        <li>Country: {post?.country}</li>
                      </ul>
                    </div>
                  </div>

                  {/* === Your same static HTML markup === */}
                  <div className="blog-details-text1">
                    <div dangerouslySetInnerHTML={{__html: post?.description}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
}

export default ProductDetail;