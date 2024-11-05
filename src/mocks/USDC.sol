// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import {ERC20Mock} from "./ERC20Mock.sol";

contract USDC is ERC20Mock {
    constructor() ERC20Mock("USD Coin", "USDC", 6) {}
}