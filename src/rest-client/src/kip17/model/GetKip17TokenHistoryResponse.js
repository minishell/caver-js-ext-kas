/*
 * KIP-17 API
 *   # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1100050 | incorrect request 1100101 | data don't exist 1100251 | its value is out of range; size 1104401 | failed to get an account |   ## 404: Not Found   | Code | Messages |   | --- | --- |   | 1104404 | Token not found |   ## 409: Conflict   | Code | Messages |   | --- | --- |   | 1104400 | Duplicate alias - test |
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/GetKip17TokenHistoryResponseItem'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./GetKip17TokenHistoryResponseItem'))
    } else {
        // Browser globals (root is window)
        if (!root.Kip17Api) {
            root.Kip17Api = {}
        }
        root.Kip17Api.GetKip17TokenHistoryResponse = factory(root.Kip17Api.ApiClient, root.Kip17Api.GetKip17TokenHistoryResponseItem)
    }
})(this, function(ApiClient, GetKip17TokenHistoryResponseItem) {
    /**
     * The GetKip17TokenHistoryResponse model module.
     * @class GetKip17TokenHistoryResponse
     * @version 1.0
     */

    /**
     * Constructs a new <code>GetKip17TokenHistoryResponse</code>.
     * @alias GetKip17TokenHistoryResponse
     * @class
     * @param cursor {String} Offset for the next batch
     * @param items {Array.<GetKip17TokenHistoryResponseItem>}
     */
    const GetKip17TokenHistoryResponse = function(cursor, items) {
        this.cursor = cursor
        this.items = items
    }

    /**
     * Constructs a <code>GetKip17TokenHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetKip17TokenHistoryResponse} obj Optional instance to populate.
     * @return {GetKip17TokenHistoryResponse} The populated <code>GetKip17TokenHistoryResponse</code> instance.
     * @memberof GetKip17TokenHistoryResponse
     */
    GetKip17TokenHistoryResponse.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new GetKip17TokenHistoryResponse()
            if (data.hasOwnProperty('cursor')) obj.cursor = ApiClient.convertToType(data.cursor, 'String')
            if (data.hasOwnProperty('items')) obj.items = ApiClient.convertToType(data.items, [GetKip17TokenHistoryResponseItem])
        }
        return obj
    }

    /**
     * Offset for the next batch
     * @type {String}
     * @memberof GetKip17TokenHistoryResponse
     */
    GetKip17TokenHistoryResponse.prototype.cursor = undefined

    /**
     * @type {Array.<GetKip17TokenHistoryResponseItem>}
     * @memberof GetKip17TokenHistoryResponse
     */
    GetKip17TokenHistoryResponse.prototype.items = undefined

    return GetKip17TokenHistoryResponse
})