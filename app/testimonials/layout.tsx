import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata('testimonials', '/testimonials');

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
