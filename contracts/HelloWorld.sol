// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract HelloWorld {
  string private helloMessage;

  constructor(string memory _helloMessage) {
    helloMessage = _helloMessage;
  }

  function hello() public view returns (string memory) {
    return helloMessage;
  }

  function setHello(string memory _helloMessage) public {
    helloMessage = _helloMessage;
  }
}