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
                  Sit amet consecetur adeisce <br /> eiusmod tempor incide
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
                  Sit amet consecetur adeisce <br /> eiusmod tempor incide
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
                  Sit amet consecetur adeisce <br /> eiusmod tempor incide
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
                  Sit amet consecetur adeisce <br /> eiusmod tempor incide
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
                  <Counter end={5260} />
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
                  <Counter end={7853} />
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

                  <Counter end={8564} />
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

                  <Counter end={8962} />
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
      <section className="team-section">
        <div className="theme_container">
          <div className="title-box text-center">
            <div className="sub-title mb-20">
              <span className="title-sep-left">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
              Meet Our Team
              <span className="title-sep-right">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
            </div>
            <h2 className="sec-title">
              We Have Lot’s Of Experience <br /> Honest Volunteer
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="team-block">
                <img src="assets/images/resource/team.jpg" alt="" />
                <div className="team-content">
                  <h4>Roberto V. Gravois</h4>
                  <div className="designation">Senior Manager</div>
                  <div className="text">
                    Quis autem eum reprehender <br /> voluptate velit essedole
                  </div>
                  <ul>
                    <li>
                      <i className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <i className="fab fa-twitter" />
                    </li>
                    <li>
                      <i className="fab fa-linkedin-in" />
                    </li>
                    <li>
                      <i className="fab fa-youtube" />
                    </li>
                    <li>
                      <i className="fab fa-behance" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-block">
                <img src="assets/images/resource/team-1.jpg" alt="" />
                <div className="team-content">
                  <h4>Roberto V. Gravois</h4>
                  <div className="designation">Cameron A. Goodwin</div>
                  <div className="text">
                    Quis autem eum reprehender <br /> voluptate velit essedole
                  </div>
                  <ul>
                    <li>
                      <i className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <i className="fab fa-twitter" />
                    </li>
                    <li>
                      <i className="fab fa-linkedin-in" />
                    </li>
                    <li>
                      <i className="fab fa-youtube" />
                    </li>
                    <li>
                      <i className="fab fa-behance" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-block">
                <img src="assets/images/resource/team-2.jpg" alt="" />
                <div className="team-content">
                  <h4>Joshua T. Colbert</h4>
                  <div className="designation">Senior Manager</div>
                  <div className="text">
                    Quis autem eum reprehender <br /> voluptate velit essedole
                  </div>
                  <ul>
                    <li>
                      <i className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <i className="fab fa-twitter" />
                    </li>
                    <li>
                      <i className="fab fa-linkedin-in" />
                    </li>
                    <li>
                      <i className="fab fa-youtube" />
                    </li>
                    <li>
                      <i className="fab fa-behance" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-block">
                <img src="assets/images/resource/team-3.jpg" alt="" />
                <div className="team-content">
                  <h4>Brandon J. Fields</h4>
                  <div className="designation">Senior Manager</div>
                  <div className="text">
                    Quis autem eum reprehender <br /> voluptate velit essedole
                  </div>
                  <ul>
                    <li>
                      <i className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <i className="fab fa-twitter" />
                    </li>
                    <li>
                      <i className="fab fa-linkedin-in" />
                    </li>
                    <li>
                      <i className="fab fa-youtube" />
                    </li>
                    <li>
                      <i className="fab fa-behance" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="button-team text-center">
            <div className="about-button">
              <Link href="/volunteer">
                <a className="primary_btn">
                  View More Team
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
                      Sed ut perspiciatis unde omnis natus <br /> error
                      voluptatem accusantium dolorem laudantiums totam aperiam
                    </div>
                    <div className="author-info">
                      <div className="author-thumb">
                        <img src="assets/images/resource/test.png" alt="" />
                      </div>
                      <div className="author-content">
                        <div className="name">Steven M. Robinson</div>
                        <div className="designation">Business Manager</div>
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
                      Sed ut perspiciatis unde omnis natus <br /> error
                      voluptatem accusantium dolorem laudantiums totam aperiam
                    </div>
                    <div className="author-info">
                      <div className="author-thumb">
                        <img src="assets/images/resource/test.png" alt="" />
                      </div>
                      <div className="author-content">
                        <div className="name">Steven M. Robinson</div>
                        <div className="designation">Business Manager</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Partner section */}
      <PatnerLogoSlider />
      {/* volunteer section */}
      <section className="volunteer-section">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="volunteer-block">
                <div className="shape">
                  <img src="assets/images/resource/icon-2.png" alt="" />
                </div>
                <img src="assets/images/resource/volan.jpg" alt="" />
                <div className="icon">
                  <img src="assets/images/resource/icon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shape-two">
                <img src="assets/images/resource/icon-3.png" alt="" />
              </div>
              <div className="volunteer-block-two">
                <div className="title-box">
                  <div className="sub-title mb-20">
                    <span className="title-sep-left">
                      <img src="assets/images/resource/icon-4.png" alt="" />
                    </span>
                    Become a Volunteer
                  </div>
                  <h2 className="sec-title mb-20">
                    Are You Ready to Join <br /> Our Team Member ?{" "}
                  </h2>
                </div>
                <div className="text">
                  Sed ut perspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae ab illo inventore veritatis et architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur
                </div>
                <div className="link-btn">
                  <Link href="/volunteer">
                    <a className="primary_btn-one">
                      Become a Volunteer
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
