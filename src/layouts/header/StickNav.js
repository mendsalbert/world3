import Link from "next/link";
import { Blog, Contact, Donation, Home, Page, Portfolio } from "./Menus";

const StickNav = ({
  openSidebar,
  openSearchBar,
  logo,
  sidebarImg,
  btnClass,
}) => {
  return (
    <div className="sticky-header animated slideInDown">
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
                <div className="mobile-nav-toggler">
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
              <div className="search-toggler" onClick={() => openSearchBar()}>
                <i className="far fa-search" />
              </div>

              <Link href={"/donation-grid"}>
                <a
                  href="#"
                  className={btnClass ? btnClass : "primary_btn style-seven"}
                >
                  Donations
                  <i className="far fa-heart" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickNav;
