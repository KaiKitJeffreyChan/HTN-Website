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

// router.post("/manageShipment", async (req, res) => {
//     try{
//         const fromAddress = req.body.fromAddress;
//         const toAddress = req.body.toAddress;
//         const vaccineDeliveryHash = await ipfs.addJSON(req.body.vaccineDeliveryInfo)
//         const result = await contract.manageShipment("0x7C0E53eEb5368BC36a17841E63b1815C0783A6Ec", "0xc169B7fC6f7cc80dF110BDf7FC0F193Bf4d6a7D0",  vaccineDeliveryHash);
//         res.json(result)
//     }catch (err) {
//         console.log(err);
//     }

// });

// vaccineScheme = {
//     locationToLongitude
//     locationToLatitude
//     locationFromLongitude
//     locationFromLatitude
//     addressTo
//     addressFrom
//     dateSent
//     dateArrived
//     vaccineCount
// }

// input = {
//     addressTo
//     addressFrom
//     vaccineCount
//     vaccineType
// }

router.post("/createShipment", async (req, res) => {
    let clinicInfo = await contract.getClinicInfo(req.body.addressTo);
    vaccineDeliveries = await get(clinicInfo.vaccineDeliveries);
    rawClinicInfo = clinicInfo
    clinicInfo.vaccineDeliveries = vaccineDeliveries;

    let supplierInfo = await contract.getDistributorInfo(req.body.address);
    vaccineDeliveries = await get(supplierInfo.vaccineDeliveries);
    rawSupplierInfo = supplierInfo
    supplierInfo.vaccineDeliveries = vaccineDeliveries;

    const vaccineDelivery = {
        locationToLongitude: clinicInfo.longitude,
        locationToLatitude: clinicInfo.latitude,
        locationFromLongitude: supplierInfo.longitude,
        locationFromLatitude: supplierInfo.latitude,
        addressTo: req.body.addressTo,
        addressFrom: req.body.address,
        dateSent: (new Date()).toString(),
        dateArrived: 0,
        vaccineCount: req.body.vaccineCount,
        deliveryId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    };

    rawSupplierInfo.vaccineCount -= vaccineDelivery.vaccineCount

    rawClinicInfo.push(vaccineDelivery)
    rawSupplierInfo.push(vaccineDelivery)

    rawClinicInfo.vaccineDeliveries = await (set(rawClinicInfo.vaccineDeliveries))
    rawSupplierInfo.vaccineDeliveries = await (set(rawSupplierInfo.vaccineDeliveries))

    const result = await manageShipment(req.body.address, req.body.addressTo, rawSupplierInfo, rawClinicInfo)
    res.json(result)
});

// input = {
//     deliveryId
// }
router.post("/recieveShipment", async (req, res) => {
    let clinicInfo = await contract.getClinicInfo(req.body.address);
    vaccineDeliveries = await get(clinicInfo.vaccineDeliveries);
    clinicInfo.vaccineDeliveries = vaccineDeliveries;
    const clinicIndex = clinicInfo.vaccineDeliveries.findIndex(info => info.deliveryId == this.body.deliveryId)
    const delivery = clinicInfo.vaccineDeliveries[clinicIndex]

    let supplierInfo = await contract.getDistributorInfo(delivery.addressFrom);
    vaccineDeliveries = await get(supplierInfo.vaccineDeliveries);
    supplierInfo.vaccineDeliveries = vaccineDeliveries;
    const supplierIndex = supplierInfo.vaccineDeliveries.findIndex(info => info.deliveryId == this.body.deliveryId)

    const vaccineDelivery = clinicInfo.vaccineDeliveries[clinicIndex]
    vaccineDelivery.dateArrived = (new Date()).toString()

    clinicInfo.vaccineDeliveries[clinicIndex] = vaccineDelivery
    supplierInfo.vaccineDeliveries[supplierIndex] = vaccineDelivery

    clinicInfo.vaccineCount += vaccineDelivery.vaccineCount

    clinicInfo.vaccineDeliveries = await (set(clinicInfo.vaccineDeliveries))
    supplierInfo.vaccineDeliveries = await (set(supplierInfo.vaccineDeliveries))

    const result = await manageShipment(req.body.address, req.body.addressTo, supplierInfo, clinicInfo)
    res.json(result)
});

module.exports = router;