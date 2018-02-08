const GitCoin = artifacts.require("./GitCoin.sol")
const GitCoinCrowdsale = artifacts.require("./GitCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const ifSuccessfulSendTo = accounts[0]
  const fundingGoalInEthers = 1000
  const durationInMinutes = 360000
  const etherCostOfEachToken = 0.01

  deployer.deploy(GitCoin).then(function() {
    return deployer.deploy(GitCoinCrowdsale, ifSuccessfulSendTo, fundingGoalInEthers, durationInMinutes, etherCostOfEachToken, GitCoin.address);
  });
};

