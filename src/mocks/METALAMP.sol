// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import {ERC20Mock} from "./ERC20Mock.sol";

contract METALAMP is ERC20Mock {
    constructor() ERC20Mock("MetaLamp fun", "METALAMP", 18) {}
}