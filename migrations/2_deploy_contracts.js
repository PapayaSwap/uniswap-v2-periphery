const WETH = artifacts.require('WETH9')
const UniswapV2Router = artifacts.require('UniswapV2Router02')

module.exports = function(deployer, network) {
  deployer.then(async () => {
    var wethAddr;
    if (network == 'bsc') {
        wethAddr = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    } else {
        await deployer.deploy(WETH)
        wethAddr = WETH.address
    } 

    
    await deployer.deploy(UniswapV2Router, '0x00D3B20D4CAD4aD4B65f6d190d58F9aF63074778', wethAddr)
  })
}
