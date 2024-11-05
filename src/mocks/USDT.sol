// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import {ERC20Mock} from "./ERC20Mock.sol";

contract USDT is ERC20Mock {
    constructor() ERC20Mock("Tether USD", "USDT", 6) {}
}
