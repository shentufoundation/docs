---
sidebar_position: 2
title: Run Validator Node
---

# Run Validator Node

This is an updated guide on setting up a mainnet validator once Shentu Node is setup using the process outlined in [Node Setup Guide](./shentu-node-setup-guide). 

## Prerequisites

Ensure that you have a Shentu node setup and syncing

#### To check on the status of syncing:

```bash
shentud status --log_format json | jq '.sync_info'
```

This will give output like:

```bash
{
  "latest_block_hash": "074E92BDF8858D45D304CA10BACAC464994A2DA877C6D71CA33E99A0942BAACE",
  "latest_app_hash": "3A89A3C3CA04C37DDA73E5041BCEB0D7C02E3BF06C3AD7331E9D0A309D8801BF",
  "latest_block_height": "21646800",
  "latest_block_time": "2024-12-17T06:40:58.80228023Z",
  "earliest_block_hash": "12C4D749975B1C4FFB0CAA6971CD78148BC42D902F2BF11F8A31C03A5DB8FF8E",
  "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
  "earliest_block_height": "4602989",
  "earliest_block_time": "2020-10-24T14:24:00Z",
  "catching_up": false
}
```

The main thing to watch is that the block height is increasing. Once you are caught up with the chain, `catching_up` will become false. At that point, you can start using your node to create a validator.

## Creating a Validator

First, create a wallet, which will give you a private key / public key pair for your node.

```bash
# Replace <your-key-name> with a name for your key that you will remember
shentud keys add <your-key-name>
# To see a list of wallets on your node
shentud keys list
```

**Be sure to write down the mnemonic for your wallet and store it securely. Losing your mnemonic could result in the irrecoverable loss of Shentu tokens.**

To see the options when creating a validator:

```bash
shentud tx staking create-validator -h
```
An example of creating a validator with 1CTK self-delegation and 10% commission:
Keep in mind that the minimum staked amount is 1 CTK this is 1000000uctk

```bash
# Replace <key_name> with the key you created previously
shentud tx staking create-validator validator.json --from <key_name> --chain-id shentu-2.2 --gas-prices 0.025uctk --gas-adjustment 2.0 --gas auto 
```


`validator.json` Demo

 - You can get `<node public key>` by `./shentud tendermint show-validator` 
```
{
	"pubkey": <node public key>,
	"amount": "1000000uckt",
	"moniker": "your validatro name",
	"identity": "optional identity signature (ex. UPort or Keybase)",
	"website": "validator's (optional) website",
	"security": "validator's (optional) security contact email",
	"details": "validator's (optional) details",
	"commission-rate": "0.1",
	"commission-max-rate": "0.2",
	"commission-max-change-rate": "0.1",
	"min-self-delegation": "1"
}
```


To check on the status of your validator:

```bash
shentud status --log_format json | jq '.ValidatorInfo' --gas-prices 0.025uctk --gas-adjustment 2.0 --gas auto
```

After you have completed this guide, your validator should be up and ready to receive delegations. Note that only the top 125 validators by weighted stake (self-delegations + other delegations) are eligible for block rewards. To view the current validator list, checkout one of the Shentu block explorers:

- https://www.mintscan.io/shentu
- https://explorer.shentu.org/

## Frequently Commands
### Unjail Validator
```bash
shentud tx slashing unjail --from <your-key-name> --chain-id shentu-2.2 --gas-prices 0.025uctk --gas-adjustment 1.5 --gas auto
```

### Redeem Commission Rewards
```bash
shentud tx distribution withdraw-rewards <Operator Address> --from <your-key-name> --commission  --chain-id=shentu-2.2 --gas-prices 0.025uctk --gas-adjustment 1.5 --gas auto
```
