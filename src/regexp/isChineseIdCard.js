/**
 *
 * @desc  determain whether the str is Chinese id cart
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isChineseIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
        str
    );
}

module.exports = isChineseIdCard;
