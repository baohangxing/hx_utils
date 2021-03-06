/**
 *
 * @desc get Cookie value by key
 * @param  {String} name
 * @return {String}
 */
function getCookie(name) {
    if (!document || !document.cookie) return '';
    var arr = document.cookie.replace(/\s/g, '').split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

module.exports = getCookie;
