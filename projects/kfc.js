const { uniV3Export } = require("./helper/uniswapV3")

// Kaspa Finance V3 (KFC) Uniswap V3–style DEX on Kasplex
// Factory is the same across chains
const factory = '0x09df701f1f5df83a3bbef7da4e74bb075199d6a4'

// Export using the standard DefiLlama Uniswap V3 helper
module.exports = uniV3Export({
  kasplex: {
    factory,
    fromBlock: 484634,
  },
})

/* --------------------------------------------------------------------------
   NOTE FOR MAINTAINERS
   --------------------------------------------------------------------------
   These Kasplex ecosystem tokens currently lack Coingecko price mappings:
     0xb7a95035618354d9adfc49eca49f38586b624040 -> zeal
     0x9a5a144290dffa24c6c7aa8ca9a62319e60973d8 -> nacho-the-kat
     0x1f3ce97f8118035dba7fbcd5398005491cf45603 -> kasper
     0x98508da68180e3c23bee5685f14ad2da5195da12 -> keiro
     0x0fd8d408ce707f4e4f8e54193c4c55a3b969834b -> krex
     0xc47c03309c1c5e17b4a0b542dec2e47c99f16a5d -> mambo

   Please add these mappings to the DefiLlama pricing registry
   so the helper can display the correct TVL.
-------------------------------------------------------------------------- */
