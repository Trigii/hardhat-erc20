const { run } = require('hardhat');

// ------------------ VERIFY "OurToken.sol" CONTRACT (uses @openzeppelin) ------------------
const verify = async (contractAddress, args) => {
    console.log('Verifying contract...');
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: args,
            contract: 'contracts/OurToken.sol:OurToken',
        });
    } catch (e) {
        if (e.message.toLowerCase().includes('already verified')) {
            console.log('Already Verified!');
        } else {
            console.log(e);
        }
    }
};

// ------------------ VERIFY "ManualToken.sol" CONTRACT (follows ERC20 standard) ------------------
/*
const verify = async (contractAddress, args) => {
    console.log('Verifying contract...');
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: args,
            contract: 'contracts/ManualToken.sol:ManualToken',
        });
    } catch (e) {
        if (e.message.toLowerCase().includes('already verified')) {
            console.log('Already Verified!');
        } else {
            console.log(e);
        }
    }
};
*/

module.exports = {
    verify,
};
