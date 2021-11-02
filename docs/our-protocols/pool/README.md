<!--
order: 3
-->

# Stable Pool

The Aldabra Stable pool was designed to be a significant factor for the Aldabra ecosystem.

![](/stable-pool_info.png)

### Utility

The Aldabra Stable pool will be utilized in a lot of ways to stabilize and provide liquidity to the Aldabra ecosystem.

Users can involve in the Aldabra ecosystem by depositing USD stablecoins into the Stable pool to mint **new STAL stablecoin with a 1:1 ratio.** 

Initially, STAL stablecoin can be used for stablecoin swapping and earning like other stablecoins. [(More STAL details)](../../tokens/stal-stablecoin)

Stablecoins within the Stable pool will be divided into two parts **by the dynamic stablecoin reserve (DSR) algorithm.**
- 20% of each underlying stablecoin reserve for provide liquidity on the Aldabra Swap protocol
- 80% autonomously deposit into decentralized lending protocols such as Alpaca and Venus for `generating maximize yield`
***

### Flexibility

The Aldabra Stable pool can be `flexible to add a new underlying stablecoin` in the Aldabra Stable pool that will maintain the efficiency of existing liquidity without creating new liquidity pools.
***

### Dynamic Stablecoin Reserve Algorithm

The simple idea is the Stable pool will reserve 20% of each underlying stablecoin to provide liquidity and autonomously deposit 80% to decentralized lending protocols.

For each underlying stablecoin in the Stable pool, it has max and min reserve ratios. These are set to 30% and 10%.

**Dynamic stablecoin reserve (DSR) algorithm will perform to rebalance when:**

- The stablecoin reserve is more than 30% or less than 10% 
- Auto-rebalance every 6 hours
***

**Deposit your USD stablecoins into the Stable pool to mint new STAL :** [Link](https://app.aldabra.finance/#/pool/mint)