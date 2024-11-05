// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20 {
    uint8 private immutable _decimals;

    constructor(string memory initialName, string memory initialSymbol, uint8 initialDecimals)
        ERC20(initialName, initialSymbol)
    {
        _decimals = initialDecimals;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
