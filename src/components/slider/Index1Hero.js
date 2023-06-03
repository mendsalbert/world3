import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { banner1 } from "../../sliderProps";
const Index1Hero = () => {
  return (
    <Swiper
      {...banner1}
      className="banner-section-one-carousel owl-carousel owl-theme"
    >
      <SwiperSlide>
        <div className="banner-block-one">
          <div className="banner-image-shape">
            <img src="assets/images/shape/shape-4.png" alt="" />
          </div>
          <div
            className="image-layer"
            style={{
              backgroundImage:
                "url(assets/images/main-slider/main-slider-2.jpg)",
            }}
          ></div>
          <div className="theme_container">
            <div className="content-box">
              <div className="inner-box">
                <h6 className="banner-slider-sub-title mb-30">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-11.png" alt="" />
                  </span>
                  Welcome to World3
                </h6>
                <h2 className="banner-slider-title mb-30">
                  Global <br /> Decentralized <br /> Crowdfunding <br />{" "}
                  Platform
                </h2>
                <div className="banner-slider-btn">
                  <Link href="/">
                    <a className="primary_btn style-seven">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Index1Hero;
