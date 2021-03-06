module.exports = /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module',
            });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value,
        });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function (key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
})(
    /************************************************************************/
    /******/ [
        /* 0 */
        /***/ function (module, exports, __webpack_require__) {
            var moduleExports = {};

            var r = __webpack_require__(1);
            r.keys().forEach(function (key) {
                var attr = key.substring(
                    key.lastIndexOf('/') + 1,
                    key.lastIndexOf('.')
                );
                moduleExports[attr] = r(key);
            });

            module.exports = moduleExports;

            /***/
        },
        /* 1 */
        /***/ function (module, exports, __webpack_require__) {
            var map = {
                './array/arrayEqual.js': 2,
                './class/addClass.js': 3,
                './class/hasClass.js': 4,
                './class/removeClass.js': 5,
                './cookie/getCookie.js': 6,
                './cookie/removeCookie.js': 7,
                './cookie/setCookie.js': 8,
                './device/getExplore.js': 9,
                './device/getOS.js': 10,
                './dom/disableScroll.js': 11,
                './dom/enableScroll.js': 13,
                './dom/getScrollTop.js': 14,
                './dom/offset.js': 15,
                './dom/scrollEventBase.js': 12,
                './dom/scrollTo.js': 16,
                './dom/setScrollTop.js': 17,
                './dom/windowResize.js': 18,
                './function/debounce.js': 19,
                './function/throttle.js': 20,
                './keycode/getKeyName.js': 21,
                './object/deepClone.js': 22,
                './object/isEmptyObject.js': 23,
                './random/randomColor.js': 24,
                './random/randomNum.js': 25,
                './regexp/isChineseIdCard.js': 26,
                './regexp/isChinesePhoneNum.js': 27,
                './regexp/isColor.js': 28,
                './regexp/isEmail.js': 29,
                './regexp/isUrl.js': 30,
                './string/digitUppercase.js': 31,
                './support/isSupportWebP.js': 32,
                './time/formatPassTime.js': 33,
                './time/formatRemainTime.js': 34,
                './time/isLeapYear.js': 35,
                './time/isSameDay.js': 36,
                './time/monthDays.js': 37,
                './time/timeLeft.js': 38,
                './url/parseQueryString.js': 39,
                './url/stringfyQueryString.js': 40,
            };

            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = 1;

            /***/
        },
        /* 2 */
        /***/ function (module, exports) {
            /**
             *
             * @desc Determine whether two arrays are equal
             * @param {Array} arr1
             * @param {Array} arr2
             * @return {Boolean}
             */
            function arrayEqual(arr1, arr2) {
                if (!arr1 || !arr2) return false;
                if (arr1 === arr2) return true;
                if (arr1.length !== arr2.length) return false;
                var len = arr1.length;
                for (var i = 0; i < len; ++i) {
                    if (arr1[i] !== arr2[i]) return false;
                }
                return true;
            }

            module.exports = arrayEqual;

            /***/
        },
        /* 3 */
        /***/ function (module, exports, __webpack_require__) {
            var hasClass = __webpack_require__(4);

            /**
             *
             * @desc   add class to HTMLElement
             * @param  {HTMLElement} ele
             * @param  {String} cls
             */
            function addClass(ele, cls) {
                if (ele && !hasClass(ele, cls)) {
                    ele.className += ' ' + cls;
                }
            }

            module.exports = addClass;

            /***/
        },
        /* 4 */
        /***/ function (module, exports) {
            /**
             * @desc Determine whether HTMLElement has class
             * @param {HTMLElement} ele
             * @param {String} cls
             * @return {Boolean}
             */
            function hasClass(ele, cls) {
                if (!ele || ele.className === undefined) return false;
                return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(
                    ele.className
                );
            }

            module.exports = hasClass;

            /***/
        },
        /* 5 */
        /***/ function (module, exports, __webpack_require__) {
            var hasClass = __webpack_require__(4);

            /**
             *
             * @desc remove class from HTMLElement
             * @param {HTMLElement} ele
             * @param {String} cls
             */
            function removeClass(ele, cls) {
                if (ele && hasClass(ele, cls)) {
                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                    ele.className = ele.className.replace(reg, ' ');
                }
            }
            module.exports = removeClass;

            /***/
        },
        /* 6 */
        /***/ function (module, exports) {
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

            /***/
        },
        /* 7 */
        /***/ function (module, exports, __webpack_require__) {
            var setCookie = __webpack_require__(8);
            /**
             *
             * @desc remove Cookie by name
             * @param  {String} name
             */
            function removeCookie(name) {
                setCookie(name, '1', -1);
            }

            module.exports = removeCookie;

            /***/
        },
        /* 8 */
        /***/ function (module, exports) {
            /**
             *
             * @desc  set Cookie
             * @param {String} name
             * @param {String} value
             * @param {Number} days
             */
            function setCookie(name, value, days) {
                if (!document || !document.cookie) return '';
                var date = new Date();
                date.setDate(date.getDate() + days);
                document.cookie = name + '=' + value + ';expires=' + date;
            }

            module.exports = setCookie;

            /***/
        },
        /* 9 */
        /***/ function (module, exports) {
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

            /***/
        },
        /* 10 */
        /***/ function (module, exports) {
            /**
             *
             * @desc get operation system type
             * @return {String}
             */
            function getOS() {
                var userAgent =
                    ('navigator' in window &&
                        'userAgent' in navigator &&
                        navigator.userAgent.toLowerCase()) ||
                    '';
                var appVersion =
                    ('navigator' in window &&
                        'appVersion' in navigator &&
                        navigator.appVersion.toLowerCase()) ||
                    '';

                if (
                    /iphone/i.test(userAgent) ||
                    /ipad/i.test(userAgent) ||
                    /ipod/i.test(userAgent)
                )
                    return 'ios';
                if (/android/i.test(userAgent)) return 'android';
                if (/win/i.test(appVersion) && /phone/i.test(userAgent))
                    return 'windowsPhone';
                if (/mac/i.test(appVersion)) return 'MacOSX';
                if (/win/i.test(appVersion)) return 'windows';
                if (/linux/i.test(appVersion)) return 'linux';
            }

            module.exports = getOS;

            /***/
        },
        /* 11 */
        /***/ function (module, exports, __webpack_require__) {
            __webpack_require__(12);

            /**
             * disable Scroll
             */
            function disableScroll() {
                if (!window || !window.addEventListener) return;
                window.addEventListener(
                    'DOMMouseScroll',
                    preventDefault,
                    false
                ); // older FF
                window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
                window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
                window.addEventListener(
                    'keydown',
                    preventDefaultForScrollKeys,
                    false
                );
            }

            module.exports = disableScroll;

            /***/
        },
        /* 12 */
        /***/ function (module, exports) {
            function preventDefault(e) {
                e.preventDefault();
            }

            function preventDefaultForScrollKeys(e) {
                // left: 37, up: 38, right: 39, down: 40,
                // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
                var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            }

            // modern Chrome requires { passive: false } when adding event
            var supportsPassive = false;
            try {
                window.addEventListener(
                    'test',
                    null,
                    Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        },
                    })
                );
            } catch (e) {}

            var wheelOpt = supportsPassive ? { passive: false } : false;
            var wheelEvent =
                'onwheel' in document.createElement('div')
                    ? 'wheel'
                    : 'mousewheel';

            /***/
        },
        /* 13 */
        /***/ function (module, exports, __webpack_require__) {
            __webpack_require__(12);
            /**
             * enable Scroll
             */
            function enableScroll() {
                if (!window || !window.addEventListener) return;
                window.removeEventListener(
                    'DOMMouseScroll',
                    preventDefault,
                    false
                );
                window.removeEventListener(
                    wheelEvent,
                    preventDefault,
                    wheelOpt
                );
                window.removeEventListener(
                    'touchmove',
                    preventDefault,
                    wheelOpt
                );
                window.removeEventListener(
                    'keydown',
                    preventDefaultForScrollKeys,
                    false
                );
            }

            module.exports = enableScroll;

            /***/
        },
        /* 14 */
        /***/ function (module, exports) {
            /**
             * @desc Get the distance of the scroll bar from the top
             */
            function getScrollTop() {
                if (!document) return 0;
                return (
                    (document.documentElement &&
                        document.documentElement.scrollTop) ||
                    document.body.scrollTop
                );
            }

            module.exports = getScrollTop;

            /***/
        },
        /* 15 */
        /***/ function (module, exports) {
            /**
             *
             * @desc  Get the position of an element from the document (document), similar to offset() in jQ
             * @param {HTMLElement} ele
             * @returns { {left: number, top: number} }
             */
            function offset(ele) {
                var pos = {
                    left: 0,
                    top: 0,
                };
                while (ele) {
                    pos.left += ele.offsetLeft;
                    pos.top += ele.offsetTop;
                    ele = ele.offsetParent;
                }
                return pos;
            }

            module.exports = offset;

            /***/
        },
        /* 16 */
        /***/ function (module, exports, __webpack_require__) {
            var getScrollTop = __webpack_require__(14);
            var setScrollTop = __webpack_require__(17);
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

            /**
             *
             * @desc  scrolls to the specified position smoothly within a certain period of time
             * @param {Number} to
             * @param {Number} duration
             */
            function scrollTo(to, duration) {
                if (duration < 0) {
                    setScrollTop(to);
                    return;
                }
                var diff = to - getScrollTop();
                if (diff === 0) return;
                var step = (diff / duration) * 10;
                requestAnimFrame(function () {
                    if (Math.abs(step) > Math.abs(diff)) {
                        setScrollTop(getScrollTop() + diff);
                        return;
                    }
                    setScrollTop(getScrollTop() + step);
                    if (
                        (diff > 0 && getScrollTop() >= to) ||
                        (diff < 0 && getScrollTop() <= to)
                    ) {
                        return;
                    }
                    scrollTo(to, duration - 16);
                });
            }

            module.exports = scrollTo;

            /***/
        },
        /* 17 */
        /***/ function (module, exports) {
            /**
             *
             * @desc Set the distance between the scroll bar and the top
             * @param {Number} value
             */
            function setScrollTop(value) {
                if (!window.scrollTo) return 0;
                window.scrollTo(0, value);
                return value;
            }

            module.exports = setScrollTop;

            /***/
        },
        /* 18 */
        /***/ function (module, exports) {
            /**
             *
             * @desc H5??????????????????????????????
             * ???????????????????????????????????? window.innerHeight????????????????????????
             * @param {Function} downCb ???????????????????????????????????????
             * @param {Function} upCb ???????????????????????????
             */

            function windowResize(downCb, upCb) {
                var clientHeight = window.innerHeight;
                downCb = typeof downCb === 'function' ? downCb : function () {};
                upCb = typeof upCb === 'function' ? upCb : function () {};
                window.addEventListener('resize', function () {
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

            /***/
        },
        /* 19 */
        /***/ function (module, exports, __webpack_require__) {
            var throttle = __webpack_require__(20);

            /**
 * @desc ???????????? 
 * ???throttle???????????????debounce???????????????????????????????????????????????????????????????????????????
 * ????????????????????????return??????????????????????????????????????????????????????????????????
 * @example ??????????????????????????????????????????????????????
 * @param  {Number}   delay         0??????????????????????????? ???????????????????????????100???250????????????????????????????????????????????????
 * @param  {Boolean}  atBegin       ??????????????????false???
 *                                  ??????`atBegin`???false????????????????????????????????????????????????return?????????????????????????????????????????????
                                    ??????`atBegin`???true????????????????????????????????????return??????????????????????????????
 * @param  {Function} callback      ?????????????????????????????????`this`???????????????????????????????????????????????????
 *                                  ????????????????????????????????????`callback`???
 *
 * @return {Function} ?????????????????????
 */
            function debounce(delay, atBegin, callback) {
                return callback === undefined
                    ? throttle(delay, atBegin, false)
                    : throttle(delay, callback, atBegin !== false);
            }
            module.exports = debounce;

            /***/
        },
        /* 20 */
        /***/ function (module, exports) {
            /**
             * @desc   ???????????????
             * ???????????????`resize`???`scroll`????????????????????????
             *
             * @param  {Number}    delay          0 ??????????????????????????? ???????????????????????????100???250????????????????????????????????????????????????
             * @param  {Boolean}   noTrailing     ??????????????????false???
             *                                    ??????noTrailing???true????????????????????????????????????`delay`??????`callback`?????????????????????
             *                                    ??????noTrailing???false??????????????????`callback`??????????????????????????????????????????????????????.
             *                                    ?????????`delay`??????????????????????????????????????????,???????????????????????????
             * @param  {Function}  callback       ?????????????????????????????????`this`???????????????????????????????????????????????????
             *                                    ?????????????????????????????????`callback`???
             * @param  {Boolean}   debounceMode   ??????`debounceMode`???true???`clear`???`delay`ms????????????
             *                                    ??????debounceMode???false???`callback`???`delay` ms???????????????
             *
             * @return {Function}  ??????????????????
             */
            module.exports = function throttle(
                delay,
                noTrailing,
                callback,
                debounceMode
            ) {
                // After wrapper has stopped being called, this timeout ensures that
                // `callback` is executed at the proper times in `throttle` and `end`
                // debounce modes.
                var timeoutID;

                // Keep track of the last time `callback` was executed.
                var lastExec = 0;

                // `noTrailing` defaults to falsy.
                if (typeof noTrailing !== 'boolean') {
                    debounceMode = callback;
                    callback = noTrailing;
                    noTrailing = undefined;
                }

                // The `wrapper` function encapsulates all of the throttling / debouncing
                // functionality and when executed will limit the rate at which `callback`
                // is executed.
                function wrapper() {
                    var self = this;
                    var elapsed = Number(new Date()) - lastExec;
                    var args = arguments;

                    // Execute `callback` and update the `lastExec` timestamp.
                    function exec() {
                        lastExec = Number(new Date());
                        callback.apply(self, args);
                    }

                    // If `debounceMode` is true (at begin) this is used to clear the flag
                    // to allow future `callback` executions.
                    function clear() {
                        timeoutID = undefined;
                    }

                    if (debounceMode && !timeoutID) {
                        // Since `wrapper` is being called for the first time and
                        // `debounceMode` is true (at begin), execute `callback`.
                        exec();
                    }

                    // Clear any existing timeout.
                    if (timeoutID) {
                        clearTimeout(timeoutID);
                    }

                    if (debounceMode === undefined && elapsed > delay) {
                        // In throttle mode, if `delay` time has been exceeded, execute
                        // `callback`.
                        exec();
                    } else if (noTrailing !== true) {
                        // In trailing throttle mode, since `delay` time has not been
                        // exceeded, schedule `callback` to execute `delay` ms after most
                        // recent execution.
                        //
                        // If `debounceMode` is true (at begin), schedule `clear` to execute
                        // after `delay` ms.
                        //
                        // If `debounceMode` is false (at end), schedule `callback` to
                        // execute after `delay` ms.
                        timeoutID = setTimeout(
                            debounceMode ? clear : exec,
                            debounceMode === undefined ? delay - elapsed : delay
                        );
                    }
                }

                // Return the wrapper function.
                return wrapper;
            };

            /***/
        },
        /* 21 */
        /***/ function (module, exports) {
            var keyCodeMap = {
                8: 'Backspace',
                9: 'Tab',
                13: 'Enter',
                16: 'Shift',
                17: 'Ctrl',
                18: 'Alt',
                19: 'Pause',
                20: 'Caps Lock',
                27: 'Escape',
                32: 'Space',
                33: 'Page Up',
                34: 'Page Down',
                35: 'End',
                36: 'Home',
                37: 'Left',
                38: 'Up',
                39: 'Right',
                40: 'Down',
                42: 'Print Screen',
                45: 'Insert',
                46: 'Delete',

                48: '0',
                49: '1',
                50: '2',
                51: '3',
                52: '4',
                53: '5',
                54: '6',
                55: '7',
                56: '8',
                57: '9',

                65: 'A',
                66: 'B',
                67: 'C',
                68: 'D',
                69: 'E',
                70: 'F',
                71: 'G',
                72: 'H',
                73: 'I',
                74: 'J',
                75: 'K',
                76: 'L',
                77: 'M',
                78: 'N',
                79: 'O',
                80: 'P',
                81: 'Q',
                82: 'R',
                83: 'S',
                84: 'T',
                85: 'U',
                86: 'V',
                87: 'W',
                88: 'X',
                89: 'Y',
                90: 'Z',

                91: 'Windows',
                93: 'Right Click',

                96: 'Numpad 0',
                97: 'Numpad 1',
                98: 'Numpad 2',
                99: 'Numpad 3',
                100: 'Numpad 4',
                101: 'Numpad 5',
                102: 'Numpad 6',
                103: 'Numpad 7',
                104: 'Numpad 8',
                105: 'Numpad 9',
                106: 'Numpad *',
                107: 'Numpad +',
                109: 'Numpad -',
                110: 'Numpad .',
                111: 'Numpad /',

                112: 'F1',
                113: 'F2',
                114: 'F3',
                115: 'F4',
                116: 'F5',
                117: 'F6',
                118: 'F7',
                119: 'F8',
                120: 'F9',
                121: 'F10',
                122: 'F11',
                123: 'F12',

                144: 'Num Lock',
                145: 'Scroll Lock',
                182: 'My Computer',
                183: 'My Calculator',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: "'",
            };
            /**
             * @desc ??????keycode????????????
             * @param  {Number} keycode
             * @return {String}
             */
            function getKeyName(keycode) {
                if (keyCodeMap[keycode]) {
                    return keyCodeMap[keycode];
                } else {
                    console.log('Unknow Key(Key Code:' + keycode + ')');
                    return '';
                }
            }

            module.exports = getKeyName;

            /***/
        },
        /* 22 */
        /***/ function (module, exports) {
            var _typeof =
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
                    ? function (obj) {
                          return typeof obj;
                      }
                    : function (obj) {
                          return obj &&
                              typeof Symbol === 'function' &&
                              obj.constructor === Symbol &&
                              obj !== Symbol.prototype
                              ? 'symbol'
                              : typeof obj;
                      };

            /**
             * @desc deep Clone???suport common data types
             * @param {Any} values
             * @return {Any}
             */
            function deepClone(values) {
                var copy;

                // Handle the 3 simple types, and null or undefined
                if (
                    null == values ||
                    'object' !=
                        (typeof values === 'undefined'
                            ? 'undefined'
                            : _typeof(values))
                )
                    return values;

                // Handle Date
                if (values instanceof Date) {
                    copy = new Date();
                    copy.setTime(values.getTime());
                    return copy;
                }

                // Handle Array
                if (values instanceof Array) {
                    copy = [];
                    for (var i = 0, len = values.length; i < len; i++) {
                        copy[i] = deepClone(values[i]);
                    }
                    return copy;
                }

                // Handle Object
                if (values instanceof Object) {
                    copy = {};
                    for (var attr in values) {
                        if (values.hasOwnProperty(attr))
                            copy[attr] = deepClone(values[attr]);
                    }
                    return copy;
                }

                throw new Error(
                    "Unable to copy values! Its type isn't supported."
                );
            }

            module.exports = deepClone;

            /***/
        },
        /* 23 */
        /***/ function (module, exports) {
            var _typeof =
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
                    ? function (obj) {
                          return typeof obj;
                      }
                    : function (obj) {
                          return obj &&
                              typeof Symbol === 'function' &&
                              obj.constructor === Symbol &&
                              obj !== Symbol.prototype
                              ? 'symbol'
                              : typeof obj;
                      };

            /**
             *
             * @desc   ??????`obj`????????????
             * @param  {Object} obj
             * @return {Boolean}
             */
            function isEmptyObject(obj) {
                if (
                    !obj ||
                    (typeof obj === 'undefined'
                        ? 'undefined'
                        : _typeof(obj)) !== 'object' ||
                    Array.isArray(obj)
                )
                    return false;
                return !Object.keys(obj).length;
            }

            module.exports = isEmptyObject;

            /***/
        },
        /* 24 */
        /***/ function (module, exports) {
            /**
             *
             * @desc ??????????????????
             * @return {String}
             */
            function randomColor() {
                return (
                    '#' +
                    (
                        '00000' +
                        ((Math.random() * 0x1000000) << 0).toString(16)
                    ).slice(-6)
                );
            }

            module.exports = randomColor;

            /***/
        },
        /* 25 */
        /***/ function (module, exports) {
            /**
             *
             * @desc ??????????????????[min, max]????????????
             * @param  {Number} min
             * @param  {Number} max
             * @return {Number}
             */
            function randomNum(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            module.exports = randomNum;

            /***/
        },
        /* 26 */
        /***/ function (module, exports) {
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

            /***/
        },
        /* 27 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   determain whether the str is a Chinese mobile telephone number
             * @param  {String|Number} str
             * @return {Boolean}
             */
            function isChinesePhoneNum(str) {
                return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
            }

            module.exports = isChinesePhoneNum;

            /***/
        },
        /* 28 */
        /***/ function (module, exports) {
            /**
             *
             * @desc Determine whether str is hexadecimal rgb or rgba
             * @param  {String}  str
             * @return {Boolean}
             */
            function isColor(str) {
                return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
                    str
                );
            }

            module.exports = isColor;

            /***/
        },
        /* 29 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   Determine whether str is a email
             * @param  {String}  str
             * @return {Boolean}
             */
            function isEmail(str) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    str
                );
            }

            module.exports = isEmail;

            /***/
        },
        /* 30 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   Determine whether str is a Url
             * @param  {String} str
             * @return {Boolean}
             */
            function isUrl(str) {
                return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                    str
                );
            }

            module.exports = isUrl;

            /***/
        },
        /* 31 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   ??????????????????
             * @param  {Number} n
             * @return {String}
             */
            function digitUppercase(n) {
                var fraction = ['???', '???'];
                var digit = [
                    '???',
                    '???',
                    '???',
                    '???',
                    '???',
                    '???',
                    '???',
                    '???',
                    '???',
                    '???',
                ];
                var unit = [
                    ['???', '???', '???'],
                    ['', '???', '???', '???'],
                ];
                var head = n < 0 ? '???' : '';
                n = Math.abs(n);
                var s = '';
                for (var i = 0; i < fraction.length; i++) {
                    s += (
                        digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] +
                        fraction[i]
                    ).replace(/???./, '');
                }
                s = s || '???';
                n = Math.floor(n);
                for (var i = 0; i < unit[0].length && n > 0; i++) {
                    var p = '';
                    for (var j = 0; j < unit[1].length && n > 0; j++) {
                        p = digit[n % 10] + unit[1][j] + p;
                        n = Math.floor(n / 10);
                    }
                    s =
                        p.replace(/(???.)*???$/, '').replace(/^$/, '???') +
                        unit[0][i] +
                        s;
                }
                return (
                    head +
                    s
                        .replace(/(???.)*??????/, '???')
                        .replace(/(???.)+/g, '???')
                        .replace(/^???$/, '?????????')
                );
            }

            module.exports = digitUppercase;

            /***/
        },
        /* 32 */
        /***/ function (module, exports) {
            /**
             *
             * @desc ???????????????????????????webP????????????
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

            /***/
        },
        /* 33 */
        /***/ function (module, exports) {
            /**
             * @desc   ?????????${startTime}????????????????????????
             * @param  {Date} startTime
             * @return {String}
             */
            function formatPassTime(startTime) {
                var currentTime = Date.parse(new Date()),
                    time = currentTime - startTime,
                    day = parseInt(time / (1000 * 60 * 60 * 24)),
                    hour = parseInt(time / (1000 * 60 * 60)),
                    min = parseInt(time / (1000 * 60)),
                    month = parseInt(day / 30),
                    year = parseInt(month / 12);
                if (year) return year + '??????';
                if (month) return month + '?????????';
                if (day) return day + '??????';
                if (hour) return hour + '?????????';
                if (min) return min + '?????????';
                else return '??????';
            }

            module.exports = formatPassTime;

            /***/
        },
        /* 34 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   ??????????????????${endTime}???????????????
             * @param  {Date} endTime
             * @return {String}
             */
            function formatRemainTime(endTime) {
                var startDate = new Date(); //????????????
                var endDate = new Date(endTime); //????????????
                var t = endDate.getTime() - startDate.getTime(); //?????????
                var d = 0,
                    h = 0,
                    m = 0,
                    s = 0;
                if (t >= 0) {
                    d = Math.floor(t / 1000 / 3600 / 24);
                    h = Math.floor((t / 1000 / 60 / 60) % 24);
                    m = Math.floor((t / 1000 / 60) % 60);
                    s = Math.floor((t / 1000) % 60);
                }
                return d + '??? ' + h + '?????? ' + m + '?????? ' + s + '???';
            }

            module.exports = formatRemainTime;

            /***/
        },
        /* 35 */
        /***/ function (module, exports) {
            /**
             *
             * @desc ???????????????
             * @param {Number} year
             * @returns {Boolean}
             */

            function isLeapYear(year) {
                if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
                    return true;
                }
                return false;
            }

            module.exports = isLeapYear;

            /***/
        },
        /* 36 */
        /***/ function (module, exports) {
            /**
             * @desc   ????????????????????????
             * @param  {Date} date1
             * @param  {Date} date2 ???????????????????????????
             * @return {Boolean}
             */
            function isSameDay(date1, date2) {
                if (!date2) {
                    date2 = new Date();
                }
                var date1_year = date1.getFullYear(),
                    date1_month = date1.getMonth() + 1,
                    date1_date = date1.getDate();
                var date2_year = date2.getFullYear(),
                    date2_month = date2.getMonth() + 1,
                    date2_date = date2.getDate();

                return (
                    date1_date === date2_date &&
                    date1_month === date2_month &&
                    date1_year === date2_year
                );
            }

            module.exports = isSameDay;

            /***/
        },
        /* 37 */
        /***/ function (module, exports) {
            /**
             * @desc ????????????????????????????????????
             * @param {Date} time
             * @return {Number}
             */
            function monthDays(time) {
                time = new Date(time);
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                return new Date(year, month, 0).getDate();
            }
            module.exports = monthDays;

            /***/
        },
        /* 38 */
        /***/ function (module, exports) {
            /**
             * @desc ${startTime - endTime}???????????????,startTime??????endTime???????????????0
             * @param { Date | String } startTime
             * @param { Date | String } endTime
             * @returns { Object } { d, h, m, s } ??? ??? ??? ???
             */
            function timeLeft(startTime, endTime) {
                if (!startTime || !endTime) {
                    return;
                }
                var startDate, endDate;
                if (startTime instanceof Date) {
                    startDate = startTime;
                } else {
                    startDate = new Date(startTime.replace(/-/g, '/')); //????????????
                }
                if (endTime instanceof Date) {
                    endDate = endTime;
                } else {
                    endDate = new Date(endTime.replace(/-/g, '/')); //????????????
                }
                var t = endDate.getTime() - startDate.getTime();
                var d = 0,
                    h = 0,
                    m = 0,
                    s = 0;
                if (t >= 0) {
                    d = Math.floor(t / 1000 / 3600 / 24);
                    h = Math.floor((t / 1000 / 60 / 60) % 24);
                    m = Math.floor((t / 1000 / 60) % 60);
                    s = Math.floor((t / 1000) % 60);
                }
                return { d: d, h: h, m: m, s: s };
            }

            module.exports = timeLeft;

            /***/
        },
        /* 39 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   parse query string to object
             * @param  {String} url  default: window.location.href
             * @return {Object}
             */
            function parseQueryString(url) {
                url = !url ? window.location.href : url;
                if (url.indexOf('?') === -1) {
                    return {};
                }
                var search =
                    url[0] === '?'
                        ? url.substr(1)
                        : url.substring(url.lastIndexOf('?') + 1);
                if (search === '') {
                    return {};
                }
                search = search.split('&');
                var query = {};
                for (var i = 0; i < search.length; i++) {
                    var pair = search[i].split('=');
                    query[decodeURIComponent(pair[0])] = decodeURIComponent(
                        pair[1] || ''
                    );
                }
                return query;
            }

            module.exports = parseQueryString;

            /***/
        },
        /* 40 */
        /***/ function (module, exports) {
            /**
             *
             * @desc   stringfy query string
             * @param  {Object} obj
             * @return {String}
             */
            function stringfyQueryString(obj) {
                if (!obj) return '';
                var pairs = [];

                for (var key in obj) {
                    var value = obj[key];

                    if (value instanceof Array) {
                        for (var i = 0; i < value.length; ++i) {
                            pairs.push(
                                encodeURIComponent(key + '[' + i + ']') +
                                    '=' +
                                    encodeURIComponent(value[i])
                            );
                        }
                        continue;
                    }
                    pairs.push(
                        encodeURIComponent(key) +
                            '=' +
                            encodeURIComponent(obj[key])
                    );
                }

                return pairs.join('&');
            }

            module.exports = stringfyQueryString;

            /***/
        },
        /******/
    ]
);
