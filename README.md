# ERC20

Create your own token in a manual or automatic way!

## Quickstart

```sh
git clone https://github.com/Trigii/hardhat-erc20.git
cd hardhat-erc20
yarn
```

## Usage

Deploy on testnet/development chain:

```sh
yarn hardhat deploy
```

## Deployment to a testnet or mainnet

1. Setup environment variables:

You'll want to set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

-   `PRIVATE_KEY`: The private key of your account (like from metamask). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.

-   `SEPOLIA_RPC_URL`: This is url of the sepolia testnet node you're working with. You can get setup with one for free from Alchemy

2. Get testnet ETH:

Head over to [faucets.chain.link](https://faucets.chain.link) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Select Contract Deployment:

-   Go to `deploy/01-deploy-token.js` and comment/uncomment the contract you want to deploy (manual or @zeppelin)

-   Go to `utils/verify.js` and comment/uncomment the contract you want to verify (manual or @zeppelin)

4. Deploy:

```sh
yarn hardhat deploy --network sepolia
```
