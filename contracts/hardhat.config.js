require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("dotenv").config();



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    harmonyTestnet: {
      url: "https://api.s0.b.hmny.io",
      accounts: [process.env.PRIVATE_KEY],
    },
    harmonyMainnet: {
      url: "https://api.harmony.one",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
