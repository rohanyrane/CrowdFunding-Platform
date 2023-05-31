/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork :'goerli',
    networks:{
      hardhat :{},
      goerli:{
        url :'https://rpc.ankr.com/eth_goerli',
        accounts:['0xc28509EFAa8A7CD1369cEDc0a1140f6F1Fa8f46D']
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
