const express = require("express");
const IPFS = require("ipfs-mini");
const router = express.Router();
const axios = require("axios");
const contract = require("../contract");
const ipfs = new IPFS({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const get = async (hash) => {
    let data = await axios.get(`https://ipfs.infura.io/ipfs/${hash}`);
    return await JSON.parse(data.data);
};

const set = async (data) => {
    const hashData = JSON.stringify(data);
    const result = ipfs.add(hashData);
    return result;
};

router.get("/supplierInfo/:address", async (req, res) => {
    let supplierInfo = await contract.getDistributorInfo(req.params.address);
    vaccineDeliveries = await get(supplierInfo.vaccineDeliveries);
    supplierInfo.vaccineDeliveries = vaccineDeliveries;
    res.json(supplierInfo);
});

router.post("/create", async (req, res) => {
    const hash = await contract.getTokens(req.body.address);
    const tokens = await get(hash);

    if (!tokens.includes(req.body.token)) {
        return res.json("Invalid token");
    }

    const index = tokens.indexOf(req.body.token);
    tokens.splice(index, 1);

    const newHash = await set(tokens);
    contract.updateTokens(req.body.address, newHash);

    const result = await contract.createDistributor(
        req.body.address,
        req.body.longitude,
        req.body.latitude,
        req.body.location,
        req.body.vaccineCount,
        0,
        "QmVkvoPGi9jvvuxsHDVJDgzPEzagBaWSZRYoRDzU244HjZ"
    );
    res.json(result);
});

router.post("/projectedVaccines", async (req, res) => {
    let supplierInfo = await contract.getDistributorInfo(req.body.address);
    const result = await contract.updateDistributorInventory(
        req.body.address,
        supplierInfo.vaccineCount,
        req.body.projectVaccines
    );
    res.json(result);
});

router.post("/updateVaccines", async (req, res) => {
    let supplierInfo = await contract.getDistributorInfo(req.body.address);
    const result = await contract.updateDistributorInventory(
        req.body.address,
        req.body.vaccineCount,
        supplierInfo.projectedVaccines
    );
    res.json(result);
});

module.exports = router;
