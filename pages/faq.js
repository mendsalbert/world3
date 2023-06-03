import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [accordionActive, setaccordionActive] = useState("accOne");
  const accordionActiveSet = (value) =>
      value === accordionActive
        ? setaccordionActive("")
        : setaccordionActive(value),
    activeAccordionBlock = (value) =>
      value === accordionActive ? "active-block" : "",
    activeAccordionBtn = (value) => (value === accordionActive ? "active" : "");
  return (
    <Layouts>
      <PageBanner pageName={"FAQs"} />
      <section className="faq-section">
        <Accordion defaultActiveKey="accOne">
          <div className="theme_container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="accordion-box">
                  {/*Accordion Block*/}
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "accOne"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="accOne"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("accOne")}`}
                      onClick={() => accordionActiveSet("accOne")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Get Started With UI Design Speed Up Workflow ?
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="accOne"
                      className="acc-content"
                    >
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc2"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc2"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc2")}`}
                      onClick={() => accordionActiveSet("acc2")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Online Environments That Work Well For Older Users ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc2" className="acc-content">
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc3"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc3"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc3")}`}
                      onClick={() => accordionActiveSet("acc3")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Everything You Need To Know About CSS Margins ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc3" className="acc-content">
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc4"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc4"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc4")}`}
                      onClick={() => accordionActiveSet("acc4")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Healthy Code Review Mindset To Your Team ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc4" className="acc-content">
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc5"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc5"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc5")}`}
                      onClick={() => accordionActiveSet("acc5")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      For Keyboard-Only And Assistive Technology Users ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc5" className="acc-content">
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="accordion-box">
                  {/*Accordion Block*/}
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc11"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc11"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc11")}`}
                      onClick={() => accordionActiveSet("acc11")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Get Started With UI Design Speed Up Workflow ?
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="acc11"
                      className="acc-content"
                    >
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc7"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc7"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc7")}`}
                      onClick={() => accordionActiveSet("acc7")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Online Environments That Work Well For Older Users ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc7" className="acc-content">
                      <div classNam7="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc8"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc8"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc8")}`}
                      onClick={() => accordionActiveSet("acc8")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Everything You Need To Know About CSS Margins ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc8" className="acc-content">
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc9"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc9"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc9")}`}
                      onClick={() => accordionActiveSet("acc9")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      Healthy Code Review Mindset To Your Team ?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="acc9" className="acc-content">
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                  <li
                    className={`accordion block ${activeAccordionBlock(
                      "acc10"
                    )}`}
                  >
                    <Accordion.Toggle
                      eventKey="acc10"
                      as={"div"}
                      className={`acc-btn ${activeAccordionBtn("acc10")}`}
                      onClick={() => accordionActiveSet("acc10")}
                    >
                      <div className="icon-outer">
                        <span className="far fa-plus" />
                      </div>
                      For Keyboard-Only And Assistive Technology Users ?
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="acc10"
                      className="acc-content"
                    >
                      <div className="content">
                        <div className="text">
                          <p>
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel
                            facilisis.{" "}
                          </p>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Accordion>
      </section>
      {/* company section two */}
      <section className="company-two">
        <div className="theme_container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              {/*Start Serivces Block Three Single*/}
              <div className="serivces-block-three-single text-center">
                <div
                  className="bg"
                  style={{
                    backgroundImage: "url(assets/images/resource/faq.jpg)",
                  }}
                />
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-12.png" alt="" />
                  </span>
                  Need Any Help
                  <span className="title-sep-right">
                    <img src="assets/images/resource/icon-12.png" alt="" />
                  </span>
                </div>
                <div className="title">
                  <h2>Have Any Questiuon ?</h2>
                </div>
                <div className="text">
                  Soremse dolor sit amet consectetur adipiscing elitsed <br />{" "}
                  do eiusmod tempor incididunt ut labore
                </div>
                <div className="link-btn">
                  <Link href="/contact">
                    <a className="primary_btn">
                      Donate Now
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*End Serivces Block Three Single*/}
            </div>
            <div className="col-xl-4 col-lg-4">
              {/*Start Serivces Block Three Single*/}
              <div className="serivces-block-three-single text-center">
                <div
                  className="bg"
                  style={{
                    backgroundImage: "url(assets/images/resource/faq-2.jpg)",
                  }}
                />
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-12.png" alt="" />
                  </span>
                  Donation Now
                  <span className="title-sep-right">
                    <img src="assets/images/resource/icon-12.png" alt="" />
                  </span>
                </div>
                <div className="title">
                  <h2>Make Donations</h2>
                </div>
                <div className="text">
                  Soremse dolor sit amet consectetur adipiscing elitsed <br />{" "}
                  do eiusmod tempor incididunt ut labore
                </div>
                <div className="link-btn">
                  <Link href="/contact">
                    <a className="primary_btn-one">
                      Donate Now
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*End Serivces Block Three Single*/}
            </div>
            <div className="col-xl-4 col-lg-4">
              {/*Start Serivces Block Three Single*/}
              <div className="serivces-block-three-single text-center">
                <div
                  className="bg"
                  style={{
                    backgroundImage: "url(assets/images/resource/faq-3.jpg)",
                  }}
                />
                <div className="sub-title mb-20">
                  <span className="title-sep-left">
                    <img src="assets/images/resource/icon-12.png" alt="" />
                  </span>
                  Support Us
                  <span className="title-sep-right">
                    <img src="assets/images/resource/icon-12.png" alt="" />
                  </span>
                </div>
                <div className="title">
                  <h2>Online Support ?</h2>
                </div>
                <div className="text">
                  Soremse dolor sit amet consectetur adipiscing elitsed <br />{" "}
                  do eiusmod tempor incididunt ut labore
                </div>
                <div className="link-btn">
                  <Link href="/contact">
                    <a className="primary_btn-one style-two">
                      Donate Now
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*End Serivces Block Three Single*/}
            </div>
          </div>
        </div>
      </section>
      {/* faq info section */}
      <section className="faq-info-section">
        <div
          className="bg"
          style={{
            backgroundImage: "url(assets/images/resource/service-map.png)",
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
                    Popular Causes
                  </div>
                  <h2 className="sec-title">
                    How We Help People For <br /> Charity Foundation
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
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="form_phone"
                      defaultValue=""
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="form_phone"
                      defaultValue=""
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      name="form_message"
                      className="form-control"
                      placeholder="Write Message"
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
                      className="primary_btn-one"
                      type="submit"
                      data-loading-text="Please wait..."
                    >
                      <span>
                        Send a Message <i className="far fa-heart" />
                      </span>
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
export default Faq;
