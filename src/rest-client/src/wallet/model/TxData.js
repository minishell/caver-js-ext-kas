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

/**
 * The TxData model module.
 * @class TxData
 * @version 1.0
 */
class TxData {
    /**
     * Constructs a new <code>TxData</code>.
     * Actual transaction data of multisig transactions
     * @alias TxData
     * @class
     * @param from {String} Multisig account address
     * @param gas {Number} Transaction gas limit
     * @param gasPrice {String} Transaction gas price
     * @param nonce {Number} Transaction nonce
     * @param typeInt {Number} Type of the transaction
     */

    constructor(from, gas, gasPrice, nonce, typeInt) {
        this.from = from
        this.gas = gas
        this.gasPrice = gasPrice
        this.nonce = nonce
        this.typeInt = typeInt
    }

    /**
     * Constructs a <code>TxData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TxData} obj Optional instance to populate.
     * @return {TxData} The populated <code>TxData</code> instance.
     * @memberof TxData
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TxData()

            if (data.hasOwnProperty('from')) {
                obj.from = ApiClient.convertToType(data.from, 'String')
            }
            if (data.hasOwnProperty('gas')) {
                obj.gas = ApiClient.convertToType(data.gas, 'Number')
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj.gasPrice = ApiClient.convertToType(data.gasPrice, 'String')
            }
            if (data.hasOwnProperty('input')) {
                obj.input = ApiClient.convertToType(data.input, 'String')
            }
            if (data.hasOwnProperty('nonce')) {
                obj.nonce = ApiClient.convertToType(data.nonce, 'Number')
            }
            if (data.hasOwnProperty('to')) {
                obj.to = ApiClient.convertToType(data.to, 'String')
            }
            if (data.hasOwnProperty('typeInt')) {
                obj.typeInt = ApiClient.convertToType(data.typeInt, 'Number')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
        }
        return obj
    }
}

/**
 * Multisig account address
 * @type {String}
 * @memberof TxData
 */
TxData.prototype.from = undefined
/**
 * Transaction gas limit
 * @type {Number}
 * @memberof TxData
 */
TxData.prototype.gas = undefined
/**
 * Transaction gas price
 * @type {String}
 * @memberof TxData
 */
TxData.prototype.gasPrice = undefined
/**
 * Transaction input data
 * @type {String}
 * @memberof TxData
 */
TxData.prototype.input = undefined
/**
 * Transaction nonce
 * @type {Number}
 * @memberof TxData
 */
TxData.prototype.nonce = undefined
/**
 * KLAY receiver's Klaytn account or contract address
 * @type {String}
 * @memberof TxData
 */
TxData.prototype.to = undefined
/**
 * Type of the transaction
 * @type {Number}
 * @memberof TxData
 */
TxData.prototype.typeInt = undefined
/**
 * Amount of balance to be sent in the transaction
 * @type {String}
 * @memberof TxData
 */
TxData.prototype.value = undefined

module.exports = TxData
