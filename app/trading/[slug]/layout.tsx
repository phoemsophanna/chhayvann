import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/trading/${slug}`, // API endpoint
    `${slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | CHHAYVANN CO., LTD.`,
    `Read about ${slug.replace(/-/g, ' ')} trading insights and market analysis at CHHAYVANN CO., LTD.`,
    [slug.replace(/-/g, ' '), 'CHHAYVANN', 'trading', 'analysis'],
    `/trading/${slug}`
  );

  return metadata;
}

export default function TradingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
