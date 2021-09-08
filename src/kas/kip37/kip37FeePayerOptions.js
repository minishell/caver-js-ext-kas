/*
 * Copyright 2021 The caver-js-ext-kas Authors
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

const lodash = require('lodash')

class KIP37FeePayerOptions {
    /**
     * Create an instance of KIP37FeePayerOptions from object. <br>
     * You can use object instead of KIP37FeePayerOptions instance when using `caver.kas.kip37`. <br>
     * Because the function of `caver.kas.kip37` internally converts object to KIP37FeePayerOptions instance,
     * and when converting, validation of the field defined inside Object is performed. <br>
     *
     * @example
     * const options = caver.kas.kip37.feePayerOptions.constructFromObject({ enableGlobalFeePayer: true })
     * const options = caver.kas.kip37.feePayerOptions.constructFromObject({ userFeePayer: { krn, address } })
     *
     * @param {object} obj An object where query parameters are defined.
     * @return {KIP37FeePayerOptions}
     */
    static constructFromObject(obj) {
        const enableGlobalFeePayer = obj.enableGlobalFeePayer
        const userFeePayer = obj.userFeePayer

        return new KIP37FeePayerOptions(enableGlobalFeePayer, userFeePayer)
    }

    /**
     * Creates an instance of KIP37FeePayerOptions.
     *
     * @example
     * const options = new caver.kas.kip37.feePayerOptions(enableGlobalFeePayer, userFeePayer)
     *
     * @constructor
     * @param {boolean} [enableGlobalFeePayer] - A boolean value of whether KAS Global FeePayer is used.
     * @param {object} [userFeePayer] - The user fee payer object. This will include `krn` and `address` of the fee payer.
     * @param {string} [userFeePayer.krn] - The feepayer-pool KRN of the FeePayer account.
     * @param {string} [userFeePayer.address] - Klaytn FeePayer account address.
     */
    constructor(enableGlobalFeePayer, userFeePayer) {
        if (enableGlobalFeePayer !== undefined) this.enableGlobalFeePayer = enableGlobalFeePayer
        if (userFeePayer !== undefined) this.userFeePayer = userFeePayer
    }

    /**
     * @type {boolean}
     */
    get enableGlobalFeePayer() {
        return this._enableGlobalFeePayer
    }

    set enableGlobalFeePayer(enableGlobalFeePayer) {
        if (!lodash.isBoolean(enableGlobalFeePayer))
            throw new Error(`Invalid type of enableGlobalFeePayer: enableGlobalFeePayer should be boolean type.`)

        this._enableGlobalFeePayer = enableGlobalFeePayer
    }

    /**
     * @type {object}
     */
    get userFeePayer() {
        return this._userFeePayer
    }

    set userFeePayer(userFeePayer) {
        if (!lodash.isObject(userFeePayer)) throw new Error(`Invalid type of userFeePayer: userFeePayer should be object type.`)

        const keys = Object.keys(userFeePayer)
        for (let k of keys) {
            k = k.replace('_', '')
            if (k !== 'krn' && k !== 'address')
                throw new Error('Invalid userFeePayer object: userFeePayer can define only `krn` and `address` of the fee payer')
        }

        this._userFeePayer = Object.assign({}, userFeePayer)
    }
}

module.exports = KIP37FeePayerOptions
