require("dotenv").config();
import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("buidler-deploy");

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
    },
    namedAccounts: {
      deployer: 0,
    },
}

export default config;