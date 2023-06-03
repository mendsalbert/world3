// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers } = require("hardhat");

const priceFeedAddress = "0x0715a7794a1dc8e42615f059dd6e406a6594651a";
const vrfCoordinator = "0x7a1bac17ccc5b313516c5e16fb24f7659aa5ebed";
const linkToken = "0x326c977e6efc84e512bb9c30f76e30c160ed06fb";
const keyHash =
  "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
const fee = 100; // Specify the desired fee value

async function main() {
  const World3 = await ethers.getContractFactory("World3");
  const world3 = await World3.deploy(
    priceFeedAddress,
    vrfCoordinator,
    linkToken,
    keyHash,
    fee
  );

  await world3.deployed();

  console.log("World3 deployed to:", world3.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
