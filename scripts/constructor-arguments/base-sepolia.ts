import { ethers } from "hardhat";

const args = [
  "0x7730Edfb83212BABe9396064d765a3d5afEc671a",
  ethers.BigNumber.from(0),
  "0x7730Edfb83212BABe9396064d765a3d5afEc671a",
];
export default args;

// npx hardhat verify --network base-sepolia --constructor-args ./scripts/constructor-arguments/base-sepolia.ts 0xae37D5b26C4eD804516261041BD332aC6eC7Ff27