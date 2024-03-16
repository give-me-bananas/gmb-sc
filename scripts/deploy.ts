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
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
