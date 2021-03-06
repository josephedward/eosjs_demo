let currentAbi = {
    "account_name": "gravyhftdefi",
    "abi": {
        "version": "eosio::abi/1.1",
        "types": [],
        "structs": [
            {
                "name": "account",
                "base": "",
                "fields": [
                    {
                        "name": "balance",
                        "type": "asset"
                    }
                ]
            },
            {
                "name": "close",
                "base": "",
                "fields": [
                    {
                        "name": "owner",
                        "type": "name"
                    },
                    {
                        "name": "symbol",
                        "type": "symbol"
                    }
                ]
            },
            {
                "name": "create",
                "base": "",
                "fields": [
                    {
                        "name": "issuer",
                        "type": "name"
                    },
                    {
                        "name": "maximum_supply",
                        "type": "asset"
                    }
                ]
            },
            {
                "name": "currency_stats",
                "base": "",
                "fields": [
                    {
                        "name": "supply",
                        "type": "asset"
                    },
                    {
                        "name": "max_supply",
                        "type": "asset"
                    },
                    {
                        "name": "issuer",
                        "type": "name"
                    },
                    {
                        "name": "genesis_time",
                        "type": "int64"
                    },
                    {
                        "name": "last_mine_time",
                        "type": "int64"
                    }
                ]
            },
            {
                "name": "issue",
                "base": "",
                "fields": [
                    {
                        "name": "to",
                        "type": "name"
                    },
                    {
                        "name": "quantity",
                        "type": "asset"
                    },
                    {
                        "name": "memo",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "mine",
                "base": "",
                "fields": [
                    {
                        "name": "miner",
                        "type": "name"
                    },
                    {
                        "name": "symbol",
                        "type": "symbol"
                    },
                    {
                        "name": "rando",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "open",
                "base": "",
                "fields": [
                    {
                        "name": "owner",
                        "type": "name"
                    },
                    {
                        "name": "symbol",
                        "type": "symbol"
                    },
                    {
                        "name": "ram_payer",
                        "type": "name"
                    }
                ]
            },
            {
                "name": "refundgrv",
                "base": "",
                "fields": [
                    {
                        "name": "miner",
                        "type": "name"
                    }
                ]
            },
            {
                "name": "regminer",
                "base": "",
                "fields": [
                    {
                        "name": "miner",
                        "type": "name"
                    },
                    {
                        "name": "symbol",
                        "type": "symbol"
                    }
                ]
            },
            {
                "name": "retire",
                "base": "",
                "fields": [
                    {
                        "name": "quantity",
                        "type": "asset"
                    },
                    {
                        "name": "memo",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "stake",
                "base": "",
                "fields": [
                    {
                        "name": "miner",
                        "type": "name"
                    },
                    {
                        "name": "staked",
                        "type": "asset"
                    },
                    {
                        "name": "unstaking",
                        "type": "asset"
                    },
                    {
                        "name": "unstake_time",
                        "type": "uint64"
                    },
                    {
                        "name": "reward",
                        "type": "asset"
                    }
                ]
            },
            {
                "name": "stakegrv",
                "base": "",
                "fields": [
                    {
                        "name": "miner",
                        "type": "name"
                    },
                    {
                        "name": "quantity",
                        "type": "asset"
                    }
                ]
            },
            {
                "name": "staking_stats",
                "base": "",
                "fields": [
                    {
                        "name": "total_staked",
                        "type": "asset"
                    }
                ]
            },
            {
                "name": "transfer",
                "base": "",
                "fields": [
                    {
                        "name": "from",
                        "type": "name"
                    },
                    {
                        "name": "to",
                        "type": "name"
                    },
                    {
                        "name": "quantity",
                        "type": "asset"
                    },
                    {
                        "name": "memo",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "unstakegrv",
                "base": "",
                "fields": [
                    {
                        "name": "miner",
                        "type": "name"
                    },
                    {
                        "name": "quantity",
                        "type": "asset"
                    }
                ]
            }
        ],
        "actions": [
            {
                "name": "close",
                "type": "close",
                "ricardian_contract": ""
            },
            {
                "name": "create",
                "type": "create",
                "ricardian_contract": ""
            },
            {
                "name": "issue",
                "type": "issue",
                "ricardian_contract": ""
            },
            {
                "name": "mine",
                "type": "mine",
                "ricardian_contract": ""
            },
            {
                "name": "open",
                "type": "open",
                "ricardian_contract": ""
            },
            {
                "name": "refundgrv",
                "type": "refundgrv",
                "ricardian_contract": ""
            },
            {
                "name": "regminer",
                "type": "regminer",
                "ricardian_contract": ""
            },
            {
                "name": "retire",
                "type": "retire",
                "ricardian_contract": ""
            },
            {
                "name": "stakegrv",
                "type": "stakegrv",
                "ricardian_contract": ""
            },
            {
                "name": "transfer",
                "type": "transfer",
                "ricardian_contract": ""
            },
            {
                "name": "unstakegrv",
                "type": "unstakegrv",
                "ricardian_contract": ""
            }
        ],
        "tables": [
            {
                "name": "accounts",
                "index_type": "i64",
                "key_names": [],
                "key_types": [],
                "type": "account"
            },
            {
                "name": "stake",
                "index_type": "i64",
                "key_names": [],
                "key_types": [],
                "type": "stake"
            },
            {
                "name": "stakingstat",
                "index_type": "i64",
                "key_names": [],
                "key_types": [],
                "type": "staking_stats"
            },
            {
                "name": "stat",
                "index_type": "i64",
                "key_names": [],
                "key_types": [],
                "type": "currency_stats"
            }
        ],
        "ricardian_clauses": [],
        "error_messages": [],
        "abi_extensions": [],
        "variants": []
    }
}

export default currentAbi;