import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layouts from "../src/layouts/Layouts";
import { fiveItemCarousel } from "../src/sliderProps";

const E404 = () => {
  return (
    <Layouts>
      <section className="error-section">
        <div className="theme_container">
          <div className="row text-center">
            <div className="error-block">
              <div className="image">
                <img src="assets/images/404.png" alt="" />
              </div>
              <h3>OPPS!</h3>
              <div className="text">
                {`We’re Sorry the page are con’t be found`}
              </div>
              <div className="error-button">
                <Link href="/">
                  <a className="primary_btn-ten">
                    Go to Home <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner section */}
      <section className="partner style-five">
        <div className="theme_container">
          <Swiper
            {...fiveItemCarousel}
            className="five-item-carousel owl-theme owl-carousel"
          >
            <SwiperSlide className="image">
              <img src="assets/images/resource/cta-6.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/cta-7.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/cta-8.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/cta-9.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/cta-10.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Layouts>
  );
};
export default E404;
