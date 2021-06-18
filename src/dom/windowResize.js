/**
 *
 * @desc monitor the soft keyboard pop-down and pop-up
 * When the software keyboard pop-up will change window.innerHeight，the principle is to monitor the value changes
 * @param {Function} downCb callback after the soft keyboard pop-down
 * @param {Function} upCb callback after the soft keyboard pop-up
 */

function windowResize(downCb, upCb) {
    var clientHeight = window.innerHeight;
    downCb = typeof downCb === 'function' ? downCb : function () {};
    upCb = typeof upCb === 'function' ? upCb : function () {};
    window.addEventListener('resize', () => {
        var height = window.innerHeight;
        if (height === clientHeight) {
            downCb();
        }
        if (height < clientHeight) {
            upCb();
        }
    });
}

module.exports = windowResize;
