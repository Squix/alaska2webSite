module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04ok":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.removeHash = exports.goToAnchor = exports.configureAnchors = exports.goToTop = undefined;

var _hash = __webpack_require__("Juha");

Object.defineProperty(exports, 'goToAnchor', {
  enumerable: true,
  get: function get() {
    return _hash.updateHash;
  }
});
Object.defineProperty(exports, 'removeHash', {
  enumerable: true,
  get: function get() {
    return _hash.removeHash;
  }
});

var _ScrollableAnchor = __webpack_require__("Ng2D");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollableAnchor).default;
  }
});

var _Manager = __webpack_require__("EU+F");

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var goToTop = exports.goToTop = _Manager2.default.goToTop;
var configureAnchors = exports.configureAnchors = _Manager2.default.configure;

/***/ }),

/***/ "1N2d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4505bafd0f626c80687e154efad2adde.png";

/***/ }),

/***/ "1fop":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2BZT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__("oCjY");

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token, options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "C9JE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d7ea0ef080bf3093f5de483bab4e62af.png";

/***/ }),

/***/ "EU+F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _jump = __webpack_require__("lr2X");

var _jump2 = _interopRequireDefault(_jump);

var _func = __webpack_require__("KU3i");

var _scroll = __webpack_require__("pCT7");

var _hash = __webpack_require__("Juha");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultConfig = {
  offset: 0,
  scrollDuration: 400,
  keepLastAnchorHash: false
};

var Manager = function Manager() {
  var _this = this;

  _classCallCheck(this, Manager);

  this.addListeners = function () {
    window.addEventListener('scroll', _this.scrollHandler, false);
    window.addEventListener('hashchange', _this.handleHashChange);
  };

  this.removeListeners = function () {
    window.removeEventListener('scroll', _this.scrollHandler, false);
    window.removeEventListener('hashchange', _this.handleHashChange);
  };

  this.configure = function (config) {
    _this.config = _extends({}, defaultConfig, config);
  };

  this.goToTop = function () {
    if ((0, _scroll.getScrollTop)() === 0) return;
    _this.forcedHash = true;
    window.scroll(0, 0);
  };

  this.addAnchor = function (id, component) {
    // if this is the first anchor, set up listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.addListeners();
    }
    _this.forceHashUpdate();
    _this.anchors[id] = component;
  };

  this.removeAnchor = function (id) {
    delete _this.anchors[id];
    // if this is the last anchor, remove listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.removeListeners();
    }
  };

  this.handleScroll = function () {
    var _config = _this.config,
        offset = _config.offset,
        keepLastAnchorHash = _config.keepLastAnchorHash;

    var bestAnchorId = (0, _scroll.getBestAnchorGivenScrollLocation)(_this.anchors, offset);

    if (bestAnchorId && (0, _hash.getHash)() !== bestAnchorId) {
      _this.forcedHash = true;
      (0, _hash.updateHash)(bestAnchorId, false);
    } else if (!bestAnchorId && !keepLastAnchorHash) {
      (0, _hash.removeHash)();
    }
  };

  this.handleHashChange = function (e) {
    if (_this.forcedHash) {
      _this.forcedHash = false;
    } else {
      _this.goToSection((0, _hash.getHash)());
    }
  };

  this.goToSection = function (id) {
    var element = _this.anchors[id];
    if (element) {
      (0, _jump2.default)(element, {
        duration: _this.config.scrollDuration,
        offset: _this.config.offset
      });
    } else {
      // make sure that standard hash anchors don't break.
      // simply jump to them.
      element = document.getElementById(id);
      if (element) {
        (0, _jump2.default)(element, {
          duration: 0,
          offset: _this.config.offset
        });
      }
    }
  };

  this.anchors = {};
  this.forcedHash = false;
  this.config = defaultConfig;

  this.scrollHandler = (0, _func.debounce)(this.handleScroll, 100);
  this.forceHashUpdate = (0, _func.debounce)(this.handleHashChange, 1);
};

exports.default = new Manager();

/***/ }),

/***/ "G3al":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IvUu":
/***/ (function(module, exports) {

/**
 * Make a json async request
 * @param  {String} uri     API route
 * @param  {String} method  HTTP method
 * @param  {Object} options optional parameters
 * @return {Promise}
 */
var myFetch = function myFetch(uri, method, body) {
  var init = {
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    },
    method: method
  };

  if (body) {
    init.body = JSON.stringify(body);
  }

  return fetch(uri, init);
};

module.exports = { myFetch: myFetch };

/***/ }),

/***/ "JZ8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var actions_namespaceObject = {};
__webpack_require__.d(actions_namespaceObject, "toggleSideNav", function() { return toggleSideNav; });
__webpack_require__.d(actions_namespaceObject, "toggleLoginModal", function() { return toggleLoginModal; });
__webpack_require__.d(actions_namespaceObject, "toggleResetModal", function() { return toggleResetModal; });
__webpack_require__.d(actions_namespaceObject, "closeToast", function() { return closeToast; });
__webpack_require__.d(actions_namespaceObject, "createToast", function() { return createToast; });
__webpack_require__.d(actions_namespaceObject, "loginSuccess", function() { return loginSuccess; });
__webpack_require__.d(actions_namespaceObject, "registerSuccess", function() { return registerSuccess; });
__webpack_require__.d(actions_namespaceObject, "logout", function() { return logout; });
__webpack_require__.d(actions_namespaceObject, "loadLastSubmission", function() { return loadLastSubmission; });
__webpack_require__.d(actions_namespaceObject, "handleResetToken", function() { return handleResetToken; });
__webpack_require__.d(actions_namespaceObject, "fetchSubmissionsSuccess", function() { return fetchSubmissionsSuccess; });
__webpack_require__.d(actions_namespaceObject, "switchLeaderboardTab", function() { return switchLeaderboardTab; });
__webpack_require__.d(actions_namespaceObject, "fetchStagesSuccess", function() { return fetchStagesSuccess; });
__webpack_require__.d(actions_namespaceObject, "fetchSubmissions", function() { return actions_fetchSubmissions; });
__webpack_require__.d(actions_namespaceObject, "sendNewPassword", function() { return actions_sendNewPassword; });
__webpack_require__.d(actions_namespaceObject, "submit", function() { return actions_submit; });
__webpack_require__.d(actions_namespaceObject, "resendConfirmationEmail", function() { return actions_resendConfirmationEmail; });
__webpack_require__.d(actions_namespaceObject, "resetPassword", function() { return actions_resetPassword; });
__webpack_require__.d(actions_namespaceObject, "logoutUI", function() { return logoutUI; });
__webpack_require__.d(actions_namespaceObject, "loginBack", function() { return loginBack; });
__webpack_require__.d(actions_namespaceObject, "fetchStages", function() { return actions_fetchStages; });
__webpack_require__.d(actions_namespaceObject, "login", function() { return actions_login; });
__webpack_require__.d(actions_namespaceObject, "register", function() { return actions_register; });
__webpack_require__.d(actions_namespaceObject, "sendVerificationtToken", function() { return actions_sendVerificationtToken; });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-context/dist/esm/context.js + 3 modules
var esm_context = __webpack_require__("Z7XJ");

// EXTERNAL MODULE: ../node_modules/symbol-observable/es/index.js
var es = __webpack_require__("LkZ7");

// CONCATENATED MODULE: ../node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */

  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */

  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */

function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}


// CONCATENATED MODULE: ../node_modules/preact-redux/dist/preact-redux.esm.js




function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function invariant() {}

var React = {
  createContext: esm_context["a" /* createContext */],
  forwardRef: invariant,
  createElement: preact_min["h"]
};

var ReactReduxContext = React.createContext(null);

var Provider = function (_Component) {
  _inheritsLoose(Provider, _Component);
  function Provider(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var store = props.store;
    _this.state = {
      storeState: store.getState(),
      store: store
    };
    return _this;
  }
  var _proto = Provider.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.subscribe();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    this._isMounted = false;
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      if (this.unsubscribe) this.unsubscribe();
      this.subscribe();
    }
  };
  _proto.subscribe = function subscribe() {
    var _this2 = this;
    var store = this.props.store;
    this.unsubscribe = store.subscribe(function () {
      var newStoreState = store.getState();
      if (!_this2._isMounted) {
        return;
      }
      _this2.setState(function (providerState) {
        if (providerState.storeState === newStoreState) {
          return null;
        }
        return {
          storeState: newStoreState
        };
      });
    });
    var postMountStoreState = store.getState();
    if (postMountStoreState !== this.state.storeState) {
      this.setState({
        storeState: postMountStoreState
      });
    }
  };
  _proto.render = function render() {
    var Context = this.props.context || ReactReduxContext;
    return React.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  };
  return Provider;
}(preact_min["Component"]);

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var c = 60103,
      d = 60106,
      e = 60107,
      f = 60108,
      g = 60114,
      h = 60109,
      k = 60110,
      l = 60111,
      m = 60111,
      n = 60112,
      p = 60113,
      q = 60115,
      r = 60116;
  function t(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case r:
        case q:
        case d:
          return u;
      }
    }
  }
  function v(a) {
    return t(a) === m;
  }
  exports.typeOf = t;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = r;
  exports.Memo = q;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;
  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === typeof a && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
  };
  exports.isAsyncMode = function (a) {
    return v(a) || t(a) === l;
  };
  exports.isConcurrentMode = v;
  exports.isContextConsumer = function (a) {
    return t(a) === k;
  };
  exports.isContextProvider = function (a) {
    return t(a) === h;
  };
  exports.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  exports.isForwardRef = function (a) {
    return t(a) === n;
  };
  exports.isFragment = function (a) {
    return t(a) === e;
  };
  exports.isLazy = function (a) {
    return t(a) === r;
  };
  exports.isMemo = function (a) {
    return t(a) === q;
  };
  exports.isPortal = function (a) {
    return t(a) === d;
  };
  exports.isProfiler = function (a) {
    return t(a) === g;
  };
  exports.isStrictMode = function (a) {
    return t(a) === f;
  };
  exports.isSuspense = function (a) {
    return t(a) === p;
  };
});
unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs = createCommonjsModule(function (module) {
  {
    module.exports = reactIs_production_min;
  }
});
var reactIs_1 = reactIs.isValidElementType;
var reactIs_2 = reactIs.isContextConsumer;

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
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
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
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
    return targetComponent;
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

function connectAdvanced(selectorFactory, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === void 0 ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === void 0 ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === void 0 ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === void 0 ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      _ref$forwardRef = _ref.forwardRef,
      forwardRef = _ref$forwardRef === void 0 ? false : _ref$forwardRef,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? ReactReduxContext : _ref$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
  var customStoreWarningMessage = 'To use a custom Redux store for specific components,  create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });
    var pure = connectOptions.pure;
    var OuterBaseComponent = preact_min["Component"];
    if (pure) {
      OuterBaseComponent = preact_min["Component"];
    }
    function makeDerivedPropsSelector() {
      var lastProps;
      var lastState;
      var lastDerivedProps;
      var lastStore;
      var lastSelectorFactoryOptions;
      var sourceSelector;
      return function selectDerivedProps(state, props, store, selectorFactoryOptions) {
        if (pure && lastProps === props && lastState === state) {
          return lastDerivedProps;
        }
        if (store !== lastStore || lastSelectorFactoryOptions !== selectorFactoryOptions) {
          lastStore = store;
          lastSelectorFactoryOptions = selectorFactoryOptions;
          sourceSelector = selectorFactory(store.dispatch, selectorFactoryOptions);
        }
        lastProps = props;
        lastState = state;
        var nextProps = sourceSelector(state, props);
        lastDerivedProps = nextProps;
        return lastDerivedProps;
      };
    }
    function makeChildElementSelector() {
      var lastChildProps, lastForwardRef, lastChildElement, lastComponent;
      return function selectChildElement(WrappedComponent, childProps, forwardRef) {
        if (childProps !== lastChildProps || forwardRef !== lastForwardRef || lastComponent !== WrappedComponent) {
          lastChildProps = childProps;
          lastForwardRef = forwardRef;
          lastComponent = WrappedComponent;
          lastChildElement = React.createElement(WrappedComponent, _extends({}, childProps, {
            ref: forwardRef
          }));
        }
        return lastChildElement;
      };
    }
    var Connect = function (_OuterBaseComponent) {
      _inheritsLoose(Connect, _OuterBaseComponent);
      function Connect(props) {
        var _this;
        _this = _OuterBaseComponent.call(this, props) || this;
        invariant(forwardRef ? !props.wrapperProps[storeKey] : !props[storeKey], 'Passing redux store in props has been removed and does not do anything. ' + customStoreWarningMessage);
        _this.selectDerivedProps = makeDerivedPropsSelector();
        _this.selectChildElement = makeChildElementSelector();
        _this.indirectRenderWrappedComponent = _this.indirectRenderWrappedComponent.bind(_assertThisInitialized(_this));
        return _this;
      }
      var _proto = Connect.prototype;
      _proto.indirectRenderWrappedComponent = function indirectRenderWrappedComponent(value) {
        return this.renderWrappedComponent(value);
      };
      _proto.renderWrappedComponent = function renderWrappedComponent(value) {
        var storeState = value.storeState,
            store = value.store;
        var wrapperProps = this.props;
        var forwardedRef;
        if (forwardRef) {
          wrapperProps = this.props.wrapperProps;
          forwardedRef = this.props.forwardedRef;
        }
        var derivedProps = this.selectDerivedProps(storeState, wrapperProps, store, selectorFactoryOptions);
        return this.selectChildElement(WrappedComponent, derivedProps, forwardedRef);
      };
      _proto.render = function render() {
        var ContextToUse = this.props.context && this.props.context.Consumer && reactIs_2(React.createElement(this.props.context.Consumer, null)) ? this.props.context : Context;
        return React.createElement(ContextToUse.Consumer, null, this.indirectRenderWrappedComponent);
      };
      return Connect;
    }(OuterBaseComponent);
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    if (forwardRef) {
      var forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        return React.createElement(Connect, {
          wrapperProps: props,
          forwardedRef: ref
        });
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
    }
    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
  };
}

var hasOwn = Object.prototype.hasOwnProperty;
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      return props;
    };
    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}
var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }
  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a, b) {
  return a === b;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === void 0 ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === void 0 ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === void 0 ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === void 0 ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === void 0 ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref2, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      methodName: 'connect',
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      shouldHandleStateChanges: Boolean(mapStateToProps),
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
var connect = createConnect();

var index = {
  Provider: Provider,
  connect: connect,
  connectAdvanced: connectAdvanced,
  ReactReduxContext: ReactReduxContext
};

/* harmony default export */ var preact_redux_esm = (index);

//# sourceMappingURL=preact-redux.esm.js.map
// CONCATENATED MODULE: ./reducer.js
var reducer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  showSideNav: false,
  showLoginModal: false,
  showResetModal: false,
  toasts: [],
  jwtPayload: null,
  lastSubmission: null,
  resetToken: null,
  activeTab: 1,
  submissions1: [],
  submissions2: [],
  stages: []
};

var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE_SIDE_NAV':
      return reducer__extends({}, state, {
        showSideNav: !state.showSideNav
      });
    case 'TOGGLE_LOGIN_MODAL':
      return reducer__extends({}, state, {
        showLoginModal: !state.showLoginModal
      });
    case 'TOGGLE_RESET_MODAL':
      return reducer__extends({}, state, {
        showResetModal: !state.showResetModal
      });
    case 'REGISTER_SUCCESS':
      return reducer__extends({}, state, {
        showLoginModal: false
      });
    case 'LOGIN_SUCCESS':
      return reducer__extends({}, state, {
        showLoginModal: false,
        jwtPayload: action.jwtPayload
      });
    case 'LOGOUT':
      return reducer__extends({}, state, {
        jwtPayload: null
      });
    case 'CLOSE_TOAST':
      return reducer__extends({}, state, {
        toasts: state.toasts.filter(function (e, i) {
          return i !== action.key;
        })
      });
    case 'CREATE_TOAST':
      return reducer__extends({}, state, {
        toasts: state.toasts.concat([{ type: action.toastType, text: action.toastText }])
      });
    case 'LOAD_LAST_SUBMISSION':
      return reducer__extends({}, state, {
        lastSubmission: action.sub
      });
    case 'HANDLE_RESET_TOKEN':
      return reducer__extends({}, state, {
        resetToken: action.token,
        showResetModal: true
      });
    case 'FETCH_SUBMISSIONS_SUCCESS':
      return reducer__extends({}, state, {
        submissions1: action.submissions.filter(function (s) {
          return s.stage === 1;
        }),
        submissions2: action.submissions.filter(function (s) {
          return s.stage === 2;
        }),
        submissions3: action.submissions.filter(function (s) {
          return s.stage === 3;
        })
      });
    case 'SWITCH_LEADERBOARD_TAB':
      return reducer__extends({}, state, {
        activeTab: state.activeTab === 1 ? 2 : state.activeTab === 2 ? 3 : 1
      });
    case 'FETCH_STAGES_SUCCESS':
      var activeTab = 3;
      return reducer__extends({}, state, {
        stages: action.stages,
        activeTab: activeTab
        //      return Object.assign({}, state, {
        //        stages: action.stages
      });
    default:
      return state;
  }
};

/* harmony default export */ var reducer_0 = (reducer_reducer);
// CONCATENATED MODULE: ../node_modules/redux-thunk/es/index.js
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ var redux_thunk_es = (thunk);
// EXTERNAL MODULE: ./helpers/fetch.js
var fetch = __webpack_require__("IvUu");
var fetch_default = /*#__PURE__*/__webpack_require__.n(fetch);

// CONCATENATED MODULE: ./actions.js
var jwtDecode = __webpack_require__("2BZT");


function toggleSideNav() {
  return { type: 'TOGGLE_SIDE_NAV' };
}

function toggleLoginModal() {
  return { type: 'TOGGLE_LOGIN_MODAL' };
}

function toggleResetModal() {
  return { type: 'TOGGLE_RESET_MODAL' };
}

function closeToast(key) {
  return { type: 'CLOSE_TOAST', key: key };
}

function createToast(toastType, toastText) {
  return { type: 'CREATE_TOAST', toastType: toastType, toastText: toastText };
}

function loginSuccess(jwt, jwtPayload) {
  localStorage.setItem('jwt', jwt);
  return { type: 'LOGIN_SUCCESS', jwt: jwt, jwtPayload: jwtPayload };
}

function registerSuccess() {
  return { type: 'REGISTER_SUCCESS' };
}

function logout() {
  localStorage.removeItem('jwt');
  return { type: 'LOGOUT' };
}

function loadLastSubmission(sub) {
  return { type: 'LOAD_LAST_SUBMISSION', sub: sub };
}

function handleResetToken(token) {
  return { type: 'HANDLE_RESET_TOKEN', token: token };
}

function fetchSubmissionsSuccess(submissions) {
  return { type: 'FETCH_SUBMISSIONS_SUCCESS', submissions: submissions };
}

function switchLeaderboardTab() {
  return { type: 'SWITCH_LEADERBOARD_TAB' };
}

function fetchStagesSuccess(stages) {
  return { type: 'FETCH_STAGES_SUCCESS', stages: stages };
}

var actions_fetchSubmissions = function fetchSubmissions() {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/submission', 'GET').then(function (response) {
      response.json().then(function (body) {
        if (response.ok) {
          dispatch(fetchSubmissionsSuccess(body.submissions));
        }
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_sendNewPassword = function sendNewPassword(token, password) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/auth/reset/callback', 'POST', { token: token, password: password }).then(function (response) {
      response.json().then(function (body) {
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
        if (response.ok) {
          dispatch(toggleResetModal());
        }
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_submit = function submit(value) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/submission', 'POST', { value: value }).then(function (response) {
      response.json().then(function (body) {
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
        if (response.ok) {
          localStorage.setItem('lastSubmission', JSON.stringify(body.sub));
          dispatch(loadLastSubmission(body.sub));
        }
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_resendConfirmationEmail = function resendConfirmationEmail(email) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/auth/register/email', 'POST', { email: email }).then(function (response) {
      response.json().then(function (body) {
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_resetPassword = function resetPassword(email) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/auth/reset', 'POST', { email: email }).then(function (response) {
      response.json().then(function (body) {
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var logoutUI = function logoutUI() {
  return function (dispatch) {
    dispatch(logout());
    dispatch(createToast('success', 'Bye !'));
  };
};

var loginBack = function loginBack(jwt) {
  var payload = jwtDecode(jwt);
  return function (dispatch) {
    dispatch(loginSuccess(jwt, payload));
    dispatch(createToast('success', 'Welcome back ! You\'re logged as ' + payload.email + ' '));
  };
};

var actions_fetchStages = function fetchStages() {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/stage', 'GET').then(function (response) {
      response.json().then(function (body) {
        if (response.ok) dispatch(fetchStagesSuccess(body.stages));
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_login = function login(body) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/auth/login', 'POST', body).then(function (response) {
      response.json().then(function (body) {
        if (response.ok) dispatch(loginSuccess(body.token, jwtDecode(body.token)));
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_register = function register(body) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/auth/register', 'POST', body).then(function (response) {
      response.json().then(function (body) {
        if (response.ok) dispatch(registerSuccess());
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};

var actions_sendVerificationtToken = function sendVerificationtToken(token) {
  return function (dispatch) {
    Object(fetch["myFetch"])('/api/auth/register/callback', 'POST', { token: token }).then(function (response) {
      response.json().then(function (body) {
        dispatch(createToast(response.ok ? 'success' : 'error', body.message));
      });
    }).catch(function (_) {
      return dispatch(createToast('error', 'Fetch error'));
    });
  };
};
// CONCATENATED MODULE: ./components/navItem.js
var _dec, _class;



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var navItem_navItem = (_dec = connect(reducer_0, actions_namespaceObject), _dec(_class = function (_Component) {
  _inherits(navItem, _Component);

  function navItem() {
    _classCallCheck(this, navItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  navItem.prototype.closeSideNav = function closeSideNav() {
    if (this.props.showSideNav) {
      this.props.toggleSideNav();
    }
  };

  navItem.prototype.render = function render(_ref, _ref2) {
    var showSideNav = _ref.showSideNav;

    _objectDestructuringEmpty(_ref2);

    return Object(preact_min["h"])(
      'li',
      { 'class': 'nav-item' },
      Object(preact_min["h"])(
        'a',
        { 'class': 'nav-link', href: '#' + this.props.itemId, onClick: this.closeSideNav.bind(this) },
        this.props.text
      )
    );
  };

  return navItem;
}(preact_min["Component"])) || _class);


/* harmony default export */ var components_navItem = (navItem_navItem);
// CONCATENATED MODULE: ./components/nav.js
var nav__dec, nav__class;



function nav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nav__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function nav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var nav__ref = Object(preact_min["h"])(
  'a',
  { 'class': 'navbar-brand', href: '#top' },
  'ALASKA'
);

var nav__ref2 = Object(preact_min["h"])('i', { 'class': 'oi oi-menu' });

var _ref3 = Object(preact_min["h"])(components_navItem, { itemId: 'about', text: 'About' });

var _ref4 = Object(preact_min["h"])(components_navItem, { itemId: 'timeline', text: 'Timeline' });

var _ref5 = Object(preact_min["h"])(components_navItem, { itemId: 'material', text: 'Material' });

var _ref6 = Object(preact_min["h"])(components_navItem, { itemId: 'rules', text: 'Rules' });

var _ref7 = Object(preact_min["h"])(components_navItem, { itemId: 'HallOfFame', text: 'Hall of Fame' });

var _ref8 = Object(preact_min["h"])(components_navItem, { itemId: 'acknowledgements', text: 'Acknowledgements' });

var nav_Nav = (nav__dec = connect(reducer_0, actions_namespaceObject), nav__dec(nav__class = function (_Component) {
  nav__inherits(Nav, _Component);

  function Nav() {
    var _temp, _this, _ret;

    nav__classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = nav__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onScroll = function () {
      _this.setState({
        black: window.pageYOffset >= 100
      });
    }, _temp), nav__possibleConstructorReturn(_this, _ret);
  }

  Nav.prototype.componentDidMount = function componentDidMount() {
    addEventListener('scroll', this.onScroll);
  };

  Nav.prototype.componentWillUnmount = function componentWillUnmount() {
    removeEventListener('scroll', this.onScroll);
  };

  Nav.prototype.redirectToBlog = function redirectToBlog() {
    window.location.replace('http://alaska.utt.fr/blog.html');
  };

  Nav.prototype.render = function render() {
    return Object(preact_min["h"])(
      'nav',
      { 'class': 'navbar navbar-expand-lg navbar-light fixed-top ' + (this.state.black ? 'navbar-shrink' : ''), id: 'mainNav' },
      nav__ref,
      Object(preact_min["h"])(
        'button',
        { 'class': 'navbar-toggler navbar-toggler-right', onClick: this.props.toggleSideNav },
        nav__ref2
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'collapse navbar-collapse ' + (this.props.showSideNav ? 'show' : '') },
        Object(preact_min["h"])(
          'ul',
          { 'class': 'navbar-nav mr-auto' },
          _ref3,
          _ref4,
          _ref5,
          _ref6,
          _ref7,
          _ref8,
          Object(preact_min["h"])(
            'li',
            { 'class': 'nav-item' },
            Object(preact_min["h"])(
              'a',
              { 'class': 'nav-link', onClick: this.redirectToBlog },
              'Blog'
            )
          )
        ),
        this.props.jwtPayload ? Object(preact_min["h"])(
          'button',
          { onClick: this.props.logoutUI, 'class': 'btn btn-outline-danger', type: 'button' },
          'Logout'
        ) : Object(preact_min["h"])(
          'button',
          { onClick: this.props.toggleLoginModal, 'class': 'btn btn-outline-light', type: 'button' },
          'Login'
        )
      )
    );
  };

  return Nav;
}(preact_min["Component"])) || nav__class);


/* harmony default export */ var nav = (nav_Nav);
// EXTERNAL MODULE: ../node_modules/react-scrollable-anchor/lib/index.js
var lib = __webpack_require__("04ok");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/header.js


function header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function header__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var header__ref = Object(preact_min["h"])(
  'header',
  { 'class': 'masthead' },
  Object(preact_min["h"])(
    lib_default.a,
    { id: 'top' },
    Object(preact_min["h"])(
      'div',
      { 'class': 'intro-body' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'container' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'row' },
          Object(preact_min["h"])(
            'div',
            { 'class': 'col-lg-8 mx-auto' },
            Object(preact_min["h"])(
              'p',
              { 'class': 'intro-text' },
              Object(preact_min["h"])(
                'h1',
                { 'class': 'headline' },
                'Alaska#2'
              ),
              Object(preact_min["h"])('br', null),
              'The follow-up steganalysis challenge "into the wild".',
              Object(preact_min["h"])('br', null),
              'Because it is a long and perilous walk to move steganalysis...',
              Object(preact_min["h"])('br', null),
              'from research labs to real life conditions.'
            ),
            Object(preact_min["h"])(
              'a',
              { href: '#about', 'class': 'btn btn-circle js-scroll-trigger' },
              Object(preact_min["h"])('span', { 'class': 'oi oi-chevron-bottom', title: 'chevron-bottom' })
            )
          )
        )
      )
    )
  )
);

var Header = function (_Component) {
  header__inherits(Header, _Component);

  function Header() {
    header__classCallCheck(this, Header);

    return header__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return header__ref;
  };

  return Header;
}(preact_min["Component"]);

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./components/list.js


function list__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function list__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var list_List = function (_Component) {
  list__inherits(List, _Component);

  function List() {
    list__classCallCheck(this, List);

    return list__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  List.prototype.render = function render() {
    return Object(preact_min["h"])(
      "div",
      null,
      this.props.text,
      Object(preact_min["h"])(
        "ul",
        { "class": "custom-list" },
        this.props.elements.map(function (element) {
          return Object(preact_min["h"])(
            "li",
            { "class": "custom-list-item" },
            element
          );
        })
      )
    );
  };

  return List;
}(preact_min["Component"]);

/* harmony default export */ var components_list = (list_List);
// CONCATENATED MODULE: ./components/rules.js


function rules__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rules__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function rules__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var rules__ref = Object(preact_min["h"])(
  'div',
  null,
  'Submission can be made only throughout ',
  Object(preact_min["h"])(
    'a',
    { href: 'https://www.kaggle.com/competitions' },
    'the Kaggle Competitions website'
  ),
  '.'
);

var rules__ref2 = Object(preact_min["h"])(
  'div',
  null,
  'Total ',
  Object(preact_min["h"])(
    'b',
    null,
    'cash price is $25,000'
  ),
  ' to be shared between the three best performers.',
  Object(preact_min["h"])('br', null),
  'The ranking of submission is made by weighting the area under the ROC curve to ',
  Object(preact_min["h"])(
    'b',
    null,
    'focus on detection accuracy for low false probability'
  ),
  '.',
  Object(preact_min["h"])('br', null),
  'Those winners will be asked to provide the source code of their detectors to get their price.',
  Object(preact_min["h"])('br', null),
  'We strongly encourage the five top-scoring teams to propose a paper to ',
  Object(preact_min["h"])(
    'a',
    { href: 'https://www.wifs2020.nyu.edu/' },
    'WIFS 2020'
  ),
  ' ; a $3000 travel grant will be offered by the IEEE for accepted papers.'
);

var rules__ref3 = Object(preact_min["h"])(
  'div',
  null,
  'Until the official competition is running, no information will be provided from the present website. All detail are available on ',
  Object(preact_min["h"])(
    'a',
    { href: 'https://www.kaggle.com/competitions' },
    'the Kaggle Competitions website'
  ),
  '.',
  Object(preact_min["h"])('br', null),
  'The present website will allow users to download the datasets and submit their proposal, for longterm benchmarking, ',
  Object(preact_min["h"])(
    'b',
    null,
    'once the official challenge will be over'
  ),
  ' (to avoid providing side informations) ; for this users must create an account.',
  Object(preact_min["h"])('br', null),
  'Those accounts will only be used for statistical purposes and communications will be made only regarding the ALASKA challenge.'
);

var rules__ref4 = Object(preact_min["h"])(
  'h2',
  { 'class': 'text-center' },
  'Rules'
);

var rules_Rules = function (_Component) {
  rules__inherits(Rules, _Component);

  function Rules() {
    rules__classCallCheck(this, Rules);

    return rules__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Rules.prototype.render = function render() {
    var list = {
      text: 'The contest will take place over spring and summer 2020 lasting about 3 months in total. The rules are the following :',
      elements: [rules__ref, rules__ref2, rules__ref3]
    };

    return Object(preact_min["h"])(
      lib_default.a,
      { id: 'rules' },
      Object(preact_min["h"])(
        'section',
        { 'class': 'content-section text-center' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'container' },
          Object(preact_min["h"])(
            'div',
            { 'class': 'row' },
            Object(preact_min["h"])(
              'div',
              { 'class': 'col-lg-10 margin-auto' },
              rules__ref4,
              Object(preact_min["h"])(
                'div',
                { 'class': 'text-justify' },
                Object(preact_min["h"])(
                  'p',
                  null,
                  Object(preact_min["h"])(components_list, list)
                )
              )
            )
          )
        )
      )
    );
  };

  return Rules;
}(preact_min["Component"]);

/* harmony default export */ var rules = (rules_Rules);
// CONCATENATED MODULE: ./components/acknowledgements.js


function acknowledgements__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function acknowledgements__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function acknowledgements__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var acknowledgements__ref = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'a',
    { href: 'https://dl.acm.org/citation.cfm?id=3335726' },
    'The ALASKA Steganalysis Challenge: A First Step Towards Steganalysis ``into the wild\'\'.'
  ),
  ', Published in the 7th ACM IH&MMSec conference.'
);

var acknowledgements__ref2 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'a',
    { href: 'http://lm2s.utt.fr/en/_plugins/mypage/mypage/content/cogrannr.html' },
    'R\xE9mi Cogranne'
  ),
  ', from Troyes University of Technology.'
);

var acknowledgements__ref3 = Object(preact_min["h"])(
  'div',
  null,
  'Quentin Giboulot, from Troyes University of Technology (PhD student of R\xE9mi Cogranne and Patrick Bas, who did not really choose to be part of the organization but enjoyed it).'
);

var acknowledgements__ref4 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'a',
    { href: 'http://patrickbas.ec-lille.fr/Patrick_Bas_home_page/Home_Page.html' },
    'Patrick Bas'
  ),
  ', from \xC9cole central de Lille.'
);

var acknowledgements__ref5 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'a',
    { href: 'https://www.linkedin.com/in/antoine-prudhomme/' },
    'Antoine Prudhomme'
  ),
  ', for creating the present website.'
);

var acknowledgements__ref6 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'a',
    { href: 'https://jflamant.github.io/' },
    'Julien Flamant'
  ),
  ', Jean-Baptiste Gobin, Bertrand De La Morlais, Florent Pergoud, Luc Rodrigues, Pascal Royer and Emile Touron for kindly provide some of their raw images as well as Dirk Borghys for the joint work on assessment of impact of raw images development on steganalysis performance (that gives birth to ALASKA dataset and challenge).'
);

var acknowledgements__ref7 = Object(preact_min["h"])(
  'div',
  null,
  'The computer resources department of Troyes University of Technology who helped us with all their advices and suggestions.'
);

var acknowledgements__ref8 = Object(preact_min["h"])(
  'h2',
  { 'class': 'text-center' },
  'Acknowledgements'
);

var acknowledgements_Acknowledgements = function (_Component) {
  acknowledgements__inherits(Acknowledgements, _Component);

  function Acknowledgements() {
    acknowledgements__classCallCheck(this, Acknowledgements);

    return acknowledgements__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Acknowledgements.prototype.render = function render() {
    var list0 = {
      text: 'As indicated in the Material section you are free to download and use for any non-commercial purposes all datasets that are made available on this website.\n        This especially includes the raw and processed images dataset as well as all conversion scripts in order to create any custom dataset that fits your need.\n        We however kindly ask you to credit our (enormous work) by either referng to the alaska website or, more relevant, to simply cite one of the associated paper :',
      elements: [acknowledgements__ref]
    };

    var list1 = {
      text: 'The ALASKA contest has been, in part, inspired by the BOSS competition and has been jointly and proudly organized by:',
      elements: [acknowledgements__ref2, acknowledgements__ref3, acknowledgements__ref4]
    };

    var list2 = {
      text: 'We would like to thank all the individuals that help us organizing this contest. Those are mainly (but\n        not exclusively):',
      elements: [acknowledgements__ref5, acknowledgements__ref6, acknowledgements__ref7]
    };

    return Object(preact_min["h"])(
      lib_default.a,
      { id: 'acknowledgements' },
      Object(preact_min["h"])(
        'section',
        { 'class': 'ack-section content-section text-center' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'container' },
          Object(preact_min["h"])(
            'div',
            { 'class': 'row' },
            Object(preact_min["h"])(
              'div',
              { 'class': 'col-lg-10 margin-auto' },
              acknowledgements__ref8,
              Object(preact_min["h"])(
                'div',
                { 'class': 'text-justify' },
                Object(preact_min["h"])(
                  'p',
                  null,
                  Object(preact_min["h"])(components_list, list0),
                  Object(preact_min["h"])(components_list, list1),
                  Object(preact_min["h"])(components_list, list2)
                )
              )
            )
          )
        )
      )
    );
  };

  return Acknowledgements;
}(preact_min["Component"]);

/* harmony default export */ var acknowledgements = (acknowledgements_Acknowledgements);
// CONCATENATED MODULE: ./components/about.js


function about__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function about__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function about__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var about__ref = Object(preact_min["h"])(
  lib_default.a,
  { id: 'about' },
  Object(preact_min["h"])(
    'section',
    { 'class': 'content-section content-section--no-padding-bottom' },
    Object(preact_min["h"])(
      'div',
      { 'class': 'container' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'row' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'col-lg-10 margin-auto' },
          Object(preact_min["h"])(
            'h2',
            { 'class': 'text-center' },
            'About Alaska#2'
          ),
          Object(preact_min["h"])(
            'div',
            { 'class': 'text-justify' },
            Object(preact_min["h"])(
              'p',
              null,
              'ALASKA#2 is the follow-up steganalysis challenge, a year and a half after ALASKA#1 and almost a decade after BOSS, with a main target of offering a large and heterogeneous dataset of photographic images to address the difficulties that come from moving "from research labs" towards "into the wild".'
            ),
            Object(preact_min["h"])(
              'p',
              null,
              'While BOSS opens the doors to steganalysis with a high number of features and dedicated decision methods, ALASKA#1 aims at pushing the research community along the direction of "practical" steganalysis, using highly heterogeneous datasets to mimic the diversity one can find on the Internet. In fact the goal of ALASKA#2 is two-fold.'
            ),
            Object(preact_min["h"])(
              'p',
              null,
              'First it is aimed at offering the community a much larger updated dataset of photographic images.',
              Object(preact_min["h"])('br', null),
              'On the one hand, we believe that BOSS dataset does not faithfully reflect the high diversity of media that can be found "in the real world". Indeed those media are rather homogeneous since it is based on a small set of 8 DLSR cameras, all images were processed from raw files in exactly the same way (that did not include any image processing tools), all images were uncompressed, in grayscale color, with the same size, etc.',
              Object(preact_min["h"])('br', null),
              'On the opposite, the ALASKA#2 dataset offer a much larger dataset of 80.000 images, from more than 40 cameras (included smartphones, tablets, low-end cameras to high-end full frame DLSR) and processed in a realistic and highly heterogeneous way. We believe that this would prevent designing method specifically designed for a homogeneous dataset as observed recently for BOSS, and help researchers in designing way more general and robust steganographic and steganalysis methods.'
            ),
            Object(preact_min["h"])(
              'p',
              null,
              'Second, we have recently observed the used of Deep Learning techniques for steganalysis and steganography.',
              Object(preact_min["h"])('br', null),
              'While those are very promising and start offering results that exceed everything that was known, it is questionable whether those methods are tailored a specific dataset and. More importantly, Deep Learning methods require a much larger dataset for training hence the interest of very large dataset as ALASKA#2 is.'
            ),
            Object(preact_min["h"])(
              'p',
              null,
              'Eventually, as for ALASKA#1, ',
              Object(preact_min["h"])(
                'b',
                null,
                'a challenge will be organized over between May and July 2020.'
              ),
              Object(preact_min["h"])('br', null),
              'This contest will be organised throughout ',
              Object(preact_min["h"])(
                'a',
                { href: 'https://www.kaggle.com/competitions' },
                'the Kaggle Competitions website'
              ),
              Object(preact_min["h"])('br', null),
              'Since this challenge will start within a few days, we can now provide more details.',
              Object(preact_min["h"])('br', null),
              '(i) The total ',
              Object(preact_min["h"])(
                'b',
                null,
                'cash price is of $25,000'
              ),
              ' to be shared between the three best performer.',
              Object(preact_min["h"])('br', null),
              '(ii) A ',
              Object(preact_min["h"])(
                'b',
                null,
                'special session in ',
                Object(preact_min["h"])(
                  'a',
                  { href: 'https://www.wifs2020.nyu.edu/' },
                  'IEEE WIFS 2020'
                )
              ),
              ' will be organized such that the best competitors will be given the opportuinity to present their solutions. An addition $3,000 is offered by IEEE as travel grants.',
              Object(preact_min["h"])('br', null),
              '(iii) The competition consists of a testing set of 5,000 images and four training set of 75,000 images. Images are color and compressed using JPEG with three different quality factors (95, 90 and 75). Three different embedding algorithms are used, namely J-UNIWARD, UERD and J-MiPOD, with ',
              Object(preact_min["h"])(
                'b',
                null,
                'an average'
              ),
              ' payload 0.4 bpnzAC: the payload is different for each and every images such that most complex images have higher payload.',
              Object(preact_min["h"])('br', null),
              '(iv) The competition ends on July 20, 2020 (11:59 PM UTC) and the paper submission deadline is July 31, 2020.',
              Object(preact_min["h"])('br', null)
            )
          )
        )
      )
    )
  )
);

var About = function (_Component) {
  about__inherits(About, _Component);

  function About() {
    about__classCallCheck(this, About);

    return about__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  About.prototype.render = function render() {
    return about__ref;
  };

  return About;
}(preact_min["Component"]);

/* harmony default export */ var about = (About);
// CONCATENATED MODULE: ./components/material.js
var material__dec, material__class;



function material__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function material__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function material__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var material__ref = Object(preact_min["h"])(
  'div',
  null,
  'First, and perhaps most important ones, we provide datasets. The main dataset is made of a set of 80,000 raw images ; the images are numbered by Digital still camera model as described in this ',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKAv2Base_by_DSC.txt' },
    'simple text file'
  ),
  '.',
  Object(preact_min["h"])('br', null),
  'Besides, for easy use by the community we also provide also several processed dataset:',
  Object(preact_min["h"])('br', null),
  'Uncompressed color and grayscale image datasets (of size 512x512, 256x256 for easy use in Deep learning and various sizes).',
  Object(preact_min["h"])('br', null),
  'JPEG compressed images datasets (with quality factors: 100 , 95 , 90 , 85 , 80 , 75 and various QF).'
);

var material__ref2 = Object(preact_min["h"])(
  'div',
  null,
  'Second we also provide the scripts that have been used to convert the raw images into jpeg format. Those python scripts use the main following library: ',
  Object(preact_min["h"])(
    'a',
    { href: 'http://www.numpy.org/' },
    'numpy'
  ),
  ' (version 1.14.5), \xA0',
  Object(preact_min["h"])(
    'a',
    { href: 'https://pillow.readthedocs.io/en/5.1.x/' },
    'pillow'
  ),
  ' the Python Imaging Library (version 5.2), and the open-source raw image processing program ',
  Object(preact_min["h"])(
    'a',
    { href: 'http://rawtherapee.com/' },
    'Rawtherapee'
  ),
  '(version 5.7).',
  Object(preact_min["h"])('br', null),
  'Those scripts are those that we have used to generate the various datasets from the raw image files.'
);

var material__ref3 = Object(preact_min["h"])(
  'div',
  null,
  'For any question, regarding either image datasets and/or conversion scripts, contact us at ',
  Object(preact_min["h"])(
    'a',
    { href: 'mailto:alaska@utt.fr' },
    'alaska@utt.fr'
  ),
  '.'
);

var material__ref4 = Object(preact_min["h"])(
  'div',
  null,
  'While all the materials are available under the ',
  Object(preact_min["h"])(
    'a',
    { href: 'https://creativecommons.org/licenses/by-nc-nd/4.0/' },
    'Creative Commons BY-NC-ND license'
  ),
  ' for use in any research works we kindly ask you to credit our (enormous) work by either refering to the alaska website URL or, more relevant, by simply citing one of the associated papers:',
  Object(preact_min["h"])('br', null),
  Object(preact_min["h"])(
    'a',
    { href: 'https://dl.acm.org/citation.cfm?id=3335726' },
    'The ALASKA Steganalysis Challenge: A First Step Towards Steganalysis "into the wild"'
  ),
  ', Published in the 7th ACM IH&MMSec conference.'
);

var material__ref5 = Object(preact_min["h"])(
  'h2',
  { 'class': 'text-center' },
  'Material'
);

var material__ref6 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
      'a',
      { href: 'http://alaska.utt.fr/ALASKA_v2_RAWs_scripts.zip', 'class': 'btn btn-default btn-lg' },
      'Raw images dataset (including conversion scripts)'
    )
  )
);

var material__ref7 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
      'b',
      null,
      Object(preact_min["h"])(
        'u',
        null,
        'Uncompressed Grayscale'
      )
    ),
    ' images datasets:',
    Object(preact_min["h"])('br', null),
    Object(preact_min["h"])(
      'a',
      { href: 'http://alaska.utt.fr/ALASKA_v2_TIFF_512_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
      'Size 512x512, PGM'
    ),
    '\u2003\u2003',
    Object(preact_min["h"])(
      'a',
      { href: 'http://alaska.utt.fr/ALASKA_v2_TIFF_256_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
      'Size 256x256, PGM'
    ),
    '\u2003\u2003',
    Object(preact_min["h"])(
      'a',
      { href: 'http://alaska.utt.fr/ALASKA_v2_TIFF_VariousSize_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
      'Various size, PGM'
    )
  )
);

var material__ref8 = Object(preact_min["h"])(
  'p',
  null,
  Object(preact_min["h"])(
    'b',
    null,
    Object(preact_min["h"])(
      'u',
      null,
      'Uncompressed COLOR'
    )
  ),
  ' images datasets:',
  Object(preact_min["h"])('br', null),
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_TIFF_512_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'Size 512x512, PPM'
  ),
  '\u2003\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_TIFF_256_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'Size 256x256, PPM'
  ),
  '\u2003\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_TIFF_VariousSize_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'Various size, PPM'
  )
);

var _ref9 = Object(preact_min["h"])(
  'p',
  null,
  Object(preact_min["h"])(
    'b',
    null,
    Object(preact_min["h"])(
      'u',
      null,
      'JPEG Compressed, Grayscale, Size 512x512'
    )
  ),
  ' images datasets:',
  Object(preact_min["h"])('br', null),
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF100_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF100'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF95_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF95'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF90_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF90'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF85_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF85'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF80_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF80'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF75_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF75'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QFvarious_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'Various QF'
  )
);

var _ref10 = Object(preact_min["h"])(
  'p',
  null,
  Object(preact_min["h"])(
    'b',
    null,
    Object(preact_min["h"])(
      'u',
      null,
      'JPEG Compressed, Grayscale, Size 256x256'
    )
  ),
  ' images datasets:',
  Object(preact_min["h"])('br', null),
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF100_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF100'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF95_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF95'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF90_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF90'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF85_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF85'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF80_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF80'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF75_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'QF75'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QFvarious_GrayScale.sh', 'class': 'btn btn-default btn-lg' },
    'Various QF'
  )
);

var _ref11 = Object(preact_min["h"])(
  'p',
  null,
  Object(preact_min["h"])(
    'b',
    null,
    Object(preact_min["h"])(
      'u',
      null,
      'JPEG Compressed, Color, Size 512x512'
    )
  ),
  ' images datasets:',
  Object(preact_min["h"])('br', null),
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF100_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF100'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF95_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF95'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF90_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF90'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF85_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF85'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF80_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF80'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QF75_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF75'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_512_QFvarious_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'Various QF'
  )
);

var _ref12 = Object(preact_min["h"])(
  'p',
  null,
  Object(preact_min["h"])(
    'b',
    null,
    Object(preact_min["h"])(
      'u',
      null,
      'JPEG Compressed, Color, Size 256x256'
    )
  ),
  ' images datasets:',
  Object(preact_min["h"])('br', null),
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF100_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF100'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF95_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF95'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF90_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF90'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF85_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF85'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF80_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF80'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QF75_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'QF75'
  ),
  '\u2003',
  Object(preact_min["h"])(
    'a',
    { href: 'http://alaska.utt.fr/ALASKA_v2_JPG_256_QFvarious_COLOR.sh', 'class': 'btn btn-default btn-lg' },
    'Various QF'
  )
);

var material_Material = (material__dec = connect(reducer_0, actions_namespaceObject), material__dec(material__class = function (_Component) {
  material__inherits(Material, _Component);

  function Material() {
    material__classCallCheck(this, Material);

    return material__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Material.prototype.render = function render() {
    var list = {
      text: 'In order not to provide some elements regarding the ALASKA#2 challange ahead in advance, the present website only proposed   offers two main types of materials.',
      elements: [material__ref, material__ref2, material__ref3, material__ref4]
    };

    return Object(preact_min["h"])(
      lib_default.a,
      { id: 'material' },
      Object(preact_min["h"])(
        'section',
        { 'class': 'download-section content-section text-center' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'container' },
          Object(preact_min["h"])(
            'div',
            { 'class': 'col-lg-10 margin-auto' },
            material__ref5,
            Object(preact_min["h"])(
              'div',
              null,
              Object(preact_min["h"])(
                'div',
                { 'class': 'text-justify' },
                Object(preact_min["h"])(
                  'p',
                  null,
                  Object(preact_min["h"])(components_list, list)
                )
              ),
              material__ref6,
              material__ref7,
              material__ref8,
              _ref9,
              _ref10,
              _ref11,
              _ref12
            )
          )
        )
      )
    );
  };

  return Material;
}(preact_min["Component"])) || material__class);


/* harmony default export */ var material = (material_Material);
// EXTERNAL MODULE: ./images/utt_logo.png
var utt_logo = __webpack_require__("ySAv");
var utt_logo_default = /*#__PURE__*/__webpack_require__.n(utt_logo);

// EXTERNAL MODULE: ./images/cristal_logo.png
var cristal_logo = __webpack_require__("1N2d");
var cristal_logo_default = /*#__PURE__*/__webpack_require__.n(cristal_logo);

// EXTERNAL MODULE: ./images/lm2s_logo.png
var lm2s_logo = __webpack_require__("C9JE");
var lm2s_logo_default = /*#__PURE__*/__webpack_require__.n(lm2s_logo);

// EXTERNAL MODULE: ./images/ANR.png
var ANR = __webpack_require__("T4LY");
var ANR_default = /*#__PURE__*/__webpack_require__.n(ANR);

// EXTERNAL MODULE: ./images/DGA.png
var DGA = __webpack_require__("sfkP");
var DGA_default = /*#__PURE__*/__webpack_require__.n(DGA);

// EXTERNAL MODULE: ./images/astrid.png
var astrid = __webpack_require__("jBCb");
var astrid_default = /*#__PURE__*/__webpack_require__.n(astrid);

// CONCATENATED MODULE: ./components/footer.js


function footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var footer__ref = Object(preact_min["h"])(
  'footer',
  { 'class': 'text-center' },
  Object(preact_min["h"])(
    'div',
    { 'class': 'container' },
    Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'a',
        { target: '_blank', href: 'https://www.utt.fr/international/study-at-utt/' },
        Object(preact_min["h"])('img', { src: utt_logo_default.a, 'class': 'img-fluid', alt: 'utt logo' }),
        '\u2003\u2003\u2003'
      ),
      Object(preact_min["h"])(
        'a',
        { target: '_blank', href: 'http://lm2s.utt.fr/en/index.html' },
        Object(preact_min["h"])('img', { src: lm2s_logo_default.a, style: 'height: 100px;', 'class': 'img-fluid', alt: 'lm2s logo' }),
        '\u2003\u2003\u2003'
      ),
      Object(preact_min["h"])(
        'a',
        { target: '_blank', href: 'https://www.cristal.univ-lille.fr/?lang=en' },
        Object(preact_min["h"])('img', { src: cristal_logo_default.a, style: 'height: 100px;', 'class': 'img-fluid', alt: 'cristal logo' })
      )
    ),
    Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'p',
        null,
        'The ALASKA contest is partially funded by the ANR-DGA ASTRID call 2018 (ALASKA project)'
      ),
      Object(preact_min["h"])('img', { alt: 'Logo ANR', src: ANR_default.a, style: 'height: 100pt;' }),
      Object(preact_min["h"])('img', { alt: 'Logo DGA', src: DGA_default.a, style: 'height: 100pt;' }),
      Object(preact_min["h"])('img', { alt: 'Logo ASTRID', src: astrid_default.a, style: 'height: 100pt;' })
    ),
    Object(preact_min["h"])(
      'div',
      { 'class': 'disclaimers' },
      Object(preact_min["h"])(
        'a',
        { target: '_blank', href: 'http://alaska.utt.fr/disclaimers.html' },
        'disclaimers'
      )
    ),
    Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'a',
        { target: '_blank', href: 'http://www.utt.fr/en/index.html' },
        Object(preact_min["h"])('img', { src: 'https://www.easycounter.com/counter.php?alaska_counter', 'class': 'img-fluid', alt: 'utt logo' })
      )
    )
  )
);

var Footer = function (_Component) {
  footer__inherits(Footer, _Component);

  function Footer() {
    footer__classCallCheck(this, Footer);

    return footer__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return footer__ref;
  };

  return Footer;
}(preact_min["Component"]);

/* harmony default export */ var footer = (Footer);
// CONCATENATED MODULE: ./components/HallOfFame.js


function HallOfFame__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HallOfFame__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function HallOfFame__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HallOfFame__ref = Object(preact_min["h"])(
  lib_default.a,
  { id: 'HallOfFame' },
  Object(preact_min["h"])(
    'section',
    { 'class': 'content-section content-section--no-padding-bottom' },
    Object(preact_min["h"])(
      'div',
      { 'class': 'container' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'row' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'col-lg-10 margin-auto' },
          Object(preact_min["h"])(
            'h2',
            { 'class': 'text-center' },
            'Hall of Fame'
          ),
          Object(preact_min["h"])(
            'div',
            { 'class': 'text-justify' },
            Object(preact_min["h"])(
              'p',
              null,
              'The ALASKA#1 challenge is now over. We have been working hard to propose this updated and enlarged dataset "into the wild". While a second challenge will start very soon, xe reproduce below the hall of fame of the first challenge (until the second ALASKA#2 challenge will be over)'
            ),
            Object(preact_min["h"])(
              'p',
              null,
              Object(preact_min["h"])(
                'table',
                { 'class': 'table-hover table-dark table-striped' },
                Object(preact_min["h"])(
                  'thead',
                  null,
                  Object(preact_min["h"])(
                    'tr',
                    null,
                    Object(preact_min["h"])(
                      'th',
                      { style: 'text-align: center; width:28%' },
                      Object(preact_min["h"])(
                        'div',
                        null,
                        'Users / Teams'
                      )
                    ),
                    Object(preact_min["h"])(
                      'th',
                      { style: 'text-align: center; width:18%' },
                      Object(preact_min["h"])(
                        'div',
                        null,
                        'PMD005'
                      ),
                      Object(preact_min["h"])(
                        'div',
                        null,
                        '(from Website)'
                      )
                    ),
                    Object(preact_min["h"])(
                      'th',
                      { style: 'text-align: center; width:18%' },
                      Object(preact_min["h"])(
                        'div',
                        null,
                        'PMD005 '
                      ),
                      Object(preact_min["h"])(
                        'div',
                        null,
                        '(over all results)'
                      )
                    ),
                    Object(preact_min["h"])(
                      'th',
                      { style: 'text-align: center; width:18%' },
                      Object(preact_min["h"])(
                        'div',
                        null,
                        'minPE '
                      ),
                      Object(preact_min["h"])(
                        'div',
                        null,
                        '(Minimal Error Rate)'
                      )
                    ),
                    Object(preact_min["h"])(
                      'th',
                      { style: 'text-align: center; width:18%' },
                      Object(preact_min["h"])(
                        'div',
                        null,
                        'FP50'
                      )
                    )
                  )
                ),
                Object(preact_min["h"])(
                  'tbody',
                  null,
                  Object(preact_min["h"])(
                    'tr',
                    null,
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      'Binghamton University'
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 24.37'
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 25.20 '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 14.48 '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      '  0.71'
                    )
                  ),
                  Object(preact_min["h"])(
                    'tr',
                    null,
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      'Shenzhen University'
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 50 '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 51.60  '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 25.20  '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      '  5.86'
                    )
                  ),
                  Object(preact_min["h"])(
                    'tr',
                    null,
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      '3188960009 '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 54.93 '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 53.8  '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 26.33  '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      '  7.67 '
                    )
                  ),
                  Object(preact_min["h"])(
                    'tr',
                    null,
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      '375790798  / veyron_gz '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 53.35 '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 54.2  '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      ' 25.78  '
                    ),
                    Object(preact_min["h"])(
                      'td',
                      { align: 'center' },
                      '  7.67'
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

var HallOfFame = function (_Component) {
  HallOfFame__inherits(HallOfFame, _Component);

  function HallOfFame() {
    HallOfFame__classCallCheck(this, HallOfFame);

    return HallOfFame__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  HallOfFame.prototype.render = function render() {
    return HallOfFame__ref;
  };

  return HallOfFame;
}(preact_min["Component"]);

/* harmony default export */ var components_HallOfFame = (HallOfFame);
// CONCATENATED MODULE: ./components/loginForm.js
var loginForm__dec, loginForm__class;



function loginForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function loginForm__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function loginForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var loginForm__ref = Object(preact_min["h"])(
  'label',
  { 'for': 'email' },
  'Email address'
);

var loginForm__ref2 = Object(preact_min["h"])(
  'label',
  { 'for': 'password' },
  'Password'
);

var loginForm__ref3 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'center',
    null,
    Object(preact_min["h"])(
      'font',
      { color: 'DC4257' },
      'BEWARE THAT EMAILS MAY TAKE UP TO A FEW MINUTES TO REACH YOU'
    )
  )
);

var loginForm_LoginForm = (loginForm__dec = connect(reducer_0, actions_namespaceObject), loginForm__dec(loginForm__class = function (_Component) {
  loginForm__inherits(LoginForm, _Component);

  function LoginForm() {
    loginForm__classCallCheck(this, LoginForm);

    var _this = loginForm__possibleConstructorReturn(this, _Component.call(this));

    _this.state = { email: '', password: '' };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleLogin = _this.handleLogin.bind(_this);
    _this.handleRegister = _this.handleRegister.bind(_this);
    _this.handleResend = _this.handleResend.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  LoginForm.prototype.handleChange = function handleChange(e) {
    var _setState;

    this.setState((_setState = {}, _setState[e.target.name] = e.target.value, _setState));
  };

  LoginForm.prototype.handleLogin = function handleLogin() {
    this.props.login(this.state);
  };

  LoginForm.prototype.handleRegister = function handleRegister() {
    this.props.register(this.state);
  };

  LoginForm.prototype.handleResend = function handleResend() {
    this.props.resendConfirmationEmail(this.state.email);
  };

  LoginForm.prototype.handleReset = function handleReset() {
    this.props.resetPassword(this.state.email);
  };

  LoginForm.prototype.render = function render() {
    return Object(preact_min["h"])(
      'form',
      { 'class': 'modal-form' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'form-group' },
        loginForm__ref,
        Object(preact_min["h"])('input', { type: 'email', 'class': 'form-control', name: 'email', id: 'email',
          onChange: this.handleChange, value: this.state.email })
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'form-group' },
        loginForm__ref2,
        Object(preact_min["h"])('input', { type: 'password', 'class': 'form-control', name: 'password', id: 'password',
          onChange: this.handleChange, value: this.state.password })
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'login-btn-group' },
        Object(preact_min["h"])(
          'button',
          { type: 'button', 'class': 'btn btn-default btn-lg', onClick: this.handleLogin },
          'Login'
        ),
        Object(preact_min["h"])(
          'button',
          { type: 'button', 'class': 'btn btn-default btn-lg', onClick: this.handleRegister },
          'Register'
        )
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'login-footer-actions' },
        Object(preact_min["h"])(
          'button',
          { type: 'button', 'class': 'btn btn-link', onClick: this.handleResend },
          'resend confirmation email'
        ),
        Object(preact_min["h"])(
          'button',
          { type: 'button', 'class': 'btn btn-link', onClick: this.handleReset },
          'change password'
        )
      ),
      loginForm__ref3
    );
  };

  return LoginForm;
}(preact_min["Component"])) || loginForm__class);


/* harmony default export */ var loginForm = (loginForm_LoginForm);
// CONCATENATED MODULE: ./components/loginModal.js
var loginModal__dec, loginModal__class;



function loginModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function loginModal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function loginModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var loginModal__ref = Object(preact_min["h"])('i', { 'class': 'oi oi-x' });

var loginModal__ref2 = Object(preact_min["h"])(
  'div',
  { 'class': 'container' },
  Object(preact_min["h"])(
    'div',
    { 'class': 'form-wrapper' },
    Object(preact_min["h"])(loginForm, null)
  )
);

var loginModal_LoginModal = (loginModal__dec = connect(reducer_0, actions_namespaceObject), loginModal__dec(loginModal__class = function (_Component) {
  loginModal__inherits(LoginModal, _Component);

  function LoginModal() {
    loginModal__classCallCheck(this, LoginModal);

    return loginModal__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LoginModal.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { 'class': 'custom-modal-wrapper' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'custom-modal' },
        Object(preact_min["h"])(
          'button',
          { 'class': 'btn btn-default btn-lg btn-icon close-icon', onClick: this.props.toggleLoginModal },
          loginModal__ref
        ),
        loginModal__ref2
      )
    );
  };

  return LoginModal;
}(preact_min["Component"])) || loginModal__class);


/* harmony default export */ var loginModal = (loginModal_LoginModal);
// CONCATENATED MODULE: ./components/resetForm.js
var resetForm__dec, resetForm__class;



function resetForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function resetForm__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function resetForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var resetForm__ref = Object(preact_min["h"])(
  'label',
  { 'for': 'password' },
  'New password'
);

var resetForm_ResetForm = (resetForm__dec = connect(reducer_0, actions_namespaceObject), resetForm__dec(resetForm__class = function (_Component) {
  resetForm__inherits(ResetForm, _Component);

  function ResetForm() {
    resetForm__classCallCheck(this, ResetForm);

    var _this = resetForm__possibleConstructorReturn(this, _Component.call(this));

    _this.state = { password: '' };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  ResetForm.prototype.handleChange = function handleChange(e) {
    this.setState({ password: e.target.value });
  };

  ResetForm.prototype.handleSubmit = function handleSubmit() {
    this.props.sendNewPassword(this.props.resetToken, this.state.password);
  };

  ResetForm.prototype.render = function render() {
    return Object(preact_min["h"])(
      'form',
      { 'class': 'modal-form' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'form-group' },
        resetForm__ref,
        Object(preact_min["h"])('input', { type: 'password', 'class': 'form-control', id: 'password',
          onChange: this.handleChange, value: this.state.password })
      ),
      Object(preact_min["h"])(
        'div',
        { 'class': 'login-btn-group' },
        Object(preact_min["h"])(
          'button',
          { type: 'button', 'class': 'btn btn-default btn-lg', onClick: this.handleSubmit },
          'Save'
        )
      )
    );
  };

  return ResetForm;
}(preact_min["Component"])) || resetForm__class);


/* harmony default export */ var resetForm = (resetForm_ResetForm);
// CONCATENATED MODULE: ./components/resetModal.js
var resetModal__dec, resetModal__class;



function resetModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function resetModal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function resetModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var resetModal__ref = Object(preact_min["h"])('i', { 'class': 'oi oi-x' });

var resetModal__ref2 = Object(preact_min["h"])(
  'div',
  { 'class': 'container' },
  Object(preact_min["h"])(
    'div',
    { 'class': 'form-wrapper' },
    Object(preact_min["h"])(resetForm, null)
  )
);

var resetModal_ResetModal = (resetModal__dec = connect(reducer_0, actions_namespaceObject), resetModal__dec(resetModal__class = function (_Component) {
  resetModal__inherits(ResetModal, _Component);

  function ResetModal() {
    resetModal__classCallCheck(this, ResetModal);

    return resetModal__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ResetModal.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { 'class': 'custom-modal-wrapper' },
      Object(preact_min["h"])(
        'div',
        { 'class': 'custom-modal' },
        Object(preact_min["h"])(
          'button',
          { 'class': 'btn btn-default btn-lg btn-icon close-icon', onClick: this.props.toggleResetModal },
          resetModal__ref
        ),
        resetModal__ref2
      )
    );
  };

  return ResetModal;
}(preact_min["Component"])) || resetModal__class);


/* harmony default export */ var resetModal = (resetModal_ResetModal);
// CONCATENATED MODULE: ./components/toast.js


function toast__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toast__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function toast__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var toast_Toast = function (_Component) {
  toast__inherits(Toast, _Component);

  function Toast() {
    toast__classCallCheck(this, Toast);

    return toast__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Toast.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var timer = setTimeout(function (_) {
      return _this2.props.onClick(_this2.props.toastKey);
    }, 5000);
    this.setState({ timer: timer });
  };

  Toast.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.state.timer);
  };

  Toast.prototype.render = function render() {
    var _this3 = this;

    return Object(preact_min["h"])(
      'li',
      { 'class': 'toast toast--' + (this.props.type || 'success'),
        onClick: function onClick(_) {
          return _this3.props.onClick(_this3.props.toastKey);
        } },
      this.props.text
    );
  };

  return Toast;
}(preact_min["Component"]);

/* harmony default export */ var components_toast = (toast_Toast);
// CONCATENATED MODULE: ./components/toastContainer.js
var toastContainer__dec, toastContainer__class;



function toastContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toastContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function toastContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var toastContainer_ToastContainer = (toastContainer__dec = connect(reducer_0, actions_namespaceObject), toastContainer__dec(toastContainer__class = function (_Component) {
  toastContainer__inherits(ToastContainer, _Component);

  function ToastContainer() {
    toastContainer__classCallCheck(this, ToastContainer);

    return toastContainer__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ToastContainer.prototype.render = function render() {
    var _this2 = this;

    return Object(preact_min["h"])(
      'ul',
      { 'class': 'toasts' },
      this.props.toasts.map(function (toast, i) {
        return Object(preact_min["h"])(components_toast, { key: i,
          toastKey: i,
          text: toast.text,
          type: toast.type,
          onClick: _this2.props.closeToast });
      })
    );
  };

  return ToastContainer;
}(preact_min["Component"])) || toastContainer__class);


/* harmony default export */ var toastContainer = (toastContainer_ToastContainer);
// CONCATENATED MODULE: ./components/timeline.js
var timeline__dec, timeline__class;



function timeline__objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function timeline__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function timeline__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function timeline__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var timeline__ref3 = Object(preact_min["h"])(
  'h2',
  { 'class': 'margin-auto' },
  'Timeline'
);

var timeline__ref4 = Object(preact_min["h"])(
  'h3',
  null,
  'Step 1 (Warm up)'
);

var timeline__ref5 = Object(preact_min["h"])(
  'b',
  null,
  'From'
);

var timeline__ref6 = Object(preact_min["h"])(
  'b',
  null,
  'To'
);

var timeline__ref7 = Object(preact_min["h"])(
  'h3',
  null,
  'Step 2 (Challenge)'
);

var timeline__ref8 = Object(preact_min["h"])(
  'b',
  null,
  'From'
);

var timeline__ref9 = Object(preact_min["h"])(
  'b',
  null,
  'To'
);

var timeline__ref10 = Object(preact_min["h"])(
  'h3',
  null,
  'Step 3 (for fun)'
);

var timeline__ref11 = Object(preact_min["h"])(
  'b',
  null,
  'From'
);

var timeline__ref12 = Object(preact_min["h"])(
  'b',
  null,
  'To'
);

var timeline_Timeline = (timeline__dec = connect(reducer_0, actions_namespaceObject), timeline__dec(timeline__class = function (_Component) {
  timeline__inherits(Timeline, _Component);

  function Timeline() {
    timeline__classCallCheck(this, Timeline);

    return timeline__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Timeline.prototype.componentDidMount = function componentDidMount() {
    this.props.fetchStages();
  };

  Timeline.prototype.render = function render(_ref, _ref2) {
    var stages = _ref.stages;

    timeline__objectDestructuringEmpty(_ref2);

    return Object(preact_min["h"])(
      lib_default.a,
      { id: 'timeline' },
      Object(preact_min["h"])(
        'section',
        { 'class': 'content-section text-center' },
        Object(preact_min["h"])(
          'div',
          { 'class': 'container' },
          Object(preact_min["h"])(
            'div',
            { 'class': 'row' },
            Object(preact_min["h"])(
              'div',
              { 'class': 'col-lg-10 margin-auto' },
              timeline__ref3,
              stages[0] ? Object(preact_min["h"])(
                'div',
                { 'class': 'timeline' },
                Object(preact_min["h"])(
                  'div',
                  { 'class': 'timeline-container timeline-container--left' },
                  Object(preact_min["h"])(
                    'div',
                    { 'class': 'timeline-content' },
                    timeline__ref4,
                    Object(preact_min["h"])(
                      'p',
                      null,
                      timeline__ref5,
                      ' ',
                      new Date(parseInt(stages[0].start) * 1000).toLocaleString()
                    ),
                    Object(preact_min["h"])(
                      'p',
                      null,
                      timeline__ref6,
                      ' ',
                      new Date(parseInt(stages[0].end) * 1000).toLocaleString()
                    )
                  )
                ),
                Object(preact_min["h"])(
                  'div',
                  { 'class': 'timeline-container timeline-container--right' },
                  Object(preact_min["h"])(
                    'div',
                    { 'class': 'timeline-content' },
                    timeline__ref7,
                    Object(preact_min["h"])(
                      'p',
                      null,
                      timeline__ref8,
                      ' ',
                      new Date(parseInt(stages[1].start) * 1000).toLocaleString()
                    ),
                    Object(preact_min["h"])(
                      'p',
                      null,
                      timeline__ref9,
                      ' ',
                      new Date(parseInt(stages[1].end) * 1000).toLocaleString()
                    )
                  )
                ),
                Object(preact_min["h"])(
                  'div',
                  { 'class': 'timeline-container timeline-container--left' },
                  Object(preact_min["h"])(
                    'div',
                    { 'class': 'timeline-content' },
                    timeline__ref10,
                    Object(preact_min["h"])(
                      'p',
                      null,
                      timeline__ref11,
                      ' ',
                      new Date(parseInt(stages[2].start) * 1000).toLocaleString()
                    ),
                    Object(preact_min["h"])(
                      'p',
                      null,
                      timeline__ref12,
                      ' ',
                      new Date(parseInt(stages[2].end) * 1000).toLocaleString()
                    )
                  )
                )
              ) : null
            )
          )
        )
      )
    );
  };

  return Timeline;
}(preact_min["Component"])) || timeline__class);


/* harmony default export */ var timeline = (timeline_Timeline);
// EXTERNAL MODULE: ./style/theme.css
var theme = __webpack_require__("pt8n");
var theme_default = /*#__PURE__*/__webpack_require__.n(theme);

// EXTERNAL MODULE: ./style/form.css
var style_form = __webpack_require__("kCgB");
var form_default = /*#__PURE__*/__webpack_require__.n(style_form);

// EXTERNAL MODULE: ./style/toast.css
var style_toast = __webpack_require__("RPFx");
var toast_default = /*#__PURE__*/__webpack_require__.n(style_toast);

// EXTERNAL MODULE: ./style/modal.css
var modal = __webpack_require__("1fop");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// EXTERNAL MODULE: ./style/timeline.css
var style_timeline = __webpack_require__("G3al");
var timeline_default = /*#__PURE__*/__webpack_require__.n(style_timeline);

// CONCATENATED MODULE: ./components/app.js
var app__dec, app__class;



function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























var app__ref = Object(preact_min["h"])(nav, null);

var app__ref2 = Object(preact_min["h"])(header, null);

var app__ref3 = Object(preact_min["h"])(about, null);

var app__ref4 = Object(preact_min["h"])(timeline, null);

var app__ref5 = Object(preact_min["h"])(material, null);

var app__ref6 = Object(preact_min["h"])(rules, null);

var app__ref7 = Object(preact_min["h"])(components_HallOfFame, null);

var app__ref8 = Object(preact_min["h"])(acknowledgements, null);

var app__ref9 = Object(preact_min["h"])(footer, null);

var app__ref10 = Object(preact_min["h"])(toastContainer, null);

var app__ref11 = Object(preact_min["h"])(loginModal, null);

var app__ref12 = Object(preact_min["h"])(resetModal, null);

var app_App = (app__dec = connect(reducer_0, actions_namespaceObject), app__dec(app__class = function (_Component) {
  app__inherits(App, _Component);

  function App() {
    app__classCallCheck(this, App);

    return app__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.componentDidMount = function componentDidMount() {
    // check if there is a verification or reset token in the URI
    var queryString = window.location.href.split('?')[1] || '';
    var tokenRegex = new RegExp(/^token/);
    var resetTokenRegex = new RegExp(/^reset_token/);
    var token = queryString.split('&').filter(function (p) {
      return p.match(tokenRegex);
    });
    var resetToken = queryString.split('&').filter(function (p) {
      return p.match(resetTokenRegex);
    });
    if (token.length) {
      this.props.sendVerificationtToken(token[0].split('=')[1]);
    }
    if (resetToken.length) {
      this.props.handleResetToken(resetToken[0].split('=')[1]);
    }
    // check if there is a jwt in localStorage
    var jwt = localStorage.getItem('jwt');
    if (jwt) {
      this.props.loginBack(jwt);
    }
    // get the previous submission from localStorage
    var sub = localStorage.getItem('lastSubmission');
    if (sub) {
      this.props.loadLastSubmission(JSON.parse(sub));
    }
  };

  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { 'class': 'main-container' },
      app__ref,
      app__ref2,
      app__ref3,
      app__ref4,
      app__ref5,
      app__ref6,
      app__ref7,
      app__ref8,
      app__ref9,
      app__ref10,
      this.props.showLoginModal ? app__ref11 : null,
      this.props.showResetModal ? app__ref12 : null
    );
  };

  return App;
}(preact_min["Component"])) || app__class);


/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js







var store = createStore(reducer_0, applyMiddleware(redux_thunk_es));

var index__ref = Object(preact_min["h"])(
	'div',
	{ id: 'outer' },
	Object(preact_min["h"])(
		Provider,
		{ store: store },
		Object(preact_min["h"])(app, null)
	)
);

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (function () {
	return index__ref;
});

/***/ }),

/***/ "Juha":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHash = exports.getHash = function getHash() {
  return decodeURI(window.location.hash.slice(1));
};

var updateHash = exports.updateHash = function updateHash(hash, affectHistory) {
  if (affectHistory) {
    window.location.hash = hash;
  } else {
    window.location.replace("#" + hash);
  }
};

// remove hash in url without affecting history or forcing reload
var removeHash = exports.removeHash = function removeHash() {
  history.replaceState("", document.title, window.location.pathname + window.location.search);
};

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KU3i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var debounce = exports.debounce = function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = undefined;
    var args = _arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ "LkZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("JZ8d");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("pv+l")(module)))

/***/ }),

/***/ "Ng2D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("eW0v");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Manager = __webpack_require__("EU+F");

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ScrollableAnchor = function (_Component) {
  _inherits(ScrollableAnchor, _Component);

  function ScrollableAnchor(props) {
    _classCallCheck(this, ScrollableAnchor);

    var _this = _possibleConstructorReturn(this, (ScrollableAnchor.__proto__ || Object.getPrototypeOf(ScrollableAnchor)).call(this, props));

    _this.id = props.id || props.children.ref;
    return _this;
  }

  _createClass(ScrollableAnchor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var element = _reactDom2.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);
      _Manager2.default.addAnchor(this.id, element);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _Manager2.default.removeAnchor(this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          id = _props.id;

      return _react2.default.cloneElement(children, {
        ref: children.ref || id
      });
    }
  }]);

  return ScrollableAnchor;
}(_react.Component);

ScrollableAnchor.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string
};
exports.default = ScrollableAnchor;

/***/ }),

/***/ "RPFx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "T4LY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e7abb733417793b69f21d05c1f273800.png";

/***/ }),

/***/ "Z7XJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
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
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return _extendStatics(d, b);
};

function __extends(d, b) {
    _extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return _assign.apply(this, arguments);
};


function __rest(s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
    }for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
        }
    }return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function (v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
    }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d });
        }, reject);
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result.default = mod;
    return result;
}

function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}
// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-context/dist/esm/context-value-emitter.js
function createEmitter(initialValue, bitmaskFactory) {
    var registeredUpdaters = [];
    var value = initialValue;
    var diff = function diff(newValue) {
        return bitmaskFactory(value, newValue) | 0;
    };
    return {
        register: function register(updater) {
            registeredUpdaters.push(updater);
            updater(value, diff(value));
        },
        unregister: function unregister(updater) {
            registeredUpdaters = registeredUpdaters.filter(function (i) {
                return i !== updater;
            });
        },
        val: function val(newValue) {
            if (newValue === undefined || newValue == value) {
                return value;
            }
            var bitmask = diff(newValue);
            value = newValue;
            registeredUpdaters.forEach(function (up) {
                return up(newValue, bitmask);
            });
            return value;
        }
    };
}
var noopEmitter = {
    register: function register(_) {
        console.warn("Consumer used without a Provider");
    },
    unregister: function unregister(_) {
        // do nothing
    },
    val: function val(_) {
        //do nothing;
    }
};
// CONCATENATED MODULE: ../node_modules/preact-context/dist/esm/utils.js
/*
 * Extracts the children from the props and returns an object containing the
 * only element of the given array (preact always passes children as an array)
 * or null otherwise. The result contains always a reference to the original
 * array of children
 *
 * @param {RenderableProps<*>} props - the component's properties
 * @return {{ child: JSX.Element | null, children: JSX.Element[]}}
 */
function getOnlyChildAndChildren(props) {
  var children = props.children;
  var child = children.length === 1 ? children[0] : null;
  return { child: child, children: children };
}
// CONCATENATED MODULE: ../node_modules/preact-context/dist/esm/context.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createContext; });




function getRenderer(props) {
    var child = getOnlyChildAndChildren(props).child;
    // TODO: "render" in props check is only done to make TS happy
    return child || "render" in props && props.render;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var defaultBitmaskFactory = function defaultBitmaskFactory() {
    return MAX_SIGNED_31_BIT_INT;
};
var ids = 0;
function _createContext(value, bitmaskFactory) {
    var key = "_preactContextProvider-" + ids++;
    var Provider = /** @class */function (_super) {
        __extends(Provider, _super);
        function Provider(props) {
            var _this = _super.call(this, props) || this;
            _this._emitter = createEmitter(props.value, bitmaskFactory || defaultBitmaskFactory);
            return _this;
        }
        Provider.prototype.getChildContext = function () {
            var _a;
            return _a = {}, _a[key] = this._emitter, _a;
        };
        Provider.prototype.componentDidUpdate = function () {
            this._emitter.val(this.props.value);
        };
        Provider.prototype.render = function () {
            var _a = getOnlyChildAndChildren(this.props),
                child = _a.child,
                children = _a.children;
            if (child) {
                return child;
            }
            // preact does not support fragments,
            // therefore we wrap the children in a span
            return Object(preact_min["h"])("span", null, children);
        };
        return Provider;
    }(preact_min["Component"]);
    var Consumer = /** @class */function (_super) {
        __extends(Consumer, _super);
        function Consumer(props, ctx) {
            var _this = _super.call(this, props, ctx) || this;
            _this._updateContext = function (value, bitmask) {
                var unstable_observedBits = _this.props.unstable_observedBits;
                var observed = unstable_observedBits === undefined || unstable_observedBits === null ? MAX_SIGNED_31_BIT_INT : unstable_observedBits;
                observed = observed | 0;
                if ((observed & bitmask) === 0) {
                    return;
                }
                _this.setState({ value: value });
            };
            _this.state = { value: _this._getEmitter().val() || value };
            return _this;
        }
        Consumer.prototype.componentDidMount = function () {
            this._getEmitter().register(this._updateContext);
        };
        Consumer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return this.state.value !== nextState.value || getRenderer(this.props) !== getRenderer(nextProps);
        };
        Consumer.prototype.componentWillUnmount = function () {
            this._getEmitter().unregister(this._updateContext);
        };
        Consumer.prototype.componentDidUpdate = function (_, __, prevCtx) {
            var previousProvider = prevCtx[key];
            if (previousProvider === this.context[key]) {
                return;
            }
            (previousProvider || noopEmitter).unregister(this._updateContext);
            this.componentDidMount();
        };
        Consumer.prototype.render = function () {
            // TODO: "render" in props check is only done to make TS happy
            var render = "render" in this.props && this.props.render;
            var r = getRenderer(this.props);
            if (render && render !== r) {
                console.warn("Both children and a render function are defined. Children will be used");
            }
            if (typeof r === "function") {
                return r(this.state.value);
            }
            console.warn("Consumer is expecting a function as one and only child but didn't find any");
        };
        Consumer.prototype._getEmitter = function () {
            return this.context[key] || noopEmitter;
        };
        return Consumer;
    }(preact_min["Component"]);
    return {
        Provider: Provider,
        Consumer: Consumer
    };
}
// named and default export in order to have less problems with bundlers
/* harmony default export */ var context = (_createContext);
var createContext = _createContext;

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1_preact__, "createRef")) __webpack_require__.d(__webpack_exports__, "createRef", function() { return __WEBPACK_IMPORTED_MODULE_1_preact__["createRef"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_context__ = __webpack_require__("Z7XJ");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return __WEBPACK_IMPORTED_MODULE_2_preact_context__["a"]; });







var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production" !== 'production';
} catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(Portal, { vnode: vnode, container: container });
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	hydrate: render$1,
	createClass: createClass,
	createContext: __WEBPACK_IMPORTED_MODULE_2_preact_context__["a" /* createContext */],
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	createRef: __WEBPACK_IMPORTED_MODULE_1_preact__["createRef"],
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "fjM8":
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill(input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
  // initialize result and counters
  var bc = 0, bs, buffer, idx = 0, output = '';
  // get next character
  buffer = str.charAt(idx++);
  // character found in table? initialize bit storage and add its ascii value;
  ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
  // and if not first of each 4 characters,
  // convert the first 8 bits to one ascii character
  bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}

module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;

/***/ }),

/***/ "jBCb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf1bbc7267d3a029cfb34de0b195769b.png";

/***/ }),

/***/ "kCgB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lr2X":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Jump.js 1.0.1 - A small, modern, dependency-free smooth scrolling library.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/jump.js
 * License: MIT
 */

!function (o, n) {
   true ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : o.Jump = n();
}(this, function () {
  "use strict";
  var o = function o(_o, n, e, t) {
    return _o /= t / 2, _o < 1 ? e / 2 * _o * _o + n : (_o--, -e / 2 * (_o * (_o - 2) - 1) + n);
  },
      n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol ? "symbol" : typeof o;
  },
      e = function e() {
    function e() {
      return window.scrollY || window.pageYOffset;
    }function t(o) {
      return o.getBoundingClientRect().top + d;
    }function i(o) {
      v || (v = o), b = o - v, p = s(b, d, y, m), window.scrollTo(0, p), b < m ? requestAnimationFrame(i) : r();
    }function r() {
      window.scrollTo(0, d + y), c && l && (c.setAttribute("tabindex", "-1"), c.focus()), "function" == typeof w && w(), v = !1;
    }function u(r) {
      var u = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];switch (m = u.duration || 1e3, a = u.offset || 0, w = u.callback, s = u.easing || o, l = u.a11y || !1, d = e(), "undefined" == typeof r ? "undefined" : n(r)) {case "number":
          c = void 0, l = !1, f = d + r;break;case "object":
          c = r, f = t(c);break;case "string":
          c = document.querySelector(r), f = t(c);}switch (y = f - d + a, n(u.duration)) {case "number":
          m = u.duration;break;case "function":
          m = u.duration(y);}requestAnimationFrame(i);
    }var c = void 0,
        d = void 0,
        f = void 0,
        a = void 0,
        s = void 0,
        l = void 0,
        y = void 0,
        m = void 0,
        v = void 0,
        b = void 0,
        p = void 0,
        w = void 0;return u;
  },
      t = e();return t;
});

/***/ }),

/***/ "oCjY":
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__("fjM8");

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function (str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};

/***/ }),

/***/ "pCT7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = exports.getScrollTop = function getScrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
};

// get vertical offsets of element, taking scrollTop into consideration
var getElementOffset = exports.getElementOffset = function getElementOffset(element) {
  var scrollTop = getScrollTop();

  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      bottom = _element$getBoundingC.bottom;

  return {
    top: Math.floor(top + scrollTop),
    bottom: Math.floor(bottom + scrollTop)
  };
};

// does scrollTop live within element bounds?
var doesElementContainScrollTop = exports.doesElementContainScrollTop = function doesElementContainScrollTop(element) {
  var extraOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var scrollTop = getScrollTop();
  var offsetTop = getElementOffset(element).top + extraOffset;
  return scrollTop >= offsetTop && scrollTop < offsetTop + element.offsetHeight;
};

// is el2's location more relevant than el2,
// parent-child relationship aside?
var checkLocationRelevance = exports.checkLocationRelevance = function checkLocationRelevance(el1, el2) {
  var _getElementOffset = getElementOffset(el1),
      top1 = _getElementOffset.top,
      bottom1 = _getElementOffset.bottom;

  var _getElementOffset2 = getElementOffset(el2),
      top2 = _getElementOffset2.top,
      bottom2 = _getElementOffset2.bottom;

  if (top1 === top2) {
    if (bottom1 === bottom2) {
      // top and bottom of compared elements are the same,
      // so return one randomly in a deterministic way
      return el1 < el2;
    }
    // top of compared elements is the same, so return whichever
    // element has its bottom higher on the page
    return bottom2 < bottom1;
  }
  // top of compared elements differ, so return true
  // if tested element has its top lower on the page
  return top2 > top1;
};

// check if el2 is more relevant than el1, considering child-parent
// relationships as well as node location.
var checkElementRelevance = exports.checkElementRelevance = function checkElementRelevance(el1, el2) {
  if (el1.contains(el2)) {
    // el2 is child, so it gains relevance priority
    return true;
  } else if (!el2.contains(el1) && checkLocationRelevance(el1, el2)) {
    // el1 and el2 are unrelated, but el2 has a better location,
    // so it gains relevance priority
    return true;
  }
  return false;
};

// given a set of anchors, find which one is, given the following logic:
// 1. children nodes are more relevant than parent nodes
// 2. if neither node contains the other, and their top locations differ,
//    the node with the top lower on the page is more relevant
// 3. if neither node contains the other, and their top locations are the same,
//    the node with the bottom higher on the page is more relevant
// 4. if neither node contains the other, and their top and bottom locations
//    are the same, a node is chosen at random, in a deterministic way,
//    to be more relevant.
var getBestAnchorGivenScrollLocation = exports.getBestAnchorGivenScrollLocation = function getBestAnchorGivenScrollLocation(anchors, offset) {
  var bestId = void 0,
      bestElement = void 0;

  Object.keys(anchors).forEach(function (id) {
    var element = anchors[id];
    if (doesElementContainScrollTop(element, offset)) {
      if (!bestElement || checkElementRelevance(bestElement, element)) {
        bestElement = element;
        bestId = id;
      }
    }
  });
  return bestId;
};

/***/ }),

/***/ "pt8n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pv+l":
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "sfkP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9466613068da42d12b02eda3755b75e7.png";

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "ySAv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d8b990a84abc61e5005e44e88534c81.png";

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map