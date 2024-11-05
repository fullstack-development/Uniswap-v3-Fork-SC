import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-verify";
import 'dotenv/config';

const PRIVATE_KEY= process.env.PRIVATE_KEY as string;

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const AMOY_RPC_URL = process.env.AMOY_RPC_URL;

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || '';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: {
              yul: true
            }
          },
          viaIR : false,
        },
      },
      {
        version: "0.4.18"
      }
    ]
  },
  paths: {
    sources: "./src"
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    amoy: {
      url: AMOY_RPC_URL,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      amoy: POLYGON_API_KEY
    },
    customChains: [{
      network: "amoy",
      chainId: 80002,
      urls: {
        apiURL: "https://api-amoy.polygonscan.com/api",
        browserURL: "https://amoy.polygonscan.com"
      }
    }]
  }
};

export default config;
