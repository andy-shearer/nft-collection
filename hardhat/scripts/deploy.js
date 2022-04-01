const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  const deployedContract = await cryptoDevsContract.deploy(METADATA_URL, WHITELIST_CONTRACT_ADDRESS);
  await deployedContract.deployed();

  console.log("Crypto Devs contract address:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
