<!--
order: 6
-->

# STAL Stablecoin

The STAL stablecoin is a risk-minimised **100% USD-pegged Stablecoin** backed by USD stablecoins in the Stable pool that was introduced by the Aldabra Stable pool.

![](/stal_info.png)

### Basic Information

**Token Name :** Stal Stablecoin  
**Token Symbol :** STAL  
**Decimals :** 18  
**Circulation Supply :** `Coming soon`  
**Chain :** Binance Smart Chain (BEP-20)  
**Contract Address :** `Coming soon`  
***

### What's STAL used for?

The STAL stablecoin can be deposited into the Vault to receive an interest-bearing token (ibSTAL) that can also be deposited into the Aldabra yield farm to earn ALDABRA tokens.

Opportunities to arbitrage STAL from markets to make a profit from the price differences.

Provide liquidity with your STAL in major decentralized exchanges such as Pancakeswap.

`More use cases will be added soon.` [(Roadmap)](../../getting-started/roadmap)
***

### How to get STAL?

**You can acquire STAL in the following ways :**  

- Mint new STAL by depositing one or more USD stablecoins with a 1:1 ratio into the Stable pool and receiving STAL in return.

**Buy STAL on major decentralized exchanges :**
- Pancakeswap
***

### Minting and Redemption

**Minting** is the process of creating new STAL by depositing USD stablecoins with a 1:1 ratio into the Stable pool.

**Redemption** is the process of retrieving USD stablecoins by returning STAL to burn with a 1:1 ratio.

`It is possible to say that users need $1 to mint new STAL, and will get $1 from redeeming STAL excluding fees.`

The stablecoins currently underlying STAL include:  

|      | Token Address                               |
| ---- | ------------------------------------------- |
| BUSD | [0xe9e7cea3dedca5984780bafc599bd69add087d56](https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56) |
| USDT | [0x55d398326f99059ff775485246999027b3197955](https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955) |
| USDC | [0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d](https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d) |
***

### The Price Peg Mechanics

The STAL stablecoin is a **100% USD-pegged Stablecoin** backed by USD stablecoins. It needs to remain pegged to the USD. The mechanics used rely on arbitrage, this can happen in several ways:

- Someone might notice that STAL is trading on some market above $1 and decide to mint some STAL and immediately sell STAL to make a profit from the price difference.

- And, when STAL is trading on some market below $1. Someone decides to buy some STAL at this discount and immediately redeem their STAL to make a profit from the price difference.

Therefore, minting and redemption are one of the mechanisms that help to keep the price of STAL at $1.
***

### Fees

Minting and redemption fees are dynamic fees for maintaining liquidity on the Stable pool, which varies according to balances of the underlying stablecoins as follows:

|                |      < Min weight      |   > Min < Max weight   |      > Max weight      |
| -------------- | :--------------------: | :--------------------: | :--------------------: |
| Minting fee    |          0.01%         |          0.02%         |          0.04%         |
| Redemption fee |          0.08%         |          0.04%         |          0.02%         |

- Min weight is the lowest percentage of the underlying stablecoin until it becomes unbalanced  
- Max weight is the percentage of the underlying stablecoin that should never exceed, which should be equal to or greater than min weight 

For each underlying stablecoin in the Stable pool, it has its own set of max and min weights. This is to protect the Stable pool liquidity in the very unlikely case of a depeg of the underlying.

When users mint/redeem STAL stablecoins a fee is generated according to the table above which 50% of mint/redeem fees will be given back to users holding deposits in the Vault and 50% will be sent to the Aldabra treasury.
***

**Deposit your USD stablecoins into the Stable pool to mint new STAL :** `Coming soon`

**Deposit your STAL into the Vault to earn interest and fees share:** `Coming soon`