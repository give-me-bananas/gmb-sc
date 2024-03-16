import { ethers } from "hardhat";

async function main() {
  const BananaController = await ethers.getContractFactory("BananaController");
  const [account] = await ethers.getSigners();
  const bananaController = await BananaController.deploy(
    account.address,
    ethers.BigNumber.from(0),
    account.address
  );
  await bananaController.deployed();

  console.log(`BananaController address: ${bananaController.address}`);

  // const randomAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // const tx = await bananaController.fakeDonate(
  //   randomAddress,
  //   randomAddress,
  //   ethers.BigNumber.from(1234)
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
