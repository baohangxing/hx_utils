/**
 *
 * @desc get Explorer type and version
 * @return {String}
 */
function getExplorerType() {
    if (!navigator || !navigator.userAgent) return 'Unkonwn';
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/))
        ? (sys.ie = s[1])
        : (s = ua.match(/msie ([\d\.]+)/))
        ? (sys.ie = s[1])
        : (s = ua.match(/edge\/([\d\.]+)/))
        ? (sys.edge = s[1])
        : (s = ua.match(/firefox\/([\d\.]+)/))
        ? (sys.firefox = s[1])
        : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
        ? (sys.opera = s[1])
        : (s = ua.match(/chrome\/([\d\.]+)/))
        ? (sys.chrome = s[1])
        : (s = ua.match(/version\/([\d\.]+).*safari/))
        ? (sys.safari = s[1])
        : 0;
    if (sys.ie) return 'IE: ' + sys.ie;
    if (sys.edge) return 'EDGE: ' + sys.edge;
    if (sys.firefox) return 'Firefox: ' + sys.firefox;
    if (sys.chrome) return 'Chrome: ' + sys.chrome;
    if (sys.opera) return 'Opera: ' + sys.opera;
    if (sys.safari) return 'Safari: ' + sys.safari;
    return 'Unkonwn';
}

module.exports = getExplorerType;
