import { getSeoMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: any) {
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/seoSiteSetting?page=SERVICE`, // API endpoint
    `Exchange Rate | CHHAYVANN CO., LTD.`,
    `CHHAYVANN CO., LTD is Cambodia’s leading and most trusted gold trading company, established in 1986.`,
    ['CHHAYVANN exchange rate', 'exchange rate'],
    `/exchange-rate`
  );

  return metadata;
}

export default function ExchangeRateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
