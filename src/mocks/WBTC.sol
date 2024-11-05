// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import {ERC20Mock} from "./ERC20Mock.sol";

contract WBTC is ERC20Mock {
    constructor() ERC20Mock("Wrapped BTC", "WBTC", 8) {}
}