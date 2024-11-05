// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import {ERC20Mock} from "./ERC20Mock.sol";

contract SHIBA is ERC20Mock {
    constructor() ERC20Mock("SHIBA INU", "SHIB", 18) {}
}