import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import TokenModule from "./Tokens";

export default buildModule('UniswapV3', (m) => {
  const weth = m.contract("WETH9");
  const uniswapV3Factory = m.contract("UniswapV3Factory");

  const swapRouter = m.contract("SwapRouter", [uniswapV3Factory, weth], {
    after: [weth, uniswapV3Factory],
  });

  m.useModule(TokenModule);

  const NFTDescriptor = m.library("NFTDescriptor");
  const nativeCurrencyLabelBytes = '0x46554e4e594d4f4e455900000000000000000000000000000000000000000000'; // cast format-bytes32-string "FUNNYMONEY"
  const nonfungibleTokenPositionDescriptor = m.contract("NonfungibleTokenPositionDescriptor", [weth, nativeCurrencyLabelBytes], {
    after: [weth],
    libraries: {
      NFTDescriptor: NFTDescriptor,
    }
  });

  const nonfungibleTokenPositionManager = m.contract("NonfungiblePositionManager", [uniswapV3Factory, weth, nonfungibleTokenPositionDescriptor], {
    after: [uniswapV3Factory, weth, nonfungibleTokenPositionDescriptor]
  });

  const quoterV2 = m.contract("QuoterV2", [uniswapV3Factory, weth], {
    after: [uniswapV3Factory, weth],
  })

  const uniswapInterfaceMulticall = m.contract("UniswapInterfaceMulticall");
  const multicall2 = m.contract("Multicall2");

  return {
    weth,
    uniswapV3Factory,
    swapRouter,
    nonfungibleTokenPositionDescriptor,
    nonfungibleTokenPositionManager,
    quoterV2,
    uniswapInterfaceMulticall,
    multicall2
  };
});