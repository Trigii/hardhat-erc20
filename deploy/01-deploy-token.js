const { network } = require('hardhat');
const {
    developmentChains,
    INITIAL_SUPPLY,
    TOKEN_NAME,
    TOKEN_SYMBOL,
} = require('../helper-hardhat-config');
const { verify } = require('../utils/verify');

// ------------------ DEPLOY "OurToken.sol" CONTRACT (uses @openzeppelin) ------------------
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    // deploying the token
    const ourToken = await deploy('OurToken', {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    log(`ourToken deployed at ${ourToken.address}`);

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(ourToken.address, [INITIAL_SUPPLY]);
    }
    log('---------------------------------------------');
};

// ------------------ DEPLOY "ManualToken.sol" CONTRACT (follows ERC20 standard) ------------------
/*
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const args = [INITIAL_SUPPLY, TOKEN_NAME, TOKEN_SYMBOL];

    // deploying the token
    const manualToken = await deploy('ManualToken', {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    log(`manualToken deployed at ${manualToken.address}`);

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(manualToken.address, args);
    }
    log('---------------------------------------------');
};
*/

module.exports.tags = ['all', 'token'];
