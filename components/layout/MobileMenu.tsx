
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useAppStore } from "@/store/useAppStore";
import { api } from "@/app/config";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

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
    <>
      {/* Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times-circle"></i>
          </span>

          {
            general?.logo_footer ? (
              <div className="logo-box">
                  <Link href="/" aria-label="logo image">
                      <Image src={`${general?.logo_footer ? api.FILE_URL + general?.logo_footer : ""}`} alt="Image" width={100} height={27} priority />
                  </Link>
              </div>
            ) : ""
          }

          <div className="mobile-nav__container">
            <ul className="main-menu__list">

              {/* Home */}
              <li className={isActive("/") ? "current" : ""}>
                <Link href="/">{t("HEADER.HOME")}</Link>
              </li>

              {/* Company */}
              <li
                className={`dropdown ${
                  activeDropdown === 1 ||
                  isDropdownActive([
                    "/about",
                    "/history",
                    "/team",
                    "/testimonials",
                    "/organization",
                  ])
                    ? "current"
                    : ""
                }`}
              >
                <Link href="#">{t("HEADER.Company")}</Link>

                <ul
                  style={{
                    display: activeDropdown === 1 ? "block" : "none",
                  }}
                >
                  {/* About */}
                  <li className={isActive("/about") ? "current" : ""}>
                    <Link href="/about">{t("HEADER.AboutUs")}</Link>
                  </li>

                  {/* History */}
                  {!checkIsHide("Our History") ? (
                    <li className={isActive("/history") ? "current" : ""}>
                      <Link href="/history">{t("HEADER.History")}</Link>
                    </li>
                  ) : null}

                  {/* Team */}
                  {!checkIsHide("Our Team") ? (
                    <li className={isActive("/team") ? "current" : ""}>
                      <Link href="/team">{t("HEADER.co_founders")}</Link>
                    </li>
                  ) : null}

                  {/* Organization */}
                  {!checkIsHide("Organization") ? (
                    <li className={isActive("/organization") ? "current" : ""}>
                      <Link href="/organization">
                        {t("HEADER.OrganizationChart")}
                      </Link>
                    </li>
                  ) : null}

                  {/* Testimonials */}
                  {!checkIsHide("Testimonials") ? (
                    <li className={isActive("/testimonials") ? "current" : ""}>
                      <Link href="/testimonials">
                        {t("HEADER.Testimonials")}
                      </Link>
                    </li>
                  ) : null}
                </ul>

                {/* Mobile dropdown button */}
                <div
                  className={`dropdown-btn ${
                    activeDropdown === 1 ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown(1)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Products & Services */}
              <li
                className={`dropdown ${
                  activeDropdown === 2 ||
                  isDropdownActive([
                    "/service",
                    "/exchange-rate",
                    "/products",
                  ])
                    ? "current"
                    : ""
                }`}
              >
                <Link href="#">{t("HEADER.products_and_services")}</Link>

                <ul
                  style={{
                    display: activeDropdown === 2 ? "block" : "none",
                  }}
                >
                  {/* Products */}
                  {!checkIsHide("Our Products") ? (
                    <li className={isActive("/products") ? "current" : ""}>
                      <Link href="/products">{t("HEADER.Gold")}</Link>
                    </li>
                  ) : null}

                  {/* Exchange Rate */}
                  {!checkIsHide("Currency Exchange") ? (
                    <li className={isActive("/exchange-rate") ? "current" : ""}>
                      <Link href="/exchange-rate">
                        {t("HEADER.ExchangeRate")}
                      </Link>
                    </li>
                  ) : null}

                  {/* Services */}
                  {services?.map((q: any, index: number) => (
                    <li
                      key={index}
                      className={
                        isActive(`/service/${q.slug}`) ? "current" : ""
                      }
                    >
                      <Link href={`/service/${q.slug}`}>
                        {i18n.language === "KHM" && q.titleKm
                          ? q.titleKm
                          : q.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile dropdown button */}
                <div
                  className={`dropdown-btn ${
                    activeDropdown === 2 ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown(2)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Platform */}
              {!checkIsHide("Our Platform") ? (
                <li className={isActive("/platform") ? "current" : ""}>
                  <Link href="/platform">{t("HEADER.Platform")}</Link>
                </li>
              ) : null}

              {/* News */}
              {!checkIsHide("Latest News") ? (
                <li
                  className={
                    isDropdownActive([
                      "/blog-1",
                      "/blog-single",
                    ])
                      ? "current"
                      : ""
                  }
                >
                  <Link href="/blog-1">
                    {t("HEADER.NewsResearch")}
                  </Link>
                </li>
              ) : null}

              {/* Career */}
              {!checkIsHide("Careers") ? (
                <li className={isActive("/career") ? "current" : ""}>
                  <Link href="/career">{t("HEADER.Career")}</Link>
                </li>
              ) : null}

              {/* Contact */}
              {!checkIsHide("Contact") ? (
                <li className={isActive("/contact") ? "current" : ""}>
                  <Link href="/contact">{t("HEADER.ContactUs")}</Link>
                </li>
              ) : null}

            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            {
              contact?.phoneNumber?.map((q:any,index:any) => (
                <li key={index}>
                  <i className="fa fa-phone-alt"></i>
                  <a href={`tel:${q.number}`}>{i18n.language == "KHM" && q?.numberKm ? q?.numberKm : q?.number}</a>
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
