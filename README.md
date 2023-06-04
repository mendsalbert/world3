<p align="center">
  <a href="" title="Project Initiator">
    <img src="https://bafybeiglsbz4o762okbhtcuo3zlgp7sikx2jn55ovw2jwlfwgz5wxhdrn4.ipfs.w3s.link/_splash.png" width="60px" alt="Project Initiator"/>
  </a>
</p>
<h1 align="center">VidisPark</h1>

<p align="center">
    <a href="https://www.youtube.com/watch?v=FlKs6_5q5hk" title="">🖥️ Video</a>
    .
    <a href="https://vidispark.vercel.app/video/2r3BsJGm5upgoSUIZxPL" title="">🔗 Website</a>
    ·
    <a href="https://github.com/mendsalbert/world3" title="">📂 Repo</a>
    ·
    <a href="https://github.com/mendsalbert/world3" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## Problem

In the realm of charitable donations, various obstacles impede the seamless and effective support of causes. These obstacles include lack of transparency, limited donation options, and complex processes for both donors and beneficiaries. As a result, individuals who wish to make a difference face difficulties in finding trustworthy and efficient platforms to contribute to causes they care about. Consequently, the traditional donation landscape falls short in providing a seamless and rewarding experience for donors and charities alike.

## Solution: Vidispark and its Features

To address these challenges, our donation app harnesses the power of Chainlink's decentralized oracle network and smart contract technology. By integrating Chainlink services into our platform, we revolutionize the way people contribute to charitable causes with enhanced reliability, security, and transparency.

Through Chainlink's decentralized oracle network, our donation app ensures accurate and real-time data for various functionalities. For example, we leverage Chainlink Price Feeds to provide up-to-date and reliable conversion rates between different currencies, allowing donors to contribute in their preferred fiat or cryptocurrency. This ensures that the donation amounts are accurately reflected and enables seamless transactions for donors around the world.

Additionally, our app utilizes Chainlink Keepers to automate important processes within our platform. We can set threshold-based triggers that automatically execute actions when certain donation milestones or events are reached. This streamlines operations and improves efficiency, enabling charities to focus more on their impactful work rather than manual monitoring.

Chainlink's VRF (Verifiable Random Function) is employed to ensure fair and transparent distribution of rewards, incentives, or prizes within our donation app. By generating provably random and tamper-proof results, we enhance trust and integrity in the selection process, fostering a sense of fairness among donors and beneficiaries.

With Chainlink's robust infrastructure and cutting-edge technology, our donation app provides a secure and reliable ecosystem for charitable giving. Donors can have peace of mind knowing that their contributions are accurately processed, securely handled, and allocated to the intended causes. Charities benefit from increased trust, transparency, and operational efficiency, allowing them to focus their resources on making a positive impact.

By leveraging Chainlink services, our donation app revolutionizes the way individuals engage with charitable causes, creating a seamless, transparent, and trustworthy platform for donors and charities alike. Together, we can drive meaningful change and empower a global community of philanthropists to make a lasting impact on the world.

## Architecture and Technology Stack

Web3 is built using JavaScript. All data stored within the application is decentralized. User and creator details are stored on a ethereum blockchain.

Technology Stack & Tools:

    -IDE: Visual Studio Code
    -Web Front-end and Back-end: Next.js, React.js
    -Backend: Next.js
    -File Storage: IPFS

A detailed tutorial on how to upload content to Vidispark will be linked in the video or accessible through a provided link.

Smart Contract Address - 0xdF3073768De7e417E55d764f881e144477d39b5e

## Prerequisite

- [Nodejs](https://nodejs.org/en// "Node") Installed

- [Git](https://git-scm.com/ "Git OFficial") Installed

- [npm](https://www.npmjs.com/ "npm ") Installed

- [Hardhat](https://hardhat.org/ "Hardhat ") Installed

## Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/mendsalbert/world3
```

2. Change the working directory

```Bash
cd world3
```

3. Start the local Hardhat node

```Bash
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window

```Bash
npx hardhat run scripts/deploy.js --network theta
```

5. Start the app

```Bash
npm run start
```

**🎇 You are Ready to Go!**

## Configuration

The chain ID should be 365. If you have a localhost rpc set up, you may need to overwrite it.

<p align="center" title="Project Initiator"><img src=
"https://i.ibb.co/9Hdk924/Screenshot-2023-06-04-at-10-19-55-PM.png" alt="Project Initiator"/></p>

To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura.

```Bash
require('@nomiclabs/hardhat-waffle');
const privateKey = 'xx';
const projectId = 'xx';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 365,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
      network_id: 80001,
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

## Built with

- [Solidity](https://docs.soliditylang.org/en/v0.8.17/ "Solidity"): as Main Coding Language for writing smart contract

- [ReactJs](https://reactjs.org/ "React Js"): as Main Coding Language for Creating The UI components (Front End)

- [TailwindCss](https://tailwindcss.com/ "Tailwind Css"): as Main Coding Language for styling UI components

- [IPFS](https://ipfs.tech/ "IPFS"): For Storing of files

- [Web3 Storage](https://www.google.com/search?q=web3storage "Web3 Storage"): For Storing of files

- [Github](https://github.com/ "Github") : For Repo Storage and source code management

- [Git](https://git-scm.com/ "Git") : For Version Control System

## Learnings and Challenges

During our journey to develop a fully decentralized donation platform, we discovered that existing donation platforms typically rely on centralized systems, which come with their own limitations and challenges. With a strong vision for a transparent and secure donation ecosystem, we set out to build the first fully decentralized donation contract.

However, this ambitious goal came with its share of challenges. We had to overcome technical complexities and ensure seamless integration of decentralized technologies such as Chainlink's oracle network and smart contracts. Collaborating with the Chainlink community and leveraging their expertise on platforms like GitHub, we were able to successfully integrate Chainlink services into our donation contract.

As a team of passionate developers, we embraced these challenges head-on and leveraged our expertise to create a robust and efficient donation contract. Through extensive research, collaboration, and dedication, we were able to navigate the complexities of decentralized systems and develop a platform that provides transparent and secure donation experiences.

We gained a deep understanding of the blockchain ecosystem, particularly in the context of donations, and harnessed the power of smart contracts to ensure the integrity of the donation process. Our donation contract leverages Chainlink's oracle network to provide real-time data, ensuring accurate conversion rates and enhancing transparency for donors.

With our fully decentralized donation contract, we aim to revolutionize the way people contribute to charitable causes. By eliminating the reliance on centralized intermediaries and embracing the power of blockchain technology, we empower donors to make a direct and meaningful impact while ensuring the utmost security and transparency.

Through our dedication and commitment to decentralization, we have created a platform that enables individuals and organizations to support causes they believe in with complete trust and confidence. Together, we can shape a future where charitable donations are truly transparent, efficient, and transformative.

## What's next for Vidispark

Q3 2023:

    Mainnet Launch of our Decentralized Donation Platform
    Integration of Chainlink Oracle Network for Real-Time Data
    Expansion of Partnerships with Charitable Organizations

Q4 2023:

    Marketing Campaign to Raise Awareness about our Decentralized Donation Platform
    Listing on Prominent Exchanges for Increased Accessibility
    Continuous Development and Enhancements based on User Feedback

Q1 2024:

    Introduction of NFT-based Donation Campaigns
    Public Sale of Donation Tokens for Community Participation
    Distribution of Unique NFTs as a Gesture of Gratitude

Q2 2024:

    Launching Play-to-Donate Initiatives and Charity Events
    Development of Staking and Reward System for Donors
    Creation of Virtual Donation Centers for Enhanced Engagement
