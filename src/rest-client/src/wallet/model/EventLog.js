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
 * The EventLog model module.
 * @class EventLog
 * @version 1.0
 */
class EventLog {
    /**
     * Constructs a new <code>EventLog</code>.
     * Logs emitted by the transaction
     * @alias EventLog
     * @class
     * @param address {String} Klaytn account address
     * @param blockHash {String} Block hash including the transaction
     * @param blockNumber {String} Block number including the transaction
     * @param data {String} Transaction data
     * @param logIndex {String} Index of log
     * @param removed {Boolean} Whether to remove log
     * @param transactionHash {String} Transaction hash value
     * @param transactionIndex {String} Index of the transaction
     */

    constructor(address, blockHash, blockNumber, data, logIndex, removed, transactionHash, transactionIndex) {
        this.address = address
        this.blockHash = blockHash
        this.blockNumber = blockNumber
        this.data = data
        this.logIndex = logIndex
        this.removed = removed
        this.transactionHash = transactionHash
        this.transactionIndex = transactionIndex
    }

    /**
     * Constructs a <code>EventLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EventLog} obj Optional instance to populate.
     * @return {EventLog} The populated <code>EventLog</code> instance.
     * @memberof EventLog
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventLog()

            if (data.hasOwnProperty('address')) {
                obj.address = ApiClient.convertToType(data.address, 'String')
            }
            if (data.hasOwnProperty('blockHash')) {
                obj.blockHash = ApiClient.convertToType(data.blockHash, 'String')
            }
            if (data.hasOwnProperty('blockNumber')) {
                obj.blockNumber = ApiClient.convertToType(data.blockNumber, 'String')
            }
            if (data.hasOwnProperty('data')) {
                obj.data = ApiClient.convertToType(data.data, 'String')
            }
            if (data.hasOwnProperty('logIndex')) {
                obj.logIndex = ApiClient.convertToType(data.logIndex, 'String')
            }
            if (data.hasOwnProperty('removed')) {
                obj.removed = ApiClient.convertToType(data.removed, 'Boolean')
            }
            if (data.hasOwnProperty('topics')) {
                obj.topics = ApiClient.convertToType(data.topics, ['String'])
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            }
            if (data.hasOwnProperty('transactionIndex')) {
                obj.transactionIndex = ApiClient.convertToType(data.transactionIndex, 'String')
            }
        }
        return obj
    }
}

/**
 * Klaytn account address
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.address = undefined
/**
 * Block hash including the transaction
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.blockHash = undefined
/**
 * Block number including the transaction
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.blockNumber = undefined
/**
 * Transaction data
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.data = undefined
/**
 * Index of log
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.logIndex = undefined
/**
 * Whether to remove log
 * @type {Boolean}
 * @memberof EventLog
 */
EventLog.prototype.removed = undefined
/**
 * @type {Array.<String>}
 * @memberof EventLog
 */
EventLog.prototype.topics = undefined
/**
 * Transaction hash value
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.transactionHash = undefined
/**
 * Index of the transaction
 * @type {String}
 * @memberof EventLog
 */
EventLog.prototype.transactionIndex = undefined

module.exports = EventLog
