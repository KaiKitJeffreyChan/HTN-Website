pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract SimpleStorage {
    address admin = 0x7C0E53eEb5368BC36a17841E63b1815C0783A6Ec;
    //Use ipfs to hash
    string token;
    
    constructor() public {
        token = "QmVkvoPGi9jvvuxsHDVJDgzPEzagBaWSZRYoRDzU244HjZ";
    }
    
    // // Keep this struct for ipfs
    // struct vaccineDelivery {
    //     string locationTo;
    //     string locationFrom;
    //     address addressTo;
    //     address addressFrom;
    //     string sentOutDate;
    //     string recivedDate;
    //     uint vaccineCount;
    // }
    
    struct clinic {
        string location;
        string longitude;
        string latitude;
        uint vaccineCount;
        string requestedVaccines;
        string vaccineDeliveries;
    }
    
    struct distributor {
        string location;
        string longitude;
        string latitude;
        uint vaccineCount;
        uint projectedVaccines;
        string vaccineDeliveries;
    }
    
    mapping(address => clinic) clinics;
    mapping(address => distributor) distributors;
    mapping(address => string) accountType;
    
    function isAdmin(address _address) public view returns (bool) {
        if (_address == admin) {
            return (true);
        } else {
            return (false);
        }
    }
    
    function getTokens(address _address) public view returns (string memory) {
        if (_address == admin) {
            return (token);
        } else {
            return ("Unauthorized");
        }
    }
    
    function updateTokens(address _address, string memory _token) public returns (string memory) {
        if (_address == admin) {
            token = _token;
        } else {
            return ("Unauthorized");
        }
    }
    
    function getDistributorInfo(address _address) public view returns (distributor memory){
        return (distributors[_address]);
    }
    
    function getClinicInfo(address _address) public view returns (clinic memory){
        return (clinics[_address]);
    }
    
    function createDistributor(address _address, string memory _longitude, string memory _latitude, string memory _location, uint _vaccineCount, uint _projectedVaccines, string memory _vaccineDeliveries) public {
        distributor memory tempDistributor = distributor(_location, _longitude, _latitude, _vaccineCount, _projectedVaccines, _vaccineDeliveries);
        distributors[_address] = tempDistributor;
        accountType[_address] = "supplier";
    }
    
    function createClinic(address _address, string memory _longitude, string memory _latitude, string memory _location, uint _vaccineCount, string memory _requestVaccines, string memory _vaccineDeliveries) public {
        clinic memory tempClinic = clinic(_location, _longitude, _latitude, _vaccineCount, _requestVaccines, _vaccineDeliveries);
        clinics[_address] = tempClinic;
        accountType[_address] = "clinic";
    }
    
    // mapping(address => bool) testMap;
    // function test(address _address) public view returns (bool){
    //     return(testMap[_address]);
    // }
    
    function updateClinicInventory(address _address, uint _vaccineCount, string memory _requestVaccines) public {
        clinic memory tempClinic = clinic(clinics[_address].location, clinics[_address].longitude, clinics[_address].latitude, _vaccineCount, _requestVaccines, clinics[_address].vaccineDeliveries);
        clinics[_address] = tempClinic;
    }
    
    function updateDistributorInventory(address _address, uint _vaccineCount, uint _projectedVaccines) public {
        distributor memory tempDistributor = distributor(distributors[_address].location, distributors[_address].longitude, distributors[_address].latitude, _vaccineCount, _projectedVaccines, distributors[_address].vaccineDeliveries);
        distributors[_address] = tempDistributor;
    }
    
    function manageShipment(address _addressFrom, address _addressTo, string memory _vaccineDeliveriesFrom, string memory _vaccineDeliveriesTo) public {
        clinics[_addressTo].vaccineDeliveries = _vaccineDeliveriesTo;
        distributors[_addressFrom].vaccineDeliveries = _vaccineDeliveriesFrom;
    }
    
    function getAccountType(address _address) public view returns (string memory) {
        return (accountType[_address]);
    }
}
