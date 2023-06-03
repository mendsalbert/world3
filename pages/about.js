import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";
import { itemTwoSlider } from "../src/sliderProps";

const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About Us"} />
      {/*End Breadcrumb Section One*/}
      {/* why choose us section */}
      <section className="why-choose-us style-two">
        <div className="theme_container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-5">
              <div className="image">
                <img src="assets/images/resource/about-5-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="choose-us-block style-two">
                <div className="image">
                  <img src="assets/images/resource/about-5-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="choose-us-block-two style-four">
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-4.png" alt="" />
                  </span>
                  Why Donate
                </div>
                <h2 className="sec-title mb-20">
                  Raise Your Hand to Help <br /> Save The World{" "}
                </h2>
                <div className="text">
                  Charity Foundation is committed to addressing crucial global
                  challenges and making a positive impact in the lives of
                  individuals and communities around the world. Through our
                  platform, we have identified four key areas of focus: Pure
                  Food & Water, Health & Medicine, Child Education, and Charity
                  For Life. We believe that by addressing these fundamental
                  needs, we can create a better future for all.
                </div>
                {/* <ul>
                  <li>
                    <i className="fas fa-check" />
                    We Save Natural Pollutants
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Made Large Space Tree Plantations
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    We Recycling The Wastes
                  </li>
                </ul>
                <div className="about-button">
                  <Link href="/about">
                    <a className="primary_btn">
                      Learn More
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                  <Link href="/volunteer">
                    <a className="right-button">
                      Become a Volunteer <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* what we do section */}
      <section className="what-we-do-section">
        <div
          className="bg"
          style={{
            backgroundImage: "url(assets/images/resource/service-map.png)",
          }}
        />
        <div className="theme_container">
          <div className="title-box">
            <div className="sub-title mb-20">
              <span className="title-sep-left">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
              What We Do
            </div>
            <h2 className="sec-title">
              We Work Differently to <br /> keep The World Safe{" "}
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="what-we-do-block"
                style={{
                  backgroundImage: "url(assets/images/resource/about-5-3.jpg)",
                }}
              >
                <div className="icon-box">
                  <i className="flaticon-fruit" />
                </div>
                <h4>Pure Food &amp; Water</h4>
                <div className="text">
                  Access to safe and nutritious food, as well as clean drinking
                  water, is essential for the well-being and development of
                  individuals. Our Pure Food & Water initiatives aim to support
                  projects that promote sustainable agriculture, combat hunger,
                  and provide access to clean water sources. Together, we can
                  work towards a world where everyone has access to the basic
                  necessities of life.{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="what-we-do-block"
                style={{
                  backgroundImage: "url(assets/images/resource/about-5-3.jpg)",
                }}
              >
                <div className="icon-box style-two">
                  <i className="flaticon-medicine" />
                </div>
                <h4>Health &amp; Medicine</h4>
                <div className="text">
                  We recognize the importance of quality healthcare services and
                  medical assistance for those in need. Through our Health &
                  Medicine initiatives, we strive to support healthcare
                  projects, medical research, and initiatives that improve the
                  overall well-being of individuals and communities. By
                  investing in healthcare, we can contribute to healthier lives
                  and stronger communities.{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="what-we-do-block"
                style={{
                  backgroundImage: "url(assets/images/resource/about-5-3.jpg)",
                }}
              >
                <div className="icon-box style-three">
                  <i className="flaticon-education" />
                </div>
                <h4>Child Education</h4>
                <div className="text">
                  Education is a powerful tool that can transform lives and
                  break the cycle of poverty. Our Child Education initiatives
                  focus on providing quality education opportunities to
                  children, especially those from disadvantaged backgrounds. We
                  support programs that enhance access to education, promote
                  literacy, and empower children with knowledge and skills for a
                  brighter future.{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="what-we-do-block"
                style={{
                  backgroundImage: "url(assets/images/resource/about-5-3.jpg)",
                }}
              >
                <div className="icon-box style-four">
                  <i className="flaticon-house" />
                </div>
                <h4>Charity For Live</h4>
                <div className="text">
                  Charity For Life encompasses our commitment to supporting
                  various charitable causes and initiatives that address
                  critical societal issues. From disaster relief efforts to
                  social welfare programs, we collaborate with trusted
                  organizations to provide immediate assistance and long-term
                  solutions to those in need. By standing together, we can bring
                  hope, compassion, and positive change to lives across the
                  globe.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact section */}
      <section className="funfact">
        <div className="theme_container">
          <div className="row">
            {/*Start Counter Block One*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="counter-block-one">
                <div className="count-outer count-box counted">
                  <div className="icon">
                    <i className="flaticon-charity" />
                  </div>
                  {/* <span
                    className="count-text"
                    data-speed={3000}
                    data-stop={5260}
                  >
                    0
                  </span> */}
                  <Counter end={5} />
                  <span className="plus">+</span>
                  <div className="text">
                    <p>Project Done</p>
                  </div>
                </div>
              </div>
            </div>
            {/*End Counter Block One*/}
            {/*Start Counter Block One*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="counter-block-one">
                <div className="count-outer count-box counted">
                  <div className="icon">
                    <i className="flaticon-volunteer" />
                  </div>
                  {/* <span
                    className="count-text"
                    data-speed={3000}
                    data-stop={7853}
                  >
                    0
                  </span> */}
                  <Counter end={10} />
                  <span className="plus">+</span>
                  <div className="text">
                    <p>Expert Volunteer</p>
                  </div>
                </div>
              </div>
            </div>
            {/*End Counter Block One*/}
            {/*Start Counter Block One*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="counter-block-one">
                <div className="count-outer count-box counted">
                  <div className="icon">
                    <i className="flaticon-debit-card" />
                  </div>
                  {/* <span
                    className="count-text"
                    data-speed={3000}
                    data-stop={8564}
                  >
                    0
                  </span> */}

                  <Counter end={7} />
                  <span className="plus">+</span>
                  <div className="text">
                    <p>Global Partners</p>
                  </div>
                </div>
              </div>
            </div>
            {/*End Counter Block One*/}
            {/*Start Counter Block One*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="counter-block-one">
                <div className="count-outer count-box counted">
                  <div className="icon">
                    <i className="flaticon-solidarity" />
                  </div>
                  {/* <span
                    className="count-text"
                    data-speed={3000}
                    data-stop={8962}
                  >
                    0
                  </span> */}

                  <Counter end={6} />
                  <span className="plus">+</span>
                  <div className="text">
                    <p>Raised Now</p>
                  </div>
                </div>
              </div>
            </div>
            {/*End Counter Block One*/}
          </div>
        </div>
      </section>
      {/* team section */}

      {/* testimonial section */}
      <section className="testimonial-section-six">
        <div className="theme_container">
          <div
            className="bg"
            style={{
              backgroundImage: "url(assets/images/resource/test-bg.png)",
            }}
          />
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-block-three">
                <div className="title-box">
                  <div className="sub-title mb-20">
                    <span className="title-sep-left">
                      <img src="assets/images/resource/icon-4.png" alt="" />
                    </span>
                    Our Testimonials
                  </div>
                  <h2 className="sec-title mb-20">
                    What People Say <br /> About Us{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Swiper
                {...itemTwoSlider}
                className="two-item-carousel owl-theme owl-carousel"
              >
                <SwiperSlide>
                  <div className="testimonial-block style-four">
                    <div className="icon">
                      <i className="flaticon-quote" />
                    </div>
                    <div className="text">
                      Thanks to Charity Foundation's Child Education program, I
                      escaped poverty's grip. Scholarships and mentorship opened
                      doors I never thought possible. Forever grateful for their
                      belief in me.
                    </div>
                    <div className="author-info">
                      <div className="author-content">
                        <div className="name">Ahmed M.</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-block style-four">
                    <div className="icon">
                      <i className="flaticon-quote" />
                    </div>
                    <div className="text">
                      Charity Foundation's Pure Food & Water initiative changed
                      lives. Clean water and sustainable agriculture brought
                      hope and health to communities in need. Proud to support
                      their cause.
                    </div>
                    <div className="author-info">
                      <div className="author-content">
                        <div className="name"> Emily S.</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
