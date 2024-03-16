import { ethers } from "hardhat";

const args = [
  "0x7730Edfb83212BABe9396064d765a3d5afEc671a",
  ethers.BigNumber.from(0),
  "0x7730Edfb83212BABe9396064d765a3d5afEc671a",
];
export default args;

// npx hardhat verify --network arbitrum-sepolia --constructor-args ./scripts/constructor-arguments/arbitrum-sepolia.ts 0x0e1E9dEcd77F96Ed2d6d61c36aC658404c5a3423

// npx hardhat verify --network arbitrum-sepolia 0x0e1E9dEcd77F96Ed2d6d61c36aC658404c5a3423 "0x7730Edfb83212BABe9396064d765a3d5afEc671a" "0" "0x7730Edfb83212BABe9396064d765a3d5afEc671a"