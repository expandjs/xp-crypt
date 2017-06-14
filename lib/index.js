/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

// Const
const exp  = module.exports,
    bcrypt = require('bcryptjs'),
    xxhash = require('xxhashjs');

/*********************************************************************/

/**
 * Compares the provided `data` with `hash`.
 * This method is particularly useful to match a plain password against an hash.
 * The `callback` is invoked with two arguments: (`error`, `result`).
 *
 * @function compare
 * @since 1.0.0
 * @category crypt
 * @description Compares the provided `data` with `hash`
 * @source https://github.com/expandjs/xp-crypt/blob/master/lib/index.js
 *
 * @param {string} data
 * @param {string} hash
 * @param {Function} [callback]
 */
exp.compare = function (data, hash, callback) {
    bcrypt.compare(data, hash, callback);
};

/**
 * Returns a string based on the provided `seed`.
 * The string is generated according to the [xxHash](https://code.google.com/archive/p/xxhash) algorithm.
 *
 * @function h64
 * @since 1.0.0
 * @category crypt
 * @description Returns a string based on the provided `seed`
 * @source https://github.com/expandjs/xp-crypt/blob/master/lib/index.js
 *
 * @param {*} seed
 * @returns {string}
 */
exp.h64 = function (seed) {
    return xxhash.h64(JSON.stringify(seed), 0).toString(16);
};

/**
 * Generates an hash, based on the provided `data` and `salt`.
 * This method is particularly useful to hash passwords before storing them.
 * The `callback` is invoked with two arguments: (`error`, `hash`).
 *
 * @function hash
 * @since 1.0.0
 * @category crypt
 * @description Generates an hash, based on the provided `data` and `salt`
 * @source https://github.com/expandjs/xp-crypt/blob/master/lib/index.js
 *
 * @param {string} data
 * @param {string | number} salt
 * @param {Function} [callback]
 */
exp.hash = function (data, salt, callback) {
    bcrypt.hash(data, salt, callback);
};
