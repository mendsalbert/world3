import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ extraClass }) => {
  return (
    <Fragment>
      {" "}
      <footer className={extraClass ? extraClass : "main-footer"}>
        <div className="main-footer-top">
          <div className="theme_container">
            <div className="widgets-section">
              <div className="row clearfix">
                {/*Start Footer Widget Item*/}
                <div
                  className="col-lg-3 col-md-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="footer-widget-item">
                    <div className="title">
                      <h2>About Us</h2>
                    </div>
                    <div className="our-info">
                      <div className="text">
                        <p>
                          Charity Foundation is committed to addressing crucial
                          global challenges and making a positive impact in the
                          lives of individuals and communities around the world.
                        </p>
                      </div>
                    </div>
                    <div className="icon-list">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="far fa-map-marker-alt" />
                          </div>
                          <div className="text">
                            4486 Richards Avenue, Modesto CA - 95354
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="far fa-envelope" />
                          </div>
                          <div className="text">hotline@gmail.com</div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="far fa-phone" />
                          </div>
                          <div className="text">
                            4486 Richards Avenue, Modesto CA - 95354
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*End Footer Widget Item*/}
                {/* Start Footer Widget Item */}
                <div
                  className="col-lg-3 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-widget">
                    <div className="title">
                      <h2>Causes</h2>
                    </div>
                    <div className="icon-list">
                      <ul>
                        <li>
                          <i className="far fa-arrow-right" />
                          Education
                        </li>
                        <li>
                          <i className="far fa-arrow-right" />
                          Ecosystems
                        </li>
                        <li>
                          <i className="far fa-arrow-right" />
                          Medical
                        </li>
                        <li>
                          <i className="far fa-arrow-right" />
                          Foods
                        </li>
                        <li>
                          <i className="far fa-arrow-right" />
                          Shelter
                        </li>
                        <li>
                          <i className="far fa-arrow-right" />
                          Water
                        </li>
                        <li>
                          <i className="far fa-arrow-right" />
                          Donations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*End Footer Widget Item*/}
                {/*Start Footer Widget Item*/}

                {/*End Footer Widget Item*/}
                {/*Start Footer Widget Item*/}
                <div
                  className="col-lg-3 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-widget-item-2 mar-l13">
                    <div className="title">
                      <h2>Newsletter</h2>
                    </div>
                    <div className="footer-widget-newsletter">
                      <p>
                        Subscribe our newsletter to get our <br /> latest
                        updates &amp; news.
                      </p>
                      <div className="subscribe-box">
                        <form
                          onSubmit={(e) => e.preventDefault()}
                          className="subscribe-form"
                          action="#"
                        >
                          <div className="input-box">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                            />
                            <button type="submit">
                              <span className="far fa-arrow-right" />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="social-link">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Footer Widget Item*/}
              </div>
            </div>
          </div>
        </div>
        {/*Start Main Footer Bottom */}
        <div className="main-footer-bottom">
          <div className="theme_container">
            <div className="main-footer-bottom-inner">
              <ul>
                <li>
                  <Link href="/about">
                    <a>Terms of use</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>Privacy &amp; Policy</a>
                  </Link>
                </li>
              </ul>
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} Masden. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End Main Footer Bottom */}
      </footer>
    </Fragment>
  );
};
export default Footer;
