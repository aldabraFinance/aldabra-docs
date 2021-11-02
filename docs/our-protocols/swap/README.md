<!--
order: 4
-->

# Constant Swap

Aldabra Finance allows users to efficiently swap stablecoins through the Aldabra Swap protocol, what is an automated market maker (AMM) that `supports zero slippage and price impact.`

### Swap Basics

Users can swap between stablecoins in the Stable pool that are pegged to the same value with a 1:1 ratio **without any slippage and price impact.** No matter the trading value is, be it just $1 or $100,000, the price will stay the same. As long as the Stable pool has enough liquidity, the order will be fulfilled instantly.

Currently, supports the following stablecoins:  

|      | Token Address                               |
| ---- | ------------------------------------------- |
| BUSD | [0xe9e7cea3dedca5984780bafc599bd69add087d56](https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56) |
| USDT | [0x55d398326f99059ff775485246999027b3197955](https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955) |
| USDC | [0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d](https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d) |
***

### Swap Mechanics

The formula of invariant would determine the characteristics of the AMM. Which, the formula of `"x + y = k"` can provide a fixed price.
![](/swap_info.png)
***

### Fees

When users swap stablecoins on Aldabra Finance a 0.02% trading fee is generated through swaps, which 0.01% are given back to users holding deposits in the Vault and 0.01% will be sent to the Aldabra treasury.
***

**Swap your Stablecoins :** [Link](https://app.aldabra.finance/#/swap)