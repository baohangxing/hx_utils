/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}

module.exports = isArray;
