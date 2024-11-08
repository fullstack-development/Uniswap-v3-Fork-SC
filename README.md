# Uniswap V3. Fork Smart Contracts

This project is part of the Uniswap product. The main goal of the project is to set up a complete copy of Uniswap v3 on another network, identifying issues and errors that may arise along the way. The process simplifies future cloning of Uniswap V3 on any new blockchain fully compatible with the EVM.

To understand how UniswapV3 works, I suggest reviewing:
- [the official documentation](https://docs.uniswap.org/contracts/v3/overview)
- [the Uniswap v3 book](https://uniswapv3book.com/). The first chapters explain the concept well, and the following chapters cover the organization and implementation of the smart contracts.

For simplicity, we use a monorepo that combines:
- v3-core,
- v3-periphery.

## Foundry and Hardhat

For convenience, the project can be built using Hardhat and Foundry. However, deployment is set up only with the [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview) tool.

## Getting Started

First, you need to clone the repository.

```shell
$ git clone https://github.com/fullstack-development/Uniswap-v3-Fork-SC.git
```

### Build

Foundry:
1. Install Foundry. See [documentation](https://book.getfoundry.sh/getting-started/installation).
2. Run the command
    ```shell
    $ forge build
    ```

Hardhat:
1. Requires node and npm. Install dependencies.
    ```shell
    $ npm ci
    ```
2. Run the command
    ```shell
    $ npx hardhat compile
    ```

### Test

The Uniswap smart contracts were not modified. They are taken from the repositories as-is, so there is no need for test coverage.

### Deploy

Deployment is implemented only with Hardhat Ignition. The deployment modules are located in the `/ignition/modules` folder.

Deployment steps:

1. Create a `.env` file and set the environment variables according to `.env.example`.

    ```shell
    PRIVATE_KEY=[deployer_private_key]

    AMOY_RPC_URL=[RPC_URL]
    SEPOLIA_RPC_URL=[RPC_URL]

    ETHERSCAN_API_KEY=[API_KEY]
    POLYGON_API_KEY=[API_KEY]
    ```

    If deploying to a single network, such as AMOY, it’s enough to specify only:

    ```shell
    PRIVATE_KEY=[deployer_private_key]
    AMOY_RPC_URL=[RPC_URL]
    POLYGON_API_KEY=[API_KEY]
    ```

2. Build the project if it hasn’t been done yet. Run the command:

    ```shell
    $ npx hardhat compile
    ```

3. To deploy the required set of Uniswap V3 smart contracts, run the command:

    ```shell
    $ npx hardhat ignition deploy ignition/modules/UniswapV3.ts --network [network_name] --deployment-id [network_name] --verify
    ```

    _Note!_ Running this command will automatically verify the smart contracts. If verification is not needed, you can omit the `--verify` parameter.

    Example deployment to the Amoy test network:

    ```shell
    $ npx hardhat ignition deploy ignition/modules/UniswapV3.ts --network amoy --deployment-id amoy --verify
    ```

4. To deploy a list of test tokens, run the command:

    ```shell
    $ npx hardhat ignition deploy ignition/modules/Tokens.ts --network [network_name] --deployment-id [network_name] --verify
    ```

    This deploys a list of ERC-20 token smart contracts, which can be used to create liquidity pairs for Uniswap V3 smart contracts. For testing purposes, minting tokens is allowed for any user. To do this, call the `mint()` function on the token smart contract’s address.

    Example deployment to the Amoy test network:

        ```shell
        $ npx hardhat ignition deploy ignition/modules/Tokens.ts --network amoy --deployment-id amoy --verify
        ```

_Note!_ For local deployment, you need to start a local node first and then run the deployment scripts:

1. `$ npx hardhat node`
2. `$ npx hardhat ignition deploy ignition/modules/Tokens.ts --network localhost --deployment-id localhost --verify`

## Deployments

After deployment, smart contract addresses can be found in the `/ignition/deployments/[network_name]/deployed_addresses.json` folder.
