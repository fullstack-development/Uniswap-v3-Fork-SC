import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenModule = buildModule("Tokens", (m) => {
  const BNB = m.contract("BNB");
  const METALAMP = m.contract("METALAMP");
  const SHIBA = m.contract("SHIBA");
  const USDC = m.contract("USDC");
  const USDT = m.contract("USDT");
  const WBTC = m.contract("WBTC");

  return {
    BNB,
    METALAMP,
    SHIBA,
    USDC,
    USDT,
    WBTC
  };
});

export default TokenModule;