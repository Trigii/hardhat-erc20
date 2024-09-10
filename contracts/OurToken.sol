// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    // initialSupply is 50 <- 50 WEI
    // ERC20 has 18 decimals by default
    // initialSupply 50e18 or 50 * 10 ** 18
    constructor(uint256 initialSupply) ERC20("OurToken", "OT") {
        _mint(msg.sender, initialSupply); // create the initial supply of tokens
    }
}
