const GitCoin = artifacts.require("./GitCoin.sol")
const GitCoinCrowdsale = artifacts.require("./GitCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const durationTime = 36000000
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]
  // const token = '0x00'

  deployer.deploy(GitCoin).then(function() {
    return deployer.deploy(GitCoinCrowdsale, durationTime, rate, wallet, GitCoin.address);
  });
};

