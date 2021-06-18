/**
 *
 * @desc   determine whether `obj` is a empty object
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
    return !Object.keys(obj).length;
}

module.exports = isEmptyObject;
