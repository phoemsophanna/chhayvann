import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/services/${slug}`, // API endpoint
    `${slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | CHHAYVANN CO., LTD.`,
    `Learn more about our ${slug.replace(/-/g, ' ')} service at CHHAYVANN CO., LTD.`,
    [slug.replace(/-/g, ' '), 'CHHAYVANN', 'service'],
    `/service/${slug}`
  );

  return metadata;
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
