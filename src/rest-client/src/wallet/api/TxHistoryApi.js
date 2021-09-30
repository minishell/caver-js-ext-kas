/**
 * Wallet API
 * # Introduction Wallet API is an API for creating and managing Klaytn accounts as well as sending transactions. If you create your Klaytn account using Wallet API, you don't have to manage your private key yourself. Wallet API provides a wallet for safe storage of your Klaytn account private keys that you would need to use BApps. For more details on how to use Wallet API, please refer to this [tutorial](https://docs.klaytnapi.com/v/en/tutorial).  Wallet API can be divided into the Account part, which creates and manages Klaytn accounts, and the Transaction part, which sends different kinds of transactions.  Wallet API creates, deletes and monitors Klaytn accounts and updates the accounts to multisig, and manages all private keys for all accounts registered on KAS.  Wallet API can also create transaction to send it to Klaytn. These include transactions sent from multisig accounts. In case of muiltisig accounts, a transaction will automatically be sent to Klaytn once \\(Threshold\\) is met. For more detail, please refer to this [tutorial](https://docs.klaytnapi.com/v/en/tutorial).  There are mainly two types of transactions: basic transactions and fee delegation transactions. Fee delegation transactions include Global Fee Delegation transaction and user fee deletation transaction. With the Global Fee Delegation transaction scheme, the transaction fee will initially be paid by GroundX and then be charged to you at a later date. With the User Fee Delegation transaction scheme, you create an account that pays the transaction fees on behalf of the users when a transaction.  The functionalities and limits of Wallet API are shown below:  | Version | Item | Description | | :--- | :--- | :--- | | 2.0 | Limits | Supports Cypress(Mainnet), Baobab(Testnet) \\ Doesn't support (Service Chain \\) | |  |  | Doesn't support account management for external custodial keys | |  |  | Doesn't support multisig for RLP encoded transactions | |  | Account management | Create, retrieve and delete account | |  |  | Multisig account update | |  | Managing transaction | [Basic](https://ko.docs.klaytn.com/klaytn/design/transactions/basic) creating and sending transaction | |  |  | [FeeDelegatedWithRatio](https://ko.docs.klaytn.com/klaytn/design/transactions/partial-fee-delegation) creating and sending transaction | |  |  | RLP encoded transaction\\([Legacy](https://ko.docs.klaytn.com/klaytn/design/transactions/basic#txtypelegacytransaction), [Basic](https://ko.docs.klaytn.com/klaytn/design/transactions/basic), [FeeDelegatedWithRatio](https://ko.docs.klaytn.com/klaytn/design/transactions/partial-fee-delegation)\\) creating and sending | |  |  | Managing and sending multisig transactions | |  | Administrator | Manage resource pool\\(create, query pool, delete, retrieve account \\) |
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

const ApiClient = require('../../ApiClient')
const ErrorResponse = require('../model/ErrorResponse')
const FDTransactionWithCurrencyResult = require('../model/FDTransactionWithCurrencyResult')
const FDTransactionWithCurrencyResultList = require('../model/FDTransactionWithCurrencyResultList')

/**
 * TxHistory service.
 * @class TxHistoryApi
 * @version 1.0
 */
class TxHistoryApi {
    /**
     * Constructs a new TxHistoryApi.
     * @alias TxHistoryApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the getV2HistoryFdTx operation.
     * @callback TxHistoryApi~getV2HistoryFdTxCallback
     * @param {String} error Error message, if any.
     * @param {FDTransactionWithCurrencyResultList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Fee Delegation Transaction History
     * Returns the history of fee delegation transactions. You can find out the KRW and USD price of the fees at the time of sending the transaction. If you add the &#x60;from&#x60; query parameter, only the transactions from a certain address will be returned.
     * @param {Object} opts Optional parameters
     * @param {TxHistoryApi~getV2HistoryFdTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link FDTransactionWithCurrencyResultList}
     */
    getV2HistoryFdTx(xChainId, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            from: opts.from,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = FDTransactionWithCurrencyResultList

        return this.apiClient.callApi(
            '/v2/history/fd/tx',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getV2HistoryFdTxTransactionHash operation.
     * @callback TxHistoryApi~getV2HistoryFdTxTransactionHashCallback
     * @param {String} error Error message, if any.
     * @param {FDTransactionWithCurrencyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Fee Delegation Transaction History
     * Returns a single fee delegation transaction. You can find out the KRW and USD price of the fees at the time of sending the transaction.
     * @param {TxHistoryApi~getV2HistoryFdTxTransactionHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link FDTransactionWithCurrencyResult}
     */
    getV2HistoryFdTxTransactionHash(transactionHash, xChainId, callback) {
        const postBody = null

        const pathParams = {
            'transaction-hash': transactionHash,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = FDTransactionWithCurrencyResult

        return this.apiClient.callApi(
            '/v2/history/fd/tx/{transaction-hash}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
}
module.exports = TxHistoryApi
