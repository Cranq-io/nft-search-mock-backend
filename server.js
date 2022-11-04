const express = require('express')
const app = express()
const port = 8080

const sampleAnswer = {
    "chain": "ethereum",
    "contract_address": "mock address",
    "token_id": "11111",
    "cached_file_url": "https://storage.googleapis.com/sentinel-nft/raw-assets/ae376e9217d3ae394d1466a8a75f9c0ca2d14714733f825d1690d67c2ba5aa4d.png",
    "name": "CRANQ NFT search mock response",
    "description": "Please visit CRANQ.IO to create the real backend of this template!!! /n Check https://docs.cranq.io/ for NFT search project",
    "mint_date": "2021-03-15T19:06:31",
    "transactions": [{
            "type": "transfer",
            "transfer_from": "111",
            "transfer_to": "222",
            "contract_address": "333",
            "token_id": "444",
            "quantity": 1,
            "transaction_hash": "111",
            "block_hash": "222",
            "block_number": 12044962,
            "transaction_date": "2021-03-15T19:06:31"
        },
        {
            "type": "sale",
            "buyer_address": "111",
            "seller_address": "222",
            "nft": {
                "contract_type": "ERC1155",
                "contract_address": "111",
                "token_id": "22222"
            },
            "quantity": 1,
            "price_details": {
                "asset_type": "ETH",
                "price": 0.1,
                "price_usd": 325.78816922659894
            },
            "transaction_hash": "111",
            "block_hash": "222",
            "block_number": 12044962,
            "transaction_date": "2021-03-15T19:06:31",
            "marketplace": "opensea"
        }
    ]
}

app.post('/search', (req, res) => {
    res.send([sampleAnswer, sampleAnswer, sampleAnswer])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
