require("dotenv").config();
import { BuidlerConfig, task, usePlugin } from "@nomiclabs/buidler/config";
import {deployContract} from "ethereum-waffle";
import RegistryArtifact from "./artifacts/SmartPoolRegistry.json";

// usePlugin("buidler-deploy");
usePlugin("@nomiclabs/buidler-ethers");
usePlugin("bsc-buidler-etherscan");

interface ExtendedBuidlerConfig extends BuidlerConfig {
    [x:string]: any
}

const config: ExtendedBuidlerConfig = {
    solc: {
      version: "0.6.4",
      optimizer: {
        runs: 200,
        enabled: true,
      }
    },
    networks: {
      goerli: {
        url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
        accounts: [process.env.GOERLI_PRIVATE_KEY]
      },
      forked: {
        url: "http://127.0.0.1:8545",
      },
      bsc: {
        url: `https://bsc-dataseed.binance.org/`,
        accounts: [process.env.BSC_PRIVATE_KEY],
      },
    },
    namedAccounts: {
      deployer: 0,
    },
    etherscan: { apiKey: process.env.ETHERSCAN_KEY  }
}


task("deploy-registry", async(taskArgs, {ethers}) => {
  const signers = await ethers.getSigners();

  const oven = await deployContract(signers[0], RegistryArtifact);

  console.log(`Contract deployed at: ${oven.address}`);
});

export default config;