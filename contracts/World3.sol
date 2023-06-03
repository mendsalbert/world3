// SPDX-License-Identifier: MIT
// SPDX-IGNORE-DUE-TO-MISMATCH
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";

contract World3 is VRFConsumerBase, KeeperCompatibleInterface {

  struct Donation {
    uint256 donationId; // Added donationId field
    string name;
    string description;
    uint256 goal;
    uint256 amountRaised;
    uint256 toGo;
    string[] pictures;
    string category;
    uint256[] donorAmounts;
    address[] donors;
    uint256 startTime;
    uint256 endTime;
    string county;
}


    mapping(address => uint256[]) private userDonations; // Mapping to store user donations
    mapping(uint256 => Donation) public donations;
    uint256 public donationCount;

    // Chainlink Price Feed variables
    AggregatorV3Interface internal priceFeed;

    // Chainlink VRF variables
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;

    // Chainlink Keepers variables
    uint256 public constant MIN_THRESHOLD_PERCENTAGE = 50;
    uint256 public donationAccumulated;
    uint256 public constant THRESHOLD = 100; // Placeholder threshold value
    // Chainlink Alarm Clock variables
    uint256 public endTime;

    constructor(
        address _priceFeedAddress,
        address _vrfCoordinator,
        address _linkToken,
        bytes32 _keyHash,
        uint256 _fee
    ) VRFConsumerBase(_vrfCoordinator, _linkToken) {
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
        keyHash = _keyHash;
        fee = _fee;
    }

    // Admin functions

   function createDonation(
    string memory _name,
    string memory _description,
    uint256 _goal,
    string[] memory _pictures,
    string memory _category,
    uint256 _startTime,
    uint256 _endTime,
    string memory _county
) public onlyOwner {
    require(_startTime < _endTime, "Invalid start and end time");
    Donation storage newDonation = donations[donationCount];
    newDonation.donationId = donationCount; // Assign donationCount to donationId
    newDonation.name = _name;
    newDonation.description = _description;
    newDonation.goal = _goal;
    newDonation.amountRaised = 0;
    newDonation.toGo = _goal;
    newDonation.pictures = _pictures;
    newDonation.category = _category;
    newDonation.startTime = _startTime;
    newDonation.endTime = _endTime;
    newDonation.county = _county;
    donationCount++;
}

    function editDonation(
        uint256 _donationId,
        string memory _name,
        string memory _description,
        uint256 _goal,
        string[] memory _pictures,
        string memory _category,
        uint256 _startTime,
        uint256 _endTime,
        string memory _county
    ) public onlyOwner donationExists(_donationId) {
        require(_startTime < _endTime, "Invalid start and end time");
        Donation storage donation = donations[_donationId];
        donation.name = _name;
        donation.description = _description;
        donation.goal = _goal;
        donation.pictures = _pictures;
        donation.category = _category;
        donation.startTime = _startTime;
        donation.endTime = _endTime;
        donation.county = _county;
    }

    function hideDonation(uint256 _donationId) public onlyOwner donationExists(_donationId) {
        delete donations[_donationId];
    }

    function getUserDonations(address _user) public view returns (Donation[] memory) {
        uint256[] memory userDonationIds = userDonations[_user];
        Donation[] memory userDonationList = new Donation[](userDonationIds.length);
        for (uint256 i = 0; i < userDonationIds.length; i++) {
            userDonationList[i] = donations[userDonationIds[i]];
        }
        return userDonationList;
    }

    // User functions

    function addDonation(uint256 _donationId, uint256 _amount) public donationExists(_donationId) {
        Donation storage donation = donations[_donationId];
        require(block.timestamp >= donation.startTime, "Donation campaign has not started");
        require(block.timestamp <= donation.endTime, "Donation campaign has ended");
        donation.amountRaised += _amount;
        donation.toGo = donation.goal - donation.amountRaised;
        donation.donorAmounts.push(_amount);
        donation.donors.push(msg.sender);
        userDonations[msg.sender].push(_donationId);
        if (donation.amountRaised >= (donation.goal * MIN_THRESHOLD_PERCENTAGE) / 100) {
            // Trigger Chainlink Keepers function
            donationAccumulated += donation.amountRaised;
        }
    }

    function getDonations() public view returns (Donation[] memory) {
        Donation[] memory allDonations = new Donation[](donationCount);
        for (uint256 i = 0; i < donationCount; i++) {
            Donation storage donation = donations[i];
            uint256[] memory donorAmounts = new uint256[](donation.donors.length);
            for (uint256 j = 0; j < donation.donors.length; j++) {
                donorAmounts[j] = donation.donorAmounts[j];
            }
            allDonations[i] = Donation(
                donation.donationId,
                donation.name,
                donation.description,
                donation.goal,
                donation.amountRaised,
                donation.toGo,
                donation.pictures,
                donation.category,
                donorAmounts,
                donation.donors,
                donation.startTime,
                donation.endTime,
                donation.county
            );
        }
        return allDonations;
    }

    function getDonation(uint256 _donationId) public view returns (Donation memory) {
        require(_donationId < donationCount, "Donation does not exist");
        return donations[_donationId];
    }

    // Chainlink Price Feed functions

    function getDonationValueInUSD(uint256 _donationId) public view returns (uint256) {
        Donation storage donation = donations[_donationId];
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return (donation.amountRaised * uint256(price)) / 1e8;
    }

    // Chainlink VRF functions

    function getRandomNumber(uint256 _donationId) public returns (bytes32 requestId) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK tokens to request random number"
        );
        Donation storage donation = donations[_donationId];
        requestId = requestRandomness(keyHash, fee);
        return requestId;
    }

    function fulfillRandomness(bytes32 _requestId, uint256 _randomness) internal override {
        randomResult = _randomness;
    }

    // Chainlink Keepers functions

    function checkUpkeep(bytes memory _data) public view override returns (bool upkeepNeeded, bytes memory performData) {
        upkeepNeeded = donationAccumulated >= THRESHOLD;
        performData = _data;
    }

    function performUpkeep(bytes memory _performData) public override {
        require(donationAccumulated >= THRESHOLD, "Threshold not reached");

        // Perform your desired function here

        donationAccumulated = 0;
    }

    // Chainlink Alarm Clock functions

    function scheduleEndDonation(uint256 _donationId, uint256 _endTime) public onlyOwner donationExists(_donationId) {
        Donation storage donation = donations[_donationId];
        require(_endTime > donation.startTime, "End time should be after start time");
        donation.endTime = _endTime;
        // Schedule the function to be executed at `_endTime`
    }

    // Modifier to check if the donation exists
    modifier donationExists(uint256 _donationId) {
        require(_donationId < donationCount, "Donation does not exist");
        _;
    }

    // Modifier to check if the caller is the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner(), "Caller is not the owner");
        _;
    }

    // Function to get the contract owner's address
    function owner() public view returns (address) {
        return msg.sender;
    }
}
