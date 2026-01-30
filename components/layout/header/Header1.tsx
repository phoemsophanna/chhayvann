import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";
import Language from "../Language";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { api } from "@/app/config";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
};

export default function Header1({ scroll, handleMobileMenu, handlePopup }: Header1Props) {
    const { t, i18n } = useTranslation();

    const pathname = usePathname();
    const { setGeneral, general, setContact, setServices, setLoaded, loaded } = useAppStore();
    useEffect(() => {
        if (!loaded) {
            axios.get(`${api.BASE_URL}/layout`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": i18n.language
                }
            }).then((res:any) => {
                if(res.data?.status == "success") {
                    setGeneral(res.data?.general);
                    setContact(res.data?.contact);
                    setServices(res.data?.services);
                    setLoaded();
                }
            });
        }
    },[loaded]);

    const isActive = (path: string) => pathname === path;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    console.log(general);
  return (
    <>
      {/* main header */}
      <header className={`main-header main-header-style1 ${scroll ? "fixed-header" : ""}`}>
        
        <div className="main-header-style1__content">
            <div className="container">
                <div className="main-header-style1__content-inner">
                    <div className="main-header-style1__content-top">
                        <div className="main-header-style1__content-top-left">
                            <div className="header-logo-box-style1">
                                <Link href="/">
                                    <Image src={`${general?.logo_header ? api.FILE_URL + general?.logo_header : "/assets/images/Chhayvann-Name.png"}`} alt="Awesome Logo" width={320} height={27} priority />
                                </Link>
                            </div>
                            <div className="header-trading-time-style1">
                                <div className="text">
                                </div>
                            </div>
                        </div>

                        <div className="main-header-style1__content-top-middle">
                            <div className="btn-box">
                                <Link className={`btn-one ${isActive("/individual") ? "active" : ""}`} href="/individual">
                                    <span className="txt">{t("HEADER.OpenIndividualAccount")}</span>
                                </Link>
                                <Link className={`btn-one ${isActive("/corporate") ? "active" : ""}`} href="/corporate">
                                    <span className="txt">{t("HEADER.OpenCorporateAccount")}</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="main-header-style1__content-bottom">
                        <div className="main-header-style1__content-bottom-left">
                            <nav className="main-menu main-menu-style1">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="sticky-logo-box-style1">
                                            <Link href="/">
                                                <Image src={`${general?.logo_footer ? api.FILE_URL + general?.logo_footer : "/assets/images/Chhayvann-png.png"}`} alt="Awesome Logo" width={189} height={27} priority />
                                            </Link>
                                        </div>
                                        <div className="main-menu-style1__left">
                                            <div className="main-menu-box">
                                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" style={{height: "40px",width: "40px", padding: "5px", borderRadius: "10px", border: "1px solid #fff"}}><path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"></path></svg>
                                                </Link>

                                                <Menu/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            
                        </div>

                        <div className="main-header-style1__content-bottom-right">
                            <div className="language-switcher-style1">
                                <Language/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* sticky header */}
        <div className={`stricky-header stricky-header--style1 stricked-menu main-menu ${scroll ? "animated slideInDown" : ""}`}>
          <div className="sticky-header__content">
                <div className="main-menu__wrapper clearfix">
                    <div className="main-menu__wrapper-inner">
                        <div className="sticky-logo-box-style1">
                            <Link href="/">
                                <Image src={`${general?.logo_footer ? api.FILE_URL + general?.logo_footer : "/assets/images/Chhayvann-png.png"}`} alt="Awesome Logo" width={90} height={27} priority />
                            </Link>
                        </div>
                        <div className="main-menu-style1__left">
                            <div className="main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                    <i className="fa fa-bars"></i>
                                </Link>

                                <Menu/>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <MobileMenu
          isSidebar={false}
          handleMobileMenu={handleMobileMenu}
        />
      </header>
    </>
  );
}
