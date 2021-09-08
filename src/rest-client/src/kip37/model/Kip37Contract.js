/**
 * KIP-37 API
 * ## Introduction The KIP-37 API helps Blockchain app (BApp) developers to easily deploy smart contracts and send tokens of the [KIP-37 Multi Token Standard](https://kips.klaytn.com/KIPs/kip-37).  You can use the default contract managing account (`deployer`) and `alias`.    You can also manage the contracts and tokens created on the klaytn network using the caver SDK, using contract address and the [Wallet API](https://refs.klaytnapi.com/ko/wallet/latest) account.    ## Error Codes  ### 400: Bad Request  | Code    | Message                                      | |---------|----------------------------------------------| | 1160050 | incorrect request                            | | 1160251 | its value is out of range                    | | 1164000 | invalid alias format                         | | 1164001 | invalid address                              | | 1164002 | invalid hex format                           | | 1164004 | account not found in wallet account-pool     | | 1164005 | batch items mismatch                         | | 1164006 | too many batch items                         | | 1164007 | invalid krn                                  | | 1164008 | no contract code                             | | 1164009 | insufficient balance                         | | 1164011 | fee payer not found in wallet feepayer-pool  |   ### 403: Forbidden  | Code    | Message                          | |---------|----------------------------------| | 1164300 | insufficient account permissions |   ### 404: Not Found  | Code    | Message            | |---------|--------------------| | 1164400 | contract not found | | 1164401 | token not found    |  ### 409: Conflict  | Code    | Message                   | |---------|---------------------------| | 1164900 | duplicate alias           | | 1164901 | contract already paused   | | 1164902 | contract already unpaused | | 1164903 | token already exist       | | 1164904 | contract already paused   | | 1164905 | token already unpaused    | | 1164906 | already approved          | | 1164907 | already not approved      | | 1164908 | duplicate contract        | | 1164909 | contract being created    |   ### 503: Service Unavailable  | Code    | Message                   | |---------|---------------------------| | 1165100 | internal server error     |   ## Fee Payer Options  KAS KIP-37 supports four scenarios for paying transactin fees:      **1. Using only KAS Global FeePayer Account**   Sends all transactions using the KAS global FeePayer Account.       ``` {     \"options\": {       \"enableGlobalFeePayer\": true     }     } ```    <br />    **2. Using User FeePayer account**   Sends all transactions using the KAS User FeePayer Account.      ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```    <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account**   Uses User FeePayer Account as default. When the balance runs out, KAS Global FeePayer Account will be used.     ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```    <br />  **4. Not using FeePayer Account**   Sends a transaction via normal means where the sender pays the transaction fee.       ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ```
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
const Kip37FeePayerOption = require('./Kip37FeePayerOption')

/**
 * The Kip37Contract model module.
 * @class Kip37Contract
 * @version 1.0
 */
class Kip37Contract {
    /**
     * Constructs a new <code>Kip37Contract</code>.
     * @alias Kip37Contract
     * @class
     * @param address {String} Contract address
     * @param alias {String} Contract alias
     * @param status {String} Contract status [`init`, `submitted`, `deployed`]
     * @param uri {String} Contract URI
     */

    constructor(address, alias, status, uri) {
        this.address = address
        this.alias = alias
        this.status = status
        this.uri = uri
    }

    /**
     * Constructs a <code>Kip37Contract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Kip37Contract} obj Optional instance to populate.
     * @return {Kip37Contract} The populated <code>Kip37Contract</code> instance.
     * @memberof Kip37Contract
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Kip37Contract()

            if (data.hasOwnProperty('address')) {
                obj.address = ApiClient.convertToType(data.address, 'String')
            }
            if (data.hasOwnProperty('alias')) {
                obj.alias = ApiClient.convertToType(data.alias, 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj.status = ApiClient.convertToType(data.status, 'String')
            }
            if (data.hasOwnProperty('uri')) {
                obj.uri = ApiClient.convertToType(data.uri, 'String')
            }
            if (data.hasOwnProperty('options')) {
                obj.options = Kip37FeePayerOption.constructFromObject(data.options)
            }
        }
        return obj
    }
}

/**
 * Contract address
 * @type {String}
 * @memberof Kip37Contract
 */
Kip37Contract.prototype.address = undefined
/**
 * Contract alias
 * @type {String}
 * @memberof Kip37Contract
 */
Kip37Contract.prototype.alias = undefined
/**
 * Contract status [`init`, `submitted`, `deployed`]
 * @type {String}
 * @memberof Kip37Contract
 */
Kip37Contract.prototype.status = undefined
/**
 * Contract URI
 * @type {String}
 * @memberof Kip37Contract
 */
Kip37Contract.prototype.uri = undefined
/**
 * @type {Kip37FeePayerOption}
 * @memberof Kip37Contract
 */
Kip37Contract.prototype.options = undefined

module.exports = Kip37Contract
