import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('trading', '/trading');

export default function TradingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
