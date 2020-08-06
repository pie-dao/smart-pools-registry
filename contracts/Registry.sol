pragma solidity 0.6.4;

import "./IRegistry.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SmartPoolRegistry is IRegistry, Ownable {
    mapping(address => bool) public override inRegistry;
    address[] public override entries;

    function addSmartPool(address _smartPool) external override onlyOwner {
        require(!inRegistry[_smartPool], "SmartPoolRegistry.addSmartPool: POOL_ALREADY_IN_REGISTRY");
        entries.push(_smartPool);
        inRegistry[_smartPool] = true;
    }

    function removeSmartPool(uint256 _index) external override onlyOwner {
        address registryAddress = entries[_index];

        inRegistry[registryAddress] = false;

        // Move last to index location
        entries[_index] = entries[entries.length - 1];
        // Pop last one off
        entries.pop();
    }

}