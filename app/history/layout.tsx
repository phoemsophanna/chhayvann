import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/seoSiteSetting?page=HISTORY`, // API endpoint
    `History Company | CHHAYVANN CO., LTD.`,
    `CHHAYVANN CO., LTD is Cambodia’s leading and most trusted gold trading company, established in 1986.`,
    ['CHHAYVANN team', 'team'],
    `/history`
  );

  return metadata;
}

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
