import { useState } from "react";
import { Accordion } from "react-bootstrap";

const OurMissionAccordion = () => {
  const [accordionActive, setaccordionActive] = useState("accOne");
  const accordionActiveSet = (value) =>
      value === accordionActive
        ? setaccordionActive("")
        : setaccordionActive(value),
    activeAccordionBlock = (value) =>
      value === accordionActive ? "active-block" : "",
    activeAccordionBtn = (value) => (value === accordionActive ? "active" : "");
  return (
    <Accordion defaultActiveKey="accOne">
      <ul className="accordion-box">
        {/*Accordion Block*/}
        <li
          className={`accordion block style-two ${activeAccordionBlock(
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
          <Accordion.Collapse eventKey="accOne" className="acc-content">
            <div className="content">
              <div className="text">
                <p>
                  Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </Accordion.Collapse>
        </li>
        <li
          className={`accordion block style-two ${activeAccordionBlock(
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
                  Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </Accordion.Collapse>
        </li>
        <li
          className={`accordion block style-two ${activeAccordionBlock(
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
            Everything You Need To Know About CSS Margins ?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="acc5" className="acc-content">
            <div className="content">
              <div className="text">
                <p>
                  Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </Accordion.Collapse>
        </li>
        <li
          className={`accordion block style-two ${activeAccordionBlock(
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
            Healthy Code Review Mindset To Your Team ?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="acc3" className="acc-content">
            <div className="content">
              <div className="text">
                <p>
                  Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </Accordion.Collapse>
        </li>
        <li
          className={`accordion block style-two ${activeAccordionBlock(
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
            For Keyboard-Only And Assistive Technology Users ?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="acc4" className="acc-content">
            <div className="content">
              <div className="text">
                <p>
                  Sit amet consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </Accordion.Collapse>
        </li>
      </ul>
    </Accordion>
  );
};
export default OurMissionAccordion;
