import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/article-detail/${slug}`, // API endpoint
    `Blog: ${slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | CHHAYVANN CO., LTD.`,
    `Read our article on ${slug.replace(/-/g, ' ')} - Get insights and tips from CHHAYVANN CO., LTD.`,
    [slug.replace(/-/g, ' '), 'CHHAYVANN blog', 'article'],
    `/blog-1/${slug}`
  );

  return metadata;
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
