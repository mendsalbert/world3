import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import OurMissionAccordion from "../src/components/OurMissionAccordion";
import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";
import { itemThreeSlider } from "../src/sliderProps";

const OurMission = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Our Mission"} />
      <section className="mission-section">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-block">
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-4.png" alt="" />
                  </span>
                  Why Help Us ?
                </div>
                <h2 className="sec-title mb-35">
                  We Provide Fund to Help <br /> The Poor Children
                </h2>
                <div className="text-four">
                  w Sed perspiciatis unde omnis iste natus error volup
                  accusantium doloremque laudantium
                </div>
                <Tab.Container defaultActiveKey={"tab-1"}>
                  <div className="tab-btn">
                    <Nav
                      as={"ul"}
                      className="nav nav-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <Nav.Item as={"li"} role="presentation">
                        <Nav.Link as={"button"} eventKey="tab-1">
                          <span>Our Mission</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} role="presentation">
                        <Nav.Link as={"button"} eventKey="tab-2">
                          <span>Our Vision</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} role="presentation">
                        <Nav.Link as={"button"} eventKey="tab-3">
                          <span>Next Plan</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="tab-content" id="myTabContent">
                    <Tab.Pane className="tab-pane fade" eventKey="tab-1">
                      <div className="text">
                        But I must explain to you how all this mistaken
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system
                        expoundmaster
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" />
                            Charity For Foods
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Education
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Water
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Medical
                          </li>
                        </ul>
                      </div>
                      <div className="about-button">
                        <a href="#" className="primary_btn">
                          Learn More
                          <i className="far fa-heart" />
                        </a>
                        <Link href="/volunteer">
                          <a className="right-button">
                            Become a Volunteer{" "}
                            <i className="far fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tab-2">
                      <div className="text">
                        But I must explain to you how all this mistaken
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system
                        expoundmaster
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" />
                            Charity For Foods
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Education
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Water
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Medical
                          </li>
                        </ul>
                      </div>
                      <div className="about-button">
                        <a href="#" className="primary_btn">
                          Learn More
                          <i className="far fa-heart" />
                        </a>
                        <Link href="/volunteer">
                          <a className="right-button">
                            Become a Volunteer{" "}
                            <i className="far fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tab-3">
                      <div className="text">
                        But I must explain to you how all this mistaken
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system
                        expoundmaster
                      </div>
                      <div className="tab-icon">
                        <ul>
                          <li>
                            <i className="far fa-check" />
                            Charity For Foods
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Education
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Water
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Charity For Medical
                          </li>
                        </ul>
                      </div>
                      <div className="about-button">
                        <a href="#" className="primary_btn">
                          Learn More
                          <i className="far fa-heart" />
                        </a>
                        <Link href="/volunteer">
                          <a className="right-button">
                            Become a Volunteer{" "}
                            <i className="far fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-block-two">
                <div className="image">
                  <img src="assets/images/resource/Our_Mission.jpg" alt="" />
                </div>
                <div className="right-icon">
                  <img src="assets/images/resource/icon-3.png" alt="" />
                </div>
                <div className="inner-box">
                  <h6>
                    Only by Helping Each <br /> Other We Can Make <br /> World
                    Better
                  </h6>
                  <div className="icon">
                    <i className="flaticon-quotes" />
                  </div>
                  <div className="year">
                    25 Years We Provide <br /> Charity Fund
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact section */}
      <section className="funfact style-five">
        <div className="theme_container">
          <div className="funtact-bg">
            <div className="left-icon">
              <img src="assets/images/resource/Our_Mission.png" alt="" />
            </div>
            <div className="row">
              {/*Start Counter Block One*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="counter-block-one">
                  <div className="count-outer count-box">
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
                      <p>Animals Rescued</p>
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
                  <div className="count-outer count-box">
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
                      <p>Adoptions from the Center</p>
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
                  <div className="count-outer count-box">
                    {/* <span
                      className="count-text"
                      data-speed={3000}
                      data-stop={85}
                    >
                      0
                    </span> */}
                    <Counter end={85} />
                    <span className="plus">+</span>
                    <div className="text">
                      <p>Granted to Animal</p>
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
                  <div className="count-outer count-box">
                    {/* <span
                      className="count-text"
                      data-speed={3000}
                      data-stop={4585}
                    >
                      0
                    </span> */}
                    <Counter end={4585} />
                    <span className="plus">+</span>
                    <div className="text">
                      <p>Surgeries Performed</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter Block One*/}
            </div>
          </div>
        </div>
      </section>
      {/* what we do section two  */}
      <section className="what-we-do-section-two">
        <div
          className="bg"
          style={{
            backgroundImage: "url(assets/images/resource/Our_Mission-map.png)",
          }}
        />
        <div className="theme_container_fullwidth">
          <div className="title-box text-center ">
            <div className="sub-title mb-20">
              <span className="title-sep-left">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
              What We Do
              <span className="title-sep-right">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
            </div>
            <h2 className="sec-title mb-56">
              We Work Differently to keep <br /> Rural School Child
            </h2>
          </div>
          <div className="row">
            <Swiper
              {...itemThreeSlider}
              className="three-item-carousel owl-theme owl-carousel"
            >
              <SwiperSlide className="col-12">
                <div className="what-we-do-block-two">
                  <div className="row no-gutters">
                    <div
                      className="col-md-6 image-column"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/Our_Mission_service.jpg)",
                      }}
                    >
                      <div className="image">
                        <img
                          src="assets/images/resource/Our_Mission_service.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-details">
                        <h4>Annual Program</h4>
                        <div className="text">
                          Sit amet consectetur adipiscing elit eiusmod tempor
                          incididun ut labore et dolore magna aliqua. Quis psum
                          suspendisse ultrices gravida risus commodo.{" "}
                        </div>
                        <div className="right-button">
                          <Link href="/event">
                            <a className="right-button">
                              Read More <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-12">
                <div className="what-we-do-block-two">
                  <div className="row no-gutters">
                    <div
                      className="col-md-6 image-column"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/Our_Mission_service-2.jpg)",
                      }}
                    >
                      <div className="image">
                        <img
                          src="assets/images/resource/Our_Mission_service-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-details">
                        <h4>Medical &amp; Health</h4>
                        <div className="text">
                          Sit amet consectetur adipiscing elit eiusmod tempor
                          incididun ut labore et dolore magna aliqua. Quis psum
                          suspendisse ultrices gravida risus commodo.{" "}
                        </div>
                        <div className="right-button">
                          <Link href="/event">
                            <a className="right-button">
                              Read More <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-12">
                <div className="what-we-do-block-two">
                  <div className="row no-gutters">
                    <div
                      className="col-md-6 image-column"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/Our_Mission_service-3.jpg)",
                      }}
                    >
                      <div className="image">
                        <img
                          src="assets/images/resource/Our_Mission_service-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-details">
                        <h4>Sports &amp; Game</h4>
                        <div className="text">
                          Sit amet consectetur adipiscing elit eiusmod tempor
                          incididun ut labore et dolore magna aliqua. Quis psum
                          suspendisse ultrices gravida risus commodo.{" "}
                        </div>
                        <div className="right-button">
                          <Link href="/event">
                            <a className="right-button">
                              Read More <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* service section three */}
      <section className="service-section-three">
        <div className="theme_container">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="service-block-three">
                <div className="image">
                  <img src="assets/images/resource/progrem.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-block-four">
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-4.png" alt="" />
                  </span>
                  Popular Program
                </div>
                <h2 className="sec-title mb-35">
                  Keep Track of Our Annual <br /> Charity Program
                </h2>
                <div className="text">
                  Sit amet consectetur adipiscing elit, sed do eiusmod team
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan
                </div>
                {/*Start Counter Block Three Single*/}
                <div className="counter-block-three-single style-six">
                  <h4 className="title">Annual Program</h4>
                  <div className="bar">
                    <div className="count-text">85%</div>
                    <div className="bar-inner count-bar" data-percent="85%">
                      {" "}
                    </div>
                  </div>
                </div>
                {/*End Counter Block Three Single*/}
                {/*Start Counter Block Three Single*/}
                <div className="counter-block-three-single style-six">
                  <h4 className="title">Monthly Program</h4>
                  <div className="bar">
                    <div className="count-text">69%</div>
                    <div
                      className="bar-inner count-bar count-1"
                      data-percent="69%"
                    >
                      {" "}
                    </div>
                  </div>
                </div>
                {/*End Counter Block Three Single*/}
                {/*Start Counter Block Three Single*/}
                <div className="counter-block-three-single style-six">
                  <h4 className="title">Global Program</h4>
                  <div className="bar">
                    <div className="count-text">92%</div>
                    <div
                      className="bar-inner count-bar count-2"
                      data-percent="92%"
                    >
                      {" "}
                    </div>
                  </div>
                </div>
                {/*End Counter Block Three Single*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose us section two */}
      <section className="why-choose-us-section-two">
        <div
          className="map-bg"
          style={{
            backgroundImage: "url(assets/images/resource/Our_Mission_map.png)",
          }}
        />
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-info-block">
                <div className="title-box">
                  <div className="sub-title mb-20">
                    <span className="title-sep-left">
                      <img src="assets/images/resource/icon-4.png" alt="" />
                    </span>
                    Why Choose Us?
                  </div>
                  <h2 className="sec-title">
                    We’re Popular Non-Profit <br /> Charity Organization
                  </h2>
                </div>
                <div className="author-info-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="author-box">
                        <div className="image">
                          <img
                            src="assets/images/resource/author-2.png"
                            alt=""
                          />
                        </div>
                        <div className="name">David D. Saltzman</div>
                        <div className="designation">CEO Founder</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="author-box">
                        <div className="image">
                          <img
                            src="assets/images/resource/author-3.png"
                            alt=""
                          />
                        </div>
                        <div className="name">Rosario C. Souza</div>
                        <div className="designation">JR Manager</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="author-box">
                        <div className="image">
                          <img
                            src="assets/images/resource/author-4.png"
                            alt=""
                          />
                        </div>
                        <div className="name">William B. Strawbridge</div>
                        <div className="designation">Senior Manager</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="author-box">
                        <div className="image">
                          <img
                            src="assets/images/resource/author-5.png"
                            alt=""
                          />
                        </div>
                        <div className="name">Homer S. Odell</div>
                        <div className="designation">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <OurMissionAccordion />
            </div>
          </div>
        </div>
      </section>
      <PatnerLogoSlider />
    </Layouts>
  );
};
export default OurMission;
