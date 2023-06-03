import { BigNumber, ethers } from "ethers";
import { contract } from "./index";
import { toEth } from "./ether-utils";
import { parseUnits } from "ethers/lib/utils";
export async function createDonation(
  name,
  description,
  goal,
  pictures,
  category,
  startTime,
  country,
  endTime
) {
  try {
    const contractObj = await contract();
    // Assuming you have a contract function to get the contract instance
    // const amountInWei = ethers.utils.parseEther(goal);
    // const startTime_ = Math.floor(startTime.getTime() / 1000); // Convert to Unix timestamp
    // const endTime_ = Math.floor(endTime.getTime() / 1000); // Convert to Unix timestamp
    // const data = await contractObj.createDonation(
    //   name,
    //   description,
    //   amountInWei,
    //   pictures,
    //   category,
    //   startTime_,
    //   country,
    //   endTime_
    // );

    // const receipt = await data.wait();
    // console.log(receipt);
    // return receipt;

    console.log(res);
    console.log("name", name);
    console.log("description", description);
    console.log("goal", goal);
    console.log("pictures", pictures);
    console.log("category", category);
    console.log("starttime", startTime);
    console.log("endtime", endTime);
    console.log("country", country);
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function editDonation(
  donationId,
  name,
  goal,
  pictures,
  category,
  startTime,
  endTime
) {
  try {
    const contractObj = await contract();

    const data = await contractObj.editDonation(
      donationId,
      name,
      goal,
      pictures,
      category,
      startTime,
      endTime
    );

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hideDonation(donationId) {
  try {
    const contractObj = await contract();
    const data = await contractObj.hideDonation(donationId);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function addDonation(donationId, amount) {
  try {
    let weiAmount = await convertToWei(amount);
    const contractObj = await contract();
    // const amountInWei = ethers.utils.parseEther(amount);

    const data = await contractObj.addDonation(donationId, weiAmount);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getDonations() {
  try {
    const contractObj = await contract();
    const data = await contractObj.getDonations();

    console.log(data);
    // Process and format the data as needed
    // Return the formatted donation data
    return data;
  } catch (e) {
    console.log(e);
    return parseErrorMsg(e);
  }
}

export async function getDonation(donationId) {
  try {
    const contractObj = await contract();
    const data = await contractObj.getDonation(donationId);

    // Process and format the data as needed
    // Return the formatted donation data
    return data;
  } catch (e) {
    // console.log(e);
    return parseErrorMsg(e);
  }
}

export async function getDonationValueInUSD(donationId) {
  try {
    const contractObj = await contract();
    const data = await contractObj.getDonationValueInUSD(donationId);

    // Process and format the data as needed
    // Return the formatted donation data
    return data;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function convertToUSD(amountInWei) {
  // Get the latest ETH/USD price from a price feed API
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  const data = await response.json();
  const ethPriceUSD = data.ethereum.usd;

  // Convert the amount in wei to ether
  const amountInEth = ethers.utils.formatEther(amountInWei);

  // Convert the amount in ether to USD
  const amountInUSD = parseFloat(amountInEth) * ethPriceUSD;

  // Round the USD amount to 2 decimal places
  const roundedAmountInUSD = Math.round(amountInUSD * 100) / 100;

  return roundedAmountInUSD;
}

async function convertToWei(amountInUSD) {
  // Get the latest ETH/USD price from a price feed API
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  const data = await response.json();
  const ethPriceUSD = data.ethereum.usd;

  // Convert the amount in USD to ether
  const amountInEth = amountInUSD / ethPriceUSD;

  // Convert the amount in ether to wei
  const amountInWei = ethers.utils.parseEther(amountInEth.toString());

  return amountInWei;
}

// Example usage
// const amountInWei = BigNumber.from("20000000000000000000");
// convertToUSD(amountInWei)
//   .then((amountInUSD) => {
//     console.log(amountInUSD);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

function toWei(amount) {
  return parseUnits(amount.toString());
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}
