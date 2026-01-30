
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useAppStore } from "@/store/useAppStore";
import { api } from "@/app/config";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ handleMobileMenu }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const { services, contact } = useAppStore();
  const { t, i18n } = useTranslation();
  const { general } = useAppStore();
  const toggleDropdown = (key: number) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times-circle"></i>
          </span>

          <div className="logo-box">
              <Link href="/" aria-label="logo image">
                  <Image src={`${general?.logo_footer ? api.FILE_URL + general?.logo_footer : "/assets/images/Chhayvann-png.png"}`} alt="Image" width={100} height={27} priority />
              </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {/* Home */}
              <li>
                <Link href="/">{t("HEADER.HOME")}</Link>
              </li>
              <li className={`dropdown ${activeDropdown == 1 ? "current" : ""}`}>
                <Link href="#">{t("HEADER.Company")}</Link>
                <ul style={{ display: activeDropdown == 1 ? "block" : "none" }}>
                  <li><Link href="/about">{t("HEADER.AboutUs")}</Link></li>
                  <li><Link href="/history">{t("HEADER.History")}</Link></li>
                  <li><Link href="/team">{t("HEADER.TeamMembers")}</Link></li>
                  <li><Link href="/testimonials">{t("HEADER.Testimonials")}</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 1 ? "open" : ""}`} onClick={() => toggleDropdown(1)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className={`dropdown ${activeDropdown == 2 ? "current" : ""}`}><Link href="#">{t("HEADER.Services")}</Link>
                <ul style={{ display: activeDropdown == 2 ? "block" : "none" }}>
                  <li><Link href="/exchange-rate">{t("HEADER.ExchangeRate")}</Link></li>
                  {
                    services?.map((q:any,index:any) => (
                      <li key={index}><Link href={`/service/${q.id}`}>
                        { i18n.language == "KHM" && q.titleKm ? q.titleKm : q.title }
                      </Link></li>
                    ))
                  }
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 2 ? "open" : ""}`} onClick={() => toggleDropdown(2)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li><Link href="/products">{t("HEADER.Products")}</Link></li>
              {/* Trading Page */}
              <li><Link href="/trading">{t("HEADER.Trading")}</Link></li>
              <li><Link href="https://onlinetrade.chhayvann.com.kh/" target="_blank">{t("HEADER.OnlineTrading")}</Link></li>
              <li><Link href="/blog-1">{t("HEADER.NewsResearch")}</Link></li>
              <li><Link href="/career">{t("HEADER.Career")}</Link></li>
              {/* Contact */}
              <li><Link href="/contact">{t("HEADER.ContactUs")}</Link></li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            {
              contact?.phoneNumber?.map((q:any,index:any) => (
                <li key={index}>
                  <i className="fa fa-phone-alt"></i>
                  <a href={`tel:${q.number}`}>{q.number}</a>
                </li>
              ))
            }
            <li>
                <i className="fa fa-envelope"></i>
                <Link href={`mailto:${contact?.email1}`}>{contact?.email1}</Link>
            </li>
          </ul>
          <ul className="social-container">
            {
              contact?.facebookLink ? (
                <li className="facebook-icon">
                    <a href={contact?.facebookLink} target="_blank">
                        <i className="icon-facebook"></i>
                    </a>
                </li>
              ) : ""
            }
            {
              contact?.telegramLink ? (
                <li className="telegram-icon">
                    <a href={contact?.telegramLink} target="_blank">
                        <i className="icon-telegram-1"></i>
                    </a>
                </li>
              ) : ""
            }
            {
              contact?.instagramLink ? (
                <li className="instagram-icon">
                    <a href={contact?.instagramLink} target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
              ) : ""
            }
            {
              contact?.youtube ? (
                <li className="youtube-icon">
                    <a href={contact?.youtube} target="_blank">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li>
              ) : ""
            }
        </ul>
        </div>

      </div>

      {/* Overlay */}
      <div
        className="nav-overlay"
      />
    </>
  );
}
