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
 * The FDValueTransferTransactionRequest model module.
 * @class FDValueTransferTransactionRequest
 * @version 1.0
 */
class FDValueTransferTransactionRequest {
    /**
     * Constructs a new <code>FDValueTransferTransactionRequest</code>.
     * Fee Delegation KLAY transfer transaction request schema
     * @alias FDValueTransferTransactionRequest
     * @class
     * @param from {String} Klaytn transaction address to send transaction
     * @param value {String} KLAY converted into PEB
     * @param to {String} KLAY receiver's Klaytn account address
     */

    constructor(from, value, to) {
        this.from = from
        this.value = value
        this.to = to
    }

    /**
     * Constructs a <code>FDValueTransferTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FDValueTransferTransactionRequest} obj Optional instance to populate.
     * @return {FDValueTransferTransactionRequest} The populated <code>FDValueTransferTransactionRequest</code> instance.
     * @memberof FDValueTransferTransactionRequest
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FDValueTransferTransactionRequest()

            if (data.hasOwnProperty('from')) {
                obj.from = ApiClient.convertToType(data.from, 'String')
            }
            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
            if (data.hasOwnProperty('to')) {
                obj.to = ApiClient.convertToType(data.to, 'String')
            }
            if (data.hasOwnProperty('memo')) {
                obj.memo = ApiClient.convertToType(data.memo, 'String')
            }
            if (data.hasOwnProperty('nonce')) {
                obj.nonce = ApiClient.convertToType(data.nonce, 'Number')
            }
            if (data.hasOwnProperty('gas')) {
                obj.gas = ApiClient.convertToType(data.gas, 'Number')
            }
            if (data.hasOwnProperty('submit')) {
                obj.submit = ApiClient.convertToType(data.submit, 'Boolean')
            }
            if (data.hasOwnProperty('feeRatio')) {
                obj.feeRatio = ApiClient.convertToType(data.feeRatio, 'Number')
            }
        }
        return obj
    }
}

/**
 * Klaytn transaction address to send transaction
 * @type {String}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.from = undefined
/**
 * KLAY converted into PEB
 * @type {String}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.value = undefined
/**
 * KLAY receiver's Klaytn account address
 * @type {String}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.to = undefined
/**
 * Memo to be attached to the transaction.
 * @type {String}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.memo = undefined
/**
 * Unique identifier for the transactions being sent (By entering 0, the nonce will be automatically determined)
 * @type {Number}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.nonce = undefined
/**
 * Maximum gas fee to be used for sending the transaction (By entering 0, it will be set to default value))
 * @type {Number}
 * @memberof FDValueTransferTransactionRequest
 * @default 100000
 */
FDValueTransferTransactionRequest.prototype.gas = 100000
/**
 * Shows whether to send the transaction to Klaytn
 * @type {Boolean}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.submit = undefined
/**
 * The ratio of the gas fee to be delegated. When it's empty or 0, the entire fee will be delegated.
 * @type {Number}
 * @memberof FDValueTransferTransactionRequest
 */
FDValueTransferTransactionRequest.prototype.feeRatio = undefined

module.exports = FDValueTransferTransactionRequest
