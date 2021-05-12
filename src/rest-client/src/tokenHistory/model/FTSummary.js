/*
 * Token History API
 * # Introduction Token History API allows you to query the transaction history of KLAY, FTs (KIP-7 and Labelled ERC-20), NFTs (KIP-17 and Labelled ERC-721), and MTs (KIP-37 and Labelled ERC-1155). You can track KLAY's transaction history or retrieve NFT-related data of a certain EOA. For more details on using Token History API, please refer to the [Tutorial](https://docs.klaytnapi.com/tutorial). For any inquiries on this document or KAS in general, please visit [Developer Forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.FTSummary = factory(root.TokenHistoryApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The FTSummary model module.
     * @class FTSummary
     * @version 1.0
     */

    /**
     * Constructs a new <code>FTSummary</code>.
     * @alias FTSummary
     * @class
     * @param address {String} Contract address (20-byte)
     * @param owner {String} EOA to query (20-byte)
     * @param balance {String} Token balances (in hexadecimal)
     * @param formattedValue {String} Formatted value with contracts `decimals`
     * @param decimals {Number} FT token digits
     * @param name {String} FT Token name
     * @param symbol {String} FT Token symbol
     * @param totalSupply {String} FT total issued amount (in hexadecimal)
     * @param updatedAt {Number} Last change in token information (timestamp)
     */
    const FTSummary = function(address, owner, balance, formattedValue, decimals, name, symbol, totalSupply, updatedAt) {
        this.address = address
        this.owner = owner
        this.balance = balance
        this.formattedValue = formattedValue
        this.decimals = decimals
        this.name = name
        this.symbol = symbol
        this.totalSupply = totalSupply
        this.updatedAt = updatedAt
    }

    /**
     * Constructs a <code>FTSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FTSummary} obj Optional instance to populate.
     * @return {FTSummary} The populated <code>FTSummary</code> instance.
     * @memberof FTSummary
     */
    FTSummary.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new FTSummary()
            if (data.hasOwnProperty('address')) obj.address = ApiClient.convertToType(data.address, 'String')
            if (data.hasOwnProperty('owner')) obj.owner = ApiClient.convertToType(data.owner, 'String')
            if (data.hasOwnProperty('balance')) obj.balance = ApiClient.convertToType(data.balance, 'String')
            if (data.hasOwnProperty('formattedValue')) obj.formattedValue = ApiClient.convertToType(data.formattedValue, 'String')
            if (data.hasOwnProperty('decimals')) obj.decimals = ApiClient.convertToType(data.decimals, 'Number')
            if (data.hasOwnProperty('name')) obj.name = ApiClient.convertToType(data.name, 'String')
            if (data.hasOwnProperty('symbol')) obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            if (data.hasOwnProperty('totalSupply')) obj.totalSupply = ApiClient.convertToType(data.totalSupply, 'String')
            if (data.hasOwnProperty('updatedAt')) obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
        }
        return obj
    }

    /**
     * Contract address (20-byte)
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.address = undefined

    /**
     * EOA to query (20-byte)
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.owner = undefined

    /**
     * Token balances (in hexadecimal)
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.balance = undefined

    /**
     * Formatted value with contracts `decimals`
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.formattedValue = undefined

    /**
     * FT token digits
     * @type {Number}
     * @memberof FTSummary
     */
    FTSummary.prototype.decimals = undefined

    /**
     * FT Token name
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.name = undefined

    /**
     * FT Token symbol
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.symbol = undefined

    /**
     * FT total issued amount (in hexadecimal)
     * @type {String}
     * @memberof FTSummary
     */
    FTSummary.prototype.totalSupply = undefined

    /**
     * Last change in token information (timestamp)
     * @type {Number}
     * @memberof FTSummary
     */
    FTSummary.prototype.updatedAt = undefined

    return FTSummary
})
