const ethers = require("ethers");

const abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "isAdmin",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "getTokens",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "string",
                name: "_token",
                type: "string",
            },
        ],
        name: "updateTokens",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "getDistributorInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "location",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "longitude",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "latitude",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "vaccineCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "projectedVaccines",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "vaccineDeliveries",
                        type: "string",
                    },
                ],
                internalType: "struct SimpleStorage.distributor",
                name: "",
                type: "tuple",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "getClinicInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "location",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "longitude",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "latitude",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "vaccineCount",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "requestedVaccines",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "vaccineDeliveries",
                        type: "string",
                    },
                ],
                internalType: "struct SimpleStorage.clinic",
                name: "",
                type: "tuple",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "string",
                name: "_longitude",
                type: "string",
            },
            {
                internalType: "string",
                name: "_latitude",
                type: "string",
            },
            {
                internalType: "string",
                name: "_location",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_vaccineCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_projectedVaccines",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_vaccineDeliveries",
                type: "string",
            },
        ],
        name: "createDistributor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "string",
                name: "_longitude",
                type: "string",
            },
            {
                internalType: "string",
                name: "_latitude",
                type: "string",
            },
            {
                internalType: "string",
                name: "_location",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_vaccineCount",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_requestVaccines",
                type: "string",
            },
            {
                internalType: "string",
                name: "_vaccineDeliveries",
                type: "string",
            },
        ],
        name: "createClinic",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_vaccineCount",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_requestVaccines",
                type: "string",
            },
        ],
        name: "updateClinicInventory",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_vaccineCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_projectedVaccines",
                type: "uint256",
            },
        ],
        name: "updateDistributorInventory",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_addressFrom",
                type: "address",
            },
            {
                internalType: "address",
                name: "_addressTo",
                type: "address",
            },
            {
                internalType: "string",
                name: "_vaccineDeliveriesFrom",
                type: "string",
            },
            {
                internalType: "string",
                name: "_vaccineDeliveriesTo",
                type: "string",
            },
        ],
        name: "manageShipment",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "getAccountType",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
const address = "0x78a6be740Df96E6c941cB39E1070889bA0914839";
const url = "HTTP://127.0.0.1:7545";

const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const contract = new ethers.Contract(address, abi, customHttpProvider.getSigner(0));

module.exports = contract;
