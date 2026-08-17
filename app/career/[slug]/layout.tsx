import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/career-seo-detail/${slug}`, // API endpoint
    `${slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | CHHAYVANN CO., LTD.`,
    `Explore the ${slug.replace(/-/g, ' ')} career opportunity at CHHAYVANN CO., LTD. Join our team!`,
    [slug.replace(/-/g, ' '), 'CHHAYVANN career', 'job opportunity'],
    `/career/${slug}`
  );

  return metadata;
}

export default function CareerDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
