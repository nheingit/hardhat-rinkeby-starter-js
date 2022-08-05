const hre = require("hardhat");

async function main() {
  const HelloWorldFactory = await hre.ethers.getContractFactory("HelloWorld");
  const helloMessage = await HelloWorldFactory.deploy("Hello from QuickNode");
  await helloMessage.deployed();

  console.log("Contract deployed to:", helloMessage.address);
  console.log("Contract deployed by " + JSON.stringify(helloMessage.signer) + " signer");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});