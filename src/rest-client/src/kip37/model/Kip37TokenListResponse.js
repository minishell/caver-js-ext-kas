/**
 * KIP-37 API
 * ## Introduction The KIP-37 API helps Blockchain app (BApp) developers to easily deploy smart contracts and send tokens of the [KIP-37 Multi Token Standard](https://kips.klaytn.com/KIPs/kip-37).  You can use the default contract managing account (`deployer`) and `alias`.    You can also manage the contracts and tokens created on the klaytn network using the caver SDK, using contract address and the [Wallet API](https://refs.klaytnapi.com/ko/wallet/latest) account.    ## Fee Payer Options  KAS KIP-37 supports four scenarios for paying transactin fees:      **1. Using only KAS Global FeePayer Account**   Sends all transactions using the KAS global FeePayer Account.       ``` {     \"options\": {       \"enableGlobalFeePayer\": true     }     } ```    <br />    **2. Using User FeePayer account**   Sends all transactions using the KAS User FeePayer Account.      ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```    <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account**   Uses User FeePayer Account as default. When the balance runs out, KAS Global FeePayer Account will be used.     ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```    <br />  **4. Not using FeePayer Account**   Sends a transaction via normal means where the sender pays the transaction fee.       ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ```
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
const Kip37TokenListResponseItem = require('./Kip37TokenListResponseItem')

/**
 * The Kip37TokenListResponse model module.
 * @class Kip37TokenListResponse
 * @version 1.0
 */
class Kip37TokenListResponse {
    /**
     * Constructs a new <code>Kip37TokenListResponse</code>.
     * @alias Kip37TokenListResponse
     * @class
     * @param items {Array.<Kip37TokenListResponseItem>}
     * @param cursor {String} The pointer for the next request, after which the result will be returned.
     */

    constructor(items, cursor) {
        this.items = items
        this.cursor = cursor
    }

    /**
     * Constructs a <code>Kip37TokenListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Kip37TokenListResponse} obj Optional instance to populate.
     * @return {Kip37TokenListResponse} The populated <code>Kip37TokenListResponse</code> instance.
     * @memberof Kip37TokenListResponse
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Kip37TokenListResponse()

            if (data.hasOwnProperty('items')) {
                obj.items = ApiClient.convertToType(data.items, [Kip37TokenListResponseItem])
            }
            if (data.hasOwnProperty('cursor')) {
                obj.cursor = ApiClient.convertToType(data.cursor, 'String')
            }
        }
        return obj
    }
}

/**
 * @type {Array.<Kip37TokenListResponseItem>}
 * @memberof Kip37TokenListResponse
 */
Kip37TokenListResponse.prototype.items = undefined
/**
 * The pointer for the next request, after which the result will be returned.
 * @type {String}
 * @memberof Kip37TokenListResponse
 */
Kip37TokenListResponse.prototype.cursor = undefined

module.exports = Kip37TokenListResponse