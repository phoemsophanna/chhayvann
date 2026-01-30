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
  title: "CHHAYVANN CO., LTD.",
  description: "CHHAYVANN CO., LTD.",
  keywords: [
    "CHHAYVANN",
    "chhayvann",
    "CHHAYVANN CO., LTD.",
    "Cambodia jewelry",
    "Gold and silver Cambodia",
    "Money exchange Cambodia",
    "Jewelry shop in Cambodia",
    "Gold trading",
    "Currency exchange Cambodia"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.chhayvann.com"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Angkor&family=Jost:ital,wght@0,100..900;1,100..900&family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${hankenGrotesk.variable} ${moderustic.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
