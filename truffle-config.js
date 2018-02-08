var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "";
var mnemonic = "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      gas: 3012388,
      gasPrice: 30000000000
    },
    main: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/"+infura_apikey)
      },
      network_id: 3,
      gas: 21000,
      gasPrice: 1000000000
    }
  }
};