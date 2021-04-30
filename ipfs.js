//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");
var contract = require("truffle-contract");
const MyContract = artifacts.require("MyContract");

async function getIpfsHash(data, contract_path) {
    const ipfsHash = await ipfs.add(data);
    var contractJson = require(contract_path);
    const instance = await MyContract.deployed();

    await instance.setHash.sendTransaction(ipfsHash);

    let returnedHash = await instance.ipfsHash.call();

    console.log(ipfsHash);
    console.log(returnedHash);

    console.log(JSON.parse(await ipfs.cat(returnedHash)));
}

module.exports.getIpfsHash = getIpfsHash;
