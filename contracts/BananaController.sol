// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract BananaController {
    address public owner;
    uint256 public commissionPercentage; // 10000 is 100.00%
    address public commissionRecepient;

    mapping(address => bool) public isStreamer;
    mapping(IERC20 => bool) public supportedErc20;

    event RegisterAsStreamer(address indexed streamer);
    event UnregisterAsStreamer(address indexed streamer);
    event Donate(
        address indexed donar,
        address indexed recipient,
        IERC20 indexed erc20TokenAddress,
        uint256 netDonation,
        uint256 commission
    );

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(
        address _owner,
        uint256 _commissionPercentage,
        address _commissionRecepient
    ) {
        owner = _owner;
        commissionPercentage = _commissionPercentage;
        commissionRecepient = _commissionRecepient;
    }

    function setErc20Token(
        IERC20 erc20TokenAddress,
        bool isSupported
    ) external onlyOwner {
        supportedErc20[erc20TokenAddress] = isSupported;
    }

    function setCommissionPercentage(
        uint256 _commissionPercentage
    ) external onlyOwner {
        commissionPercentage = _commissionPercentage;
    }

    function setCommissionRecepient(
        address _commissionRecepient
    ) external onlyOwner {
        commissionRecepient = _commissionRecepient;
    }

    function registerAsStreamer() external {
        isStreamer[msg.sender] = true;
        emit RegisterAsStreamer(msg.sender);
    }

    function unregisterAsStreamer() external {
        isStreamer[msg.sender] = false;
        emit UnregisterAsStreamer(msg.sender);
    }

    function donate(
        address recipient,
        IERC20 erc20TokenAddress,
        uint256 value
    ) external {
        require(
            supportedErc20[erc20TokenAddress],
            "erc20 token needs to be supported"
        );
        require(isStreamer[recipient], "recipient needs to be a streamer");

        uint256 commission = (value * commissionPercentage) / 1e4;
        uint256 remaining = value - commission;

        // take commision
        erc20TokenAddress.transferFrom(
            msg.sender,
            commissionRecepient,
            commission
        );

        // transfer to streamer
        erc20TokenAddress.transferFrom(msg.sender, recipient, remaining);

        emit Donate(
            msg.sender,
            recipient,
            erc20TokenAddress,
            remaining,
            commission
        );
    }

    // strictly used for testing during hackathon only
    function fakeDonate(
        address recipient,
        IERC20 erc20TokenAddress,
        uint256 value
    ) external {
        emit Donate(msg.sender, recipient, erc20TokenAddress, value, value);
    }
}
