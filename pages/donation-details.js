import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { fiveItemCarousel } from "../src/sliderProps";

const DonationDetails = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Donation Details"} />
      <section className="donation-detalis-section">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-8">
              <div className="donation-detalis-block">
                <h5>
                  Raise Your Hand To The Poor Children Education <br /> For
                  Better Future Life
                </h5>
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Details.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit consectetur adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam nisi ut
                  aliquid ex ea commodi consequatur Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur veillum qui dolorem eum fugiat quo
                  voluptas nulla pariatu
                </div>
                {/* counter block start */}
                <div className="counter-block-three-single style-seven">
                  <h4 className="title">
                    Raised<span>$256</span>
                  </h4>
                  <div className="bar">
                    <div className="count-text clr3">83%</div>
                    <div className="bar-inner bg4 count-bar" data-percent="83%">
                      {" "}
                    </div>
                  </div>
                  <ul>
                    <li>
                      Goal<span className="crl4">$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                </div>
                {/* counter block end */}
                {/* start poor child */}
                <div className="row">
                  <div className="col-md-6">
                    <h5>Why Help Poor Child</h5>
                    <div className="text-two">
                      Neque porro quisquam est dolorem ipsum quia dolor
                      consectetur adipisci velit sed quia numquam eius modi
                      tempora incidunt labore dolore magnaw aliquam quaerat
                      voluptatem minima veniaes quis nostrum exercitationem
                      ullam corporis suscipit laboriosam nisi ut aliquid ex ea
                      commodi conse quatur Quis autem vel eum iure reprehenderit
                      qui voluptate velit esse quam nihil molestiae conse quatur
                      veillum qui dolorem eumes
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image-two">
                      <img
                        src="assets/images/resource/Donation_Details-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* end poor child */}
                {/* content box start */}
                <div className="content-box">
                  <div className="icon">
                    <i className="flaticon-quote-1" />
                  </div>
                  <h4>
                    Get Started With UI Design With These Tips To Speed Wayse{" "}
                    <br /> Your Workflow Started With Express Stack
                  </h4>
                  <div className="image-2">
                    <img src="assets/images/resource/icon-4.png" alt="" />
                    <span>Lawrence J. Lopez</span>
                  </div>
                </div>
                {/* content box end */}
                {/* summary start */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="video">
                      <div className="image-three">
                        <img
                          src="assets/images/resource/Donation_Details-3.jpg"
                          alt=""
                        />
                      </div>
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
                  </div>
                  <div className="col-md-6">
                    <h5>Summary</h5>
                    <div className="text-three">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple
                    </div>
                  </div>
                </div>
                {/* summary end */}
                <div className="text-four">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  consectetur adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam quis nostrum
                  exercitationem ullam corporis suscipit laboriosam nisi ut
                  aliquid exea
                </div>
              </div>
            </div>
            <div className="col-lg-4">
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
export default DonationDetails;
