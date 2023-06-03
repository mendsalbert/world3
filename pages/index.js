import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layouts from "../src/layouts/Layouts";
import { fiveItemCarousel, testimonialSlider } from "../src/sliderProps";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});
const Index1Hero = dynamic(
  () => import("../src/components/slider/Index1Hero"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <Layouts>
      {" "}
      <section className="banner-section-one">
        <Index1Hero />
      </section>
      {/*End Banner Section One */}
      {/* section about */}
      <section className="about">
        <div className="top-title text-center"></div>
        <div className="logo">
          {/* <img src="assets/images/resource/icon-3.png" alt="" /> */}
        </div>
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-7">
              <div className="block-one">
                <div className="image">
                  <img src="assets/images/resource/about.jpg" alt="" />
                </div>
                {/* <div className="image-two">
                  <img src="assets/images/resource/icon.png" alt="" />
                </div> */}
                {/* <div className="image-three">
                  <img src="assets/images/resource/icon-2.png" alt="" />
                </div> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="block-two">
                <div className="sub-title ">
                  <span className="title-sep-left ">
                    {/* <img src="assets/images/resource/icon-4.png" alt="" /> */}
                  </span>
                  About Company
                </div>
                <h2 className="sec-title mb-20">
                  Rise Your Hand to Help <br /> The Needy{" "}
                </h2>
                <div className="text">
                  Our project, World3 Foundation, aims to make a positive impact
                  in the world by connecting donors with meaningful causes. We
                  believe that every act of giving has the power to change lives
                  and create a better future for those in need. Through our
                  platform, we provide a seamless and secure way for individuals
                  to donate to various charitable campaigns and initiatives. We
                  have partnered with trusted organizations and verified
                  projects to ensure that your contributions go directly to the
                  causes that matter to you.
                </div>
                <div className="icon-list">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Charity For Foods
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Charity For Water
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Charity For Education
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Charity For Medical
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Sustainable Farming{" "}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Climate Change{" "}
                    </li>
                  </ul>
                </div>
                <div className="inner-box">
                  <div className="link-btn">
                    <Link href="/donation-grid">
                      <a className="primary_btn">
                        Donation
                        <i className="far fa-heart" />
                      </a>
                    </Link>
                  </div>
                  <div className="contact-info"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* donar section */}
      <section className="donar">
        <div className="theme_container">
          <div className="logo">
            <img src="assets/images/resource/icon-5.png" alt="" />
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="donar-block">
                <div className="sub-title mb-20 style-two">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-6.png" alt="" />
                  </span>
                  Make Donate
                </div>
                <h2 className="sec-title style-two mb-30">Become a Donar</h2>
                <div className="bottom">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="about-section-two-form"
                  >
                    <div className="about-section-two-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                  </form>
                </div>
                <div className="project-form style-two">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <ul className="donation-amount">
                      <li>$1000</li>
                      <li>$500</li>
                      <li>$100</li>
                      <li>$25</li>
                    </ul>
                  </form>
                  <div className="from-button">
                    <Link href="/donation-grid">
                      <a className="primary_btn-one">
                        Donation
                        <i className="far fa-heart" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/btn.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features section */}
      <section className="features pt-0">
        <div
          className="bg"
          style={{ backgroundImage: "url(assets/images/background/child.jpg)" }}
        />
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="features-block">
                <div className="icon-box">
                  <i className="flaticon-fruit" />
                </div>
                <div className="content">
                  <h4>Pure Food &amp; Water</h4>
                  <div className="text">
                    Access to safe and nutritious food, as well as clean
                    drinking water, is essential for the well-being and
                    development of individuals...
                  </div>
                  <Link href="/about">
                    <a className="button">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-block">
                <div className="icon-box style-two">
                  <i className="flaticon-medicine" />
                </div>
                <div className="content">
                  <h4>Health &amp; Medicine</h4>
                  <div className="text">
                    We recognize the importance of quality healthcare services
                    and medical assistance for those in need...
                  </div>
                  <Link href="/about">
                    <a className="button">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-block">
                <div className="icon-box style-three">
                  <i className="flaticon-education" />
                </div>
                <div className="content">
                  <h4>Child Education</h4>
                  <div className="text">
                    Education is a powerful tool that can transform lives and
                    break the cycle of poverty. Our Child Education initiatives
                    focus on providing quality
                  </div>
                  <Link href="/about">
                    <a className="button">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-block">
                <div className="icon-box style-four">
                  <i className="flaticon-house" />
                </div>
                <div className="content">
                  <h4>Charity For Live</h4>
                  <div className="text">
                    Charity For Life encompasses our commitment to supporting
                    various charitable causes and initiatives that address
                    critical societal issues...
                  </div>
                  <Link href="/about">
                    <a className="button">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Causes Section */}
      <section className="causes">
        <div className="theme_container">
          <div className="title-box">
            <div className="sub-title mb-20">
              <span className="title-sep-left">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
              Popular Causes
            </div>
            <h2 className="sec-title mb-56">
              How We Help People For <br /> Charity Foundation
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="causes-block">
                <div className="image">
                  <img src="assets/images/resource/charity.jpg" alt="" />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={83} color={"#f74f22"} />

                          <div className="inner-text count-box">
                            <Counter end={83} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/donation-grid">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="causes-block">
                <div className="image">
                  <img src="assets/images/resource/charity-2.jpg" alt="" />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#65c9bb"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Foods</h4>
                      <div className="text">
                        Raised<span className="crl5">$256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/donation-grid">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="causes-block">
                <div className="image">
                  <img src="assets/images/resource/charity-3.jpg" alt="" />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={83} color={"#ffac00"} />

                          <div className="inner-text count-box">
                            <Counter end={83} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Child Life</h4>
                      <div className="text">
                        Raised<span className="crl6"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/donation-grid">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="causes-block">
                <div className="image">
                  <img src="assets/images/resource/charity-4.jpg" alt="" />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={75} color={"#f74f22"} />

                          <div className="inner-text count-box">
                            <Counter end={75} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl7"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/donation-grid">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cta section */}
      <section className="cta">
        <div
          className="bg"
          style={{ backgroundImage: "url(assets/images/background/map.png)" }}
        />
        <div className="theme_container">
          <div className="cta-text text-center mb-40">
            <span>Small</span> Donations <span>Make</span> Bigger{" "}
            <span>Impact</span>
          </div>
          <div className="text text-center mb-35">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem <br /> aperiam, eaque
            ipsa quae abillo inventore veritatis et quasi architecto beatae
          </div>
          <div className="inner-box">
            <div className="link-btn">
              <Link href="/contact">
                <a className="primary_btn-one">
                  Make Donation
                  <i className="far fa-heart" />
                </a>
              </Link>
            </div>
            <div className="contact-info">
              <div className="icon">
                <i className="flaticon-phone" />
              </div>
              <div className="contact-number">
                <div className="number">
                  Hotline <br />
                  <a href="tel:+012(345)6789">
                    <span>+012(345) 6789</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gallery section */}
      <section className="gallery">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="gallery-block">
                <div className="image">
                  <img src="assets/images/resource/Child.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <h4>
                    <Link href="/gallery">
                      <a>Happy Child Group</a>
                    </Link>
                  </h4>
                  <div className="text">Carity Fund</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 flex-box-one">
              <div className="gallery-block">
                <div className="image">
                  <img src="assets/images/resource/Child-2.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <h4>
                    <Link href="/gallery">
                      <a>Happy Child Group</a>
                    </Link>
                  </h4>
                  <div className="text">Carity Fund</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="gallery-block">
                <div className="image">
                  <img src="assets/images/resource/Child-3.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <h4>
                    <Link href="/gallery">
                      <a>Happy Child Group</a>
                    </Link>
                  </h4>
                  <div className="text">Carity Fund</div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="gallery-block">
                <div className="image">
                  <img src="assets/images/resource/Child-4.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <h4>
                    <Link href="/gallery">
                      <a>Happy Child Group</a>
                    </Link>
                  </h4>
                  <div className="text">Carity Fund</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
