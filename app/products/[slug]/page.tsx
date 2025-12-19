// app/blog-1/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ProductDetail from "@/components/sections/InnerPage/ProductDetail";

const blogPosts = [
  {
    slug: "1",
    title: "How global events are shaping commodity prices",
    category: "Market Analysis",
    date: "15.09.2025",
    author: "N.Isabella",
    comment: "45 Cmts",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v5-1.jpg",
  },
  {
    slug: "2",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    author: "T.Alive",
    comment: "22 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-2.jpg",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    author: "Z.Silva",
    comment: "35 Cmts",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v5-3.jpg",
  },
  {
    slug: "4",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    date: "31.08.2025",
    author: "Watson",
    comment: "12 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-4.jpg",
  },
  {
    slug: "5",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    author: "T.Alive",
    comment: "22 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-5.jpg",
  },
  {
    slug: "6",
    title: "How global events are shaping commodity prices",
    category: "Market Analysis",
    date: "15.09.2025",
    author: "N.Isabella",
    comment: "45 Cmts",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v4-6.jpg",
  },
  {
    slug: "7",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    date: "31.08.2025",
    author: "Watson",
    comment: "12 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v4-7.jpg",
  },
  {
    slug: "8",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    author: "Z.Silva",
    comment: "35 Cmts",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v4-8.jpg",
  },
];

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

// ✅ Server component
export default async function BlogSinglePage_One({ params }: { params: Promise<{ slug: string }> }) {
  // params is a Promise now
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Product Details" breadcrumbTitleTwo="Products">
      <ProductDetail post={post} />
    </Layout>
  );
}
