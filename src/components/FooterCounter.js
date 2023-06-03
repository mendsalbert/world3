import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const FooterCounter = () => {
  return (
    <div className="section-footer-counter-section">
      <div className="theme_container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-counter-block">
              <div className="count-outer count-box">
                <span
                  className="count-text"
                  data-speed={3000}
                  data-stop={25360}
                >
                  0
                </span>
                <Counter end={3000} />
                <span className="plus">+</span>
                <span className="crl3">Raised For Donation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="donation-form-one-form-wrap style-two"
            >
              <input
                type="text"
                placeholder="$1000"
                className="donation-form-one-price-form"
                disabled
              />
              <input
                type="text"
                placeholder="$500"
                className="donation-form-one-price-form"
                disabled
              />
              <input
                type="text"
                placeholder="$100"
                className="donation-form-one-price-form"
                disabled
              />
              <input
                type="text"
                placeholder="$25"
                className="donation-form-one-price-form"
                disabled
              />
              <div className="donation-form-one-submit-btn">
                <Link href="/donation-grid">
                  <a className="primary_btn-one">
                    Donation
                    <i className="far fa-heart" />
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterCounter;
