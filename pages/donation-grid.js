// import DonutChart from "../src/components/DonutChart";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";
import {
  convertToUSD,
  getDonationValueInUSD,
  getDonations,
} from "../utils/contract/queries";
import { BigNumber } from "ethers";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const DonationGrid = () => {
  const [donations, setDonations] = useState([]);
  // const [USDPrice, setUsdPrice] = useState(0);
  const [USDPricer, setUsdPriceR] = useState(0);
  const [USDPrice, setUSDPrice] = useState(0);
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        let res = await getDonations();
        console.log(res);
        setDonations(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDonations();
  }, []);

  // const getUSDPrice = async (donationAmount) => {
  //   try {
  //     console.log(donationAmount);
  //     const amountInWei = BigNumber.from(donationAmount);
  //     const amountInUSD = await convertToUSD(amountInWei);
  //     console.log(amountInUSD);
  //     return amountInUSD;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  const fetchUSDPrice = async (donationAmount) => {
    try {
      const amountInWei = BigNumber.from(donationAmount);
      const amountInUSD = await convertToUSD(amountInWei);
      return amountInUSD;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const updateUSDPrice = async () => {
      const usdPrices = await Promise.all(
        donations.map(async (donation) => {
          const amountRaisedUSD = await fetchUSDPrice(donation.amountRaised);
          const targetAmountUSD = await fetchUSDPrice(donation.goal);
          return { amountRaisedUSD, targetAmountUSD };
        })
      );
      setUSDPrice(usdPrices);
    };

    updateUSDPrice();
  }, [donations]);

  // console.log("USDPrice", USDPrice);
  function calculateDonationPercentage(targetAmount, amountRaised) {
    if (targetAmount <= 0) {
      return 0;
    }

    const percentage = (amountRaised / targetAmount) * 100;
    console.log(parseFloat(percentage.toFixed(2)));
    return parseFloat(percentage.toFixed(2)); // Round to 2 decimal places
  }

  // console.log(USDPricer, USDPrice);
  return (
    <Layouts>
      <PageBanner pageName={"Donations"} />
      <section className="donation-section">
        <div className="theme_container">
          <div className="title-box text-center">
            <div className="sub-title mb-20">
              <span className="title-sep-left">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
              Popular Causes
              <span className="title-sep-right">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
            </div>
            <h2 className="sec-title">
              How We Help People For <br /> Charity Foundation
            </h2>
          </div>
          <div className="row">
            {donations?.map((donation, index) => (
              <div className="col-lg-4">
                <div className="causes-block style-two">
                  <div className="image">
                    <img src={donation?.pictures[0]} alt="" />
                    <div className="progress-wrap">
                      <div className="progress-box">
                        <div className="inner-box">
                          <div className="graph-outer">
                            <DonutChart
                              value={calculateDonationPercentage(
                                USDPrice[index]?.targetAmountUSD,
                                USDPrice[index]?.amountRaisedUSD
                              )}
                              color={"#f74f22"}
                            />

                            <div className="inner-text count-box">
                              {calculateDonationPercentage(
                                USDPrice[index]?.targetAmountUSD,
                                USDPrice[index]?.amountRaisedUSD
                              ) === 0 ? (
                                <span>0</span>
                              ) : (
                                <Counter
                                  end={calculateDonationPercentage(
                                    USDPrice[index]?.targetAmountUSD,
                                    USDPrice[index]?.amountRaisedUSD
                                  )}
                                />
                              )}
                              <span className="count-Parsent">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <h4>{donation?.category}</h4>
                        <div className="text">Raised</div>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h4>{donation?.name}</h4>
                    <ul>
                      <li>
                        Goal
                        <span>
                          {""}${USDPrice[index]?.targetAmountUSD}
                        </span>
                      </li>
                      <li>
                        Raise
                        <span className="crl2">
                          {""}${USDPrice[index]?.amountRaisedUSD}
                        </span>
                      </li>
                      <li>
                        To Go
                        <span className="crl3">
                          {" "}
                          $
                          {USDPrice[index]?.targetAmountUSD -
                            USDPrice[index]?.amountRaisedUSD}
                        </span>
                      </li>
                    </ul>
                    <Link
                      href={`/donation-details/${donation?.donationId?.toString()}`}
                    >
                      <a className="primary_btn style-two">
                        Donation
                        <i className="far fa-heart" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-2.jpg"
                    alt=""
                  />
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
                  <Link href="/donation-details">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <PatnerLogoSlider />
    </Layouts>
  );
};
export default DonationGrid;
