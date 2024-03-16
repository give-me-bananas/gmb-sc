import { ethers, network } from "hardhat";

async function main() {
  const contractAddress = "0x0e1E9dEcd77F96Ed2d6d61c36aC658404c5a3423";
  const randomAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const BananaController = await ethers.getContractFactory("BananaController");
  const bananaController = BananaController.attach(contractAddress);

  const tx = await bananaController.fakeDonate(
    randomAddress,
    randomAddress,
    ethers.BigNumber.from(1234),
    "WK",
    "Lmao"
  );

  console.log(`tx hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
