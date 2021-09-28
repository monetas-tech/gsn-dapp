const Monetas = artifacts.require('Monetas.sol')

const WhitelistPaymaster=artifacts.require('WhitelistPaymaster');
const RelayHub=artifacts.require('RelayHub');
module.exports = async function (deployer) {
  const forwarder=require('../build/gsn/Forwarder.json').address;
  await deployer.deploy(Monetas)
  const monetas= await Monetas.deployed();
  console.log("monetossssssssssss deployed");
  monetas.setTrustedForwarder(forwarder)  
}
