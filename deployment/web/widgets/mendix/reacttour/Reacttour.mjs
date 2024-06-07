import * as React from 'react';
import React__default, { useState, PureComponent, useRef, useContext, useLayoutEffect, createElement, createRef, Component, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Copyright (c) 2012 The Chromium Authors, Vladimirs. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * focus-outline-manager
 *
 * Watch users keyboard input and manage the focus outline visibility
 */

/**
 * The class name to set on the document element.
 * @const
 */
var CLASS_NAME = 'focus-outline-hidden';

/**
 * This class sets a CSS class name on the HTML element when a user presses the
 * tab key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-hidden *:focus {
 *     outline: none;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to it.
 *
 * @constructor
 */
function FocusOutlineManager() {
  var that = this;
  document.addEventListener('keydown', function (e) {
    that.focusByKeyboard = true;
  }, true);
  document.addEventListener('mousedown', function (e) {
    that.focusByKeyboard = false;
  }, true);
  document.addEventListener('focus', function (event) {
    // Update visibility only when focus is actually changed.
    that.updateVisibility();
  }, true);
  document.addEventListener('focusout', function (event) {
    window.setTimeout(function () {
      if (!document.hasFocus()) {
        that.focusByKeyboard = true;
        that.updateVisibility();
      }
    }, 0);
  });
  this.updateVisibility();
}
FocusOutlineManager.prototype = {
  /**
   * Whether focus change is triggered by TAB key.
   * @type {boolean}
   * @private
   */
  focusByKeyboard: true,
  updateVisibility: function () {
    this.hidden = !this.focusByKeyboard;
  },
  /**
   * Whether the focus outline should be hidden.
   * @type {boolean}
   */
  set hidden(hidden) {
    document.documentElement.classList.toggle(CLASS_NAME, hidden);
  },
  get hidden() {
    return document.documentElement.classList.contains(CLASS_NAME);
  }
};
new FocusOutlineManager();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

	  var hasOwn = {}.hasOwnProperty;
	  function classNames() {
	    var classes = [];
	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;
	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);
	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString === Object.prototype.toString) {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        } else {
	          classes.push(arg.toString());
	        }
	      }
	    }
	    return classes.join(' ');
	  }
	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
} (classnames));

var cn = classnames.exports;

var dist = {exports: {}};

var scrollSmooth$1 = {exports: {}};

var tools = {};

Object.defineProperty(tools, "__esModule", {
  value: true
});
var easeFunctions = tools.easeFunctions = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
var isNumeric = tools.isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
tools.setPosition = function setPosition(begin, end, elapsed, duration) {
  var ease = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOutCubic';
  return elapsed > duration ? end : begin + (end - begin) * easeFunctions[ease](elapsed / duration);
};
tools.calcEndPoint = function calcEndPoint(target) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (isNumeric(target)) {
    return parseInt(target) + offset;
  }
  var y = context === window || context === document.documentElement ? window.pageYOffset : context.scrollTop - context.getBoundingClientRect().top;
  var distance = target.nodeName.toLowerCase() === 'html' ? -y : target.getBoundingClientRect().top + y;
  return distance + offset;
};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	var _tools = tools;
	exports.default = function (target) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$duration = _ref.duration,
	    duration = _ref$duration === undefined ? 500 : _ref$duration,
	    _ref$context = _ref.context,
	    context = _ref$context === undefined ? window : _ref$context,
	    _ref$offset = _ref.offset,
	    offset = _ref$offset === undefined ? 0 : _ref$offset,
	    _ref$ease = _ref.ease,
	    ease = _ref$ease === undefined ? "easeInOutCubic" : _ref$ease,
	    callback = _ref.callback;
	  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;
	  var start = context.scrollTop !== null && context.scrollTop !== undefined ? context.scrollTop : window.pageYOffset;
	  var end = (0, _tools.calcEndPoint)(target, context, offset);
	  var clock = performance.now();
	  var rAF = window.requestAnimationFrame;
	  var tick = function tick() {
	    var elapsed = performance.now() - clock;
	    var pos = (0, _tools.setPosition)(start, end, elapsed, duration, ease);
	    if (context !== window) {
	      context.scrollTop = pos;
	    } else {
	      window.scroll(0, pos);
	    }
	    if (elapsed > duration) {
	      typeof callback === "function" && callback(target);
	    } else {
	      rAF(tick);
	    }
	  };
	  tick();
	};
	module.exports = exports["default"];
} (scrollSmooth$1, scrollSmooth$1.exports));

var anchorScroll = {exports: {}};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};
	var _scrollSmooth = scrollSmooth$1.exports;
	var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	exports.default = function () {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref$query = _ref.query,
	    query = _ref$query === undefined ? '[href^="#"]:not([href="#"]' : _ref$query,
	    _ref$match = _ref.match,
	    match = _ref$match === undefined ? function (target) {
	      return document.getElementById(target.hash.substring(1));
	    } : _ref$match,
	    _ref$hashChange = _ref.hashChange,
	    hashChange = _ref$hashChange === undefined ? true : _ref$hashChange,
	    scrollSmoothConfig = _ref.scrollSmoothConfig;
	  var links = document.querySelectorAll(query);
	  var handler = function handler(e) {
	    e.preventDefault();
	    var dest = match(e.target);
	    if (!dest) return;
	    if (hashChange) {
	      history.replaceState(null, null, '#' + dest.id);
	    }
	    (0, _scrollSmooth2.default)(dest, _extends({}, scrollSmoothConfig));
	  };
	  Array.from(links).map(function (link) {
	    link.addEventListener('click', handler, false);
	  });
	};
	module.exports = exports['default'];
} (anchorScroll, anchorScroll.exports));

var observe = {exports: {}};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	exports.default = function () {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref$activeClass = _ref.activeClass,
	    activeClass = _ref$activeClass === undefined ? 'active' : _ref$activeClass,
	    _ref$query = _ref.query,
	    query = _ref$query === undefined ? '[href^="#"]:not([href="#"]):not([href="#0"])' : _ref$query,
	    _ref$threshold = _ref.threshold,
	    threshold = _ref$threshold === undefined ? [0.25, 0.5, 0.75] : _ref$threshold,
	    _ref$detectType = _ref.detectType,
	    detectType = _ref$detectType === undefined ? 'max' : _ref$detectType;
	  var options = {
	    threshold: threshold
	  };
	  var removeClass = function removeClass(node) {
	    return node.classList.remove(activeClass);
	  };
	  var addClass = function addClass(node) {
	    return node.classList.add(activeClass);
	  };
	  var unsetAllActives = function unsetAllActives() {
	    document.querySelectorAll('.' + activeClass).forEach(removeClass);
	  };
	  var setActive = function setActive(activeNode) {
	    unsetAllActives();
	    addClass(document.querySelector('a[href="#' + activeNode.id + '"]'));
	  };
	  var callback = function callback(entries) {
	    entries.forEach(function (entry) {
	      if (entry.intersectionRatio >= Math[detectType].apply(Math, _toConsumableArray(threshold))) {
	        setActive(entry.target);
	      }
	    });
	  };
	  var links = document.querySelectorAll(query);
	  var observer = new IntersectionObserver(callback, options);
	  var observeTarget = function observeTarget(link) {
	    var target = document.querySelector('#' + link.hash.slice(1));
	    observer.observe(target);
	  };
	  links.forEach(observeTarget);
	};
	module.exports = exports['default'];
} (observe, observe.exports));

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _scrollSmooth = scrollSmooth$1.exports;
	var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);
	var _tools = tools;
	var _anchorScroll = anchorScroll.exports;
	var _anchorScroll2 = _interopRequireDefault(_anchorScroll);
	var _observe = observe.exports;
	var _observe2 = _interopRequireDefault(_observe);
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	exports.default = {
	  to: _scrollSmooth2.default,
	  calcEndPoint: _tools.calcEndPoint,
	  anchorScroll: _anchorScroll2.default,
	  observe: _observe2.default
	};
	module.exports = exports['default'];
} (dist, dist.exports));

var scrollSmooth = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

var scrollparent = {exports: {}};

(function (module) {
	(function (root, factory) {
	  if (module.exports) {
	    module.exports = factory();
	  } else {
	    root.Scrollparent = factory();
	  }
	})(commonjsGlobal, function () {
	  var regex = /(auto|scroll)/;
	  var parents = function (node, ps) {
	    if (node.parentNode === null) {
	      return ps;
	    }
	    return parents(node.parentNode, ps.concat([node]));
	  };
	  var style = function (node, prop) {
	    return getComputedStyle(node, null).getPropertyValue(prop);
	  };
	  var overflow = function (node) {
	    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
	  };
	  var scroll = function (node) {
	    return regex.test(overflow(node));
	  };
	  var scrollParent = function (node) {
	    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
	      return;
	    }
	    var ps = parents(node.parentNode, []);
	    for (var i = 0; i < ps.length; i += 1) {
	      if (scroll(ps[i])) {
	        return ps[i];
	      }
	    }
	    return document.scrollingElement || document.documentElement;
	  };
	  return scrollParent;
	});
} (scrollparent));

var Scrollparent = scrollparent.exports;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var propTypes$3 = {exports: {}};

var reactIs$4 = {exports: {}};

var reactIs_development$3 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$3;

function requireReactIs_development$3 () {
	if (hasRequiredReactIs_development$3) return reactIs_development$3;
	hasRequiredReactIs_development$3 = 1;

	{
	  (function () {

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	    // (unstable) APIs that have been removed. Can we remove the symbols?

	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	    function isValidElementType(type) {
	      return typeof type === 'string' || typeof type === 'function' ||
	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_ASYNC_MODE_TYPE:
	              case REACT_CONCURRENT_MODE_TYPE:
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    } // AsyncMode is deprecated along with isAsyncMode

	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	        }
	      }
	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	    }
	    function isConcurrentMode(object) {
	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    reactIs_development$3.AsyncMode = AsyncMode;
	    reactIs_development$3.ConcurrentMode = ConcurrentMode;
	    reactIs_development$3.ContextConsumer = ContextConsumer;
	    reactIs_development$3.ContextProvider = ContextProvider;
	    reactIs_development$3.Element = Element;
	    reactIs_development$3.ForwardRef = ForwardRef;
	    reactIs_development$3.Fragment = Fragment;
	    reactIs_development$3.Lazy = Lazy;
	    reactIs_development$3.Memo = Memo;
	    reactIs_development$3.Portal = Portal;
	    reactIs_development$3.Profiler = Profiler;
	    reactIs_development$3.StrictMode = StrictMode;
	    reactIs_development$3.Suspense = Suspense;
	    reactIs_development$3.isAsyncMode = isAsyncMode;
	    reactIs_development$3.isConcurrentMode = isConcurrentMode;
	    reactIs_development$3.isContextConsumer = isContextConsumer;
	    reactIs_development$3.isContextProvider = isContextProvider;
	    reactIs_development$3.isElement = isElement;
	    reactIs_development$3.isForwardRef = isForwardRef;
	    reactIs_development$3.isFragment = isFragment;
	    reactIs_development$3.isLazy = isLazy;
	    reactIs_development$3.isMemo = isMemo;
	    reactIs_development$3.isPortal = isPortal;
	    reactIs_development$3.isProfiler = isProfiler;
	    reactIs_development$3.isStrictMode = isStrictMode;
	    reactIs_development$3.isSuspense = isSuspense;
	    reactIs_development$3.isValidElementType = isValidElementType;
	    reactIs_development$3.typeOf = typeOf;
	  })();
	}
	return reactIs_development$3;
}

var hasRequiredReactIs$1;

function requireReactIs$1 () {
	if (hasRequiredReactIs$1) return reactIs$4.exports;
	hasRequiredReactIs$1 = 1;
	(function (module) {

		{
		  module.exports = requireReactIs_development$3();
		}
} (reactIs$4));
	return reactIs$4.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;

	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }
	  return Object(val);
	}
	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    }

	    // Detect buggy property enumeration order in older V8 versions.

	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	    test1[5] = 'de';
	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test2 = {};
	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }
	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });
	    if (order2.join('') !== '0123456789') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });
	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }
	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}
	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;
	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);
	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }
	  return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1$1;
var hasRequiredReactPropTypesSecret$1;

function requireReactPropTypesSecret$1 () {
	if (hasRequiredReactPropTypesSecret$1) return ReactPropTypesSecret_1$1;
	hasRequiredReactPropTypesSecret$1 = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	ReactPropTypesSecret_1$1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1$1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1$1;
var hasRequiredCheckPropTypes$1;

function requireCheckPropTypes$1 () {
	if (hasRequiredCheckPropTypes$1) return checkPropTypes_1$1;
	hasRequiredCheckPropTypes$1 = 1;

	var printWarning = function () {};
	{
	  var ReactPropTypesSecret = requireReactPropTypesSecret$1();
	  var loggedTypeFailures = {};
	  var has = requireHas();
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {/**/}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	          var stack = getStack ? getStack() : '';
	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function () {
	  {
	    loggedTypeFailures = {};
	  }
	};
	checkPropTypes_1$1 = checkPropTypes;
	return checkPropTypes_1$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers$1;
var hasRequiredFactoryWithTypeCheckers$1;

function requireFactoryWithTypeCheckers$1 () {
	if (hasRequiredFactoryWithTypeCheckers$1) return factoryWithTypeCheckers$1;
	hasRequiredFactoryWithTypeCheckers$1 = 1;

	var ReactIs = requireReactIs$1();
	var assign = requireObjectAssign();
	var ReactPropTypesSecret = requireReactPropTypesSecret$1();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes$1();
	var printWarning = function () {};
	{
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	factoryWithTypeCheckers$1 = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data : {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	    return chainedCheckType;
	  }
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
	          expectedType: expectedType
	        });
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
	  }
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	        return true;
	      default:
	        return false;
	    }
	  }
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs$1 = requireReactIs$1();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess$1 = true;
  propTypes$3.exports = requireFactoryWithTypeCheckers$1()(ReactIs$1.isElement, throwOnDirectAccess$1);
}

var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
  var ref = useState(function () {
    return {
      // value
      value: initialValue,
      // last callback
      callback: callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  // update callback
  ref.callback = callback;
  return ref.facade;
}

var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue);
    });
  });
  // handle refs changes - added or removed
  React.useLayoutEffect(function () {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function (ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function (ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};
({
  children: propTypes$3.exports.node
}) ;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function () {
      if (assigned) {
        throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function (data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function () {
        buffer = buffer.filter(function (x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function (cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function (x) {
          return cb(x);
        },
        filter: function () {
          return buffer;
        }
      };
    },
    assignMedium: function (cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function () {
        var cbs = pendingQueue;
        pendingQueue = [];
        cbs.forEach(cb);
      };
      var cycle = function () {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function (x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function (filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({
    async: true,
    ssr: false
  }, options);
  return medium;
}

var mediumFocus = createMedium({}, function (_ref) {
  var target = _ref.target,
    currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true
});

var emptyArray = [];
var FocusLock = /*#__PURE__*/React.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _React$useState = React.useState(),
    realObserved = _React$useState[0],
    setObserved = _React$useState[1];
  var observed = React.useRef();
  var isActive = React.useRef(false);
  var originalFocusedElement = React.useRef(null);
  var children = props.children,
    disabled = props.disabled,
    noFocusGuards = props.noFocusGuards,
    persistentFocus = props.persistentFocus,
    crossFrame = props.crossFrame,
    autoFocus = props.autoFocus,
    allowTextSelection = props.allowTextSelection,
    group = props.group,
    className = props.className,
    whiteList = props.whiteList,
    _props$shards = props.shards,
    shards = _props$shards === void 0 ? emptyArray : _props$shards,
    _props$as = props.as,
    Container = _props$as === void 0 ? 'div' : _props$as,
    _props$lockProps = props.lockProps,
    containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
    SideCar = props.sideCar,
    shouldReturnFocus = props.returnFocus,
    onActivationCallback = props.onActivation,
    onDeactivationCallback = props.onDeactivation;
  var _React$useState2 = React.useState({}),
    id = _React$useState2[0]; // SIDE EFFECT CALLBACKS

  var onActivation = React.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React.useCallback(function () {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = React.useCallback(function (allowDefer) {
    var current = originalFocusedElement.current;
    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;
      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = React.useCallback(function (event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = React.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }
    React.useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }
  var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && 'disabled', _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasLeadingGuards && [/*#__PURE__*/React.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }), /*#__PURE__*/
  // nearest focus guard
  React.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: hiddenGuard
  }) // first tabbed element guard
  ], !disabled && /*#__PURE__*/React.createElement(SideCar, {
    id: id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), /*#__PURE__*/React.createElement(Container, _extends({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/React.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = {
  children: propTypes$3.exports.node,
  disabled: propTypes$3.exports.bool,
  returnFocus: propTypes$3.exports.oneOfType([propTypes$3.exports.bool, propTypes$3.exports.object]),
  noFocusGuards: propTypes$3.exports.bool,
  allowTextSelection: propTypes$3.exports.bool,
  autoFocus: propTypes$3.exports.bool,
  persistentFocus: propTypes$3.exports.bool,
  crossFrame: propTypes$3.exports.bool,
  group: propTypes$3.exports.string,
  className: propTypes$3.exports.string,
  whiteList: propTypes$3.exports.func,
  shards: propTypes$3.exports.arrayOf(propTypes$3.exports.any),
  as: propTypes$3.exports.oneOfType([propTypes$3.exports.string, propTypes$3.exports.func, propTypes$3.exports.object]),
  lockProps: propTypes$3.exports.object,
  onActivation: propTypes$3.exports.func,
  onDeactivation: propTypes$3.exports.func,
  sideCar: propTypes$3.exports.any.isRequired
} ;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}

function _defineProperty$1(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }
    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  return function wrap(WrappedComponent) {
    {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }
    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);
      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };
      var _proto = SideEffect.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };
      return SideEffect;
    }(PureComponent);
    _defineProperty$1(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}

var toArray = function (a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};
var asArray = function (a) {
  return Array.isArray(a) ? a : [a];
};

var filterNested = function (nodes) {
  var contained = new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function (_, index) {
    return !contained.has(index);
  });
};
var getTopParent = function (node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};
var getAllAffectedNodes = function (node) {
  var nodes = asArray(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[" + FOCUS_GROUP + "=\"" + group + "\"]:not([" + FOCUS_DISABLED + "=\"disabled\"])"))) : [currentNode]);
    return acc;
  }, []);
};

var isElementHidden = function (node) {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};
var isVisibleUncached = function (node, checkParent) {
  return !node || node === document || node && node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(node) && checkParent(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node.parentNode.host : node.parentNode);
};
var isVisibleCached = function (visibilityCache, node) {
  var cached = visibilityCache.get(node);
  if (cached !== undefined) {
    return cached;
  }
  var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
  visibilityCache.set(node, result);
  return result;
};
var notHiddenInput = function (node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};
var isGuard = function (node) {
  return Boolean(node && node.dataset && node.dataset.focusGuard);
};
var isNotAGuard = function (node) {
  return !isGuard(node);
};
var isDefined = function (x) {
  return Boolean(x);
};

var tabSort = function (a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;
  if (tabDiff) {
    if (!a.tabIndex) {
      return 1;
    }
    if (!b.tabIndex) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var orderByTabIndex = function (nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

var tabbables = ['button:enabled', 'select:enabled', 'textarea:enabled', 'input:enabled', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[tabindex]', '[contenteditable]', '[autofocus]'];

var queryTabbables = tabbables.join(',');
var queryGuardTabbables = queryTabbables + ", [data-focus-guard]";
var getFocusables = function (parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(toArray(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)), parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};
var getParentAutofocusables = function (parent) {
  var parentFocus = parent.querySelectorAll("[" + FOCUS_AUTO + "]");
  return toArray(parentFocus).map(function (node) {
    return getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

var filterFocusable = function (nodes, visibilityCache) {
  return toArray(nodes).filter(function (node) {
    return isVisibleCached(visibilityCache, node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function (topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function (topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};

var getParents = function (node, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function (nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function (entries, visibilityCache) {
  return entries.reduce(function (acc, node) {
    return acc.concat(parentAutofocusables(node, visibilityCache));
  }, []);
};

var getFocusabledIn = function (topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var visibilityCache = new Map();
  var outerNodes = getTabbableNodes([commonParent], visibilityCache, true);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function (_a) {
    var node = _a.node;
    return isNotAGuard(node);
  }).map(function (_a) {
    var node = _a.node;
    return node;
  });
  return outerNodes.map(function (_a) {
    var node = _a.node,
      index = _a.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var focusInFrame = function (frame) {
  return frame === document.activeElement;
};
var focusInsideIframe = function (topNode) {
  return Boolean(toArray(topNode.querySelectorAll('iframe')).some(function (node) {
    return focusInFrame(node);
  }));
};
var focusInside = function (topNode) {
  var activeElement = document && document.activeElement;
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInsideIframe(node);
  }, false);
};

var focusIsHidden = function () {
  return document && toArray(document.querySelectorAll("[" + FOCUS_ALLOW + "]")).some(function (node) {
    return node.contains(document.activeElement);
  });
};

var isRadio = function (node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};
var findSelectedRadio = function (node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};
var correctNode = function (node, nodes) {
  if (isRadio(node) && node.name) {
    return findSelectedRadio(node, nodes);
  }
  return node;
};
var correctNodes = function (nodes) {
  var resultSet = new Set();
  nodes.forEach(function (node) {
    return resultSet.add(correctNode(node, nodes));
  });
  return nodes.filter(function (node) {
    return resultSet.has(node);
  });
};

var pickFirstFocus = function (nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function (nodes, index) {
  if (nodes.length > 1) {
    return nodes.indexOf(correctNode(nodes[index], nodes));
  }
  return index;
};

var NEW_FOCUS = 'NEW_FOCUS';
var newFocus = function (innerNodes, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }
  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var correctedIndexDiff = correctedNodes.indexOf(activeElement) - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
  var returnFirstNode = pickFocusable(innerNodes, 0);
  var returnLastNode = pickFocusable(innerNodes, cnt - 1);
  if (activeIndex === -1 || lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return undefined;
};

var findAutoFocused = function (autoFocusables) {
  return function (node) {
    return node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};
var reorderNodes = function (srcNodes, dstNodes) {
  var remap = new Map();
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(isDefined);
};
var getFocusMerge = function (topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = new Map();
  var anyFocusable = getAllTabbableNodes(entries, visibilityCache);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function (_a) {
    var node = _a.node;
    return isNotAGuard(node);
  });
  if (!innerElements[0]) {
    innerElements = anyFocusable;
    if (!innerElements[0]) {
      return undefined;
    }
  }
  var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function (_a) {
    var node = _a.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_a) {
    var node = _a.node;
    return node;
  });
  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var autoFocusable = anyFocusable.map(function (_a) {
      var node = _a.node;
      return node;
    }).filter(findAutoFocused(allParentAutofocusables(entries, visibilityCache)));
    return {
      node: autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(innerNodes)
    };
  }
  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

var focusOn = function (target) {
  target.focus();
  if ('contentWindow' in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function (topNode, lastNode) {
  var focusable = getFocusMerge(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
};

function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
    setImmediate = _window.setImmediate;
  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var defaultWhitelist = function defaultWhitelist() {
  return true;
};
var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};
var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho

  return focusWasOutsideWindow === 'meanwhile';
};
var activateTrap = function activateTrap() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
      observed = _lastActiveTrap.observed,
      persistentFocus = _lastActiveTrap.persistentFocus,
      autoFocus = _lastActiveTrap.autoFocus,
      shards = _lastActiveTrap.shards,
      crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = setFocus(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }
      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedIndex = allNodes.map(function (_ref) {
          var node = _ref.node;
          return node;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
              node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher() {
  return null;
};
({
  children: propTypes$3.exports.node.isRequired
}) ;
var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
};
var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};
var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};
function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }
    activateTrap();
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium

mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: setFocus,
    focusInside: focusInside
  });
});
var FocusTrap = withSideEffect(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = /*#__PURE__*/React.forwardRef(function FocusLockUICombination(props, ref) {
  return /*#__PURE__*/React.createElement(FocusLock, _extends({
    sideCar: FocusTrap,
    ref: ref
  }, props));
});
var _ref = FocusLock.propTypes || {};
  _ref.sideCar;
  var propTypes$2 = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = propTypes$2 ;

({
  children: propTypes$3.exports.node.isRequired,
  disabled: propTypes$3.exports.bool,
  className: propTypes$3.exports.string
}) ;

({
  children: propTypes$3.exports.node.isRequired,
  disabled: propTypes$3.exports.bool,
  className: propTypes$3.exports.string
}) ;

({
  children: propTypes$3.exports.node.isRequired,
  className: propTypes$3.exports.string
}) ;

var reactIs$3 = {exports: {}};

var reactIs_development$2 = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$2;

function requireReactIs_development$2 () {
	if (hasRequiredReactIs_development$2) return reactIs_development$2;
	hasRequiredReactIs_development$2 = 1;

	{
	  (function () {

	    // ATTENTION
	    // When adding new symbols to this file,
	    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	    // The Symbol used to tag the ReactElement-like types.
	    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	    var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	    var REACT_MEMO_TYPE = Symbol.for('react.memo');
	    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	    // -----------------------------------------------------------------------------

	    var enableScopeAPI = false; // Experimental Create Event Handle API.
	    var enableCacheElement = false;
	    var enableTransitionTracing = false; // No known bugs, but needs performance testing

	    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	    // stuff. Intended to enable React core members to more easily debug scheduling
	    // issues in DEV builds.

	    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	    var REACT_MODULE_REFERENCE;
	    {
	      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	    }
	    function isValidElementType(type) {
	      if (typeof type === 'string' || typeof type === 'function') {
	        return true;
	      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

	      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	        return true;
	      }
	      if (typeof type === 'object' && type !== null) {
	        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
	        // This needs to include all possible module reference object
	        // types supported by any Flight configuration anywhere since
	        // we don't know which Flight build this will end up being used
	        // with.
	        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	          return true;
	        }
	      }
	      return false;
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	              case REACT_SUSPENSE_LIST_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_SERVER_CONTEXT_TYPE:
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    }
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false;
	    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	        }
	      }
	      return false;
	    }
	    function isConcurrentMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	          hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	        }
	      }
	      return false;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    function isSuspenseList(object) {
	      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	    }
	    reactIs_development$2.ContextConsumer = ContextConsumer;
	    reactIs_development$2.ContextProvider = ContextProvider;
	    reactIs_development$2.Element = Element;
	    reactIs_development$2.ForwardRef = ForwardRef;
	    reactIs_development$2.Fragment = Fragment;
	    reactIs_development$2.Lazy = Lazy;
	    reactIs_development$2.Memo = Memo;
	    reactIs_development$2.Portal = Portal;
	    reactIs_development$2.Profiler = Profiler;
	    reactIs_development$2.StrictMode = StrictMode;
	    reactIs_development$2.Suspense = Suspense;
	    reactIs_development$2.SuspenseList = SuspenseList;
	    reactIs_development$2.isAsyncMode = isAsyncMode;
	    reactIs_development$2.isConcurrentMode = isConcurrentMode;
	    reactIs_development$2.isContextConsumer = isContextConsumer;
	    reactIs_development$2.isContextProvider = isContextProvider;
	    reactIs_development$2.isElement = isElement;
	    reactIs_development$2.isForwardRef = isForwardRef;
	    reactIs_development$2.isFragment = isFragment;
	    reactIs_development$2.isLazy = isLazy;
	    reactIs_development$2.isMemo = isMemo;
	    reactIs_development$2.isPortal = isPortal;
	    reactIs_development$2.isProfiler = isProfiler;
	    reactIs_development$2.isStrictMode = isStrictMode;
	    reactIs_development$2.isSuspense = isSuspense;
	    reactIs_development$2.isSuspenseList = isSuspenseList;
	    reactIs_development$2.isValidElementType = isValidElementType;
	    reactIs_development$2.typeOf = typeOf;
	  })();
	}
	return reactIs_development$2;
}

(function (module) {

	{
	  module.exports = requireReactIs_development$2();
	}
} (reactIs$3));

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;
            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
              }
              if (0 === k) break;
              l++;
            }
            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O;
                }
                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;
                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;
                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;
              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }
              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }
        default:
          z++;
          y = e.charAt(l);
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;
                default:
                  32 !== g && (y = ' ');
              }
              break;
            case 0:
              y = '\\0';
              break;
            case 12:
              y = '\\f';
              break;
            case 11:
              y = '\\v';
              break;
            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;
            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                case 8:
                  111 === K && (E = K);
              }
              break;
            case 58:
              0 === n + b + m && (u = l);
              break;
            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;
            case 91:
              0 === n + b + v && m++;
              break;
            case 93:
              0 === n + b + v && m--;
              break;
            case 41:
              0 === n + b + m && v--;
              break;
            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                v++;
              }
              break;
            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;
                    case 220:
                      t = l, b = 42;
                  }
                  break;
                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }
          0 === b && (f += y);
      }
      K = x;
      x = g;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';
      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);
        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;
          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }
        E = 0;
      }
    }
    return G + p + F;
  }
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b = 0;
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }
        break;
      default:
        var v = b = 0;
        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());
      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ';',
      m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4)) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;
        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;
          case 232:
            b = a.replace(G, 'tb-rl');
            break;
          case 220:
            b = a.replace(G, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + b + a;
      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;
      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;
          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;
          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }
        return a + ';';
      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;
      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          x = w;
      }
    }
    if (x !== c) return x;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;
      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }
    return T;
  }
  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }
  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];
    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }
    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }
  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);

var reactIs$2 = {exports: {}};

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;

	{
	  (function () {

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	    // (unstable) APIs that have been removed. Can we remove the symbols?

	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	    function isValidElementType(type) {
	      return typeof type === 'string' || typeof type === 'function' ||
	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_ASYNC_MODE_TYPE:
	              case REACT_CONCURRENT_MODE_TYPE:
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    } // AsyncMode is deprecated along with isAsyncMode

	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	        }
	      }
	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	    }
	    function isConcurrentMode(object) {
	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    reactIs_development$1.AsyncMode = AsyncMode;
	    reactIs_development$1.ConcurrentMode = ConcurrentMode;
	    reactIs_development$1.ContextConsumer = ContextConsumer;
	    reactIs_development$1.ContextProvider = ContextProvider;
	    reactIs_development$1.Element = Element;
	    reactIs_development$1.ForwardRef = ForwardRef;
	    reactIs_development$1.Fragment = Fragment;
	    reactIs_development$1.Lazy = Lazy;
	    reactIs_development$1.Memo = Memo;
	    reactIs_development$1.Portal = Portal;
	    reactIs_development$1.Profiler = Profiler;
	    reactIs_development$1.StrictMode = StrictMode;
	    reactIs_development$1.Suspense = Suspense;
	    reactIs_development$1.isAsyncMode = isAsyncMode;
	    reactIs_development$1.isConcurrentMode = isConcurrentMode;
	    reactIs_development$1.isContextConsumer = isContextConsumer;
	    reactIs_development$1.isContextProvider = isContextProvider;
	    reactIs_development$1.isElement = isElement;
	    reactIs_development$1.isForwardRef = isForwardRef;
	    reactIs_development$1.isFragment = isFragment;
	    reactIs_development$1.isLazy = isLazy;
	    reactIs_development$1.isMemo = isMemo;
	    reactIs_development$1.isPortal = isPortal;
	    reactIs_development$1.isProfiler = isProfiler;
	    reactIs_development$1.isStrictMode = isStrictMode;
	    reactIs_development$1.isSuspense = isSuspense;
	    reactIs_development$1.isValidElementType = isValidElementType;
	    reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

(function (module) {

	{
	  module.exports = requireReactIs_development$1();
	}
} (reactIs$2));

var reactIs$1 = reactIs$2.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

function y() {
  return (y = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var v = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
    return n;
  },
  g = function (t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !reactIs$3.exports.typeOf(t);
  },
  S = Object.freeze([]),
  w = Object.freeze({});
function E(e) {
  return "function" == typeof e;
}
function b(e) {
  return "string" == typeof e && e || e.displayName || e.name || "Component";
}
function _(e) {
  return e && "string" == typeof e.styledComponentId;
}
var N = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
  C = "undefined" != typeof window && "HTMLElement" in window,
  I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== 'development')),
  P = {},
  O = {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
  } ;
function R() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function (t) {
    e = e.replace(/%[a-z]/, t);
  }), e;
}
function D(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error(R.apply(void 0, [O[e]].concat(n)).trim());
}
var j = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t = e.prototype;
    return t.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, t.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && D(16, "" + e);
        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
        this.groupSizes[e] = 0;
        for (var o = n; o < r; o++) this.tag.deleteRule(n);
      }
    }, t.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
      return t;
    }, e;
  }(),
  T = new Map(),
  x = new Map(),
  k = 1,
  V = function (e) {
    if (T.has(e)) return T.get(e);
    for (; x.has(k);) k++;
    var t = k++;
    return ((0 | t) < 0 || t > 1 << 30) && D(16, "" + t), T.set(e, t), x.set(t, e), t;
  },
  B = function (e) {
    return x.get(e);
  },
  z = function (e, t) {
    t >= k && (k = t + 1), T.set(e, t), x.set(t, e);
  },
  M = "style[" + N + '][data-styled-version="5.3.11"]',
  G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  L = function (e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
  },
  F = function (e, t) {
    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
      var i = n[o].trim();
      if (i) {
        var a = i.match(G);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (z(u, c), L(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
        } else r.push(i);
      }
    }
  },
  Y = function () {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  },
  q = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(N)) return r;
        }
      }(n),
      s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(N, "active"), r.setAttribute("data-styled-version", "5.3.11");
    var i = Y();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  H = function () {
    function e(e) {
      var t = this.element = q(e);
      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          if (o.ownerNode === e) return o;
        }
        D(17);
      }(t), this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return !1;
      }
    }, t.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
  }(),
  $ = function () {
    function e(e) {
      var t = this.element = q(e);
      this.nodes = t.childNodes, this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t),
          r = this.nodes[e];
        return this.element.insertBefore(n, r || null), this.length++, !0;
      }
      return !1;
    }, t.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  W = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  U = C,
  J = {
    isServer: !C,
    useCSSOMInjection: !I
  },
  X = function () {
    function e(e, t, n) {
      void 0 === e && (e = w), void 0 === t && (t = {}), this.options = y({}, J, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && C && U && (U = !1, function (e) {
        for (var t = document.querySelectorAll(M), n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          o && "active" !== o.getAttribute(N) && (F(e, o), o.parentNode && o.parentNode.removeChild(o));
        }
      }(this));
    }
    e.registerId = function (e) {
      return V(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function (t, n) {
      return void 0 === n && (n = !0), new e(y({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function () {
      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new W(o) : r ? new H(o) : new $(o), new j(e)));
      var e, t, n, r, o;
    }, t.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function (e, t) {
      if (V(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, t.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(V(e), n);
    }, t.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function (e) {
      this.getTag().clearGroup(V(e)), this.clearNames(e);
    }, t.clearTag = function () {
      this.tag = void 0;
    }, t.toString = function () {
      return function (e) {
        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
          var s = B(o);
          if (void 0 !== s) {
            var i = e.names.get(s),
              a = t.getGroup(o);
            if (i && a && i.size) {
              var c = N + ".g" + o + '[id="' + s + '"]',
                u = "";
              void 0 !== i && i.forEach(function (e) {
                e.length > 0 && (u += e + ",");
              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
            }
          }
        }
        return r;
      }(this);
    }, e;
  }(),
  Z = /(a)(d)/gi,
  K = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Q(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = K(t % 52) + n;
  return (K(t % 52) + n).replace(Z, "$1-$2");
}
var ee = function (e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  te = function (e) {
    return ee(5381, e);
  };
function ne(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (E(n) && !_(n)) return !1;
  }
  return !0;
}
var re = te("5.3.11"),
  oe = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic = "production" === 'development'  , this.componentId = t, this.baseHash = ee(re, t), this.baseStyle = n, X.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var r = this.componentId,
        o = [];
      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
          var s = _e(this.rules, e, t, n).join(""),
            i = Q(ee(this.baseHash, s) >>> 0);
          if (!t.hasNameForId(r, i)) {
            var a = n(s, "." + i, void 0, r);
            t.insertRules(r, i, a);
          }
          o.push(i), this.staticRulesId = i;
        }
      } else {
        for (var c = this.rules.length, u = ee(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
          var h = this.rules[d];
          if ("string" == typeof h) l += h, (u = ee(u, h + d));else if (h) {
            var p = _e(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
            u = ee(u, f + d), l += f;
          }
        }
        if (l) {
          var m = Q(u >>> 0);
          if (!t.hasNameForId(r, m)) {
            var y = n(l, "." + m, void 0, r);
            t.insertRules(r, m, y);
          }
          o.push(m);
        }
      }
      return o.join(" ");
    }, e;
  }(),
  se = /^\s*\/\/.*$/gm,
  ie = [":", "[", ".", "#"];
function ae(e) {
  var t,
    n,
    r,
    o,
    s = void 0 === e ? w : e,
    i = s.options,
    a = void 0 === i ? w : i,
    c = s.plugins,
    u = void 0 === c ? S : c,
    l = new stylis_min(a),
    d = [],
    p = function (e) {
      function t(t) {
        if (t) try {
          e(t + "}");
        } catch (e) {}
      }
      return function (n, r, o, s, i, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    }(function (e) {
      d.push(e);
    }),
    f = function (e, r, s) {
      return 0 === r && -1 !== ie.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
    };
  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(se, ""),
      u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }
  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, p, function (e) {
    if (-2 === e) {
      var t = d;
      return d = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || D(15), ee(e, t.name);
  }, 5381).toString() : "", m;
}
var ce = React__default.createContext();
  ce.Consumer;
  var le = React__default.createContext(),
  de = (le.Consumer, new X()),
  he = ae();
function pe() {
  return useContext(ce) || de;
}
function fe() {
  return useContext(le) || he;
}
var ye = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        void 0 === t && (t = he);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }, this.toString = function () {
        return D(12, String(n.name));
      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    }
    return e.prototype.getName = function (e) {
      return void 0 === e && (e = he), this.name + e.hash;
    }, e;
  }(),
  ve = /([A-Z])/,
  ge = /([A-Z])/g,
  Se = /^ms-/,
  we = function (e) {
    return "-" + e.toLowerCase();
  };
function Ee(e) {
  return ve.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
}
var be = function (e) {
  return null == e || !1 === e || "" === e;
};
function _e(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = _e(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (be(e)) return "";
  if (_(e)) return "." + e.styledComponentId;
  if (E(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return reactIs$3.exports.isElement(u) && console.warn(b(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _e(u, n, r, o);
  }
  var l;
  return e instanceof ye ? r ? (e.inject(r, o), e.getName(o)) : e : g(e) ? function e(t, n) {
    var r,
      o,
      s = [];
    for (var i in t) t.hasOwnProperty(i) && !be(t[i]) && (Array.isArray(t[i]) && t[i].isCss || E(t[i]) ? s.push(Ee(i) + ":", t[i], ";") : g(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(Ee(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys || r.startsWith("--") ? String(o).trim() : o + "px") + ";"));
    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}
var Ne = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ae(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return E(e) || g(e) ? Ne(_e(v(S, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne(_e(v(e, n)));
}
var Ce = /invalid hook call/i,
  Ie = new Set(),
  Pe = function (e, t) {
    {
      var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
        r = console.error;
      try {
        var o = !0;
        console.error = function (e) {
          if (Ce.test(e)) o = !1, Ie.delete(n);else {
            for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) s[i - 1] = arguments[i];
            r.apply(void 0, [e].concat(s));
          }
        }, useRef(), o && !Ie.has(n) && (console.warn(n), Ie.add(n));
      } catch (e) {
        Ce.test(e.message) && Ie.delete(n);
      } finally {
        console.error = r;
      }
    }
  },
  Oe = function (e, t, n) {
    return void 0 === n && (n = w), e.theme !== n.theme && e.theme || t || n.theme;
  },
  Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  De = /(^-|-$)/g;
function je(e) {
  return e.replace(Re, "-").replace(De, "");
}
var Te = function (e) {
  return Q(te(e) >>> 0);
};
function xe(e) {
  return "string" == typeof e && (e.charAt(0) === e.charAt(0).toLowerCase());
}
var ke = function (e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
  },
  Ve = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Be(e, t, n) {
  var r = e[n];
  ke(t) && ke(r) ? ze(r, t) : e[n] = t;
}
function ze(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (ke(i)) for (var a in i) Ve(a) && Be(e, i[a], a);
  }
  return e;
}
var Me = React__default.createContext();
  Me.Consumer;
var Fe = {};
function Ye(e, t, n) {
  var o = _(e),
    i = !xe(e),
    a = t.attrs,
    c = void 0 === a ? S : a,
    l = t.componentId,
    d = void 0 === l ? function (e, t) {
      var n = "string" != typeof e ? "sc" : je(e);
      Fe[n] = (Fe[n] || 0) + 1;
      var r = n + "-" + Te("5.3.11" + n + Fe[n]);
      return t ? t + "-" + r : r;
    }(t.displayName, t.parentComponentId) : l,
    h = t.displayName,
    p = void 0 === h ? function (e) {
      return xe(e) ? "styled." + e : "Styled(" + b(e) + ")";
    }(e) : h,
    v = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || d,
    g = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    N = t.shouldForwardProp;
  o && e.shouldForwardProp && (N = t.shouldForwardProp ? function (n, r, o) {
    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
  } : e.shouldForwardProp);
  var A,
    C = new oe(n, v, o ? e.componentStyle : void 0),
    I = C.isStatic && 0 === c.length,
    P = function (e, t) {
      return function (e, t, n, r) {
        var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          l = e.shouldForwardProp,
          d = e.styledComponentId,
          h = e.target,
          p = function (e, t, n) {
            void 0 === e && (e = w);
            var r = y({}, t, {
                theme: e
              }),
              o = {};
            return n.forEach(function (e) {
              var t,
                n,
                s,
                i = e;
              for (t in E(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
            }), [r, o];
          }(Oe(t, useContext(Me), a) || w, t, o),
          m = p[0],
          v = p[1],
          g = function (e, t, n, r) {
            var o = pe(),
              s = fe(),
              i = t ? e.generateAndInjectStyles(w, o, s) : e.generateAndInjectStyles(n, o, s);
            return !t && r && r(i), i;
          }(i, r, m, e.warnTooManyClasses ),
          S = n,
          b = v.$as || t.$as || v.as || t.as || h,
          _ = xe(b),
          N = v !== t ? y({}, t, {}, v) : t,
          A = {};
        for (var C in N) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? A.as = N[C] : (l ? l(C, isPropValid, b) : !_ || isPropValid(C)) && (A[C] = N[C]));
        return t.style && v.style !== t.style && (A.style = y({}, t.style, {}, v.style)), A.className = Array.prototype.concat(c, d, g !== d ? g : null, t.className, v.className).filter(Boolean).join(" "), A.ref = S, createElement(b, A);
      }(A, e, t, I);
    };
  return P.displayName = p, (A = React__default.forwardRef(P)).attrs = g, A.componentStyle = C, A.displayName = p, A.shouldForwardProp = N, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : S, A.styledComponentId = v, A.target = o ? e.target : e, A.withComponent = function (e) {
    var r = t.componentId,
      o = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }(t, ["componentId"]),
      s = r && r + "-" + (xe(e) ? e : je(b(e)));
    return Ye(e, y({}, o, {
      attrs: g,
      componentId: s
    }), n);
  }, Object.defineProperty(A, "defaultProps", {
    get: function () {
      return this._foldedDefaultProps;
    },
    set: function (t) {
      this._foldedDefaultProps = o ? ze({}, e.defaultProps, t) : t;
    }
  }), (Pe(p, v), A.warnTooManyClasses = function (e, t) {
    var n = {},
      r = !1;
    return function (o) {
      if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
        var s = t ? ' with the id of "' + t + '"' : "";
        console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
      }
    };
  }(p, v)), Object.defineProperty(A, "toString", {
    value: function () {
      return "." + A.styledComponentId;
    }
  }), i && hoistNonReactStatics_cjs(A, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), A;
}
var qe = function (e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = w), !reactIs$3.exports.isValidElementType(r)) return D(1, String(r));
    var s = function () {
      return t(r, o, Ae.apply(void 0, arguments));
    };
    return s.withConfig = function (n) {
      return e(t, r, y({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, y({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(Ye, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
  qe[e] = qe(e);
});
var He = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = ne(e), X.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function (e, t, n, r) {
    var o = r(_e(this.rules, t, n, r).join(""), ""),
      s = this.componentId + e;
    n.insertRules(s, s, o);
  }, t.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, t.renderStyles = function (e, t, n, r) {
    e > 2 && X.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();
function $e(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
  var i = Ae.apply(void 0, [e].concat(n)),
    a = "sc-global-" + Te(JSON.stringify(i)),
    u = new He(i, a);
  function d(e) {
    var t = pe(),
      n = fe(),
      o = useContext(Me),
      d = useRef(t.allocateGSInstance(a)).current;
    return React__default.Children.count(e.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."), i.some(function (e) {
      return "string" == typeof e && -1 !== e.indexOf("@import");
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.server && h(d, e, t, o, n), useLayoutEffect(function () {
      if (!t.server) return h(d, e, t, o, n), function () {
        return u.removeStyles(d, t);
      };
    }, [d, e, t, o, n]), null;
  }
  function h(e, t, n, r, o) {
    if (u.isStatic) u.renderStyles(e, P, n, o);else {
      var s = y({}, t, {
        theme: Oe(t, r, d.defaultProps)
      });
      u.renderStyles(e, s, n, o);
    }
  }
  return Pe(a), React__default.memo(d);
}
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);

var propTypes$1 = {exports: {}};

var reactIs = {exports: {}};

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	{
	  (function () {

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	    // (unstable) APIs that have been removed. Can we remove the symbols?

	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	    function isValidElementType(type) {
	      return typeof type === 'string' || typeof type === 'function' ||
	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_ASYNC_MODE_TYPE:
	              case REACT_CONCURRENT_MODE_TYPE:
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    } // AsyncMode is deprecated along with isAsyncMode

	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	        }
	      }
	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	    }
	    function isConcurrentMode(object) {
	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    reactIs_development.AsyncMode = AsyncMode;
	    reactIs_development.ConcurrentMode = ConcurrentMode;
	    reactIs_development.ContextConsumer = ContextConsumer;
	    reactIs_development.ContextProvider = ContextProvider;
	    reactIs_development.Element = Element;
	    reactIs_development.ForwardRef = ForwardRef;
	    reactIs_development.Fragment = Fragment;
	    reactIs_development.Lazy = Lazy;
	    reactIs_development.Memo = Memo;
	    reactIs_development.Portal = Portal;
	    reactIs_development.Profiler = Profiler;
	    reactIs_development.StrictMode = StrictMode;
	    reactIs_development.Suspense = Suspense;
	    reactIs_development.isAsyncMode = isAsyncMode;
	    reactIs_development.isConcurrentMode = isConcurrentMode;
	    reactIs_development.isContextConsumer = isContextConsumer;
	    reactIs_development.isContextProvider = isContextProvider;
	    reactIs_development.isElement = isElement;
	    reactIs_development.isForwardRef = isForwardRef;
	    reactIs_development.isFragment = isFragment;
	    reactIs_development.isLazy = isLazy;
	    reactIs_development.isMemo = isMemo;
	    reactIs_development.isPortal = isPortal;
	    reactIs_development.isProfiler = isProfiler;
	    reactIs_development.isStrictMode = isStrictMode;
	    reactIs_development.isSuspense = isSuspense;
	    reactIs_development.isValidElementType = isValidElementType;
	    reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;
	(function (module) {

		{
		  module.exports = requireReactIs_development();
		}
} (reactIs));
	return reactIs.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function () {};
	{
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	          var stack = getStack ? getStack() : '';
	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function () {
	  {
	    loggedTypeFailures = {};
	  }
	};
	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();
	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var checkPropTypes = requireCheckPropTypes();
	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function () {};
	{
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	    return chainedCheckType;
	  }
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	        return true;
	      default:
	        return false;
	    }
	  }
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes$1.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
var _templateObject$9;
var GlobalStyle = $e(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  .focus-outline-hidden :focus {\n      outline: none;\n  }\n"])));
var _templateObject$8;
var SvgButton = qe.button(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ", ";\n"])), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});
var _templateObject$7, _templateObject2;
var Label = qe.span(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  line-height: 1;\n"])));
function Arrow(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick,
    inverted = _ref.inverted,
    label = _ref.label,
    disabled = _ref.disabled;
  return /*#__PURE__*/React__default.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "data-tour-elem": "".concat(inverted ? 'right' : 'left', "-arrow"),
    disabled: disabled
  }, label ? /*#__PURE__*/React__default.createElement(Label, null, label) : /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 18.4 14.4"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: inverted ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2' : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2',
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeMiterlimit: "10"
  })));
}
Arrow.propTypes = {
  className: propTypes$1.exports.string.isRequired,
  onClick: propTypes$1.exports.func.isRequired,
  inverted: propTypes$1.exports.bool,
  label: propTypes$1.exports.node,
  disabled: propTypes$1.exports.bool
};
var Arrow$1 = qe(Arrow)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.disabled ? '#caccce' : '#646464';
}, function (props) {
  return props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;';
}, function (props) {
  return !props.label && "\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  ";
}, function (props) {
  return props.disabled ? '#caccce' : '#000';
});
var _templateObject$6;
function Close(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick,
    ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/React__default.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "aria-label": ariaLabel
  }, /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 9.1 9.1",
    "aria-hidden": true,
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"
  })));
}
Close.propTypes = {
  className: propTypes$1.exports.string.isRequired,
  onClick: propTypes$1.exports.func.isRequired,
  ariaLabel: propTypes$1.exports.string
};
var StyledClose = qe(Close)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"])));
function getNodeRect(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    top = _node$getBoundingClie.top,
    right = _node$getBoundingClie.right,
    bottom = _node$getBoundingClie.bottom,
    left = _node$getBoundingClie.left,
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height
  };
}
function getHighlightedRect(node, step) {
  if (!step.highlightedSelectors) {
    return getNodeRect(node);
  }
  var attrs = getNodeRect(node);
  var _iterator = _createForOfIteratorHelper(step.highlightedSelectors),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selector = _step.value;
      var element = document.querySelector(selector);
      if (!element || element.style.display === 'none' || element.style.visibility === 'hidden') {
        continue;
      }
      var rect = getNodeRect(element);
      if (rect.top < attrs.top) {
        attrs.top = rect.top;
      }
      if (rect.right > attrs.right) {
        attrs.right = rect.right;
      }
      if (rect.bottom > attrs.bottom) {
        attrs.bottom = rect.bottom;
      }
      if (rect.left < attrs.left) {
        attrs.left = rect.left;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  attrs.width = attrs.right - attrs.left;
  attrs.height = attrs.bottom - attrs.top;
  return attrs;
}
function inView(_ref) {
  var top = _ref.top,
    right = _ref.right,
    bottom = _ref.bottom,
    left = _ref.left,
    w = _ref.w,
    h = _ref.h,
    _ref$threshold = _ref.threshold,
    threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;
  return top >= 0 + threshold && left >= 0 + threshold && bottom <= h - threshold && right <= w - threshold;
}
function isBody(node) {
  return node === document.querySelector('body') || node === document.querySelector('html');
}
var isHoriz = function isHoriz(pos) {
  return /(left|right)/.test(pos);
};
var isOutsideX = function isOutsideX(val, windowWidth) {
  return val > windowWidth;
};
var isOutsideY = function isOutsideY(val, windowHeight) {
  return val > windowHeight;
};
var safe = function safe(sum) {
  return sum < 0 ? 0 : sum;
};
function bestPositionOf(positions) {
  return Object.keys(positions).map(function (p) {
    return {
      position: p,
      value: positions[p]
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  }).map(function (p) {
    return p.position;
  });
}
var _templateObject$5;
var Guide = qe.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  --reactour-accent: ", ";\n  ", "\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ", ";\n"])), function (props) {
  return props.accentColor;
}, function (props) {
  return props.defaultStyles ? "\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(props.rounded, "px;\n  background-color: #fff;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  ") : '';
}, function (props) {
  var targetTop = props.targetTop,
    targetRight = props.targetRight,
    targetBottom = props.targetBottom,
    targetLeft = props.targetLeft,
    windowWidth = props.windowWidth,
    windowHeight = props.windowHeight,
    helperWidth = props.helperWidth,
    helperHeight = props.helperHeight,
    helperPosition = props.helperPosition,
    padding = props.padding;
  var available = {
    left: targetLeft,
    right: windowWidth - targetRight,
    top: targetTop,
    bottom: windowHeight - targetBottom
  };
  var couldPositionAt = function couldPositionAt(position) {
    return available[position] > (isHoriz(position) ? helperWidth + padding * 2 : helperHeight + padding * 2);
  };
  var autoPosition = function autoPosition(coords) {
    var positionsOrder = bestPositionOf(available);
    for (var j = 0; j < positionsOrder.length; j++) {
      if (couldPositionAt(positionsOrder[j])) {
        return coords[positionsOrder[j]];
      }
    }
    return coords.center;
  };
  var pos = function pos(helperPosition) {
    if (Array.isArray(helperPosition)) {
      var isOutX = isOutsideX(helperPosition[0], windowWidth);
      var isOutY = isOutsideY(helperPosition[1], windowHeight);
      var warn = function warn(axis, num) {
        console.warn("".concat(axis, ":").concat(num, " is outside window, falling back to center"));
      };
      if (isOutX) warn('x', helperPosition[0]);
      if (isOutY) warn('y', helperPosition[1]);
      return [isOutX ? windowWidth / 2 - helperWidth / 2 : helperPosition[0], isOutY ? windowHeight / 2 - helperHeight / 2 : helperPosition[1]];
    }
    var hX = isOutsideX(targetLeft + helperWidth, windowWidth) ? isOutsideX(targetRight + padding, windowWidth) ? targetRight - helperWidth : targetRight - helperWidth + padding : targetLeft - padding;
    var x = hX > padding ? hX : padding;
    var hY = isOutsideY(targetTop + helperHeight, windowHeight) ? isOutsideY(targetBottom + padding, windowHeight) ? targetBottom - helperHeight : targetBottom - helperHeight + padding : targetTop - padding;
    var y = hY > padding ? hY : padding;
    var coords = {
      top: [x, targetTop - helperHeight - padding * 2],
      right: [targetRight + padding * 2, y],
      bottom: [x, targetBottom + padding * 2],
      left: [targetLeft - helperWidth - padding * 2, y],
      center: [windowWidth / 2 - helperWidth / 2, windowHeight / 2 - helperHeight / 2]
    };
    if (helperPosition === 'center' || couldPositionAt(helperPosition)) {
      return coords[helperPosition];
    }
    return autoPosition(coords);
  };
  var p = pos(helperPosition);
  return "translate(".concat(Math.round(p[0]), "px, ").concat(Math.round(p[1]), "px)");
});
var _templateObject$4;
var Badge = qe.span(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-family: monospace;\n  background: var(--reactour-accent);\n  background: ", ";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"])), function (props) {
  return props.accentColor;
});
var _templateObject$3;
var Controls = qe.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n  justify-content: center;\n"])));
var _templateObject$2;
var Navigation = qe.nav(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"])));
var _templateObject$1;
var Dot = qe.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: ", ";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ", ";\n  transform: scale(", ");\n\n  color: ", ";\n  background: ", ";\n\n  color: ", ";\n  background: ", ";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ", ";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"])), function (props) {
  return props.current === props.index ? '0' : '1px solid #caccce';
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.current === props.index ? 1.25 : 1;
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : '#caccce';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : 'none';
}, function (props) {
  return props.current === props.index ? props.accentColor : '#caccce';
}, function (props) {
  return props.current === props.index ? props.accentColor : 'none';
}, function (props) {
  return props.showNumber ? 'block' : 'none';
});
var _templateObject;
var SvgMaskWrapper = qe.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  opacity: ", ";\n  color: ", ";\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n"])), function (props) {
  return !props.maskClassName && 0.7;
}, function (props) {
  return !props.maskClassName && '#000';
});
function SvgMask(_ref) {
  var windowWidth = _ref.windowWidth,
    windowHeight = _ref.windowHeight,
    targetWidth = _ref.targetWidth,
    targetHeight = _ref.targetHeight,
    targetTop = _ref.targetTop,
    targetLeft = _ref.targetLeft,
    padding = _ref.padding,
    rounded = _ref.rounded,
    roundedStep = _ref.roundedStep,
    disableInteraction = _ref.disableInteraction,
    disableInteractionClassName = _ref.disableInteractionClassName,
    className = _ref.className,
    onClick = _ref.onClick,
    highlightedBorder = _ref.highlightedBorder;
  var width = safe(targetWidth + padding * 2);
  var height = safe(targetHeight + padding * 2);
  var top = safe(targetTop - padding);
  var left = safe(targetLeft - padding);
  var roundedRadius = roundedStep ? Math.min(width / 2, height / 2) : rounded;
  return /*#__PURE__*/React__default.createElement(SvgMaskWrapper, {
    onClick: onClick,
    maskClassName: className
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: windowWidth,
    height: windowHeight,
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("mask", {
    id: "mask-main"
  }, /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left - 1,
    y: top - 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + roundedRadius,
    cy: top + roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left + width - roundedRadius + 1,
    y: top - 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + width - roundedRadius,
    cy: top + roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left - 1,
    y: top + height - roundedRadius + 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + roundedRadius,
    cy: top + height - roundedRadius,
    r: roundedRadius,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left + width - roundedRadius + 1,
    y: top + height - roundedRadius + 1,
    width: roundedRadius,
    height: roundedRadius,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + width - roundedRadius,
    cy: top + height - roundedRadius,
    r: roundedRadius,
    fill: "black "
  })), /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip-path"
  }, /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: top
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: top,
    width: left,
    height: height
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: targetLeft + targetWidth + padding,
    y: top,
    width: safe(windowWidth - targetWidth - left),
    height: height
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: targetTop + targetHeight + padding,
    width: windowWidth,
    height: safe(windowHeight - targetHeight - top)
  }))), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    mask: "url(#mask-main)"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    clipPath: "url(#clip-path)",
    pointerEvents: "auto"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    pointerEvents: "auto",
    fill: "transparent",
    display: disableInteraction ? 'block' : 'none',
    className: disableInteractionClassName
  }), highlightedBorder && /*#__PURE__*/React__default.createElement("rect", {
    x: safe(left + highlightedBorder.width / 2.0),
    y: safe(top + highlightedBorder.width / 2.0),
    width: safe(width - highlightedBorder.width),
    height: safe(height - highlightedBorder.width),
    pointerEvents: "auto",
    fill: "none",
    strokeWidth: highlightedBorder.width,
    stroke: highlightedBorder.color,
    rx: roundedRadius - 2
  })));
}
SvgMask.propTypes = {
  windowWidth: propTypes$1.exports.number.isRequired,
  windowHeight: propTypes$1.exports.number.isRequired,
  targetWidth: propTypes$1.exports.number.isRequired,
  targetHeight: propTypes$1.exports.number.isRequired,
  targetTop: propTypes$1.exports.number.isRequired,
  targetLeft: propTypes$1.exports.number.isRequired,
  padding: propTypes$1.exports.number.isRequired,
  rounded: propTypes$1.exports.number.isRequired,
  roundedStep: propTypes$1.exports.bool,
  disableInteraction: propTypes$1.exports.bool.isRequired,
  disableInteractionClassName: propTypes$1.exports.string.isRequired,
  highlightedBorder: propTypes$1.exports.shape({
    color: propTypes$1.exports.string.isRequired,
    width: propTypes$1.exports.number.isRequired
  })
};
var ReactourResizeObserver = function (_ref) {
  var step = _ref.step,
    refresh = _ref.refresh;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    mutationsCounter = _useState2[0],
    setMutationsCounter = _useState2[1]; // only use to notify main logic below
  // that a resizeObservable has been added to DOM (or removed from it)

  useEffect(function () {
    if (!step.resizeObservables) {
      return;
    }
    var incrementMutationsCounterIfObservable = function incrementMutationsCounterIfObservable(nodes) {
      var _iterator = _createForOfIteratorHelper(nodes),
        _step;
      try {
        var _loop = function _loop() {
          var node = _step.value;
          if (!node.attributes) {
            return "continue";
          }
          var found = step.resizeObservables.find(function (observable) {
            return node.matches(observable) || node.querySelector(observable) != null;
          });
          if (found) {
            setMutationsCounter(mutationsCounter + 1);
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    var mutationObserver = new MutationObserver(function (mutationsList) {
      var _iterator2 = _createForOfIteratorHelper(mutationsList),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mutation = _step2.value;
          if (0 !== mutation.addedNodes.length) {
            incrementMutationsCounterIfObservable(mutation.addedNodes);
          }
          if (0 !== mutation.removedNodes.length) {
            incrementMutationsCounterIfObservable(mutation.removedNodes);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    var observable = document.documentElement || document.body;
    var config = {
      childList: true,
      subtree: true
    };
    mutationObserver.observe(observable, config);
    return function () {
      mutationObserver.disconnect();
    };
  }, [step, mutationsCounter]); // the main logic is here

  useEffect(function () {
    if (!step.resizeObservables) {
      return;
    }
    var resizeObserver = new ResizeObserver(function (entries) {
      refresh();
    });
    var _iterator3 = _createForOfIteratorHelper(step.resizeObservables),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var observable = _step3.value;
        var element = document.querySelector(observable);
        if (element) {
          resizeObserver.observe(element);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return function () {
      resizeObserver.disconnect();
    };
  }, [step, mutationsCounter]);
  return null;
};
var ReactourMutationObserver = function (_ref) {
  var step = _ref.step,
    refresh = _ref.refresh;
  useEffect(function () {
    if (!step.mutationObservables) {
      return;
    }
    var refreshHighlightedRegionIfObservable = function refreshHighlightedRegionIfObservable(nodes) {
      var _iterator = _createForOfIteratorHelper(nodes),
        _step;
      try {
        var _loop = function _loop() {
          var node = _step.value;
          if (!node.attributes) {
            return "continue";
          }
          var found = step.mutationObservables.find(function (observable) {
            return node.matches(observable) || node.querySelector(observable) != null;
          });
          if (found) {
            refresh();
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    var mutationObserver = new MutationObserver(function (mutationsList) {
      var _iterator2 = _createForOfIteratorHelper(mutationsList),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mutation = _step2.value;
          if (0 !== mutation.addedNodes.length) {
            refreshHighlightedRegionIfObservable(mutation.addedNodes);
          }
          if (0 !== mutation.removedNodes.length) {
            refreshHighlightedRegionIfObservable(mutation.removedNodes);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    var observable = document.documentElement || document.body;
    var config = {
      childList: true,
      subtree: true
    };
    mutationObserver.observe(observable, config);
    return function () {
      mutationObserver.disconnect();
    };
  }, [step]);
  return null;
};
function Portal(_ref) {
  var children = _ref.children;
  var ref = useRef(null);
  if (ref.current === null) {
    ref.current = document.createElement('div');
    ref.current.setAttribute('id', '___reactour');
  }
  useEffect(function () {
    document.body.appendChild(ref.current);
    return function () {
      document.body.removeChild(ref.current);
    };
  }, [ref]);
  return /*#__PURE__*/createPortal(children, ref.current);
}
var propTypes = {
  disableFocusLock: propTypes$1.exports.bool,
  badgeContent: propTypes$1.exports.func,
  highlightedMaskClassName: propTypes$1.exports.string,
  children: propTypes$1.exports.oneOfType([propTypes$1.exports.node, propTypes$1.exports.element]),
  className: propTypes$1.exports.string,
  closeButtonAriaLabel: propTypes$1.exports.string,
  closeWithMask: propTypes$1.exports.bool,
  inViewThreshold: propTypes$1.exports.number,
  isOpen: propTypes$1.exports.bool.isRequired,
  lastStepNextButton: propTypes$1.exports.node,
  maskClassName: propTypes$1.exports.string,
  maskSpace: propTypes$1.exports.number,
  nextButton: propTypes$1.exports.node,
  onAfterOpen: propTypes$1.exports.func,
  onBeforeClose: propTypes$1.exports.func,
  onRequestClose: propTypes$1.exports.func,
  prevButton: propTypes$1.exports.node,
  scrollDuration: propTypes$1.exports.number,
  scrollOffset: propTypes$1.exports.number,
  showButtons: propTypes$1.exports.bool,
  showCloseButton: propTypes$1.exports.bool,
  showNavigation: propTypes$1.exports.bool,
  showNavigationNumber: propTypes$1.exports.bool,
  showNumber: propTypes$1.exports.bool,
  startAt: propTypes$1.exports.number,
  goToStep: propTypes$1.exports.number,
  getCurrentStep: propTypes$1.exports.func,
  nextStep: propTypes$1.exports.func,
  prevStep: propTypes$1.exports.func,
  steps: propTypes$1.exports.arrayOf(propTypes$1.exports.shape({
    selector: propTypes$1.exports.string,
    content: propTypes$1.exports.oneOfType([propTypes$1.exports.node, propTypes$1.exports.element, propTypes$1.exports.func]).isRequired,
    position: propTypes$1.exports.oneOfType([propTypes$1.exports.arrayOf(propTypes$1.exports.number), propTypes$1.exports.oneOf(['top', 'right', 'bottom', 'left', 'center'])]),
    action: propTypes$1.exports.func,
    style: propTypes$1.exports.object,
    stepInteraction: propTypes$1.exports.bool,
    navDotAriaLabel: propTypes$1.exports.string,
    roundedStep: propTypes$1.exports.bool
  })),
  update: propTypes$1.exports.string,
  updateDelay: propTypes$1.exports.number,
  disableInteraction: propTypes$1.exports.bool,
  disableDotsNavigation: propTypes$1.exports.bool,
  disableKeyboardNavigation: propTypes$1.exports.oneOfType([propTypes$1.exports.arrayOf(propTypes$1.exports.oneOf(['esc', 'right', 'left'])), propTypes$1.exports.bool]),
  rounded: propTypes$1.exports.number,
  accentColor: propTypes$1.exports.string,
  highlightedBorder: propTypes$1.exports.shape({
    color: propTypes$1.exports.string.isRequired,
    width: propTypes$1.exports.number.isRequired
  })
};
var defaultProps = {
  disableFocusLock: false,
  showNavigation: true,
  showNavigationNumber: true,
  showButtons: true,
  showCloseButton: true,
  closeButtonAriaLabel: 'Close',
  showNumber: true,
  scrollDuration: 1,
  maskSpace: 10,
  updateDelay: 1,
  disableInteraction: false,
  rounded: 0,
  accentColor: '#007aff',
  closeWithMask: true
};
var CN = {
  mask: {
    base: 'reactour__mask',
    isOpen: 'reactour__mask--is-open',
    disableInteraction: 'reactour__mask--disable-interaction'
  },
  helper: {
    base: 'reactour__helper',
    isOpen: 'reactour__helper--is-open'
  },
  dot: {
    base: 'reactour__dot',
    active: 'reactour__dot--is-active'
  }
};
var Tour = /*#__PURE__*/function (_Component) {
  _inherits(Tour, _Component);
  var _super = _createSuper(Tour);
  function Tour() {
    var _this;
    _classCallCheck(this, Tour);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "unlockFocus", function (callback) {
      _this.setState({
        focusUnlocked: true
      }, callback());
    });
    _defineProperty(_assertThisInitialized(_this), "showStep", function () {
      if (!_this.helper || !_this.helper.current) return;
      var steps = _this.props.steps;
      var _this$state = _this.state,
        current = _this$state.current,
        focusUnlocked = _this$state.focusUnlocked;
      if (focusUnlocked) {
        _this.setState({
          focusUnlocked: false
        });
      }
      var step = steps[current];
      var node = step.selector ? document.querySelector(step.selector) : null;
      var stepCallback = function stepCallback(o) {
        if (step.action && typeof step.action === 'function') {
          _this.unlockFocus(function () {
            return step.action(o);
          });
        }
      };
      if (step.observe) {
        var target = document.querySelector(step.observe);
        var config = {
          attributes: true,
          childList: true,
          characterData: true
        };
        _this.setState(function (prevState) {
          if (prevState.observer) {
            setTimeout(function () {
              prevState.observer.disconnect();
            }, 0);
          }
          return {
            observer: new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  var cb = function cb() {
                    return stepCallback(mutation.addedNodes[0]);
                  };
                  setTimeout(function () {
                    return _this.calculateNode(mutation.addedNodes[0], step, cb);
                  }, 100);
                } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                  var _cb = function _cb() {
                    return stepCallback(node);
                  };
                  _this.calculateNode(node, step, _cb);
                }
              });
            })
          };
        }, function () {
          return _this.state.observer.observe(target, config);
        });
      } else {
        if (_this.state.observer) {
          _this.state.observer.disconnect();
          _this.setState({
            observer: null
          });
        }
      }
      if (node) {
        var cb = function cb() {
          return stepCallback(node);
        };
        _this.calculateNode(node, step, cb);
      } else {
        _this.setState(setNodeState(null, step, _this.helper.current), stepCallback);
        step.selector && console.warn("Doesn't find a DOM node '".concat(step.selector, "'. Please check the 'steps' Tour prop Array at position ").concat(current, "."));
      }
    });
    _defineProperty(_assertThisInitialized(_this), "calculateNode", function (node, step, cb) {
      var _this$props = _this.props,
        scrollDuration = _this$props.scrollDuration,
        inViewThreshold = _this$props.inViewThreshold,
        scrollOffset = _this$props.scrollOffset;
      var attrs = getHighlightedRect(node, step);
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      if (!inView(_objectSpread2(_objectSpread2({}, attrs), {}, {
        w: w,
        h: h,
        threshold: inViewThreshold
      }))) {
        var parentScroll = Scrollparent(node);
        var offset = scrollOffset ? scrollOffset : attrs.height > h ? -25 : -(h / 2) + attrs.height / 2;
        scrollSmooth.to(node, {
          context: isBody(parentScroll) ? window : parentScroll,
          duration: scrollDuration,
          offset: offset,
          callback: function callback(nd) {
            _this.setState(setNodeState(nd, step, _this.helper.current), cb);
          }
        });
      } else {
        _this.setState(setNodeState(node, step, _this.helper.current), cb);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "recalculateNode", function (step) {
      var node = document.querySelector(step.selector);
      var stepCallback = function stepCallback(o) {
        if (step.action && typeof step.action === 'function') {
          _this.unlockFocus(function () {
            return step.action(o);
          });
        }
      };
      _this.calculateNode(node, step, function () {
        return stepCallback(node);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "maskClickHandler", function (e) {
      var _this$props2 = _this.props,
        closeWithMask = _this$props2.closeWithMask,
        onRequestClose = _this$props2.onRequestClose;
      if (closeWithMask && !e.target.classList.contains(CN.mask.disableInteraction)) {
        onRequestClose(e);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      var _this$props3 = _this.props,
        steps = _this$props3.steps,
        getCurrentStep = _this$props3.getCurrentStep;
      _this.setState(function (prevState) {
        var nextStep = prevState.current < steps.length - 1 ? prevState.current + 1 : prevState.current;
        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }
        return {
          current: nextStep
        };
      }, _this.showStep);
    });
    _defineProperty(_assertThisInitialized(_this), "prevStep", function () {
      var getCurrentStep = _this.props.getCurrentStep;
      _this.setState(function (prevState) {
        var nextStep = prevState.current > 0 ? prevState.current - 1 : prevState.current;
        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }
        return {
          current: nextStep
        };
      }, _this.showStep);
    });
    _defineProperty(_assertThisInitialized(_this), "gotoStep", function (n) {
      var _this$props4 = _this.props,
        steps = _this$props4.steps,
        getCurrentStep = _this$props4.getCurrentStep;
      _this.setState(function (prevState) {
        var nextStep = steps[n] ? n : prevState.current;
        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }
        return {
          current: nextStep
        };
      }, _this.showStep);
    });
    _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function (e) {
      var _this$props5 = _this.props,
        onRequestClose = _this$props5.onRequestClose,
        nextStep = _this$props5.nextStep,
        prevStep = _this$props5.prevStep,
        disableKeyboardNavigation = _this$props5.disableKeyboardNavigation;
      e.stopPropagation();
      if (disableKeyboardNavigation === true) {
        return;
      }
      var isEscDisabled, isRightDisabled, isLeftDisabled;
      if (disableKeyboardNavigation) {
        isEscDisabled = disableKeyboardNavigation.includes('esc');
        isRightDisabled = disableKeyboardNavigation.includes('right');
        isLeftDisabled = disableKeyboardNavigation.includes('left');
      }
      if (e.keyCode === 27 && !isEscDisabled) {
        // esc
        e.preventDefault();
        onRequestClose();
      }
      if (e.keyCode === 39 && !isRightDisabled) {
        // right
        e.preventDefault();
        typeof nextStep === 'function' ? nextStep() : _this.nextStep();
      }
      if (e.keyCode === 37 && !isLeftDisabled) {
        // left
        e.preventDefault();
        typeof prevStep === 'function' ? prevStep() : _this.prevStep();
      }
    });
    _this.state = {
      isOpen: false,
      current: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      inDOM: false,
      observer: null,
      focusUnlocked: false
    };
    _this.helper = /*#__PURE__*/createRef();
    _this.helperElement = null;
    _this.debouncedShowStep = lodash_debounce(_this.showStep, 70);
    return _this;
  }
  _createClass(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
        isOpen = _this$props6.isOpen,
        startAt = _this$props6.startAt;
      if (isOpen) {
        this.open(startAt);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props7 = this.props,
        isOpen = _this$props7.isOpen,
        update = _this$props7.update,
        updateDelay = _this$props7.updateDelay;
      if (!isOpen && nextProps.isOpen) {
        this.open(nextProps.startAt);
      } else if (isOpen && !nextProps.isOpen) {
        this.close();
      }
      if (isOpen && update !== nextProps.update) {
        if (nextProps.steps[this.state.current]) {
          setTimeout(this.showStep, updateDelay);
        } else {
          this.props.onRequestClose();
        }
      }
      if (isOpen && nextProps.isOpen && this.state.current !== nextProps.goToStep) {
        this.gotoStep(nextProps.goToStep);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.props.isOpen;
      if (isOpen) {
        this.close();
      }
      if (this.state.observer) {
        this.state.observer.disconnect();
      }
    }
  }, {
    key: "open",
    value: function open(startAt) {
      var _this2 = this;
      var onAfterOpen = this.props.onAfterOpen;
      this.setState(function (prevState) {
        return {
          isOpen: true,
          current: startAt !== undefined ? startAt : prevState.current
        };
      }, function () {
        setTimeout(_this2.showStep, 1);
        _this2.helperElement = _this2.helper.current;
        if (!_this2.props.disableFocusLock) _this2.helper.current.focus();
        if (onAfterOpen) {
          onAfterOpen(_this2.helperElement);
        }
      });
      window.addEventListener('resize', this.debouncedShowStep, false);
      window.addEventListener('keydown', this.keyDownHandler, false);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState(function (prevState) {
        if (prevState.observer) {
          prevState.observer.disconnect();
        }
        return {
          isOpen: false,
          observer: null
        };
      }, this.onBeforeClose);
      window.removeEventListener('resize', this.debouncedShowStep);
      window.removeEventListener('keydown', this.keyDownHandler);
    }
  }, {
    key: "onBeforeClose",
    value: function onBeforeClose() {
      var onBeforeClose = this.props.onBeforeClose;
      if (onBeforeClose) {
        onBeforeClose(this.helperElement);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props8 = this.props,
        className = _this$props8.className,
        steps = _this$props8.steps,
        maskClassName = _this$props8.maskClassName,
        showButtons = _this$props8.showButtons,
        showCloseButton = _this$props8.showCloseButton,
        closeButtonAriaLabel = _this$props8.closeButtonAriaLabel,
        showNavigation = _this$props8.showNavigation,
        showNavigationNumber = _this$props8.showNavigationNumber,
        showNumber = _this$props8.showNumber,
        onRequestClose = _this$props8.onRequestClose,
        maskSpace = _this$props8.maskSpace,
        lastStepNextButton = _this$props8.lastStepNextButton,
        nextButton = _this$props8.nextButton,
        prevButton = _this$props8.prevButton,
        badgeContent = _this$props8.badgeContent,
        highlightedMaskClassName = _this$props8.highlightedMaskClassName,
        disableInteraction = _this$props8.disableInteraction,
        disableDotsNavigation = _this$props8.disableDotsNavigation,
        nextStep = _this$props8.nextStep,
        prevStep = _this$props8.prevStep,
        rounded = _this$props8.rounded,
        accentColor = _this$props8.accentColor,
        CustomHelper = _this$props8.CustomHelper,
        disableFocusLock = _this$props8.disableFocusLock,
        highlightedBorder = _this$props8.highlightedBorder;
      var _this$state2 = this.state,
        isOpen = _this$state2.isOpen,
        current = _this$state2.current,
        inDOM = _this$state2.inDOM,
        targetTop = _this$state2.top,
        targetRight = _this$state2.right,
        targetBottom = _this$state2.bottom,
        targetLeft = _this$state2.left,
        targetWidth = _this$state2.width,
        targetHeight = _this$state2.height,
        windowWidth = _this$state2.w,
        windowHeight = _this$state2.h,
        helperWidth = _this$state2.helperWidth,
        helperHeight = _this$state2.helperHeight,
        helperPosition = _this$state2.helperPosition;
      if (isOpen) {
        return /*#__PURE__*/React__default.createElement(Portal, null, /*#__PURE__*/React__default.createElement(GlobalStyle, null), /*#__PURE__*/React__default.createElement(ReactourResizeObserver, {
          step: steps[current],
          refresh: function refresh() {
            return _this3.recalculateNode(steps[current]);
          }
        }), /*#__PURE__*/React__default.createElement(ReactourMutationObserver, {
          step: steps[current],
          refresh: function refresh() {
            return _this3.recalculateNode(steps[current]);
          }
        }), /*#__PURE__*/React__default.createElement(SvgMask, {
          onClick: this.maskClickHandler,
          forwardRef: function forwardRef(c) {
            return _this3.mask = c;
          },
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          targetTop: targetTop,
          targetLeft: targetLeft,
          padding: maskSpace,
          rounded: rounded,
          roundedStep: steps[current].roundedStep,
          className: maskClassName,
          disableInteraction: steps[current].stepInteraction === false || disableInteraction ? !steps[current].stepInteraction : disableInteraction,
          disableInteractionClassName: "".concat(CN.mask.disableInteraction, " ").concat(highlightedMaskClassName),
          highlightedBorder: highlightedBorder
        }), /*#__PURE__*/React__default.createElement(FocusLockCombination, {
          disabled: disableFocusLock,
          autoFocus: false
        }, /*#__PURE__*/React__default.createElement(Guide, {
          ref: this.helper,
          targetHeight: targetHeight,
          targetWidth: targetWidth,
          targetTop: targetTop,
          targetRight: targetRight,
          targetBottom: targetBottom,
          targetLeft: targetLeft,
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          helperWidth: helperWidth,
          helperHeight: helperHeight,
          helperPosition: helperPosition,
          padding: maskSpace,
          tabIndex: -1,
          current: current,
          style: steps[current].style ? steps[current].style : {},
          rounded: rounded,
          className: cn(CN.helper.base, className, _defineProperty({}, CN.helper.isOpen, isOpen)),
          accentColor: accentColor,
          defaultStyles: !CustomHelper,
          role: "dialog"
        }, CustomHelper ? /*#__PURE__*/React__default.createElement(CustomHelper, {
          current: current,
          totalSteps: steps.length,
          gotoStep: this.gotoStep,
          close: onRequestClose,
          content: steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
            close: onRequestClose,
            goTo: this.gotoStep,
            inDOM: inDOM,
            step: current + 1
          }) : steps[current].content)
        }, this.props.children) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.props.children, steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
          close: onRequestClose,
          goTo: this.gotoStep,
          inDOM: inDOM,
          step: current + 1
        }) : steps[current].content), showNumber && /*#__PURE__*/React__default.createElement(Badge, {
          "data-tour-elem": "badge",
          accentColor: accentColor
        }, typeof badgeContent === 'function' ? badgeContent(current + 1, steps.length) : current + 1), (showButtons || showNavigation) && /*#__PURE__*/React__default.createElement(Controls, {
          "data-tour-elem": "controls"
        }, showButtons && /*#__PURE__*/React__default.createElement(Arrow$1, {
          onClick: typeof prevStep === 'function' ? prevStep : this.prevStep,
          disabled: current === 0,
          label: prevButton ? prevButton : null
        }), showNavigation && /*#__PURE__*/React__default.createElement(Navigation, {
          "data-tour-elem": "navigation"
        }, steps.map(function (s, i) {
          return /*#__PURE__*/React__default.createElement(Dot, {
            key: "".concat(s.selector ? s.selector : 'undef', "_").concat(i),
            onClick: function onClick() {
              return _this3.gotoStep(i);
            },
            current: current,
            index: i,
            accentColor: accentColor,
            disabled: current === i || disableDotsNavigation,
            showNumber: showNavigationNumber,
            "data-tour-elem": "dot",
            className: cn(CN.dot.base, _defineProperty({}, CN.dot.active, current === i)),
            "aria-label": s.navDotAriaLabel
          });
        })), showButtons && /*#__PURE__*/React__default.createElement(Arrow$1, {
          onClick: current === steps.length - 1 ? lastStepNextButton ? onRequestClose : function () {} : typeof nextStep === 'function' ? nextStep : this.nextStep,
          disabled: !lastStepNextButton && current === steps.length - 1,
          inverted: true,
          label: lastStepNextButton && current === steps.length - 1 ? lastStepNextButton : nextButton ? nextButton : null
        })), showCloseButton && /*#__PURE__*/React__default.createElement(StyledClose, {
          onClick: onRequestClose,
          className: "reactour__close",
          ariaLabel: closeButtonAriaLabel
        })))));
      }
      return null;
    }
  }]);
  return Tour;
}(Component);
var setNodeState = function setNodeState(node, step, helper) {
  if (!helper) return;
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var _hx$getNodeRect = getNodeRect(helper),
    helperWidth = _hx$getNodeRect.width,
    helperHeight = _hx$getNodeRect.height;
  var attrs = {
    top: h + 10,
    right: w / 2 + 9,
    bottom: h / 2 + 9,
    left: w / 2 - helperWidth / 2,
    width: 0,
    height: 0,
    w: w,
    h: h,
    helperPosition: 'center'
  };
  if (node) {
    attrs = getHighlightedRect(node, step);
  }
  return function update() {
    return _objectSpread2(_objectSpread2({
      w: w,
      h: h,
      helperWidth: helperWidth,
      helperHeight: helperHeight,
      helperPosition: step.position
    }, attrs), {}, {
      inDOM: node ? true : false
    });
  };
};
Tour.propTypes = propTypes;
Tour.defaultProps = defaultProps;

class ReactTourInput extends Component {
    constructor() {
        super(...arguments);
        this.state = { isTourVisible: false };
        this.closeTour = () => {
            this.setState({ isTourVisible: false });
        };
    }
    componentDidMount() {
        this.setState({ isTourVisible: true });
    }
    render() {
        return (createElement(Tour, { steps: this.props.arrayOfObjectsValue, isOpen: (this.state.isTourVisible && this.props.startTour) || false, accentColor: this.props.accentColor, closeWithMask: this.props.closeWithMask, disableDotsNavigation: this.props.disabledotsnavigation, disableKeyboardNavigation: this.props.disablekeyboardnavigation, showButtons: this.props.showButtons, showCloseButton: this.props.showCloseButtons, showNavigation: this.props.showNavigation, showNumber: this.props.showNumber, startAt: this.props.startAt, disableFocusLock: this.props.disableFocusLock, onRequestClose: this.closeTour }));
    }
}

class Reacttour extends Component {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        let startTourValue = false;
        let parsedArray = null;
        if (this.props.stepsKey.value != null) {
            startTourValue = true;
            parsedArray = JSON.parse(this.props.stepsKey.value || '');
        }
        startTourValue = ((_a = this.props.startTourKey) === null || _a === void 0 ? void 0 : _a.value) || false;
        let accentColorValue = ((_b = this.props.accentcolorKey) === null || _b === void 0 ? void 0 : _b.value) || '#007aff';
        let closeWithMaskValue = ((_c = this.props.closeWithMaskKey) === null || _c === void 0 ? void 0 : _c.value) || true;
        let disabledotsnavigationValue = ((_d = this.props.disabledotsnavigationKey) === null || _d === void 0 ? void 0 : _d.value) || false;
        let disablekeyboardnavigationValue = ((_e = this.props.disablekeyboardnavigationKey) === null || _e === void 0 ? void 0 : _e.value) || false;
        let showbuttonsValue = ((_f = this.props.showButtonsKey) === null || _f === void 0 ? void 0 : _f.value) || true;
        let showclosebuttonValue = ((_g = this.props.showCloseButtonsKey) === null || _g === void 0 ? void 0 : _g.value) || true;
        let showNavigationValue = ((_h = this.props.showNavigationKey) === null || _h === void 0 ? void 0 : _h.value) || true;
        let showNavigationNumberValue = ((_j = this.props.showNavigationNumberKey) === null || _j === void 0 ? void 0 : _j.value) || true;
        let showNumberValue = ((_k = this.props.showNumberKey) === null || _k === void 0 ? void 0 : _k.value) || true;
        let startAtValue = 0;
        if (((_l = this.props.startAtKey) === null || _l === void 0 ? void 0 : _l.value) != undefined) {
            startAtValue = Number((_m = this.props.startAtKey) === null || _m === void 0 ? void 0 : _m.value);
        }
        let disableFocusLockValue = ((_o = this.props.disableFocusLockKey) === null || _o === void 0 ? void 0 : _o.value) || false;
        return (createElement(ReactTourInput, { startTour: startTourValue, arrayOfObjectsValue: parsedArray, accentColor: accentColorValue, closeWithMask: closeWithMaskValue, disabledotsnavigation: disabledotsnavigationValue, disablekeyboardnavigation: disablekeyboardnavigationValue, showButtons: showbuttonsValue, showCloseButtons: showclosebuttonValue, showNavigation: showNavigationValue, showNavigationNumber: showNavigationNumberValue, showNumber: showNumberValue, startAt: startAtValue, disableFocusLock: disableFocusLockValue }));
    }
}

export { Reacttour };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3R0b3VyLm1qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLW91dGxpbmUtbWFuYWdlci9mb2N1cy1vdXRsaW5lLW1hbmFnZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3RvdXIvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Nyb2xsLXNtb290aC9kaXN0L3Rvb2xzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Njcm9sbC1zbW9vdGgvZGlzdC9zY3JvbGxTbW9vdGguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Nyb2xsLXNtb290aC9kaXN0L2FuY2hvclNjcm9sbC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zY3JvbGwtc21vb3RoL2Rpc3Qvb2JzZXJ2ZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zY3JvbGwtc21vb3RoL2Rpc3QvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Nyb2xscGFyZW50L3Njcm9sbHBhcmVudC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL2hhcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L2Fzc2lnblJlZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZVJlZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZU1lcmdlUmVmLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvRm9jdXNHdWFyZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L21lZGl1bS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L21lZGl1bS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L0xvY2suanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1jbGllbnRzaWRlLWVmZmVjdC9saWIvaW5kZXguZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy9hcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2FsbC1hZmZlY3RlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2lzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvdXRpbHMvdGFiT3JkZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy90YWJiYWJsZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy90YWJVdGlscy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL0RPTXV0aWxzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvdXRpbHMvcGFyZW50aW5nLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvZm9jdXNhYmxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L2ZvY3VzSW5zaWRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvZm9jdXNJc0hpZGRlbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2NvcnJlY3RGb2N1cy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2ZpcnN0Rm9jdXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9zb2x2ZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9mb2N1c01lcmdlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvc2V0Rm9jdXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlsLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvVHJhcC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L0NvbWJpbmF0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvQXV0b0ZvY3VzSW5zaWRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvTW92ZUZvY3VzSW5zaWRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvRnJlZUZvY3VzSW5zaWRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0b3VyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3RvdXIvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0b3VyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdG91ci9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdG91ci9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdG91ci9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdG91ci9kaXN0L3JlYWN0b3VyLmVzbS5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JlYWN0dG91cklucHV0LnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9SZWFjdHRvdXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxMiBUaGUgQ2hyb21pdW0gQXV0aG9ycywgVmxhZGltaXJzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuLyoqXG4gKiBmb2N1cy1vdXRsaW5lLW1hbmFnZXJcbiAqXG4gKiBXYXRjaCB1c2VycyBrZXlib2FyZCBpbnB1dCBhbmQgbWFuYWdlIHRoZSBmb2N1cyBvdXRsaW5lIHZpc2liaWxpdHlcbiAqL1xuXG4vKipcbiAqIFRoZSBjbGFzcyBuYW1lIHRvIHNldCBvbiB0aGUgZG9jdW1lbnQgZWxlbWVudC5cbiAqIEBjb25zdFxuICovXG52YXIgQ0xBU1NfTkFNRSA9ICdmb2N1cy1vdXRsaW5lLWhpZGRlbic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBzZXRzIGEgQ1NTIGNsYXNzIG5hbWUgb24gdGhlIEhUTUwgZWxlbWVudCB3aGVuIGEgdXNlciBwcmVzc2VzIHRoZVxuICogdGFiIGtleS4gSXQgcmVtb3ZlcyB0aGUgY2xhc3MgbmFtZSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZS5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgQ1NTIGxpa2UgdGhpczpcbiAqXG4gKiBodG1sLmZvY3VzLW91dGxpbmUtaGlkZGVuICo6Zm9jdXMge1xuICogICAgIG91dGxpbmU6IG5vbmU7XG4gKiB9XG4gKlxuICogQW5kIHRoZSBvdXRsaW5lIHdpbGwgb25seSBiZSBzaG93biBpZiB0aGUgdXNlciB1c2VzIHRoZSBrZXlib2FyZCB0byBnZXQgdG8gaXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEZvY3VzT3V0bGluZU1hbmFnZXIgKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGF0LmZvY3VzQnlLZXlib2FyZCA9IHRydWU7XG4gICAgfSwgdHJ1ZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGF0LmZvY3VzQnlLZXlib2FyZCA9IGZhbHNlO1xuICAgIH0sIHRydWUpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgb25seSB3aGVuIGZvY3VzIGlzIGFjdHVhbGx5IGNoYW5nZWQuXG4gICAgICAgIHRoYXQudXBkYXRlVmlzaWJpbGl0eSgpO1xuICAgIH0sIHRydWUpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oYXNGb2N1cygpKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5mb2N1c0J5S2V5Ym9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eSgpO1xufVxuXG5Gb2N1c091dGxpbmVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGZvY3VzIGNoYW5nZSBpcyB0cmlnZ2VyZWQgYnkgVEFCIGtleS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZvY3VzQnlLZXlib2FyZDogdHJ1ZSxcblxuICAgIHVwZGF0ZVZpc2liaWxpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSAhdGhpcy5mb2N1c0J5S2V5Ym9hcmQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGZvY3VzIG91dGxpbmUgc2hvdWxkIGJlIGhpZGRlbi5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FLCBoaWRkZW4pO1xuICAgIH0sXG5cbiAgICBnZXQgaGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FKTtcbiAgICB9XG59O1xuXG5uZXcgRm9jdXNPdXRsaW5lTWFuYWdlcigpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZWFzZUZ1bmN0aW9ucyA9IGV4cG9ydHMuZWFzZUZ1bmN0aW9ucyA9IHtcbiAgbGluZWFyOiBmdW5jdGlvbiBsaW5lYXIodCkge1xuICAgIHJldHVybiB0O1xuICB9LFxuICBlYXNlSW5RdWFkOiBmdW5jdGlvbiBlYXNlSW5RdWFkKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG4gIH0sXG4gIGVhc2VPdXRRdWFkOiBmdW5jdGlvbiBlYXNlT3V0UXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgKiAoMiAtIHQpO1xuICB9LFxuICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQpIHtcbiAgICByZXR1cm4gdCA8IC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHQ7XG4gIH0sXG4gIGVhc2VJbkN1YmljOiBmdW5jdGlvbiBlYXNlSW5DdWJpYyh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbiAgfSxcbiAgZWFzZU91dEN1YmljOiBmdW5jdGlvbiBlYXNlT3V0Q3ViaWModCkge1xuICAgIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG4gIH0sXG4gIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0KSB7XG4gICAgcmV0dXJuIHQgPCAuNSA/IDQgKiB0ICogdCAqIHQgOiAodCAtIDEpICogKDIgKiB0IC0gMikgKiAoMiAqIHQgLSAyKSArIDE7XG4gIH0sXG4gIGVhc2VJblF1YXJ0OiBmdW5jdGlvbiBlYXNlSW5RdWFydCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQ7XG4gIH0sXG4gIGVhc2VPdXRRdWFydDogZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQpIHtcbiAgICByZXR1cm4gMSAtIC0tdCAqIHQgKiB0ICogdDtcbiAgfSxcbiAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uIGVhc2VJbk91dFF1YXJ0KHQpIHtcbiAgICByZXR1cm4gdCA8IC41ID8gOCAqIHQgKiB0ICogdCAqIHQgOiAxIC0gOCAqIC0tdCAqIHQgKiB0ICogdDtcbiAgfSxcbiAgZWFzZUluUXVpbnQ6IGZ1bmN0aW9uIGVhc2VJblF1aW50KHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG4gIH0sXG4gIGVhc2VPdXRRdWludDogZnVuY3Rpb24gZWFzZU91dFF1aW50KHQpIHtcbiAgICByZXR1cm4gMSArIC0tdCAqIHQgKiB0ICogdCAqIHQ7XG4gIH0sXG4gIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiBlYXNlSW5PdXRRdWludCh0KSB7XG4gICAgcmV0dXJuIHQgPCAuNSA/IDE2ICogdCAqIHQgKiB0ICogdCAqIHQgOiAxICsgMTYgKiAtLXQgKiB0ICogdCAqIHQgKiB0O1xuICB9XG59O1xuXG52YXIgaXNOdW1lcmljID0gZXhwb3J0cy5pc051bWVyaWMgPSBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufTtcblxudmFyIHNldFBvc2l0aW9uID0gZXhwb3J0cy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIHNldFBvc2l0aW9uKGJlZ2luLCBlbmQsIGVsYXBzZWQsIGR1cmF0aW9uKSB7XG4gIHZhciBlYXNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiAnZWFzZUluT3V0Q3ViaWMnO1xuXG4gIHJldHVybiBlbGFwc2VkID4gZHVyYXRpb24gPyBlbmQgOiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBlYXNlRnVuY3Rpb25zW2Vhc2VdKGVsYXBzZWQgLyBkdXJhdGlvbik7XG59O1xuXG52YXIgY2FsY0VuZFBvaW50ID0gZXhwb3J0cy5jYWxjRW5kUG9pbnQgPSBmdW5jdGlvbiBjYWxjRW5kUG9pbnQodGFyZ2V0KSB7XG4gIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB3aW5kb3c7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgaWYgKGlzTnVtZXJpYyh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRhcmdldCkgKyBvZmZzZXQ7XG4gIH1cblxuICB2YXIgeSA9IGNvbnRleHQgPT09IHdpbmRvdyB8fCBjb250ZXh0ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBjb250ZXh0LnNjcm9sbFRvcCAtIGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gIHZhciBkaXN0YW5jZSA9IHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcgPyAteSA6IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB5O1xuXG4gIHJldHVybiBkaXN0YW5jZSArIG9mZnNldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF90b29scyA9IHJlcXVpcmUoXCIuL3Rvb2xzXCIpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIF9yZWYkZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uLFxuICAgICAgZHVyYXRpb24gPSBfcmVmJGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyA1MDAgOiBfcmVmJGR1cmF0aW9uLFxuICAgICAgX3JlZiRjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYkY29udGV4dCA9PT0gdW5kZWZpbmVkID8gd2luZG93IDogX3JlZiRjb250ZXh0LFxuICAgICAgX3JlZiRvZmZzZXQgPSBfcmVmLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9yZWYkb2Zmc2V0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRvZmZzZXQsXG4gICAgICBfcmVmJGVhc2UgPSBfcmVmLmVhc2UsXG4gICAgICBlYXNlID0gX3JlZiRlYXNlID09PSB1bmRlZmluZWQgPyBcImVhc2VJbk91dEN1YmljXCIgOiBfcmVmJGVhc2UsXG4gICAgICBjYWxsYmFjayA9IF9yZWYuY2FsbGJhY2s7XG5cbiAgaWYgKCh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgIT09IFwib2JqZWN0XCIpIHJldHVybjtcblxuICB2YXIgc3RhcnQgPSBjb250ZXh0LnNjcm9sbFRvcCAhPT0gbnVsbCAmJiBjb250ZXh0LnNjcm9sbFRvcCAhPT0gdW5kZWZpbmVkID8gY29udGV4dC5zY3JvbGxUb3AgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHZhciBlbmQgPSAoMCwgX3Rvb2xzLmNhbGNFbmRQb2ludCkodGFyZ2V0LCBjb250ZXh0LCBvZmZzZXQpO1xuICB2YXIgY2xvY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgdmFyIHJBRiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgdmFyIHRpY2sgPSBmdW5jdGlvbiB0aWNrKCkge1xuICAgIHZhciBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSBjbG9jaztcbiAgICB2YXIgcG9zID0gKDAsIF90b29scy5zZXRQb3NpdGlvbikoc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24sIGVhc2UpO1xuICAgIGlmIChjb250ZXh0ICE9PSB3aW5kb3cpIHtcbiAgICAgIGNvbnRleHQuc2Nyb2xsVG9wID0gcG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIHBvcyk7XG4gICAgfVxuXG4gICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgJiYgY2FsbGJhY2sodGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgckFGKHRpY2spO1xuICAgIH1cbiAgfTtcblxuICB0aWNrKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9zY3JvbGxTbW9vdGggPSByZXF1aXJlKCcuL3Njcm9sbFNtb290aCcpO1xuXG52YXIgX3Njcm9sbFNtb290aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxTbW9vdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIF9yZWYkcXVlcnkgPSBfcmVmLnF1ZXJ5LFxuICAgICAgcXVlcnkgPSBfcmVmJHF1ZXJ5ID09PSB1bmRlZmluZWQgPyAnW2hyZWZePVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdJyA6IF9yZWYkcXVlcnksXG4gICAgICBfcmVmJG1hdGNoID0gX3JlZi5tYXRjaCxcbiAgICAgIG1hdGNoID0gX3JlZiRtYXRjaCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQuaGFzaC5zdWJzdHJpbmcoMSkpO1xuICB9IDogX3JlZiRtYXRjaCxcbiAgICAgIF9yZWYkaGFzaENoYW5nZSA9IF9yZWYuaGFzaENoYW5nZSxcbiAgICAgIGhhc2hDaGFuZ2UgPSBfcmVmJGhhc2hDaGFuZ2UgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGhhc2hDaGFuZ2UsXG4gICAgICBzY3JvbGxTbW9vdGhDb25maWcgPSBfcmVmLnNjcm9sbFNtb290aENvbmZpZztcblxuICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGRlc3QgPSBtYXRjaChlLnRhcmdldCk7XG5cbiAgICBpZiAoIWRlc3QpIHJldHVybjtcblxuICAgIGlmIChoYXNoQ2hhbmdlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAnIycgKyBkZXN0LmlkKTtcbiAgICB9XG5cbiAgICAoMCwgX3Njcm9sbFNtb290aDIuZGVmYXVsdCkoZGVzdCwgX2V4dGVuZHMoe30sIHNjcm9sbFNtb290aENvbmZpZykpO1xuICB9O1xuXG4gIEFycmF5LmZyb20obGlua3MpLm1hcChmdW5jdGlvbiAobGluaykge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzID0gX3JlZi5hY3RpdmVDbGFzcyxcbiAgICAgIGFjdGl2ZUNsYXNzID0gX3JlZiRhY3RpdmVDbGFzcyA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiBfcmVmJGFjdGl2ZUNsYXNzLFxuICAgICAgX3JlZiRxdWVyeSA9IF9yZWYucXVlcnksXG4gICAgICBxdWVyeSA9IF9yZWYkcXVlcnkgPT09IHVuZGVmaW5lZCA/ICdbaHJlZl49XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pOm5vdChbaHJlZj1cIiMwXCJdKScgOiBfcmVmJHF1ZXJ5LFxuICAgICAgX3JlZiR0aHJlc2hvbGQgPSBfcmVmLnRocmVzaG9sZCxcbiAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB1bmRlZmluZWQgPyBbMC4yNSwgMC41LCAwLjc1XSA6IF9yZWYkdGhyZXNob2xkLFxuICAgICAgX3JlZiRkZXRlY3RUeXBlID0gX3JlZi5kZXRlY3RUeXBlLFxuICAgICAgZGV0ZWN0VHlwZSA9IF9yZWYkZGV0ZWN0VHlwZSA9PT0gdW5kZWZpbmVkID8gJ21heCcgOiBfcmVmJGRldGVjdFR5cGU7XG5cbiAgdmFyIG9wdGlvbnMgPSB7IHRocmVzaG9sZDogdGhyZXNob2xkIH07XG5cbiAgdmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSkge1xuICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuICB9O1xuICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gIH07XG5cbiAgdmFyIHVuc2V0QWxsQWN0aXZlcyA9IGZ1bmN0aW9uIHVuc2V0QWxsQWN0aXZlcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGFjdGl2ZUNsYXNzKS5mb3JFYWNoKHJlbW92ZUNsYXNzKTtcbiAgfTtcblxuICB2YXIgc2V0QWN0aXZlID0gZnVuY3Rpb24gc2V0QWN0aXZlKGFjdGl2ZU5vZGUpIHtcbiAgICB1bnNldEFsbEFjdGl2ZXMoKTtcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjJyArIGFjdGl2ZU5vZGUuaWQgKyAnXCJdJykpO1xuICB9O1xuXG4gIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gTWF0aFtkZXRlY3RUeXBlXS5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkodGhyZXNob2xkKSkpIHtcbiAgICAgICAgc2V0QWN0aXZlKGVudHJ5LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG4gIHZhciBvYnNlcnZlVGFyZ2V0ID0gZnVuY3Rpb24gb2JzZXJ2ZVRhcmdldChsaW5rKSB7XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgbGluay5oYXNoLnNsaWNlKDEpKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gIH07XG5cbiAgbGlua3MuZm9yRWFjaChvYnNlcnZlVGFyZ2V0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zY3JvbGxTbW9vdGggPSByZXF1aXJlKCcuL3Njcm9sbFNtb290aCcpO1xuXG52YXIgX3Njcm9sbFNtb290aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxTbW9vdGgpO1xuXG52YXIgX3Rvb2xzID0gcmVxdWlyZSgnLi90b29scycpO1xuXG52YXIgX2FuY2hvclNjcm9sbCA9IHJlcXVpcmUoJy4vYW5jaG9yU2Nyb2xsJyk7XG5cbnZhciBfYW5jaG9yU2Nyb2xsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuY2hvclNjcm9sbCk7XG5cbnZhciBfb2JzZXJ2ZSA9IHJlcXVpcmUoJy4vb2JzZXJ2ZScpO1xuXG52YXIgX29ic2VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdG86IF9zY3JvbGxTbW9vdGgyLmRlZmF1bHQsXG4gIGNhbGNFbmRQb2ludDogX3Rvb2xzLmNhbGNFbmRQb2ludCxcbiAgYW5jaG9yU2Nyb2xsOiBfYW5jaG9yU2Nyb2xsMi5kZWZhdWx0LFxuICBvYnNlcnZlOiBfb2JzZXJ2ZTIuZGVmYXVsdFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlNjcm9sbHBhcmVudCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcblxuICB2YXIgcGFyZW50cyA9IGZ1bmN0aW9uIChub2RlLCBwcykge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHsgcmV0dXJuIHBzOyB9XG5cbiAgICByZXR1cm4gcGFyZW50cyhub2RlLnBhcmVudE5vZGUsIHBzLmNvbmNhdChbbm9kZV0pKTtcbiAgfTtcblxuICB2YXIgc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgcHJvcCkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH07XG5cbiAgdmFyIG92ZXJmbG93ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gc3R5bGUobm9kZSwgXCJvdmVyZmxvd1wiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteVwiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteFwiKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgIHJldHVybiByZWdleC50ZXN0KG92ZXJmbG93KG5vZGUpKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHZhciBwcyA9IHBhcmVudHMobm9kZS5wYXJlbnROb2RlLCBbXSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2Nyb2xsKHBzW2ldKSkge1xuICAgICAgICByZXR1cm4gcHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiBzY3JvbGxQYXJlbnQ7XG59KSk7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gcmVxdWlyZSgnLi9saWIvaGFzJyk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHsgLyoqLyB9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICtcbiAgICAgICAgICAgICAgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9saWIvaGFzJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBiaWdpbnQ6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdiaWdpbnQnKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSwgZGF0YSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgPyBkYXRhOiB7fTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSxcbiAgICAgICAgICB7ZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGV9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIHZhciBjaGVja2VyUmVzdWx0ID0gY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGNoZWNrZXJSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja2VyUmVzdWx0LmRhdGEgJiYgaGFzKGNoZWNrZXJSZXN1bHQuZGF0YSwgJ2V4cGVjdGVkVHlwZScpKSB7XG4gICAgICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGNoZWNrZXJSZXN1bHQuZGF0YS5leHBlY3RlZFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgZXhwZWN0ZWRUeXBlc01lc3NhZ2UgPSAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPiAwKSA/ICcsIGV4cGVjdGVkIG9uZSBvZiB0eXBlIFsnICsgZXhwZWN0ZWRUeXBlcy5qb2luKCcsICcpICsgJ10nOiAnJztcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AnICsgZXhwZWN0ZWRUeXBlc01lc3NhZ2UgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmFsaWRWYWxpZGF0b3JFcnJvcihjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBrZXksIHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHByb3BGdWxsTmFtZSArICcuJyArIGtleSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZSArICdgLidcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsaWRhdG9yRXJyb3IoY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwga2V5LCBnZXRQcmVjaXNlVHlwZShjaGVja2VyKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb20gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoaGFzKHNoYXBlVHlwZXMsIGtleSkgJiYgdHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gaW52YWxpZFZhbGlkYXRvckVycm9yKGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIGtleSwgZ2V0UHJlY2lzZVR5cGUoY2hlY2tlcikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiZXhwb3J0IHZhciBGT0NVU19HUk9VUCA9ICdkYXRhLWZvY3VzLWxvY2snO1xuZXhwb3J0IHZhciBGT0NVU19ESVNBQkxFRCA9ICdkYXRhLWZvY3VzLWxvY2stZGlzYWJsZWQnO1xuZXhwb3J0IHZhciBGT0NVU19BTExPVyA9ICdkYXRhLW5vLWZvY3VzLWxvY2snO1xuZXhwb3J0IHZhciBGT0NVU19BVVRPID0gJ2RhdGEtYXV0b2ZvY3VzLWluc2lkZSc7XG4iLCIvKipcbiAqIEFzc2lnbnMgYSB2YWx1ZSBmb3IgYSBnaXZlbiByZWYsIG5vIG1hdHRlciBvZiB0aGUgcmVmIGZvcm1hdFxuICogQHBhcmFtIHtSZWZPYmplY3R9IHJlZiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gb3IgcmVmIG9iamVjdFxuICogQHBhcmFtIHZhbHVlIC0gYSBuZXcgdmFsdWVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiNhc3NpZ25yZWZcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWZPYmplY3QgPSB1c2VSZWYoKTtcbiAqIGNvbnN0IHJlZkZuID0gKHJlZikgPT4gey4uLi59XG4gKlxuICogYXNzaWduUmVmKHJlZk9iamVjdCwgXCJyZWZWYWx1ZVwiKTtcbiAqIGFzc2lnblJlZihyZWZGbiwgXCJyZWZWYWx1ZVwiKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblJlZihyZWYsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVmKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZWY7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogY3JlYXRlcyBhIE11dGFibGVSZWYgd2l0aCByZWYgY2hhbmdlIGNhbGxiYWNrXG4gKiBAcGFyYW0gaW5pdGlhbFZhbHVlIC0gaW5pdGlhbCByZWYgdmFsdWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gYSBjYWxsYmFjayB0byBydW4gd2hlbiB2YWx1ZSBjaGFuZ2VzXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlZiA9IHVzZUNhbGxiYWNrUmVmKDAsIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IGNvbnNvbGUubG9nKG9sZFZhbHVlLCAnLT4nLCBuZXdWYWx1ZSk7XG4gKiByZWYuY3VycmVudCA9IDE7XG4gKiAvLyBwcmludHMgMCAtPiAxXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlcmVmXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiN1c2VjYWxsYmFja3JlZi0tLXRvLXJlcGxhY2UtcmVhY3R1c2VyZWZcbiAqIEByZXR1cm5zIHtNdXRhYmxlUmVmT2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoaW5pdGlhbFZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciByZWYgPSB1c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAvLyB2YWx1ZVxuICAgICAgICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAvLyBsYXN0IGNhbGxiYWNrXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgLy8gXCJtZW1vaXplZFwiIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAgICAgZmFjYWRlOiB7XG4gICAgICAgICAgICBnZXQgY3VycmVudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCBjdXJyZW50KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3QgPSByZWYudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZWYuY2FsbGJhY2sodmFsdWUsIGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7IH0pWzBdO1xuICAgIC8vIHVwZGF0ZSBjYWxsYmFja1xuICAgIHJlZi5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHJldHVybiByZWYuZmFjYWRlO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXNzaWduUmVmIH0gZnJvbSAnLi9hc3NpZ25SZWYnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2tSZWYgfSBmcm9tICcuL3VzZVJlZic7XG52YXIgY3VycmVudFZhbHVlcyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIE1lcmdlcyB0d28gb3IgbW9yZSByZWZzIHRvZ2V0aGVyIHByb3ZpZGluZyBhIHNpbmdsZSBpbnRlcmZhY2UgdG8gc2V0IHRoZWlyIHZhbHVlXG4gKiBAcGFyYW0ge1JlZk9iamVjdHxSZWZ9IHJlZnNcbiAqIEByZXR1cm5zIHtNdXRhYmxlUmVmT2JqZWN0fSAtIGEgbmV3IHJlZiwgd2hpY2ggdHJhbnNsYXRlcyBhbGwgY2hhbmdlcyB0byB7cmVmc31cbiAqXG4gKiBAc2VlIHtAbGluayBtZXJnZVJlZnN9IGEgdmVyc2lvbiB3aXRob3V0IGJ1aXQtaW4gbWVtb2l6YXRpb25cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3VzZW1lcmdlcmVmc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3Qgb3duUmVmID0gdXNlUmVmKCk7XG4gKiAgIGNvbnN0IGRvbVJlZiA9IHVzZU1lcmdlUmVmcyhbcmVmLCBvd25SZWZdKTsgLy8g8J+RiCBtZXJnZSB0b2dldGhlclxuICogICByZXR1cm4gPGRpdiByZWY9e2RvbVJlZn0+Li4uPC9kaXY+XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZVJlZnMocmVmcywgZGVmYXVsdFZhbHVlKSB7XG4gICAgdmFyIGNhbGxiYWNrUmVmID0gdXNlQ2FsbGJhY2tSZWYoZGVmYXVsdFZhbHVlIHx8IG51bGwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuIGFzc2lnblJlZihyZWYsIG5ld1ZhbHVlKTsgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIHJlZnMgY2hhbmdlcyAtIGFkZGVkIG9yIHJlbW92ZWRcbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBjdXJyZW50VmFsdWVzLmdldChjYWxsYmFja1JlZik7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIHByZXZSZWZzXzEgPSBuZXcgU2V0KG9sZFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBuZXh0UmVmc18xID0gbmV3IFNldChyZWZzKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50XzEgPSBjYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgcHJldlJlZnNfMS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHRSZWZzXzEuaGFzKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduUmVmKHJlZiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0UmVmc18xLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgIGlmICghcHJldlJlZnNfMS5oYXMocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25SZWYocmVmLCBjdXJyZW50XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRWYWx1ZXMuc2V0KGNhbGxiYWNrUmVmLCByZWZzKTtcbiAgICB9LCBbcmVmc10pO1xuICAgIHJldHVybiBjYWxsYmFja1JlZjtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5leHBvcnQgdmFyIGhpZGRlbkd1YXJkID0ge1xuICB3aWR0aDogJzFweCcsXG4gIGhlaWdodDogJzBweCcsXG4gIHBhZGRpbmc6IDAsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHRvcDogJzFweCcsXG4gIGxlZnQ6ICcxcHgnXG59O1xuXG52YXIgSW5Gb2N1c0d1YXJkID0gZnVuY3Rpb24gSW5Gb2N1c0d1YXJkKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAga2V5OiBcImd1YXJkLWZpcnN0XCIsXG4gICAgXCJkYXRhLWZvY3VzLWd1YXJkXCI6IHRydWUsXG4gICAgXCJkYXRhLWZvY3VzLWF1dG8tZ3VhcmRcIjogdHJ1ZSxcbiAgICBzdHlsZTogaGlkZGVuR3VhcmRcbiAgfSksIGNoaWxkcmVuLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAga2V5OiBcImd1YXJkLWxhc3RcIixcbiAgICBcImRhdGEtZm9jdXMtZ3VhcmRcIjogdHJ1ZSxcbiAgICBcImRhdGEtZm9jdXMtYXV0by1ndWFyZFwiOiB0cnVlLFxuICAgIHN0eWxlOiBoaWRkZW5HdWFyZFxuICB9KSk7XG59O1xuXG5JbkZvY3VzR3VhcmQucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn0gOiB7fTtcbkluRm9jdXNHdWFyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsXG59O1xuZXhwb3J0IGRlZmF1bHQgSW5Gb2N1c0d1YXJkOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuZnVuY3Rpb24gSXRvSShhKSB7XG4gICAgcmV0dXJuIGE7XG59XG5mdW5jdGlvbiBpbm5lckNyZWF0ZU1lZGl1bShkZWZhdWx0cywgbWlkZGxld2FyZSkge1xuICAgIGlmIChtaWRkbGV3YXJlID09PSB2b2lkIDApIHsgbWlkZGxld2FyZSA9IEl0b0k7IH1cbiAgICB2YXIgYnVmZmVyID0gW107XG4gICAgdmFyIGFzc2lnbmVkID0gZmFsc2U7XG4gICAgdmFyIG1lZGl1bSA9IHtcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFzc2lnbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaWRlY2FyOiBjb3VsZCBub3QgYHJlYWRgIGZyb20gYW4gYGFzc2lnbmVkYCBtZWRpdW0uIGByZWFkYCBjb3VsZCBiZSB1c2VkIG9ubHkgd2l0aCBgdXNlTWVkaXVtYC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcltidWZmZXIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZU1lZGl1bTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gbWlkZGxld2FyZShkYXRhLCBhc3NpZ25lZCk7XG4gICAgICAgICAgICBidWZmZXIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAhPT0gaXRlbTsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBhc3NpZ25TeW5jTWVkaXVtOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFzc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNicyA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgICAgICAgICAgICBjYnMuZm9yRWFjaChjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWZmZXIgPSB7XG4gICAgICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGNiKHgpOyB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVmZmVyOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgYXNzaWduTWVkaXVtOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIGFzc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwZW5kaW5nUXVldWUgPSBbXTtcbiAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNicyA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgICAgICAgICAgICBjYnMuZm9yRWFjaChjYik7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1F1ZXVlID0gYnVmZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV4ZWN1dGVRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2JzID0gcGVuZGluZ1F1ZXVlO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGNicy5mb3JFYWNoKGNiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3ljbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGV4ZWN1dGVRdWV1ZSk7IH07XG4gICAgICAgICAgICBjeWNsZSgpO1xuICAgICAgICAgICAgYnVmZmVyID0ge1xuICAgICAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZS5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBjeWNsZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZSA9IHBlbmRpbmdRdWV1ZS5maWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBtZWRpdW07XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVkaXVtKGRlZmF1bHRzLCBtaWRkbGV3YXJlKSB7XG4gICAgaWYgKG1pZGRsZXdhcmUgPT09IHZvaWQgMCkgeyBtaWRkbGV3YXJlID0gSXRvSTsgfVxuICAgIHJldHVybiBpbm5lckNyZWF0ZU1lZGl1bShkZWZhdWx0cywgbWlkZGxld2FyZSk7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGVjYXJNZWRpdW0ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIG1lZGl1bSA9IGlubmVyQ3JlYXRlTWVkaXVtKG51bGwpO1xuICAgIG1lZGl1bS5vcHRpb25zID0gX19hc3NpZ24oeyBhc3luYzogdHJ1ZSwgc3NyOiBmYWxzZSB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbWVkaXVtO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTWVkaXVtLCBjcmVhdGVTaWRlY2FyTWVkaXVtIH0gZnJvbSAndXNlLXNpZGVjYXInO1xuZXhwb3J0IHZhciBtZWRpdW1Gb2N1cyA9IGNyZWF0ZU1lZGl1bSh7fSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgY3VycmVudFRhcmdldCA9IF9yZWYuY3VycmVudFRhcmdldDtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICBjdXJyZW50VGFyZ2V0OiBjdXJyZW50VGFyZ2V0XG4gIH07XG59KTtcbmV4cG9ydCB2YXIgbWVkaXVtQmx1ciA9IGNyZWF0ZU1lZGl1bSgpO1xuZXhwb3J0IHZhciBtZWRpdW1FZmZlY3QgPSBjcmVhdGVNZWRpdW0oKTtcbmV4cG9ydCB2YXIgbWVkaXVtU2lkZWNhciA9IGNyZWF0ZVNpZGVjYXJNZWRpdW0oe1xuICBhc3luYzogdHJ1ZVxufSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlLCBib29sLCBzdHJpbmcsIGFueSwgYXJyYXlPZiwgb25lT2ZUeXBlLCBvYmplY3QsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICdmb2N1cy1sb2NrL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VNZXJnZVJlZnMgfSBmcm9tICd1c2UtY2FsbGJhY2stcmVmJztcbmltcG9ydCB7IGhpZGRlbkd1YXJkIH0gZnJvbSAnLi9Gb2N1c0d1YXJkJztcbmltcG9ydCB7IG1lZGl1bUZvY3VzLCBtZWRpdW1CbHVyLCBtZWRpdW1TaWRlY2FyIH0gZnJvbSAnLi9tZWRpdW0nO1xudmFyIGVtcHR5QXJyYXkgPSBbXTtcbnZhciBGb2N1c0xvY2sgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb2N1c0xvY2tVSShwcm9wcywgcGFyZW50UmVmKSB7XG4gIHZhciBfZXh0ZW5kczI7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKCksXG4gICAgICByZWFsT2JzZXJ2ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRPYnNlcnZlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgb2JzZXJ2ZWQgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGlzQWN0aXZlID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIG9yaWdpbmFsRm9jdXNlZEVsZW1lbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIG5vRm9jdXNHdWFyZHMgPSBwcm9wcy5ub0ZvY3VzR3VhcmRzLFxuICAgICAgcGVyc2lzdGVudEZvY3VzID0gcHJvcHMucGVyc2lzdGVudEZvY3VzLFxuICAgICAgY3Jvc3NGcmFtZSA9IHByb3BzLmNyb3NzRnJhbWUsXG4gICAgICBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhbGxvd1RleHRTZWxlY3Rpb24gPSBwcm9wcy5hbGxvd1RleHRTZWxlY3Rpb24sXG4gICAgICBncm91cCA9IHByb3BzLmdyb3VwLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgd2hpdGVMaXN0ID0gcHJvcHMud2hpdGVMaXN0LFxuICAgICAgX3Byb3BzJHNoYXJkcyA9IHByb3BzLnNoYXJkcyxcbiAgICAgIHNoYXJkcyA9IF9wcm9wcyRzaGFyZHMgPT09IHZvaWQgMCA/IGVtcHR5QXJyYXkgOiBfcHJvcHMkc2hhcmRzLFxuICAgICAgX3Byb3BzJGFzID0gcHJvcHMuYXMsXG4gICAgICBDb250YWluZXIgPSBfcHJvcHMkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGFzLFxuICAgICAgX3Byb3BzJGxvY2tQcm9wcyA9IHByb3BzLmxvY2tQcm9wcyxcbiAgICAgIGNvbnRhaW5lclByb3BzID0gX3Byb3BzJGxvY2tQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkbG9ja1Byb3BzLFxuICAgICAgU2lkZUNhciA9IHByb3BzLnNpZGVDYXIsXG4gICAgICBzaG91bGRSZXR1cm5Gb2N1cyA9IHByb3BzLnJldHVybkZvY3VzLFxuICAgICAgb25BY3RpdmF0aW9uQ2FsbGJhY2sgPSBwcm9wcy5vbkFjdGl2YXRpb24sXG4gICAgICBvbkRlYWN0aXZhdGlvbkNhbGxiYWNrID0gcHJvcHMub25EZWFjdGl2YXRpb247XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBpZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF07IC8vIFNJREUgRUZGRUNUIENBTExCQUNLU1xuXG5cbiAgdmFyIG9uQWN0aXZhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBvcmlnaW5hbEZvY3VzZWRFbGVtZW50LmN1cnJlbnQgPSBvcmlnaW5hbEZvY3VzZWRFbGVtZW50LmN1cnJlbnQgfHwgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIGlmIChvYnNlcnZlZC5jdXJyZW50ICYmIG9uQWN0aXZhdGlvbkNhbGxiYWNrKSB7XG4gICAgICBvbkFjdGl2YXRpb25DYWxsYmFjayhvYnNlcnZlZC5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpc0FjdGl2ZS5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW29uQWN0aXZhdGlvbkNhbGxiYWNrXSk7XG4gIHZhciBvbkRlYWN0aXZhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpc0FjdGl2ZS5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICBpZiAob25EZWFjdGl2YXRpb25DYWxsYmFjaykge1xuICAgICAgb25EZWFjdGl2YXRpb25DYWxsYmFjayhvYnNlcnZlZC5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtvbkRlYWN0aXZhdGlvbkNhbGxiYWNrXSk7XG4gIHZhciByZXR1cm5Gb2N1cyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChhbGxvd0RlZmVyKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBvcmlnaW5hbEZvY3VzZWRFbGVtZW50LmN1cnJlbnQ7XG5cbiAgICBpZiAoQm9vbGVhbihzaG91bGRSZXR1cm5Gb2N1cykgJiYgY3VycmVudCAmJiBjdXJyZW50LmZvY3VzKSB7XG4gICAgICB2YXIgZm9jdXNPcHRpb25zID0gdHlwZW9mIHNob3VsZFJldHVybkZvY3VzID09PSAnb2JqZWN0JyA/IHNob3VsZFJldHVybkZvY3VzIDogdW5kZWZpbmVkO1xuICAgICAgb3JpZ2luYWxGb2N1c2VkRWxlbWVudC5jdXJyZW50ID0gbnVsbDtcblxuICAgICAgaWYgKGFsbG93RGVmZXIpIHtcbiAgICAgICAgLy8gUmVhY3QgbWlnaHQgcmV0dXJuIGZvY3VzIGFmdGVyIHVwZGF0ZVxuICAgICAgICAvLyBpdCdzIHNhZmVyIHRvIGRlZmVyIHRoZSBhY3Rpb25cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnQuZm9jdXMoZm9jdXNPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50LmZvY3VzKGZvY3VzT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc2hvdWxkUmV0dXJuRm9jdXNdKTsgLy8gTUVESVVNIENBTExCQUNLU1xuXG4gIHZhciBvbkZvY3VzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGlzQWN0aXZlLmN1cnJlbnQpIHtcbiAgICAgIG1lZGl1bUZvY3VzLnVzZU1lZGl1bShldmVudCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBvbkJsdXIgPSBtZWRpdW1CbHVyLnVzZU1lZGl1bTsgLy8gUkVGIFBST1BBR0FUSU9OXG4gIC8vIG5vdCB1c2luZyByZWFsIHJlZnMgZHVlIHRvIHJhY2UgY29uZGl0aW9uc1xuXG4gIHZhciBzZXRPYnNlcnZlTm9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdPYnNlcnZlZCkge1xuICAgIGlmIChvYnNlcnZlZC5jdXJyZW50ICE9PSBuZXdPYnNlcnZlZCkge1xuICAgICAgb2JzZXJ2ZWQuY3VycmVudCA9IG5ld09ic2VydmVkO1xuICAgICAgc2V0T2JzZXJ2ZWQobmV3T2JzZXJ2ZWQpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBhbGxvd1RleHRTZWxlY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Gb2N1cy1Mb2NrOiBhbGxvd1RleHRTZWxlY3Rpb24gaXMgZGVwcmVjYXRlZCBhbmQgZW5hYmxlZCBieSBkZWZhdWx0Jyk7XG4gICAgfVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghb2JzZXJ2ZWQuY3VycmVudCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKCdGb2N1c0xvY2s6IGNvdWxkIG5vdCBvYnRhaW4gcmVmIHRvIGludGVybmFsIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9LCBbXSk7XG4gIH1cblxuICB2YXIgbG9ja1Byb3BzID0gX2V4dGVuZHMoKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY29uc3RhbnRzLkZPQ1VTX0RJU0FCTEVEXSA9IGRpc2FibGVkICYmICdkaXNhYmxlZCcsIF9leHRlbmRzMltjb25zdGFudHMuRk9DVVNfR1JPVVBdID0gZ3JvdXAsIF9leHRlbmRzMiksIGNvbnRhaW5lclByb3BzKTtcblxuICB2YXIgaGFzTGVhZGluZ0d1YXJkcyA9IG5vRm9jdXNHdWFyZHMgIT09IHRydWU7XG4gIHZhciBoYXNUYWlsaW5nR3VhcmRzID0gaGFzTGVhZGluZ0d1YXJkcyAmJiBub0ZvY3VzR3VhcmRzICE9PSAndGFpbCc7XG4gIHZhciBtZXJnZWRSZWYgPSB1c2VNZXJnZVJlZnMoW3BhcmVudFJlZiwgc2V0T2JzZXJ2ZU5vZGVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBoYXNMZWFkaW5nR3VhcmRzICYmIFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAga2V5OiBcImd1YXJkLWZpcnN0XCIsXG4gICAgXCJkYXRhLWZvY3VzLWd1YXJkXCI6IHRydWUsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gLTEgOiAwLFxuICAgIHN0eWxlOiBoaWRkZW5HdWFyZFxuICB9KSxcbiAgLyojX19QVVJFX18qL1xuICAvLyBuZWFyZXN0IGZvY3VzIGd1YXJkXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGtleTogXCJndWFyZC1uZWFyZXN0XCIsXG4gICAgXCJkYXRhLWZvY3VzLWd1YXJkXCI6IHRydWUsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gLTEgOiAxLFxuICAgIHN0eWxlOiBoaWRkZW5HdWFyZFxuICB9KSAvLyBmaXJzdCB0YWJiZWQgZWxlbWVudCBndWFyZFxuICBdLCAhZGlzYWJsZWQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZUNhciwge1xuICAgIGlkOiBpZCxcbiAgICBzaWRlQ2FyOiBtZWRpdW1TaWRlY2FyLFxuICAgIG9ic2VydmVkOiByZWFsT2JzZXJ2ZWQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIHBlcnNpc3RlbnRGb2N1czogcGVyc2lzdGVudEZvY3VzLFxuICAgIGNyb3NzRnJhbWU6IGNyb3NzRnJhbWUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgd2hpdGVMaXN0OiB3aGl0ZUxpc3QsXG4gICAgc2hhcmRzOiBzaGFyZHMsXG4gICAgb25BY3RpdmF0aW9uOiBvbkFjdGl2YXRpb24sXG4gICAgb25EZWFjdGl2YXRpb246IG9uRGVhY3RpdmF0aW9uLFxuICAgIHJldHVybkZvY3VzOiByZXR1cm5Gb2N1c1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBtZXJnZWRSZWZcbiAgfSwgbG9ja1Byb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgb25Gb2N1czogb25Gb2N1c1xuICB9KSwgY2hpbGRyZW4pLCBoYXNUYWlsaW5nR3VhcmRzICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBcImRhdGEtZm9jdXMtZ3VhcmRcIjogdHJ1ZSxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgc3R5bGU6IGhpZGRlbkd1YXJkXG4gIH0pKTtcbn0pO1xuRm9jdXNMb2NrLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IG5vZGUsXG4gIGRpc2FibGVkOiBib29sLFxuICByZXR1cm5Gb2N1czogb25lT2ZUeXBlKFtib29sLCBvYmplY3RdKSxcbiAgbm9Gb2N1c0d1YXJkczogYm9vbCxcbiAgYWxsb3dUZXh0U2VsZWN0aW9uOiBib29sLFxuICBhdXRvRm9jdXM6IGJvb2wsXG4gIHBlcnNpc3RlbnRGb2N1czogYm9vbCxcbiAgY3Jvc3NGcmFtZTogYm9vbCxcbiAgZ3JvdXA6IHN0cmluZyxcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIHdoaXRlTGlzdDogZnVuYyxcbiAgc2hhcmRzOiBhcnJheU9mKGFueSksXG4gIGFzOiBvbmVPZlR5cGUoW3N0cmluZywgZnVuYywgb2JqZWN0XSksXG4gIGxvY2tQcm9wczogb2JqZWN0LFxuICBvbkFjdGl2YXRpb246IGZ1bmMsXG4gIG9uRGVhY3RpdmF0aW9uOiBmdW5jLFxuICBzaWRlQ2FyOiBhbnkuaXNSZXF1aXJlZFxufSA6IHt9O1xuRm9jdXNMb2NrLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICByZXR1cm5Gb2N1czogZmFsc2UsXG4gIG5vRm9jdXNHdWFyZHM6IGZhbHNlLFxuICBhdXRvRm9jdXM6IHRydWUsXG4gIHBlcnNpc3RlbnRGb2N1czogZmFsc2UsXG4gIGNyb3NzRnJhbWU6IHRydWUsXG4gIGFsbG93VGV4dFNlbGVjdGlvbjogdW5kZWZpbmVkLFxuICBncm91cDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgd2hpdGVMaXN0OiB1bmRlZmluZWQsXG4gIHNoYXJkczogdW5kZWZpbmVkLFxuICBhczogJ2RpdicsXG4gIGxvY2tQcm9wczoge30sXG4gIG9uQWN0aXZhdGlvbjogdW5kZWZpbmVkLFxuICBvbkRlYWN0aXZhdGlvbjogdW5kZWZpbmVkXG59O1xuZXhwb3J0IGRlZmF1bHQgRm9jdXNMb2NrOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAodHlwZW9mIHJlZHVjZVByb3BzVG9TdGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCByZWR1Y2VQcm9wc1RvU3RhdGUgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgV3JhcHBlZENvbXBvbmVudCB0byBiZSBhIFJlYWN0IGNvbXBvbmVudC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgIHZhciBzdGF0ZTtcblxuICAgIGZ1bmN0aW9uIGVtaXRDaGFuZ2UoKSB7XG4gICAgICBzdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZShtb3VudGVkSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzO1xuICAgICAgfSkpO1xuICAgICAgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChzdGF0ZSk7XG4gICAgfVxuXG4gICAgdmFyIFNpZGVFZmZlY3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShTaWRlRWZmZWN0LCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNpZGVFZmZlY3QoKSB7XG4gICAgICAgIHJldHVybiBfUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byB1c2UgZGlzcGxheU5hbWUgb2Ygd3JhcHBlZCBjb21wb25lbnRcbiAgICAgIFNpZGVFZmZlY3QucGVlayA9IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaWRlRWZmZWN0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG1vdW50ZWRJbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgICB9KFB1cmVDb21wb25lbnQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KFNpZGVFZmZlY3QsIFwiZGlzcGxheU5hbWVcIiwgXCJTaWRlRWZmZWN0KFwiICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyBcIilcIik7XG5cbiAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNpZGVFZmZlY3Q7XG4iLCJleHBvcnQgdmFyIHRvQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciByZXQgPSBBcnJheShhLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHJldFtpXSA9IGFbaV07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuZXhwb3J0IHZhciBhc0FycmF5ID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXSk7IH07XG4iLCJpbXBvcnQgeyBGT0NVU19ESVNBQkxFRCwgRk9DVVNfR1JPVVAgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYXNBcnJheSwgdG9BcnJheSB9IGZyb20gJy4vYXJyYXknO1xudmFyIGZpbHRlck5lc3RlZCA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgIHZhciBjb250YWluZWQgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGwgPSBub2Rlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbDsgaiArPSAxKSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBub2Rlc1tpXS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2Rlc1tqXSk7XG4gICAgICAgICAgICBpZiAoKHBvc2l0aW9uICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lZC5hZGQoaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHBvc2l0aW9uICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlOUykgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVkLmFkZChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChfLCBpbmRleCkgeyByZXR1cm4gIWNvbnRhaW5lZC5oYXMoaW5kZXgpOyB9KTtcbn07XG52YXIgZ2V0VG9wUGFyZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlID8gZ2V0VG9wUGFyZW50KG5vZGUucGFyZW50Tm9kZSkgOiBub2RlO1xufTtcbmV4cG9ydCB2YXIgZ2V0QWxsQWZmZWN0ZWROb2RlcyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIG5vZGVzID0gYXNBcnJheShub2RlKTtcbiAgICByZXR1cm4gbm9kZXMuZmlsdGVyKEJvb2xlYW4pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyZW50Tm9kZSkge1xuICAgICAgICB2YXIgZ3JvdXAgPSBjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoRk9DVVNfR1JPVVApO1xuICAgICAgICBhY2MucHVzaC5hcHBseShhY2MsIChncm91cFxuICAgICAgICAgICAgPyBmaWx0ZXJOZXN0ZWQodG9BcnJheShnZXRUb3BQYXJlbnQoY3VycmVudE5vZGUpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIgKyBGT0NVU19HUk9VUCArIFwiPVxcXCJcIiArIGdyb3VwICsgXCJcXFwiXTpub3QoW1wiICsgRk9DVVNfRElTQUJMRUQgKyBcIj1cXFwiZGlzYWJsZWRcXFwiXSlcIikpKVxuICAgICAgICAgICAgOiBbY3VycmVudE5vZGVdKSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xufTtcbiIsInZhciBpc0VsZW1lbnRIaWRkZW4gPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gICAgaWYgKCFjb21wdXRlZFN0eWxlIHx8ICFjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpID09PSAnbm9uZScgfHwgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKTtcbn07XG52YXIgaXNWaXNpYmxlVW5jYWNoZWQgPSBmdW5jdGlvbiAobm9kZSwgY2hlY2tQYXJlbnQpIHtcbiAgICByZXR1cm4gIW5vZGUgfHxcbiAgICAgICAgbm9kZSA9PT0gZG9jdW1lbnQgfHxcbiAgICAgICAgKG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB8fFxuICAgICAgICAoIWlzRWxlbWVudEhpZGRlbihub2RlKSAmJlxuICAgICAgICAgICAgY2hlY2tQYXJlbnQobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFXG4gICAgICAgICAgICAgICAgPyBub2RlLnBhcmVudE5vZGUuaG9zdFxuICAgICAgICAgICAgICAgIDogbm9kZS5wYXJlbnROb2RlKSk7XG59O1xuZXhwb3J0IHZhciBpc1Zpc2libGVDYWNoZWQgPSBmdW5jdGlvbiAodmlzaWJpbGl0eUNhY2hlLCBub2RlKSB7XG4gICAgdmFyIGNhY2hlZCA9IHZpc2liaWxpdHlDYWNoZS5nZXQobm9kZSk7XG4gICAgaWYgKGNhY2hlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBpc1Zpc2libGVVbmNhY2hlZChub2RlLCBpc1Zpc2libGVDYWNoZWQuYmluZCh1bmRlZmluZWQsIHZpc2liaWxpdHlDYWNoZSkpO1xuICAgIHZpc2liaWxpdHlDYWNoZS5zZXQobm9kZSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCB2YXIgbm90SGlkZGVuSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiAhKChub2RlLnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgbm9kZS50YWdOYW1lID09PSAnQlVUVE9OJykgJiYgKG5vZGUudHlwZSA9PT0gJ2hpZGRlbicgfHwgbm9kZS5kaXNhYmxlZCkpO1xufTtcbmV4cG9ydCB2YXIgaXNHdWFyZCA9IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS5kYXRhc2V0ICYmIG5vZGUuZGF0YXNldC5mb2N1c0d1YXJkKTsgfTtcbmV4cG9ydCB2YXIgaXNOb3RBR3VhcmQgPSBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gIWlzR3VhcmQobm9kZSk7IH07XG5leHBvcnQgdmFyIGlzRGVmaW5lZCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiBCb29sZWFuKHgpOyB9O1xuIiwiaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vYXJyYXknO1xuZXhwb3J0IHZhciB0YWJTb3J0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgdGFiRGlmZiA9IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xuICAgIHZhciBpbmRleERpZmYgPSBhLmluZGV4IC0gYi5pbmRleDtcbiAgICBpZiAodGFiRGlmZikge1xuICAgICAgICBpZiAoIWEudGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYi50YWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YWJEaWZmIHx8IGluZGV4RGlmZjtcbn07XG5leHBvcnQgdmFyIG9yZGVyQnlUYWJJbmRleCA9IGZ1bmN0aW9uIChub2RlcywgZmlsdGVyTmVnYXRpdmUsIGtlZXBHdWFyZHMpIHtcbiAgICByZXR1cm4gdG9BcnJheShub2RlcylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHsgcmV0dXJuICh7XG4gICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgdGFiSW5kZXg6IGtlZXBHdWFyZHMgJiYgbm9kZS50YWJJbmRleCA9PT0gLTEgPyAoKG5vZGUuZGF0YXNldCB8fCB7fSkuZm9jdXNHdWFyZCA/IDAgOiAtMSkgOiBub2RlLnRhYkluZGV4LFxuICAgIH0pOyB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiAhZmlsdGVyTmVnYXRpdmUgfHwgZGF0YS50YWJJbmRleCA+PSAwOyB9KVxuICAgICAgICAuc29ydCh0YWJTb3J0KTtcbn07XG4iLCJleHBvcnQgdmFyIHRhYmJhYmxlcyA9IFtcbiAgICAnYnV0dG9uOmVuYWJsZWQnLFxuICAgICdzZWxlY3Q6ZW5hYmxlZCcsXG4gICAgJ3RleHRhcmVhOmVuYWJsZWQnLFxuICAgICdpbnB1dDplbmFibGVkJyxcbiAgICAnYVtocmVmXScsXG4gICAgJ2FyZWFbaHJlZl0nLFxuICAgICdzdW1tYXJ5JyxcbiAgICAnaWZyYW1lJyxcbiAgICAnb2JqZWN0JyxcbiAgICAnZW1iZWQnLFxuICAgICdhdWRpb1tjb250cm9sc10nLFxuICAgICd2aWRlb1tjb250cm9sc10nLFxuICAgICdbdGFiaW5kZXhdJyxcbiAgICAnW2NvbnRlbnRlZGl0YWJsZV0nLFxuICAgICdbYXV0b2ZvY3VzXScsXG5dO1xuIiwiaW1wb3J0IHsgRk9DVVNfQVVUTyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgeyB0YWJiYWJsZXMgfSBmcm9tICcuL3RhYmJhYmxlcyc7XG52YXIgcXVlcnlUYWJiYWJsZXMgPSB0YWJiYWJsZXMuam9pbignLCcpO1xudmFyIHF1ZXJ5R3VhcmRUYWJiYWJsZXMgPSBxdWVyeVRhYmJhYmxlcyArIFwiLCBbZGF0YS1mb2N1cy1ndWFyZF1cIjtcbmV4cG9ydCB2YXIgZ2V0Rm9jdXNhYmxlcyA9IGZ1bmN0aW9uIChwYXJlbnRzLCB3aXRoR3VhcmRzKSB7XG4gICAgcmV0dXJuIHBhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdCh0b0FycmF5KHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHdpdGhHdWFyZHMgPyBxdWVyeUd1YXJkVGFiYmFibGVzIDogcXVlcnlUYWJiYWJsZXMpKSwgcGFyZW50LnBhcmVudE5vZGVcbiAgICAgICAgICAgID8gdG9BcnJheShwYXJlbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5VGFiYmFibGVzKSkuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlID09PSBwYXJlbnQ7IH0pXG4gICAgICAgICAgICA6IFtdKTtcbiAgICB9LCBbXSk7XG59O1xuZXhwb3J0IHZhciBnZXRQYXJlbnRBdXRvZm9jdXNhYmxlcyA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50Rm9jdXMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChcIltcIiArIEZPQ1VTX0FVVE8gKyBcIl1cIik7XG4gICAgcmV0dXJuIHRvQXJyYXkocGFyZW50Rm9jdXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIGdldEZvY3VzYWJsZXMoW25vZGVdKTsgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlcykgeyByZXR1cm4gYWNjLmNvbmNhdChub2Rlcyk7IH0sIFtdKTtcbn07XG4iLCJpbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgeyBpc1Zpc2libGVDYWNoZWQsIG5vdEhpZGRlbklucHV0IH0gZnJvbSAnLi9pcyc7XG5pbXBvcnQgeyBvcmRlckJ5VGFiSW5kZXggfSBmcm9tICcuL3RhYk9yZGVyJztcbmltcG9ydCB7IGdldEZvY3VzYWJsZXMsIGdldFBhcmVudEF1dG9mb2N1c2FibGVzIH0gZnJvbSAnLi90YWJVdGlscyc7XG5leHBvcnQgdmFyIGZpbHRlckZvY3VzYWJsZSA9IGZ1bmN0aW9uIChub2RlcywgdmlzaWJpbGl0eUNhY2hlKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZXMpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIGlzVmlzaWJsZUNhY2hlZCh2aXNpYmlsaXR5Q2FjaGUsIG5vZGUpOyB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub3RIaWRkZW5JbnB1dChub2RlKTsgfSk7XG59O1xuZXhwb3J0IHZhciBnZXRUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gKHRvcE5vZGVzLCB2aXNpYmlsaXR5Q2FjaGUsIHdpdGhHdWFyZHMpIHtcbiAgICByZXR1cm4gb3JkZXJCeVRhYkluZGV4KGZpbHRlckZvY3VzYWJsZShnZXRGb2N1c2FibGVzKHRvcE5vZGVzLCB3aXRoR3VhcmRzKSwgdmlzaWJpbGl0eUNhY2hlKSwgdHJ1ZSwgd2l0aEd1YXJkcyk7XG59O1xuZXhwb3J0IHZhciBnZXRBbGxUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gKHRvcE5vZGVzLCB2aXNpYmlsaXR5Q2FjaGUpIHtcbiAgICByZXR1cm4gb3JkZXJCeVRhYkluZGV4KGZpbHRlckZvY3VzYWJsZShnZXRGb2N1c2FibGVzKHRvcE5vZGVzKSwgdmlzaWJpbGl0eUNhY2hlKSwgZmFsc2UpO1xufTtcbmV4cG9ydCB2YXIgcGFyZW50QXV0b2ZvY3VzYWJsZXMgPSBmdW5jdGlvbiAodG9wTm9kZSwgdmlzaWJpbGl0eUNhY2hlKSB7XG4gICAgcmV0dXJuIGZpbHRlckZvY3VzYWJsZShnZXRQYXJlbnRBdXRvZm9jdXNhYmxlcyh0b3BOb2RlKSwgdmlzaWJpbGl0eUNhY2hlKTtcbn07XG4iLCJpbXBvcnQgeyBhc0FycmF5IH0gZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgeyBwYXJlbnRBdXRvZm9jdXNhYmxlcyB9IGZyb20gJy4vRE9NdXRpbHMnO1xudmFyIGdldFBhcmVudHMgPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50cykge1xuICAgIGlmIChwYXJlbnRzID09PSB2b2lkIDApIHsgcGFyZW50cyA9IFtdOyB9XG4gICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZ2V0UGFyZW50cyhub2RlLnBhcmVudE5vZGUsIHBhcmVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50cztcbn07XG5leHBvcnQgdmFyIGdldENvbW1vblBhcmVudCA9IGZ1bmN0aW9uIChub2RlQSwgbm9kZUIpIHtcbiAgICB2YXIgcGFyZW50c0EgPSBnZXRQYXJlbnRzKG5vZGVBKTtcbiAgICB2YXIgcGFyZW50c0IgPSBnZXRQYXJlbnRzKG5vZGVCKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHNBLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGFyZW50ID0gcGFyZW50c0FbaV07XG4gICAgICAgIGlmIChwYXJlbnRzQi5pbmRleE9mKGN1cnJlbnRQYXJlbnQpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgdmFyIGdldFRvcENvbW1vblBhcmVudCA9IGZ1bmN0aW9uIChiYXNlQWN0aXZlRWxlbWVudCwgbGVmdEVudHJ5LCByaWdodEVudHJpZXMpIHtcbiAgICB2YXIgYWN0aXZlRWxlbWVudHMgPSBhc0FycmF5KGJhc2VBY3RpdmVFbGVtZW50KTtcbiAgICB2YXIgbGVmdEVudHJpZXMgPSBhc0FycmF5KGxlZnRFbnRyeSk7XG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50c1swXTtcbiAgICB2YXIgdG9wQ29tbW9uID0gZmFsc2U7XG4gICAgbGVmdEVudHJpZXMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIHRvcENvbW1vbiA9IGdldENvbW1vblBhcmVudCh0b3BDb21tb24gfHwgZW50cnksIGVudHJ5KSB8fCB0b3BDb21tb247XG4gICAgICAgIHJpZ2h0RW50cmllcy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoc3ViRW50cnkpIHtcbiAgICAgICAgICAgIHZhciBjb21tb24gPSBnZXRDb21tb25QYXJlbnQoYWN0aXZlRWxlbWVudCwgc3ViRW50cnkpO1xuICAgICAgICAgICAgaWYgKGNvbW1vbikge1xuICAgICAgICAgICAgICAgIGlmICghdG9wQ29tbW9uIHx8IGNvbW1vbi5jb250YWlucyh0b3BDb21tb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcENvbW1vbiA9IGNvbW1vbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcENvbW1vbiA9IGdldENvbW1vblBhcmVudChjb21tb24sIHRvcENvbW1vbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9wQ29tbW9uO1xufTtcbmV4cG9ydCB2YXIgYWxsUGFyZW50QXV0b2ZvY3VzYWJsZXMgPSBmdW5jdGlvbiAoZW50cmllcywgdmlzaWJpbGl0eUNhY2hlKSB7XG4gICAgcmV0dXJuIGVudHJpZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHsgcmV0dXJuIGFjYy5jb25jYXQocGFyZW50QXV0b2ZvY3VzYWJsZXMobm9kZSwgdmlzaWJpbGl0eUNhY2hlKSk7IH0sIFtdKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRBbGxBZmZlY3RlZE5vZGVzIH0gZnJvbSAnLi91dGlscy9hbGwtYWZmZWN0ZWQnO1xuaW1wb3J0IHsgZ2V0VGFiYmFibGVOb2RlcyB9IGZyb20gJy4vdXRpbHMvRE9NdXRpbHMnO1xuaW1wb3J0IHsgaXNHdWFyZCwgaXNOb3RBR3VhcmQgfSBmcm9tICcuL3V0aWxzL2lzJztcbmltcG9ydCB7IGdldFRvcENvbW1vblBhcmVudCB9IGZyb20gJy4vdXRpbHMvcGFyZW50aW5nJztcbmV4cG9ydCB2YXIgZ2V0Rm9jdXNhYmxlZEluID0gZnVuY3Rpb24gKHRvcE5vZGUpIHtcbiAgICB2YXIgZW50cmllcyA9IGdldEFsbEFmZmVjdGVkTm9kZXModG9wTm9kZSkuZmlsdGVyKGlzTm90QUd1YXJkKTtcbiAgICB2YXIgY29tbW9uUGFyZW50ID0gZ2V0VG9wQ29tbW9uUGFyZW50KHRvcE5vZGUsIHRvcE5vZGUsIGVudHJpZXMpO1xuICAgIHZhciB2aXNpYmlsaXR5Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgdmFyIG91dGVyTm9kZXMgPSBnZXRUYWJiYWJsZU5vZGVzKFtjb21tb25QYXJlbnRdLCB2aXNpYmlsaXR5Q2FjaGUsIHRydWUpO1xuICAgIHZhciBpbm5lckVsZW1lbnRzID0gZ2V0VGFiYmFibGVOb2RlcyhlbnRyaWVzLCB2aXNpYmlsaXR5Q2FjaGUpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBub2RlID0gX2Eubm9kZTtcbiAgICAgICAgcmV0dXJuIGlzTm90QUd1YXJkKG5vZGUpO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBub2RlID0gX2Eubm9kZTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dGVyTm9kZXMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGxvY2tJdGVtOiBpbm5lckVsZW1lbnRzLmluZGV4T2Yobm9kZSkgPj0gMCxcbiAgICAgICAgICAgIGd1YXJkOiBpc0d1YXJkKG5vZGUpLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBnZXRBbGxBZmZlY3RlZE5vZGVzIH0gZnJvbSAnLi91dGlscy9hbGwtYWZmZWN0ZWQnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMvYXJyYXknO1xudmFyIGZvY3VzSW5GcmFtZSA9IGZ1bmN0aW9uIChmcmFtZSkgeyByZXR1cm4gZnJhbWUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IH07XG52YXIgZm9jdXNJbnNpZGVJZnJhbWUgPSBmdW5jdGlvbiAodG9wTm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKHRvQXJyYXkodG9wTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKSkuc29tZShmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gZm9jdXNJbkZyYW1lKG5vZGUpOyB9KSk7XG59O1xuZXhwb3J0IHZhciBmb2N1c0luc2lkZSA9IGZ1bmN0aW9uICh0b3BOb2RlKSB7XG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAoYWN0aXZlRWxlbWVudC5kYXRhc2V0ICYmIGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5mb2N1c0d1YXJkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBnZXRBbGxBZmZlY3RlZE5vZGVzKHRvcE5vZGUpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBub2RlKSB7IHJldHVybiByZXN1bHQgfHwgbm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSB8fCBmb2N1c0luc2lkZUlmcmFtZShub2RlKTsgfSwgZmFsc2UpO1xufTtcbiIsImltcG9ydCB7IEZPQ1VTX0FMTE9XIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMvYXJyYXknO1xuZXhwb3J0IHZhciBmb2N1c0lzSGlkZGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb2N1bWVudCAmJlxuICAgICAgICB0b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIgKyBGT0NVU19BTExPVyArIFwiXVwiKSkuc29tZShmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTsgfSk7XG59O1xuIiwidmFyIGlzUmFkaW8gPSBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJzsgfTtcbnZhciBmaW5kU2VsZWN0ZWRSYWRpbyA9IGZ1bmN0aW9uIChub2RlLCBub2Rlcykge1xuICAgIHJldHVybiBub2Rlc1xuICAgICAgICAuZmlsdGVyKGlzUmFkaW8pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5uYW1lID09PSBub2RlLm5hbWU7IH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5jaGVja2VkOyB9KVswXSB8fCBub2RlO1xufTtcbmV4cG9ydCB2YXIgY29ycmVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSwgbm9kZXMpIHtcbiAgICBpZiAoaXNSYWRpbyhub2RlKSAmJiBub2RlLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRTZWxlY3RlZFJhZGlvKG5vZGUsIG5vZGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuZXhwb3J0IHZhciBjb3JyZWN0Tm9kZXMgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICB2YXIgcmVzdWx0U2V0ID0gbmV3IFNldCgpO1xuICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIHJlc3VsdFNldC5hZGQoY29ycmVjdE5vZGUobm9kZSwgbm9kZXMpKTsgfSk7XG4gICAgcmV0dXJuIG5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gcmVzdWx0U2V0Lmhhcyhub2RlKTsgfSk7XG59O1xuIiwiaW1wb3J0IHsgY29ycmVjdE5vZGUgfSBmcm9tICcuL2NvcnJlY3RGb2N1cyc7XG5leHBvcnQgdmFyIHBpY2tGaXJzdEZvY3VzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzWzBdICYmIG5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGNvcnJlY3ROb2RlKG5vZGVzWzBdLCBub2Rlcyk7XG4gICAgfVxuICAgIHJldHVybiBub2Rlc1swXTtcbn07XG5leHBvcnQgdmFyIHBpY2tGb2N1c2FibGUgPSBmdW5jdGlvbiAobm9kZXMsIGluZGV4KSB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzLmluZGV4T2YoY29ycmVjdE5vZGUobm9kZXNbaW5kZXhdLCBub2RlcykpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG59O1xuIiwiaW1wb3J0IHsgY29ycmVjdE5vZGVzIH0gZnJvbSAnLi91dGlscy9jb3JyZWN0Rm9jdXMnO1xuaW1wb3J0IHsgcGlja0ZvY3VzYWJsZSB9IGZyb20gJy4vdXRpbHMvZmlyc3RGb2N1cyc7XG5pbXBvcnQgeyBpc0d1YXJkIH0gZnJvbSAnLi91dGlscy9pcyc7XG5leHBvcnQgdmFyIE5FV19GT0NVUyA9ICdORVdfRk9DVVMnO1xuZXhwb3J0IHZhciBuZXdGb2N1cyA9IGZ1bmN0aW9uIChpbm5lck5vZGVzLCBvdXRlck5vZGVzLCBhY3RpdmVFbGVtZW50LCBsYXN0Tm9kZSkge1xuICAgIHZhciBjbnQgPSBpbm5lck5vZGVzLmxlbmd0aDtcbiAgICB2YXIgZmlyc3RGb2N1cyA9IGlubmVyTm9kZXNbMF07XG4gICAgdmFyIGxhc3RGb2N1cyA9IGlubmVyTm9kZXNbY250IC0gMV07XG4gICAgdmFyIGlzT25HdWFyZCA9IGlzR3VhcmQoYWN0aXZlRWxlbWVudCk7XG4gICAgaWYgKGlubmVyTm9kZXMuaW5kZXhPZihhY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBhY3RpdmVJbmRleCA9IG91dGVyTm9kZXMuaW5kZXhPZihhY3RpdmVFbGVtZW50KTtcbiAgICB2YXIgbGFzdEluZGV4ID0gbGFzdE5vZGUgPyBvdXRlck5vZGVzLmluZGV4T2YobGFzdE5vZGUpIDogYWN0aXZlSW5kZXg7XG4gICAgdmFyIGxhc3ROb2RlSW5zaWRlID0gbGFzdE5vZGUgPyBpbm5lck5vZGVzLmluZGV4T2YobGFzdE5vZGUpIDogLTE7XG4gICAgdmFyIGluZGV4RGlmZiA9IGFjdGl2ZUluZGV4IC0gbGFzdEluZGV4O1xuICAgIHZhciBmaXJzdE5vZGVJbmRleCA9IG91dGVyTm9kZXMuaW5kZXhPZihmaXJzdEZvY3VzKTtcbiAgICB2YXIgbGFzdE5vZGVJbmRleCA9IG91dGVyTm9kZXMuaW5kZXhPZihsYXN0Rm9jdXMpO1xuICAgIHZhciBjb3JyZWN0ZWROb2RlcyA9IGNvcnJlY3ROb2RlcyhvdXRlck5vZGVzKTtcbiAgICB2YXIgY29ycmVjdGVkSW5kZXhEaWZmID0gY29ycmVjdGVkTm9kZXMuaW5kZXhPZihhY3RpdmVFbGVtZW50KSAtIChsYXN0Tm9kZSA/IGNvcnJlY3RlZE5vZGVzLmluZGV4T2YobGFzdE5vZGUpIDogYWN0aXZlSW5kZXgpO1xuICAgIHZhciByZXR1cm5GaXJzdE5vZGUgPSBwaWNrRm9jdXNhYmxlKGlubmVyTm9kZXMsIDApO1xuICAgIHZhciByZXR1cm5MYXN0Tm9kZSA9IHBpY2tGb2N1c2FibGUoaW5uZXJOb2RlcywgY250IC0gMSk7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSAtMSB8fCBsYXN0Tm9kZUluc2lkZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIE5FV19GT0NVUztcbiAgICB9XG4gICAgaWYgKCFpbmRleERpZmYgJiYgbGFzdE5vZGVJbnNpZGUgPj0gMCkge1xuICAgICAgICByZXR1cm4gbGFzdE5vZGVJbnNpZGU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJbmRleCA8PSBmaXJzdE5vZGVJbmRleCAmJiBpc09uR3VhcmQgJiYgTWF0aC5hYnMoaW5kZXhEaWZmKSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkxhc3ROb2RlO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlSW5kZXggPj0gbGFzdE5vZGVJbmRleCAmJiBpc09uR3VhcmQgJiYgTWF0aC5hYnMoaW5kZXhEaWZmKSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0Tm9kZTtcbiAgICB9XG4gICAgaWYgKGluZGV4RGlmZiAmJiBNYXRoLmFicyhjb3JyZWN0ZWRJbmRleERpZmYpID4gMSkge1xuICAgICAgICByZXR1cm4gbGFzdE5vZGVJbnNpZGU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJbmRleCA8PSBmaXJzdE5vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gcmV0dXJuTGFzdE5vZGU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJbmRleCA+IGxhc3ROb2RlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0Tm9kZTtcbiAgICB9XG4gICAgaWYgKGluZGV4RGlmZikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoaW5kZXhEaWZmKSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0Tm9kZUluc2lkZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGNudCArIGxhc3ROb2RlSW5zaWRlICsgaW5kZXhEaWZmKSAlIGNudDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBORVdfRk9DVVMsIG5ld0ZvY3VzIH0gZnJvbSAnLi9zb2x2ZXInO1xuaW1wb3J0IHsgZ2V0QWxsQWZmZWN0ZWROb2RlcyB9IGZyb20gJy4vdXRpbHMvYWxsLWFmZmVjdGVkJztcbmltcG9ydCB7IGdldEFsbFRhYmJhYmxlTm9kZXMsIGdldFRhYmJhYmxlTm9kZXMgfSBmcm9tICcuL3V0aWxzL0RPTXV0aWxzJztcbmltcG9ydCB7IHBpY2tGaXJzdEZvY3VzIH0gZnJvbSAnLi91dGlscy9maXJzdEZvY3VzJztcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNOb3RBR3VhcmQgfSBmcm9tICcuL3V0aWxzL2lzJztcbmltcG9ydCB7IGFsbFBhcmVudEF1dG9mb2N1c2FibGVzLCBnZXRUb3BDb21tb25QYXJlbnQgfSBmcm9tICcuL3V0aWxzL3BhcmVudGluZyc7XG52YXIgZmluZEF1dG9Gb2N1c2VkID0gZnVuY3Rpb24gKGF1dG9Gb2N1c2FibGVzKSB7IHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmF1dG9mb2N1cyB8fCAobm9kZS5kYXRhc2V0ICYmICEhbm9kZS5kYXRhc2V0LmF1dG9mb2N1cykgfHwgYXV0b0ZvY3VzYWJsZXMuaW5kZXhPZihub2RlKSA+PSAwO1xufTsgfTtcbnZhciByZW9yZGVyTm9kZXMgPSBmdW5jdGlvbiAoc3JjTm9kZXMsIGRzdE5vZGVzKSB7XG4gICAgdmFyIHJlbWFwID0gbmV3IE1hcCgpO1xuICAgIGRzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGVudGl0eSkgeyByZXR1cm4gcmVtYXAuc2V0KGVudGl0eS5ub2RlLCBlbnRpdHkpOyB9KTtcbiAgICByZXR1cm4gc3JjTm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiByZW1hcC5nZXQobm9kZSk7IH0pLmZpbHRlcihpc0RlZmluZWQpO1xufTtcbmV4cG9ydCB2YXIgZ2V0Rm9jdXNNZXJnZSA9IGZ1bmN0aW9uICh0b3BOb2RlLCBsYXN0Tm9kZSkge1xuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gKGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgIHZhciBlbnRyaWVzID0gZ2V0QWxsQWZmZWN0ZWROb2Rlcyh0b3BOb2RlKS5maWx0ZXIoaXNOb3RBR3VhcmQpO1xuICAgIHZhciBjb21tb25QYXJlbnQgPSBnZXRUb3BDb21tb25QYXJlbnQoYWN0aXZlRWxlbWVudCB8fCB0b3BOb2RlLCB0b3BOb2RlLCBlbnRyaWVzKTtcbiAgICB2YXIgdmlzaWJpbGl0eUNhY2hlID0gbmV3IE1hcCgpO1xuICAgIHZhciBhbnlGb2N1c2FibGUgPSBnZXRBbGxUYWJiYWJsZU5vZGVzKGVudHJpZXMsIHZpc2liaWxpdHlDYWNoZSk7XG4gICAgdmFyIGlubmVyRWxlbWVudHMgPSBnZXRUYWJiYWJsZU5vZGVzKGVudHJpZXMsIHZpc2liaWxpdHlDYWNoZSkuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGU7XG4gICAgICAgIHJldHVybiBpc05vdEFHdWFyZChub2RlKTtcbiAgICB9KTtcbiAgICBpZiAoIWlubmVyRWxlbWVudHNbMF0pIHtcbiAgICAgICAgaW5uZXJFbGVtZW50cyA9IGFueUZvY3VzYWJsZTtcbiAgICAgICAgaWYgKCFpbm5lckVsZW1lbnRzWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBvdXRlck5vZGVzID0gZ2V0QWxsVGFiYmFibGVOb2RlcyhbY29tbW9uUGFyZW50XSwgdmlzaWJpbGl0eUNhY2hlKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBub2RlID0gX2Eubm9kZTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG4gICAgdmFyIG9yZGVyZWRJbm5lckVsZW1lbnRzID0gcmVvcmRlck5vZGVzKG91dGVyTm9kZXMsIGlubmVyRWxlbWVudHMpO1xuICAgIHZhciBpbm5lck5vZGVzID0gb3JkZXJlZElubmVyRWxlbWVudHMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGU7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuICAgIHZhciBuZXdJZCA9IG5ld0ZvY3VzKGlubmVyTm9kZXMsIG91dGVyTm9kZXMsIGFjdGl2ZUVsZW1lbnQsIGxhc3ROb2RlKTtcbiAgICBpZiAobmV3SWQgPT09IE5FV19GT0NVUykge1xuICAgICAgICB2YXIgYXV0b0ZvY3VzYWJsZSA9IGFueUZvY3VzYWJsZVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gX2Eubm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihmaW5kQXV0b0ZvY3VzZWQoYWxsUGFyZW50QXV0b2ZvY3VzYWJsZXMoZW50cmllcywgdmlzaWJpbGl0eUNhY2hlKSkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZTogYXV0b0ZvY3VzYWJsZSAmJiBhdXRvRm9jdXNhYmxlLmxlbmd0aCA/IHBpY2tGaXJzdEZvY3VzKGF1dG9Gb2N1c2FibGUpIDogcGlja0ZpcnN0Rm9jdXMoaW5uZXJOb2RlcyksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChuZXdJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyZWRJbm5lckVsZW1lbnRzW25ld0lkXTtcbn07XG4iLCJpbXBvcnQgeyBnZXRGb2N1c01lcmdlIH0gZnJvbSAnLi9mb2N1c01lcmdlJztcbmV4cG9ydCB2YXIgZm9jdXNPbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICBpZiAoJ2NvbnRlbnRXaW5kb3cnIGluIHRhcmdldCAmJiB0YXJnZXQuY29udGVudFdpbmRvdykge1xuICAgICAgICB0YXJnZXQuY29udGVudFdpbmRvdy5mb2N1cygpO1xuICAgIH1cbn07XG52YXIgZ3VhcmRDb3VudCA9IDA7XG52YXIgbG9ja0Rpc2FibGVkID0gZmFsc2U7XG5leHBvcnQgdmFyIHNldEZvY3VzID0gZnVuY3Rpb24gKHRvcE5vZGUsIGxhc3ROb2RlKSB7XG4gICAgdmFyIGZvY3VzYWJsZSA9IGdldEZvY3VzTWVyZ2UodG9wTm9kZSwgbGFzdE5vZGUpO1xuICAgIGlmIChsb2NrRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9jdXNhYmxlKSB7XG4gICAgICAgIGlmIChndWFyZENvdW50ID4gMikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9jdXNMb2NrOiBmb2N1cy1maWdodGluZyBkZXRlY3RlZC4gT25seSBvbmUgZm9jdXMgbWFuYWdlbWVudCBzeXN0ZW0gY291bGQgYmUgYWN0aXZlLiAnICtcbiAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvZm9jdXMtbG9jay8jZm9jdXMtZmlnaHRpbmcnKTtcbiAgICAgICAgICAgIGxvY2tEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2NrRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGd1YXJkQ291bnQrKztcbiAgICAgICAgZm9jdXNPbihmb2N1c2FibGUubm9kZSk7XG4gICAgICAgIGd1YXJkQ291bnQtLTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmVyQWN0aW9uKGFjdGlvbikge1xuICAvLyBIaWRkaW5nIHNldEltbWVkaWF0ZSBmcm9tIFdlYnBhY2sgdG8gYXZvaWQgaW5zZXJ0aW5nIHBvbHlmaWxsXG4gIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgc2V0SW1tZWRpYXRlID0gX3dpbmRvdy5zZXRJbW1lZGlhdGU7XG5cbiAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2V0SW1tZWRpYXRlKGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChhY3Rpb24sIDEpO1xuICB9XG59XG5leHBvcnQgdmFyIGlubGluZVByb3AgPSBmdW5jdGlvbiBpbmxpbmVQcm9wKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgb2JqW25hbWVdID0gdmFsdWU7XG4gIHJldHVybiBvYmo7XG59OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFNpZGVFZmZlY3QgZnJvbSAncmVhY3QtY2xpZW50c2lkZS1lZmZlY3QnO1xuaW1wb3J0IG1vdmVGb2N1c0luc2lkZSwgeyBmb2N1c0luc2lkZSwgZm9jdXNJc0hpZGRlbiwgZ2V0Rm9jdXNhYmxlZEluIH0gZnJvbSAnZm9jdXMtbG9jayc7XG5pbXBvcnQgeyBkZWZlckFjdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBtZWRpdW1Gb2N1cywgbWVkaXVtQmx1ciwgbWVkaXVtRWZmZWN0IH0gZnJvbSAnLi9tZWRpdW0nO1xuXG52YXIgZm9jdXNPbkJvZHkgPSBmdW5jdGlvbiBmb2N1c09uQm9keSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHk7XG59O1xuXG52YXIgaXNGcmVlRm9jdXMgPSBmdW5jdGlvbiBpc0ZyZWVGb2N1cygpIHtcbiAgcmV0dXJuIGZvY3VzT25Cb2R5KCkgfHwgZm9jdXNJc0hpZGRlbigpO1xufTtcblxudmFyIGxhc3RBY3RpdmVUcmFwID0gbnVsbDtcbnZhciBsYXN0QWN0aXZlRm9jdXMgPSBudWxsO1xudmFyIGxhc3RQb3J0YWxlZEVsZW1lbnQgPSBudWxsO1xudmFyIGZvY3VzV2FzT3V0c2lkZVdpbmRvdyA9IGZhbHNlO1xuXG52YXIgZGVmYXVsdFdoaXRlbGlzdCA9IGZ1bmN0aW9uIGRlZmF1bHRXaGl0ZWxpc3QoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGZvY3VzV2hpdGVsaXN0ZWQgPSBmdW5jdGlvbiBmb2N1c1doaXRlbGlzdGVkKGFjdGl2ZUVsZW1lbnQpIHtcbiAgcmV0dXJuIChsYXN0QWN0aXZlVHJhcC53aGl0ZUxpc3QgfHwgZGVmYXVsdFdoaXRlbGlzdCkoYWN0aXZlRWxlbWVudCk7XG59O1xuXG52YXIgcmVjb3JkUG9ydGFsID0gZnVuY3Rpb24gcmVjb3JkUG9ydGFsKG9ic2VydmVyTm9kZSwgcG9ydGFsZWRFbGVtZW50KSB7XG4gIGxhc3RQb3J0YWxlZEVsZW1lbnQgPSB7XG4gICAgb2JzZXJ2ZXJOb2RlOiBvYnNlcnZlck5vZGUsXG4gICAgcG9ydGFsZWRFbGVtZW50OiBwb3J0YWxlZEVsZW1lbnRcbiAgfTtcbn07XG5cbnZhciBmb2N1c0lzUG9ydGFsZWRQYWlyID0gZnVuY3Rpb24gZm9jdXNJc1BvcnRhbGVkUGFpcihlbGVtZW50KSB7XG4gIHJldHVybiBsYXN0UG9ydGFsZWRFbGVtZW50ICYmIGxhc3RQb3J0YWxlZEVsZW1lbnQucG9ydGFsZWRFbGVtZW50ID09PSBlbGVtZW50O1xufTtcblxuZnVuY3Rpb24gYXV0b0d1YXJkKHN0YXJ0SW5kZXgsIGVuZCwgc3RlcCwgYWxsTm9kZXMpIHtcbiAgdmFyIGxhc3RHdWFyZCA9IG51bGw7XG4gIHZhciBpID0gc3RhcnRJbmRleDtcblxuICBkbyB7XG4gICAgdmFyIGl0ZW0gPSBhbGxOb2Rlc1tpXTtcblxuICAgIGlmIChpdGVtLmd1YXJkKSB7XG4gICAgICBpZiAoaXRlbS5ub2RlLmRhdGFzZXQuZm9jdXNBdXRvR3VhcmQpIHtcbiAgICAgICAgbGFzdEd1YXJkID0gaXRlbTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGl0ZW0ubG9ja0l0ZW0pIHtcbiAgICAgIGlmIChpICE9PSBzdGFydEluZGV4KSB7XG4gICAgICAgIC8vIHdlIHdpbGwgdGFiIHRvIHRoZSBuZXh0IGVsZW1lbnRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsYXN0R3VhcmQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKChpICs9IHN0ZXApICE9PSBlbmQpO1xuXG4gIGlmIChsYXN0R3VhcmQpIHtcbiAgICBsYXN0R3VhcmQubm9kZS50YWJJbmRleCA9IDA7XG4gIH1cbn1cblxudmFyIGV4dHJhY3RSZWYgPSBmdW5jdGlvbiBleHRyYWN0UmVmKHJlZikge1xuICByZXR1cm4gcmVmICYmICdjdXJyZW50JyBpbiByZWYgPyByZWYuY3VycmVudCA6IHJlZjtcbn07XG5cbnZhciBmb2N1c1dhc091dHNpZGUgPSBmdW5jdGlvbiBmb2N1c1dhc091dHNpZGUoY3Jvc3NGcmFtZU9wdGlvbikge1xuICBpZiAoY3Jvc3NGcmFtZU9wdGlvbikge1xuICAgIC8vIHdpdGggY3Jvc3MgZnJhbWUgcmV0dXJuIHRydWUgZm9yIGFueSB2YWx1ZVxuICAgIHJldHVybiBCb29sZWFuKGZvY3VzV2FzT3V0c2lkZVdpbmRvdyk7XG4gIH0gLy8gaW4gb3RoZXIgY2FzZSByZXR1cm4gb25seSBvZiBmb2N1cyB3ZW50IGEgd2hpbGUgYWhvXG5cblxuICByZXR1cm4gZm9jdXNXYXNPdXRzaWRlV2luZG93ID09PSAnbWVhbndoaWxlJztcbn07XG5cbnZhciBhY3RpdmF0ZVRyYXAgPSBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAoKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICBpZiAobGFzdEFjdGl2ZVRyYXApIHtcbiAgICB2YXIgX2xhc3RBY3RpdmVUcmFwID0gbGFzdEFjdGl2ZVRyYXAsXG4gICAgICAgIG9ic2VydmVkID0gX2xhc3RBY3RpdmVUcmFwLm9ic2VydmVkLFxuICAgICAgICBwZXJzaXN0ZW50Rm9jdXMgPSBfbGFzdEFjdGl2ZVRyYXAucGVyc2lzdGVudEZvY3VzLFxuICAgICAgICBhdXRvRm9jdXMgPSBfbGFzdEFjdGl2ZVRyYXAuYXV0b0ZvY3VzLFxuICAgICAgICBzaGFyZHMgPSBfbGFzdEFjdGl2ZVRyYXAuc2hhcmRzLFxuICAgICAgICBjcm9zc0ZyYW1lID0gX2xhc3RBY3RpdmVUcmFwLmNyb3NzRnJhbWU7XG4gICAgdmFyIHdvcmtpbmdOb2RlID0gb2JzZXJ2ZWQgfHwgbGFzdFBvcnRhbGVkRWxlbWVudCAmJiBsYXN0UG9ydGFsZWRFbGVtZW50LnBvcnRhbGVkRWxlbWVudDtcbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAod29ya2luZ05vZGUpIHtcbiAgICAgIHZhciB3b3JraW5nQXJlYSA9IFt3b3JraW5nTm9kZV0uY29uY2F0KHNoYXJkcy5tYXAoZXh0cmFjdFJlZikuZmlsdGVyKEJvb2xlYW4pKTtcblxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8IGZvY3VzV2hpdGVsaXN0ZWQoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRGb2N1cyB8fCBmb2N1c1dhc091dHNpZGUoY3Jvc3NGcmFtZSkgfHwgIWlzRnJlZUZvY3VzKCkgfHwgIWxhc3RBY3RpdmVGb2N1cyAmJiBhdXRvRm9jdXMpIHtcbiAgICAgICAgICBpZiAod29ya2luZ05vZGUgJiYgIShmb2N1c0luc2lkZSh3b3JraW5nQXJlYSkgfHwgZm9jdXNJc1BvcnRhbGVkUGFpcihhY3RpdmVFbGVtZW50LCB3b3JraW5nTm9kZSkpKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQgJiYgIWxhc3RBY3RpdmVGb2N1cyAmJiBhY3RpdmVFbGVtZW50ICYmICFhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYmx1cigpIGV4aXN0cywgd2hpY2ggaXMgbWlzc2luZyBvbiBjZXJ0YWluIGVsZW1lbnRzIG9uIElFXG4gICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50LmJsdXIpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IG1vdmVGb2N1c0luc2lkZSh3b3JraW5nQXJlYSwgbGFzdEFjdGl2ZUZvY3VzKTtcbiAgICAgICAgICAgICAgbGFzdFBvcnRhbGVkRWxlbWVudCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvY3VzV2FzT3V0c2lkZVdpbmRvdyA9IGZhbHNlO1xuICAgICAgICAgIGxhc3RBY3RpdmVGb2N1cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBuZXdBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgdmFyIGFsbE5vZGVzID0gZ2V0Rm9jdXNhYmxlZEluKHdvcmtpbmdBcmVhKTtcbiAgICAgICAgdmFyIGZvY3VzZWRJbmRleCA9IGFsbE5vZGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBub2RlID0gX3JlZi5ub2RlO1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KS5pbmRleE9mKG5ld0FjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgICAgIC8vIHJlbW92ZSBvbGQgZm9jdXNcbiAgICAgICAgICBhbGxOb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgZ3VhcmQgPSBfcmVmMi5ndWFyZCxcbiAgICAgICAgICAgICAgICBub2RlID0gX3JlZjIubm9kZTtcbiAgICAgICAgICAgIHJldHVybiBndWFyZCAmJiBub2RlLmRhdGFzZXQuZm9jdXNBdXRvR3VhcmQ7XG4gICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gX3JlZjMubm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnJlbW92ZUF0dHJpYnV0ZSgndGFiSW5kZXgnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdXRvR3VhcmQoZm9jdXNlZEluZGV4LCBhbGxOb2Rlcy5sZW5ndGgsICsxLCBhbGxOb2Rlcyk7XG4gICAgICAgICAgYXV0b0d1YXJkKGZvY3VzZWRJbmRleCwgLTEsIC0xLCBhbGxOb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIG9uVHJhcCA9IGZ1bmN0aW9uIG9uVHJhcChldmVudCkge1xuICBpZiAoYWN0aXZhdGVUcmFwKCkgJiYgZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50IHNjcm9sbCBqdW1wXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxudmFyIG9uQmx1ciA9IGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgcmV0dXJuIGRlZmVyQWN0aW9uKGFjdGl2YXRlVHJhcCk7XG59O1xuXG52YXIgb25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoZXZlbnQpIHtcbiAgLy8gZGV0ZWN0IHBvcnRhbFxuICB2YXIgc291cmNlID0gZXZlbnQudGFyZ2V0O1xuICB2YXIgY3VycmVudE5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gIGlmICghY3VycmVudE5vZGUuY29udGFpbnMoc291cmNlKSkge1xuICAgIHJlY29yZFBvcnRhbChjdXJyZW50Tm9kZSwgc291cmNlKTtcbiAgfVxufTtcblxudmFyIEZvY3VzV2F0Y2hlciA9IGZ1bmN0aW9uIEZvY3VzV2F0Y2hlcigpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRm9jdXNUcmFwID0gZnVuY3Rpb24gRm9jdXNUcmFwKF9yZWY0KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIG9uQmx1cjogb25CbHVyLFxuICAgIG9uRm9jdXM6IG9uRm9jdXNcbiAgfSwgY2hpbGRyZW4pO1xufTtcblxuRm9jdXNUcmFwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn0gOiB7fTtcblxudmFyIG9uV2luZG93Qmx1ciA9IGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgZm9jdXNXYXNPdXRzaWRlV2luZG93ID0gJ2p1c3QnOyAvLyB1c2luZyBzZXRUaW1lb3V0IHRvIHNldCAgdGhpcyB2YXJpYWJsZSBhZnRlciBSZWFjdC9zaWRlY2FyIHJlYWN0aW9uXG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZm9jdXNXYXNPdXRzaWRlV2luZG93ID0gJ21lYW53aGlsZSc7XG4gIH0sIDApO1xufTtcblxudmFyIGF0dGFjaEhhbmRsZXIgPSBmdW5jdGlvbiBhdHRhY2hIYW5kbGVyKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25UcmFwLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXIpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uV2luZG93Qmx1cik7XG59O1xuXG52YXIgZGV0YWNoSGFuZGxlciA9IGZ1bmN0aW9uIGRldGFjaEhhbmRsZXIoKSB7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvblRyYXAsIHRydWUpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uQmx1cik7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgb25XaW5kb3dCbHVyKTtcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgdmFyIGRpc2FibGVkID0gX3JlZjUuZGlzYWJsZWQ7XG4gICAgcmV0dXJuICFkaXNhYmxlZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQodHJhcHMpIHtcbiAgdmFyIHRyYXAgPSB0cmFwcy5zbGljZSgtMSlbMF07XG5cbiAgaWYgKHRyYXAgJiYgIWxhc3RBY3RpdmVUcmFwKSB7XG4gICAgYXR0YWNoSGFuZGxlcigpO1xuICB9XG5cbiAgdmFyIGxhc3RUcmFwID0gbGFzdEFjdGl2ZVRyYXA7XG4gIHZhciBzYW1lVHJhcCA9IGxhc3RUcmFwICYmIHRyYXAgJiYgdHJhcC5pZCA9PT0gbGFzdFRyYXAuaWQ7XG4gIGxhc3RBY3RpdmVUcmFwID0gdHJhcDtcblxuICBpZiAobGFzdFRyYXAgJiYgIXNhbWVUcmFwKSB7XG4gICAgbGFzdFRyYXAub25EZWFjdGl2YXRpb24oKTsgLy8gcmV0dXJuIGZvY3VzIG9ubHkgb2YgbGFzdCB0cmFwIHdhcyByZW1vdmVkXG5cbiAgICBpZiAoIXRyYXBzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICAgIHZhciBpZCA9IF9yZWY2LmlkO1xuICAgICAgcmV0dXJuIGlkID09PSBsYXN0VHJhcC5pZDtcbiAgICB9KS5sZW5ndGgpIHtcbiAgICAgIC8vIGFsbG93IGRlZmVyIGlzIG5vIG90aGVyIHRyYXAgaXMgYXdhaXRpbmcgcmVzdG9yZVxuICAgICAgbGFzdFRyYXAucmV0dXJuRm9jdXMoIXRyYXApO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0cmFwKSB7XG4gICAgbGFzdEFjdGl2ZUZvY3VzID0gbnVsbDtcblxuICAgIGlmICghc2FtZVRyYXAgfHwgbGFzdFRyYXAub2JzZXJ2ZWQgIT09IHRyYXAub2JzZXJ2ZWQpIHtcbiAgICAgIHRyYXAub25BY3RpdmF0aW9uKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVUcmFwKHRydWUpO1xuICAgIGRlZmVyQWN0aW9uKGFjdGl2YXRlVHJhcCk7XG4gIH0gZWxzZSB7XG4gICAgZGV0YWNoSGFuZGxlcigpO1xuICAgIGxhc3RBY3RpdmVGb2N1cyA9IG51bGw7XG4gIH1cbn0gLy8gYmluZCBtZWRpdW1cblxuXG5tZWRpdW1Gb2N1cy5hc3NpZ25TeW5jTWVkaXVtKG9uRm9jdXMpO1xubWVkaXVtQmx1ci5hc3NpZ25NZWRpdW0ob25CbHVyKTtcbm1lZGl1bUVmZmVjdC5hc3NpZ25NZWRpdW0oZnVuY3Rpb24gKGNiKSB7XG4gIHJldHVybiBjYih7XG4gICAgbW92ZUZvY3VzSW5zaWRlOiBtb3ZlRm9jdXNJbnNpZGUsXG4gICAgZm9jdXNJbnNpZGU6IGZvY3VzSW5zaWRlXG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpKEZvY3VzV2F0Y2hlcik7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb2N1c0xvY2tVSSBmcm9tICcuL0xvY2snO1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL1RyYXAnO1xuLyogdGhhdCB3b3VsZCBiZSBhIEJSRUFLSU5HIENIQU5HRSFcbi8vIGRlbGF5aW5nIHNpZGVjYXIgZXhlY3V0aW9uIHRpbGwgdGhlIGZpcnN0IHVzYWdlXG5jb25zdCBSZXF1aXJlU2lkZUNhciA9IChwcm9wcykgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcbiAgY29uc3QgU2lkZUNhciA9IHJlcXVpcmUoJy4vVHJhcCcpLmRlZmF1bHQ7XG4gIHJldHVybiA8U2lkZUNhciB7Li4ucHJvcHN9IC8+O1xufTtcbiovXG5cbnZhciBGb2N1c0xvY2tDb21iaW5hdGlvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZvY3VzTG9ja1VJQ29tYmluYXRpb24ocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9jdXNMb2NrVUksIF9leHRlbmRzKHtcbiAgICBzaWRlQ2FyOiBGb2N1c1RyYXAsXG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMpKTtcbn0pO1xuXG52YXIgX3JlZiA9IEZvY3VzTG9ja1VJLnByb3BUeXBlcyB8fCB7fSxcbiAgICBzaWRlQ2FyID0gX3JlZi5zaWRlQ2FyLFxuICAgIHByb3BUeXBlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInNpZGVDYXJcIl0pO1xuXG5Gb2N1c0xvY2tDb21iaW5hdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcbmV4cG9ydCBkZWZhdWx0IEZvY3VzTG9ja0NvbWJpbmF0aW9uOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICdmb2N1cy1sb2NrL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpbmxpbmVQcm9wIH0gZnJvbSAnLi91dGlsJztcblxudmFyIEF1dG9Gb2N1c0luc2lkZSA9IGZ1bmN0aW9uIEF1dG9Gb2N1c0luc2lkZShfcmVmKSB7XG4gIHZhciBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBpbmxpbmVQcm9wKGNvbnN0YW50cy5GT0NVU19BVVRPLCAhZGlzYWJsZWQpLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSksIGNoaWxkcmVuKTtcbn07XG5cbkF1dG9Gb2N1c0luc2lkZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xuQXV0b0ZvY3VzSW5zaWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IEF1dG9Gb2N1c0luc2lkZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnZm9jdXMtbG9jay9jb25zdGFudHMnO1xuaW1wb3J0IHsgaW5saW5lUHJvcCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBtZWRpdW1FZmZlY3QgfSBmcm9tICcuL21lZGl1bSc7XG5leHBvcnQgdmFyIHVzZUZvY3VzSW5zaWRlID0gZnVuY3Rpb24gdXNlRm9jdXNJbnNpZGUob2JzZXJ2ZWRSZWYpIHtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZW5hYmxlZCA9IHRydWU7XG4gICAgbWVkaXVtRWZmZWN0LnVzZU1lZGl1bShmdW5jdGlvbiAoY2FyKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWQgPSBvYnNlcnZlZFJlZiAmJiBvYnNlcnZlZFJlZi5jdXJyZW50O1xuXG4gICAgICBpZiAoZW5hYmxlZCAmJiBvYnNlcnZlZCkge1xuICAgICAgICBpZiAoIWNhci5mb2N1c0luc2lkZShvYnNlcnZlZCkpIHtcbiAgICAgICAgICBjYXIubW92ZUZvY3VzSW5zaWRlKG9ic2VydmVkLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW29ic2VydmVkUmVmXSk7XG59O1xuXG5mdW5jdGlvbiBNb3ZlRm9jdXNJbnNpZGUoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdXNlRm9jdXNJbnNpZGUoaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHJlZik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgaW5saW5lUHJvcChjb25zdGFudHMuRk9DVVNfQVVUTywgIWlzRGlzYWJsZWQpLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSksIGNoaWxkcmVuKTtcbn1cblxuTW92ZUZvY3VzSW5zaWRlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59IDoge307XG5Nb3ZlRm9jdXNJbnNpZGUuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkXG59O1xuZXhwb3J0IGRlZmF1bHQgTW92ZUZvY3VzSW5zaWRlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICdmb2N1cy1sb2NrL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpbmxpbmVQcm9wIH0gZnJvbSAnLi91dGlsJztcblxudmFyIEZyZWVGb2N1c0luc2lkZSA9IGZ1bmN0aW9uIEZyZWVGb2N1c0luc2lkZShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBpbmxpbmVQcm9wKGNvbnN0YW50cy5GT0NVU19BTExPVywgdHJ1ZSksIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICB9KSwgY2hpbGRyZW4pO1xufTtcblxuRnJlZUZvY3VzSW5zaWRlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xuRnJlZUZvY3VzSW5zaWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWRcbn07XG5leHBvcnQgZGVmYXVsdCBGcmVlRm9jdXNJbnNpZGU7IiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc2VydmVyX2NvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgU3VzcGVuc2VMaXN0ID0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2VMaXN0KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLlN1c3BlbnNlTGlzdCA9IFN1c3BlbnNlTGlzdDtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1N1c3BlbnNlTGlzdCA9IGlzU3VzcGVuc2VMaXN0O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IHsgaXNQcm9wVmFsaWQgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlTGF5b3V0RWZmZWN0IGFzIGx9ZnJvbVwicmVhY3RcIjtpbXBvcnQgZCBmcm9tXCJzaGFsbG93ZXF1YWxcIjtpbXBvcnQgaCBmcm9tXCJAZW1vdGlvbi9zdHlsaXNcIjtpbXBvcnQgcCBmcm9tXCJAZW1vdGlvbi91bml0bGVzc1wiO2ltcG9ydCBmIGZyb21cIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIjtpbXBvcnQgbSBmcm9tXCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiO2Z1bmN0aW9uIHkoKXtyZXR1cm4oeT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJihlW3JdPW5bcl0pfXJldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciB2PWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtlWzBdXSxyPTAsbz10Lmxlbmd0aDtyPG87cis9MSluLnB1c2godFtyXSxlW3IrMV0pO3JldHVybiBufSxnPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT0odC50b1N0cmluZz90LnRvU3RyaW5nKCk6T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKSYmIWUodCl9LFM9T2JqZWN0LmZyZWV6ZShbXSksdz1PYmplY3QuZnJlZXplKHt9KTtmdW5jdGlvbiBFKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9ZnVuY3Rpb24gYihlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmZXx8ZS5kaXNwbGF5TmFtZXx8ZS5uYW1lfHxcIkNvbXBvbmVudFwifWZ1bmN0aW9uIF8oZSl7cmV0dXJuIGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLnN0eWxlZENvbXBvbmVudElkfXZhciBOPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudiYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEE9XCI1LjMuMTFcIixDPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxJPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJih2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6dm9pZCAwIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk6XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVikpLFA9e30sTz1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBSKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIEQoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihSLmFwcGx5KHZvaWQgMCxbT1tlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBqPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZEKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCksVD1uZXcgTWFwLHg9bmV3IE1hcCxrPTEsVj1mdW5jdGlvbihlKXtpZihULmhhcyhlKSlyZXR1cm4gVC5nZXQoZSk7Zm9yKDt4LmhhcyhrKTspaysrO3ZhciB0PWsrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJkQoMTYsXCJcIit0KSxULnNldChlLHQpLHguc2V0KHQsZSksdH0sQj1mdW5jdGlvbihlKXtyZXR1cm4geC5nZXQoZSl9LHo9ZnVuY3Rpb24oZSx0KXt0Pj1rJiYoaz10KzEpLFQuc2V0KGUsdCkseC5zZXQodCxlKX0sTT1cInN0eWxlW1wiK04rJ11bZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy4xMVwiXScsRz1uZXcgUmVnRXhwKFwiXlwiK04rJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpLEw9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixvPW4uc3BsaXQoXCIsXCIpLHM9MCxpPW8ubGVuZ3RoO3M8aTtzKyspKHI9b1tzXSkmJmUucmVnaXN0ZXJOYW1lKHQscil9LEY9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49KHQudGV4dENvbnRlbnR8fFwiXCIpLnNwbGl0KFwiLyohc2MqL1xcblwiKSxyPVtdLG89MCxzPW4ubGVuZ3RoO288cztvKyspe3ZhciBpPW5bb10udHJpbSgpO2lmKGkpe3ZhciBhPWkubWF0Y2goRyk7aWYoYSl7dmFyIGM9MHxwYXJzZUludChhWzFdLDEwKSx1PWFbMl07MCE9PWMmJih6KHUsYyksTChlLHUsYVszXSksZS5nZXRUYWcoKS5pbnNlcnRSdWxlcyhjLHIpKSxyLmxlbmd0aD0wfWVsc2Ugci5wdXNoKGkpfX19LFk9ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgX193ZWJwYWNrX25vbmNlX18/X193ZWJwYWNrX25vbmNlX186bnVsbH0scT1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoaWxkTm9kZXMsbj10Lmxlbmd0aDtuPj0wO24tLSl7dmFyIHI9dFtuXTtpZihyJiYxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoTikpcmV0dXJuIHJ9fShuKSxzPXZvaWQgMCE9PW8/by5uZXh0U2libGluZzpudWxsO3Iuc2V0QXR0cmlidXRlKE4sXCJhY3RpdmVcIiksci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsXCI1LjMuMTFcIik7dmFyIGk9WSgpO3JldHVybiBpJiZyLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsaSksbi5pbnNlcnRCZWZvcmUocixzKSxyfSxIPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9cShlKTt0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKSx0aGlzLnNoZWV0PWZ1bmN0aW9uKGUpe2lmKGUuc2hlZXQpcmV0dXJuIGUuc2hlZXQ7Zm9yKHZhciB0PWRvY3VtZW50LnN0eWxlU2hlZXRzLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07aWYoby5vd25lck5vZGU9PT1lKXJldHVybiBvfUQoMTcpfSh0KSx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXt0cnl7cmV0dXJuIHRoaXMuc2hlZXQuaW5zZXJ0UnVsZSh0LGUpLHRoaXMubGVuZ3RoKyssITB9Y2F0Y2goZSl7cmV0dXJuITF9fSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5zaGVldC5kZWxldGVSdWxlKGUpLHRoaXMubGVuZ3RoLS19LHQuZ2V0UnVsZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnNoZWV0LmNzc1J1bGVzW2VdO3JldHVybiB2b2lkIDAhPT10JiZcInN0cmluZ1wiPT10eXBlb2YgdC5jc3NUZXh0P3QuY3NzVGV4dDpcIlwifSxlfSgpLCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1xKGUpO3RoaXMubm9kZXM9dC5jaGlsZE5vZGVzLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe2lmKGU8PXRoaXMubGVuZ3RoJiZlPj0wKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSxyPXRoaXMubm9kZXNbZV07cmV0dXJuIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUobixyfHxudWxsKSx0aGlzLmxlbmd0aCsrLCEwfXJldHVybiExfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZXNbZV0pLHRoaXMubGVuZ3RoLS19LHQuZ2V0UnVsZT1mdW5jdGlvbihlKXtyZXR1cm4gZTx0aGlzLmxlbmd0aD90aGlzLm5vZGVzW2VdLnRleHRDb250ZW50OlwiXCJ9LGV9KCksVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ydWxlcz1bXSx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTw9dGhpcy5sZW5ndGgmJih0aGlzLnJ1bGVzLnNwbGljZShlLDAsdCksdGhpcy5sZW5ndGgrKywhMCl9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnJ1bGVzLnNwbGljZShlLDEpLHRoaXMubGVuZ3RoLS19LHQuZ2V0UnVsZT1mdW5jdGlvbihlKXtyZXR1cm4gZTx0aGlzLmxlbmd0aD90aGlzLnJ1bGVzW2VdOlwiXCJ9LGV9KCksVT1DLEo9e2lzU2VydmVyOiFDLHVzZUNTU09NSW5qZWN0aW9uOiFJfSxYPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dm9pZCAwPT09ZSYmKGU9dyksdm9pZCAwPT09dCYmKHQ9e30pLHRoaXMub3B0aW9ucz15KHt9LEose30sZSksdGhpcy5ncz10LHRoaXMubmFtZXM9bmV3IE1hcChuKSx0aGlzLnNlcnZlcj0hIWUuaXNTZXJ2ZXIsIXRoaXMuc2VydmVyJiZDJiZVJiYoVT0hMSxmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChNKSxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO28mJlwiYWN0aXZlXCIhPT1vLmdldEF0dHJpYnV0ZShOKSYmKEYoZSxvKSxvLnBhcmVudE5vZGUmJm8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSl9fSh0aGlzKSl9ZS5yZWdpc3RlcklkPWZ1bmN0aW9uKGUpe3JldHVybiBWKGUpfTt2YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPSEwKSxuZXcgZSh5KHt9LHRoaXMub3B0aW9ucyx7fSx0KSx0aGlzLmdzLG4mJnRoaXMubmFtZXN8fHZvaWQgMCl9LHQuYWxsb2NhdGVHU0luc3RhbmNlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdzW2VdPSh0aGlzLmdzW2VdfHwwKSsxfSx0LmdldFRhZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRhZ3x8KHRoaXMudGFnPShuPSh0PXRoaXMub3B0aW9ucykuaXNTZXJ2ZXIscj10LnVzZUNTU09NSW5qZWN0aW9uLG89dC50YXJnZXQsZT1uP25ldyBXKG8pOnI/bmV3IEgobyk6bmV3ICQobyksbmV3IGooZSkpKTt2YXIgZSx0LG4scixvfSx0Lmhhc05hbWVGb3JJZD1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm5hbWVzLmhhcyhlKSYmdGhpcy5uYW1lcy5nZXQoZSkuaGFzKHQpfSx0LnJlZ2lzdGVyTmFtZT1mdW5jdGlvbihlLHQpe2lmKFYoZSksdGhpcy5uYW1lcy5oYXMoZSkpdGhpcy5uYW1lcy5nZXQoZSkuYWRkKHQpO2Vsc2V7dmFyIG49bmV3IFNldDtuLmFkZCh0KSx0aGlzLm5hbWVzLnNldChlLG4pfX0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQsbil7dGhpcy5yZWdpc3Rlck5hbWUoZSx0KSx0aGlzLmdldFRhZygpLmluc2VydFJ1bGVzKFYoZSksbil9LHQuY2xlYXJOYW1lcz1mdW5jdGlvbihlKXt0aGlzLm5hbWVzLmhhcyhlKSYmdGhpcy5uYW1lcy5nZXQoZSkuY2xlYXIoKX0sdC5jbGVhclJ1bGVzPWZ1bmN0aW9uKGUpe3RoaXMuZ2V0VGFnKCkuY2xlYXJHcm91cChWKGUpKSx0aGlzLmNsZWFyTmFtZXMoZSl9LHQuY2xlYXJUYWc9ZnVuY3Rpb24oKXt0aGlzLnRhZz12b2lkIDB9LHQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuZ2V0VGFnKCksbj10Lmxlbmd0aCxyPVwiXCIsbz0wO288bjtvKyspe3ZhciBzPUIobyk7aWYodm9pZCAwIT09cyl7dmFyIGk9ZS5uYW1lcy5nZXQocyksYT10LmdldEdyb3VwKG8pO2lmKGkmJmEmJmkuc2l6ZSl7dmFyIGM9TitcIi5nXCIrbysnW2lkPVwiJytzKydcIl0nLHU9XCJcIjt2b2lkIDAhPT1pJiZpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UubGVuZ3RoPjAmJih1Kz1lK1wiLFwiKX0pKSxyKz1cIlwiK2ErYysne2NvbnRlbnQ6XCInK3UrJ1wifS8qIXNjKi9cXG4nfX19cmV0dXJuIHJ9KHRoaXMpfSxlfSgpLFo9LyhhKShkKS9naSxLPWZ1bmN0aW9uKGUpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUrKGU+MjU/Mzk6OTcpKX07ZnVuY3Rpb24gUShlKXt2YXIgdCxuPVwiXCI7Zm9yKHQ9TWF0aC5hYnMoZSk7dD41Mjt0PXQvNTJ8MCluPUsodCU1MikrbjtyZXR1cm4oSyh0JTUyKStuKS5yZXBsYWNlKFosXCIkMS0kMlwiKX12YXIgZWU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSx0ZT1mdW5jdGlvbihlKXtyZXR1cm4gZWUoNTM4MSxlKX07ZnVuY3Rpb24gbmUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKEUobikmJiFfKG4pKXJldHVybiExfXJldHVybiEwfXZhciByZT10ZShcIjUuMy4xMVwiKSxvZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3RoaXMucnVsZXM9ZSx0aGlzLnN0YXRpY1J1bGVzSWQ9XCJcIix0aGlzLmlzU3RhdGljPVwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih2b2lkIDA9PT1ufHxuLmlzU3RhdGljKSYmbmUoZSksdGhpcy5jb21wb25lbnRJZD10LHRoaXMuYmFzZUhhc2g9ZWUocmUsdCksdGhpcy5iYXNlU3R5bGU9bixYLnJlZ2lzdGVySWQodCl9cmV0dXJuIGUucHJvdG90eXBlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLmNvbXBvbmVudElkLG89W107aWYodGhpcy5iYXNlU3R5bGUmJm8ucHVzaCh0aGlzLmJhc2VTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhlLHQsbikpLHRoaXMuaXNTdGF0aWMmJiFuLmhhc2gpaWYodGhpcy5zdGF0aWNSdWxlc0lkJiZ0Lmhhc05hbWVGb3JJZChyLHRoaXMuc3RhdGljUnVsZXNJZCkpby5wdXNoKHRoaXMuc3RhdGljUnVsZXNJZCk7ZWxzZXt2YXIgcz1fZSh0aGlzLnJ1bGVzLGUsdCxuKS5qb2luKFwiXCIpLGk9UShlZSh0aGlzLmJhc2VIYXNoLHMpPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsaSkpe3ZhciBhPW4ocyxcIi5cIitpLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsaSxhKX1vLnB1c2goaSksdGhpcy5zdGF0aWNSdWxlc0lkPWl9ZWxzZXtmb3IodmFyIGM9dGhpcy5ydWxlcy5sZW5ndGgsdT1lZSh0aGlzLmJhc2VIYXNoLG4uaGFzaCksbD1cIlwiLGQ9MDtkPGM7ZCsrKXt2YXIgaD10aGlzLnJ1bGVzW2RdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBoKWwrPWgsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHU9ZWUodSxoK2QpKTtlbHNlIGlmKGgpe3ZhciBwPV9lKGgsZSx0LG4pLGY9QXJyYXkuaXNBcnJheShwKT9wLmpvaW4oXCJcIik6cDt1PWVlKHUsZitkKSxsKz1mfX1pZihsKXt2YXIgbT1RKHU+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixtKSl7dmFyIHk9bihsLFwiLlwiK20sdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixtLHkpfW8ucHVzaChtKX19cmV0dXJuIG8uam9pbihcIiBcIil9LGV9KCksc2U9L15cXHMqXFwvXFwvLiokL2dtLGllPVtcIjpcIixcIltcIixcIi5cIixcIiNcIl07ZnVuY3Rpb24gYWUoZSl7dmFyIHQsbixyLG8scz12b2lkIDA9PT1lP3c6ZSxpPXMub3B0aW9ucyxhPXZvaWQgMD09PWk/dzppLGM9cy5wbHVnaW5zLHU9dm9pZCAwPT09Yz9TOmMsbD1uZXcgaChhKSxkPVtdLHA9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXtpZih0KXRyeXtlKHQrXCJ9XCIpfWNhdGNoKGUpe319cmV0dXJuIGZ1bmN0aW9uKG4scixvLHMsaSxhLGMsdSxsLGQpe3N3aXRjaChuKXtjYXNlIDE6aWYoMD09PWwmJjY0PT09ci5jaGFyQ29kZUF0KDApKXJldHVybiBlKHIrXCI7XCIpLFwiXCI7YnJlYWs7Y2FzZSAyOmlmKDA9PT11KXJldHVybiByK1wiLyp8Ki9cIjticmVhaztjYXNlIDM6c3dpdGNoKHUpe2Nhc2UgMTAyOmNhc2UgMTEyOnJldHVybiBlKG9bMF0rciksXCJcIjtkZWZhdWx0OnJldHVybiByKygwPT09ZD9cIi8qfCovXCI6XCJcIil9Y2FzZS0yOnIuc3BsaXQoXCIvKnwqL31cIikuZm9yRWFjaCh0KX19fSgoZnVuY3Rpb24oZSl7ZC5wdXNoKGUpfSkpLGY9ZnVuY3Rpb24oZSxyLHMpe3JldHVybiAwPT09ciYmLTEhPT1pZS5pbmRleE9mKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShzZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0scCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxEKDE1KSxlZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgY2U9ci5jcmVhdGVDb250ZXh0KCksdWU9Y2UuQ29uc3VtZXIsbGU9ci5jcmVhdGVDb250ZXh0KCksZGU9KGxlLkNvbnN1bWVyLG5ldyBYKSxoZT1hZSgpO2Z1bmN0aW9uIHBlKCl7cmV0dXJuIHMoY2UpfHxkZX1mdW5jdGlvbiBmZSgpe3JldHVybiBzKGxlKXx8aGV9ZnVuY3Rpb24gbWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1wZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBhZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2QobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KGNlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQobGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgeWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PWhlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gRCgxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPWhlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLHZlPS8oW0EtWl0pLyxnZT0vKFtBLVpdKS9nLFNlPS9ebXMtLyx3ZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIEVlKGUpe3JldHVybiB2ZS50ZXN0KGUpP2UucmVwbGFjZShnZSx3ZSkucmVwbGFjZShTZSxcIi1tcy1cIik6ZX12YXIgYmU9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIF9lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1fZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoYmUoZSkpcmV0dXJuXCJcIjtpZihfKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoRShlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKGIoZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxfZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHllP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOmcoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhYmUodFtpXSkmJihBcnJheS5pc0FycmF5KHRbaV0pJiZ0W2ldLmlzQ3NzfHxFKHRbaV0pP3MucHVzaChFZShpKStcIjpcIix0W2ldLFwiO1wiKTpnKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6cy5wdXNoKEVlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIHB8fHIuc3RhcnRzV2l0aChcIi0tXCIpP1N0cmluZyhvKS50cmltKCk6bytcInB4XCIpK1wiO1wiKSk7cmV0dXJuIG4/W24rXCIge1wiXS5jb25jYXQocyxbXCJ9XCJdKTpzfShlKTplLnRvU3RyaW5nKCl9dmFyIE5lPWZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpJiYoZS5pc0Nzcz0hMCksZX07ZnVuY3Rpb24gQWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiBFKGUpfHxnKGUpP05lKF9lKHYoUyxbZV0uY29uY2F0KG4pKSkpOjA9PT1uLmxlbmd0aCYmMT09PWUubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgZVswXT9lOk5lKF9lKHYoZSxuKSkpfXZhciBDZT0vaW52YWxpZCBob29rIGNhbGwvaSxJZT1uZXcgU2V0LFBlPWZ1bmN0aW9uKGUsdCl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIG49XCJUaGUgY29tcG9uZW50IFwiK2UrKHQ/JyB3aXRoIHRoZSBpZCBvZiBcIicrdCsnXCInOlwiXCIpK1wiIGhhcyBiZWVuIGNyZWF0ZWQgZHluYW1pY2FsbHkuXFxuWW91IG1heSBzZWUgdGhpcyB3YXJuaW5nIGJlY2F1c2UgeW91J3ZlIGNhbGxlZCBzdHlsZWQgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxcblRvIHJlc29sdmUgdGhpcyBvbmx5IGNyZWF0ZSBuZXcgU3R5bGVkQ29tcG9uZW50cyBvdXRzaWRlIG9mIGFueSByZW5kZXIgbWV0aG9kIGFuZCBmdW5jdGlvbiBjb21wb25lbnQuXCIscj1jb25zb2xlLmVycm9yO3RyeXt2YXIgbz0hMDtjb25zb2xlLmVycm9yPWZ1bmN0aW9uKGUpe2lmKENlLnRlc3QoZSkpbz0hMSxJZS5kZWxldGUobik7ZWxzZXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxzPW5ldyBBcnJheSh0PjE/dC0xOjApLGk9MTtpPHQ7aSsrKXNbaS0xXT1hcmd1bWVudHNbaV07ci5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChzKSl9fSxjKCksbyYmIUllLmhhcyhuKSYmKGNvbnNvbGUud2FybihuKSxJZS5hZGQobikpfWNhdGNoKGUpe0NlLnRlc3QoZS5tZXNzYWdlKSYmSWUuZGVsZXRlKG4pfWZpbmFsbHl7Y29uc29sZS5lcnJvcj1yfX19LE9lPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49dyksZS50aGVtZSE9PW4udGhlbWUmJmUudGhlbWV8fHR8fG4udGhlbWV9LFJlPS9bIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+LV0rL2csRGU9LyheLXwtJCkvZztmdW5jdGlvbiBqZShlKXtyZXR1cm4gZS5yZXBsYWNlKFJlLFwiLVwiKS5yZXBsYWNlKERlLFwiXCIpfXZhciBUZT1mdW5jdGlvbihlKXtyZXR1cm4gUSh0ZShlKT4+PjApfTtmdW5jdGlvbiB4ZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIGtlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByPWVbbl07a2UodCkmJmtlKHIpP3plKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIHplKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoa2UoaSkpZm9yKHZhciBhIGluIGkpVmUoYSkmJkJlKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgTWU9ci5jcmVhdGVDb250ZXh0KCksR2U9TWUuQ29uc3VtZXI7ZnVuY3Rpb24gTGUoZSl7dmFyIHQ9cyhNZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBEKDE0KTtpZihFKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpEKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9EKDgpOnQ/eSh7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KE1lLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBGZT17fTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIG89XyhlKSxpPSF4ZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP1M6YSxsPXQuY29tcG9uZW50SWQsZD12b2lkIDA9PT1sP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOmplKGUpO0ZlW25dPShGZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK1RlKFwiNS4zLjExXCIrbitGZVtuXSk7cmV0dXJuIHQ/dCtcIi1cIityOnJ9KHQuZGlzcGxheU5hbWUsdC5wYXJlbnRDb21wb25lbnRJZCk6bCxoPXQuZGlzcGxheU5hbWUscD12b2lkIDA9PT1oP2Z1bmN0aW9uKGUpe3JldHVybiB4ZShlKT9cInN0eWxlZC5cIitlOlwiU3R5bGVkKFwiK2IoZSkrXCIpXCJ9KGUpOmgsdj10LmRpc3BsYXlOYW1lJiZ0LmNvbXBvbmVudElkP2plKHQuZGlzcGxheU5hbWUpK1wiLVwiK3QuY29tcG9uZW50SWQ6dC5jb21wb25lbnRJZHx8ZCxnPW8mJmUuYXR0cnM/QXJyYXkucHJvdG90eXBlLmNvbmNhdChlLmF0dHJzLGMpLmZpbHRlcihCb29sZWFuKTpjLE49dC5zaG91bGRGb3J3YXJkUHJvcDtvJiZlLnNob3VsZEZvcndhcmRQcm9wJiYoTj10LnNob3VsZEZvcndhcmRQcm9wP2Z1bmN0aW9uKG4scixvKXtyZXR1cm4gZS5zaG91bGRGb3J3YXJkUHJvcChuLHIsbykmJnQuc2hvdWxkRm9yd2FyZFByb3AobixyLG8pfTplLnNob3VsZEZvcndhcmRQcm9wKTt2YXIgQSxDPW5ldyBvZShuLHYsbz9lLmNvbXBvbmVudFN0eWxlOnZvaWQgMCksST1DLmlzU3RhdGljJiYwPT09Yy5sZW5ndGgsUD1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlLHQsbixyKXt2YXIgbz1lLmF0dHJzLGk9ZS5jb21wb25lbnRTdHlsZSxhPWUuZGVmYXVsdFByb3BzLGM9ZS5mb2xkZWRDb21wb25lbnRJZHMsbD1lLnNob3VsZEZvcndhcmRQcm9wLGQ9ZS5zdHlsZWRDb21wb25lbnRJZCxoPWUudGFyZ2V0LHA9ZnVuY3Rpb24oZSx0LG4pe3ZvaWQgMD09PWUmJihlPXcpO3ZhciByPXkoe30sdCx7dGhlbWU6ZX0pLG89e307cmV0dXJuIG4uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQsbixzLGk9ZTtmb3IodCBpbiBFKGkpJiYoaT1pKHIpKSxpKXJbdF09b1t0XT1cImNsYXNzTmFtZVwiPT09dD8obj1vW3RdLHM9aVt0XSxuJiZzP24rXCIgXCIrczpufHxzKTppW3RdfSkpLFtyLG9dfShPZSh0LHMoTWUpLGEpfHx3LHQsbyksbT1wWzBdLHY9cFsxXSxnPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXBlKCkscz1mZSgpLGk9dD9lLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHcsbyxzKTplLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKG4sbyxzKTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYhdCYmciYmcihpKSxpfShpLHIsbSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP2Uud2FyblRvb01hbnlDbGFzc2VzOnZvaWQgMCksUz1uLGI9di4kYXN8fHQuJGFzfHx2LmFzfHx0LmFzfHxoLF89eGUoYiksTj12IT09dD95KHt9LHQse30sdik6dCxBPXt9O2Zvcih2YXIgQyBpbiBOKVwiJFwiIT09Q1swXSYmXCJhc1wiIT09QyYmKFwiZm9yd2FyZGVkQXNcIj09PUM/QS5hcz1OW0NdOihsP2woQyxmLGIpOiFffHxmKEMpKSYmKEFbQ109TltDXSkpO3JldHVybiB0LnN0eWxlJiZ2LnN0eWxlIT09dC5zdHlsZSYmKEEuc3R5bGU9eSh7fSx0LnN0eWxlLHt9LHYuc3R5bGUpKSxBLmNsYXNzTmFtZT1BcnJheS5wcm90b3R5cGUuY29uY2F0KGMsZCxnIT09ZD9nOm51bGwsdC5jbGFzc05hbWUsdi5jbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSxBLnJlZj1TLHUoYixBKX0oQSxlLHQsSSl9O3JldHVybiBQLmRpc3BsYXlOYW1lPXAsKEE9ci5mb3J3YXJkUmVmKFApKS5hdHRycz1nLEEuY29tcG9uZW50U3R5bGU9QyxBLmRpc3BsYXlOYW1lPXAsQS5zaG91bGRGb3J3YXJkUHJvcD1OLEEuZm9sZGVkQ29tcG9uZW50SWRzPW8/QXJyYXkucHJvdG90eXBlLmNvbmNhdChlLmZvbGRlZENvbXBvbmVudElkcyxlLnN0eWxlZENvbXBvbmVudElkKTpTLEEuc3R5bGVkQ29tcG9uZW50SWQ9dixBLnRhcmdldD1vP2UudGFyZ2V0OmUsQS53aXRoQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3ZhciByPXQuY29tcG9uZW50SWQsbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIG4scixvPXt9LHM9T2JqZWN0LmtleXMoZSk7Zm9yKHI9MDtyPHMubGVuZ3RoO3IrKyluPXNbcl0sdC5pbmRleE9mKG4pPj0wfHwob1tuXT1lW25dKTtyZXR1cm4gb30odCxbXCJjb21wb25lbnRJZFwiXSkscz1yJiZyK1wiLVwiKyh4ZShlKT9lOmplKGIoZSkpKTtyZXR1cm4gWWUoZSx5KHt9LG8se2F0dHJzOmcsY29tcG9uZW50SWQ6c30pLG4pfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoQSxcImRlZmF1bHRQcm9wc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzPW8/emUoe30sZS5kZWZhdWx0UHJvcHMsdCk6dH19KSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoUGUocCx2KSxBLndhcm5Ub29NYW55Q2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZhciBuPXt9LHI9ITE7cmV0dXJuIGZ1bmN0aW9uKG8pe2lmKCFyJiYobltvXT0hMCxPYmplY3Qua2V5cyhuKS5sZW5ndGg+PTIwMCkpe3ZhciBzPXQ/JyB3aXRoIHRoZSBpZCBvZiBcIicrdCsnXCInOlwiXCI7Y29uc29sZS53YXJuKFwiT3ZlciAyMDAgY2xhc3NlcyB3ZXJlIGdlbmVyYXRlZCBmb3IgY29tcG9uZW50IFwiK2UrcytcIi5cXG5Db25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbkV4YW1wbGU6XFxuICBjb25zdCBDb21wb25lbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHByb3BzID0+ICh7XFxuICAgIHN0eWxlOiB7XFxuICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4gICAgfSxcXG4gIH0pKWB3aWR0aDogMTAwJTtgXFxuXFxuICA8Q29tcG9uZW50IC8+XCIpLHI9ITAsbj17fX19fShwLHYpKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoQSxcInRvU3RyaW5nXCIse3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCIuXCIrQS5zdHlsZWRDb21wb25lbnRJZH19KSxpJiZtKEEsZSx7YXR0cnM6ITAsY29tcG9uZW50U3R5bGU6ITAsZGlzcGxheU5hbWU6ITAsZm9sZGVkQ29tcG9uZW50SWRzOiEwLHNob3VsZEZvcndhcmRQcm9wOiEwLHN0eWxlZENvbXBvbmVudElkOiEwLHRhcmdldDohMCx3aXRoQ29tcG9uZW50OiEwfSksQX12YXIgcWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG8pe2lmKHZvaWQgMD09PW8mJihvPXcpLCFuKHIpKXJldHVybiBEKDEsU3RyaW5nKHIpKTt2YXIgcz1mdW5jdGlvbigpe3JldHVybiB0KHIsbyxBZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9O3JldHVybiBzLndpdGhDb25maWc9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHkoe30sbyx7fSxuKSl9LHMuYXR0cnM9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHkoe30sbyx7YXR0cnM6QXJyYXkucHJvdG90eXBlLmNvbmNhdChvLmF0dHJzLG4pLmZpbHRlcihCb29sZWFuKX0pKX0sc30oWWUsZSl9O1tcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJpZ1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjaXRlXCIsXCJjb2RlXCIsXCJjb2xcIixcImNvbGdyb3VwXCIsXCJkYXRhXCIsXCJkYXRhbGlzdFwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaWFsb2dcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5rXCIsXCJtYWluXCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcnF1ZWVcIixcIm1lbnVcIixcIm1lbnVpdGVtXCIsXCJtZXRhXCIsXCJtZXRlclwiLFwibmF2XCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGljdHVyZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicnBcIixcInJ0XCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic21hbGxcIixcInNvdXJjZVwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ1XCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRleHRQYXRoXCIsXCJ0c3BhblwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXtxZVtlXT1xZShlKX0pKTt2YXIgSGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5ydWxlcz1lLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmlzU3RhdGljPW5lKGUpLFgucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkKzEpfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNyZWF0ZVN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1yKF9lKHRoaXMucnVsZXMsdCxuLHIpLmpvaW4oXCJcIiksXCJcIikscz10aGlzLmNvbXBvbmVudElkK2U7bi5pbnNlcnRSdWxlcyhzLHMsbyl9LHQucmVtb3ZlU3R5bGVzPWZ1bmN0aW9uKGUsdCl7dC5jbGVhclJ1bGVzKHRoaXMuY29tcG9uZW50SWQrZSl9LHQucmVuZGVyU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe2U+MiYmWC5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrZSksdGhpcy5yZW1vdmVTdHlsZXMoZSxuKSx0aGlzLmNyZWF0ZVN0eWxlcyhlLHQsbixyKX0sZX0oKTtmdW5jdGlvbiAkZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLG89MTtvPHQ7bysrKW5bby0xXT1hcmd1bWVudHNbb107dmFyIGk9QWUuYXBwbHkodm9pZCAwLFtlXS5jb25jYXQobikpLGE9XCJzYy1nbG9iYWwtXCIrVGUoSlNPTi5zdHJpbmdpZnkoaSkpLHU9bmV3IEhlKGksYSk7ZnVuY3Rpb24gZChlKXt2YXIgdD1wZSgpLG49ZmUoKSxvPXMoTWUpLGQ9Yyh0LmFsbG9jYXRlR1NJbnN0YW5jZShhKSkuY3VycmVudDtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZyLkNoaWxkcmVuLmNvdW50KGUuY2hpbGRyZW4pJiZjb25zb2xlLndhcm4oXCJUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCBcIithK1wiIHdhcyBnaXZlbiBjaGlsZCBKU1guIGNyZWF0ZUdsb2JhbFN0eWxlIGRvZXMgbm90IHJlbmRlciBjaGlsZHJlbi5cIiksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmLTEhPT1lLmluZGV4T2YoXCJAaW1wb3J0XCIpfSkpJiZjb25zb2xlLndhcm4oXCJQbGVhc2UgZG8gbm90IHVzZSBAaW1wb3J0IENTUyBzeW50YXggaW4gY3JlYXRlR2xvYmFsU3R5bGUgYXQgdGhpcyB0aW1lLCBhcyB0aGUgQ1NTT00gQVBJcyB3ZSB1c2UgaW4gcHJvZHVjdGlvbiBkbyBub3QgaGFuZGxlIGl0IHdlbGwuIEluc3RlYWQsIHdlIHJlY29tbWVuZCB1c2luZyBhIGxpYnJhcnkgc3VjaCBhcyByZWFjdC1oZWxtZXQgdG8gaW5qZWN0IGEgdHlwaWNhbCA8bGluaz4gbWV0YSB0YWcgdG8gdGhlIHN0eWxlc2hlZXQsIG9yIHNpbXBseSBlbWJlZGRpbmcgaXQgbWFudWFsbHkgaW4geW91ciBpbmRleC5odG1sIDxoZWFkPiBzZWN0aW9uIGZvciBhIHNpbXBsZXIgYXBwLlwiKSx0LnNlcnZlciYmaChkLGUsdCxvLG4pLGwoKGZ1bmN0aW9uKCl7aWYoIXQuc2VydmVyKXJldHVybiBoKGQsZSx0LG8sbiksZnVuY3Rpb24oKXtyZXR1cm4gdS5yZW1vdmVTdHlsZXMoZCx0KX19KSxbZCxlLHQsbyxuXSksbnVsbH1mdW5jdGlvbiBoKGUsdCxuLHIsbyl7aWYodS5pc1N0YXRpYyl1LnJlbmRlclN0eWxlcyhlLFAsbixvKTtlbHNle3ZhciBzPXkoe30sdCx7dGhlbWU6T2UodCxyLGQuZGVmYXVsdFByb3BzKX0pO3UucmVuZGVyU3R5bGVzKGUscyxuLG8pfX1yZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZQZShhKSxyLm1lbW8oZCl9ZnVuY3Rpb24gV2UoZSl7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmXCJSZWFjdE5hdGl2ZVwiPT09bmF2aWdhdG9yLnByb2R1Y3QmJmNvbnNvbGUud2FybihcImBrZXlmcmFtZXNgIGNhbm5vdCBiZSB1c2VkIG9uIFJlYWN0TmF0aXZlLCBvbmx5IG9uIHRoZSB3ZWIuIFRvIGRvIGFuaW1hdGlvbiBpbiBSZWFjdE5hdGl2ZSBwbGVhc2UgdXNlIEFuaW1hdGVkLlwiKTtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07dmFyIG89QWUuYXBwbHkodm9pZCAwLFtlXS5jb25jYXQobikpLmpvaW4oXCJcIikscz1UZShvKTtyZXR1cm4gbmV3IHllKHMsbyl9dmFyIFVlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBlPXRoaXM7dGhpcy5fZW1pdFNoZWV0Q1NTPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5pbnN0YW5jZS50b1N0cmluZygpO2lmKCF0KXJldHVyblwiXCI7dmFyIG49WSgpO3JldHVyblwiPHN0eWxlIFwiK1tuJiYnbm9uY2U9XCInK24rJ1wiJyxOKyc9XCJ0cnVlXCInLCdkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4zLjExXCInXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikrXCI+XCIrdCtcIjwvc3R5bGU+XCJ9LHRoaXMuZ2V0U3R5bGVUYWdzPWZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VhbGVkP0QoMik6ZS5fZW1pdFNoZWV0Q1NTKCl9LHRoaXMuZ2V0U3R5bGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ7aWYoZS5zZWFsZWQpcmV0dXJuIEQoMik7dmFyIG49KCh0PXt9KVtOXT1cIlwiLHRbXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCJdPVwiNS4zLjExXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1ZKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHkoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWCh7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9EKDIpOnIuY3JlYXRlRWxlbWVudChtZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBEKDMpfSxlfSgpLEplPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKE1lKSxpPWUuZGVmYXVsdFByb3BzLGE9T2UodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK2IoZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUseSh7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiBtKHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitiKGUpK1wiKVwiLHR9LFhlPWZ1bmN0aW9uKCl7cmV0dXJuIHMoTWUpfSxaZT17U3R5bGVTaGVldDpYLG1hc3RlclNoZWV0OmRlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgcWU7ZXhwb3J0e1VlIGFzIFNlcnZlclN0eWxlU2hlZXQsdWUgYXMgU3R5bGVTaGVldENvbnN1bWVyLGNlIGFzIFN0eWxlU2hlZXRDb250ZXh0LG1lIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLEdlIGFzIFRoZW1lQ29uc3VtZXIsTWUgYXMgVGhlbWVDb250ZXh0LExlIGFzIFRoZW1lUHJvdmlkZXIsWmUgYXMgX19QUklWQVRFX18sJGUgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQWUgYXMgY3NzLF8gYXMgaXNTdHlsZWRDb21wb25lbnQsV2UgYXMga2V5ZnJhbWVzLFhlIGFzIHVzZVRoZW1lLEEgYXMgdmVyc2lvbixKZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsImltcG9ydCAnZm9jdXMtb3V0bGluZS1tYW5hZ2VyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIGNyZWF0ZVJlZiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHNjcm9sbFNtb290aCBmcm9tICdzY3JvbGwtc21vb3RoJztcbmltcG9ydCBTY3JvbGxwYXJlbnQgZnJvbSAnc2Nyb2xscGFyZW50JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IEZvY3VzTG9jayBmcm9tICdyZWFjdC1mb2N1cy1sb2NrJztcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKCFpdCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlmIChpdCkgbyA9IGl0O1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzOiBGLFxuICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9LFxuICAgICAgICBmOiBGXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSxcbiAgICAgIGRpZEVyciA9IGZhbHNlLFxuICAgICAgZXJyO1xuICByZXR1cm4ge1xuICAgIHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGl0ID0gaXQuY2FsbChvKTtcbiAgICB9LFxuICAgIG46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTtcbiAgICAgIHJldHVybiBzdGVwO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRpZEVyciA9IHRydWU7XG4gICAgICBlcnIgPSBlO1xuICAgIH0sXG4gICAgZjogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChkaWRFcnIpIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciBfdGVtcGxhdGVPYmplY3QkOTtcbnZhciBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlKF90ZW1wbGF0ZU9iamVjdCQ5IHx8IChfdGVtcGxhdGVPYmplY3QkOSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICAuZm9jdXMtb3V0bGluZS1oaWRkZW4gOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcblwiXSkpKTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCQ4O1xudmFyIFN2Z0J1dHRvbiA9IHN0eWxlZC5idXR0b24oX3RlbXBsYXRlT2JqZWN0JDggfHwgKF90ZW1wbGF0ZU9iamVjdCQ4ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDA7XFxuICBjdXJzb3I6IFwiLCBcIjtcXG5cIl0pKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcic7XG59KTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCQ3LCBfdGVtcGxhdGVPYmplY3QyO1xudmFyIExhYmVsID0gc3R5bGVkLnNwYW4oX3RlbXBsYXRlT2JqZWN0JDcgfHwgKF90ZW1wbGF0ZU9iamVjdCQ3ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcblwiXSkpKTtcblxuZnVuY3Rpb24gQXJyb3coX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgaW52ZXJ0ZWQgPSBfcmVmLmludmVydGVkLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3ZnQnV0dG9uLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBcImRhdGEtdG91ci1lbGVtXCI6IFwiXCIuY29uY2F0KGludmVydGVkID8gJ3JpZ2h0JyA6ICdsZWZ0JywgXCItYXJyb3dcIiksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gIH0sIGxhYmVsID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIGxhYmVsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB2aWV3Qm94OiBcIjAgMCAxOC40IDE0LjRcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IGludmVydGVkID8gJ00xNyA3LjJIMU0xMC44IDFMMTcgNy4ybC02LjIgNi4yJyA6ICdNMS40IDcuMmgxNk03LjYgMUwxLjQgNy4ybDYuMiA2LjInLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICBzdHJva2VXaWR0aDogXCIyXCIsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IFwiMTBcIlxuICB9KSkpO1xufVxuXG5BcnJvdy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbnZlcnRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xudmFyIEFycm93JDEgPSBzdHlsZWQoQXJyb3cpKF90ZW1wbGF0ZU9iamVjdDIgfHwgKF90ZW1wbGF0ZU9iamVjdDIgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgY29sb3I6IFwiLCBcIjtcXG5cXG4gIFwiLCBcIjtcXG4gIFwiLCBcIjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogXCIsIFwiO1xcbiAgfVxcblwiXSkpLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmRpc2FibGVkID8gJyNjYWNjY2UnIDogJyM2NDY0NjQnO1xufSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5pbnZlcnRlZCA/ICdtYXJnaW4tbGVmdDogMjRweDsnIDogJ21hcmdpbi1yaWdodDogMjRweDsnO1xufSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiAhcHJvcHMubGFiZWwgJiYgXCJcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgZmxleDogMCAwIDE2cHg7XFxuICBcIjtcbn0sIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuZGlzYWJsZWQgPyAnI2NhY2NjZScgOiAnIzAwMCc7XG59KTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCQ2O1xuXG5mdW5jdGlvbiBDbG9zZShfcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBhcmlhTGFiZWwgPSBfcmVmLmFyaWFMYWJlbDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN2Z0J1dHRvbiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgdmlld0JveDogXCIwIDAgOS4xIDkuMVwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICBkOiBcIk01LjkgNC41bDIuOC0yLjhjLjQtLjQuNC0xIDAtMS40LS40LS40LTEtLjQtMS40IDBMNC41IDMuMSAxLjcuM0MxLjMtLjEuNy0uMS4zLjNjLS40LjQtLjQgMSAwIDEuNGwyLjggMi44TC4zIDcuNGMtLjQuNC0uNCAxIDAgMS40LjIuMi40LjMuNy4zcy41LS4xLjctLjNMNC41IDZsMi44IDIuOGMuMy4yLjUuMy44LjNzLjUtLjEuNy0uM2MuNC0uNC40LTEgMC0xLjRMNS45IDQuNXpcIlxuICB9KSkpO1xufVxuXG5DbG9zZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG52YXIgU3R5bGVkQ2xvc2UgPSBzdHlsZWQoQ2xvc2UpKF90ZW1wbGF0ZU9iamVjdCQ2IHx8IChfdGVtcGxhdGVPYmplY3QkNiA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIycHg7XFxuICByaWdodDogMjJweDtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIGNvbG9yOiAjNWU1ZTVlO1xcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcblwiXSkpKTtcblxuZnVuY3Rpb24gZ2V0Tm9kZVJlY3Qobm9kZSkge1xuICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHRvcCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS50b3AsXG4gICAgICByaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5yaWdodCxcbiAgICAgIGJvdHRvbSA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5ib3R0b20sXG4gICAgICBsZWZ0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmxlZnQsXG4gICAgICB3aWR0aCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRvcCxcbiAgICByaWdodDogcmlnaHQsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgbGVmdDogbGVmdCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldEhpZ2hsaWdodGVkUmVjdChub2RlLCBzdGVwKSB7XG4gIGlmICghc3RlcC5oaWdobGlnaHRlZFNlbGVjdG9ycykge1xuICAgIHJldHVybiBnZXROb2RlUmVjdChub2RlKTtcbiAgfVxuXG4gIHZhciBhdHRycyA9IGdldE5vZGVSZWN0KG5vZGUpO1xuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihzdGVwLmhpZ2hsaWdodGVkU2VsZWN0b3JzKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWN0ID0gZ2V0Tm9kZVJlY3QoZWxlbWVudCk7XG5cbiAgICAgIGlmIChyZWN0LnRvcCA8IGF0dHJzLnRvcCkge1xuICAgICAgICBhdHRycy50b3AgPSByZWN0LnRvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY3QucmlnaHQgPiBhdHRycy5yaWdodCkge1xuICAgICAgICBhdHRycy5yaWdodCA9IHJlY3QucmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWN0LmJvdHRvbSA+IGF0dHJzLmJvdHRvbSkge1xuICAgICAgICBhdHRycy5ib3R0b20gPSByZWN0LmJvdHRvbTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY3QubGVmdCA8IGF0dHJzLmxlZnQpIHtcbiAgICAgICAgYXR0cnMubGVmdCA9IHJlY3QubGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIGF0dHJzLndpZHRoID0gYXR0cnMucmlnaHQgLSBhdHRycy5sZWZ0O1xuICBhdHRycy5oZWlnaHQgPSBhdHRycy5ib3R0b20gLSBhdHRycy50b3A7XG4gIHJldHVybiBhdHRycztcbn1cbmZ1bmN0aW9uIGluVmlldyhfcmVmKSB7XG4gIHZhciB0b3AgPSBfcmVmLnRvcCxcbiAgICAgIHJpZ2h0ID0gX3JlZi5yaWdodCxcbiAgICAgIGJvdHRvbSA9IF9yZWYuYm90dG9tLFxuICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIHcgPSBfcmVmLncsXG4gICAgICBoID0gX3JlZi5oLFxuICAgICAgX3JlZiR0aHJlc2hvbGQgPSBfcmVmLnRocmVzaG9sZCxcbiAgICAgIHRocmVzaG9sZCA9IF9yZWYkdGhyZXNob2xkID09PSB2b2lkIDAgPyAwIDogX3JlZiR0aHJlc2hvbGQ7XG4gIHJldHVybiB0b3AgPj0gMCArIHRocmVzaG9sZCAmJiBsZWZ0ID49IDAgKyB0aHJlc2hvbGQgJiYgYm90dG9tIDw9IGggLSB0aHJlc2hvbGQgJiYgcmlnaHQgPD0gdyAtIHRocmVzaG9sZDtcbn1cbmZ1bmN0aW9uIGlzQm9keShub2RlKSB7XG4gIHJldHVybiBub2RlID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgbm9kZSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xufVxudmFyIGlzSG9yaXogPSBmdW5jdGlvbiBpc0hvcml6KHBvcykge1xuICByZXR1cm4gLyhsZWZ0fHJpZ2h0KS8udGVzdChwb3MpO1xufTtcbnZhciBpc091dHNpZGVYID0gZnVuY3Rpb24gaXNPdXRzaWRlWCh2YWwsIHdpbmRvd1dpZHRoKSB7XG4gIHJldHVybiB2YWwgPiB3aW5kb3dXaWR0aDtcbn07XG52YXIgaXNPdXRzaWRlWSA9IGZ1bmN0aW9uIGlzT3V0c2lkZVkodmFsLCB3aW5kb3dIZWlnaHQpIHtcbiAgcmV0dXJuIHZhbCA+IHdpbmRvd0hlaWdodDtcbn07XG52YXIgc2FmZSA9IGZ1bmN0aW9uIHNhZmUoc3VtKSB7XG4gIHJldHVybiBzdW0gPCAwID8gMCA6IHN1bTtcbn07XG5mdW5jdGlvbiBiZXN0UG9zaXRpb25PZihwb3NpdGlvbnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBvc2l0aW9ucykubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwLFxuICAgICAgdmFsdWU6IHBvc2l0aW9uc1twXVxuICAgIH07XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi52YWx1ZSAtIGEudmFsdWU7XG4gIH0pLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwLnBvc2l0aW9uO1xuICB9KTtcbn1cblxudmFyIF90ZW1wbGF0ZU9iamVjdCQ1O1xudmFyIEd1aWRlID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QkNSB8fCAoX3RlbXBsYXRlT2JqZWN0JDUgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgLS1yZWFjdG91ci1hY2NlbnQ6IFwiLCBcIjtcXG4gIFwiLCBcIlxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwMDAwMDtcXG5cXG4gIHRyYW5zZm9ybTogXCIsIFwiO1xcblwiXSkpLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmFjY2VudENvbG9yO1xufSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5kZWZhdWx0U3R5bGVzID8gXCJcXG4gIG1heC13aWR0aDogMzMxcHg7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IFwiLmNvbmNhdChwcm9wcy5yb3VuZGVkLCBcInB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDI0cHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gM2VtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgXCIpIDogJyc7XG59LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIHRhcmdldFRvcCA9IHByb3BzLnRhcmdldFRvcCxcbiAgICAgIHRhcmdldFJpZ2h0ID0gcHJvcHMudGFyZ2V0UmlnaHQsXG4gICAgICB0YXJnZXRCb3R0b20gPSBwcm9wcy50YXJnZXRCb3R0b20sXG4gICAgICB0YXJnZXRMZWZ0ID0gcHJvcHMudGFyZ2V0TGVmdCxcbiAgICAgIHdpbmRvd1dpZHRoID0gcHJvcHMud2luZG93V2lkdGgsXG4gICAgICB3aW5kb3dIZWlnaHQgPSBwcm9wcy53aW5kb3dIZWlnaHQsXG4gICAgICBoZWxwZXJXaWR0aCA9IHByb3BzLmhlbHBlcldpZHRoLFxuICAgICAgaGVscGVySGVpZ2h0ID0gcHJvcHMuaGVscGVySGVpZ2h0LFxuICAgICAgaGVscGVyUG9zaXRpb24gPSBwcm9wcy5oZWxwZXJQb3NpdGlvbixcbiAgICAgIHBhZGRpbmcgPSBwcm9wcy5wYWRkaW5nO1xuICB2YXIgYXZhaWxhYmxlID0ge1xuICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgcmlnaHQ6IHdpbmRvd1dpZHRoIC0gdGFyZ2V0UmlnaHQsXG4gICAgdG9wOiB0YXJnZXRUb3AsXG4gICAgYm90dG9tOiB3aW5kb3dIZWlnaHQgLSB0YXJnZXRCb3R0b21cbiAgfTtcblxuICB2YXIgY291bGRQb3NpdGlvbkF0ID0gZnVuY3Rpb24gY291bGRQb3NpdGlvbkF0KHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIGF2YWlsYWJsZVtwb3NpdGlvbl0gPiAoaXNIb3Jpeihwb3NpdGlvbikgPyBoZWxwZXJXaWR0aCArIHBhZGRpbmcgKiAyIDogaGVscGVySGVpZ2h0ICsgcGFkZGluZyAqIDIpO1xuICB9O1xuXG4gIHZhciBhdXRvUG9zaXRpb24gPSBmdW5jdGlvbiBhdXRvUG9zaXRpb24oY29vcmRzKSB7XG4gICAgdmFyIHBvc2l0aW9uc09yZGVyID0gYmVzdFBvc2l0aW9uT2YoYXZhaWxhYmxlKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9zaXRpb25zT3JkZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChjb3VsZFBvc2l0aW9uQXQocG9zaXRpb25zT3JkZXJbal0pKSB7XG4gICAgICAgIHJldHVybiBjb29yZHNbcG9zaXRpb25zT3JkZXJbal1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb29yZHMuY2VudGVyO1xuICB9O1xuXG4gIHZhciBwb3MgPSBmdW5jdGlvbiBwb3MoaGVscGVyUG9zaXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoZWxwZXJQb3NpdGlvbikpIHtcbiAgICAgIHZhciBpc091dFggPSBpc091dHNpZGVYKGhlbHBlclBvc2l0aW9uWzBdLCB3aW5kb3dXaWR0aCk7XG4gICAgICB2YXIgaXNPdXRZID0gaXNPdXRzaWRlWShoZWxwZXJQb3NpdGlvblsxXSwgd2luZG93SGVpZ2h0KTtcblxuICAgICAgdmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKGF4aXMsIG51bSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoYXhpcywgXCI6XCIpLmNvbmNhdChudW0sIFwiIGlzIG91dHNpZGUgd2luZG93LCBmYWxsaW5nIGJhY2sgdG8gY2VudGVyXCIpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChpc091dFgpIHdhcm4oJ3gnLCBoZWxwZXJQb3NpdGlvblswXSk7XG4gICAgICBpZiAoaXNPdXRZKSB3YXJuKCd5JywgaGVscGVyUG9zaXRpb25bMV0pO1xuICAgICAgcmV0dXJuIFtpc091dFggPyB3aW5kb3dXaWR0aCAvIDIgLSBoZWxwZXJXaWR0aCAvIDIgOiBoZWxwZXJQb3NpdGlvblswXSwgaXNPdXRZID8gd2luZG93SGVpZ2h0IC8gMiAtIGhlbHBlckhlaWdodCAvIDIgOiBoZWxwZXJQb3NpdGlvblsxXV07XG4gICAgfVxuXG4gICAgdmFyIGhYID0gaXNPdXRzaWRlWCh0YXJnZXRMZWZ0ICsgaGVscGVyV2lkdGgsIHdpbmRvd1dpZHRoKSA/IGlzT3V0c2lkZVgodGFyZ2V0UmlnaHQgKyBwYWRkaW5nLCB3aW5kb3dXaWR0aCkgPyB0YXJnZXRSaWdodCAtIGhlbHBlcldpZHRoIDogdGFyZ2V0UmlnaHQgLSBoZWxwZXJXaWR0aCArIHBhZGRpbmcgOiB0YXJnZXRMZWZ0IC0gcGFkZGluZztcbiAgICB2YXIgeCA9IGhYID4gcGFkZGluZyA/IGhYIDogcGFkZGluZztcbiAgICB2YXIgaFkgPSBpc091dHNpZGVZKHRhcmdldFRvcCArIGhlbHBlckhlaWdodCwgd2luZG93SGVpZ2h0KSA/IGlzT3V0c2lkZVkodGFyZ2V0Qm90dG9tICsgcGFkZGluZywgd2luZG93SGVpZ2h0KSA/IHRhcmdldEJvdHRvbSAtIGhlbHBlckhlaWdodCA6IHRhcmdldEJvdHRvbSAtIGhlbHBlckhlaWdodCArIHBhZGRpbmcgOiB0YXJnZXRUb3AgLSBwYWRkaW5nO1xuICAgIHZhciB5ID0gaFkgPiBwYWRkaW5nID8gaFkgOiBwYWRkaW5nO1xuICAgIHZhciBjb29yZHMgPSB7XG4gICAgICB0b3A6IFt4LCB0YXJnZXRUb3AgLSBoZWxwZXJIZWlnaHQgLSBwYWRkaW5nICogMl0sXG4gICAgICByaWdodDogW3RhcmdldFJpZ2h0ICsgcGFkZGluZyAqIDIsIHldLFxuICAgICAgYm90dG9tOiBbeCwgdGFyZ2V0Qm90dG9tICsgcGFkZGluZyAqIDJdLFxuICAgICAgbGVmdDogW3RhcmdldExlZnQgLSBoZWxwZXJXaWR0aCAtIHBhZGRpbmcgKiAyLCB5XSxcbiAgICAgIGNlbnRlcjogW3dpbmRvd1dpZHRoIC8gMiAtIGhlbHBlcldpZHRoIC8gMiwgd2luZG93SGVpZ2h0IC8gMiAtIGhlbHBlckhlaWdodCAvIDJdXG4gICAgfTtcblxuICAgIGlmIChoZWxwZXJQb3NpdGlvbiA9PT0gJ2NlbnRlcicgfHwgY291bGRQb3NpdGlvbkF0KGhlbHBlclBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIGNvb3Jkc1toZWxwZXJQb3NpdGlvbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGF1dG9Qb3NpdGlvbihjb29yZHMpO1xuICB9O1xuXG4gIHZhciBwID0gcG9zKGhlbHBlclBvc2l0aW9uKTtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKFwiLmNvbmNhdChNYXRoLnJvdW5kKHBbMF0pLCBcInB4LCBcIikuY29uY2F0KE1hdGgucm91bmQocFsxXSksIFwicHgpXCIpO1xufSk7XG5cbnZhciBfdGVtcGxhdGVPYmplY3QkNDtcbnZhciBCYWRnZSA9IHN0eWxlZC5zcGFuKF90ZW1wbGF0ZU9iamVjdCQ0IHx8IChfdGVtcGxhdGVPYmplY3QkNCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVhY3RvdXItYWNjZW50KTtcXG4gIGJhY2tncm91bmQ6IFwiLCBcIjtcXG4gIGhlaWdodDogMS44NzVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjgxMjVlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuODEyNWVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxLjYyNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdG9wOiAtMC44MTI1ZW07XFxuICBsZWZ0OiAtMC44MTI1ZW07XFxuXCJdKSksIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuYWNjZW50Q29sb3I7XG59KTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCQzO1xudmFyIENvbnRyb2xzID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QkMyB8fCAoX3RlbXBsYXRlT2JqZWN0JDMgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCJdKSkpO1xuXG52YXIgX3RlbXBsYXRlT2JqZWN0JDI7XG52YXIgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXYoX3RlbXBsYXRlT2JqZWN0JDIgfHwgKF90ZW1wbGF0ZU9iamVjdCQyID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGNvdW50ZXItcmVzZXQ6IGRvdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuXCJdKSkpO1xuXG52YXIgX3RlbXBsYXRlT2JqZWN0JDE7XG52YXIgRG90ID0gc3R5bGVkLmJ1dHRvbihfdGVtcGxhdGVPYmplY3QkMSB8fCAoX3RlbXBsYXRlT2JqZWN0JDEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgY291bnRlci1pbmNyZW1lbnQ6IGRvdDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlcjogXCIsIFwiO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogNHB4O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcXG4gIGN1cnNvcjogXCIsIFwiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZShcIiwgXCIpO1xcblxcbiAgY29sb3I6IFwiLCBcIjtcXG4gIGJhY2tncm91bmQ6IFwiLCBcIjtcXG5cXG4gIGNvbG9yOiBcIiwgXCI7XFxuICBiYWNrZ3JvdW5kOiBcIiwgXCI7XFxuXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IGNvdW50ZXIoZG90KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoMTAwJSArIDAuMjVlbSk7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMWVtKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgZGlzcGxheTogXCIsIFwiO1xcbiAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMnB4KTtcXG4gICAgfVxcbiAgfVxcblwiXSkpLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmN1cnJlbnQgPT09IHByb3BzLmluZGV4ID8gJzAnIDogJzFweCBzb2xpZCAjY2FjY2NlJztcbn0sIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInO1xufSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jdXJyZW50ID09PSBwcm9wcy5pbmRleCA/IDEuMjUgOiAxO1xufSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jdXJyZW50ID09PSBwcm9wcy5pbmRleCA/ICd2YXIoLS1yZWFjdG91ci1hY2NlbnQpJyA6ICcjY2FjY2NlJztcbn0sIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuY3VycmVudCA9PT0gcHJvcHMuaW5kZXggPyAndmFyKC0tcmVhY3RvdXItYWNjZW50KScgOiAnbm9uZSc7XG59LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmN1cnJlbnQgPT09IHByb3BzLmluZGV4ID8gcHJvcHMuYWNjZW50Q29sb3IgOiAnI2NhY2NjZSc7XG59LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmN1cnJlbnQgPT09IHByb3BzLmluZGV4ID8gcHJvcHMuYWNjZW50Q29sb3IgOiAnbm9uZSc7XG59LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLnNob3dOdW1iZXIgPyAnYmxvY2snIDogJ25vbmUnO1xufSk7XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG52YXIgU3ZnTWFza1dyYXBwZXIgPSBzdHlsZWQuZGl2KF90ZW1wbGF0ZU9iamVjdCB8fCAoX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIG9wYWNpdHk6IFwiLCBcIjtcXG4gIGNvbG9yOiBcIiwgXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5OTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblwiXSkpLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuICFwcm9wcy5tYXNrQ2xhc3NOYW1lICYmIDAuNztcbn0sIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gIXByb3BzLm1hc2tDbGFzc05hbWUgJiYgJyMwMDAnO1xufSk7XG5mdW5jdGlvbiBTdmdNYXNrKF9yZWYpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gX3JlZi53aW5kb3dXaWR0aCxcbiAgICAgIHdpbmRvd0hlaWdodCA9IF9yZWYud2luZG93SGVpZ2h0LFxuICAgICAgdGFyZ2V0V2lkdGggPSBfcmVmLnRhcmdldFdpZHRoLFxuICAgICAgdGFyZ2V0SGVpZ2h0ID0gX3JlZi50YXJnZXRIZWlnaHQsXG4gICAgICB0YXJnZXRUb3AgPSBfcmVmLnRhcmdldFRvcCxcbiAgICAgIHRhcmdldExlZnQgPSBfcmVmLnRhcmdldExlZnQsXG4gICAgICBwYWRkaW5nID0gX3JlZi5wYWRkaW5nLFxuICAgICAgcm91bmRlZCA9IF9yZWYucm91bmRlZCxcbiAgICAgIHJvdW5kZWRTdGVwID0gX3JlZi5yb3VuZGVkU3RlcCxcbiAgICAgIGRpc2FibGVJbnRlcmFjdGlvbiA9IF9yZWYuZGlzYWJsZUludGVyYWN0aW9uLFxuICAgICAgZGlzYWJsZUludGVyYWN0aW9uQ2xhc3NOYW1lID0gX3JlZi5kaXNhYmxlSW50ZXJhY3Rpb25DbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBoaWdobGlnaHRlZEJvcmRlciA9IF9yZWYuaGlnaGxpZ2h0ZWRCb3JkZXI7XG4gIHZhciB3aWR0aCA9IHNhZmUodGFyZ2V0V2lkdGggKyBwYWRkaW5nICogMik7XG4gIHZhciBoZWlnaHQgPSBzYWZlKHRhcmdldEhlaWdodCArIHBhZGRpbmcgKiAyKTtcbiAgdmFyIHRvcCA9IHNhZmUodGFyZ2V0VG9wIC0gcGFkZGluZyk7XG4gIHZhciBsZWZ0ID0gc2FmZSh0YXJnZXRMZWZ0IC0gcGFkZGluZyk7XG4gIHZhciByb3VuZGVkUmFkaXVzID0gcm91bmRlZFN0ZXAgPyBNYXRoLm1pbih3aWR0aCAvIDIsIGhlaWdodCAvIDIpIDogcm91bmRlZDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN2Z01hc2tXcmFwcGVyLCB7XG4gICAgb25DbGljazogb25DbGljayxcbiAgICBtYXNrQ2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1hc2tcIiwge1xuICAgIGlkOiBcIm1hc2stbWFpblwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICBmaWxsOiBcIndoaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogbGVmdCxcbiAgICB5OiB0b3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGZpbGw6IFwiYmxhY2tcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB4OiBsZWZ0IC0gMSxcbiAgICB5OiB0b3AgLSAxLFxuICAgIHdpZHRoOiByb3VuZGVkUmFkaXVzLFxuICAgIGhlaWdodDogcm91bmRlZFJhZGl1cyxcbiAgICBmaWxsOiBcIndoaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogbGVmdCArIHJvdW5kZWRSYWRpdXMsXG4gICAgY3k6IHRvcCArIHJvdW5kZWRSYWRpdXMsXG4gICAgcjogcm91bmRlZFJhZGl1cyxcbiAgICBmaWxsOiBcImJsYWNrXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogbGVmdCArIHdpZHRoIC0gcm91bmRlZFJhZGl1cyArIDEsXG4gICAgeTogdG9wIC0gMSxcbiAgICB3aWR0aDogcm91bmRlZFJhZGl1cyxcbiAgICBoZWlnaHQ6IHJvdW5kZWRSYWRpdXMsXG4gICAgZmlsbDogXCJ3aGl0ZVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IGxlZnQgKyB3aWR0aCAtIHJvdW5kZWRSYWRpdXMsXG4gICAgY3k6IHRvcCArIHJvdW5kZWRSYWRpdXMsXG4gICAgcjogcm91bmRlZFJhZGl1cyxcbiAgICBmaWxsOiBcImJsYWNrXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogbGVmdCAtIDEsXG4gICAgeTogdG9wICsgaGVpZ2h0IC0gcm91bmRlZFJhZGl1cyArIDEsXG4gICAgd2lkdGg6IHJvdW5kZWRSYWRpdXMsXG4gICAgaGVpZ2h0OiByb3VuZGVkUmFkaXVzLFxuICAgIGZpbGw6IFwid2hpdGVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBsZWZ0ICsgcm91bmRlZFJhZGl1cyxcbiAgICBjeTogdG9wICsgaGVpZ2h0IC0gcm91bmRlZFJhZGl1cyxcbiAgICByOiByb3VuZGVkUmFkaXVzLFxuICAgIGZpbGw6IFwiYmxhY2tcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB4OiBsZWZ0ICsgd2lkdGggLSByb3VuZGVkUmFkaXVzICsgMSxcbiAgICB5OiB0b3AgKyBoZWlnaHQgLSByb3VuZGVkUmFkaXVzICsgMSxcbiAgICB3aWR0aDogcm91bmRlZFJhZGl1cyxcbiAgICBoZWlnaHQ6IHJvdW5kZWRSYWRpdXMsXG4gICAgZmlsbDogXCJ3aGl0ZVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IGxlZnQgKyB3aWR0aCAtIHJvdW5kZWRSYWRpdXMsXG4gICAgY3k6IHRvcCArIGhlaWdodCAtIHJvdW5kZWRSYWRpdXMsXG4gICAgcjogcm91bmRlZFJhZGl1cyxcbiAgICBmaWxsOiBcImJsYWNrIFwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjbGlwUGF0aFwiLCB7XG4gICAgaWQ6IFwiY2xpcC1wYXRoXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IHdpbmRvd1dpZHRoLFxuICAgIGhlaWdodDogdG9wXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHg6IDAsXG4gICAgeTogdG9wLFxuICAgIHdpZHRoOiBsZWZ0LFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHg6IHRhcmdldExlZnQgKyB0YXJnZXRXaWR0aCArIHBhZGRpbmcsXG4gICAgeTogdG9wLFxuICAgIHdpZHRoOiBzYWZlKHdpbmRvd1dpZHRoIC0gdGFyZ2V0V2lkdGggLSBsZWZ0KSxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB4OiAwLFxuICAgIHk6IHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIHBhZGRpbmcsXG4gICAgd2lkdGg6IHdpbmRvd1dpZHRoLFxuICAgIGhlaWdodDogc2FmZSh3aW5kb3dIZWlnaHQgLSB0YXJnZXRIZWlnaHQgLSB0b3ApXG4gIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgIG1hc2s6IFwidXJsKCNtYXNrLW1haW4pXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgIGNsaXBQYXRoOiBcInVybCgjY2xpcC1wYXRoKVwiLFxuICAgIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHg6IGxlZnQsXG4gICAgeTogdG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBwb2ludGVyRXZlbnRzOiBcImF1dG9cIixcbiAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgZGlzcGxheTogZGlzYWJsZUludGVyYWN0aW9uID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICBjbGFzc05hbWU6IGRpc2FibGVJbnRlcmFjdGlvbkNsYXNzTmFtZVxuICB9KSwgaGlnaGxpZ2h0ZWRCb3JkZXIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB4OiBzYWZlKGxlZnQgKyBoaWdobGlnaHRlZEJvcmRlci53aWR0aCAvIDIuMCksXG4gICAgeTogc2FmZSh0b3AgKyBoaWdobGlnaHRlZEJvcmRlci53aWR0aCAvIDIuMCksXG4gICAgd2lkdGg6IHNhZmUod2lkdGggLSBoaWdobGlnaHRlZEJvcmRlci53aWR0aCksXG4gICAgaGVpZ2h0OiBzYWZlKGhlaWdodCAtIGhpZ2hsaWdodGVkQm9yZGVyLndpZHRoKSxcbiAgICBwb2ludGVyRXZlbnRzOiBcImF1dG9cIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2VXaWR0aDogaGlnaGxpZ2h0ZWRCb3JkZXIud2lkdGgsXG4gICAgc3Ryb2tlOiBoaWdobGlnaHRlZEJvcmRlci5jb2xvcixcbiAgICByeDogcm91bmRlZFJhZGl1cyAtIDJcbiAgfSkpKTtcbn1cblN2Z01hc2sucHJvcFR5cGVzID0ge1xuICB3aW5kb3dXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB3aW5kb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0V2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRhcmdldFRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0YXJnZXRMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcm91bmRlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICByb3VuZGVkU3RlcDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVJbnRlcmFjdGlvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZUludGVyYWN0aW9uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhpZ2hsaWdodGVkQm9yZGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9KVxufTtcblxudmFyIFJlYWN0b3VyUmVzaXplT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgICByZWZyZXNoID0gX3JlZi5yZWZyZXNoO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgwKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgbXV0YXRpb25zQ291bnRlciA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRNdXRhdGlvbnNDb3VudGVyID0gX3VzZVN0YXRlMlsxXTsgLy8gb25seSB1c2UgdG8gbm90aWZ5IG1haW4gbG9naWMgYmVsb3dcbiAgLy8gdGhhdCBhIHJlc2l6ZU9ic2VydmFibGUgaGFzIGJlZW4gYWRkZWQgdG8gRE9NIChvciByZW1vdmVkIGZyb20gaXQpXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3RlcC5yZXNpemVPYnNlcnZhYmxlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbmNyZW1lbnRNdXRhdGlvbnNDb3VudGVySWZPYnNlcnZhYmxlID0gZnVuY3Rpb24gaW5jcmVtZW50TXV0YXRpb25zQ291bnRlcklmT2JzZXJ2YWJsZShub2Rlcykge1xuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG5vZGVzKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmb3VuZCA9IHN0ZXAucmVzaXplT2JzZXJ2YWJsZXMuZmluZChmdW5jdGlvbiAob2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhvYnNlcnZhYmxlKSB8fCBub2RlLnF1ZXJ5U2VsZWN0b3Iob2JzZXJ2YWJsZSkgIT0gbnVsbDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgc2V0TXV0YXRpb25zQ291bnRlcihtdXRhdGlvbnNDb3VudGVyICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIF9yZXQgPSBfbG9vcCgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkge1xuICAgICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihtdXRhdGlvbnNMaXN0KSxcbiAgICAgICAgICBfc3RlcDI7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIG11dGF0aW9uID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKDAgIT09IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRNdXRhdGlvbnNDb3VudGVySWZPYnNlcnZhYmxlKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgwICE9PSBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRNdXRhdGlvbnNDb3VudGVySWZPYnNlcnZhYmxlKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IyLmYoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfTtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUob2JzZXJ2YWJsZSwgY29uZmlnKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSwgW3N0ZXAsIG11dGF0aW9uc0NvdW50ZXJdKTsgLy8gdGhlIG1haW4gbG9naWMgaXMgaGVyZVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzdGVwLnJlc2l6ZU9ic2VydmFibGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICByZWZyZXNoKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHN0ZXAucmVzaXplT2JzZXJ2YWJsZXMpLFxuICAgICAgICBfc3RlcDM7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfc3RlcDMudmFsdWU7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYnNlcnZhYmxlKTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9pdGVyYXRvcjMuZShlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBfaXRlcmF0b3IzLmYoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtzdGVwLCBtdXRhdGlvbnNDb3VudGVyXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbnZhciBSZWFjdG91ck11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgICByZWZyZXNoID0gX3JlZi5yZWZyZXNoO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3RlcC5tdXRhdGlvbk9ic2VydmFibGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlZnJlc2hIaWdobGlnaHRlZFJlZ2lvbklmT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIHJlZnJlc2hIaWdobGlnaHRlZFJlZ2lvbklmT2JzZXJ2YWJsZShub2Rlcykge1xuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG5vZGVzKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmb3VuZCA9IHN0ZXAubXV0YXRpb25PYnNlcnZhYmxlcy5maW5kKGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5tYXRjaGVzKG9ic2VydmFibGUpIHx8IG5vZGUucXVlcnlTZWxlY3RvcihvYnNlcnZhYmxlKSAhPSBudWxsO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIF9yZXQgPSBfbG9vcCgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkge1xuICAgICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihtdXRhdGlvbnNMaXN0KSxcbiAgICAgICAgICBfc3RlcDI7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIG11dGF0aW9uID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKDAgIT09IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZWZyZXNoSGlnaGxpZ2h0ZWRSZWdpb25JZk9ic2VydmFibGUobXV0YXRpb24uYWRkZWROb2Rlcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKDAgIT09IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlZnJlc2hIaWdobGlnaHRlZFJlZ2lvbklmT2JzZXJ2YWJsZShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIG9ic2VydmFibGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH07XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG9ic2VydmFibGUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtzdGVwXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbmZ1bmN0aW9uIFBvcnRhbChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ19fX3JlYWN0b3VyJyk7XG4gIH1cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVmLmN1cnJlbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbcmVmXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCByZWYuY3VycmVudCk7XG59XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVGb2N1c0xvY2s6IFByb3BUeXBlcy5ib29sLFxuICBiYWRnZUNvbnRlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBoaWdobGlnaHRlZE1hc2tDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VXaXRoTWFzazogUHJvcFR5cGVzLmJvb2wsXG4gIGluVmlld1RocmVzaG9sZDogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsYXN0U3RlcE5leHRCdXR0b246IFByb3BUeXBlcy5ub2RlLFxuICBtYXNrQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXNrU3BhY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5leHRCdXR0b246IFByb3BUeXBlcy5ub2RlLFxuICBvbkFmdGVyT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmVmb3JlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHByZXZCdXR0b246IFByb3BUeXBlcy5ub2RlLFxuICBzY3JvbGxEdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgc2Nyb2xsT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93QnV0dG9uczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dDbG9zZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dOYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd05hdmlnYXRpb25OdW1iZXI6IFByb3BUeXBlcy5ib29sLFxuICBzaG93TnVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RhcnRBdDogUHJvcFR5cGVzLm51bWJlcixcbiAgZ29Ub1N0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdldEN1cnJlbnRTdGVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgbmV4dFN0ZXA6IFByb3BUeXBlcy5mdW5jLFxuICBwcmV2U3RlcDogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSwgUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ2NlbnRlciddKV0pLFxuICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RlcEludGVyYWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYXZEb3RBcmlhTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm91bmRlZFN0ZXA6IFByb3BUeXBlcy5ib29sXG4gIH0pKSxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cGRhdGVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgZGlzYWJsZUludGVyYWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZURvdHNOYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZUtleWJvYXJkTmF2aWdhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFsnZXNjJywgJ3JpZ2h0JywgJ2xlZnQnXSkpLCBQcm9wVHlwZXMuYm9vbF0pLFxuICByb3VuZGVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBhY2NlbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlnaGxpZ2h0ZWRCb3JkZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0pXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZUZvY3VzTG9jazogZmFsc2UsXG4gIHNob3dOYXZpZ2F0aW9uOiB0cnVlLFxuICBzaG93TmF2aWdhdGlvbk51bWJlcjogdHJ1ZSxcbiAgc2hvd0J1dHRvbnM6IHRydWUsXG4gIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZScsXG4gIHNob3dOdW1iZXI6IHRydWUsXG4gIHNjcm9sbER1cmF0aW9uOiAxLFxuICBtYXNrU3BhY2U6IDEwLFxuICB1cGRhdGVEZWxheTogMSxcbiAgZGlzYWJsZUludGVyYWN0aW9uOiBmYWxzZSxcbiAgcm91bmRlZDogMCxcbiAgYWNjZW50Q29sb3I6ICcjMDA3YWZmJyxcbiAgY2xvc2VXaXRoTWFzazogdHJ1ZVxufTtcblxudmFyIENOID0ge1xuICBtYXNrOiB7XG4gICAgYmFzZTogJ3JlYWN0b3VyX19tYXNrJyxcbiAgICBpc09wZW46ICdyZWFjdG91cl9fbWFzay0taXMtb3BlbicsXG4gICAgZGlzYWJsZUludGVyYWN0aW9uOiAncmVhY3RvdXJfX21hc2stLWRpc2FibGUtaW50ZXJhY3Rpb24nXG4gIH0sXG4gIGhlbHBlcjoge1xuICAgIGJhc2U6ICdyZWFjdG91cl9faGVscGVyJyxcbiAgICBpc09wZW46ICdyZWFjdG91cl9faGVscGVyLS1pcy1vcGVuJ1xuICB9LFxuICBkb3Q6IHtcbiAgICBiYXNlOiAncmVhY3RvdXJfX2RvdCcsXG4gICAgYWN0aXZlOiAncmVhY3RvdXJfX2RvdC0taXMtYWN0aXZlJ1xuICB9XG59O1xuXG52YXIgVG91ciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG91ciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUb3VyKTtcblxuICBmdW5jdGlvbiBUb3VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb3VyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidW5sb2NrRm9jdXNcIiwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzVW5sb2NrZWQ6IHRydWVcbiAgICAgIH0sIGNhbGxiYWNrKCkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNob3dTdGVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuaGVscGVyIHx8ICFfdGhpcy5oZWxwZXIuY3VycmVudCkgcmV0dXJuO1xuICAgICAgdmFyIHN0ZXBzID0gX3RoaXMucHJvcHMuc3RlcHM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBjdXJyZW50ID0gX3RoaXMkc3RhdGUuY3VycmVudCxcbiAgICAgICAgICBmb2N1c1VubG9ja2VkID0gX3RoaXMkc3RhdGUuZm9jdXNVbmxvY2tlZDtcblxuICAgICAgaWYgKGZvY3VzVW5sb2NrZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvY3VzVW5sb2NrZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RlcCA9IHN0ZXBzW2N1cnJlbnRdO1xuICAgICAgdmFyIG5vZGUgPSBzdGVwLnNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdGVwLnNlbGVjdG9yKSA6IG51bGw7XG5cbiAgICAgIHZhciBzdGVwQ2FsbGJhY2sgPSBmdW5jdGlvbiBzdGVwQ2FsbGJhY2sobykge1xuICAgICAgICBpZiAoc3RlcC5hY3Rpb24gJiYgdHlwZW9mIHN0ZXAuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXMudW5sb2NrRm9jdXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAuYWN0aW9uKG8pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoc3RlcC5vYnNlcnZlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0ZXAub2JzZXJ2ZSk7XG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLm9ic2VydmVyKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcHJldlN0YXRlLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvYnNlcnZlcjogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiBjYigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBDYWxsYmFjayhtdXRhdGlvbi5hZGRlZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FsY3VsYXRlTm9kZShtdXRhdGlvbi5hZGRlZE5vZGVzWzBdLCBzdGVwLCBjYik7XG4gICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHZhciBfY2IgPSBmdW5jdGlvbiBfY2IoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwQ2FsbGJhY2sobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBfdGhpcy5jYWxjdWxhdGVOb2RlKG5vZGUsIHN0ZXAsIF9jYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5vYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUub2JzZXJ2ZXIpIHtcbiAgICAgICAgICBfdGhpcy5zdGF0ZS5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvYnNlcnZlcjogbnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICAgIHJldHVybiBzdGVwQ2FsbGJhY2sobm9kZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuY2FsY3VsYXRlTm9kZShub2RlLCBzdGVwLCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzZXROb2RlU3RhdGUobnVsbCwgc3RlcCwgX3RoaXMuaGVscGVyLmN1cnJlbnQpLCBzdGVwQ2FsbGJhY2spO1xuXG4gICAgICAgIHN0ZXAuc2VsZWN0b3IgJiYgY29uc29sZS53YXJuKFwiRG9lc24ndCBmaW5kIGEgRE9NIG5vZGUgJ1wiLmNvbmNhdChzdGVwLnNlbGVjdG9yLCBcIicuIFBsZWFzZSBjaGVjayB0aGUgJ3N0ZXBzJyBUb3VyIHByb3AgQXJyYXkgYXQgcG9zaXRpb24gXCIpLmNvbmNhdChjdXJyZW50LCBcIi5cIikpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNhbGN1bGF0ZU5vZGVcIiwgZnVuY3Rpb24gKG5vZGUsIHN0ZXAsIGNiKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzY3JvbGxEdXJhdGlvbiA9IF90aGlzJHByb3BzLnNjcm9sbER1cmF0aW9uLFxuICAgICAgICAgIGluVmlld1RocmVzaG9sZCA9IF90aGlzJHByb3BzLmluVmlld1RocmVzaG9sZCxcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRwcm9wcy5zY3JvbGxPZmZzZXQ7XG4gICAgICB2YXIgYXR0cnMgPSBnZXRIaWdobGlnaHRlZFJlY3Qobm9kZSwgc3RlcCk7XG4gICAgICB2YXIgdyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgICB2YXIgaCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICAgICAgaWYgKCFpblZpZXcoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGF0dHJzKSwge30sIHtcbiAgICAgICAgdzogdyxcbiAgICAgICAgaDogaCxcbiAgICAgICAgdGhyZXNob2xkOiBpblZpZXdUaHJlc2hvbGRcbiAgICAgIH0pKSkge1xuICAgICAgICB2YXIgcGFyZW50U2Nyb2xsID0gU2Nyb2xscGFyZW50KG5vZGUpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gc2Nyb2xsT2Zmc2V0ID8gc2Nyb2xsT2Zmc2V0IDogYXR0cnMuaGVpZ2h0ID4gaCA/IC0yNSA6IC0oaCAvIDIpICsgYXR0cnMuaGVpZ2h0IC8gMjtcbiAgICAgICAgc2Nyb2xsU21vb3RoLnRvKG5vZGUsIHtcbiAgICAgICAgICBjb250ZXh0OiBpc0JvZHkocGFyZW50U2Nyb2xsKSA/IHdpbmRvdyA6IHBhcmVudFNjcm9sbCxcbiAgICAgICAgICBkdXJhdGlvbjogc2Nyb2xsRHVyYXRpb24sXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG5kKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShzZXROb2RlU3RhdGUobmQsIHN0ZXAsIF90aGlzLmhlbHBlci5jdXJyZW50KSwgY2IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzZXROb2RlU3RhdGUobm9kZSwgc3RlcCwgX3RoaXMuaGVscGVyLmN1cnJlbnQpLCBjYik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVjYWxjdWxhdGVOb2RlXCIsIGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RlcC5zZWxlY3Rvcik7XG5cbiAgICAgIHZhciBzdGVwQ2FsbGJhY2sgPSBmdW5jdGlvbiBzdGVwQ2FsbGJhY2sobykge1xuICAgICAgICBpZiAoc3RlcC5hY3Rpb24gJiYgdHlwZW9mIHN0ZXAuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXMudW5sb2NrRm9jdXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAuYWN0aW9uKG8pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jYWxjdWxhdGVOb2RlKG5vZGUsIHN0ZXAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHN0ZXBDYWxsYmFjayhub2RlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1hc2tDbGlja0hhbmRsZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbG9zZVdpdGhNYXNrID0gX3RoaXMkcHJvcHMyLmNsb3NlV2l0aE1hc2ssXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2UgPSBfdGhpcyRwcm9wczIub25SZXF1ZXN0Q2xvc2U7XG5cbiAgICAgIGlmIChjbG9zZVdpdGhNYXNrICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ04ubWFzay5kaXNhYmxlSW50ZXJhY3Rpb24pKSB7XG4gICAgICAgIG9uUmVxdWVzdENsb3NlKGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm5leHRTdGVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdGVwcyA9IF90aGlzJHByb3BzMy5zdGVwcyxcbiAgICAgICAgICBnZXRDdXJyZW50U3RlcCA9IF90aGlzJHByb3BzMy5nZXRDdXJyZW50U3RlcDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBwcmV2U3RhdGUuY3VycmVudCA8IHN0ZXBzLmxlbmd0aCAtIDEgPyBwcmV2U3RhdGUuY3VycmVudCArIDEgOiBwcmV2U3RhdGUuY3VycmVudDtcblxuICAgICAgICBpZiAodHlwZW9mIGdldEN1cnJlbnRTdGVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0Q3VycmVudFN0ZXAobmV4dFN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjdXJyZW50OiBuZXh0U3RlcFxuICAgICAgICB9O1xuICAgICAgfSwgX3RoaXMuc2hvd1N0ZXApO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByZXZTdGVwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnZXRDdXJyZW50U3RlcCA9IF90aGlzLnByb3BzLmdldEN1cnJlbnRTdGVwO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHZhciBuZXh0U3RlcCA9IHByZXZTdGF0ZS5jdXJyZW50ID4gMCA/IHByZXZTdGF0ZS5jdXJyZW50IC0gMSA6IHByZXZTdGF0ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0Q3VycmVudFN0ZXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRDdXJyZW50U3RlcChuZXh0U3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGN1cnJlbnQ6IG5leHRTdGVwXG4gICAgICAgIH07XG4gICAgICB9LCBfdGhpcy5zaG93U3RlcCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ290b1N0ZXBcIiwgZnVuY3Rpb24gKG4pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdGVwcyA9IF90aGlzJHByb3BzNC5zdGVwcyxcbiAgICAgICAgICBnZXRDdXJyZW50U3RlcCA9IF90aGlzJHByb3BzNC5nZXRDdXJyZW50U3RlcDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBzdGVwc1tuXSA/IG4gOiBwcmV2U3RhdGUuY3VycmVudDtcblxuICAgICAgICBpZiAodHlwZW9mIGdldEN1cnJlbnRTdGVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0Q3VycmVudFN0ZXAobmV4dFN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjdXJyZW50OiBuZXh0U3RlcFxuICAgICAgICB9O1xuICAgICAgfSwgX3RoaXMuc2hvd1N0ZXApO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImtleURvd25IYW5kbGVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2UgPSBfdGhpcyRwcm9wczUub25SZXF1ZXN0Q2xvc2UsXG4gICAgICAgICAgbmV4dFN0ZXAgPSBfdGhpcyRwcm9wczUubmV4dFN0ZXAsXG4gICAgICAgICAgcHJldlN0ZXAgPSBfdGhpcyRwcm9wczUucHJldlN0ZXAsXG4gICAgICAgICAgZGlzYWJsZUtleWJvYXJkTmF2aWdhdGlvbiA9IF90aGlzJHByb3BzNS5kaXNhYmxlS2V5Ym9hcmROYXZpZ2F0aW9uO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKGRpc2FibGVLZXlib2FyZE5hdmlnYXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNFc2NEaXNhYmxlZCwgaXNSaWdodERpc2FibGVkLCBpc0xlZnREaXNhYmxlZDtcblxuICAgICAgaWYgKGRpc2FibGVLZXlib2FyZE5hdmlnYXRpb24pIHtcbiAgICAgICAgaXNFc2NEaXNhYmxlZCA9IGRpc2FibGVLZXlib2FyZE5hdmlnYXRpb24uaW5jbHVkZXMoJ2VzYycpO1xuICAgICAgICBpc1JpZ2h0RGlzYWJsZWQgPSBkaXNhYmxlS2V5Ym9hcmROYXZpZ2F0aW9uLmluY2x1ZGVzKCdyaWdodCcpO1xuICAgICAgICBpc0xlZnREaXNhYmxlZCA9IGRpc2FibGVLZXlib2FyZE5hdmlnYXRpb24uaW5jbHVkZXMoJ2xlZnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgIWlzRXNjRGlzYWJsZWQpIHtcbiAgICAgICAgLy8gZXNjXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgJiYgIWlzUmlnaHREaXNhYmxlZCkge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHR5cGVvZiBuZXh0U3RlcCA9PT0gJ2Z1bmN0aW9uJyA/IG5leHRTdGVwKCkgOiBfdGhpcy5uZXh0U3RlcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNyAmJiAhaXNMZWZ0RGlzYWJsZWQpIHtcbiAgICAgICAgLy8gbGVmdFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHR5cGVvZiBwcmV2U3RlcCA9PT0gJ2Z1bmN0aW9uJyA/IHByZXZTdGVwKCkgOiBfdGhpcy5wcmV2U3RlcCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgdzogMCxcbiAgICAgIGg6IDAsXG4gICAgICBpbkRPTTogZmFsc2UsXG4gICAgICBvYnNlcnZlcjogbnVsbCxcbiAgICAgIGZvY3VzVW5sb2NrZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5oZWxwZXIgPSAvKiNfX1BVUkVfXyovY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuaGVscGVyRWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuZGVib3VuY2VkU2hvd1N0ZXAgPSBkZWJvdW5jZShfdGhpcy5zaG93U3RlcCwgNzApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUb3VyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzNi5pc09wZW4sXG4gICAgICAgICAgc3RhcnRBdCA9IF90aGlzJHByb3BzNi5zdGFydEF0O1xuXG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbihzdGFydEF0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wczcuaXNPcGVuLFxuICAgICAgICAgIHVwZGF0ZSA9IF90aGlzJHByb3BzNy51cGRhdGUsXG4gICAgICAgICAgdXBkYXRlRGVsYXkgPSBfdGhpcyRwcm9wczcudXBkYXRlRGVsYXk7XG5cbiAgICAgIGlmICghaXNPcGVuICYmIG5leHRQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuKG5leHRQcm9wcy5zdGFydEF0KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPcGVuICYmICFuZXh0UHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzT3BlbiAmJiB1cGRhdGUgIT09IG5leHRQcm9wcy51cGRhdGUpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zdGVwc1t0aGlzLnN0YXRlLmN1cnJlbnRdKSB7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNob3dTdGVwLCB1cGRhdGVEZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc09wZW4gJiYgbmV4dFByb3BzLmlzT3BlbiAmJiB0aGlzLnN0YXRlLmN1cnJlbnQgIT09IG5leHRQcm9wcy5nb1RvU3RlcCkge1xuICAgICAgICB0aGlzLmdvdG9TdGVwKG5leHRQcm9wcy5nb1RvU3RlcCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIGlzT3BlbiA9IHRoaXMucHJvcHMuaXNPcGVuO1xuXG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUub2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihzdGFydEF0KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9uQWZ0ZXJPcGVuID0gdGhpcy5wcm9wcy5vbkFmdGVyT3BlbjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgICBjdXJyZW50OiBzdGFydEF0ICE9PSB1bmRlZmluZWQgPyBzdGFydEF0IDogcHJldlN0YXRlLmN1cnJlbnRcbiAgICAgICAgfTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGltZW91dChfdGhpczIuc2hvd1N0ZXAsIDEpO1xuICAgICAgICBfdGhpczIuaGVscGVyRWxlbWVudCA9IF90aGlzMi5oZWxwZXIuY3VycmVudDtcbiAgICAgICAgaWYgKCFfdGhpczIucHJvcHMuZGlzYWJsZUZvY3VzTG9jaykgX3RoaXMyLmhlbHBlci5jdXJyZW50LmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKG9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgb25BZnRlck9wZW4oX3RoaXMyLmhlbHBlckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmNlZFNob3dTdGVwLCBmYWxzZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5vYnNlcnZlcikge1xuICAgICAgICAgIHByZXZTdGF0ZS5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgb2JzZXJ2ZXI6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMub25CZWZvcmVDbG9zZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWJvdW5jZWRTaG93U3RlcCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkJlZm9yZUNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgICB2YXIgb25CZWZvcmVDbG9zZSA9IHRoaXMucHJvcHMub25CZWZvcmVDbG9zZTtcblxuICAgICAgaWYgKG9uQmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgb25CZWZvcmVDbG9zZSh0aGlzLmhlbHBlckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzOC5jbGFzc05hbWUsXG4gICAgICAgICAgc3RlcHMgPSBfdGhpcyRwcm9wczguc3RlcHMsXG4gICAgICAgICAgbWFza0NsYXNzTmFtZSA9IF90aGlzJHByb3BzOC5tYXNrQ2xhc3NOYW1lLFxuICAgICAgICAgIHNob3dCdXR0b25zID0gX3RoaXMkcHJvcHM4LnNob3dCdXR0b25zLFxuICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbiA9IF90aGlzJHByb3BzOC5zaG93Q2xvc2VCdXR0b24sXG4gICAgICAgICAgY2xvc2VCdXR0b25BcmlhTGFiZWwgPSBfdGhpcyRwcm9wczguY2xvc2VCdXR0b25BcmlhTGFiZWwsXG4gICAgICAgICAgc2hvd05hdmlnYXRpb24gPSBfdGhpcyRwcm9wczguc2hvd05hdmlnYXRpb24sXG4gICAgICAgICAgc2hvd05hdmlnYXRpb25OdW1iZXIgPSBfdGhpcyRwcm9wczguc2hvd05hdmlnYXRpb25OdW1iZXIsXG4gICAgICAgICAgc2hvd051bWJlciA9IF90aGlzJHByb3BzOC5zaG93TnVtYmVyLFxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlID0gX3RoaXMkcHJvcHM4Lm9uUmVxdWVzdENsb3NlLFxuICAgICAgICAgIG1hc2tTcGFjZSA9IF90aGlzJHByb3BzOC5tYXNrU3BhY2UsXG4gICAgICAgICAgbGFzdFN0ZXBOZXh0QnV0dG9uID0gX3RoaXMkcHJvcHM4Lmxhc3RTdGVwTmV4dEJ1dHRvbixcbiAgICAgICAgICBuZXh0QnV0dG9uID0gX3RoaXMkcHJvcHM4Lm5leHRCdXR0b24sXG4gICAgICAgICAgcHJldkJ1dHRvbiA9IF90aGlzJHByb3BzOC5wcmV2QnV0dG9uLFxuICAgICAgICAgIGJhZGdlQ29udGVudCA9IF90aGlzJHByb3BzOC5iYWRnZUNvbnRlbnQsXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRNYXNrQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHM4LmhpZ2hsaWdodGVkTWFza0NsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb24gPSBfdGhpcyRwcm9wczguZGlzYWJsZUludGVyYWN0aW9uLFxuICAgICAgICAgIGRpc2FibGVEb3RzTmF2aWdhdGlvbiA9IF90aGlzJHByb3BzOC5kaXNhYmxlRG90c05hdmlnYXRpb24sXG4gICAgICAgICAgbmV4dFN0ZXAgPSBfdGhpcyRwcm9wczgubmV4dFN0ZXAsXG4gICAgICAgICAgcHJldlN0ZXAgPSBfdGhpcyRwcm9wczgucHJldlN0ZXAsXG4gICAgICAgICAgcm91bmRlZCA9IF90aGlzJHByb3BzOC5yb3VuZGVkLFxuICAgICAgICAgIGFjY2VudENvbG9yID0gX3RoaXMkcHJvcHM4LmFjY2VudENvbG9yLFxuICAgICAgICAgIEN1c3RvbUhlbHBlciA9IF90aGlzJHByb3BzOC5DdXN0b21IZWxwZXIsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzTG9jayA9IF90aGlzJHByb3BzOC5kaXNhYmxlRm9jdXNMb2NrLFxuICAgICAgICAgIGhpZ2hsaWdodGVkQm9yZGVyID0gX3RoaXMkcHJvcHM4LmhpZ2hsaWdodGVkQm9yZGVyO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNPcGVuID0gX3RoaXMkc3RhdGUyLmlzT3BlbixcbiAgICAgICAgICBjdXJyZW50ID0gX3RoaXMkc3RhdGUyLmN1cnJlbnQsXG4gICAgICAgICAgaW5ET00gPSBfdGhpcyRzdGF0ZTIuaW5ET00sXG4gICAgICAgICAgdGFyZ2V0VG9wID0gX3RoaXMkc3RhdGUyLnRvcCxcbiAgICAgICAgICB0YXJnZXRSaWdodCA9IF90aGlzJHN0YXRlMi5yaWdodCxcbiAgICAgICAgICB0YXJnZXRCb3R0b20gPSBfdGhpcyRzdGF0ZTIuYm90dG9tLFxuICAgICAgICAgIHRhcmdldExlZnQgPSBfdGhpcyRzdGF0ZTIubGVmdCxcbiAgICAgICAgICB0YXJnZXRXaWR0aCA9IF90aGlzJHN0YXRlMi53aWR0aCxcbiAgICAgICAgICB0YXJnZXRIZWlnaHQgPSBfdGhpcyRzdGF0ZTIuaGVpZ2h0LFxuICAgICAgICAgIHdpbmRvd1dpZHRoID0gX3RoaXMkc3RhdGUyLncsXG4gICAgICAgICAgd2luZG93SGVpZ2h0ID0gX3RoaXMkc3RhdGUyLmgsXG4gICAgICAgICAgaGVscGVyV2lkdGggPSBfdGhpcyRzdGF0ZTIuaGVscGVyV2lkdGgsXG4gICAgICAgICAgaGVscGVySGVpZ2h0ID0gX3RoaXMkc3RhdGUyLmhlbHBlckhlaWdodCxcbiAgICAgICAgICBoZWxwZXJQb3NpdGlvbiA9IF90aGlzJHN0YXRlMi5oZWxwZXJQb3NpdGlvbjtcblxuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHbG9iYWxTdHlsZSwgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0b3VyUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBzdGVwOiBzdGVwc1tjdXJyZW50XSxcbiAgICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZWNhbGN1bGF0ZU5vZGUoc3RlcHNbY3VycmVudF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0b3VyTXV0YXRpb25PYnNlcnZlciwge1xuICAgICAgICAgIHN0ZXA6IHN0ZXBzW2N1cnJlbnRdLFxuICAgICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlY2FsY3VsYXRlTm9kZShzdGVwc1tjdXJyZW50XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3ZnTWFzaywge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMubWFza0NsaWNrSGFuZGxlcixcbiAgICAgICAgICBmb3J3YXJkUmVmOiBmdW5jdGlvbiBmb3J3YXJkUmVmKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMubWFzayA9IGM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93V2lkdGgsXG4gICAgICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG4gICAgICAgICAgdGFyZ2V0V2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICAgIHRhcmdldEhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgIHRhcmdldFRvcDogdGFyZ2V0VG9wLFxuICAgICAgICAgIHRhcmdldExlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgcGFkZGluZzogbWFza1NwYWNlLFxuICAgICAgICAgIHJvdW5kZWQ6IHJvdW5kZWQsXG4gICAgICAgICAgcm91bmRlZFN0ZXA6IHN0ZXBzW2N1cnJlbnRdLnJvdW5kZWRTdGVwLFxuICAgICAgICAgIGNsYXNzTmFtZTogbWFza0NsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb246IHN0ZXBzW2N1cnJlbnRdLnN0ZXBJbnRlcmFjdGlvbiA9PT0gZmFsc2UgfHwgZGlzYWJsZUludGVyYWN0aW9uID8gIXN0ZXBzW2N1cnJlbnRdLnN0ZXBJbnRlcmFjdGlvbiA6IGRpc2FibGVJbnRlcmFjdGlvbixcbiAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb25DbGFzc05hbWU6IFwiXCIuY29uY2F0KENOLm1hc2suZGlzYWJsZUludGVyYWN0aW9uLCBcIiBcIikuY29uY2F0KGhpZ2hsaWdodGVkTWFza0NsYXNzTmFtZSksXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRCb3JkZXI6IGhpZ2hsaWdodGVkQm9yZGVyXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb2N1c0xvY2ssIHtcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZUZvY3VzTG9jayxcbiAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEd1aWRlLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLmhlbHBlcixcbiAgICAgICAgICB0YXJnZXRIZWlnaHQ6IHRhcmdldEhlaWdodCxcbiAgICAgICAgICB0YXJnZXRXaWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgdGFyZ2V0VG9wOiB0YXJnZXRUb3AsXG4gICAgICAgICAgdGFyZ2V0UmlnaHQ6IHRhcmdldFJpZ2h0LFxuICAgICAgICAgIHRhcmdldEJvdHRvbTogdGFyZ2V0Qm90dG9tLFxuICAgICAgICAgIHRhcmdldExlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvd1dpZHRoLFxuICAgICAgICAgIHdpbmRvd0hlaWdodDogd2luZG93SGVpZ2h0LFxuICAgICAgICAgIGhlbHBlcldpZHRoOiBoZWxwZXJXaWR0aCxcbiAgICAgICAgICBoZWxwZXJIZWlnaHQ6IGhlbHBlckhlaWdodCxcbiAgICAgICAgICBoZWxwZXJQb3NpdGlvbjogaGVscGVyUG9zaXRpb24sXG4gICAgICAgICAgcGFkZGluZzogbWFza1NwYWNlLFxuICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgIHN0eWxlOiBzdGVwc1tjdXJyZW50XS5zdHlsZSA/IHN0ZXBzW2N1cnJlbnRdLnN0eWxlIDoge30sXG4gICAgICAgICAgcm91bmRlZDogcm91bmRlZCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNuKENOLmhlbHBlci5iYXNlLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgQ04uaGVscGVyLmlzT3BlbiwgaXNPcGVuKSksXG4gICAgICAgICAgYWNjZW50Q29sb3I6IGFjY2VudENvbG9yLFxuICAgICAgICAgIGRlZmF1bHRTdHlsZXM6ICFDdXN0b21IZWxwZXIsXG4gICAgICAgICAgcm9sZTogXCJkaWFsb2dcIlxuICAgICAgICB9LCBDdXN0b21IZWxwZXIgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDdXN0b21IZWxwZXIsIHtcbiAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgIHRvdGFsU3RlcHM6IHN0ZXBzLmxlbmd0aCxcbiAgICAgICAgICBnb3RvU3RlcDogdGhpcy5nb3RvU3RlcCxcbiAgICAgICAgICBjbG9zZTogb25SZXF1ZXN0Q2xvc2UsXG4gICAgICAgICAgY29udGVudDogc3RlcHNbY3VycmVudF0gJiYgKHR5cGVvZiBzdGVwc1tjdXJyZW50XS5jb250ZW50ID09PSAnZnVuY3Rpb24nID8gc3RlcHNbY3VycmVudF0uY29udGVudCh7XG4gICAgICAgICAgICBjbG9zZTogb25SZXF1ZXN0Q2xvc2UsXG4gICAgICAgICAgICBnb1RvOiB0aGlzLmdvdG9TdGVwLFxuICAgICAgICAgICAgaW5ET006IGluRE9NLFxuICAgICAgICAgICAgc3RlcDogY3VycmVudCArIDFcbiAgICAgICAgICB9KSA6IHN0ZXBzW2N1cnJlbnRdLmNvbnRlbnQpXG4gICAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRoaXMucHJvcHMuY2hpbGRyZW4sIHN0ZXBzW2N1cnJlbnRdICYmICh0eXBlb2Ygc3RlcHNbY3VycmVudF0uY29udGVudCA9PT0gJ2Z1bmN0aW9uJyA/IHN0ZXBzW2N1cnJlbnRdLmNvbnRlbnQoe1xuICAgICAgICAgIGNsb3NlOiBvblJlcXVlc3RDbG9zZSxcbiAgICAgICAgICBnb1RvOiB0aGlzLmdvdG9TdGVwLFxuICAgICAgICAgIGluRE9NOiBpbkRPTSxcbiAgICAgICAgICBzdGVwOiBjdXJyZW50ICsgMVxuICAgICAgICB9KSA6IHN0ZXBzW2N1cnJlbnRdLmNvbnRlbnQpLCBzaG93TnVtYmVyICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJhZGdlLCB7XG4gICAgICAgICAgXCJkYXRhLXRvdXItZWxlbVwiOiBcImJhZGdlXCIsXG4gICAgICAgICAgYWNjZW50Q29sb3I6IGFjY2VudENvbG9yXG4gICAgICAgIH0sIHR5cGVvZiBiYWRnZUNvbnRlbnQgPT09ICdmdW5jdGlvbicgPyBiYWRnZUNvbnRlbnQoY3VycmVudCArIDEsIHN0ZXBzLmxlbmd0aCkgOiBjdXJyZW50ICsgMSksIChzaG93QnV0dG9ucyB8fCBzaG93TmF2aWdhdGlvbikgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJvbHMsIHtcbiAgICAgICAgICBcImRhdGEtdG91ci1lbGVtXCI6IFwiY29udHJvbHNcIlxuICAgICAgICB9LCBzaG93QnV0dG9ucyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBcnJvdyQxLCB7XG4gICAgICAgICAgb25DbGljazogdHlwZW9mIHByZXZTdGVwID09PSAnZnVuY3Rpb24nID8gcHJldlN0ZXAgOiB0aGlzLnByZXZTdGVwLFxuICAgICAgICAgIGRpc2FibGVkOiBjdXJyZW50ID09PSAwLFxuICAgICAgICAgIGxhYmVsOiBwcmV2QnV0dG9uID8gcHJldkJ1dHRvbiA6IG51bGxcbiAgICAgICAgfSksIHNob3dOYXZpZ2F0aW9uICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb24sIHtcbiAgICAgICAgICBcImRhdGEtdG91ci1lbGVtXCI6IFwibmF2aWdhdGlvblwiXG4gICAgICAgIH0sIHN0ZXBzLm1hcChmdW5jdGlvbiAocywgaSkge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEb3QsIHtcbiAgICAgICAgICAgIGtleTogXCJcIi5jb25jYXQocy5zZWxlY3RvciA/IHMuc2VsZWN0b3IgOiAndW5kZWYnLCBcIl9cIikuY29uY2F0KGkpLFxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5nb3RvU3RlcChpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICBhY2NlbnRDb2xvcjogYWNjZW50Q29sb3IsXG4gICAgICAgICAgICBkaXNhYmxlZDogY3VycmVudCA9PT0gaSB8fCBkaXNhYmxlRG90c05hdmlnYXRpb24sXG4gICAgICAgICAgICBzaG93TnVtYmVyOiBzaG93TmF2aWdhdGlvbk51bWJlcixcbiAgICAgICAgICAgIFwiZGF0YS10b3VyLWVsZW1cIjogXCJkb3RcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY24oQ04uZG90LmJhc2UsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgQ04uZG90LmFjdGl2ZSwgY3VycmVudCA9PT0gaSkpLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHMubmF2RG90QXJpYUxhYmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKSwgc2hvd0J1dHRvbnMgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXJyb3ckMSwge1xuICAgICAgICAgIG9uQ2xpY2s6IGN1cnJlbnQgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBsYXN0U3RlcE5leHRCdXR0b24gPyBvblJlcXVlc3RDbG9zZSA6IGZ1bmN0aW9uICgpIHt9IDogdHlwZW9mIG5leHRTdGVwID09PSAnZnVuY3Rpb24nID8gbmV4dFN0ZXAgOiB0aGlzLm5leHRTdGVwLFxuICAgICAgICAgIGRpc2FibGVkOiAhbGFzdFN0ZXBOZXh0QnV0dG9uICYmIGN1cnJlbnQgPT09IHN0ZXBzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgaW52ZXJ0ZWQ6IHRydWUsXG4gICAgICAgICAgbGFiZWw6IGxhc3RTdGVwTmV4dEJ1dHRvbiAmJiBjdXJyZW50ID09PSBzdGVwcy5sZW5ndGggLSAxID8gbGFzdFN0ZXBOZXh0QnV0dG9uIDogbmV4dEJ1dHRvbiA/IG5leHRCdXR0b24gOiBudWxsXG4gICAgICAgIH0pKSwgc2hvd0Nsb3NlQnV0dG9uICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZENsb3NlLCB7XG4gICAgICAgICAgb25DbGljazogb25SZXF1ZXN0Q2xvc2UsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInJlYWN0b3VyX19jbG9zZVwiLFxuICAgICAgICAgIGFyaWFMYWJlbDogY2xvc2VCdXR0b25BcmlhTGFiZWxcbiAgICAgICAgfSkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVG91cjtcbn0oQ29tcG9uZW50KTtcblxudmFyIHNldE5vZGVTdGF0ZSA9IGZ1bmN0aW9uIHNldE5vZGVTdGF0ZShub2RlLCBzdGVwLCBoZWxwZXIpIHtcbiAgaWYgKCFoZWxwZXIpIHJldHVybjtcbiAgdmFyIHcgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICB2YXIgaCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICB2YXIgX2h4JGdldE5vZGVSZWN0ID0gZ2V0Tm9kZVJlY3QoaGVscGVyKSxcbiAgICAgIGhlbHBlcldpZHRoID0gX2h4JGdldE5vZGVSZWN0LndpZHRoLFxuICAgICAgaGVscGVySGVpZ2h0ID0gX2h4JGdldE5vZGVSZWN0LmhlaWdodDtcblxuICB2YXIgYXR0cnMgPSB7XG4gICAgdG9wOiBoICsgMTAsXG4gICAgcmlnaHQ6IHcgLyAyICsgOSxcbiAgICBib3R0b206IGggLyAyICsgOSxcbiAgICBsZWZ0OiB3IC8gMiAtIGhlbHBlcldpZHRoIC8gMixcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgdzogdyxcbiAgICBoOiBoLFxuICAgIGhlbHBlclBvc2l0aW9uOiAnY2VudGVyJ1xuICB9O1xuXG4gIGlmIChub2RlKSB7XG4gICAgYXR0cnMgPSBnZXRIaWdobGlnaHRlZFJlY3Qobm9kZSwgc3RlcCk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICB3OiB3LFxuICAgICAgaDogaCxcbiAgICAgIGhlbHBlcldpZHRoOiBoZWxwZXJXaWR0aCxcbiAgICAgIGhlbHBlckhlaWdodDogaGVscGVySGVpZ2h0LFxuICAgICAgaGVscGVyUG9zaXRpb246IHN0ZXAucG9zaXRpb25cbiAgICB9LCBhdHRycyksIHt9LCB7XG4gICAgICBpbkRPTTogbm9kZSA/IHRydWUgOiBmYWxzZVxuICAgIH0pO1xuICB9O1xufTtcblxuVG91ci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Ub3VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgVG91cjtcbmV4cG9ydCB7IEFycm93JDEgYXMgQXJyb3csIEJhZGdlLCBTdHlsZWRDbG9zZSBhcyBDbG9zZSwgQ29udHJvbHMsIERvdCwgTmF2aWdhdGlvbiB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZWFjdE5vZGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvdXIgZnJvbSAncmVhY3RvdXInXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlYWN0VG91clByb3BzIHsgIFxyXG4gc3RhcnRUb3VyOmJvb2xlYW5cclxuIGFycmF5T2ZPYmplY3RzVmFsdWU6YW55W11cclxuIGFjY2VudENvbG9yPzpzdHJpbmdcclxuIGNsb3NlV2l0aE1hc2s/OmJvb2xlYW5cclxuIGRpc2FibGVkb3RzbmF2aWdhdGlvbj86Ym9vbGVhblxyXG4gZGlzYWJsZWtleWJvYXJkbmF2aWdhdGlvbj86Ym9vbGVhblxyXG4gc2hvd0J1dHRvbnM/OmJvb2xlYW5cclxuIHNob3dDbG9zZUJ1dHRvbnM/OmJvb2xlYW5cclxuIHNob3dOYXZpZ2F0aW9uPzpib29sZWFuXHJcbiBzaG93TmF2aWdhdGlvbk51bWJlcj86Ym9vbGVhblxyXG4gc2hvd051bWJlcj86Ym9vbGVhblxyXG4gc3RhcnRBdD86bnVtYmVyXHJcbiBkaXNhYmxlRm9jdXNMb2NrPzpib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnB1dFN0YXRlIHtcclxuICBpc1RvdXJWaXNpYmxlPzogYm9vbGVhbjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFjdFRvdXJJbnB1dCBleHRlbmRzIENvbXBvbmVudDxSZWFjdFRvdXJQcm9wcywgSW5wdXRTdGF0ZT4ge1xyXG4gIHJlYWRvbmx5IHN0YXRlOiBJbnB1dFN0YXRlID0geyBpc1RvdXJWaXNpYmxlOiBmYWxzZSB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICBcclxuICB0aGlzLnNldFN0YXRlKHsgaXNUb3VyVmlzaWJsZTogdHJ1ZSB9KTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUb3VyXHJcbiAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLmFycmF5T2ZPYmplY3RzVmFsdWV9XHJcbiAgICAgIGlzT3Blbj17KHRoaXMuc3RhdGUuaXNUb3VyVmlzaWJsZSAmJiB0aGlzLnByb3BzLnN0YXJ0VG91cikgfHwgZmFsc2UgfVxyXG4gICAgICBhY2NlbnRDb2xvcj17dGhpcy5wcm9wcy5hY2NlbnRDb2xvcn1cclxuICAgICAgY2xvc2VXaXRoTWFzaz17dGhpcy5wcm9wcy5jbG9zZVdpdGhNYXNrfVxyXG4gICAgICBkaXNhYmxlRG90c05hdmlnYXRpb249e3RoaXMucHJvcHMuZGlzYWJsZWRvdHNuYXZpZ2F0aW9ufVxyXG4gICAgICBkaXNhYmxlS2V5Ym9hcmROYXZpZ2F0aW9uPXt0aGlzLnByb3BzLmRpc2FibGVrZXlib2FyZG5hdmlnYXRpb259XHJcbiAgICAgIHNob3dCdXR0b25zPXt0aGlzLnByb3BzLnNob3dCdXR0b25zfVxyXG4gICAgICBzaG93Q2xvc2VCdXR0b249e3RoaXMucHJvcHMuc2hvd0Nsb3NlQnV0dG9uc31cclxuICAgICAgc2hvd05hdmlnYXRpb249e3RoaXMucHJvcHMuc2hvd05hdmlnYXRpb259XHJcbiAgICAgIHNob3dOdW1iZXI9e3RoaXMucHJvcHMuc2hvd051bWJlcn1cclxuICAgICAgc3RhcnRBdD17dGhpcy5wcm9wcy5zdGFydEF0fVxyXG4gICAgICBkaXNhYmxlRm9jdXNMb2NrPXt0aGlzLnByb3BzLmRpc2FibGVGb2N1c0xvY2t9XHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlVG91cn1cclxuICAgIC8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcbiAgY2xvc2VUb3VyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG91clZpc2libGU6IGZhbHNlIH0pO1xyXG4gIH07XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSZWFjdHRvdXJDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL1JlYWN0dG91clByb3BzXCI7XG5pbXBvcnQgeyBSZWFjdFRvdXJJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvUmVhY3R0b3VySW5wdXRcIjtcbmltcG9ydCBcIi4vdWkvUmVhY3R0b3VyLmNzc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVhY3R0b3VyIGV4dGVuZHMgQ29tcG9uZW50PFJlYWN0dG91ckNvbnRhaW5lclByb3BzPiB7XG4gICBcblxuICAgIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgICAgICBsZXQgc3RhcnRUb3VyVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBhcnNlZEFycmF5ID1udWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGVwc0tleS52YWx1ZSE9bnVsbCkge1xuICAgICAgICAgIHN0YXJ0VG91clZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICBwYXJzZWRBcnJheT0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnN0ZXBzS2V5LnZhbHVlIHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydFRvdXJWYWx1ZT10aGlzLnByb3BzLnN0YXJ0VG91cktleT8udmFsdWUgfHwgZmFsc2VcbiAgICAgICAgbGV0IGFjY2VudENvbG9yVmFsdWU9dGhpcy5wcm9wcy5hY2NlbnRjb2xvcktleT8udmFsdWUgfHwgJyMwMDdhZmYnXG4gICAgICAgIGxldCBjbG9zZVdpdGhNYXNrVmFsdWU9dGhpcy5wcm9wcy5jbG9zZVdpdGhNYXNrS2V5Py52YWx1ZSB8fCB0cnVlO1xuICAgICAgICBsZXQgZGlzYWJsZWRvdHNuYXZpZ2F0aW9uVmFsdWU9dGhpcy5wcm9wcy5kaXNhYmxlZG90c25hdmlnYXRpb25LZXk/LnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBsZXQgZGlzYWJsZWtleWJvYXJkbmF2aWdhdGlvblZhbHVlPXRoaXMucHJvcHMuZGlzYWJsZWtleWJvYXJkbmF2aWdhdGlvbktleT8udmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGxldCBzaG93YnV0dG9uc1ZhbHVlPXRoaXMucHJvcHMuc2hvd0J1dHRvbnNLZXk/LnZhbHVlIHx8IHRydWU7XG4gICAgICAgIGxldCBzaG93Y2xvc2VidXR0b25WYWx1ZT10aGlzLnByb3BzLnNob3dDbG9zZUJ1dHRvbnNLZXk/LnZhbHVlIHx8IHRydWU7XG4gICAgICAgIGxldCBzaG93TmF2aWdhdGlvblZhbHVlPXRoaXMucHJvcHMuc2hvd05hdmlnYXRpb25LZXk/LnZhbHVlIHx8IHRydWU7XG4gICAgICAgIGxldCBzaG93TmF2aWdhdGlvbk51bWJlclZhbHVlPXRoaXMucHJvcHMuc2hvd05hdmlnYXRpb25OdW1iZXJLZXk/LnZhbHVlIHx8IHRydWU7XG4gICAgICAgIGxldCBzaG93TnVtYmVyVmFsdWU9dGhpcy5wcm9wcy5zaG93TnVtYmVyS2V5Py52YWx1ZSB8fCB0cnVlO1xuICAgICAgICBsZXQgc3RhcnRBdFZhbHVlPSAwO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGFydEF0S2V5Py52YWx1ZSE9dW5kZWZpbmVkKXtcbiAgICAgICAgICBzdGFydEF0VmFsdWU9TnVtYmVyKHRoaXMucHJvcHMuc3RhcnRBdEtleT8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkaXNhYmxlRm9jdXNMb2NrVmFsdWU9dGhpcy5wcm9wcy5kaXNhYmxlRm9jdXNMb2NrS2V5Py52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3RUb3VySW5wdXRcbiAgICAgICAgc3RhcnRUb3VyPXtzdGFydFRvdXJWYWx1ZX1cbiAgICAgICAgYXJyYXlPZk9iamVjdHNWYWx1ZT17cGFyc2VkQXJyYXl9XG4gICAgICAgIGFjY2VudENvbG9yPXthY2NlbnRDb2xvclZhbHVlfVxuICAgICAgICBjbG9zZVdpdGhNYXNrPXtjbG9zZVdpdGhNYXNrVmFsdWV9XG4gICAgICAgIGRpc2FibGVkb3RzbmF2aWdhdGlvbj17ZGlzYWJsZWRvdHNuYXZpZ2F0aW9uVmFsdWV9XG4gICAgICAgIGRpc2FibGVrZXlib2FyZG5hdmlnYXRpb249e2Rpc2FibGVrZXlib2FyZG5hdmlnYXRpb25WYWx1ZX1cbiAgICAgICAgc2hvd0J1dHRvbnM9e3Nob3didXR0b25zVmFsdWV9XG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbnM9e3Nob3djbG9zZWJ1dHRvblZhbHVlfVxuICAgICAgICBzaG93TmF2aWdhdGlvbj17c2hvd05hdmlnYXRpb25WYWx1ZX1cbiAgICAgICAgc2hvd05hdmlnYXRpb25OdW1iZXI9e3Nob3dOYXZpZ2F0aW9uTnVtYmVyVmFsdWV9XG4gICAgICAgIHNob3dOdW1iZXI9e3Nob3dOdW1iZXJWYWx1ZX1cbiAgICAgICAgc3RhcnRBdD17c3RhcnRBdFZhbHVlfVxuICAgICAgICBkaXNhYmxlRm9jdXNMb2NrPXtkaXNhYmxlRm9jdXNMb2NrVmFsdWV9XG4gICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICBcbn1cbiJdLCJuYW1lcyI6WyJDTEFTU19OQU1FIiwiRm9jdXNPdXRsaW5lTWFuYWdlciIsInRoYXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm9jdXNCeUtleWJvYXJkIiwiZXZlbnQiLCJ1cGRhdGVWaXNpYmlsaXR5Iiwid2luZG93Iiwic2V0VGltZW91dCIsImhhc0ZvY3VzIiwicHJvdG90eXBlIiwiaGlkZGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZyIsImFyZ1R5cGUiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5uZXIiLCJhcHBseSIsInRvU3RyaW5nIiwiT2JqZWN0Iiwia2V5IiwiY2FsbCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlYXNlRnVuY3Rpb25zIiwibGluZWFyIiwidCIsImVhc2VJblF1YWQiLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5DdWJpYyIsImVhc2VPdXRDdWJpYyIsImVhc2VJbk91dEN1YmljIiwiZWFzZUluUXVhcnQiLCJlYXNlT3V0UXVhcnQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJblF1aW50IiwiZWFzZU91dFF1aW50IiwiZWFzZUluT3V0UXVpbnQiLCJpc051bWVyaWMiLCJuIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJzZXRQb3NpdGlvbiIsImJlZ2luIiwiZW5kIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwiZWFzZSIsInVuZGVmaW5lZCIsImNhbGNFbmRQb2ludCIsInRhcmdldCIsImNvbnRleHQiLCJvZmZzZXQiLCJwYXJzZUludCIsInkiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImRpc3RhbmNlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX3Rvb2xzIiwicmVxdWlyZSIsIl9yZWYiLCJfcmVmJGR1cmF0aW9uIiwiX3JlZiRjb250ZXh0IiwiX3JlZiRvZmZzZXQiLCJfcmVmJGVhc2UiLCJjYWxsYmFjayIsInN0YXJ0IiwiY2xvY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJBRiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpY2siLCJwb3MiLCJzY3JvbGwiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInNvdXJjZSIsIl9zY3JvbGxTbW9vdGgiLCJfc2Nyb2xsU21vb3RoMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfX2VzTW9kdWxlIiwiX3JlZiRxdWVyeSIsInF1ZXJ5IiwiX3JlZiRtYXRjaCIsIm1hdGNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJoYXNoIiwic3Vic3RyaW5nIiwiX3JlZiRoYXNoQ2hhbmdlIiwiaGFzaENoYW5nZSIsInNjcm9sbFNtb290aENvbmZpZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRlc3QiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiaWQiLCJmcm9tIiwibWFwIiwibGluayIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsImFycjIiLCJfcmVmJGFjdGl2ZUNsYXNzIiwiYWN0aXZlQ2xhc3MiLCJfcmVmJHRocmVzaG9sZCIsInRocmVzaG9sZCIsIl9yZWYkZGV0ZWN0VHlwZSIsImRldGVjdFR5cGUiLCJvcHRpb25zIiwicmVtb3ZlQ2xhc3MiLCJub2RlIiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJhZGQiLCJ1bnNldEFsbEFjdGl2ZXMiLCJmb3JFYWNoIiwic2V0QWN0aXZlIiwiYWN0aXZlTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsIk1hdGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZVRhcmdldCIsInNsaWNlIiwib2JzZXJ2ZSIsIl9hbmNob3JTY3JvbGwiLCJfYW5jaG9yU2Nyb2xsMiIsIl9vYnNlcnZlIiwiX29ic2VydmUyIiwidG8iLCJhbmNob3JTY3JvbGwiLCJyb290IiwiZmFjdG9yeSIsIlNjcm9sbHBhcmVudCIsInRoaXMiLCJyZWdleCIsInBhcmVudHMiLCJwcyIsInBhcmVudE5vZGUiLCJjb25jYXQiLCJzdHlsZSIsInByb3AiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm92ZXJmbG93IiwidGVzdCIsInNjcm9sbFBhcmVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInNjcm9sbGluZ0VsZW1lbnQiLCJGVU5DX0VSUk9SX1RFWFQiLCJOQU4iLCJzeW1ib2xUYWciLCJyZVRyaW0iLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJmcmVlU2VsZiIsInNlbGYiLCJGdW5jdGlvbiIsIm9iamVjdFByb3RvIiwib2JqZWN0VG9TdHJpbmciLCJuYXRpdmVNYXgiLCJtYXgiLCJuYXRpdmVNaW4iLCJtaW4iLCJEYXRlIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImxhc3RBcmdzIiwibGFzdFRoaXMiLCJtYXhXYWl0IiwicmVzdWx0IiwidGltZXJJZCIsImxhc3RDYWxsVGltZSIsImxhc3RJbnZva2VUaW1lIiwibGVhZGluZyIsIm1heGluZyIsInRyYWlsaW5nIiwiVHlwZUVycm9yIiwidG9OdW1iZXIiLCJpc09iamVjdCIsImludm9rZUZ1bmMiLCJ0aW1lIiwiYXJncyIsInRoaXNBcmciLCJsZWFkaW5nRWRnZSIsInRpbWVyRXhwaXJlZCIsInJlbWFpbmluZ1dhaXQiLCJ0aW1lU2luY2VMYXN0Q2FsbCIsInRpbWVTaW5jZUxhc3RJbnZva2UiLCJzaG91bGRJbnZva2UiLCJ0cmFpbGluZ0VkZ2UiLCJjYW5jZWwiLCJjbGVhclRpbWVvdXQiLCJmbHVzaCIsImRlYm91bmNlZCIsImlzSW52b2tpbmciLCJ0eXBlIiwiaXNPYmplY3RMaWtlIiwiaXNTeW1ib2wiLCJvdGhlciIsInZhbHVlT2YiLCJyZXBsYWNlIiwiaXNCaW5hcnkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiYmluZCIsImhhc1N5bWJvbCIsImZvciIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSRUFDVF9CTE9DS19UWVBFIiwiUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSIsIlJFQUNUX1JFU1BPTkRFUl9UWVBFIiwiUkVBQ1RfU0NPUEVfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsIiQkdHlwZW9mIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRm9yd2FyZFJlZiIsIkZyYWdtZW50IiwiTGF6eSIsIk1lbW8iLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIiwiaXNBc3luY01vZGUiLCJjb25zb2xlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNNZW1vIiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsInNwbGl0IiwibGV0dGVyIiwiZXJyIiwic3ltYm9scyIsInMiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsInByaW50V2FybmluZyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImhhcyIsInRleHQiLCJtZXNzYWdlIiwiZXJyb3IiLCJFcnJvciIsIngiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwibmFtZSIsImV4Iiwic3RhY2siLCJyZXNldFdhcm5pbmdDYWNoZSIsIlJlYWN0SXMiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiaXNWYWxpZEVsZW1lbnQiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiSVRFUkFUT1JfU1lNQk9MIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImFycmF5IiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJiaWdpbnQiLCJib29sIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsIlByb3BUeXBlRXJyb3IiLCJkYXRhIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcHMiLCJwcm9wTmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlciIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJwcm9jZXNzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImV4cGVjdGVkVHlwZXMiLCJjaGVja2VyUmVzdWx0IiwiZXhwZWN0ZWRUeXBlc01lc3NhZ2UiLCJpc05vZGUiLCJpbnZhbGlkVmFsaWRhdG9yRXJyb3IiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsIm5leHQiLCJkb25lIiwiUmVnRXhwIiwiUHJvcFR5cGVzIiwiRk9DVVNfR1JPVVAiLCJGT0NVU19ESVNBQkxFRCIsIkZPQ1VTX0FMTE9XIiwiRk9DVVNfQVVUTyIsImFzc2lnblJlZiIsInJlZiIsImN1cnJlbnQiLCJ1c2VDYWxsYmFja1JlZiIsImluaXRpYWxWYWx1ZSIsInVzZVN0YXRlIiwiZmFjYWRlIiwibGFzdCIsImN1cnJlbnRWYWx1ZXMiLCJXZWFrTWFwIiwidXNlTWVyZ2VSZWZzIiwicmVmcyIsImRlZmF1bHRWYWx1ZSIsImNhbGxiYWNrUmVmIiwibmV3VmFsdWUiLCJSZWFjdCIsInVzZUxheW91dEVmZmVjdCIsIm9sZFZhbHVlIiwiZ2V0IiwicHJldlJlZnNfMSIsIlNldCIsIm5leHRSZWZzXzEiLCJjdXJyZW50XzEiLCJzZXQiLCJoaWRkZW5HdWFyZCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsInBvc2l0aW9uIiwibGVmdCIsImNoaWxkcmVuIiwiX19hc3NpZ24iLCJwIiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsIkl0b0kiLCJhIiwiaW5uZXJDcmVhdGVNZWRpdW0iLCJkZWZhdWx0cyIsIm1pZGRsZXdhcmUiLCJidWZmZXIiLCJhc3NpZ25lZCIsIm1lZGl1bSIsInJlYWQiLCJ1c2VNZWRpdW0iLCJpdGVtIiwiZmlsdGVyIiwiYXNzaWduU3luY01lZGl1bSIsImNiIiwiY2JzIiwiYXNzaWduTWVkaXVtIiwicGVuZGluZ1F1ZXVlIiwiZXhlY3V0ZVF1ZXVlIiwiY3ljbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJjcmVhdGVNZWRpdW0iLCJjcmVhdGVTaWRlY2FyTWVkaXVtIiwiYXN5bmMiLCJzc3IiLCJtZWRpdW1Gb2N1cyIsImN1cnJlbnRUYXJnZXQiLCJtZWRpdW1CbHVyIiwibWVkaXVtRWZmZWN0IiwibWVkaXVtU2lkZWNhciIsImVtcHR5QXJyYXkiLCJGb2N1c0xvY2siLCJmb3J3YXJkUmVmIiwiRm9jdXNMb2NrVUkiLCJwYXJlbnRSZWYiLCJfZXh0ZW5kczIiLCJfUmVhY3QkdXNlU3RhdGUiLCJyZWFsT2JzZXJ2ZWQiLCJzZXRPYnNlcnZlZCIsIm9ic2VydmVkIiwidXNlUmVmIiwiaXNBY3RpdmUiLCJvcmlnaW5hbEZvY3VzZWRFbGVtZW50IiwiZGlzYWJsZWQiLCJub0ZvY3VzR3VhcmRzIiwicGVyc2lzdGVudEZvY3VzIiwiY3Jvc3NGcmFtZSIsImF1dG9Gb2N1cyIsImFsbG93VGV4dFNlbGVjdGlvbiIsImdyb3VwIiwiY2xhc3NOYW1lIiwid2hpdGVMaXN0IiwiX3Byb3BzJHNoYXJkcyIsInNoYXJkcyIsIl9wcm9wcyRhcyIsImFzIiwiQ29udGFpbmVyIiwiX3Byb3BzJGxvY2tQcm9wcyIsImxvY2tQcm9wcyIsImNvbnRhaW5lclByb3BzIiwiU2lkZUNhciIsInNpZGVDYXIiLCJzaG91bGRSZXR1cm5Gb2N1cyIsInJldHVybkZvY3VzIiwib25BY3RpdmF0aW9uQ2FsbGJhY2siLCJvbkFjdGl2YXRpb24iLCJvbkRlYWN0aXZhdGlvbkNhbGxiYWNrIiwib25EZWFjdGl2YXRpb24iLCJfUmVhY3QkdXNlU3RhdGUyIiwidXNlQ2FsbGJhY2siLCJhY3RpdmVFbGVtZW50IiwiYWxsb3dEZWZlciIsIkJvb2xlYW4iLCJmb2N1cyIsImZvY3VzT3B0aW9ucyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzZXRPYnNlcnZlTm9kZSIsIm5ld09ic2VydmVkIiwid2FybiIsInVzZUVmZmVjdCIsImNvbnN0YW50cyIsImhhc0xlYWRpbmdHdWFyZHMiLCJoYXNUYWlsaW5nR3VhcmRzIiwibWVyZ2VkUmVmIiwiY3JlYXRlRWxlbWVudCIsInRhYkluZGV4IiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJ0b1ByaW1pdGl2ZSIsInIiLCJOdW1iZXIiLCJ0b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid2l0aFNpZGVFZmZlY3QiLCJyZWR1Y2VQcm9wc1RvU3RhdGUiLCJoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IiwiZ2V0RGlzcGxheU5hbWUiLCJXcmFwcGVkQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJ3cmFwIiwibW91bnRlZEluc3RhbmNlcyIsInN0YXRlIiwiZW1pdENoYW5nZSIsImluc3RhbmNlIiwiU2lkZUVmZmVjdCIsIl9QdXJlQ29tcG9uZW50IiwicGVlayIsIl9wcm90byIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJpbmRleCIsInNwbGljZSIsInJlbmRlciIsIlB1cmVDb21wb25lbnQiLCJ0b0FycmF5IiwicmV0IiwiYXNBcnJheSIsImZpbHRlck5lc3RlZCIsIm5vZGVzIiwiY29udGFpbmVkIiwibCIsImoiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkiLCJET0NVTUVOVF9QT1NJVElPTl9DT05UQUlOUyIsIl8iLCJnZXRUb3BQYXJlbnQiLCJnZXRBbGxBZmZlY3RlZE5vZGVzIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudE5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJpc0VsZW1lbnRIaWRkZW4iLCJub2RlVHlwZSIsIkVMRU1FTlRfTk9ERSIsImNvbXB1dGVkU3R5bGUiLCJpc1Zpc2libGVVbmNhY2hlZCIsImNoZWNrUGFyZW50IiwiRE9DVU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJob3N0IiwiaXNWaXNpYmxlQ2FjaGVkIiwidmlzaWJpbGl0eUNhY2hlIiwiY2FjaGVkIiwibm90SGlkZGVuSW5wdXQiLCJ0YWdOYW1lIiwiaXNHdWFyZCIsImRhdGFzZXQiLCJmb2N1c0d1YXJkIiwiaXNOb3RBR3VhcmQiLCJpc0RlZmluZWQiLCJ0YWJTb3J0IiwiYiIsInRhYkRpZmYiLCJpbmRleERpZmYiLCJvcmRlckJ5VGFiSW5kZXgiLCJmaWx0ZXJOZWdhdGl2ZSIsImtlZXBHdWFyZHMiLCJzb3J0IiwidGFiYmFibGVzIiwicXVlcnlUYWJiYWJsZXMiLCJxdWVyeUd1YXJkVGFiYmFibGVzIiwiZ2V0Rm9jdXNhYmxlcyIsIndpdGhHdWFyZHMiLCJwYXJlbnQiLCJnZXRQYXJlbnRBdXRvZm9jdXNhYmxlcyIsInBhcmVudEZvY3VzIiwiZmlsdGVyRm9jdXNhYmxlIiwiZ2V0VGFiYmFibGVOb2RlcyIsInRvcE5vZGVzIiwiZ2V0QWxsVGFiYmFibGVOb2RlcyIsInBhcmVudEF1dG9mb2N1c2FibGVzIiwidG9wTm9kZSIsImdldFBhcmVudHMiLCJnZXRDb21tb25QYXJlbnQiLCJub2RlQSIsIm5vZGVCIiwicGFyZW50c0EiLCJwYXJlbnRzQiIsImN1cnJlbnRQYXJlbnQiLCJnZXRUb3BDb21tb25QYXJlbnQiLCJiYXNlQWN0aXZlRWxlbWVudCIsImxlZnRFbnRyeSIsInJpZ2h0RW50cmllcyIsImFjdGl2ZUVsZW1lbnRzIiwibGVmdEVudHJpZXMiLCJ0b3BDb21tb24iLCJzdWJFbnRyeSIsImNvbW1vbiIsImFsbFBhcmVudEF1dG9mb2N1c2FibGVzIiwiZ2V0Rm9jdXNhYmxlZEluIiwiY29tbW9uUGFyZW50IiwiTWFwIiwib3V0ZXJOb2RlcyIsImlubmVyRWxlbWVudHMiLCJfYSIsImxvY2tJdGVtIiwiZ3VhcmQiLCJmb2N1c0luRnJhbWUiLCJmcmFtZSIsImZvY3VzSW5zaWRlSWZyYW1lIiwic29tZSIsImZvY3VzSW5zaWRlIiwiZm9jdXNJc0hpZGRlbiIsImlzUmFkaW8iLCJmaW5kU2VsZWN0ZWRSYWRpbyIsImVsIiwiY2hlY2tlZCIsImNvcnJlY3ROb2RlIiwiY29ycmVjdE5vZGVzIiwicmVzdWx0U2V0IiwicGlja0ZpcnN0Rm9jdXMiLCJwaWNrRm9jdXNhYmxlIiwiTkVXX0ZPQ1VTIiwibmV3Rm9jdXMiLCJpbm5lck5vZGVzIiwibGFzdE5vZGUiLCJjbnQiLCJmaXJzdEZvY3VzIiwibGFzdEZvY3VzIiwiaXNPbkd1YXJkIiwiYWN0aXZlSW5kZXgiLCJsYXN0SW5kZXgiLCJsYXN0Tm9kZUluc2lkZSIsImZpcnN0Tm9kZUluZGV4IiwibGFzdE5vZGVJbmRleCIsImNvcnJlY3RlZE5vZGVzIiwiY29ycmVjdGVkSW5kZXhEaWZmIiwicmV0dXJuRmlyc3ROb2RlIiwicmV0dXJuTGFzdE5vZGUiLCJhYnMiLCJmaW5kQXV0b0ZvY3VzZWQiLCJhdXRvRm9jdXNhYmxlcyIsImF1dG9mb2N1cyIsInJlb3JkZXJOb2RlcyIsInNyY05vZGVzIiwiZHN0Tm9kZXMiLCJyZW1hcCIsImVudGl0eSIsImdldEZvY3VzTWVyZ2UiLCJhbnlGb2N1c2FibGUiLCJvcmRlcmVkSW5uZXJFbGVtZW50cyIsIm5ld0lkIiwiYXV0b0ZvY3VzYWJsZSIsImZvY3VzT24iLCJjb250ZW50V2luZG93IiwiZ3VhcmRDb3VudCIsImxvY2tEaXNhYmxlZCIsInNldEZvY3VzIiwiZm9jdXNhYmxlIiwiZGVmZXJBY3Rpb24iLCJhY3Rpb24iLCJfd2luZG93Iiwic2V0SW1tZWRpYXRlIiwiZm9jdXNPbkJvZHkiLCJib2R5IiwiaXNGcmVlRm9jdXMiLCJsYXN0QWN0aXZlVHJhcCIsImxhc3RBY3RpdmVGb2N1cyIsImxhc3RQb3J0YWxlZEVsZW1lbnQiLCJmb2N1c1dhc091dHNpZGVXaW5kb3ciLCJkZWZhdWx0V2hpdGVsaXN0IiwiZm9jdXNXaGl0ZWxpc3RlZCIsInJlY29yZFBvcnRhbCIsIm9ic2VydmVyTm9kZSIsInBvcnRhbGVkRWxlbWVudCIsImZvY3VzSXNQb3J0YWxlZFBhaXIiLCJhdXRvR3VhcmQiLCJzdGFydEluZGV4IiwiYWxsTm9kZXMiLCJsYXN0R3VhcmQiLCJmb2N1c0F1dG9HdWFyZCIsImV4dHJhY3RSZWYiLCJmb2N1c1dhc091dHNpZGUiLCJjcm9zc0ZyYW1lT3B0aW9uIiwiYWN0aXZhdGVUcmFwIiwiX2xhc3RBY3RpdmVUcmFwIiwid29ya2luZ05vZGUiLCJ3b3JraW5nQXJlYSIsImJsdXIiLCJtb3ZlRm9jdXNJbnNpZGUiLCJuZXdBY3RpdmVFbGVtZW50IiwiZm9jdXNlZEluZGV4IiwiX3JlZjIiLCJfcmVmMyIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uVHJhcCIsInN0b3BQcm9wYWdhdGlvbiIsIkZvY3VzV2F0Y2hlciIsIm9uV2luZG93Qmx1ciIsImF0dGFjaEhhbmRsZXIiLCJkZXRhY2hIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BzTGlzdCIsIl9yZWY1IiwidHJhcHMiLCJ0cmFwIiwibGFzdFRyYXAiLCJzYW1lVHJhcCIsIl9yZWY2IiwiRm9jdXNMb2NrQ29tYmluYXRpb24iLCJGb2N1c0xvY2tVSUNvbWJpbmF0aW9uIiwiRm9jdXNUcmFwIiwiUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSIsIlJFQUNUX09GRlNDUkVFTl9UWVBFIiwiZW5hYmxlU2NvcGVBUEkiLCJlbmFibGVDYWNoZUVsZW1lbnQiLCJlbmFibGVUcmFuc2l0aW9uVHJhY2luZyIsImVuYWJsZUxlZ2FjeUhpZGRlbiIsImVuYWJsZURlYnVnVHJhY2luZyIsIlJFQUNUX01PRFVMRV9SRUZFUkVOQ0UiLCJnZXRNb2R1bGVJZCIsIlN1c3BlbnNlTGlzdCIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUiLCJpc1N1c3BlbnNlTGlzdCIsInN0eWxpc19taW4iLCJXIiwiTSIsImQiLCJjIiwiaCIsIm0iLCJ2IiwicSIsImciLCJLIiwiayIsInUiLCJJIiwiQiIsIkoiLCJmIiwiRiIsIkciLCJDIiwiY2hhckNvZGVBdCIsIk4iLCJ0cmltIiwiY2hhckF0IiwiY2EiLCJPIiwiQSIsIlgiLCJIIiwiRCIsInoiLCJkYSIsImVhIiwiZmEiLCJ3IiwiTCIsIlAiLCJZIiwiRSIsImhhIiwiUSIsImlhIiwiWiIsImphIiwia2EiLCJhYSIsImJhIiwibGEiLCJtYSIsIlIiLCJuYSIsIm9hIiwiUyIsIlQiLCJVIiwicHJlZml4IiwiViIsInVzZSIsInVuaXRsZXNzS2V5cyIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYm9yZGVySW1hZ2VPdXRzZXQiLCJib3JkZXJJbWFnZVNsaWNlIiwiYm9yZGVySW1hZ2VXaWR0aCIsImJveEZsZXgiLCJib3hGbGV4R3JvdXAiLCJib3hPcmRpbmFsR3JvdXAiLCJjb2x1bW5Db3VudCIsImNvbHVtbnMiLCJmbGV4IiwiZmxleEdyb3ciLCJmbGV4UG9zaXRpdmUiLCJmbGV4U2hyaW5rIiwiZmxleE5lZ2F0aXZlIiwiZmxleE9yZGVyIiwiZ3JpZFJvdyIsImdyaWRSb3dFbmQiLCJncmlkUm93U3BhbiIsImdyaWRSb3dTdGFydCIsImdyaWRDb2x1bW4iLCJncmlkQ29sdW1uRW5kIiwiZ3JpZENvbHVtblNwYW4iLCJncmlkQ29sdW1uU3RhcnQiLCJtc0dyaWRSb3ciLCJtc0dyaWRSb3dTcGFuIiwibXNHcmlkQ29sdW1uIiwibXNHcmlkQ29sdW1uU3BhbiIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwib3BhY2l0eSIsIm9yZGVyIiwib3JwaGFucyIsInRhYlNpemUiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwiV2Via2l0TGluZUNsYW1wIiwiZmlsbE9wYWNpdHkiLCJmbG9vZE9wYWNpdHkiLCJzdG9wT3BhY2l0eSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdpZHRoIiwibWVtb2l6ZSIsImZuIiwiY2FjaGUiLCJyZWFjdFByb3BzUmVnZXgiLCJpc1Byb3BWYWxpZCIsInJlYWN0SXMiLCJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZSIsImNvbnRleHRUeXBlcyIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsIktOT1dOX1NUQVRJQ1MiLCJjYWxsZXIiLCJjYWxsZWUiLCJhcml0eSIsIkZPUldBUkRfUkVGX1NUQVRJQ1MiLCJNRU1PX1NUQVRJQ1MiLCJjb21wYXJlIiwiVFlQRV9TVEFUSUNTIiwiZ2V0U3RhdGljcyIsImNvbXBvbmVudCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0UHJvdG90eXBlIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJ0YXJnZXRDb21wb25lbnQiLCJzb3VyY2VDb21wb25lbnQiLCJibGFja2xpc3QiLCJpbmhlcml0ZWRDb21wb25lbnQiLCJ0YXJnZXRTdGF0aWNzIiwic291cmNlU3RhdGljcyIsImRlc2NyaXB0b3IiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJzeW0iLCJfb2JqZWN0U3ByZWFkMiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX2NsYXNzQ2FsbENoZWNrIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9pbmhlcml0cyIsIl9nZXRQcm90b3R5cGVPZiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJOZXdUYXJnZXQiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwic3RyaW5ncyIsInJhdyIsImZyZWV6ZSIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9pIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJsZW4iLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwicmV0dXJuIiwiX3RlbXBsYXRlT2JqZWN0JDkiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiX3RlbXBsYXRlT2JqZWN0JDgiLCJTdmdCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJfdGVtcGxhdGVPYmplY3QkNyIsIl90ZW1wbGF0ZU9iamVjdDIiLCJMYWJlbCIsInNwYW4iLCJBcnJvdyIsIm9uQ2xpY2siLCJpbnZlcnRlZCIsImxhYmVsIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwiQXJyb3ckMSIsIl90ZW1wbGF0ZU9iamVjdCQ2IiwiQ2xvc2UiLCJhcmlhTGFiZWwiLCJyb2xlIiwiU3R5bGVkQ2xvc2UiLCJnZXROb2RlUmVjdCIsIl9ub2RlJGdldEJvdW5kaW5nQ2xpZSIsInJpZ2h0IiwiYm90dG9tIiwiZ2V0SGlnaGxpZ2h0ZWRSZWN0IiwiaGlnaGxpZ2h0ZWRTZWxlY3RvcnMiLCJhdHRycyIsIl9pdGVyYXRvciIsIl9zdGVwIiwic2VsZWN0b3IiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsInJlY3QiLCJpblZpZXciLCJpc0JvZHkiLCJpc0hvcml6IiwiaXNPdXRzaWRlWCIsIndpbmRvd1dpZHRoIiwiaXNPdXRzaWRlWSIsIndpbmRvd0hlaWdodCIsInNhZmUiLCJzdW0iLCJiZXN0UG9zaXRpb25PZiIsInBvc2l0aW9ucyIsIl90ZW1wbGF0ZU9iamVjdCQ1IiwiR3VpZGUiLCJkaXYiLCJhY2NlbnRDb2xvciIsImRlZmF1bHRTdHlsZXMiLCJyb3VuZGVkIiwidGFyZ2V0VG9wIiwidGFyZ2V0UmlnaHQiLCJ0YXJnZXRCb3R0b20iLCJ0YXJnZXRMZWZ0IiwiaGVscGVyV2lkdGgiLCJoZWxwZXJIZWlnaHQiLCJoZWxwZXJQb3NpdGlvbiIsImF2YWlsYWJsZSIsImNvdWxkUG9zaXRpb25BdCIsImF1dG9Qb3NpdGlvbiIsImNvb3JkcyIsInBvc2l0aW9uc09yZGVyIiwiY2VudGVyIiwiaXNPdXRYIiwiaXNPdXRZIiwiYXhpcyIsIm51bSIsImhYIiwiaFkiLCJyb3VuZCIsIl90ZW1wbGF0ZU9iamVjdCQ0IiwiQmFkZ2UiLCJfdGVtcGxhdGVPYmplY3QkMyIsIkNvbnRyb2xzIiwiX3RlbXBsYXRlT2JqZWN0JDIiLCJOYXZpZ2F0aW9uIiwibmF2IiwiX3RlbXBsYXRlT2JqZWN0JDEiLCJEb3QiLCJzaG93TnVtYmVyIiwiX3RlbXBsYXRlT2JqZWN0IiwiU3ZnTWFza1dyYXBwZXIiLCJtYXNrQ2xhc3NOYW1lIiwiU3ZnTWFzayIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0Iiwicm91bmRlZFN0ZXAiLCJkaXNhYmxlSW50ZXJhY3Rpb24iLCJkaXNhYmxlSW50ZXJhY3Rpb25DbGFzc05hbWUiLCJoaWdobGlnaHRlZEJvcmRlciIsInJvdW5kZWRSYWRpdXMiLCJ4bWxucyIsImN4IiwiY3kiLCJtYXNrIiwiY2xpcFBhdGgiLCJwb2ludGVyRXZlbnRzIiwiY29sb3IiLCJyeCIsIlJlYWN0b3VyUmVzaXplT2JzZXJ2ZXIiLCJyZWZyZXNoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIm11dGF0aW9uc0NvdW50ZXIiLCJzZXRNdXRhdGlvbnNDb3VudGVyIiwicmVzaXplT2JzZXJ2YWJsZXMiLCJpbmNyZW1lbnRNdXRhdGlvbnNDb3VudGVySWZPYnNlcnZhYmxlIiwiX2xvb3AiLCJhdHRyaWJ1dGVzIiwiZm91bmQiLCJmaW5kIiwib2JzZXJ2YWJsZSIsIm1hdGNoZXMiLCJfcmV0IiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm11dGF0aW9uIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNvbmZpZyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJkaXNjb25uZWN0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJSZWFjdG91ck11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbk9ic2VydmFibGVzIiwicmVmcmVzaEhpZ2hsaWdodGVkUmVnaW9uSWZPYnNlcnZhYmxlIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVBvcnRhbCIsImRpc2FibGVGb2N1c0xvY2siLCJiYWRnZUNvbnRlbnQiLCJoaWdobGlnaHRlZE1hc2tDbGFzc05hbWUiLCJjbG9zZUJ1dHRvbkFyaWFMYWJlbCIsImNsb3NlV2l0aE1hc2siLCJpblZpZXdUaHJlc2hvbGQiLCJpc09wZW4iLCJsYXN0U3RlcE5leHRCdXR0b24iLCJtYXNrU3BhY2UiLCJuZXh0QnV0dG9uIiwib25BZnRlck9wZW4iLCJvbkJlZm9yZUNsb3NlIiwib25SZXF1ZXN0Q2xvc2UiLCJwcmV2QnV0dG9uIiwic2Nyb2xsRHVyYXRpb24iLCJzY3JvbGxPZmZzZXQiLCJzaG93QnV0dG9ucyIsInNob3dDbG9zZUJ1dHRvbiIsInNob3dOYXZpZ2F0aW9uIiwic2hvd05hdmlnYXRpb25OdW1iZXIiLCJzdGFydEF0IiwiZ29Ub1N0ZXAiLCJnZXRDdXJyZW50U3RlcCIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJzdGVwcyIsImNvbnRlbnQiLCJzdGVwSW50ZXJhY3Rpb24iLCJuYXZEb3RBcmlhTGFiZWwiLCJ1cGRhdGUiLCJ1cGRhdGVEZWxheSIsImRpc2FibGVEb3RzTmF2aWdhdGlvbiIsImRpc2FibGVLZXlib2FyZE5hdmlnYXRpb24iLCJDTiIsImJhc2UiLCJoZWxwZXIiLCJkb3QiLCJhY3RpdmUiLCJUb3VyIiwiX0NvbXBvbmVudCIsIl9zdXBlciIsIl90aGlzIiwic2V0U3RhdGUiLCJmb2N1c1VubG9ja2VkIiwiX3RoaXMkc3RhdGUiLCJzdGVwQ2FsbGJhY2siLCJ1bmxvY2tGb2N1cyIsImNoYXJhY3RlckRhdGEiLCJwcmV2U3RhdGUiLCJtdXRhdGlvbnMiLCJjYWxjdWxhdGVOb2RlIiwiX2NiIiwic2V0Tm9kZVN0YXRlIiwiX3RoaXMkcHJvcHMiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInBhcmVudFNjcm9sbCIsInNjcm9sbFNtb290aCIsIm5kIiwiX3RoaXMkcHJvcHMyIiwiX3RoaXMkcHJvcHMzIiwic2hvd1N0ZXAiLCJfdGhpcyRwcm9wczQiLCJfdGhpcyRwcm9wczUiLCJpc0VzY0Rpc2FibGVkIiwiaXNSaWdodERpc2FibGVkIiwiaXNMZWZ0RGlzYWJsZWQiLCJpbmNsdWRlcyIsImtleUNvZGUiLCJpbkRPTSIsImNyZWF0ZVJlZiIsImhlbHBlckVsZW1lbnQiLCJkZWJvdW5jZWRTaG93U3RlcCIsIl90aGlzJHByb3BzNiIsIm9wZW4iLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIl90aGlzJHByb3BzNyIsImNsb3NlIiwiZ290b1N0ZXAiLCJfdGhpczIiLCJrZXlEb3duSGFuZGxlciIsIl90aGlzMyIsIl90aGlzJHByb3BzOCIsIkN1c3RvbUhlbHBlciIsIl90aGlzJHN0YXRlMiIsInJlY2FsY3VsYXRlTm9kZSIsIm1hc2tDbGlja0hhbmRsZXIiLCJjbiIsInRvdGFsU3RlcHMiLCJnb1RvIiwiQ29tcG9uZW50IiwiX2h4JGdldE5vZGVSZWN0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxVQUFVLEdBQUcsc0JBQXNCLENBQUE7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxtQkFBbUJBLEdBQUk7RUFDNUIsSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVmQyxFQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVQyxDQUFDLEVBQUU7SUFDOUNILElBQUksQ0FBQ0ksZUFBZSxHQUFHLElBQUksQ0FBQTtHQUM5QixFQUFFLElBQUksQ0FBQyxDQUFBO0FBRVJILEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVVDLENBQUMsRUFBRTtJQUNoREgsSUFBSSxDQUFDSSxlQUFlLEdBQUcsS0FBSyxDQUFBO0dBQy9CLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFUkgsRUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUcsS0FBSyxFQUFFO0FBQ2hEO0lBQ0FMLElBQUksQ0FBQ00sZ0JBQWdCLEVBQUUsQ0FBQTtHQUMxQixFQUFFLElBQUksQ0FBQyxDQUFBO0FBRVJMLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVVHLEtBQUssRUFBRTtJQUNuREUsTUFBTSxDQUFDQyxVQUFVLENBQUMsWUFBWTtBQUMxQixNQUFBLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxRQUFRLEVBQUUsRUFBRTtRQUN0QlQsSUFBSSxDQUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQzNCSixJQUFJLENBQUNNLGdCQUFnQixFQUFF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