import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { fiveItemCarousel } from "../src/sliderProps";

const BlogStandard = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Blog standard"} />
      <section className="blog-grid-section">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-grid-block">
                <div className="image">
                  <img src="assets/images/resource/Blog_Standard.jpg" alt="" />
                </div>
                <div className="content-block">
                  <div className="date">
                    <i className="far fa-calendar-alt" />
                    05 January 2022
                  </div>
                  <div className="post-cat-three">Water &amp; Food</div>
                  <h4>
                    Getting Started With An Express ES6+ Java Script Stack
                  </h4>
                  <div className="text">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et dolore ways magna aliqua. Quis ipsum
                    suspendisse ultrices gravida commodo viverra
                  </div>
                  <div className="blog-grid-button">
                    <a href="#">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-grid-block">
                <div className="image">
                  <img
                    src="assets/images/resource/Blog_Standard-2.jpg"
                    alt=""
                  />
                </div>
                <div className="content-block">
                  <div className="date">
                    <i className="far fa-calendar-alt" />
                    05 January 2022
                  </div>
                  <div className="post-cat-three style-two">Medical Health</div>
                  <h4>Privacy Better Notifications And Permission Requests</h4>
                  <div className="text">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et dolore ways magna aliqua. Quis ipsum
                    suspendisse ultrices gravida commodo viverra
                  </div>
                  <div className="blog-grid-button">
                    <a href="#">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-grid-block">
                <div className="content-block style-two">
                  <div className="date">
                    <i className="far fa-calendar-alt" />
                    05 January 2022
                  </div>
                  <div className="post-cat-three style-three">Animals</div>
                  <h4>Started With Node Introduction HTTP And JavaScript</h4>
                  <div className="text">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et dolore ways magna aliqua. Quis ipsum
                    suspendisse ultrices gravida commodo viverra
                  </div>
                  <div className="blog-grid-button">
                    <a href="#">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-grid-block">
                <div className="content-block style-three">
                  <div className="icon">
                    <i className="flaticon-quote-1" />
                  </div>
                  <div className="lower-content">
                    <div className="date">
                      <i className="far fa-calendar-alt" />
                      05 January 2022
                    </div>
                    <h4>
                      Everything You Need Know About Transactional Email <br />{" "}
                      Know To Ask Started With Node Introduction
                    </h4>
                    <div className="image">
                      <img src="assets/images/resource/icon-6.png" alt="" />
                      <span>Derek X. Brown</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-grid-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Blog_Standard-3.jpg"
                    alt=""
                  />
                </div>
                <div className="icon">
                  <div className="video-btn">
                    <a
                      href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                      className="overlay-link play-now ripple"
                      data-fancybox="gallery"
                      data-caption=""
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="content-block">
                  <div className="date">
                    <i className="far fa-calendar-alt" />
                    05 January 2022
                  </div>
                  <div className="post-cat-three style-two">Medical Health</div>
                  <h4>Privacy Better Notifications And Permission Requests</h4>
                  <div className="text">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et dolore ways magna aliqua. Quis ipsum
                    suspendisse ultrices gravida commodo viverra
                  </div>
                  <div className="blog-grid-button">
                    <a href="#">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-grid-block style-three">
                <div
                  className="blog-gird-bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/resource/Blog_Standard_bg.jpg)",
                  }}
                />
                <div className="content-block style-two">
                  <div className="date">
                    <i className="far fa-calendar-alt" />
                    05 January 2022
                  </div>
                  <div className="post-cat-three style-three">Animals</div>
                  <h4>Started With Node Introduction HTTP And JavaScript</h4>
                  <div className="text">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore et dolore ways magna aliqua. Quis ipsum
                    suspendisse ultrices gravida commodo viverra
                  </div>
                  <div className="blog-grid-button">
                    <a href="#">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-grid-block style-four">
                {/*Start Sidebar Block*/}
                <div className="title">
                  <h3>
                    Search Now{" "}
                    <span className="right-img">
                      <img src="assets/images/resource/icon-4.png" alt="" />
                    </span>
                  </h3>
                </div>
                <div className="sidebar-search-box">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-form"
                    action="#"
                  >
                    <input placeholder="Keywords..." type="text" />
                    <button type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
                {/*End Sidebar Block*/}
              </div>
              {/* Start Sidebar Block */}
              <div className="event-details-block-two style-two">
                <h4>
                  Popular Category{" "}
                  <img src="assets/images/resource/icon-4.png" alt="" />
                </h4>
                <div className="icon-list">
                  <ul>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Medical &amp; Helath<span>04</span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Child Education<span>07</span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Charity For Water<span>06</span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Animals Fund<span>05</span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Clear Ocean<span>08</span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Charity For Foods<span>08</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Sidebar Block */}
              {/*Start Sidebar Block*/}
              <div
                className="sidebar-block wow fadeInUp animated"
                data-wow-delay="0.2s"
                data-wow-duration="1200ms"
              >
                <div className="blog-standard-block-three">
                  <div className="title">
                    <h4>
                      Recent News{" "}
                      <img src="assets/images/resource/icon-4.png" alt="" />
                    </h4>
                  </div>
                  <ul className="popular-feeds">
                    <li>
                      <div className="inner">
                        <div className="img-box">
                          <img
                            src="assets/images/resource/news-details-2.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a href="#">
                              <i className="fa fa-link" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="title-box">
                          <p>
                            <span className="far fa-calendar-alt" />
                            24th March 2020
                          </p>
                          <h4>
                            <a href="#">
                              And Overview Of The Most <br /> Common Design Way{" "}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="img-box">
                          <img
                            src="assets/images/resource/news-details-3.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a href="#">
                              <i className="fa fa-link" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="title-box">
                          <p>
                            <span className="far fa-calendar-alt" />
                            24th March 2020
                          </p>
                          <h4>
                            <a href="#">
                              And Overview Of The Most <br /> Common Design Way
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="img-box">
                          <img
                            src="assets/images/resource/news-details-4.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a href="#">
                              <i className="fa fa-link" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="title-box">
                          <p>
                            <span className="far fa-calendar-alt" />
                            24th March 2020
                          </p>
                          <h4>
                            <a href="#">
                              And Overview Of The Most <br /> Common Design Way
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*End Sidebar Block*/}
              {/* Start Sidebar Block */}
              <div className="blog-stander-four text-center">
                <div className="image">
                  <img src="assets/images/resource/Blog_Standard.png" alt="" />
                </div>
                <h4>Daniel E. Sandoval</h4>
                <div className="designation">CEO &amp; Founder</div>
                <div className="text">
                  Sit amet consectetur adipiscing elite <br /> eiusmod tempor
                  incididunt
                </div>
                <div className="blog-button">
                  <a href="#" className="primary_btn">
                    Contact <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Sidebar Block */}
              {/* Start Sidebar Block */}
              <div className="event-details-block-two">
                <h4>
                  Gallery &amp; Photo{" "}
                  <img src="assets/images/resource/icon-4.png" alt="" />
                </h4>
                <div className="inner-box">
                  <div className="wrapper-box">
                    <div className="image">
                      <img
                        src="assets/images/resource/Event_Details_small.jpg"
                        alt=""
                      />
                      <div className="overlay-link">
                        <a
                          href="assets/images/gallery/gallery-1"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="image">
                      <img
                        src="assets/images/resource/Event_Details_small-2.jpg"
                        alt=""
                      />
                      <div className="overlay-link">
                        <a
                          href="assets/images/gallery/gallery-1"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="image">
                      <img
                        src="assets/images/resource/Event_Details_small-3.jpg"
                        alt=""
                      />
                      <div className="overlay-link">
                        <a
                          href="assets/images/gallery/gallery-1"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="image">
                      <img
                        src="assets/images/resource/Event_Details_small-4.jpg"
                        alt=""
                      />
                      <div className="overlay-link">
                        <a
                          href="assets/images/gallery/gallery-1"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Sidebar Block */}
              {/*Start single sidebar*/}
              <div className="event-details-block-two style-two">
                <div
                  className="sidebar-block wow fadeInUp animated"
                  data-wow-delay="0.7s"
                  data-wow-duration="1200ms"
                >
                  <div className="title">
                    <h4>
                      Popular Tags{" "}
                      <img src="assets/images/resource/icon-4.png" alt="" />
                    </h4>
                  </div>
                  <ul className="popular-tag">
                    <li>
                      <a href="#">Charity</a>
                    </li>
                    <li>
                      <a href="#">Non-profit</a>
                    </li>
                    <li>
                      <a href="#">fund</a>
                    </li>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">medical</a>
                    </li>
                    <li>
                      <a href="#">water</a>
                    </li>
                    <li>
                      <a href="#">Green</a>
                    </li>
                    <li>
                      <a href="#">Animals</a>
                    </li>
                    <li>
                      <a href="#">Energy</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*End single sidebar*/}
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
export default BlogStandard;
