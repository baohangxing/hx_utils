/**
 *
 * @desc determine whether the browser supports the WebP images
 * @return {Boolean}
 */
function isSupportWebP() {
    return (
        !![].map &&
        document
            .createElement('canvas')
            .toDataURL('image/webp')
            .indexOf('data:image/webp') == 0
    );
}

module.exports = isSupportWebP;
