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
const Account = require('../model/Account')
const AccountStatus = require('../model/AccountStatus')
const AccountSummary = require('../model/AccountSummary')
const Accounts = require('../model/Accounts')
const AccountsByPubkey = require('../model/AccountsByPubkey')
const ErrorResponse = require('../model/ErrorResponse')
const MultisigAccount = require('../model/MultisigAccount')
const MultisigAccountUpdateRequest = require('../model/MultisigAccountUpdateRequest')
const Signature = require('../model/Signature')

/**
 * Account service.
 * @class AccountApi
 * @version 1.0
 */
class AccountApi {
    /**
     * Constructs a new AccountApi.
     * @alias AccountApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the activateAccount operation.
     * @callback AccountApi~activateAccountCallback
     * @param {String} error Error message, if any.
     * @param {AccountSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Account activation
     * Reactivate a deactivated Klaytn account.
     * @param {AccountApi~activateAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AccountSummary}
     */
    activateAccount(xChainId, address, callback) {
        const postBody = null

        const pathParams = {
            address: address,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AccountSummary

        return this.apiClient.callApi(
            '/v2/account/{address}/enable',
            'PUT',
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
     * Callback function to receive the result of the createAccount operation.
     * @callback AccountApi~createAccountCallback
     * @param {String} error Error message, if any.
     * @param {Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create basic account
     * Create Klaytn account. Generate a Klaytn account address and random private/public key pair and get ID of public key and private key returned.
     * @param {AccountApi~createAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Account}
     */
    createAccount(xChainId, callback) {
        const postBody = null

        const pathParams = {}
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Account

        return this.apiClient.callApi(
            '/v2/account',
            'POST',
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
     * Callback function to receive the result of the deactivateAccount operation.
     * @callback AccountApi~deactivateAccountCallback
     * @param {String} error Error message, if any.
     * @param {AccountSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Account deactivation
     * Deactivate this Klaytn account. Once the account is deactivated, the account won&#x27;t be retrieved.
     * @param {AccountApi~deactivateAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AccountSummary}
     */
    deactivateAccount(xChainId, address, callback) {
        const postBody = null

        const pathParams = {
            address: address,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AccountSummary

        return this.apiClient.callApi(
            '/v2/account/{address}/disable',
            'PUT',
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
     * Callback function to receive the result of the deleteAccount operation.
     * @callback AccountApi~deleteAccountCallback
     * @param {String} error Error message, if any.
     * @param {AccountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete account
     * Delete the Klaytn account.
     * @param {AccountApi~deleteAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AccountStatus}
     */
    deleteAccount(xChainId, address, callback) {
        const postBody = null

        const pathParams = {
            address: address,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AccountStatus

        return this.apiClient.callApi(
            '/v2/account/{address}',
            'DELETE',
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
     * Callback function to receive the result of the multisigAccountUpdate operation.
     * @callback AccountApi~multisigAccountUpdateCallback
     * @param {String} error Error message, if any.
     * @param {MultisigAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update multisig account
     * Update the Klaytn account to a multisig account. Your account needs to have balances to pay the transaction fee when executing the account update transaction.
     * @param {Object} opts Optional parameters
     * @param {AccountApi~multisigAccountUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link MultisigAccount}
     */
    multisigAccountUpdate(xChainId, address, opts, callback) {
        opts = opts || {}
        const postBody = opts.body

        const pathParams = {
            address: address,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = MultisigAccount

        return this.apiClient.callApi(
            '/v2/account/{address}/multisig',
            'PUT',
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
     * Callback function to receive the result of the retrieveAccount operation.
     * @callback AccountApi~retrieveAccountCallback
     * @param {String} error Error message, if any.
     * @param {Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve account
     * Retrieve the Klaytn account.
     * @param {AccountApi~retrieveAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Account}
     */
    retrieveAccount(xChainId, address, callback) {
        const postBody = null

        const pathParams = {
            address: address,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Account

        return this.apiClient.callApi(
            '/v2/account/{address}',
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
     * Callback function to receive the result of the retrieveAccounts operation.
     * @callback AccountApi~retrieveAccountsCallback
     * @param {String} error Error message, if any.
     * @param {Accounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of accounts.
     * Retrieve a list of all Klaytn accounts.&lt;p&gt;&lt;/p&gt;  ##### Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional. (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default value (&#x60;size&#x3D;100&#x60;) when &#x60;size&#x3D;0&#x60;&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than the maximum value.&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {AccountApi~retrieveAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Accounts}
     */
    retrieveAccounts(xChainId, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
            'to-timestamp': opts.toTimestamp,
            'from-timestamp': opts.fromTimestamp,
            status: opts.status,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Accounts

        return this.apiClient.callApi(
            '/v2/account',
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
     * Callback function to receive the result of the retrieveAccountsByPubkey operation.
     * @callback AccountApi~retrieveAccountsByPubkeyCallback
     * @param {String} error Error message, if any.
     * @param {AccountsByPubkey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve account by public key
     * Retrieve a list of Klaytn accounts by public key.
     * @param {AccountApi~retrieveAccountsByPubkeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link AccountsByPubkey}
     */
    retrieveAccountsByPubkey(xChainId, publicKey, callback) {
        const postBody = null

        const pathParams = {
            'public-key': publicKey,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = AccountsByPubkey

        return this.apiClient.callApi(
            '/v2/pubkey/{public-key}/account',
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
     * Callback function to receive the result of the signTransactionIDResponse operation.
     * @callback AccountApi~signTransactionIDResponseCallback
     * @param {String} error Error message, if any.
     * @param {Signature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transaction sign
     * Sign the transaction with a certain ID using this Klaytn account.
     * @param {AccountApi~signTransactionIDResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Signature}
     */
    signTransactionIDResponse(xChainId, address, transactionId, callback) {
        const postBody = null

        const pathParams = {
            address: address,
            'transaction-id': transactionId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Signature

        return this.apiClient.callApi(
            '/v2/account/{address}/tx/{transaction-id}/sign',
            'POST',
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
module.exports = AccountApi
