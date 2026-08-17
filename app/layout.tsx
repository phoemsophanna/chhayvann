import { getSeoMetadata } from "@/utils/seo";
import { Hanken_Grotesk, Moderustic } from "next/font/google";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';

import ClientLayout from "./client-layout";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});


const moderustic = Moderustic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-moderustic",
});

export async function generateMetadata({ params }: any) {
  // Fetch SEO data from API
  const metadata = await getSeoMetadata(
    `/seoSiteSetting?page=HOMEPAGE`, // API endpoint
    `About Company | CHHAYVANN CO., LTD.`,
    `CHHAYVANN CO., LTD is Cambodia’s leading and most trusted gold trading company, established in 1986.`,
    ['CHHAYVANN about us', 'about us'],
    `/`
  );

  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Angkor&family=Jost:ital,wght@0,100..900;1,100..900&family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className={`${hankenGrotesk.variable} ${moderustic.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
