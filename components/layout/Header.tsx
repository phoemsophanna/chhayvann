// components/layout/Header.tsx
'use client';

import { useState, useEffect, useCallback } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import SearchPopup from "./SearchPopup";
import SidebarPopup from "./SidebarPopup";

import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import { usePathname } from "next/navigation";

interface HeaderProps {
  /** Choose header style (1–4) */
  style?: 1 | 2 | 3 | 4;
}

export default function Header({ style = 1 }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((s) => !s);
  const pathName = usePathname();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle mobile menu
  const handleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => !prev);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    }
  }, [isMobileMenu]);

  useEffect(() => {
    if(typeof document != "undefined"){
      if(document.body.classList.contains("mobile-menu-visible")){
        document.body.classList.remove("mobile-menu-visible");
      }
    }
  },[pathName])

  // Toggle search popup
  const handlePopup = useCallback(() => {
    setPopupOpen((prev) => !prev);
  }, []);

  const headerProps = {
    scroll: isScrolled,
    isMobileMenu,
    handleMobileMenu,
    handlePopup,
    handleSidebar,
  };

  // Map header styles
  const headers = {
    1: <Header1 {...headerProps} />,
    2: <Header2 {...headerProps} />,
    3: <Header3 {...headerProps} />,
    4: <Header4 {...headerProps} />,
  } as const;

  return (
    <>
      {/* Background animation / image */}
      <DataBg />

      {/* Header variant */}
      {headers[style] ?? <Header1 {...headerProps} />}

      {/* Search popup */}
      <SearchPopup isPopup={isPopupOpen} handlePopup={handlePopup} />

      {/* sidebar popup */}
      <SidebarPopup isOpen={isSidebar} onClose={handleSidebar} />

      {/* Back to top button */}
      <BackToTop scroll={isScrolled} />
    </>
  );
}
