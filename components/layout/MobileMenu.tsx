
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ handleMobileMenu }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

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
                  <Image src="/assets/images/Chhayvann-png.png" alt="Image" width={100} height={27} priority />
              </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {/* Home */}
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className={`dropdown ${activeDropdown == 1 ? "current" : ""}`}>
                <Link href="#">Company</Link>
                <ul style={{ display: activeDropdown == 1 ? "block" : "none" }}>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/history">History</Link></li>
                  <li><Link href="/team">Team Members</Link></li>
                  <li><Link href="/testimonials">Testimonials</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 1 ? "open" : ""}`} onClick={() => toggleDropdown(1)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className={`dropdown ${activeDropdown == 2 ? "current" : ""}`}><Link href="/service">Services</Link>
                <ul style={{ display: activeDropdown == 2 ? "block" : "none" }}>
                  <li><Link href="/service/1">Exchange Rate</Link></li>
                  <li><Link href="/service/2">Money Tranfer</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 2 ? "open" : ""}`} onClick={() => toggleDropdown(2)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li><Link href="/products">Products</Link></li>
              {/* Trading Page */}
              <li><Link href="/trading">Trading</Link></li>
              <li><Link href="https://inter2.ylgonline.com/" target="_blank">Online Trading</Link></li>
              <li><Link href="/blog-1">News & Research</Link></li>
              <li><Link href="/career">Career</Link></li>
              {/* Contact */}
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
              <li>
                  <i className="fa fa-phone-alt"></i>
                  <a href="tel:123456789">+855 12-XXX-XXX</a>
              </li>
              <li>
                  <i className="fa fa-phone-alt"></i>
                  <a href="tel:123456789">+855 23-XXX-XXX</a>
              </li>
              <li>
                  <i className="fa fa-envelope"></i>
                  <Link href="mailto:info@example.com">info@chhayvann.com.kh</Link>
              </li>
          </ul>
          <ul className="social-container">
            <li className="facebook-icon">
                <a href="">
                    <i className="icon-facebook"></i>
                </a>
            </li>
            <li className="telegram-icon">
                <a href="">
                    <i className="icon-telegram-1"></i>
                </a>
            </li>
            <li className="instagram-icon">
                <a href="">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="youtube-icon">
                <a href="">
                    <i className="fab fa-youtube"></i>
                </a>
            </li>
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
