"use client";
import { api } from "@/app/config";
import Layout from "@/components/layout/Layout";
import ProductDetail from "@/components/sections/InnerPage/ProductDetail";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// ✅ Server component
export default function BlogSinglePage_One() {
  // params is a Promise now
  const { slug } = useParams();

  const [products, setProducts] = useState<any>(null);
  const [banner, setBanner] = useState<any>(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    axios.get(`${api.BASE_URL}/product/${slug}`,{
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

  if(!products) return null;

  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={products?.title} breadcrumbTitleTwo={t("HEADER.Products")} breadcrumbImage={banner?.image}>
      <ProductDetail post={products} />
    </Layout>
  );
}
