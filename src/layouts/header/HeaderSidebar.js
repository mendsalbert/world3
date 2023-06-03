import { Fragment } from "react";

const HeaderSidebar = ({ open, close }) => {
  return (
    <Fragment>
      <section
        className={`header-widget-sidebar ${open ? "open_sidebar" : ""}`}
      >
        <div className="wrapper-box">
          <div className="content-wrapper">
            <div
              className="header-widget-sidebar-close"
              onClick={() => close()}
            >
              <span className="far fa-times" />
            </div>

            <div className="footer-widget-item recent-news-widget widget">
              <h4>Donation History</h4>
              <div className="footer-widget-news">
                <ul>
                  <li>
                    <div className="text-box">
                      <p>
                        <span className="far fa-calendar-alt" />
                        24th January 2021
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="text-box">
                      <p>
                        <span className="far fa-calendar-alt" />
                        24th January 2021
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default HeaderSidebar;
