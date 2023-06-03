import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";

const BlogDetails = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-8">
              <div className="image">
                <img src="assets/images/resource/Blog_Details.jpg" alt="" />
                <div className="post-cat">Water &amp; Food</div>
              </div>
              <div className="blog-details-block">
                <div className="date">
                  <i className="far fa-calendar-alt" />
                  05 January 2022
                </div>
                <h4>Getting Started With An Express ES6+ Java Script Stack</h4>
                <div className="text">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore ways magna aliqua. Quis ipsum
                  suspendisse ultrices gravida commodo viverra Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur?
                </div>
                {/* author box start */}
                <div className="author-box">
                  <div className="image">
                    <img src="assets/images/resource/Blog_Details.png" alt="" />
                  </div>
                  <div className="inner-box">
                    <div className="description">
                      Sit amet, consectetur adipiscing elit sed eiusmod tempor
                      incididunts labore dolore magna aliqua sus pendisse
                      ultrices gravida
                    </div>
                    <div className="name">William K. Parker</div>
                  </div>
                </div>
                {/* author box end */}
                <div className="text-two">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
                </div>
                {/* post share start */}
                <div className="post-share">
                  <h5>Popular Tags</h5>
                  <div className="tege-list">
                    <ul>
                      <li>
                        <Link href="/blog-details">Charity</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Non-profit</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">fund</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Education</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* post share end */}
                {/* social share start */}
                <div className="social-share">
                  <h5>Share Now</h5>
                  <div className="share-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* social share end */}
                {/* blog post pagination start */}
                <div className="blog-post-pagination">
                  <div className="image-two">
                    <img
                      src="assets/images/resource/Blog_Details_1.png"
                      alt=""
                    />
                  </div>
                  <div className="comment-box">
                    <div className="name">Shawn B. Bailey</div>
                    <div className="comment-text">
                      Sorem ipsum dolor sit amet consectetur adipiscing elit sed
                      eiusmod tempor incididunt ut labore et dolore magna aliqua
                      suspendisse ultrices gravida commodo
                    </div>
                    <div className="icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* blog post pagination end */}
                {/* comment area */}
                <div className="comment-area">
                  <div className="group-title">
                    <h6>Popular Comments (5)</h6>
                    <div className="comment-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </div>
                  </div>
                </div>
                {/* comment box start */}
                <div className="comment-box">
                  <div className="author-thumb">
                    <div className="image-3">
                      <img
                        src="assets/images/resource/Blog_Details_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="author-description">
                    <div className="name">
                      Randal L. Tomas <span>25 novermber 2021</span>
                    </div>
                    <div className="text-comment">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt labore dolore magna
                      aliqua suspendisse ultrices gravida.
                    </div>
                    <a className="reply-btn" href="#">
                      Reply
                    </a>
                  </div>
                </div>
                {/* comment box end */}
                {/* comment box start */}
                <div className="comment-box style-two">
                  <div className="author-thumb">
                    <div className="image-4">
                      <img
                        src="assets/images/resource/Blog_Details_3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="author-description">
                    <div className="name">
                      Randal L. Tomas <span>25 novermber 2021</span>
                    </div>
                    <div className="text-comment">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt labore dolore magna
                      aliqua suspendisse ultrices gravida.
                    </div>
                    <a className="reply-btn" href="#">
                      Reply
                    </a>
                  </div>
                </div>
                {/* comment box end */}
                {/* comment box start */}
                <div className="comment-box">
                  <div className="author-thumb">
                    <div className="image-5">
                      <img
                        src="assets/images/resource/Blog_Details_4.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="author-description">
                    <div className="name">
                      Randal L. Tomas <span>25 novermber 2021</span>
                    </div>
                    <div className="text-comment">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt labore dolore magna
                      aliqua suspendisse ultrices gravida.
                    </div>
                    <a className="reply-btn" href="#">
                      Reply
                    </a>
                  </div>
                </div>
                {/* comment box end */}
                {/* contact form start */}
                <div className="contact-block">
                  <div className="contact-form-block style-two">
                    <h4>Leave a Comments</h4>
                    <div className="text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </div>
                    {/*Contact Form*/}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      id="contact-form"
                    >
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            name="form_name"
                            defaultValue=""
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            defaultValue=""
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            name="form_phone"
                            defaultValue=""
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <textarea
                            name="form_message"
                            className="form-control"
                            placeholder="Write a massage"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            defaultValue=""
                          />
                          <button
                            className="primary_btn btn-style-one"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span>Send a Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* contact form end */}
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
                <div className="image-2">
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
      <PatnerLogoSlider />
    </Layouts>
  );
};
export default BlogDetails;
