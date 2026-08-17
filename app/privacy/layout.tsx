import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('privacy', '/privacy');

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
