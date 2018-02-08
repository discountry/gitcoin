pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract GitCoin is MintableToken {
  string public name = "GIT COIN";
  string public symbol = "GCC";
  uint8 public decimals = 18;

  function getCurrentOwner() public returns (address) {
    return owner;
  }
}