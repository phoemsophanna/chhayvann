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
          <li className={isActive("/organization") ? "current" : ""}><Link href="/organization">{t("HEADER.OrganizationChart")}</Link></li>
          <li className={isActive("/history") ? "current" : ""}><Link href="/history">{t("HEADER.History")}</Link></li>
          {
              general?.teams > 0 ? (
                <li className={isActive("/team") ? "current" : ""}><Link href="/team">{t("HEADER.TeamMembers")}</Link></li>
              ) : ""
          }
          {
              general?.testimonels > 0 ? (
                <li className={isActive("/testimonials") ? "current" : ""}><Link href="/testimonials">{t("HEADER.Testimonials")}</Link></li>
              ) : ""
          }
        </ul>
      </li>
      <li className={isDropdownActive(["/service"]) ? "dropdown current" : "dropdown"}><Link href="#">{t("HEADER.Services")}</Link>
        <ul>
          <li><Link href="/exchange-rate">{t("HEADER.ExchangeRate")}</Link></li>
          {
            services?.map((q:any,index:any) => (
              <li key={index}><Link href={`/service/${q.id}`}>
                { i18n.language == "KHM" && q.titleKm ? q.titleKm : q.title }
              </Link></li>
            ))
          }
        </ul>
      </li>
      <li className={isActive("/products") ? "current" : ""}><Link href="/products">{t("HEADER.Products")}</Link></li>

      {/* Trading Page */}
      <li className={isActive("/trading") ? "current" : ""}><Link href="/trading">{t("HEADER.Trading")}</Link></li>
      <li><Link href="https://onlinetrade.chhayvann.com.kh/" target="_blank">{t("HEADER.OnlineTrading")}</Link></li>
      {
        general?.article > 0 ? (
          <li className={isDropdownActive(["/blog-1", "/blog-single", "/blog-1"]) ? "current" : ""}><Link href="/blog-1">{t("HEADER.NewsResearch")}</Link></li>
        ) : ""
      }
      <li className={isActive("/career") ? "current" : ""}><Link href="/career">{t("HEADER.Career")}</Link></li>

      {/* Contact */}
      <li className={isActive("/contact") ? "current" : ""}><Link href="/contact">{t("HEADER.ContactUs")}</Link></li>

    </ul>
  );
}
