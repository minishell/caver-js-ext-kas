/*
 * Copyright 2020 The caver-js-ext-kas Authors
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TokenHistory = require('./tokenHistory/tokenHistory')
const Anchor = require('./anchor/anchor')
const Wallet = require('./wallet/wallet')
const { createClient } = require('../utils/helper')

const AnchorQueryOptions = require('./anchor/anchorQueryOptions')
const TokenHistoryQueryOptions = require('./tokenHistory/tokenHistoryQueryOptions')
const WalletQueryOptions = require('./wallet/walletQueryOptions')

class KAS {
    constructor() {
        this.tokenHistory = new TokenHistory()
        this.wallet = new Wallet()
        this.anchor = new Anchor()

        this.tokenHistory.queryOptions = TokenHistoryQueryOptions
        this.anchor.queryOptions = AnchorQueryOptions
        this.wallet.queryOptions = WalletQueryOptions
    }

    initTokenHistoryAPI(path, chainId, accessKeyId, secretAccessKey) {
        const { client, accessOptions } = createClient(path, chainId, accessKeyId, secretAccessKey)
        this.tokenHistory.accessOptions = accessOptions
        this.tokenHistory.client = client
    }

    initWalletAPI(path, chainId, accessKeyId, secretAccessKey) {
        const { client, accessOptions } = createClient(path, chainId, accessKeyId, secretAccessKey)
        this.wallet.accessOptions = accessOptions
        this.wallet.client = client
    }

    initAnchorAPI(path, chainId, accessKeyId, secretAccessKey) {
        const { client, accessOptions } = createClient(path, chainId, accessKeyId, secretAccessKey)
        this.anchor.accessOptions = accessOptions
        this.anchor.client = client
    }
}

module.exports = KAS
