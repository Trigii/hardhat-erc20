const networkConfig = {
    31337: {
        name: 'localhost',
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
    11155111: {
        name: 'sepolia',
        ethUsdPriceFeed: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
    },
};
const INITIAL_SUPPLY = '1000000000000000000000000';
const TOKEN_NAME = 'TrigiiToken';
const TOKEN_SYMBOL = 'TT';

const developmentChains = ['hardhat', 'localhost'];

module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
    TOKEN_NAME,
    TOKEN_SYMBOL,
};
