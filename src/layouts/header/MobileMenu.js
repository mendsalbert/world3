import Link from "next/link";
import { useState } from "react";
import { Blog, Contact, Donation, Home, Page, Portfolio } from "./Menus";

const MobileMenu = ({ close }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    activeClass = (value) => (value === activeMenu ? "open" : "");
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn" onClick={() => close()}>
        <i className="icon far fa-times" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link href="/">
            <a>
              <img src="assets/images/world3-logo.png" alt="" width={50} />{" "}
            </a>
          </Link>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <div
            className="collapse navbar-collapse show clearfix"
            id="navbarSupportedContent"
          >
            <ul className="navigation">
              <li className="dropdown">
                <a href="#">Home </a>
                <ul style={activeLi("Home")}>
                  <Home />
                </ul>
                <div
                  className={`dropdown-btn ${activeClass("Home")}`}
                  onClick={() => activeMenuSet("Home")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Page </a>
                <ul style={activeLi("Page")}>
                  <Page />
                </ul>
                <div
                  className={`dropdown-btn ${activeClass("Page")}`}
                  onClick={() => activeMenuSet("Page")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Donation</a>
                <ul style={activeLi("Donation")}>
                  <Donation />
                </ul>
                <div
                  className={`dropdown-btn ${activeClass("Donation")}`}
                  onClick={() => activeMenuSet("Donation")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Blog</a>
                <ul style={activeLi("Blog")}>
                  <Blog />
                </ul>
                <div
                  className={`dropdown-btn ${activeClass("Blog")}`}
                  onClick={() => activeMenuSet("Blog")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <Portfolio />
              <Contact />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default MobileMenu;
