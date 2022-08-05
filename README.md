## Setup

Create `.env` file from `.env.sample` and include environment variables:

```bash
cp .env.sample .env
```

Install dependencies:

```bash
npm i
```

Compile and deploy contract:

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby
```

Error:

```
ProviderError: loading txs from DB: err: rlp parse transaction: invalid chainID, 1 (expected 4), rlp: f8680e8459682f0883010f2c944fcd8cd4a0b1d584b3e0d941262931e32864d3bf80846fe15b4425a00479125ea64e1bb285afe6f7caef6e5d88481051473c2382f3b77b1972877feca06084e4f6b2a9aa5bd937e3f68116cbfa4f07f0d39c1f1dff9fcae47c2677fbca
    at HttpProvider.request (/Users/ajcwebdev/hardhat-rinkeby-starter-js/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)
    at LocalAccountsProvider.request (/Users/ajcwebdev/hardhat-rinkeby-starter-js/node_modules/hardhat/src/internal/core/providers/accounts.ts:182:36)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at EthersProviderWrapper.send (/Users/ajcwebdev/hardhat-rinkeby-starter-js/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
```