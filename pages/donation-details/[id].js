import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { fiveItemCarousel } from "../../src/sliderProps";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  addDonation,
  convertToUSD,
  getDonations,
} from "../../utils/contract/queries";
import Link from "next/link";
import { BigNumber } from "ethers";

const DonationDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [USDPricer, setUsdPriceR] = useState(0);
  const [donation, setDonation] = useState([]);
  const [USDPrice, setUSDPrice] = useState(0);
  const [donation_, setD] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        let res = await getDonations();
        let f_res = res.filter((d) => {
          return d.donationId.toString() == id;
        });
        let amountRaisedUSD = await fetchUSDPrice(
          f_res[0].amountRaised.toString()
        );
        setDonation(f_res[0]);
        setD(f_res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDonations();
  }, []);

  const fetchUSDPrice = async (donationAmount) => {
    console.log("runningggg");
    try {
      const amountInWei = BigNumber.from(donationAmount);
      const amountInUSD = await convertToUSD(amountInWei);
      return amountInUSD;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  console.log(donation_);
  useEffect(() => {
    const updateUSDPrice = async () => {
      const usdPrices = await Promise.all(
        donation_.map(async (donation) => {
          const amountRaisedUSD = await fetchUSDPrice(donation.amountRaised);
          const targetAmountUSD = await fetchUSDPrice(donation.goal);
          return { amountRaisedUSD, targetAmountUSD };
        })
      );
      setUSDPrice(usdPrices);
    };

    updateUSDPrice();
  }, [donation]);

  console.log("USDPrice", USDPrice);
  function calculateDonationPercentage(targetAmount, amountRaised) {
    if (targetAmount <= 0) {
      return 0;
    }

    const percentage = (amountRaised / targetAmount) * 100;
    console.log(parseFloat(percentage.toFixed(2)));
    return parseFloat(percentage.toFixed(2)); // Round to 2 decimal places
  }

  return (
    <Layouts>
      <PageBanner pageName={"Donation Details"} />
      <section className="donation-detalis-section">
        <div className="theme_container">
          <div className="row">
            <div className="col-lg-8">
              <div className="donation-detalis-block">
                <h5>{donation?.name}</h5>
                <div className="image">
                  <img
                    src={
                      donation?.pictures?.length > 0 ? donation?.pictures[0] : 0
                    }
                    alt=""
                  />
                </div>
                <div className="text">{donation?.description}</div>
                {/* counter block start */}
                <div className="counter-block-three-single style-seven">
                  <h4 className="title">
                    Raised
                    <span>
                      {""}${USDPrice[0]?.amountRaisedUSD}
                    </span>
                  </h4>
                  <div className="bar">
                    <div className="count-text clr3">
                      {/* {calculateDonationPercentage(USDPricer, USDPrice)} % */}
                    </div>
                    <div className="bar-inner bg4 count-bar" data-percent={40}>
                      {" "}
                    </div>
                  </div>
                  <ul>
                    <li>
                      Goal
                      <span className="crl4">
                        {""}${USDPrice[0]?.targetAmountUSD}
                      </span>
                    </li>
                    <li>
                      Raise
                      <span className="crl2">
                        {""}${USDPrice[0]?.amountRaisedUSD}
                      </span>
                    </li>
                    <li>
                      To Go
                      <span className="crl3">
                        {" "}
                        $
                        {USDPrice[0]?.targetAmountUSD -
                          USDPrice[0]?.amountRaisedUSD}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* counter block end */}
                {/* start poor child */}
                <div className="">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className=" w-flex flex-row items-center"
                  >
                    <div style={{ display: "flex", width: "100%" }}>
                      <button
                        onClick={() => {
                          addDonation(donation?.donationId, 1000);
                        }}
                        style={{
                          backgroundColor: "#00ADB5",
                          color: "white",
                          padding: "10px 20px",
                          marginRight: "10px",
                        }}
                      >
                        $1000
                      </button>
                      <button
                        onClick={() => {
                          addDonation(donation?.donationId, 500);
                        }}
                        style={{
                          backgroundColor: "#393E46",
                          color: "white",
                          padding: "10px 20px",
                          marginRight: "10px",
                        }}
                      >
                        $500
                      </button>
                      <button
                        onClick={() => {
                          addDonation(donation?.donationId, 100);
                        }}
                        style={{
                          backgroundColor: "#222831",
                          color: "white",
                          padding: "10px 20px",
                          marginRight: "10px",
                        }}
                      >
                        $100
                      </button>
                      <button
                        style={{
                          backgroundColor: "#CBE4DE",
                          color: "white",
                          padding: "10px 20px",
                          marginRight: "10px",
                        }}
                        onClick={() => {
                          addDonation(donation?.donationId, 25);
                        }}
                      >
                        {" "}
                        $25
                      </button>
                    </div>

                    <div className="donation-form-one-submit-btn">
                      <Link href="/donation-grid">
                        <a className="primary_btn-one">
                          Donate
                          <i className="far fa-heart" />
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
                {/* end poor child */}
                {/* content box start */}

                {/* content box end */}
                {/* summary start */}

                {/* summary end */}
                <div className="text-four"></div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Start Sidebar Block */}

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
                      Medical &amp; Helath<span></span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Child Education<span></span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Charity For Water<span></span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Animals Fund<span></span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Clear Ocean<span></span>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Charity For Foods<span></span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Sidebar Block */}
              {/* Start Sidebar Block */}

              {/* End Sidebar Block */}
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default DonationDetails;
