import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('faq', '/faq');

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
