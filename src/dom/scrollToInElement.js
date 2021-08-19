function easeOutQuad(startPostion, position, step, sum) {
    if (step <= 0) return startPostion;
    if (step >= sum) return position;
    return (
        startPostion +
        (position - startPostion) * -(Math.pow(step / sum - 1, 2) - 1)
    );
}

/**
 *
 * @param {Element} scrollTarget scroll Element
 * @param {Number} position
 * @param {Number} _startPostion
 * @param {Number} _i
 */
function ScrollToInElement(scrollTarget, position, _startPostion, _i = 0) {
    var requestAnimFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    _startPostion =
        _startPostion === undefined ? scrollTarget.scrollTop : _startPostion;

    requestAnimFrame.call(window, () => {
        const next = Math.floor(easeOutQuad(_startPostion, position, _i, 20));
        if (i > 20) {
            scrollTarget.scrollTo(0, position);
        } else {
            scrollTarget.scrollTo(0, next);
            ScrollToInElement(scrollTarget, position, _startPostion, _i + 1);
        }
    });
}

module.exports = ScrollToInElement;
