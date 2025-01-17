/*
 * Copyright 2020 The caver-js-ext-kas Authors
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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function createAlias(prefix) {
    // Make random string for alias to avoid duplicated alias
    return `${prefix}-${Math.random()
        .toString(36)
        .substr(2, 11)}`
}

function createFeePayerOptions(enableGlobalFeePayer, userFeePayer) {
    return {
        enableGlobalFeePayer,
        userFeePayer: {
            krn: userFeePayer.krn,
            address: userFeePayer.address,
        },
    }
}

module.exports = {
    timeout,
    createAlias,
    createFeePayerOptions,
}
