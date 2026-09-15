"use client";

import { useAppStore } from "@/store/useAppStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const pathname = usePathname();
  const { services, general } = useAppStore();
  const { t, i18n } = useTranslation();
  // Checks if a path is active
  const isActive = (path: string) => pathname === path;

  const checkIsHide = (type:any) => {
    if(general.page_banners){
      console.log(general);
      const banner = general.page_banners.find(
        (item:any) => item.type?.toUpperCase() == type.toUpperCase()
      );
  
      return banner?.isHide ?? 0;
    }
  };

  // Checks if a parent dropdown should be active
  const isDropdownActive = (paths: string[]) => paths.some((path) => pathname.startsWith(path));
  return (
    <ul className="main-menu__list">

        {/* Home */}
        <li className={`${isDropdownActive([
            "/index-2",
            "/index-3",
            "/index-4",
            ]) || isActive("/")
            ? "current"
            : ""
        }`}>
            <Link href="/">{t("HEADER.HOME")}</Link>
      </li>
      {/* About */}
      <li className={`dropdown ${isDropdownActive(["/about", "/history", "/team", "/testimonials", "/coming-soon"]) ? "current" : ""}`}>
        <Link href="#">{t("HEADER.Company")}</Link>
        <ul>

          <li className={isActive("/about") ? "current" : ""}><Link href="/about">{t("HEADER.AboutUs")}</Link></li>
          {
            !checkIsHide("Our History") ? (
              <li className={isActive("/history") ? "current" : ""}><Link href="/history">{t("HEADER.History")}</Link></li>
            ) : ""
          }
          {
              !checkIsHide("Our Team") ? (
                <li className={isActive("/team") ? "current" : ""}><Link href="/team">{t("HEADER.co_founders")}</Link></li>
              ) : ""
          }
          {
            !checkIsHide("Organization") ? <li className={isActive("/organization") ? "current" : ""}><Link href="/organization">{t("HEADER.OrganizationChart")}</Link></li> : ""
          }
          {
              !checkIsHide("Testimonials") ? (
                <li className={isActive("/testimonials") ? "current" : ""}><Link href="/testimonials">{t("HEADER.Testimonials")}</Link></li>
              ) : ""
          }
        </ul>
      </li>
      <li className={isDropdownActive(["/service","/exchange-rate","/products"]) ? "dropdown current" : "dropdown"}><Link href="#">{t("HEADER.products_and_services")}</Link>
        <ul>
          {
            !checkIsHide("Our Products") ? <li><Link href="/products">{t("HEADER.Gold")}</Link></li> : ""
          }
          {
            !checkIsHide("Currency Exchange") ? <li><Link href="/exchange-rate">{t("HEADER.ExchangeRate")}</Link></li> : ""
          }
          {
            services?.map((q:any,index:any) => (
              <li key={index}><Link href={`/service/${q.slug}`}>
                { i18n.language == "KHM" && q.titleKm ? q.titleKm : q.title }
              </Link></li>
            ))
          }
        </ul>
      </li>

      {/* Trading Page */}
      {!checkIsHide("Our Platform") ? <li className={isActive("/platform") ? "current" : ""}><Link href="/platform">{t("HEADER.Platform")}</Link></li> : ""}
      {/* <li className={isActive("/trading") ? "current" : ""}><Link href="/trading">{t("HEADER.Trading")}</Link></li>
      <li><Link href={general?.OnlineTrading ? general?.OnlineTrading : "https://onlinetrade.chhayvann.com.kh/"} target="_blank">{t("HEADER.OnlineTrading")}</Link></li> */}
      {
        !checkIsHide("Latest News") ? (
          <li className={isDropdownActive(["/blog-1", "/blog-single", "/blog-1"]) ? "current" : ""}><Link href="/blog-1">{t("HEADER.NewsResearch")}</Link></li>
        ) : ""
      }
      {
        !checkIsHide("Careers") ? <li className={isActive("/career") ? "current" : ""}><Link href="/career">{t("HEADER.Career")}</Link></li> : ""
      }

      {/* Contact */}
      {!checkIsHide("") ? <li className={isActive("/contact") ? "current" : ""}><Link href="/contact">{t("HEADER.ContactUs")}</Link></li> : ""}

    </ul>
  );
}
