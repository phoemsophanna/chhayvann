import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/products/${slug}`, // API endpoint
    `${slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | CHHAYVANN CO., LTD.`,
    `Discover our ${slug.replace(/-/g, ' ')} products and services at CHHAYVANN CO., LTD.`,
    [slug.replace(/-/g, ' '), 'CHHAYVANN', 'products', 'services'],
    `/products/${slug}`
  );

  return metadata;
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
