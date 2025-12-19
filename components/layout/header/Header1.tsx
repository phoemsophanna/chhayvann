import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";
import Language from "../Language";
import { useTranslation } from "react-i18next";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
};

export default function Header1({ scroll, handleMobileMenu, handlePopup }: Header1Props) {
    const { t } = useTranslation();
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
                                    <Image src="/assets/images/Chhayvann-png.png" alt="Awesome Logo" width={90} height={27} priority />
                                </Link>
                            </div>
                            <div className="header-trading-time-style1">
                                <div className="text">
                                    <div className="main-header-style1__content-top-middle">
                                        <div className="btn-box">
                                            <Link className="btn-one" href={"#"}>
                                                <span className="txt">Career</span>
                                            </Link>
                                            <Link className="btn-one" href={"/faq"}>
                                                <span className="txt">Faq's</span>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <p><span>Stock:</span> 9.30 am to 4.00 pm</p>
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/arrow-right.png" alt="Icon" width={22} height={14} priority />
                                            </div>
                                            <div className="text1">
                                                <h4>Stock</h4>
                                                <p>9.30 am to 4.00 pm</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/arrow-right.png" alt="Icon" width={22} height={14} priority />
                                            </div>
                                            <div className="text1">
                                                <h4>Forex</h4>
                                                <p>Open 24/5</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/arrow-right.png" alt="Icon" width={22} height={14} priority />
                                            </div>
                                            <div className="text1">
                                                <h4>Commodity Market</h4>
                                                <p>8.00 am to 5.00 pm</p>
                                            </div>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>

                        {/* <div className="main-header-style1__content-top-middle">
                            <div className="btn-box">
                                <Link className="btn-one active" href="#">
                                    <span className="txt">Clients</span>
                                </Link>
                                <Link className="btn-one" href="#">
                                    <span className="txt">Partners</span>
                                </Link>
                            </div>
                        </div> */}

                        <div className="main-header-style1__content-top-middle">
                            <div className="btn-box">
                                <Link className="btn-one active" target="_blank" href="https://register.ylgbullion.co.th/sgp/ylg_bullion_real/individual">
                                    <span className="txt">Open Individual Account</span>
                                </Link>
                                <Link className="btn-one" target="_blank" href="https://register.ylgbullion.co.th/sgp/ylg_bullion_real/corporate">
                                    <span className="txt">Open Corporate Account</span>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="main-header-style1__content-top-right">
                            <div className="header-login-register-style1">
                                <div className="icon">
                                    <span className="icon-lock"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span>
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>My Portal</h3>
                                    <p><Link href="#">Login - or - Register</Link></p>
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-login.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Login</Link></h4>
                                                <p>Enter to Trade</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-register.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Register</Link></h4>
                                                <p>Start Your Journey</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-logout.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Logout</Link></h4>
                                                <p>Goodbye, See You</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-help-center-style1">
                                <div className="text">
                                    <i className="icon-link"></i>
                                    <p>Help Center</p>
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-faq.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Faq&apos;s</Link></h4>
                                                <p>Get 100+ answers.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-live-chat.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Live Chat</Link></h4>
                                                <p>Anytime, Anywhere.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-community-forums.png" alt="Icon" width={26} height={23} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Community Forums</Link></h4>
                                                <p>Unite & Discuss.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-tutorials.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="#">Tutorials</Link></h4>
                                                <p>Skill Up Now.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div> */}

                    </div>

                    <div className="main-header-style1__content-bottom">
                        <div className="main-header-style1__content-bottom-left">
                            <nav className="main-menu main-menu-style1">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="sticky-logo-box-style1">
                                            <Link href="/">
                                                <Image src="/assets/images/Chhayvann-png.png" alt="Awesome Logo" width={189} height={27} priority />
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
                                {/* <div className="icon">
                                    <i className="icon-language"></i>
                                </div> */}
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
                                <Image src="/assets/images/Chhayvann-png.png" alt="Awesome Logo" width={90} height={27} priority />
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
