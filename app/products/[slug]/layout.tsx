import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/seoSiteSetting?page=GOLD`, // API endpoint
    `Gold Company | CHHAYVANN CO., LTD.`,
    `CHHAYVANN CO., LTD is Cambodia’s leading and most trusted gold trading company, established in 1986.`,
    ['CHHAYVANN Gold', 'Gold'],
    `/products`
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
