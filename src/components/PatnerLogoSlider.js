import { Swiper, SwiperSlide } from "swiper/react";
import { fiveItemCarousel } from "../sliderProps";

const PatnerLogoSlider = () => {
  return (
    <section className="partner style-seven">
      <div className="theme_container">
        <Swiper
          {...fiveItemCarousel}
          className="five-item-carousel owl-theme owl-carousel"
        >
          {/*Start Brand Block Two*/}
          <SwiperSlide className="brand-block-two">
            <a href="#">
              <img src="assets/images/resource/cta-6.png" alt="Awesome Image" />
            </a>
            <div className="overlay-box">
              <a href="#">
                <img src="assets/images/resource/cta.png" alt="Awesome Image" />
              </a>
            </div>
          </SwiperSlide>
          {/*End Brand Block Two*/}
          {/*Start Brand Block Two*/}
          <SwiperSlide className="brand-block-two">
            <a href="#">
              <img src="assets/images/resource/cta-7.png" alt="Awesome Image" />
            </a>
            <div className="overlay-box">
              <a href="#">
                <img
                  src="assets/images/resource/cta-2.png"
                  alt="Awesome Image"
                />
              </a>
            </div>
          </SwiperSlide>
          {/*End Brand Block Two*/}
          {/*Start Brand Block Two*/}
          <SwiperSlide className="brand-block-two">
            <a href="#">
              <img src="assets/images/resource/cta-8.png" alt="Awesome Image" />
            </a>
            <div className="overlay-box">
              <a href="#">
                <img
                  src="assets/images/resource/cta-3.png"
                  alt="Awesome Image"
                />
              </a>
            </div>
          </SwiperSlide>
          {/*End Brand Block Two*/}
          {/*Start Brand Block Two*/}
          <SwiperSlide className="brand-block-two">
            <a href="#">
              <img src="assets/images/resource/cta-9.png" alt="Awesome Image" />
            </a>
            <div className="overlay-box">
              <a href="#">
                <img
                  src="assets/images/resource/cta-4.png"
                  alt="Awesome Image"
                />
              </a>
            </div>
          </SwiperSlide>
          {/*End Brand Block Two*/}
          {/*Start Brand Block Two*/}
          <SwiperSlide className="brand-block-two">
            <a href="#">
              <img
                src="assets/images/resource/cta-10.png"
                alt="Awesome Image"
              />
            </a>
            <div className="overlay-box">
              <a href="#">
                <img
                  src="assets/images/resource/cta-5.png"
                  alt="Awesome Image"
                />
              </a>
            </div>
          </SwiperSlide>
          {/*End Brand Block Two*/}
        </Swiper>
      </div>
    </section>
  );
};
export default PatnerLogoSlider;
