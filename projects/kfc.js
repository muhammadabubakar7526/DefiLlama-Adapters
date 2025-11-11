const { uniV3Export } = require("./helper/uniswapV3")

const factory = '0x09df701f1f5df83a3bbef7da4e74bb075199d6a4' // same on all chains
// This PR is created for correct TVL and update dex Name to Kaspa Finance V3 (KFC)
module.exports = uniV3Export({
  kasplex: { factory, fromBlock: 484634, }
})