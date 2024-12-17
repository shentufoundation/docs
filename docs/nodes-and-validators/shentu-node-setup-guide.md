---
sidebar_position: 1
title: Shentu Node Setup Guide
---

This guide presents you the Shentu Node setup for Mainnet.

### Prerequisites

- Minimum hardware requirements
  - A validator can be run on a VPS or Dedicated server/VM
```
physical CPU: 8 core
Memory: 16GB+
Disk: SSD - 300GB+
```
- Golang v1.21
  - [Install the appropriate Golang version](https://go.dev/doc/install) (found on our GitHub, linked above).
- [GitHub](https://github.com/shentufoundation/shentu)

## Install Shentu

```bash
git clone https://github.com/shentufoundation/shentu.git
cd shentu
git checkout [release tag]
make install

#verify versions
shentud version --long
```

## Setup Shentu Node

#### Initialize Shentu Config

```bash
#Init shentud
shentud init [your_moniker_name] --chain-id shentu-2.2
#(Optional) Back up the old chain state.
mv $HOME/.shentud/data $HOME/.shentud/data_old
#Reset the chain state
shentud tendermint unsafe-reset-all --home $HOME/.shentud
cd $HOME/.shentud/config
rm genesis.json
```

#### Setup the Genesis File

```bash
wget https://raw.githubusercontent.com/ShentuChain/mainnet/main/shentu-2.2/genesis.json -O genesis.json
mv genesis.json $HOME/.shentud/config/genesis.json```

Edit `$HOME/.shentu/config/config.toml` to add the following seeds peers.

```bash
seeds = "867a2986f28575b1fde864136862fde465cac17c@47.253.209.134:26656,3edd4e16b791218b623f883d04f8aa5c3ff2cca6@shentu-seed.panthea.eu:36656"
```

Add minimum gas prices into `$HOME/.shentu/config/app.toml`

```bash
minimum-gas-prices = "0.025uctk"
```

[//]: # (TODO ## Setting Up Your Pruning Node)

[//]: # (TODO ## Setting Up Your Archival Node)

### Sync mainnet with snapshot

#### Steps:

1. Downloading the snapshot file

```bash
wget https://snapshot-light.shentu.org/shentu.tar.gz
```

2. Unpack the snapshot into `$HOME/.shentud` directory.

```bash
tar -xzvf shentu.tar.gz -C $HOME/.shentud/data
```

## Syncing Your Node

To sync your node, you will use systemd, which manages the Shentu daemon and automatically restarts it in case of failure. 
To use systemd, you will create a service file. 
Be sure to replace `<your_user>` and `<your_path>` with the user on your server:

```bash
sudo tee /etc/systemd/system/shentud.service > /dev/null <<'EOF'
[Unit]
Description=Shentud Daemon
After=network-online.target

[Service]
User=<your_user>
ExecStart=/home/<your_user>/go/bin/shentu start --home <your_path>/.shentud
Restart=on-failure
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
EOF
```

#### To start syncing:

```bash
# Start the node
sudo systemctl enable shentud
sudo systemctl start shentud
```

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

The main thing to watch is that the block height is increasing. Once you are caught up with the chain, `catching_up` will become `false`. 
At that point, you can start using your node to create a validator.

#### To check the logs of the node:

```bash
sudo journalctl -f -n 20 -u shentud
```

#### Create Validator Node

If you would like to setup a validator, continue the steps outlined in [Run Validator Node](./validator-node)