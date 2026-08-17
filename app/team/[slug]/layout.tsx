import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/team-seo-detail/${slug}`, // API endpoint
    `${slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | CHHAYVANN Team`,
    `Meet ${slug.replace(/-/g, ' ')} from CHHAYVANN CO., LTD. team - Our dedicated professionals.`,
    [slug.replace(/-/g, ' '), 'CHHAYVANN team', 'professional'],
    `/team/${slug}`
  );

  return metadata;
}

export default function TeamDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
