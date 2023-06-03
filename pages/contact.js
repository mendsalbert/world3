import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";

const Contact = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Contact"} />
      <section className="contact-section">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-block">
                <div className="icon-box">
                  <i className="flaticon-question" />
                </div>
                <div className="content">
                  <h4>Support &amp; Faqs</h4>
                  <div className="text">
                    Amet consectetur adipiscings eiusmod tempor facilisis.{" "}
                  </div>
                  <div className="contact-button">
                    <a href="#">
                      Contact Us <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-block">
                <div className="icon-box">
                  <i className="flaticon-solidarity-1" />
                </div>
                <div className="content">
                  <h4>Make Donations</h4>
                  <div className="text">
                    Amet consectetur adipiscings eiusmod tempor facilisis.{" "}
                  </div>
                  <div className="contact-button">
                    <a href="#">
                      Donate Now <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-block">
                <div className="icon-box">
                  <i className="flaticon-help" />
                </div>
                <div className="content">
                  <h4>Become a Volunteer</h4>
                  <div className="text">
                    Amet consectetur adipiscings eiusmod tempor facilisis.{" "}
                  </div>
                  <div className="contact-button">
                    <a href="#">
                      Join Us <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our contact section */}
      <section className="our-contact-section">
        <div className="theme_container">
          <div className="sub-title mb-20">
            <span className="title-sep-left">
              <img src="assets/images/resource/icon-4.png" alt="" />
            </span>
            Contact Us
          </div>
          <h2 className="sec-title mb-56">
            Are You Ready To Donate <br /> Or Need Any Info?{" "}
          </h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="our-contact-block">
                <div className="icon">
                  <i className="flaticon-map" />
                </div>
                <div className="content">
                  <h5>New York</h5>
                  <div className="text">
                    55 Main Street, B - Block, <br /> 3rd Floor, New York
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="our-contact-block">
                <div className="icon">
                  <i className="flaticon-map" />
                </div>
                <div className="content">
                  <h5>San Francisco</h5>
                  <div className="text">
                    55 Main Street, B - Block, <br /> 3rd Floor, New York
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="our-contact-block">
                <div className="icon">
                  <i className="flaticon-envelope" />
                </div>
                <div className="content">
                  <h5>Email Us</h5>
                  <div className="text">
                    hotline@gmail.com <br /> supportinfo.net
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="our-contact-block">
                <div className="icon">
                  <i className="flaticon-phone" />
                </div>
                <div className="content">
                  <h5>Hotline</h5>
                  <div className="text">
                    +012 (345) 6789 <br /> +12345678
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="map-section">
        <div className="theme_container">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
              width={600}
              height={700}
              frameBorder={0}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>
      {/* contact form section */}
      <section className="contact-form-section">
        <div className="theme_container">
          <div className="contact-block">
            <div className="contact-form-block style-three">
              <h4>Send Message</h4>
              <div className="text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </div>
              {/*Contact Form*/}
              <form onSubmit={(e) => e.preventDefault()} id="contact-form">
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
                  <div className="form-group col-md-12 text-center">
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
        </div>
      </section>
      <PatnerLogoSlider />
    </Layouts>
  );
};
export default Contact;
