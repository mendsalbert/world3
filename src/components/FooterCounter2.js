import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const FooterCounter2 = ({ logo, extraClass }) => {
  return (
    <div
      className={extraClass ? extraClass : "section-footer-counter-section "}
    >
      <div className="theme_container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Link href="/index-4">
              <a>
                <div className="footer-logo">
                  <img
                    src={logo ? logo : "assets/images/footer-logo-dark.png"}
                    alt=""
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="col-lg-5">
            <div className="footer-counter-block">
              <div className="count-outer count-box right-column counted">
                {/* <span
                  className="count-text"
                  data-speed={3000}
                  data-stop={25360}
                >
                  25360
                </span> */}
                <Counter end={25360} />
                <span className="plus">+</span>
                <span className="crl3">Raised For Donation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterCounter2;
