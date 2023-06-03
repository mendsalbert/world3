import Head from "next/head";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import FooterCounter from "../components/FooterCounter";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, color, poggressbar, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./header/Header";

const Layouts = ({ children, noHeader, noFooter }) => {
  useEffect(() => {
    niceSelect();
    animation();
    color();
    poggressbar();
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <div className="page-wrapper">
      <Head>
        <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
      </Head>
      <VideoPopup />
      <ImageView />
      {!noHeader && <Header />}
      {children}
      {!noFooter && (
        <Fragment>
          <FooterCounter />
          <Footer />
        </Fragment>
      )}
    </div>
  );
};
export default Layouts;
