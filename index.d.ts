declare namespace hx_utils {
    /**
     * @desc Determine whether HTMLElement has class
     * @param {HTMLElement} ele
     * @param {String} cls
     * @return {Boolean}
     */
    export function hasClass(ele: HTMLElement, cls: string): boolean;

    /**
     *
     * @desc   add class to HTMLElement
     * @param  {HTMLElement} ele
     * @param  {String} cls
     */
    export function addClass(ele: HTMLElement, cls: string): void;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    export function isArray(val: any): boolean;

    /**
     *
     * @desc Determine whether two arrays are equal
     * @param {Array} arr1
     * @param {Array} arr2
     * @return {Boolean}
     */
    export function arrayEqual(arr1: any[], arr2: any[]): boolean;

    export function _exports(
        delay: number,
        noTrailing: boolean,
        callback: Function,
        debounceMode: boolean
    ): Function;

    /**
     * @desc 函数防抖
     * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
     * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
     * @example 适用场景：如在线编辑的自动存储防抖。
     * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
     * @param  {Boolean}  atBegin       可选，默认为false。
     *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
                                        如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
     * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
     *                                  执行去抖动功能时，，调用`callback`。
     *
     * @return {Function} 新的防抖函数。
     */
    export function debounce(
        delay: number,
        atBegin: boolean,
        callback: Function
    ): Function;

    /**
     * @desc deep Clone，suport common data types
     * @param {Any} values
     * @return {Any}
     */
    export function deepClone(values: any): any;

    /**
     *
     * @desc   现金额转大写
     * @param  {Number} n
     * @return {String}
     */
    export function digitUppercase(n: number): string;

    declare var wheelOpt:
        | boolean
        | {
              passive: boolean;
          };

    /**
     * disable Scroll
     */
    export function disableScroll(): void;

    /**
     * enable Scroll
     */
    export function enableScroll(): void;

    /**
     * @desc   格式化${startTime}距现在的已过时间
     * @param  {Date} startTime
     * @return {String}
     */
    export function formatPassTime(startTime: Date): string;

    /**
     *
     * @desc   格式化现在距${endTime}的剩余时间
     * @param  {Date} endTime
     * @return {String}
     */
    export function formatRemainTime(endTime: Date): string;

    /**
     *
     * @desc get Cookie value by key
     * @param  {String} name
     * @return {String}
     */
    export function getCookie(name: string): string;

    /**
     *
     * @desc get Explorer type and version
     * @return {String}
     */
    export function getExplorerType(): string;

    /**
     * @desc get Key name according to the keycode
     * @param  {Number} keycode
     * @return {String}
     */
    export function getKeyName(keycode: number): string;

    /**
     *
     * @desc get operation system type
     * @return {String}
     */
    export function getOS(): string;

    /**
     * @desc Get the distance of the scroll bar from the top
     */
    export function getScrollTop(): number;

    /**
     *
     * @desc  determain whether the str is Chinese id cart
     * @param  {String|Number} str
     * @return {Boolean}
     */
    export function isChineseIdCard(str: string | number): boolean;

    /**
     *
     * @desc   determain whether the str is a Chinese mobile telephone number
     * @param  {String|Number} str
     * @return {Boolean}
     */
    export function isChinesePhoneNum(str: string | number): boolean;

    /**
     *
     * @desc Determine whether str is hexadecimal rgb or rgba
     * @param  {String}  str
     * @return {Boolean}
     */
    export function isColor(str: string): boolean;

    /**
     *
     * @desc   Determine whether str is a email
     * @param  {String}  str
     * @return {Boolean}
     */
    export function isEmail(str: string): boolean;

    /**
     *
     * @desc   determine whether `obj` is a empty object
     * @param  {Object} obj
     * @return {Boolean}
     */
    export function isEmptyObject(obj: any): boolean;

    /**
     *
     * @desc 是否为闰年
     * @param {Number} year
     * @returns {Boolean}
     */
    export function isLeapYear(year: number): boolean;

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    export function isObject(val: any): boolean;

    /**
     * @desc   判断是否为同一天
     * @param  {Date} date1
     * @param  {Date} date2 可选／默认值：当天
     * @return {Boolean}
     */
    export function isSameDay(date1: Date, date2: Date): boolean;

    /**
     *
     * @desc determine whether the browser supports the WebP images
     * @return {Boolean}
     */
    export function isSupportWebP(): boolean;

    /**
     *
     * @desc   Determine whether str is a Url
     * @param  {String} str
     * @return {Boolean}
     */
    export function isUrl(str: string): boolean;

    /**
     * @desc 获取指定日期月份的总天数
     * @param {Date} time
     * @return {Number}
     */
    export function monthDays(time: Date): number;

    /**
     *
     * @desc  Get the position of an element from the document (document), similar to offset() in jQ
     * @param {HTMLElement} ele
     * @returns { {left: number, top: number} }
     */
    export function offset(ele: HTMLElement): {
        left: number;
        top: number;
    };

    /**
     *
     * @desc   parse query string to object
     * @param  {String} url  default: window.location.href
     * @return {Object}
     */
    export function parseQueryString(url: string): any;

    /**
     *
     * @desc get random color
     * @return {String}
     */
    export function randomColor(): string;

    /**
     *
     * @desc get a random number between [min, max]
     * Is not completely random !!!
     * @param  {Number} min
     * @param  {Number} max
     * @return {Number} number between [min, max]
     */
    export function randomNum(
        min: number,
        max: number,
        digits?: number
    ): number;

    /**
     *
     * @desc remove class from HTMLElement
     * @param {HTMLElement} ele
     * @param {String} cls
     */
    export function removeClass(ele: HTMLElement, cls: string): void;

    /**
     *
     * @desc  set Cookie
     * @param {String} name
     * @param {String} value
     * @param {Number} days
     */
    export function setCookie(
        name: string,
        value: string,
        days: number
    ): string;

    /**
     *
     * @desc remove Cookie by name
     * @param  {String} name
     */
    export function removeCookie(name: string): void;

    /**
     *
     * @desc Set the distance between the scroll bar and the top
     * @param {Number} value
     */
    export function setScrollTop(value: number): number;

    /**
     *
     * @desc  scrolls to the specified position smoothly within a certain period of time
     * @param {Number} to
     * @param {Number} duration
     */
    export function scrollTo(to: number, duration: number): void;

    /**
     *
     * @desc   stringfy query string
     * @param  {Object} obj
     * @return {String}
     */
    export function stringfyQueryString(obj: any): string;

    /**
     * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
     * @param { Date | String } startTime
     * @param { Date | String } endTime
     * @returns { Object } { d, h, m, s } 天 时 分 秒
     */
    export function timeLeft(
        startTime: Date | string,
        endTime: Date | string
    ): any;

    /**
     *
     * @desc monitor the soft keyboard pop-down and pop-up
     * When the software keyboard pop-up will change window.innerHeight，the principle is to monitor the value changes
     * @param {Function} downCb callback after the soft keyboard pop-down
     * @param {Function} upCb callback after the soft keyboard pop-up
     */
    export function windowResize(downCb: Function, upCb: Function): void;
}
declare module 'hx_utils' {
    export = hx_utils;
}
