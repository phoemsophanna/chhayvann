import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('blog', '/blog-1');

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
