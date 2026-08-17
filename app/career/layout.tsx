import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/seoSiteSetting?page=CAREER`, // API endpoint
    `Career | CHHAYVANN CO., LTD.`,
    `CHHAYVANN CO., LTD is Cambodia’s leading and most trusted gold trading company, established in 1986.`,
    ['CHHAYVANN career', 'career'],
    `/career`
  );

  return metadata;
}

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
