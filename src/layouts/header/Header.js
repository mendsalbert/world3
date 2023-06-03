import Link from "next/link";
import { Fragment, useState } from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderSidebar from "./HeaderSidebar";
import { Blog, Contact, Donation, Home, Page, Portfolio } from "./Menus";
import MobileMenu from "./MobileMenu";
import StickNav from "./StickNav";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const openMobileMenu = () => {
    document.querySelector("body").classList.add("mobile-menu-visible");
  };
  const closMobileMenu = () => {
    document.querySelector("body").classList.remove("mobile-menu-visible");
  };
  return (
    <Fragment>
      <header className="main-header header-style-two">
        {/* Header Upper */}
        <div className="header-upper">
          <div className="header-container-box">
            <div className="inner-container">
              <div className="left-column">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/world3-logo.png"
                        alt=""
                        width={50}
                      />
                    </a>
                  </Link>
                </div>
                {/*Nav Box*/}
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler"
                    onClick={() => openMobileMenu()}
                  >
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link href={"/"}>
                            <a href="#">Home </a>
                          </Link>
                        </li>
                        <li className="dropdown">
                          <Link href={"/about"}>
                            <a href="/about">About </a>
                          </Link>
                        </li>

                        <li className="navigation">
                          <Link href={"/donation-grid"}>
                            <a href="/donation-grid">Donations</a>
                          </Link>
                        </li>

                        <Contact />
                      </ul>
                    </div>
                  </nav>
                  {/* language */}
                </div>
              </div>
              <div className="right-column">
                <ConnectWallet theme="dark" />

                <div
                  className="search-toggler"
                  onClick={() => setSearchToggle(true)}
                >
                  <i className="far fa-search" />
                </div>

                <div
                  className="menu-bar sidemenu-nav-toggler"
                  onClick={() => setSideBarToggle(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user-circle"
                    width="28"
                    height="28"
                    className="text-white "
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                  </svg>
                  {/* <img src="assets/images/icons/icon-menu.png" alt="" /> */}
                </div>
                <Link href={"/donation-grid"}>
                  <a href="#" className="primary_btn style-seven">
                    Donations
                    <i className="far fa-heart" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <StickNav
          openMobileMenu={() => openMobileMenu()}
          openSidebar={() => setSideBarToggle(true)}
          openSearchBar={() => setSearchToggle(true)}
        />
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}
        <MobileMenu close={() => closMobileMenu()} />
        {/* End Mobile Menu */}
        <div
          className="nav-overlay"
          style={{ display: sideBarToggle ? "block" : "none" }}
          onClick={() => setSideBarToggle(false)}
        />
      </header>
      <HeaderSidebar
        open={sideBarToggle}
        close={() => setSideBarToggle(false)}
      />
      <HeaderSearch open={searchToggle} close={() => setSearchToggle(false)} />
    </Fragment>
  );
};
export default Header;
