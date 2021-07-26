# smart-pools-registry

The registries keep track of the deployed pie so external integrations can easily fetch if a smart contract is a pie and if so if its a PieVault or Smart Pool.

## Deployed instances

On Ethereum mainnet

### Generic pie registry

Tracks all pies.

```
0x412a5d5eC35fF185D6BfF32a367a985e1FB7c296
```

### PieVault registry

Tracks all PieVaults

```
0x63aafCF1F184A6A682f781c15A6436Ebd7D1C7ed
```

### Smart Pool registry

Tracks all Pie Smart Pools

```
0xE0CBd9db30E15B9ad885D39AecaE138616807753
```

## Integration

The registry contract inherits from the OpenZeppelin ``Ownable`` contracts. Which allow an ``owner`` to be set and functions which can only be called by the ``owner``

## Owner functions

Add a pie to the registry

```solidity
function addSmartPool(address _smartPool) external;
```

Remove a smart pool by index

```solidity
function removeSmartPool(uint256 _index) external;
```

Remove a smart pool by address

```solidity
function removeSmartPoolByAddress(address _address) external;
```

## Getters

Fetch if a pie is in the registry

```solidity
function inRegistry(address _pool) external view returns(bool);
```

Fetch a pie at a specific index

```solidity
function entries(uint256 _index) external view returns(address);
```