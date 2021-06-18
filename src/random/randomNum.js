/**
 *
 * @desc get a random number between [min, max]
 * Is not completely random !!!
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number} number between [min, max]
 */
function randomNum(min, max, digits = 0) {
    if (min > max) throw Error("randomNum: min number can't bigger than max");
    if (min === max) return min;
    var num = (Math.random() * (max - min) + min).toFixed(digits);
    return parseFloat(num);
}

module.exports = randomNum;
