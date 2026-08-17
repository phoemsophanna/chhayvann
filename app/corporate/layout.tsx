import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('corporate', '/corporate');

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
