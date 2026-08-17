import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('individual', '/individual');

export default function IndividualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
