import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('service', '/service');

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
