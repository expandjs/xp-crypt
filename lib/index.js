/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

// Const
const env  = typeof window !== "undefined" ? window : global,
    exp    = env.XPCrypt = module.exports,
    bcrypt = require('bcryptjs'),
    xxhash = require('xxhashjs');

/*********************************************************************/

/**
 * Compares the provided `input` with `hash`.
 * This method is particularly useful to match a plain password against an hash.
 * The `callback` is invoked with two arguments: (`error`, `result`).
 *
 * @function compare
 * @since 1.0.0
 * @category crypt
 * @description Compares the provided `input` with `hash`
 * @source https://github.com/expandjs/xp-crypt/blob/master/lib/index.js
 *
 * @param {string} input
 * @param {string} hash
 * @param {Function} [callback]
 * @returns {Promise}
 */
exp.compare = function (input, hash, callback) {
    return new Promise((resolve, reject) => bcrypt.compare(input, hash, (err, res) => {
        if (err) { reject(err); } else { resolve(res); }
        if (callback) { callback(err, res); }
    }));
};

/**
 * Returns a string based on the provided `input`.
 * The string is generated according to the [xxHash](https://code.google.com/archive/p/xxhash) algorithm.
 *
 * @function h64
 * @since 1.0.0
 * @category crypt
 * @description Returns a string based on the provided `seed`
 * @source https://github.com/expandjs/xp-crypt/blob/master/lib/index.js
 *
 * @param {*} input
 * @param {number} [seed = 0]
 * @param {number} [base = 36]
 * @returns {string}
 */
exp.h64 = function (input, seed, base) {
    return xxhash.h64(JSON.stringify(input), seed || 0).toString(base || 36);
};

/**
 * Generates an hash, based on the provided `input` and `salt`.
 * This method is particularly useful to hash passwords before storing them.
 * The `callback` is invoked with two arguments: (`error`, `hash`).
 *
 * @function hash
 * @since 1.0.0
 * @category crypt
 * @description Generates an hash, based on the provided `input` and `salt`
 * @source https://github.com/expandjs/xp-crypt/blob/master/lib/index.js
 *
 * @param {string} input
 * @param {string | number} salt
 * @param {Function} [callback]
 * @returns {Promise}
 */
exp.hash = function (input, salt, callback) {
    return new Promise((resolve, reject) => bcrypt.hash(input, salt, (err, res) => {
        if (err) { reject(err); } else { resolve(res); }
        if (callback) { callback(err, res); }
    }));
};
