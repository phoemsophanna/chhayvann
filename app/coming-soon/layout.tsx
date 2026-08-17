import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('home', '/');

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
