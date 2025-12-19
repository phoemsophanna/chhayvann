import type { Metadata } from "next";
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


export const metadata: Metadata = {
  title: "Chhay Vann",
  description: "CHHAY VANN CO., LTD",
  keywords: "Jewelry, Gold & Silver - Retailers, Brokers, Designers, etc., Money Exchange"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} ${moderustic.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
