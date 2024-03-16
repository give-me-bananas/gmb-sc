import { ethers } from "hardhat";

const args = [
  "0x7730Edfb83212BABe9396064d765a3d5afEc671a",
  ethers.BigNumber.from(0),
  "0x7730Edfb83212BABe9396064d765a3d5afEc671a",
];
export default args;

// npx hardhat verify --network base-sepolia --constructor-args ./scripts/constructorArgs/lpConstructorArgs.ts 0xFDa2e6E84e30Ff3Dec247dD9f410F1a3720fdd47