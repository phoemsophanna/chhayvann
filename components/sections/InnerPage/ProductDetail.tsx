"use client";
import { useState } from "react";
import Image from "next/image";
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
                        <div className={`img-box ${photoChanged == '/assets/images/products/products1.png' ? 'active' : ""}`} onClick={() => setPhotoChanged("/assets/images/products/products1.png")}>
                          <Image
                            src={'/assets/images/products/products1.png'}
                            alt={post.title}
                            width={870}
                            height={500}
                            className="img-fluid"
                          />
                        </div>
                        <div className={`img-box ${photoChanged == '/assets/images/products/products2.png' ? 'active' : ""}`} onClick={() => setPhotoChanged("/assets/images/products/products2.png")}>
                          <Image
                            src={'/assets/images/products/products2.png'}
                            alt={post.title}
                            width={870}
                            height={500}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 col-12 order-md-2 order-1">
                      <div className="blog-details-top">
                        <div className="img-box">
                          <Image
                            src={photoChanged ? photoChanged : '/assets/images/products/products1.png'}
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
                        <h3>Argor Heraeus</h3>
                      </div>
                      <div className="price-box">
                        $18.00
                      </div>
                      <ul>
                        <li>Type: Gold Bar 1 KG</li>
                        <li>Country: Cambodia</li>
                      </ul>
                    </div>
                  </div>

                  {/* === Your same static HTML markup === */}
                  <div className="blog-details-text1">
                    <p>
                        Triving and dislike men who are so that beguiled and demoralized welcomed every pain
                        avoided frequently occur that pleasures indignation and dislike men who are so
                        beguiled the charms of pleasure of the moment, so blinded by desire, that they
                        cannot foresee the pain troublethat are bound to ensue; and equal blame belongs to
                        those who fail in their duty through weakness of same as saying through shrinking
                        our being able to do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
}

export default ProductDetail;