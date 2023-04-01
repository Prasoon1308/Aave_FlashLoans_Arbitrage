const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const Arbitrage = await hre.ethers.getContractFactory("Arbitrage");
  const arbitrage = await Arbitrage.deploy(
    "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
  );

  await arbitrage.deployed();

  console.log("Arbitrage contract deployed: ", arbitrage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
