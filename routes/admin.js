const express = require("express");
const IPFS = require('ipfs-mini')
const router = express.Router();
const axios = require('axios')
const contract = require("../contract");
const ipfs = new IPFS({host: "ipfs.infura.io", port: 5001, protocol: "https"})

const get = async (hash) => {
    let data = await axios.get(`https://ipfs.infura.io/ipfs/${hash}`)
    return await JSON.parse(data.data);
}

const set = async (data) => {
    const hashData = JSON.stringify(data)
    const result = ipfs.add(hashData)
    return result
}

// router.post("/test", async (req, res) => {
//     // const data = JSON.stringify(req.body.data)
//     // ipfs.add(data, (err, hash) => {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     res.json(hash)
//     // })
//     const data = await get(req.body.hash)
//     return res.json(data)
// })

router.get("/tokens/:address", async (req, res) => {
    const hash = await contract.getTokens(req.params.address)
    const tokens = await get(hash)
    res.json(tokens)
});

router.post("/addToken", async (req, res) => {
    const hash = await contract.getTokens(req.body.address)
    const tokens = await get(hash)

    const token = Math.random().toString(36).slice(2)
    tokens.push(token)

    const newHash = await set(tokens)
    contract.updateTokens(req.body.address, newHash)

    res.json("success")
})

router.post("/deleteToken", async (req, res) => {
    const hash = await contract.getTokens(req.body.address)
    const tokens = await get(hash)

    tokens.splice(req.body.index, 1)

    const newHash = await set(tokens)
    contract.updateTokens(req.body.address, newHash)
})

router.get("/accountType/:address", async (req, res) => {
    const accountType = await getAccountType(req.params.address)
    res.json(accountType)
})

module.exports = router;
