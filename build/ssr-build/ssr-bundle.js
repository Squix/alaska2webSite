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

/***/ "+5Pm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("ar57");
var RequireObjectCoercible = __webpack_require__("5Mk3");
var callBound = __webpack_require__("rAXm");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			vals.push(obj[key]);
		}
	}
	return vals;
};

/***/ }),

/***/ "/2iC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var MAX_SAFE_INTEGER = __webpack_require__("3a6K");

var Call = __webpack_require__("pbtM");
var CreateDataPropertyOrThrow = __webpack_require__("muFB");
var Get = __webpack_require__("ARLd");
var HasProperty = __webpack_require__("I85G");
var IsArray = __webpack_require__("jFZi");
var ToLength = __webpack_require__("xCnm");
var ToString = __webpack_require__("DQd/");

// https://ecma-international.org/ecma-262/10.0/#sec-flattenintoarray

// eslint-disable-next-line max-params, max-statements
module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = ToLength(Get(element, 'length'));
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};

/***/ }),

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

/***/ "0Bbh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DIRECTIONS", {
  enumerable: true,
  get: function get() {
    return _reactWithDirection.DIRECTIONS;
  }
});
exports["default"] = void 0;

var _react = __webpack_require__("AQ6k");

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _reactWithDirection = __webpack_require__("Tsh+");

function detectAndCreateContext(defaultValue) {
  if (_react.createContext) {
    return (0, _react.createContext)(defaultValue);
  }

  return {
    Provider: function Provider() {
      throw new ReferenceError('WithStylesContext requires React 16.3 or later');
    },
    Consumer: function Consumer() {
      throw new ReferenceError('WithStylesContext requires React 16.3 or later');
    }
  };
}

var WithStylesContext = detectAndCreateContext({
  stylesInterface: null,
  stylesTheme: null,
  direction: null
});
WithStylesContext.Provider.propTypes = {
  stylesInterface: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  stylesTheme: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  direction: _propTypes["default"].oneOf([_reactWithDirection.DIRECTIONS.LTR, _reactWithDirection.DIRECTIONS.RTL])
};
var _default = WithStylesContext;
exports["default"] = _default;

/***/ }),

/***/ "0v1l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__("mnG2");
var isCallable = __webpack_require__("b4C7");
var isDate = __webpack_require__("NyUK");
var isSymbol = __webpack_require__("js02");

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || hint !== 'number' && hint !== 'string') {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

/***/ }),

/***/ "1N2d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4505bafd0f626c80687e154efad2adde.png";

/***/ }),

/***/ "1f4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getPosition: function getPosition(value, min, max) {
    return (value - min) / (max - min) * 100;
  },
  getValue: function getValue(pos, min, max) {
    var decimal = pos / 100;

    if (pos === 0) {
      return min;
    }

    if (pos === 100) {
      return max;
    }

    return Math.round((max - min) * decimal + min);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "1fop":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1v4d":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "26zG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArraySpeciesCreate = __webpack_require__("9QJX");
var FlattenIntoArray = __webpack_require__("/2iC");
var Get = __webpack_require__("ARLd");
var ToInteger = __webpack_require__("CebH");
var ToLength = __webpack_require__("xCnm");
var ToObject = __webpack_require__("FwyB");

module.exports = function flat() {
	var O = ToObject(this);
	var sourceLen = ToLength(Get(O, 'length'));

	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ToInteger(arguments[0]);
	}

	var A = ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	return A;
};

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

/***/ "2XCI":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__("cYxp");

/***/ }),

/***/ "2c2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("3t7p");

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3dLy"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("69HE"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("E7HD"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("HOM9"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("IxO8"));

var _reactWithStyles = __webpack_require__("ooNQ");

var _reactWithDirection = _interopRequireWildcard(__webpack_require__("Tsh+"));

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _airbnbPropTypes = __webpack_require__("qe4R");

var _react = _interopRequireDefault(__webpack_require__("AQ6k"));

var _linear = _interopRequireDefault(__webpack_require__("1f4f"));

var _DefaultHandle = _interopRequireDefault(__webpack_require__("W9YU"));

var _DefaultProgressBar = _interopRequireDefault(__webpack_require__("BHeu"));

var _DefaultBackground = _interopRequireDefault(__webpack_require__("Q25H"));

var _OrientationPropType = _interopRequireDefault(__webpack_require__("lPvV"));

var _SliderConstants = __webpack_require__("mwu8");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });keys.push.apply(keys, symbols);
  }return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }return target;
}

var has = Object.prototype.hasOwnProperty;

var PropTypeArrOfNumber = _propTypes["default"].arrayOf(_propTypes["default"].number);

var PropTypeReactComponent = _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]);

function getHandleFor(ev) {
  return Number(ev.currentTarget.getAttribute('data-handle-key'));
}

function killEvent(ev) {
  ev.stopPropagation();
  ev.preventDefault();
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithDirection.withDirectionPropTypes, {}, _reactWithStyles.withStylesPropTypes, {
  // Automatically adds a top position for large when enabled
  autoAdjustVerticalPosition: _propTypes["default"].bool,
  // the algorithm to use
  algorithm: _propTypes["default"].shape({
    getValue: _propTypes["default"].func,
    getPosition: _propTypes["default"].func
  }),
  background: PropTypeReactComponent,
  // any children you pass in
  children: _propTypes["default"].node,
  // prevent the slider from moving when clicked
  disabled: _propTypes["default"].bool,
  // a custom handle you can pass in
  handle: PropTypeReactComponent,
  // the maximum possible value
  max: _propTypes["default"].number,
  // the minimum possible value
  min: _propTypes["default"].number,
  // called on click
  onClick: _propTypes["default"].func,
  // called whenever the user is done changing values on the slider
  onChange: _propTypes["default"].func,
  // called on key press
  onKeyPress: _propTypes["default"].func,
  // called when you finish dragging a handle
  onSliderDragEnd: _propTypes["default"].func,
  // called every time the slider is dragged and the value changes
  onSliderDragMove: _propTypes["default"].func,
  // called when you start dragging a handle
  onSliderDragStart: _propTypes["default"].func,
  // called whenever the user is actively changing the values on the slider
  // (dragging, clicked, keypress)
  onValuesUpdated: _propTypes["default"].func,
  // the orientation
  orientation: _OrientationPropType["default"],
  // a component for rendering the pits
  pitComponent: PropTypeReactComponent,
  // the points that pits are rendered on
  pitPoints: PropTypeArrOfNumber,
  // a custom progress bar you can pass in
  progressBar: PropTypeReactComponent,
  // should we snap?
  snap: _propTypes["default"].bool,
  // the points we should snap to
  snapPoints: PropTypeArrOfNumber,
  // whether a proposed update is valid
  getNextHandlePosition: _propTypes["default"].func,
  // the values
  values: PropTypeArrOfNumber
}));
var defaultProps = {
  autoAdjustVerticalPosition: false,
  children: null,
  algorithm: _linear["default"],
  disabled: false,
  getNextHandlePosition: null,
  max: _SliderConstants.PERCENT_FULL,
  min: _SliderConstants.PERCENT_EMPTY,
  onClick: null,
  onChange: null,
  onKeyPress: null,
  onSliderDragEnd: null,
  onSliderDragMove: null,
  onSliderDragStart: null,
  onValuesUpdated: null,
  orientation: _SliderConstants.HORIZONTAL,
  pitComponent: null,
  pitPoints: [],
  snap: false,
  snapPoints: [],
  background: _DefaultBackground["default"],
  handle: _DefaultHandle["default"],
  progressBar: _DefaultProgressBar["default"],
  values: [_SliderConstants.PERCENT_EMPTY]
};

var Rheostat =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(Rheostat, _React$Component);

  function Rheostat(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var _this$props = _this.props,
        algorithm = _this$props.algorithm,
        max = _this$props.max,
        min = _this$props.min,
        values = _this$props.values;
    _this.state = {
      handlePos: values.map(function (value) {
        return algorithm.getPosition(value, min, max);
      }),
      handleDimensions: 0,
      slidingIndex: null,
      values: values
    };
    _this.getPublicState = _this.getPublicState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getSliderBoundingBox = _this.getSliderBoundingBox.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getProgressStyle = _this.getProgressStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getMinValue = _this.getMinValue.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getMaxValue = _this.getMaxValue.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getHandleDimensions = _this.getHandleDimensions.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getClosestSnapPoint = _this.getClosestSnapPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getSnapPosition = _this.getSnapPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getNextPositionForKey = _this.getNextPositionForKey.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getNextState = _this.getNextState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getClosestHandle = _this.getClosestHandle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setStartSlide = _this.setStartSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startMouseSlide = _this.startMouseSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startTouchSlide = _this.startTouchSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseSlide = _this.handleMouseSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTouchSlide = _this.handleTouchSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSlide = _this.handleSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.endSlide = _this.endSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeydown = _this.handleKeydown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.validatePosition = _this.validatePosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.validateValues = _this.validateValues.bind((0, _assertThisInitialized2["default"])(_this));
    _this.canMove = _this.canMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.fireChangeEvent = _this.fireChangeEvent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.slideTo = _this.slideTo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateNewValues = _this.updateNewValues.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setRef = _this.setRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setHandleNode = _this.setHandleNode.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setHandleContainerNode = _this.setHandleContainerNode.bind((0, _assertThisInitialized2["default"])(_this));
    _this.positionPercent = _this.positionPercent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.invalidatePitStyleCache = _this.invalidatePitStyleCache.bind((0, _assertThisInitialized2["default"])(_this));
    _this.pitStyleCache = {};
    return _this;
  }

  var _proto = Rheostat.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Note: This occurs in a timeout because styles need to be applied first
    this.handleDimensionsTimeout = setTimeout(function () {
      _this2.handleDimensionsTimeout = null;

      _this2.setState({
        handleDimensions: _this2.getHandleDimensions()
      });
    }, 0);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        min = _this$props2.min,
        max = _this$props2.max,
        orientation = _this$props2.orientation,
        pitPoints = _this$props2.pitPoints,
        algorithm = _this$props2.algorithm;
    var _this$state = this.state,
        values = _this$state.values,
        slidingIndex = _this$state.slidingIndex;
    var minMaxChanged = nextProps.min !== min || nextProps.max !== max;
    var valuesChanged = values.length !== nextProps.values.length || values.some(function (value, idx) {
      return nextProps.values[idx] !== value;
    });
    var orientationChanged = nextProps.orientation !== orientation;
    var algorithmChanged = nextProps.algorithm !== algorithm;
    var pitPointsChanged = nextProps.pitPoints !== pitPoints;
    var willBeDisabled = nextProps.disabled && !disabled;
    if (minMaxChanged || valuesChanged) this.updateNewValues(nextProps);

    if (willBeDisabled && slidingIndex !== null) {
      this.endSlide();
    }

    if (minMaxChanged || pitPointsChanged || orientationChanged || algorithmChanged) {
      this.invalidatePitStyleCache();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.handleDimensionsTimeout) {
      clearTimeout(this.handleDimensionsTimeout);
      this.handleDimensionsTimeout = null;
    }
  };

  _proto.getPublicState = function getPublicState() {
    var values = this.state.values;
    var _this$props3 = this.props,
        min = _this$props3.min,
        max = _this$props3.max;
    return {
      max: max,
      min: min,
      values: values
    };
  };

  _proto.getSliderBoundingBox = function getSliderBoundingBox() {
    if (!this.handleContainerNode) {
      return null;
    }

    var rect = this.handleContainerNode.getBoundingClientRect();
    return {
      height: rect.height || this.handleContainerNode.clientHeight,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width || this.handleContainerNode.clientWidth
    };
  };

  _proto.getProgressStyle = function getProgressStyle(idx) {
    var orientation = this.props.orientation;
    var handlePos = this.state.handlePos;
    var value = handlePos[idx];

    if (idx === 0) {
      return orientation === _SliderConstants.VERTICAL ? {
        height: "".concat(value, "%"),
        top: 0
      } : {
        left: 0,
        width: "".concat(value, "%")
      };
    }

    var prevValue = handlePos[idx - 1];
    var diffValue = value - prevValue;
    return orientation === _SliderConstants.VERTICAL ? {
      height: "".concat(diffValue, "%"),
      top: "".concat(prevValue, "%")
    } : {
      left: "".concat(prevValue, "%"),
      width: "".concat(diffValue, "%")
    };
  };

  _proto.getMinValue = function getMinValue(idx) {
    var min = this.props.min;
    var values = this.state.values;
    return values[idx - 1] ? Math.max(min, values[idx - 1]) : min;
  };

  _proto.getMaxValue = function getMaxValue(idx) {
    var max = this.props.max;
    var values = this.state.values;
    return values[idx + 1] ? Math.min(max, values[idx + 1]) : max;
  };

  _proto.getClosestSnapPoint = function getClosestSnapPoint(value) {
    var snapPoints = this.props.snapPoints;
    if (!snapPoints.length) return value;
    return snapPoints.reduce(function (snapTo, snap) {
      return Math.abs(snapTo - value) < Math.abs(snap - value) ? snapTo : snap;
    });
  };

  _proto.getHandleDimensions = function getHandleDimensions() {
    var orientation = this.props.orientation;
    if (!this.handleNode) return 0;
    return orientation === _SliderConstants.VERTICAL ? this.handleNode.clientHeight : this.handleNode.clientWidth;
  };

  _proto.getSnapPosition = function getSnapPosition(positionPercent) {
    var _this$props4 = this.props,
        algorithm = _this$props4.algorithm,
        max = _this$props4.max,
        min = _this$props4.min,
        snap = _this$props4.snap;
    if (!snap) return positionPercent;
    var value = algorithm.getValue(positionPercent, min, max);
    var snapValue = this.getClosestSnapPoint(value);
    return algorithm.getPosition(snapValue, min, max);
  };

  _proto.getNextPositionForKey = function getNextPositionForKey(idx, keyCode) {
    var _stepMultiplier;

    var _this$state2 = this.state,
        handlePos = _this$state2.handlePos,
        values = _this$state2.values;
    var _this$props5 = this.props,
        algorithm = _this$props5.algorithm,
        max = _this$props5.max,
        min = _this$props5.min,
        snapPoints = _this$props5.snapPoints,
        shouldSnap = _this$props5.snap;
    var proposedValue = values[idx];
    var proposedPercentage = handlePos[idx];
    var originalPercentage = proposedPercentage;
    var stepValue = 1;

    if (max >= 100) {
      proposedPercentage = Math.round(proposedPercentage);
    } else {
      stepValue = 100 / (max - min);
    }

    var currentIndex = null;

    if (shouldSnap) {
      currentIndex = snapPoints.indexOf(this.getClosestSnapPoint(values[idx]));
    }

    var stepMultiplier = (_stepMultiplier = {}, (0, _defineProperty2["default"])(_stepMultiplier, _SliderConstants.KEYS.LEFT, function (v) {
      return v * -1;
    }), (0, _defineProperty2["default"])(_stepMultiplier, _SliderConstants.KEYS.RIGHT, function (v) {
      return v * 1;
    }), (0, _defineProperty2["default"])(_stepMultiplier, _SliderConstants.KEYS.UP, function (v) {
      return v * 1;
    }), (0, _defineProperty2["default"])(_stepMultiplier, _SliderConstants.KEYS.DOWN, function (v) {
      return v * -1;
    }), (0, _defineProperty2["default"])(_stepMultiplier, _SliderConstants.KEYS.PAGE_DOWN, function (v) {
      return v > 1 ? -v : v * -10;
    }), (0, _defineProperty2["default"])(_stepMultiplier, _SliderConstants.KEYS.PAGE_UP, function (v) {
      return v > 1 ? v : v * 10;
    }), _stepMultiplier);

    if (has.call(stepMultiplier, keyCode)) {
      proposedPercentage += stepMultiplier[keyCode](stepValue);

      if (shouldSnap) {
        if (proposedPercentage > originalPercentage) {
          // move cursor right unless overflow
          if (currentIndex < snapPoints.length - 1) {
            proposedValue = snapPoints[currentIndex + 1];
          } // move cursor left unless there is overflow
        } else if (currentIndex > 0) {
          proposedValue = snapPoints[currentIndex - 1];
        }
      }
    } else if (keyCode === _SliderConstants.KEYS.HOME) {
      proposedPercentage = _SliderConstants.PERCENT_EMPTY;

      if (shouldSnap) {
        var _snapPoints = (0, _slicedToArray2["default"])(snapPoints, 1);

        proposedValue = _snapPoints[0];
      }
    } else if (keyCode === _SliderConstants.KEYS.END) {
      proposedPercentage = _SliderConstants.PERCENT_FULL;

      if (shouldSnap) {
        proposedValue = snapPoints[snapPoints.length - 1];
      }
    } else {
      return null;
    }

    return shouldSnap ? algorithm.getPosition(proposedValue, min, max) : proposedPercentage;
  };

  _proto.getNextState = function getNextState(idx, proposedPosition) {
    var handlePos = this.state.handlePos;
    var _this$props6 = this.props,
        max = _this$props6.max,
        min = _this$props6.min,
        algorithm = _this$props6.algorithm;
    var actualPosition = this.validatePosition(idx, proposedPosition);
    var nextHandlePos = handlePos.map(function (pos, index) {
      return index === idx ? actualPosition : pos;
    });
    return {
      handlePos: nextHandlePos,
      values: nextHandlePos.map(function (pos) {
        return algorithm.getValue(pos, min, max);
      })
    };
  };

  _proto.getClosestHandle = function getClosestHandle(positionPercent) {
    var handlePos = this.state.handlePos;
    return handlePos.reduce(function (closestIdx, node, idx) {
      var challenger = Math.abs(handlePos[idx] - positionPercent);
      var current = Math.abs(handlePos[closestIdx] - positionPercent);
      return challenger < current ? idx : closestIdx;
    }, 0);
  };

  _proto.setHandleNode = function setHandleNode(node) {
    this.handleNode = node;
  };

  _proto.setHandleContainerNode = function setHandleContainerNode(node) {
    this.handleContainerNode = node;
  };

  _proto.setStartSlide = function setStartSlide(ev) {
    var sliderBox = this.getSliderBoundingBox();

    if (!sliderBox) {
      return;
    }

    this.setState({
      handleDimensions: this.getHandleDimensions(ev, sliderBox),
      slidingIndex: getHandleFor(ev)
    });
  };

  _proto.setRef = function setRef(ref) {
    this.rheostat = ref;
  };

  _proto.startMouseSlide = function startMouseSlide(ev) {
    var onSliderDragStart = this.props.onSliderDragStart;
    this.setStartSlide(ev, ev.clientX, ev.clientY);

    if (typeof document.addEventListener === 'function') {
      document.addEventListener('mousemove', this.handleMouseSlide, false);
      document.addEventListener('mouseup', this.endSlide, false);
    } else {
      document.attachEvent('onmousemove', this.handleMouseSlide);
      document.attachEvent('onmouseup', this.endSlide);
    }

    if (onSliderDragStart) onSliderDragStart();
    killEvent(ev);
  };

  _proto.startTouchSlide = function startTouchSlide(ev) {
    var onSliderDragStart = this.props.onSliderDragStart;
    if (ev.changedTouches.length > 1) return;
    var touch = ev.changedTouches[0];
    this.setStartSlide(ev, touch.clientX, touch.clientY);
    document.addEventListener('touchmove', this.handleTouchSlide, false);
    document.addEventListener('touchend', this.endSlide, false);
    if (onSliderDragStart) onSliderDragStart();
    killEvent(ev);
  };

  _proto.handleMouseSlide = function handleMouseSlide(ev) {
    var slidingIndex = this.state.slidingIndex;
    if (slidingIndex === null) return;
    this.handleSlide(ev.clientX, ev.clientY);
    killEvent(ev);
  };

  _proto.handleTouchSlide = function handleTouchSlide(ev) {
    var slidingIndex = this.state.slidingIndex;
    if (slidingIndex === null) return;

    if (ev.changedTouches.length > 1) {
      this.endSlide();
      return;
    }

    var touch = ev.changedTouches[0];
    this.handleSlide(touch.clientX, touch.clientY);
    killEvent(ev);
  };

  _proto.positionPercent = function positionPercent(x, y, sliderBox) {
    var _this$props7 = this.props,
        orientation = _this$props7.orientation,
        direction = _this$props7.direction;

    if (orientation === _SliderConstants.VERTICAL) {
      return (y - sliderBox.top) / sliderBox.height * _SliderConstants.PERCENT_FULL;
    }

    var horizontalPercentage = (x - sliderBox.left) / sliderBox.width * _SliderConstants.PERCENT_FULL;

    if (direction === _reactWithDirection.DIRECTIONS.RTL) {
      return 100 - horizontalPercentage;
    }

    return horizontalPercentage;
  };

  _proto.handleSlide = function handleSlide(x, y) {
    var onSliderDragMove = this.props.onSliderDragMove;
    var idx = this.state.slidingIndex;
    var sliderBox = this.getSliderBoundingBox();

    if (!sliderBox) {
      return;
    }

    var positionPercent = this.positionPercent(x, y, sliderBox);
    this.slideTo(idx, positionPercent);

    if (this.canMove(idx, positionPercent)) {
      if (onSliderDragMove) onSliderDragMove();
    }
  };

  _proto.endSlide = function endSlide() {
    var _this3 = this;

    var _this$props8 = this.props,
        onSliderDragEnd = _this$props8.onSliderDragEnd,
        snap = _this$props8.snap;
    var _this$state3 = this.state,
        slidingIndex = _this$state3.slidingIndex,
        handlePos = _this$state3.handlePos;
    this.setState({
      slidingIndex: null
    });

    if (typeof document.removeEventListener === 'function') {
      document.removeEventListener('mouseup', this.endSlide, false);
      document.removeEventListener('touchend', this.endSlide, false);
      document.removeEventListener('touchmove', this.handleTouchSlide, false);
      document.removeEventListener('mousemove', this.handleMouseSlide, false);
    } else {
      document.detachEvent('onmousemove', this.handleMouseSlide);
      document.detachEvent('onmouseup', this.endSlide);
    }

    if (onSliderDragEnd) onSliderDragEnd();

    if (snap) {
      var positionPercent = this.getSnapPosition(handlePos[slidingIndex]);
      this.slideTo(slidingIndex, positionPercent, function () {
        return _this3.fireChangeEvent();
      });
    } else {
      this.fireChangeEvent();
    }
  };

  _proto.handleClick = function handleClick(ev) {
    var _this4 = this;

    if (ev.target.getAttribute('data-handle-key')) {
      return;
    }

    var _this$props9 = this.props,
        onClick = _this$props9.onClick,
        orientation = _this$props9.orientation; // Calculate the position of the slider on the page so we can determine
    // the position where you click in relativity.

    var sliderBox = this.getSliderBoundingBox();

    if (!sliderBox) {
      return;
    }

    var positionDecimal = orientation === _SliderConstants.VERTICAL ? (ev.clientY - sliderBox.top) / sliderBox.height : (ev.clientX - sliderBox.left) / sliderBox.width;
    var positionPercent = positionDecimal * _SliderConstants.PERCENT_FULL;
    var handleId = this.getClosestHandle(positionPercent);
    var validPositionPercent = this.getSnapPosition(positionPercent); // Move the handle there

    this.slideTo(handleId, validPositionPercent, function () {
      return _this4.fireChangeEvent();
    });
    if (onClick) onClick();
  };

  _proto.handleKeydown = function handleKeydown(ev) {
    var _this5 = this;

    var onKeyPress = this.props.onKeyPress;
    var idx = getHandleFor(ev);

    if (ev.keyCode === _SliderConstants.KEYS.ESC) {
      ev.currentTarget.blur();
      return;
    }

    var proposedPercentage = this.getNextPositionForKey(idx, ev.keyCode);
    if (proposedPercentage === null) return;

    if (this.canMove(idx, proposedPercentage)) {
      this.slideTo(idx, proposedPercentage, function () {
        return _this5.fireChangeEvent();
      });
      if (onKeyPress) onKeyPress();
    }

    killEvent(ev);
  } // Apply user adjustments to position
  ;

  _proto.userAdjustPosition = function userAdjustPosition(idx, proposedPosition) {
    var getNextHandlePosition = this.props.getNextHandlePosition;
    var nextPosition = proposedPosition;

    if (getNextHandlePosition) {
      nextPosition = parseFloat(getNextHandlePosition(idx, proposedPosition));

      if (Number.isNaN(nextPosition) || nextPosition < _SliderConstants.PERCENT_EMPTY || nextPosition > _SliderConstants.PERCENT_FULL) {
        throw new TypeError('getNextHandlePosition returned invalid position. Valid positions are floats between 0 and 100');
      }
    }

    return nextPosition;
  } // Make sure the proposed position respects the bounds and
  // does not collide with other handles too much.
  ;

  _proto.validatePosition = function validatePosition(idx, proposedPosition) {
    var _this$state4 = this.state,
        handlePos = _this$state4.handlePos,
        handleDimensions = _this$state4.handleDimensions;
    var nextPosition = this.userAdjustPosition(idx, proposedPosition);
    var orientation = this.props.orientation;
    var sliderBox = this.getSliderBoundingBox();
    var handlePercentage = orientation === _SliderConstants.VERTICAL ? handleDimensions / sliderBox.height * _SliderConstants.PERCENT_FULL / 2 : handleDimensions / sliderBox.width * _SliderConstants.PERCENT_FULL / 2;
    return Math.max(Math.min(nextPosition, handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handlePercentage : _SliderConstants.PERCENT_FULL // 100% is the highest value
    ), handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handlePercentage : _SliderConstants.PERCENT_EMPTY // 0% is the lowest value
    );
  };

  _proto.validateValues = function validateValues(proposedValues, props) {
    var _ref = props || this.props,
        max = _ref.max,
        min = _ref.min;

    return proposedValues.map(function (value, idx, values) {
      var realValue = Math.max(Math.min(value, max), min);

      if (values.length && realValue < values[idx - 1]) {
        return values[idx - 1];
      }

      return realValue;
    });
  } // Can we move the slider to the given position?
  ;

  _proto.canMove = function canMove(idx, proposedPosition) {
    var _this$state5 = this.state,
        handlePos = _this$state5.handlePos,
        handleDimensions = _this$state5.handleDimensions;
    var orientation = this.props.orientation;
    var sliderBox = this.getSliderBoundingBox();

    if (!sliderBox) {
      return false;
    }

    var handlePercentage = orientation === _SliderConstants.VERTICAL ? handleDimensions / sliderBox.height * _SliderConstants.PERCENT_FULL / 2 : handleDimensions / sliderBox.width * _SliderConstants.PERCENT_FULL / 2;
    if (proposedPosition < _SliderConstants.PERCENT_EMPTY) return false;
    if (proposedPosition > _SliderConstants.PERCENT_FULL) return false;
    var nextHandlePosition = handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handlePercentage : Infinity;
    if (proposedPosition > nextHandlePosition) return false;
    var prevHandlePosition = handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handlePercentage : -Infinity;
    if (proposedPosition < prevHandlePosition) return false;
    return true;
  };

  _proto.fireChangeEvent = function fireChangeEvent() {
    var onChange = this.props.onChange;
    if (onChange) onChange(this.getPublicState());
  };

  _proto.slideTo = function slideTo(idx, proposedPosition, onAfterSet) {
    var _this6 = this;

    var onValuesUpdated = this.props.onValuesUpdated;
    var nextState = this.getNextState(idx, proposedPosition);
    this.setState(nextState, function () {
      if (onValuesUpdated) onValuesUpdated(_this6.getPublicState());
      if (onAfterSet) onAfterSet();
    });
  };

  _proto.updateNewValues = function updateNewValues(nextProps) {
    var slidingIndex = this.state.slidingIndex; // Don't update while the slider is sliding

    if (slidingIndex !== null) {
      return;
    }

    var algorithm = this.props.algorithm;
    var max = nextProps.max,
        min = nextProps.min,
        values = nextProps.values;
    var nextValues = this.validateValues(values, nextProps);
    this.setState({
      handlePos: nextValues.map(function (value) {
        return algorithm.getPosition(value, min, max);
      }),
      values: nextValues
    });
  };

  _proto.invalidatePitStyleCache = function invalidatePitStyleCache() {
    this.pitStyleCache = {};
  };

  _proto.render = function render() {
    var _this7 = this;

    var _this$props10 = this.props,
        css = _this$props10.css,
        autoAdjustVerticalPosition = _this$props10.autoAdjustVerticalPosition,
        algorithm = _this$props10.algorithm,
        children = _this$props10.children,
        disabled = _this$props10.disabled,
        Handle = _this$props10.handle,
        max = _this$props10.max,
        min = _this$props10.min,
        orientation = _this$props10.orientation,
        PitComponent = _this$props10.pitComponent,
        pitPoints = _this$props10.pitPoints,
        Background = _this$props10.background,
        ProgressBar = _this$props10.progressBar,
        styles = _this$props10.styles;
    var _this$state6 = this.state,
        handlePos = _this$state6.handlePos,
        values = _this$state6.values;
    return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events
      _react["default"].createElement("div", (0, _extends2["default"])({
        onClick: disabled ? undefined : this.handleClick
      }, css(styles.rheostat, autoAdjustVerticalPosition && styles.autoAdjustVerticalPosition, orientation === _SliderConstants.VERTICAL && styles.rheostat__vertical)), !!Background && _react["default"].createElement(Background, {
        orientation: orientation
      }), _react["default"].createElement("div", (0, _extends2["default"])({
        ref: this.setHandleContainerNode
      }, css(styles.handleContainer)), handlePos.map(function (pos, idx) {
        var handleStyle = orientation === _SliderConstants.VERTICAL ? {
          top: "".concat(pos, "%"),
          position: 'absolute'
        } : {
          left: "".concat(pos, "%"),
          position: 'absolute'
        };
        return _react["default"].createElement(Handle, {
          "aria-valuemax": _this7.getMaxValue(idx),
          "aria-valuemin": _this7.getMinValue(idx),
          "aria-valuenow": values[idx],
          "aria-disabled": disabled,
          "data-handle-key": idx,
          key: idx
          /* eslint-disable-line react/no-array-index-key */

          , orientation: orientation,
          disabled: disabled,
          onClick: _this7.killEvent,
          onKeyDown: disabled ? undefined : _this7.handleKeydown,
          onMouseDown: disabled ? undefined : _this7.startMouseSlide,
          onTouchStart: disabled ? undefined : _this7.startTouchSlide,
          handleRef: _this7.setHandleNode,
          role: "slider",
          style: handleStyle,
          tabIndex: 0
        });
      })), !!ProgressBar && handlePos.map(function (node, idx, arr) {
        if (idx === 0 && arr.length > 1) {
          return null;
        }

        return _react["default"].createElement(ProgressBar, {
          key: idx
          /* eslint-disable-line react/no-array-index-key */

          , style: _this7.getProgressStyle(idx),
          disabled: disabled
        });
      }), PitComponent && pitPoints.map(function (n) {
        var pitStyle = _this7.pitStyleCache[n];

        if (!pitStyle) {
          var pos = algorithm.getPosition(n, min, max);
          pitStyle = orientation === 'vertical' ? {
            top: "".concat(pos, "%"),
            position: 'absolute'
          } : {
            left: "".concat(pos, "%"),
            position: 'absolute'
          };
          _this7.pitStyleCache[n] = pitStyle;
        }

        return _react["default"].createElement(PitComponent, {
          key: n,
          style: pitStyle
        }, n);
      }), children)
    );
  };

  return Rheostat;
}(_react["default"].Component);

Rheostat.propTypes = propTypes;
Rheostat.defaultProps = defaultProps;

var _default = (0, _reactWithDirection["default"])((0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$rheostat = _ref2.rheostat,
      color = _ref2$rheostat.color,
      unit = _ref2$rheostat.unit,
      responsive = _ref2$rheostat.responsive;
  return {
    rheostat: {
      position: 'relative',
      overflow: 'visible'
    },
    autoAdjustVerticalPosition: (0, _defineProperty2["default"])({}, responsive.largeAndAbove, {
      top: 1.5 * unit
    }),
    rheostat__vertical: {
      height: '100%'
    },
    handleContainer: {
      height: 2 * unit - 1,
      top: -2,
      left: -2,
      bottom: 4,
      width: '100%',
      position: 'absolute'
    },
    rheostat_background: {
      backgroundColor: color.white,
      border: "1px solid ".concat(color.grey),
      position: 'relative'
    },
    rheostat_background__horizontal: {
      height: 2 * unit - 1,
      top: -2,
      left: -2,
      bottom: 4,
      width: '100%'
    },
    rheostat_background__vertical: {
      width: 2 * unit - 1,
      top: 0,
      height: '100%'
    }
  };
})(Rheostat));

exports["default"] = _default;

/***/ }),

/***/ "38Wu":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__("fy20");
var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer(arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length);
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number');
  }
  return Buffer(arg, encodingOrOffset, length);
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf;
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return Buffer(size);
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return buffer.SlowBuffer(size);
};

/***/ }),

/***/ "3L1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("VxKF");
var callBind = __webpack_require__("I+tp");

var implementation = __webpack_require__("c8Vb");
var getPolyfill = __webpack_require__("XYeV");
var shim = __webpack_require__("qrOU");

var bound = callBind(implementation);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;

/***/ }),

/***/ "3a6K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;

/***/ }),

/***/ "3dLy":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "3t7p":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("b9XL");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4goC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = __webpack_require__("TD7O");
var $isFinite = __webpack_require__("lJl4");

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};

/***/ }),

/***/ "563O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * morgan
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = morgan;
module.exports.compile = compile;
module.exports.format = format;
module.exports.token = token;

/**
 * Module dependencies.
 * @private
 */

var auth = __webpack_require__("hjQ1");
var debug = __webpack_require__("8NLT")('morgan');
var deprecate = __webpack_require__("jlWA")('morgan');
var onFinished = __webpack_require__("EGJG");
var onHeaders = __webpack_require__("LSEm");

/**
 * Array of CLF month names.
 * @private
 */

var CLF_MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Default log buffer duration.
 * @private
 */

var DEFAULT_BUFFER_DURATION = 1000;

/**
 * Create a logger middleware.
 *
 * @public
 * @param {String|Function} format
 * @param {Object} [options]
 * @return {Function} middleware
 */

function morgan(format, options) {
  var fmt = format;
  var opts = options || {};

  if (format && typeof format === 'object') {
    opts = format;
    fmt = opts.format || 'default';

    // smart deprecation message
    deprecate('morgan(options): use morgan(' + (typeof fmt === 'string' ? JSON.stringify(fmt) : 'format') + ', options) instead');
  }

  if (fmt === undefined) {
    deprecate('undefined format: specify a format');
  }

  // output on request instead of response
  var immediate = opts.immediate;

  // check if log entry should be skipped
  var skip = opts.skip || false;

  // format function
  var formatLine = typeof fmt !== 'function' ? getFormatFunction(fmt) : fmt;

  // stream
  var buffer = opts.buffer;
  var stream = opts.stream || process.stdout;

  // buffering support
  if (buffer) {
    deprecate('buffer option');

    // flush interval
    var interval = typeof buffer !== 'number' ? DEFAULT_BUFFER_DURATION : buffer;

    // swap the stream
    stream = createBufferStream(stream, interval);
  }

  return function logger(req, res, next) {
    // request data
    req._startAt = undefined;
    req._startTime = undefined;
    req._remoteAddress = getip(req);

    // response data
    res._startAt = undefined;
    res._startTime = undefined;

    // record request start
    recordStartTime.call(req);

    function logRequest() {
      if (skip !== false && skip(req, res)) {
        debug('skip request');
        return;
      }

      var line = formatLine(morgan, req, res);

      if (line == null) {
        debug('skip line');
        return;
      }

      debug('log request');
      stream.write(line + '\n');
    };

    if (immediate) {
      // immediate log
      logRequest();
    } else {
      // record response start
      onHeaders(res, recordStartTime);

      // log when response finished
      onFinished(res, logRequest);
    }

    next();
  };
}

/**
 * Apache combined log format.
 */

morgan.format('combined', ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');

/**
 * Apache common log format.
 */

morgan.format('common', ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]');

/**
 * Default format.
 */

morgan.format('default', ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
deprecate.property(morgan, 'default', 'default format: use combined format');

/**
 * Short format.
 */

morgan.format('short', ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms');

/**
 * Tiny format.
 */

morgan.format('tiny', ':method :url :status :res[content-length] - :response-time ms');

/**
 * dev (colored)
 */

morgan.format('dev', function developmentFormatLine(tokens, req, res) {
  // get the status code if response written
  var status = headersSent(res) ? res.statusCode : undefined;

  // get status color
  var color = status >= 500 ? 31 // red
  : status >= 400 ? 33 // yellow
  : status >= 300 ? 36 // cyan
  : status >= 200 ? 32 // green
  : 0; // no color

  // get colored function
  var fn = developmentFormatLine[color];

  if (!fn) {
    // compile
    fn = developmentFormatLine[color] = compile('\x1b[0m:method :url \x1b[' + color + 'm:status\x1b[0m :response-time ms - :res[content-length]\x1b[0m');
  }

  return fn(tokens, req, res);
});

/**
 * request url
 */

morgan.token('url', function getUrlToken(req) {
  return req.originalUrl || req.url;
});

/**
 * request method
 */

morgan.token('method', function getMethodToken(req) {
  return req.method;
});

/**
 * response time in milliseconds
 */

morgan.token('response-time', function getResponseTimeToken(req, res, digits) {
  if (!req._startAt || !res._startAt) {
    // missing request and/or response start time
    return;
  }

  // calculate diff
  var ms = (res._startAt[0] - req._startAt[0]) * 1e3 + (res._startAt[1] - req._startAt[1]) * 1e-6;

  // return truncated value
  return ms.toFixed(digits === undefined ? 3 : digits);
});

/**
 * total time in milliseconds
 */

morgan.token('total-time', function getTotalTimeToken(req, res, digits) {
  if (!req._startAt || !res._startAt) {
    // missing request and/or response start time
    return;
  }

  // time elapsed from request start
  var elapsed = process.hrtime(req._startAt);

  // cover to milliseconds
  var ms = elapsed[0] * 1e3 + elapsed[1] * 1e-6;

  // return truncated value
  return ms.toFixed(digits === undefined ? 3 : digits);
});

/**
 * current date
 */

morgan.token('date', function getDateToken(req, res, format) {
  var date = new Date();

  switch (format || 'web') {
    case 'clf':
      return clfdate(date);
    case 'iso':
      return date.toISOString();
    case 'web':
      return date.toUTCString();
  }
});

/**
 * response status code
 */

morgan.token('status', function getStatusToken(req, res) {
  return headersSent(res) ? String(res.statusCode) : undefined;
});

/**
 * normalized referrer
 */

morgan.token('referrer', function getReferrerToken(req) {
  return req.headers.referer || req.headers.referrer;
});

/**
 * remote address
 */

morgan.token('remote-addr', getip);

/**
 * remote user
 */

morgan.token('remote-user', function getRemoteUserToken(req) {
  // parse basic credentials
  var credentials = auth(req);

  // return username
  return credentials ? credentials.name : undefined;
});

/**
 * HTTP version
 */

morgan.token('http-version', function getHttpVersionToken(req) {
  return req.httpVersionMajor + '.' + req.httpVersionMinor;
});

/**
 * UA string
 */

morgan.token('user-agent', function getUserAgentToken(req) {
  return req.headers['user-agent'];
});

/**
 * request header
 */

morgan.token('req', function getRequestToken(req, res, field) {
  // get header
  var header = req.headers[field.toLowerCase()];

  return Array.isArray(header) ? header.join(', ') : header;
});

/**
 * response header
 */

morgan.token('res', function getResponseHeader(req, res, field) {
  if (!headersSent(res)) {
    return undefined;
  }

  // get header
  var header = res.getHeader(field);

  return Array.isArray(header) ? header.join(', ') : header;
});

/**
 * Format a Date in the common log format.
 *
 * @private
 * @param {Date} dateTime
 * @return {string}
 */

function clfdate(dateTime) {
  var date = dateTime.getUTCDate();
  var hour = dateTime.getUTCHours();
  var mins = dateTime.getUTCMinutes();
  var secs = dateTime.getUTCSeconds();
  var year = dateTime.getUTCFullYear();

  var month = CLF_MONTH[dateTime.getUTCMonth()];

  return pad2(date) + '/' + month + '/' + year + ':' + pad2(hour) + ':' + pad2(mins) + ':' + pad2(secs) + ' +0000';
}

/**
 * Compile a format string into a function.
 *
 * @param {string} format
 * @return {function}
 * @public
 */

function compile(format) {
  if (typeof format !== 'string') {
    throw new TypeError('argument format must be a string');
  }

  var fmt = String(JSON.stringify(format));
  var js = '  "use strict"\n  return ' + fmt.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, function (_, name, arg) {
    var tokenArguments = 'req, res';
    var tokenFunction = 'tokens[' + String(JSON.stringify(name)) + ']';

    if (arg !== undefined) {
      tokenArguments += ', ' + String(JSON.stringify(arg));
    }

    return '" +\n    (' + tokenFunction + '(' + tokenArguments + ') || "-") + "';
  });

  // eslint-disable-next-line no-new-func
  return new Function('tokens, req, res', js);
}

/**
 * Create a basic buffering stream.
 *
 * @param {object} stream
 * @param {number} interval
 * @public
 */

function createBufferStream(stream, interval) {
  var buf = [];
  var timer = null;

  // flush function
  function flush() {
    timer = null;
    stream.write(buf.join(''));
    buf.length = 0;
  }

  // write function
  function write(str) {
    if (timer === null) {
      timer = setTimeout(flush, interval);
    }

    buf.push(str);
  }

  // return a minimal "stream"
  return { write: write };
}

/**
 * Define a format with the given name.
 *
 * @param {string} name
 * @param {string|function} fmt
 * @public
 */

function format(name, fmt) {
  morgan[name] = fmt;
  return this;
}

/**
 * Lookup and compile a named format function.
 *
 * @param {string} name
 * @return {function}
 * @public
 */

function getFormatFunction(name) {
  // lookup format
  var fmt = morgan[name] || name || morgan.default;

  // return compiled format
  return typeof fmt !== 'function' ? compile(fmt) : fmt;
}

/**
 * Get request IP address.
 *
 * @private
 * @param {IncomingMessage} req
 * @return {string}
 */

function getip(req) {
  return req.ip || req._remoteAddress || req.connection && req.connection.remoteAddress || undefined;
}

/**
 * Determine if the response headers have been sent.
 *
 * @param {object} res
 * @returns {boolean}
 * @private
 */

function headersSent(res) {
  // istanbul ignore next: node.js 0.8 support
  return typeof res.headersSent !== 'boolean' ? Boolean(res._header) : res.headersSent;
}

/**
 * Pad number to two digits.
 *
 * @private
 * @param {number} num
 * @return {string}
 */

function pad2(num) {
  var str = String(num);

  // istanbul ignore next: num is current datetime
  return (str.length === 1 ? '0' : '') + str;
}

/**
 * Record the start time.
 * @private
 */

function recordStartTime() {
  this._startAt = process.hrtime();
  this._startTime = new Date();
}

/**
 * Define a token function with the given name,
 * and callback fn(req, res).
 *
 * @param {string} name
 * @param {function} fn
 * @public
 */

function token(name, fn) {
  morgan[name] = fn;
  return this;
}

/***/ }),

/***/ "58Ti":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("B6/o");

module.exports = Function.prototype.bind || implementation;

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

/***/ "5Mk3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("8NaR");

/***/ }),

/***/ "5gcX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function noop() {
  return null;
}

noop.isRequired = noop;

function noopThunk() {
  return noop;
}

module.exports = {
  and: noopThunk,
  between: noopThunk,
  booleanSome: noopThunk,
  childrenHavePropXorChildren: noopThunk,
  childrenOf: noopThunk,
  childrenOfType: noopThunk,
  childrenSequenceOf: noopThunk,
  componentWithName: noopThunk,
  disallowedIf: noopThunk,
  elementType: noopThunk,
  empty: noopThunk,
  explicitNull: noopThunk,
  forbidExtraProps: Object,
  integer: noopThunk,
  keysOf: noopThunk,
  mutuallyExclusiveProps: noopThunk,
  mutuallyExclusiveTrueProps: noopThunk,
  nChildren: noopThunk,
  nonNegativeInteger: noop,
  nonNegativeNumber: noopThunk,
  numericString: noopThunk,
  object: noopThunk,
  or: noopThunk,
  predicate: noopThunk,
  range: noopThunk,
  ref: noopThunk,
  requiredBy: noopThunk,
  restrictedProp: noopThunk,
  sequenceOf: noopThunk,
  shape: noopThunk,
  stringEndsWith: noopThunk,
  stringStartsWith: noopThunk,
  uniqueArray: noopThunk,
  uniqueArrayOf: noopThunk,
  valuesOf: noopThunk,
  withShape: noopThunk
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "69HE":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("OUZ9");

var iterableToArrayLimit = __webpack_require__("9vK/");

var unsupportedIterableToArray = __webpack_require__("UyFj");

var nonIterableRest = __webpack_require__("Rom6");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "6HKI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $gOPD = __webpack_require__("H5HI");
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = __webpack_require__("rAXm");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = __webpack_require__("ar57");

var IsArray = __webpack_require__("jFZi");
var IsPropertyKey = __webpack_require__("mmlB");
var IsRegExp = __webpack_require__("93xU");
var ToPropertyDescriptor = __webpack_require__("M3Zt");
var Type = __webpack_require__("QalR");

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};

/***/ }),

/***/ "6IAg":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "89El":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("H1RQ");

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
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
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

module.exports = hoistNonReactStatics;

/***/ }),

/***/ "8NLT":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__("jcLW");
} else {
  module.exports = __webpack_require__("9WM/");
}

/***/ }),

/***/ "8NaR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || 'Cannot call method on ' + value);
	}
	return value;
};

/***/ }),

/***/ "93xU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = __webpack_require__("DhUb");

var ToBoolean = __webpack_require__("Kfog");

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};

/***/ }),

/***/ "9QJX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__("ARLd");
var IsArray = __webpack_require__("jFZi");
var IsConstructor = __webpack_require__("FyO1");
var IsInteger = __webpack_require__("4goC");
var Type = __webpack_require__("QalR");

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};

/***/ }),

/***/ "9WM/":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__("Axko");
var util = __webpack_require__("Bcfi");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("y5CM");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
    return str.trim();
  }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \x1B[3' + c + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\x1B[3' + c + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__("vHs2");
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__("QPpz");
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),

/***/ "9aBk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.withStylesPropTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var withStylesPropTypes = {
  styles: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired,
  css: _propTypes["default"].func.isRequired
};
exports.withStylesPropTypes = withStylesPropTypes;
var _default = withStylesPropTypes;
exports["default"] = _default;

/***/ }),

/***/ "9vK/":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "9yP8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __spreadArrays = this && this.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
    }for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
        }
    }return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__("AQ6k");
var types_1 = __webpack_require__("aHsa");
exports.getStepDecimals = function (step) {
    var decimals = step.toString().split('.')[1];
    return decimals ? decimals.length : 0;
};
function isTouchEvent(event) {
    return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
exports.isTouchEvent = isTouchEvent;
function isStepDivisible(min, max, step) {
    var res = (max - min) / step;
    return parseInt(res.toString(), 10) === res;
}
exports.isStepDivisible = isStepDivisible;
function normalizeValue(value, index, min, max, step, allowOverlap, values) {
    var BIG_NUM = 10e10;
    value = Math.round(value * BIG_NUM) / BIG_NUM;
    if (!allowOverlap) {
        var prev = values[index - 1];
        var next = values[index + 1];
        if (prev && prev > value) return prev;
        if (next && next < value) return next;
    }
    if (value > max) return max;
    if (value < min) return min;
    // `remainder` is a difference between the given value and a full step value
    // that is closest lower to the given value and is in the range between the min value
    // and the given value
    var remainder = Math.floor(value * BIG_NUM - min * BIG_NUM) % Math.floor(step * BIG_NUM);
    var closestLowerNum = Math.floor(value * BIG_NUM - Math.abs(remainder));
    var rounded = remainder === 0 ? value : closestLowerNum / BIG_NUM;
    // Values with a remainder `< step/2` are rounded to the closest lower value
    // while values with a remainder `= > step/2` are rounded to the closest bigger value
    var res = Math.abs(remainder / BIG_NUM) < step / 2 ? rounded : rounded + step;
    var decimalPlaces = exports.getStepDecimals(step);
    return parseFloat(res.toFixed(decimalPlaces));
}
exports.normalizeValue = normalizeValue;
function relativeValue(value, min, max) {
    return (value - min) / (max - min);
}
exports.relativeValue = relativeValue;
function isVertical(direction) {
    return direction === types_1.Direction.Up || direction === types_1.Direction.Down;
}
exports.isVertical = isVertical;
function checkBoundaries(value, min, max) {
    if (min >= max) {
        throw new RangeError("min (" + min + ") is equal/bigger than max (" + max + ")");
    }
    if (value < min) {
        throw new RangeError("value (" + value + ") is smaller than min (" + min + ")");
    }
    if (value > max) {
        throw new RangeError("value (" + value + ") is bigger than max (" + max + ")");
    }
}
exports.checkBoundaries = checkBoundaries;
function checkInitialOverlap(values) {
    if (values.length < 2) return;
    if (!values.slice(1).every(function (item, i) {
        return values[i] <= item;
    })) {
        throw new RangeError("values={[" + values + "]} needs to be sorted when allowOverlap={false}");
    }
}
exports.checkInitialOverlap = checkInitialOverlap;
function getMargin(element) {
    var style = window.getComputedStyle(element);
    return {
        top: parseInt(style['margin-top'], 10),
        bottom: parseInt(style['margin-bottom'], 10),
        left: parseInt(style['margin-left'], 10),
        right: parseInt(style['margin-right'], 10)
    };
}
exports.getMargin = getMargin;
function getPaddingAndBorder(element) {
    var style = window.getComputedStyle(element);
    return {
        top: parseInt(style['padding-top'], 10) + parseInt(style['border-top-width'], 10),
        bottom: parseInt(style['padding-bottom'], 10) + parseInt(style['border-bottom-width'], 10),
        left: parseInt(style['padding-left'], 10) + parseInt(style['border-left-width'], 10),
        right: parseInt(style['padding-right'], 10) + parseInt(style['border-right-width'], 10)
    };
}
exports.getPaddingAndBorder = getPaddingAndBorder;
function translateThumbs(elements, offsets, rtl) {
    var inverter = rtl ? -1 : 1;
    elements.forEach(function (element, index) {
        return translate(element, inverter * offsets[index].x, offsets[index].y);
    });
}
exports.translateThumbs = translateThumbs;
function translate(element, x, y) {
    element.style.transform = "translate(" + x + "px, " + y + "px)";
}
exports.translate = translate;
// adapted from https://github.com/alexreardon/raf-schd
exports.schd = function (fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function wrapperFn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        lastArgs = args;
        if (frameId) {
            return;
        }
        frameId = requestAnimationFrame(function () {
            frameId = null;
            fn.apply(void 0, lastArgs);
        });
    };
    return wrapperFn;
};
function replaceAt(values, index, value) {
    var ret = values.slice(0);
    ret[index] = value;
    return ret;
}
exports.replaceAt = replaceAt;
function getTrackBackground(_a) {
    var values = _a.values,
        colors = _a.colors,
        min = _a.min,
        max = _a.max,
        _b = _a.direction,
        direction = _b === void 0 ? types_1.Direction.Right : _b,
        _c = _a.rtl,
        rtl = _c === void 0 ? false : _c;
    if (rtl && direction === types_1.Direction.Right) {
        direction = types_1.Direction.Left;
    } else if (rtl && types_1.Direction.Left) {
        direction = types_1.Direction.Right;
    }
    var progress = values.map(function (value) {
        return (value - min) / (max - min) * 100;
    });
    var middle = progress.reduce(function (acc, point, index) {
        return acc + ", " + colors[index] + " " + point + "%, " + colors[index + 1] + " " + point + "%";
    }, '');
    return "linear-gradient(" + direction + ", " + colors[0] + " 0%" + middle + ", " + colors[colors.length - 1] + " 100%)";
}
exports.getTrackBackground = getTrackBackground;
function voidFn() {}
exports.voidFn = voidFn;
function assertUnreachable(x) {
    throw new Error("Didn't expect to get here");
}
exports.assertUnreachable = assertUnreachable;
/**
 * Util function for grabbing the true largest width of a thumb
 * including the label
 * @param thumbEl - Thumb element to grab the largest width from
 * @param value - Thumb value, not label value
 * @param separator - Label separator value
 */
var getThumbWidth = function getThumbWidth(thumbEl, value, separator, decimalPlaces, valueToLabel) {
    if (valueToLabel === void 0) {
        valueToLabel = function valueToLabel(value) {
            return value;
        };
    }
    var width = Math.ceil(__spreadArrays([thumbEl], Array.from(thumbEl.children)).reduce(function (width, el) {
        var elWidth = Math.ceil(el.getBoundingClientRect().width);
        /**
         * If a label contains a merged label value, it won't return the true
         * label width for that Thumb. Clone the label and change the value
         * to that individual Thumb value in order to grab the true width.
         */
        if (el.innerText && el.innerText.includes(separator) && el.childElementCount === 0) {
            var elClone = el.cloneNode(true);
            elClone.innerHTML = valueToLabel(value.toFixed(decimalPlaces));
            elClone.style.visibility = 'hidden';
            document.body.appendChild(elClone);
            elWidth = Math.ceil(elClone.getBoundingClientRect().width);
            document.body.removeChild(elClone);
        }
        return elWidth > width ? elWidth : width;
    }, thumbEl.getBoundingClientRect().width));
    return width;
};
/**
 * Bulk of logic for thumb overlaps
 * Consider a scenario with 5 thumbs;
 * Thumb 1 overlaps with thumb 0 and thumb 2
 * Thumb 2 overlaps with thumb 3
 * We need an array that contains [0, 1, 2, 3]
 * The function needs to return the directly overlapping thumbs
 * and all thumbs overlapping linked to those and so on
 * @param index - Thumb index calculating overlaps for
 * @param offsets - Current Array of Thumb offsets for Range
 * @param thumbs - Array of Thumb elements
 * @param values - Array of Thumb values
 * @param separator - String separator for merged label values
 * @returns overlaps - Array of all overlapping thumbs from the index
 */
var getOverlaps = function getOverlaps(index, offsets, thumbs, values, separator, decimalPlaces, valueToLabel) {
    if (valueToLabel === void 0) {
        valueToLabel = function valueToLabel(value) {
            return value;
        };
    }
    var overlaps = [];
    /**
     * Recursive function for building the overlaps Array
     * If an overlap is found, find the overlaps for that overlap
     * @param thumbIndex current Thumb index to find overlaps from
     */
    var buildOverlaps = function buildOverlaps(thumbIndex) {
        var thumbXWidth = getThumbWidth(thumbs[thumbIndex], values[thumbIndex], separator, decimalPlaces, valueToLabel);
        var thumbX = offsets[thumbIndex].x;
        /**
         * Iterate through the Thumb offsets, if there is a match
         * add the thumbIndex and siblingIndex to the overlaps Array
         *
         * Then build overlaps from the overlapping siblingIndex
         */
        offsets.forEach(function (_a, siblingIndex) {
            var siblingX = _a.x;
            var siblingWidth = getThumbWidth(thumbs[siblingIndex], values[siblingIndex], separator, decimalPlaces, valueToLabel);
            if (thumbIndex !== siblingIndex && (thumbX >= siblingX && thumbX <= siblingX + siblingWidth || thumbX + thumbXWidth >= siblingX && thumbX + thumbXWidth <= siblingX + siblingWidth)) {
                if (!overlaps.includes(siblingIndex)) {
                    overlaps.push(thumbIndex);
                    overlaps.push(siblingIndex);
                    overlaps = __spreadArrays(overlaps, [thumbIndex, siblingIndex]);
                    buildOverlaps(siblingIndex);
                }
            }
        });
    };
    buildOverlaps(index);
    // Sort and remove duplicates from the built overlaps
    return Array.from(new Set(overlaps.sort()));
};
/**
 * A custom React Hook for calculating whether a thumb overlaps
 * another and whether labels could/should merge.
 * @param rangeRef - React ref value of Range component
 * @param values - current Range values Array
 * @param index - thumb index
 * @param step - step value, used to calculate the number of decimal places
 * @param separator - string to separate thumb values
 * @returns label value + styling for thumb label
 */
exports.useThumbOverlap = function (rangeRef, values, index, step, separator, valueToLabel) {
    if (step === void 0) {
        step = 0.1;
    }
    if (separator === void 0) {
        separator = ' - ';
    }
    if (valueToLabel === void 0) {
        valueToLabel = function valueToLabel(value) {
            return value;
        };
    }
    var decimalPlaces = exports.getStepDecimals(step);
    // Create initial label style and value. Label value defaults to thumb value
    var _a = react_1.useState({}),
        labelStyle = _a[0],
        setLabelStyle = _a[1];
    var _b = react_1.useState(valueToLabel(values[index].toFixed(decimalPlaces))),
        labelValue = _b[0],
        setLabelValue = _b[1];
    // When the rangeRef or values change, update the Thumb label values and styling
    react_1.useEffect(function () {
        if (rangeRef) {
            var thumbs = rangeRef.getThumbs();
            if (thumbs.length < 1) return;
            var newStyle = {};
            var offsets_1 = rangeRef.getOffsets();
            /**
             * Get any overlaps for the given Thumb index. This must return all linked
             * Thumbs. So if there are 4 Thumbs and Thumbs 2, 3 and 4 overlap. If we are
             * getting the overlaps for Thumb 1 and it overlaps only Thumb 2, we must get
             * 2, 3 and 4 also.
             */
            var overlaps = getOverlaps(index, offsets_1, thumbs, values, separator, decimalPlaces, valueToLabel);
            // Set a default label value of the Thumb value
            var labelValue_1 = valueToLabel(values[index].toFixed(decimalPlaces));
            /**
             * If there are overlaps for the Thumb, we need to calculate the correct
             * Label value along with the relevant styling. We only want to show a Label
             * for the left most Thumb in an overlapping set.
             * All other Thumbs will be set to display: none.
             */
            if (overlaps.length) {
                /**
                 * Get an Array of the offsets for the overlapping Thumbs
                 * This is so we can determine if the Thumb we are looking at
                 * is the left most thumb in an overlapping set
                 */
                var offsetsX = overlaps.reduce(function (a, c, i, s) {
                    return a.length ? __spreadArrays(a, [offsets_1[s[i]].x]) : [offsets_1[s[i]].x];
                }, []);
                /**
                 * If our Thumb is the left most Thumb, we can build a Label value
                 * and set the style for that Label
                 */
                if (Math.min.apply(Math, offsetsX) === offsets_1[index].x) {
                    /**
                     * First calculate the Label value. To do this,
                     * grab all the values for the Thumbs in our overlaps.
                     * Then convert that to a Set and sort it whilst removing duplicates.
                     */
                    var labelValues_1 = [];
                    overlaps.forEach(function (thumb) {
                        labelValues_1.push(values[thumb].toFixed(decimalPlaces));
                    });
                    /**
                     *  Update the labelValue with the resulting Array
                     *  joined by our defined separator
                     */
                    labelValue_1 = Array.from(new Set(labelValues_1.sort(function (a, b) {
                        return parseFloat(a) - parseFloat(b);
                    }))).map(valueToLabel).join(separator);
                    /**
                     * Lastly, build the label styling. The label styling will
                     * position the label and apply a transform so that it's centered.
                     * We want the center point between the left edge of the left most Thumb
                     * and the right edge of the right most Thumb.
                     */
                    var first = Math.min.apply(Math, offsetsX);
                    var last = Math.max.apply(Math, offsetsX);
                    var lastWidth = thumbs[overlaps[offsetsX.indexOf(last)]].getBoundingClientRect().width;
                    newStyle.left = Math.abs(first - (last + lastWidth)) / 2 + "px";
                    newStyle.transform = 'translate(-50%, 0)';
                } else {
                    // If the Thumb isn't the left most Thumb, hide the Label!
                    newStyle.visibility = 'hidden';
                }
            }
            // Update the label value and style
            setLabelValue(labelValue_1);
            setLabelStyle(newStyle);
        }
    }, [rangeRef, values]);
    return [labelValue, labelStyle];
};

/***/ }),

/***/ "AQ6k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,
    hooks_module_u,
    hooks_module_r,
    hooks_module_o = 0,
    hooks_module_i = [],
    c = preact_min["options"].__r,
    f = preact_min["options"].diffed,
    hooks_module_e = preact_min["options"].__c,
    a = preact_min["options"].unmount;function v(t, r) {
  preact_min["options"].__h && preact_min["options"].__h(hooks_module_u, t, hooks_module_o || r), hooks_module_o = 0;var i = hooks_module_u.__H || (hooks_module_u.__H = { __: [], __h: [] });return t >= i.__.length && i.__.push({}), i.__[t];
}function m(n) {
  return hooks_module_o = 1, p(k, n);
}function p(n, r, o) {
  var i = v(hooks_module_t++, 2);return i.t = n, i.__c || (i.__c = hooks_module_u, i.__ = [o ? o(r) : k(void 0, r), function (n) {
    var t = i.t(i.__[0], n);i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }]), i.__;
}function y(r, o) {
  var i = v(hooks_module_t++, 3);!preact_min["options"].__s && j(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__H.__h.push(i));
}function l(r, o) {
  var i = v(hooks_module_t++, 4);!preact_min["options"].__s && j(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__h.push(i));
}function h(n) {
  return hooks_module_o = 5, _(function () {
    return { current: n };
  }, []);
}function s(n, t, u) {
  hooks_module_o = 6, l(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}function _(n, u) {
  var r = v(hooks_module_t++, 7);return j(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}function A(n, t) {
  return hooks_module_o = 8, _(function () {
    return n;
  }, t);
}function F(n) {
  var r = hooks_module_u.context[n.__c],
      o = v(hooks_module_t++, 9);return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(hooks_module_u)), r.props.value) : n.__;
}function T(t, u) {
  preact_min["options"].useDebugValue && preact_min["options"].useDebugValue(u ? u(t) : t);
}function d(n) {
  var r = v(hooks_module_t++, 10),
      o = m();return r.__ = n, hooks_module_u.componentDidCatch || (hooks_module_u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}function q() {
  hooks_module_i.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(b), t.__H.__h.forEach(g), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], preact_min["options"].__e(u, t.__v), !0;
    }
  }), hooks_module_i = [];
}preact_min["options"].__r = function (n) {
  c && c(n), hooks_module_t = 0;var r = (hooks_module_u = n.__c).__H;r && (r.__h.forEach(b), r.__h.forEach(g), r.__h = []);
}, preact_min["options"].diffed = function (t) {
  f && f(t);var u = t.__c;u && u.__H && u.__H.__h.length && (1 !== hooks_module_i.push(u) && hooks_module_r === preact_min["options"].requestAnimationFrame || ((hooks_module_r = preact_min["options"].requestAnimationFrame) || function (n) {
    var t,
        u = function u() {
      clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);x && (t = requestAnimationFrame(u));
  })(q));
}, preact_min["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(b), t.__h = t.__h.filter(function (n) {
        return !n.__ || g(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact_min["options"].__e(r, t.__v);
    }
  }), hooks_module_e && hooks_module_e(t, u);
}, preact_min["options"].unmount = function (t) {
  a && a(t);var u = t.__c;if (u && u.__H) try {
    u.__H.__.forEach(b);
  } catch (t) {
    preact_min["options"].__e(t, u.__v);
  }
};var x = "function" == typeof requestAnimationFrame;function b(n) {
  "function" == typeof n.u && n.u();
}function g(n) {
  n.u = n.__();
}function j(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}function k(n, t) {
  return "function" == typeof t ? t(n) : t;
}
//# sourceMappingURL=hooks.module.js.map
// CONCATENATED MODULE: ../node_modules/preact/compat/dist/compat.module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return compat_module_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return compat_module_k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return L; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useState", function() { return m; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useRef", function() { return h; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useMemo", function() { return _; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return d; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createElement", function() { return preact_min["createElement"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createContext", function() { return preact_min["createContext"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createRef", function() { return preact_min["createRef"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact_min["Fragment"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Component", function() { return preact_min["Component"]; });
function w(n, t) {
  for (var e in t) {
    n[e] = t[e];
  }return n;
}function compat_module_x(n, t) {
  for (var e in n) {
    if ("__source" !== e && !(e in t)) return !0;
  }for (var r in t) {
    if ("__source" !== r && n[r] !== t[r]) return !0;
  }return !1;
}var E = function (n) {
  var t, e;function r(t) {
    var e;return (e = n.call(this, t) || this).isPureReactComponent = !0, e;
  }return e = n, (t = r).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, r.prototype.shouldComponentUpdate = function (n, t) {
    return compat_module_x(this.props, n) || compat_module_x(this.state, t);
  }, r;
}(preact_min["Component"]);function C(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : compat_module_x(this.props, n);
  }function r(t) {
    return this.shouldComponentUpdate = e, Object(preact_min["createElement"])(n, t);
  }return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.t = !0, r;
}var compat_module__ = preact_min["options"].__b;preact_min["options"].__b = function (n) {
  n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), compat_module__ && compat_module__(n);
};var compat_module_A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;function compat_module_k(n) {
  function t(t, e) {
    var r = w({}, t);return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
  }return t.$$typeof = compat_module_A, t.render = t, t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}var compat_module_R = function R(n, t) {
  return n ? Object(preact_min["toChildArray"])(n).reduce(function (n, e, r) {
    return n.concat(t(e, r));
  }, []) : null;
},
    compat_module_F = { map: compat_module_R, forEach: compat_module_R, count: function count(n) {
    return n ? Object(preact_min["toChildArray"])(n).length : 0;
  }, only: function only(n) {
    if (1 !== (n = Object(preact_min["toChildArray"])(n)).length) throw new Error("Children.only() expects only one child.");return n[0];
  }, toArray: preact_min["toChildArray"] },
    N = preact_min["options"].__e;function U(n) {
  return n && ((n = w({}, n)).__c = null, n.__k = n.__k && n.__k.map(U)), n;
}function M() {
  this.__u = 0, this.o = null, this.__b = null;
}function compat_module_j(n) {
  var t = n.__.__c;return t && t.u && t.u(n);
}function L(n) {
  var t, e, r;function o(o) {
    if (t || (t = n()).then(function (n) {
      e = n.default || n;
    }, function (n) {
      r = n;
    }), r) throw r;if (!e) throw t;return Object(preact_min["createElement"])(e, o);
  }return o.displayName = "Lazy", o.t = !0, o;
}function O() {
  this.i = null, this.l = null;
}preact_min["options"].__e = function (n, t, e) {
  if (n.then) for (var r, o = t; o = o.__;) {
    if ((r = o.__c) && r.__c) return r.__c(n, t.__c);
  }N(n, t, e);
}, (M.prototype = new preact_min["Component"]()).__c = function (n, t) {
  var e = this;null == e.o && (e.o = []), e.o.push(t);var r = compat_module_j(e.__v),
      o = !1,
      u = function u() {
    o || (o = !0, r ? r(i) : i());
  };t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
    u(), t.__c && t.__c();
  };var i = function i() {
    var n;if (! --e.__u) for (e.__v.__k[0] = e.state.u, e.setState({ u: e.__b = null }); n = e.o.pop();) {
      n.forceUpdate();
    }
  };e.__u++ || e.setState({ u: e.__b = e.__v.__k[0] }), n.then(u, u);
}, M.prototype.render = function (n, t) {
  return this.__b && (this.__v.__k && (this.__v.__k[0] = U(this.__b)), this.__b = null), [Object(preact_min["createElement"])(preact_min["Fragment"], null, t.u ? null : n.children), t.u && n.fallback];
};var P = function P(n, t, e) {
  if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
    for (; e.length > 3;) {
      e.pop()();
    }if (e[1] < e[0]) break;n.i = e = e[2];
  }
};(O.prototype = new preact_min["Component"]()).u = function (n) {
  var t = this,
      e = compat_module_j(t.__v),
      r = t.l.get(n);return r[0]++, function (o) {
    var u = function u() {
      t.props.revealOrder ? (r.push(o), P(t, n, r)) : o();
    };e ? e(u) : u();
  };
}, O.prototype.render = function (n) {
  this.i = null, this.l = new Map();var t = Object(preact_min["toChildArray"])(n.children);n.revealOrder && "b" === n.revealOrder[0] && t.reverse();for (var e = t.length; e--;) {
    this.l.set(t[e], this.i = [1, 0, this.i]);
  }return n.children;
}, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function () {
  var n = this;n.l.forEach(function (t, e) {
    P(n, e, t);
  });
};var W = function () {
  function n() {}var t = n.prototype;return t.getChildContext = function () {
    return this.props.context;
  }, t.render = function (n) {
    return n.children;
  }, n;
}();function z(n) {
  var t = this,
      e = n.container,
      r = Object(preact_min["createElement"])(W, { context: t.context }, n.vnode);return t.s && t.s !== e && (t.v.parentNode && t.s.removeChild(t.v), Object(preact_min["__u"])(t.h), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, Object(preact_min["render"])(r, e), t.__k = e.__k) : (t.v = document.createTextNode(""), Object(preact_min["hydrate"])("", e), e.appendChild(t.v), t.p = !0, t.s = e, Object(preact_min["render"])(r, e, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), Object(preact_min["__u"])(t.h)), t.h = r, t.componentWillUnmount = function () {
    t.v.parentNode && t.s.removeChild(t.v), Object(preact_min["__u"])(t.h);
  }, null;
}function D(n, t) {
  return Object(preact_min["createElement"])(z, { vnode: n, container: t });
}var H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;preact_min["Component"].prototype.isReactComponent = {};var compat_module_T = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;function V(n, t, e) {
  if (null == t.__k) for (; t.firstChild;) {
    t.removeChild(t.firstChild);
  }return Object(preact_min["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}function Z(n, t, e) {
  return Object(preact_min["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}var I = preact_min["options"].event;function $(n, t) {
  n["UNSAFE_" + t] && !n[t] && Object.defineProperty(n, t, { configurable: !1, get: function get() {
      return this["UNSAFE_" + t];
    }, set: function set(n) {
      this["UNSAFE_" + t] = n;
    } });
}preact_min["options"].event = function (n) {
  I && (n = I(n)), n.persist = function () {};var t = !1,
      e = !1,
      r = n.stopPropagation;n.stopPropagation = function () {
    r.call(n), t = !0;
  };var o = n.preventDefault;return n.preventDefault = function () {
    o.call(n), e = !0;
  }, n.isPropagationStopped = function () {
    return t;
  }, n.isDefaultPrevented = function () {
    return e;
  }, n.nativeEvent = n;
};var compat_module_q = { configurable: !0, get: function get() {
    return this.class;
  } },
    B = preact_min["options"].vnode;preact_min["options"].vnode = function (n) {
  n.$$typeof = compat_module_T;var t = n.type,
      e = n.props;if (t) {
    if (e.class != e.className && (compat_module_q.enumerable = "className" in e, null != e.className && (e.class = e.className), Object.defineProperty(e, "className", compat_module_q)), "function" != typeof t) {
      var r, o, u;for (u in e.defaultValue && void 0 !== e.value && (e.value || 0 === e.value || (e.value = e.defaultValue), delete e.defaultValue), Array.isArray(e.value) && e.multiple && "select" === t && (Object(preact_min["toChildArray"])(e.children).forEach(function (n) {
        -1 != e.value.indexOf(n.props.value) && (n.props.selected = !0);
      }), delete e.value), e) {
        if (r = H.test(u)) break;
      }if (r) for (u in o = n.props = {}, e) {
        o[H.test(u) ? u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u] = e[u];
      }
    }!function (t) {
      var e = n.type,
          r = n.props;if (r && "string" == typeof e) {
        var o = {};for (var u in r) {
          /^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;
        }if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
          var i = o.oninput || "oninput";r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
        }
      }
    }(), "function" == typeof t && !t.m && t.prototype && ($(t.prototype, "componentWillMount"), $(t.prototype, "componentWillReceiveProps"), $(t.prototype, "componentWillUpdate"), t.m = !0);
  }B && B(n);
};var G = "16.8.0";function J(n) {
  return preact_min["createElement"].bind(null, n);
}function K(n) {
  return !!n && n.$$typeof === compat_module_T;
}function Q(n) {
  return K(n) ? preact_min["cloneElement"].apply(null, arguments) : n;
}function X(n) {
  return !!n.__k && (Object(preact_min["render"])(null, n), !0);
}function Y(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}var nn = function nn(n, t) {
  return n(t);
},
    tn = preact_min["Fragment"];/* harmony default export */ var compat_module = __webpack_exports__["default"] = ({ useState: m, useReducer: p, useEffect: y, useLayoutEffect: l, useRef: h, useImperativeHandle: s, useMemo: _, useCallback: A, useContext: F, useDebugValue: T, version: "16.8.0", Children: compat_module_F, render: V, hydrate: Z, unmountComponentAtNode: X, createPortal: D, createElement: preact_min["createElement"], createContext: preact_min["createContext"], createFactory: J, cloneElement: Q, createRef: preact_min["createRef"], Fragment: preact_min["Fragment"], isValidElement: K, findDOMNode: Y, Component: preact_min["Component"], PureComponent: E, memo: C, forwardRef: compat_module_k, unstable_batchedUpdates: nn, StrictMode: preact_min["Fragment"], Suspense: M, SuspenseList: O, lazy: L });
//# sourceMappingURL=compat.module.js.map

/***/ }),

/***/ "ARLd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__("d9qy");

var IsPropertyKey = __webpack_require__("mmlB");
var Type = __webpack_require__("QalR");

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

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

/***/ "Axko":
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "B6/o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function binder() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(that, args.concat(slice.call(arguments)));
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

/***/ }),

/***/ "BHeu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3dLy"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("Fhqp"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("U8F3"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("IxO8"));

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _airbnbPropTypes = __webpack_require__("qe4R");

var _react = _interopRequireDefault(__webpack_require__("AQ6k"));

var _reactWithStyles = __webpack_require__("ooNQ");

var _SliderConstants = __webpack_require__("mwu8");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });keys.push.apply(keys, symbols);
  }return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }return target;
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  orientation: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  style: _propTypes["default"].object
}));
var defaultProps = {
  orientation: _SliderConstants.HORIZONTAL,
  disabled: false,
  style: {}
};

function DefaultProgressBar(_ref) {
  var css = _ref.css,
      styles = _ref.styles,
      theme = _ref.theme,
      orientation = _ref.orientation,
      disabled = _ref.disabled,
      style = _ref.style,
      passProps = (0, _objectWithoutProperties2["default"])(_ref, ["css", "styles", "theme", "orientation", "disabled", "style"]);
  return _react["default"].createElement("div", (0, _extends2["default"])({}, css.apply(void 0, [styles.DefaultProgressBar_progressBar].concat((0, _toConsumableArray2["default"])(orientation === _SliderConstants.VERTICAL ? [styles.DefaultProgressBar__vertical, styles.DefaultProgressBar_background__vertical, styles.DefaultProgressBar_progressBar__vertical] : [styles.DefaultProgressBar_background__horizontal]), [disabled && styles.progressBar_disabled, style])), passProps));
}

DefaultProgressBar.propTypes = propTypes;
DefaultProgressBar.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$rheostat = _ref2.rheostat,
      color = _ref2$rheostat.color,
      unit = _ref2$rheostat.unit;
  return {
    DefaultProgressBar__vertical: {
      width: 3 * unit,
      height: '100%'
    },
    DefaultProgressBar_progressBar: {
      backgroundColor: color.progressBar,
      position: 'absolute'
    },
    DefaultProgressBar_progressBar__vertical: {
      height: '100%',
      width: 3 * unit
    },
    DefaultProgressBar_background__vertical: {
      height: '100%',
      top: 0,
      width: 2 * unit - 1
    },
    DefaultProgressBar_background__horizontal: {
      height: 2 * unit - 3,
      top: 0
    }
  };
})(DefaultProgressBar);

exports["default"] = _default;

/***/ }),

/***/ "BMG/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getClassName;

/**
 * Construct a class name.
 *
 * namespace {String} Used to construct unique class names.
 * styleName {String} Name identifying the specific style.
 *
 * Return the class name.
 */
function getClassName(namespace, styleName) {
  var namespaceSegment = namespace.length > 0 ? "".concat(namespace, "__") : '';
  return "".concat(namespaceSegment).concat(styleName);
}

/***/ }),

/***/ "BXKc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__("0v1l");

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

/***/ }),

/***/ "Bcfi":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "BokN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}

function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);

    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination;
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination;
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument);
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument);
    } else {
        return mergeObject(target, source, optionsArgument);
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements');
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function (prev, next) {
        return deepmerge(prev, next, optionsArgument);
    });
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);

/***/ }),

/***/ "C9JE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d7ea0ef080bf3093f5de483bab4e62af.png";

/***/ }),

/***/ "CDPk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_SPECIFICITY = exports.GLOBAL_CACHE_KEY = void 0;
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
var MAX_SPECIFICITY = 20;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ "CebH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5ToInteger = __webpack_require__("nBsr");

var ToNumber = __webpack_require__("VlLp");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

/***/ }),

/***/ "DQd/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

/***/ }),

/***/ "DhUb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("ar57");
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0; // eslint-disable-line no-param-reassign

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};

/***/ }),

/***/ "E7HD":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "EGJG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * on-finished
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = onFinished;
module.exports.isFinished = isFinished;

/**
 * Module dependencies.
 * @private
 */

var first = __webpack_require__("qqQ8");

/**
 * Variables.
 * @private
 */

/* istanbul ignore next */
var defer = typeof setImmediate === 'function' ? setImmediate : function (fn) {
  process.nextTick(fn.bind.apply(fn, arguments));
};

/**
 * Invoke callback when the response has finished, useful for
 * cleaning up resources afterwards.
 *
 * @param {object} msg
 * @param {function} listener
 * @return {object}
 * @public
 */

function onFinished(msg, listener) {
  if (isFinished(msg) !== false) {
    defer(listener, null, msg);
    return msg;
  }

  // attach the listener to the message
  attachListener(msg, listener);

  return msg;
}

/**
 * Determine if message is already finished.
 *
 * @param {object} msg
 * @return {boolean}
 * @public
 */

function isFinished(msg) {
  var socket = msg.socket;

  if (typeof msg.finished === 'boolean') {
    // OutgoingMessage
    return Boolean(msg.finished || socket && !socket.writable);
  }

  if (typeof msg.complete === 'boolean') {
    // IncomingMessage
    return Boolean(msg.upgrade || !socket || !socket.readable || msg.complete && !msg.readable);
  }

  // don't know
  return undefined;
}

/**
 * Attach a finished listener to the message.
 *
 * @param {object} msg
 * @param {function} callback
 * @private
 */

function attachFinishedListener(msg, callback) {
  var eeMsg;
  var eeSocket;
  var finished = false;

  function onFinish(error) {
    eeMsg.cancel();
    eeSocket.cancel();

    finished = true;
    callback(error);
  }

  // finished on first message event
  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish);

  function onSocket(socket) {
    // remove listener
    msg.removeListener('socket', onSocket);

    if (finished) return;
    if (eeMsg !== eeSocket) return;

    // finished on first socket event
    eeSocket = first([[socket, 'error', 'close']], onFinish);
  }

  if (msg.socket) {
    // socket already assigned
    onSocket(msg.socket);
    return;
  }

  // wait for socket to be assigned
  msg.on('socket', onSocket);

  if (msg.socket === undefined) {
    // node.js 0.8 patch
    patchAssignSocket(msg, onSocket);
  }
}

/**
 * Attach the listener to the message.
 *
 * @param {object} msg
 * @return {function}
 * @private
 */

function attachListener(msg, listener) {
  var attached = msg.__onFinished;

  // create a private single listener with queue
  if (!attached || !attached.queue) {
    attached = msg.__onFinished = createListener(msg);
    attachFinishedListener(msg, attached);
  }

  attached.queue.push(listener);
}

/**
 * Create listener on message.
 *
 * @param {object} msg
 * @return {function}
 * @private
 */

function createListener(msg) {
  function listener(err) {
    if (msg.__onFinished === listener) msg.__onFinished = null;
    if (!listener.queue) return;

    var queue = listener.queue;
    listener.queue = null;

    for (var i = 0; i < queue.length; i++) {
      queue[i](err, msg);
    }
  }

  listener.queue = [];

  return listener;
}

/**
 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
 *
 * @param {ServerResponse} res
 * @param {function} callback
 * @private
 */

function patchAssignSocket(res, callback) {
  var assignSocket = res.assignSocket;

  if (typeof assignSocket !== 'function') return;

  // res.on('socket', callback) is broken in 0.8
  res.assignSocket = function _assignSocket(socket) {
    assignSocket.call(this, socket);
    callback(socket);
  };
}

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

/***/ "Fhqp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("XfJI");

var iterableToArray = __webpack_require__("OMTj");

var unsupportedIterableToArray = __webpack_require__("UyFj");

var nonIterableSpread = __webpack_require__("wF/n");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "FwyB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__("5Mk3");

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

/***/ }),

/***/ "FyO1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};

/***/ }),

/***/ "G3al":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GMRz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Bcfi").inspect;

/***/ }),

/***/ "H1RQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("RsE0");
} else {
  module.exports = require('./cjs/react-is.development.js');
}

/***/ }),

/***/ "H5HI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;

/***/ }),

/***/ "HOM9":
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "I+tp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("58Ti");

var GetIntrinsic = __webpack_require__("LENn");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};

/***/ }),

/***/ "I85G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = __webpack_require__("mmlB");
var Type = __webpack_require__("QalR");

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

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

/***/ "IxO8":
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "JG2J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// This function takes an array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var classNames = []; // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.

  var hasInlineStyles = false;
  var inlineStyles = {}; // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.

  for (var i = 0; i < stylesArray.length; i++) {
    // eslint-disable-line no-plusplus
    var style = stylesArray[i]; // If this  style is falsy, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)

    if (style) {
      if (typeof style === 'string') {
        classNames.push(style);
      } else {
        _extends(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    classNames: classNames,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}

var _default = separateStyles;
exports["default"] = _default;

/***/ }),

/***/ "JJMv":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("N+JA").default;

/***/ }),

/***/ "JTVQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = __webpack_require__("I+tp");

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};

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

// EXTERNAL MODULE: ../node_modules/preact/compat/dist/compat.module.js + 1 modules
var compat_module = __webpack_require__("AQ6k");

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../node_modules/react-redux/es/components/Context.js

var ReactReduxContext =
/*#__PURE__*/
compat_module["default"].createContext(null);

if (false) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ../node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(compat_module["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(compat_module["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(compat_module["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return compat_module["default"].createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (false) {}

/* harmony default export */ var components_Provider = (Provider);
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("89El");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ../node_modules/react-is/index.js
var react_is = __webpack_require__("H1RQ");
var react_is_default = /*#__PURE__*/__webpack_require__.n(react_is);

// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? compat_module["useLayoutEffect"] : compat_module["useEffect"];
// CONCATENATED MODULE: ../node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (false) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

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

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? compat_module["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(compat_module["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(compat_module["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(compat_module["default"].createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(compat_module["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(compat_module["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(compat_module["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(compat_module["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(compat_module["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(compat_module["useRef"])();
      var lastWrapperProps = Object(compat_module["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(compat_module["useRef"])();
      var renderIsScheduled = Object(compat_module["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(compat_module["useMemo"])(function () {
        return compat_module["default"].createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(compat_module["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return compat_module["default"].createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? compat_module["default"].memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = compat_module["default"].forwardRef(function forwardConnectRef(props, ref) {
        return compat_module["default"].createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/shallowEqual.js
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
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
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


// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject_isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning_warning(message) {
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
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject_verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject_isPlainObject(value)) {
    warning_warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


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

      if (false) verifyPlainObject(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/mapDispatchToProps.js


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
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
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
        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
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
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning_warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors_verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/selectorFactory.js


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
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function connect_match(arg, factories, name) {
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
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = connect_match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = connect_match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = connect_match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
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
/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ../node_modules/react-redux/es/hooks/useReduxContext.js


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(compat_module["useContext"])(ReactReduxContext);

  if (false) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}
// CONCATENATED MODULE: ../node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(compat_module["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore =
/*#__PURE__*/
createStoreHook();
// CONCATENATED MODULE: ../node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();
// CONCATENATED MODULE: ../node_modules/react-redux/es/hooks/useSelector.js






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(compat_module["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(compat_module["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(compat_module["useRef"])();
  var latestSelector = Object(compat_module["useRef"])();
  var latestStoreState = Object(compat_module["useRef"])();
  var latestSelectedState = Object(compat_module["useRef"])();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */

function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(compat_module["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (false) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    Object(compat_module["useDebugValue"])(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector_useSelector =
/*#__PURE__*/
createSelectorHook();
// CONCATENATED MODULE: ../node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ../node_modules/react-redux/es/index.js










setBatch(compat_module["unstable_batchedUpdates"]);

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
// CONCATENATED MODULE: ../node_modules/preact/devtools/dist/devtools.module.js
"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.4.6", preact_min["options"], { Fragment: preact_min["Fragment"], Component: preact_min["Component"] });
//# sourceMappingURL=devtools.module.js.map
// CONCATENATED MODULE: ../node_modules/preact/debug/dist/debug.module.js
var debug_module_o = {};function debug_module_r() {
  debug_module_o = {};
}function debug_module_a(n) {
  return n.type === preact_min["Fragment"] ? "Fragment" : "function" == typeof n.type ? n.type.displayName || n.type.name : "string" == typeof n.type ? n.type : "#text";
}var debug_module_i = [],
    s = [];function debug_module_c() {
  return debug_module_i.length > 0 ? debug_module_i[debug_module_i.length - 1] : null;
}var debug_module_l = !1;function u(n) {
  return "function" == typeof n.type && n.type != preact_min["Fragment"];
}function p(n) {
  for (var e = [n], t = n; null != t.__o;) {
    e.push(t.__o), t = t.__o;
  }return e.reduce(function (n, e) {
    n += "  in " + debug_module_a(e);var t = e.__source;return t ? n += " (at " + t.fileName + ":" + t.lineNumber + ")" : debug_module_l || (debug_module_l = !0, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n + "\n";
  }, "");
}var f = "function" == typeof WeakMap,
    debug_module_d = preact_min["Component"].prototype.setState;preact_min["Component"].prototype.setState = function (n, e) {
  return null == this.__v ? null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + p(debug_module_c())) : null == this.__P && console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + p(this.__v)), debug_module_d.call(this, n, e);
};var debug_module_h = preact_min["Component"].prototype.forceUpdate;function y(n) {
  var e = n.props,
      t = debug_module_a(n),
      o = "";for (var r in e) {
    if (e.hasOwnProperty(r) && "children" !== r) {
      var i = e[r];"function" == typeof i && (i = "function " + (i.displayName || i.name) + "() {}"), i = Object(i) !== i || i.toString ? i + "" : Object.prototype.toString.call(i), o += " " + r + "=" + JSON.stringify(i);
    }
  }var s = e.children;return "<" + t + o + (s && s.length ? ">..</" + t + ">" : " />");
}preact_min["Component"].prototype.forceUpdate = function (n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + p(debug_module_c())) : null == this.__P && console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' + p(this.__v)), debug_module_h.call(this, n);
}, function () {
  !function () {
    var e = preact_min["options"].__b,
        t = preact_min["options"].diffed,
        o = preact_min["options"].__,
        r = preact_min["options"].vnode,
        a = preact_min["options"].__r;preact_min["options"].diffed = function (n) {
      u(n) && s.pop(), debug_module_i.pop(), t && t(n);
    }, preact_min["options"].__b = function (n) {
      u(n) && debug_module_i.push(n), e && e(n);
    }, preact_min["options"].__ = function (n, e) {
      s = [], o && o(n, e);
    }, preact_min["options"].vnode = function (n) {
      n.__o = s.length > 0 ? s[s.length - 1] : null, r && r(n);
    }, preact_min["options"].__r = function (n) {
      u(n) && s.push(n), a && a(n);
    };
  }();var e = preact_min["options"].__b,
      t = preact_min["options"].diffed,
      r = preact_min["options"].vnode,
      c = preact_min["options"].__e,
      l = preact_min["options"].__,
      d = preact_min["options"].__h,
      h = f ? { useEffect: new WeakMap(), useLayoutEffect: new WeakMap(), lazyPropTypes: new WeakMap() } : null;preact_min["options"].__e = function (n, e, t) {
    if (e && e.__c && "function" == typeof n.then) {
      var o = n;n = new Error("Missing Suspense. The throwing component was: " + debug_module_a(e));for (var r = e; r; r = r.__) {
        if (r.__c && r.__c.__c) {
          n = o;break;
        }
      }if (n instanceof Error) throw n;
    }c(n, e, t);
  }, preact_min["options"].__ = function (n, e) {
    if (!e) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch (e.nodeType) {case 1:case 11:case 9:
        t = !0;break;default:
        t = !1;}if (!t) {
      var o = debug_module_a(n);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + e + " instead: render(<" + o + " />, " + e + ");");
    }l && l(n, e);
  }, preact_min["options"].__b = function (n) {
    var t,
        r,
        i,
        s = n.type,
        c = function n(e) {
      return e ? "function" == typeof e.type ? n(e.__) : e : {};
    }(n.__);if (void 0 === s) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(n) + "\n\n" + p(n));if (null != s && "object" == typeof s) {
      if (void 0 !== s.__k && void 0 !== s.__e) throw new Error("Invalid type passed to createElement(): " + s + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + debug_module_a(n) + " = " + y(s) + ";\n  let vnode = <My" + debug_module_a(n) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + p(n));throw new Error("Invalid type passed to createElement(): " + (Array.isArray(s) ? "array" : s));
    }if ("thead" !== s && "tfoot" !== s && "tbody" !== s || "table" === c.type ? "tr" === s && "thead" !== c.type && "tfoot" !== c.type && "tbody" !== c.type && "table" !== c.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(n) + "\n\n" + p(n)) : "td" === s && "tr" !== c.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(n) + "\n\n" + p(n)) : "th" === s && "tr" !== c.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(n) + "\n\n" + p(n)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(n) + "\n\n" + p(n)), void 0 !== n.ref && "function" != typeof n.ref && "object" != typeof n.ref && !("$$typeof" in n)) throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got [' + typeof n.ref + "] instead\n" + y(n) + "\n\n" + p(n));if ("string" == typeof n.type) for (var l in n.props) {
      if ("o" === l[0] && "n" === l[1] && "function" != typeof n.props[l] && null != n.props[l]) throw new Error("Component's \"" + l + '" property should be a function, but got [' + typeof n.props[l] + "] instead\n" + y(n) + "\n\n" + p(n));
    }if ("function" == typeof n.type && n.type.propTypes) {
      if ("Lazy" === n.type.displayName && h && !h.lazyPropTypes.has(n.type)) {
        var u = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try {
          var f = n.type();h.lazyPropTypes.set(n.type, !0), console.warn(u + "Component wrapped in lazy() is " + debug_module_a(f));
        } catch (n) {
          console.warn(u + "We will log the wrapped component's name once it is loaded.");
        }
      }t = n.type.propTypes, r = n.props, i = debug_module_a(n), Object.keys(t).forEach(function (n) {
        var e;try {
          e = t[n](r, n, i, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
        } catch (n) {
          e = n;
        }!e || e.message in debug_module_o || (debug_module_o[e.message] = !0, console.error("Failed prop type: " + e.message));
      });
    }e && e(n);
  }, preact_min["options"].__h = function (n, e, t) {
    if (!n) throw new Error("Hook can only be invoked from render methods.");d && d(n, e, t);
  };var m = function m(n, e) {
    return { get: function get() {
        console.warn("getting vnode." + n + " is deprecated, " + e);
      }, set: function set() {
        console.warn("setting vnode." + n + " is not allowed, " + e);
      } };
  },
      v = { nodeName: m("nodeName", "use vnode.type"), attributes: m("attributes", "use vnode.props"), children: m("children", "use vnode.props.children") },
      b = Object.create({}, v);preact_min["options"].vnode = function (n) {
    var e = n.props;if (null !== n.type && null != e && ("__source" in e || "__self" in e)) {
      var t = n.props = {};for (var o in e) {
        var a = e[o];"__source" === o ? n.__source = a : "__self" === o ? n.__self = a : t[o] = a;
      }
    }n.__proto__ = b, r && r(n);
  }, preact_min["options"].diffed = function (n) {
    n.__k && n.__k.forEach(function (e) {
      if (e && void 0 === e.type) {
        delete e.__, delete e.__b;var t = Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t + "}.\n\n" + p(n));
      }
    });var e = n.__c;if (e && e.__H) {
      var o = e.__H;Array.isArray(o.__) && o.__.forEach(function (e) {
        if (e.__h && (!e.__H || !Array.isArray(e.__H))) {
          var t = debug_module_a(n);console.warn("In " + t + " you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.\n\n" + p(n));
        }
      });
    }if (t && t(n), null != n.__k) for (var r = [], i = 0; i < n.__k.length; i++) {
      var s = n.__k[i];if (s && null != s.key) {
        var c = s.key;if (-1 !== r.indexOf(c)) {
          console.error('Following component has two or more children with the same key attribute: "' + c + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(n) + "\n\n" + p(n));break;
        }r.push(c);
      }
    }
  };
}();
//# sourceMappingURL=debug.module.js.map
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
var _dec, navItem__class;



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var navItem_navItem = (_dec = connect_connect(reducer_0, actions_namespaceObject), _dec(navItem__class = function (_Component) {
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
}(preact_min["Component"])) || navItem__class);


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

var nav__ref3 = Object(preact_min["h"])(components_navItem, { itemId: 'about', text: 'About' });

var nav__ref4 = Object(preact_min["h"])(components_navItem, { itemId: 'timeline', text: 'Timeline' });

var nav__ref5 = Object(preact_min["h"])(components_navItem, { itemId: 'material', text: 'Material' });

var nav__ref6 = Object(preact_min["h"])(components_navItem, { itemId: 'rules', text: 'Rules' });

var nav__ref7 = Object(preact_min["h"])(components_navItem, { itemId: 'HallOfFame', text: 'Hall of Fame' });

var nav__ref8 = Object(preact_min["h"])(components_navItem, { itemId: 'acknowledgements', text: 'Acknowledgements' });

var nav_Nav = (nav__dec = connect_connect(reducer_0, actions_namespaceObject), nav__dec(nav__class = function (_Component) {
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
          nav__ref3,
          nav__ref4,
          nav__ref5,
          nav__ref6,
          nav__ref7,
          nav__ref8,
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

/* harmony default export */ var components_rules = (rules_Rules);
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
// EXTERNAL MODULE: ../node_modules/morgan/index.js
var morgan = __webpack_require__("563O");
var morgan_default = /*#__PURE__*/__webpack_require__.n(morgan);

// CONCATENATED MODULE: ./components/material.js
var material__dec, material__class;



function material__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function material__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function material__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var material__ref = Object(preact_min["h"])(
  "div",
  null,
  "First, and perhaps most important ones, we provide datasets. The main dataset is made of a set of 80,000 raw images ; the images are numbered by Digital still camera model as described in this",
  " ",
  Object(preact_min["h"])(
    "a",
    { href: "http://alaska.utt.fr/ALASKAv2Base_by_DSC.txt" },
    "simple text file"
  ),
  ".",
  Object(preact_min["h"])("br", null),
  "Besides, for easy use by the community we also provide also several processed dataset:",
  Object(preact_min["h"])("br", null),
  "Uncompressed color and grayscale image datasets (of size 512x512, 256x256 for easy use in Deep learning and various sizes).",
  Object(preact_min["h"])("br", null),
  "JPEG compressed images datasets (with quality factors: 100 , 95 , 90 , 85 , 80 , 75 and various QF)."
);

var material__ref2 = Object(preact_min["h"])(
  "div",
  null,
  "Second we also provide the scripts that have been used to convert the raw images into jpeg format. Those python scripts use the main following library: ",
  Object(preact_min["h"])(
    "a",
    { href: "http://www.numpy.org/" },
    "numpy"
  ),
  " (version 1.14.5), \xA0",
  Object(preact_min["h"])(
    "a",
    { href: "https://pillow.readthedocs.io/en/5.1.x/" },
    "pillow"
  ),
  " the Python Imaging Library (version 5.2), and the open-source raw image processing program ",
  Object(preact_min["h"])(
    "a",
    { href: "http://rawtherapee.com/" },
    "Rawtherapee"
  ),
  "(version 5.7).",
  Object(preact_min["h"])("br", null),
  "Those scripts are those that we have used to generate the various datasets from the raw image files."
);

var material__ref3 = Object(preact_min["h"])(
  "div",
  null,
  "For any question, regarding either image datasets and/or conversion scripts, contact us at",
  " ",
  Object(preact_min["h"])(
    "a",
    { href: "mailto:alaska@utt.fr" },
    "alaska@utt.fr"
  ),
  "."
);

var material__ref4 = Object(preact_min["h"])(
  "div",
  null,
  "While all the materials are available under the",
  " ",
  Object(preact_min["h"])(
    "a",
    { href: "https://creativecommons.org/licenses/by-nc-nd/4.0/" },
    "Creative Commons BY-NC-ND license"
  ),
  " ",
  "for use in any research works we kindly ask you to credit our (enormous) work by either refering to the alaska website URL or, more relevant, by simply citing one of the associated papers:",
  Object(preact_min["h"])("br", null),
  Object(preact_min["h"])(
    "a",
    { href: "https://dl.acm.org/citation.cfm?id=3335726" },
    "The ALASKA Steganalysis Challenge: A First Step Towards Steganalysis \"into the wild\""
  ),
  ", Published in the 7th ACM IH&MMSec conference."
);

var material__ref5 = Object(preact_min["h"])(
  "h2",
  { "class": "text-center" },
  "Material"
);

var material__ref6 = Object(preact_min["h"])(
  "div",
  null,
  Object(preact_min["h"])(
    "p",
    null,
    Object(preact_min["h"])(
      "a",
      {
        href: "http://alaska.utt.fr/ALASKA_v2_RAWs_scripts.zip",
        "class": "btn btn-default btn-lg"
      },
      "Raw images dataset (including conversion scripts)"
    )
  )
);

var material__ref7 = Object(preact_min["h"])(
  "div",
  null,
  Object(preact_min["h"])(
    "p",
    null,
    Object(preact_min["h"])(
      "b",
      null,
      Object(preact_min["h"])(
        "u",
        null,
        "Uncompressed Grayscale"
      )
    ),
    " ",
    "images datasets:",
    Object(preact_min["h"])("br", null),
    Object(preact_min["h"])(
      "a",
      {
        href: "http://alaska.utt.fr/ALASKA_v2_TIFF_512_GrayScale.sh",
        "class": "btn btn-default btn-lg"
      },
      "Size 512x512, PGM"
    ),
    "\u2003\u2003",
    Object(preact_min["h"])(
      "a",
      {
        href: "http://alaska.utt.fr/ALASKA_v2_TIFF_256_GrayScale.sh",
        "class": "btn btn-default btn-lg"
      },
      "Size 256x256, PGM"
    ),
    "\u2003\u2003",
    Object(preact_min["h"])(
      "a",
      {
        href: "http://alaska.utt.fr/ALASKA_v2_TIFF_VariousSize_GrayScale.sh",
        "class": "btn btn-default btn-lg"
      },
      "Various size, PGM"
    )
  )
);

var material__ref8 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "b",
    null,
    Object(preact_min["h"])(
      "u",
      null,
      "Uncompressed COLOR"
    )
  ),
  " ",
  "images datasets:",
  Object(preact_min["h"])("br", null),
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_TIFF_512_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "Size 512x512, PPM"
  ),
  "\u2003\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_TIFF_256_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "Size 256x256, PPM"
  ),
  "\u2003\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_TIFF_VariousSize_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "Various size, PPM"
  )
);

var _ref9 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "b",
    null,
    Object(preact_min["h"])(
      "u",
      null,
      "JPEG Compressed, Grayscale, Size 512x512"
    )
  ),
  " ",
  "images datasets:",
  Object(preact_min["h"])("br", null),
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF100_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF100"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF95_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF95"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF90_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF90"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF85_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF85"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF80_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF80"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF75_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF75"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QFvarious_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "Various QF"
  )
);

var _ref10 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "b",
    null,
    Object(preact_min["h"])(
      "u",
      null,
      "JPEG Compressed, Grayscale, Size 256x256"
    )
  ),
  " ",
  "images datasets:",
  Object(preact_min["h"])("br", null),
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF100_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF100"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF95_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF95"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF90_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF90"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF85_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF85"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF80_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF80"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF75_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF75"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QFvarious_GrayScale.sh",
      "class": "btn btn-default btn-lg"
    },
    "Various QF"
  )
);

var _ref11 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "b",
    null,
    Object(preact_min["h"])(
      "u",
      null,
      "JPEG Compressed, Color, Size 512x512"
    )
  ),
  " ",
  "images datasets:",
  Object(preact_min["h"])("br", null),
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF100_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF100"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF95_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF95"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF90_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF90"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF85_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF85"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF80_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF80"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QF75_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF75"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_512_QFvarious_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "Various QF"
  )
);

var _ref12 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "b",
    null,
    Object(preact_min["h"])(
      "u",
      null,
      "JPEG Compressed, Color, Size 256x256"
    )
  ),
  " ",
  "images datasets:",
  Object(preact_min["h"])("br", null),
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF100_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF100"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF95_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF95"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF90_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF90"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF85_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF85"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF80_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF80"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QF75_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "QF75"
  ),
  "\u2003",
  Object(preact_min["h"])(
    "a",
    {
      href: "http://alaska.utt.fr/ALASKA_v2_JPG_256_QFvarious_COLOR.sh",
      "class": "btn btn-default btn-lg"
    },
    "Various QF"
  )
);

var material_Material = (material__dec = connect_connect(reducer_0, actions_namespaceObject), material__dec(material__class = function (_Component) {
  material__inherits(Material, _Component);

  function Material() {
    material__classCallCheck(this, Material);

    return material__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Material.prototype.render = function render() {
    var list = {
      text: "In order not to provide some elements regarding the ALASKA#2 challange ahead in advance, the present website only proposed   offers two main types of materials.",
      elements: [material__ref, material__ref2, material__ref3, material__ref4]
    };

    return Object(preact_min["h"])(
      preact_min["Fragment"],
      null,
      Object(preact_min["h"])(
        "section",
        { "class": "download-section content-section text-center" },
        Object(preact_min["h"])(
          "div",
          { "class": "container" },
          Object(preact_min["h"])(
            "div",
            { "class": "col-lg-10 margin-auto" },
            material__ref5,
            Object(preact_min["h"])(
              "div",
              null,
              Object(preact_min["h"])(
                "div",
                { "class": "text-justify" },
                Object(preact_min["h"])(
                  "p",
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
// CONCATENATED MODULE: ../node_modules/memoize-one/dist/memoize-one.esm.js
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ var memoize_one_esm = (memoizeOne);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__("HOM9");
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// CONCATENATED MODULE: ../node_modules/@emotion/sheet/dist/sheet.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();


// CONCATENATED MODULE: ../node_modules/@emotion/stylis/dist/stylis.esm.js
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

/* harmony default export */ var stylis_esm = (stylis_min);
// CONCATENATED MODULE: ../node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ var weak_memoize_esm = (weakMemoize);
// CONCATENATED MODULE: ../node_modules/@emotion/cache/dist/cache.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var cache_esm_delimiter = '/*|*/';
var needle = cache_esm_delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + cache_esm_delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? cache_esm_delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : weak_memoize_esm(function () {
  var getCache = weak_memoize_esm(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var cache_esm_createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_esm(stylisOptions);

  if (false) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (false) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ var cache_esm = (cache_esm_createCache);
// CONCATENATED MODULE: ../node_modules/@emotion/utils/dist/utils.esm.js
var utils_esm_isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  utils_esm_isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!utils_esm_isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!utils_esm_isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};


// CONCATENATED MODULE: ../node_modules/@emotion/hash/dist/hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_esm = (murmur2);
// CONCATENATED MODULE: ../node_modules/@emotion/unitless/dist/unitless.esm.js
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

/* harmony default export */ var unitless_esm = (unitlessKeys);
// CONCATENATED MODULE: ../node_modules/@emotion/memoize/dist/memoize.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_esm = (memoize);
// CONCATENATED MODULE: ../node_modules/@emotion/serialize/dist/serialize.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var serialize_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = serialize_esm_processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  serialize_esm_processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (false) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + serialize_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + serialize_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serialize_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_esm(styles) + identifierName;

  if (false) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};


// CONCATENATED MODULE: ../node_modules/@emotion/css/dist/css.esm.js


function css_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serialize_esm_serializeStyles(args);
}

/* harmony default export */ var css_esm = (css_esm_css);
// CONCATENATED MODULE: ../node_modules/@emotion/core/dist/core.esm.js









var core_esm_isBrowser = typeof document !== 'undefined';

var EmotionCacheContext = Object(compat_module["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? cache_esm() : null);
var ThemeContext = Object(compat_module["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var core_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(compat_module["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(compat_module["forwardRef"])(render);
};

if (!core_esm_isBrowser) {
  var core_esm_BasicProvider =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose_default()(BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: cache_esm()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return Object(compat_module["createElement"])(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(compat_module["Component"]);

  core_esm_withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return Object(compat_module["createElement"])(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return Object(compat_module["createElement"])(core_esm_BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var core_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var core_esm_render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serialize_esm_serializeStyles(registeredStyles);

  if (false) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (core_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(compat_module["createElement"])(type, newProps);

  if (!core_esm_isBrowser && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return Object(compat_module["createElement"])(compat_module["Fragment"], null, Object(compat_module["createElement"])("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
};

var Emotion =
/* #__PURE__ */
core_esm_withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(compat_module["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return core_esm_render(cache, props, theme, ref);
    });
  }

  return core_esm_render(cache, props, null, ref);
});

if (false) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var core_esm_jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !core_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return compat_module["createElement"].apply(undefined, args);
  }

  if (false) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (core_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (false) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return compat_module["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
core_esm_withEmotionCache(function (props, cache) {
  if (false) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(compat_module["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = serialize_esm_serializeStyles([styles(theme)]);
      return Object(compat_module["createElement"])(core_esm_InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = serialize_esm_serializeStyles([styles]);
  return Object(compat_module["createElement"])(core_esm_InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var core_esm_InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {
    if (!core_esm_isBrowser) {
      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = this.props.cache.compat === true;
      var rules = this.props.cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, this.sheet, shouldCache);

      if (!shouldCache) {
        var _ref;

        return Object(compat_module["createElement"])("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
      }
    }

    return null;
  };

  return InnerGlobal;
}(compat_module["Component"]);

var core_esm_keyframes = function keyframes() {
  var insertable = css_esm.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = core_esm_withEmotionCache(function (props, context) {
  return Object(compat_module["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serialize_esm_serializeStyles(args, context.registered);

      if (core_esm_isBrowser) {
        insertStyles(context, serialized, false);
      } else {
        var res = insertStyles(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!core_esm_isBrowser) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!core_esm_isBrowser && rules.length !== 0) {
      var _ref;

      return Object(compat_module["createElement"])(compat_module["Fragment"], null, Object(compat_module["createElement"])("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});


// CONCATENATED MODULE: ../node_modules/react-select/dist/utils-711604ed.esm.js
// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("" + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to, duration, callback) {
  if (duration === void 0) {
    duration = 200;
  }

  if (callback === void 0) {
    callback = noop;
  }

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  } catch (e) {
    return false;
  }
}


// EXTERNAL MODULE: ../node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__("xjsR");
var AutosizeInput_default = /*#__PURE__*/__webpack_require__.n(AutosizeInput);

// CONCATENATED MODULE: ../node_modules/react-select/dist/index-52626178.esm.js








function index_52626178_esm__extends() {
  index_52626178_esm__extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return index_52626178_esm__extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"" + placement + "\".");
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _ref3[alignToControl(placement)] = '100%', _ref3.backgroundColor = colors.neutral0, _ref3.borderRadius = borderRadius, _ref3.boxShadow = '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)', _ref3.marginBottom = spacing.menuGutter, _ref3.marginTop = spacing.menuGutter, _ref3.position = 'absolute', _ref3.width = '100%', _ref3.zIndex = 1, _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MenuPlacer, _Component);

  function MenuPlacer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return index_52626178_esm__extends({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  var _proto = MenuPlacer.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children({
      ref: this.getPlacement,
      placerProps: this.getUpdatedProps()
    });
  };

  return MenuPlacer;
}(compat_module["Component"]);
MenuPlacer.contextTypes = {
  getPortalPlacement: prop_types_default.a.func
};

var index_52626178_esm_Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return core_esm_jsx("div", index_52626178_esm__extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var index_52626178_esm_MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return core_esm_jsx("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: baseUnit * 2 + "px " + baseUnit * 3 + "px",
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var index_52626178_esm_NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return core_esm_jsx("div", index_52626178_esm__extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
index_52626178_esm_NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var index_52626178_esm_LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return core_esm_jsx("div", index_52626178_esm__extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
index_52626178_esm_LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var index_52626178_esm_MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(MenuPortal, _Component2);

  function MenuPortal() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  var _proto2 = MenuPortal.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      getPortalPlacement: this.getPortalPlacement
    };
  } // callback for occassions where the menu must "flip"
  ;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        appendTo = _this$props2.appendTo,
        children = _this$props2.children,
        controlElement = _this$props2.controlElement,
        menuPlacement = _this$props2.menuPlacement,
        position = _this$props2.menuPosition,
        getStyles = _this$props2.getStyles;
    var isFixed = position === 'fixed'; // bail early if required elements aren't present

    if (!appendTo && !isFixed || !controlElement) {
      return null;
    }

    var placement = this.state.placement || coercePlacement(menuPlacement);
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = isFixed ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    var state = {
      offset: offset,
      position: position,
      rect: rect
    }; // same wrapper element whether fixed or portalled

    var menuWrapper = core_esm_jsx("div", {
      css: getStyles('menuPortal', state)
    }, children);
    return appendTo ? Object(compat_module["createPortal"])(menuWrapper, appendTo) : menuWrapper;
  };

  return MenuPortal;
}(compat_module["Component"]);
index_52626178_esm_MenuPortal.childContextTypes = {
  getPortalPlacement: prop_types_default.a.func
};

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$1.apply(this, arguments);
}
var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var index_52626178_esm_SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return core_esm_jsx("div", _extends$1({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + "px " + spacing.baseUnit * 2 + "px",
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var index_52626178_esm_ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return core_esm_jsx("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var index_52626178_esm_IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return core_esm_jsx("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }strings.raw = raw;return strings;
}

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$2.apply(this, arguments);
}

function index_52626178_esm__objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

var index_52626178_esm__ref2 =  true ? {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
} : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var index_52626178_esm_Svg = function Svg(_ref) {
  var size = _ref.size,
      props = index_52626178_esm__objectWithoutPropertiesLoose(_ref, ["size"]);

  return core_esm_jsx("svg", _extends$2({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: index_52626178_esm__ref2
  }, props));
};

var index_52626178_esm_CrossIcon = function CrossIcon(props) {
  return core_esm_jsx(index_52626178_esm_Svg, _extends$2({
    size: 20
  }, props), core_esm_jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var index_52626178_esm_DownChevron = function DownChevron(props) {
  return core_esm_jsx(index_52626178_esm_Svg, _extends$2({
    size: 20
  }, props), core_esm_jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var index_52626178_esm_DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return core_esm_jsx("div", _extends$2({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || core_esm_jsx(index_52626178_esm_DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var index_52626178_esm_ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return core_esm_jsx("div", _extends$2({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || core_esm_jsx(index_52626178_esm_CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var index_52626178_esm_IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return core_esm_jsx("span", _extends$2({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = core_esm_keyframes(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var index_52626178_esm_LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return core_esm_jsx("span", {
    css:
    /*#__PURE__*/
    css_esm({
      animation: loadingDotAnimations + " 1s ease-in-out " + delay + "ms infinite;",
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
  });
};

var index_52626178_esm_LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return core_esm_jsx("div", _extends$2({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), core_esm_jsx(index_52626178_esm_LoadingDot, {
    delay: 0,
    offset: isRtl
  }), core_esm_jsx(index_52626178_esm_LoadingDot, {
    delay: 160,
    offset: true
  }), core_esm_jsx(index_52626178_esm_LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
index_52626178_esm_LoadingIndicator.defaultProps = {
  size: 4
};

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$3.apply(this, arguments);
}
var index_52626178_esm_css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px " + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var index_52626178_esm_Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return core_esm_jsx("div", _extends$3({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$4.apply(this, arguments);
}
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var index_52626178_esm_Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return core_esm_jsx("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, core_esm_jsx(Heading, _extends$4({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), core_esm_jsx("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var index_52626178_esm_GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutPropertiesLoose$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return core_esm_jsx("div", _extends$4({
    css: getStyles('groupHeading', _extends$4({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$5.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var index_52626178_esm_Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose$2(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return core_esm_jsx("div", {
    css: getStyles('input', _extends$5({
      theme: theme
    }, props))
  }, core_esm_jsx(AutosizeInput_default.a, _extends$5({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function _extends$6() {
  _extends$6 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$6.apply(this, arguments);
}
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var index_52626178_esm_MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return core_esm_jsx("div", innerProps, children);
};
var index_52626178_esm_MultiValueContainer = index_52626178_esm_MultiValueGeneric;
var index_52626178_esm_MultiValueLabel = index_52626178_esm_MultiValueGeneric;
function index_52626178_esm_MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return core_esm_jsx("div", innerProps, children || core_esm_jsx(index_52626178_esm_CrossIcon, {
    size: 14
  }));
}

var index_52626178_esm_MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return core_esm_jsx(ClassNames, null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return core_esm_jsx(Container, {
      data: data,
      innerProps: _extends$6({}, innerProps, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, core_esm_jsx(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), core_esm_jsx(Remove, {
      data: data,
      innerProps: _extends$6({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

index_52626178_esm_MultiValue.defaultProps = {
  cropWithEllipsis: true
};

function _extends$7() {
  _extends$7 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$7.apply(this, arguments);
}
var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + "px " + spacing.baseUnit * 3 + "px",
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var index_52626178_esm_Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return core_esm_jsx("div", _extends$7({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

function _extends$8() {
  _extends$8 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$8.apply(this, arguments);
}
var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var index_52626178_esm_Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return core_esm_jsx("div", _extends$8({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

function _extends$9() {
  _extends$9 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$9.apply(this, arguments);
}
var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - " + spacing.baseUnit * 2 + "px)",
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var index_52626178_esm_SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return core_esm_jsx("div", _extends$9({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function _extends$a() {
  _extends$a = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends$a.apply(this, arguments);
}
var index_52626178_esm_components = {
  ClearIndicator: index_52626178_esm_ClearIndicator,
  Control: index_52626178_esm_Control,
  DropdownIndicator: index_52626178_esm_DropdownIndicator,
  DownChevron: index_52626178_esm_DownChevron,
  CrossIcon: index_52626178_esm_CrossIcon,
  Group: index_52626178_esm_Group,
  GroupHeading: index_52626178_esm_GroupHeading,
  IndicatorsContainer: index_52626178_esm_IndicatorsContainer,
  IndicatorSeparator: index_52626178_esm_IndicatorSeparator,
  Input: index_52626178_esm_Input,
  LoadingIndicator: index_52626178_esm_LoadingIndicator,
  Menu: index_52626178_esm_Menu,
  MenuList: index_52626178_esm_MenuList,
  MenuPortal: index_52626178_esm_MenuPortal,
  LoadingMessage: index_52626178_esm_LoadingMessage,
  NoOptionsMessage: index_52626178_esm_NoOptionsMessage,
  MultiValue: index_52626178_esm_MultiValue,
  MultiValueContainer: index_52626178_esm_MultiValueContainer,
  MultiValueLabel: index_52626178_esm_MultiValueLabel,
  MultiValueRemove: index_52626178_esm_MultiValueRemove,
  Option: index_52626178_esm_Option,
  Placeholder: index_52626178_esm_Placeholder,
  SelectContainer: index_52626178_esm_SelectContainer,
  SingleValue: index_52626178_esm_SingleValue,
  ValueContainer: index_52626178_esm_ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _extends$a({}, index_52626178_esm_components, props.components);
};


// CONCATENATED MODULE: ../node_modules/react-select/dist/Select-073d29ba.esm.js








var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

function Select_073d29ba_esm__extends() {
  Select_073d29ba_esm__extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return Select_073d29ba_esm__extends.apply(this, arguments);
}

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return option.label + " " + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = Select_073d29ba_esm__extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function Select_073d29ba_esm__extends$1() {
  Select_073d29ba_esm__extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return Select_073d29ba_esm__extends$1.apply(this, arguments);
}

var Select_073d29ba_esm__ref =  true ? {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
} : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
};

var Select_073d29ba_esm_A11yText = function A11yText(props) {
  return core_esm_jsx("span", Select_073d29ba_esm__extends$1({
    css: Select_073d29ba_esm__ref
  }, props));
};

function Select_073d29ba_esm__extends$2() {
  Select_073d29ba_esm__extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return Select_073d29ba_esm__extends$2.apply(this, arguments);
}

function Select_073d29ba_esm__objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}
function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = Select_073d29ba_esm__objectWithoutPropertiesLoose(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return core_esm_jsx("input", Select_073d29ba_esm__extends$2({
    ref: innerRef
  }, props, {
    css:
    /*#__PURE__*/
    css_esm({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  true ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGluOiBpblByb3AsXG4gIG91dCxcbiAgb25FeGl0ZWQsXG4gIGFwcGVhcixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIGlubmVyUmVmLFxuICBlbW90aW9uLFxuICAuLi5wcm9wc1xufTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY3NzPXt7XG4gICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}

function Select_073d29ba_esm__inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}

var Select_073d29ba_esm_NodeResolver =
/*#__PURE__*/
function (_Component) {
  Select_073d29ba_esm__inheritsLoose(NodeResolver, _Component);

  function NodeResolver() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NodeResolver.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.innerRef(Object(compat_module["findDOMNode"])(this));
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.innerRef(null);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return NodeResolver;
}(compat_module["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$1(ScrollLock, _Component);

  function ScrollLock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  var _proto = ScrollLock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!canUseDOM) return;
    var _this$props = this.props,
        accountForScrollbars = _this$props.accountForScrollbars,
        touchScrollTarget = _this$props.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        _this2.originalStyles[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = adjustedPadding + "px";
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    if (!canUseDOM) return;
    var _this$props2 = this.props,
        accountForScrollbars = _this$props2.accountForScrollbars,
        touchScrollTarget = _this$props2.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = _this3.originalStyles[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScrollLock;
}(compat_module["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _inheritsLoose$2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}

var _ref$1 =  true ? {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
} : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEVSIsImZpbGUiOiJTY3JvbGxCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQsIHR5cGUgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IE5vZGVSZXNvbHZlciBmcm9tICcuL05vZGVSZXNvbHZlcic7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICcuL1Njcm9sbExvY2svaW5kZXgnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogRWxlbWVudDwqPixcbiAgaXNFbmFibGVkOiBib29sZWFuLFxufTtcbnR5cGUgU3RhdGUgPSB7XG4gIHRvdWNoU2Nyb2xsVGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwsXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfTtcblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuICBnZXRTY3JvbGxUYXJnZXQgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChyZWYgPT09IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgfTtcblxuICAvLyB0aGlzIHdpbGwgY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgYmx1clNlbGVjdElucHV0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvdWNoU2Nyb2xsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG5cbiAgICAgKiBOb2RlUmVzb2x2ZXJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgKiBtb2JpbGUgZGV2aWNlc1xuXG4gICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLmdldFNjcm9sbFRhcmdldH0+e2NoaWxkcmVufTwvTm9kZVJlc29sdmVyPlxuICAgICAgICB7dG91Y2hTY3JvbGxUYXJnZXQgPyAoXG4gICAgICAgICAgPFNjcm9sbExvY2sgdG91Y2hTY3JvbGxUYXJnZXQ9e3RvdWNoU2Nyb2xsVGFyZ2V0fSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var Select_073d29ba_esm_ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose$2(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  var _proto = ScrollBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

    if (!isEnabled) return children;
    /*
     * Div
     * ------------------------------
     * blocks scrolling on non-body elements behind the menu
      * NodeResolver
     * ------------------------------
     * we need a reference to the scrollable element to "unlock" scroll on
     * mobile devices
      * ScrollLock
     * ------------------------------
     * actually does the scroll locking
     */

    return core_esm_jsx("div", null, core_esm_jsx("div", {
      onClick: this.blurSelectInput,
      css: _ref$1
    }), core_esm_jsx(Select_073d29ba_esm_NodeResolver, {
      innerRef: this.getScrollTarget
    }, children), touchScrollTarget ? core_esm_jsx(ScrollLock, {
      touchScrollTarget: touchScrollTarget
    }) : null);
  };

  return ScrollBlock;
}(compat_module["PureComponent"]);

function Select_073d29ba_esm__objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function _inheritsLoose$3(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}

var Select_073d29ba_esm_ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$3(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  var _proto = ScrollCaptor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListening(this.scrollTarget);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListening(this.scrollTarget);
  };

  _proto.startListening = function startListening(el) {
    // bail early if no element is available to attach to
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.stopListening = function stopListening(el) {
    // all the if statements are to appease Flow 😢
    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.render = function render() {
    return compat_module["default"].createElement(Select_073d29ba_esm_NodeResolver, {
      innerRef: this.getScrollTarget
    }, this.props.children);
  };

  return ScrollCaptor;
}(compat_module["Component"]);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = Select_073d29ba_esm__objectWithoutPropertiesLoose$1(_ref, ["isEnabled"]);

  return isEnabled ? compat_module["default"].createElement(Select_073d29ba_esm_ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event, context) {
  if (context === void 0) {
    context = {};
  }

  var _context = context,
      isSearchable = _context.isSearchable,
      isMulti = _context.isMulti,
      label = _context.label,
      isDisabled = _context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options" + (isDisabled ? '' : ', press Enter to select the currently focused option') + ", press Escape to exit the menu, press Tab to select the option and exit the menu.";

    case 'input':
      return (label ? label : 'Select') + " is focused " + (isSearchable ? ',type to refine list' : '') + ", press Down to open the menu, " + (isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option " + value + ", deselected.";

    case 'select-option':
      return isDisabled ? "option " + value + " is disabled. Select another option." : "option " + value + ", selected.";
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value " + getOptionLabel(focusedValue) + " focused, " + (selectValue.indexOf(focusedValue) + 1) + " of " + selectValue.length + ".";
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option " + getOptionLabel(focusedOption) + " focused" + (focusedOption.isDisabled ? ' disabled' : '') + ", " + (options.indexOf(focusedOption) + 1) + " of " + options.length + ".";
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "" + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + ".";
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function Select_073d29ba_esm__extends$3() {
  Select_073d29ba_esm__extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return Select_073d29ba_esm__extends$3.apply(this, arguments);
}
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: index_52626178_esm_css,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$1,
  valueContainer: valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source, target) {
  if (target === void 0) {
    target = {};
  }

  // initialize with source styles
  var styles = Select_073d29ba_esm__extends$3({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var Select_073d29ba_esm_spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: Select_073d29ba_esm_spacing
};

function Select_073d29ba_esm__objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function Select_073d29ba_esm__extends$4() {
  Select_073d29ba_esm__extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return Select_073d29ba_esm__extends$4.apply(this, arguments);
}

function _inheritsLoose$4(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return self;
}
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + " result" + (count !== 1 ? 's' : '') + " available";
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select_073d29ba_esm_Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$4(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = defaultComponents({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, Select_073d29ba_esm__extends$4({}, actionMeta, {
        name: name
      }));
    };

    _this.setValue = function (newValue, action, option) {
      if (action === void 0) {
        action = 'set-value';
      }

      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(selectValue, [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return _this.instancePrefix + "-" + element;
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, Select_073d29ba_esm__extends$4({}, context, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = _this.getElementId('option') + "-" + id;
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + "-" + i);
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = _this.getElementId('group') + "-" + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "" + itemIndex);

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = memoize_one_esm(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(_value);

    _this.buildMenuOptions = memoize_one_esm(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          newProps = _ref6[0],
          newSelectValue = _ref6[1];
      var _ref7 = lastArgs,
          lastProps = _ref7[0],
          lastSelectValue = _ref7[1];
      return exportedEqual(newSelectValue, lastSelectValue) && exportedEqual(newProps.inputValue, lastProps.inputValue) && exportedEqual(newProps.options, lastProps.options);
    }).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListeningComposition();
    this.startListeningToTouch();

    if (this.props.closeMenuOnScroll && document && document.addEventListener) {
      // Listen to all scroll events, and filter them out inside of 'onScroll'
      document.addEventListener('scroll', this.onScroll, true);
    }

    if (this.props.autoFocus) {
      this.focusInput();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props8 = this.props,
        options = _this$props8.options,
        value = _this$props8.value,
        menuIsOpen = _this$props8.menuIsOpen,
        inputValue = _this$props8.inputValue; // re-cache custom components

    this.cacheComponents(nextProps.components); // rebuild the menu options

    if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
      var selectValue = cleanValue(nextProps.value);
      var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
        render: [],
        focusable: []
      };
      var focusedValue = this.getNextFocusedValue(selectValue);
      var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
      this.setState({
        menuOptions: menuOptions,
        selectValue: selectValue,
        focusedOption: focusedOption,
        focusedValue: focusedValue
      });
    } // some updates should toggle the state of the input visibility


    if (this.inputIsHiddenAfterUpdate != null) {
      this.setState({
        inputIsHidden: this.inputIsHiddenAfterUpdate
      });
      delete this.inputIsHiddenAfterUpdate;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props9 = this.props,
        isDisabled = _this$props9.isDisabled,
        menuIsOpen = _this$props9.menuIsOpen;
    var isFocused = this.state.isFocused;

    if ( // ensure focus is restored correctly when the control becomes enabled
    isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
    isFocused && menuIsOpen && !prevProps.menuIsOpen) {
      this.focusInput();
    } // scroll the focused option into view if necessary


    if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
      scrollIntoView(this.menuListRef, this.focusedOptionRef);
      this.scrollToFocusedOptionOnUpdate = false;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListeningComposition();
    this.stopListeningToTouch();
    document.removeEventListener('scroll', this.onScroll, true);
  };

  // ==============================
  // Consumer Handlers
  // ==============================
  _proto.onMenuOpen = function onMenuOpen() {
    this.props.onMenuOpen();
  };

  _proto.onMenuClose = function onMenuClose() {
    var _this$props10 = this.props,
        isSearchable = _this$props10.isSearchable,
        isMulti = _this$props10.isMulti;
    this.announceAriaLiveContext({
      event: 'input',
      context: {
        isSearchable: isSearchable,
        isMulti: isMulti
      }
    });
    this.onInputChange('', {
      action: 'menu-close'
    });
    this.props.onMenuClose();
  };

  _proto.onInputChange = function onInputChange(newValue, actionMeta) {
    this.props.onInputChange(newValue, actionMeta);
  } // ==============================
  // Methods
  // ==============================
  ;

  _proto.focusInput = function focusInput() {
    if (!this.inputRef) return;
    this.inputRef.focus();
  };

  _proto.blurInput = function blurInput() {
    if (!this.inputRef) return;
    this.inputRef.blur();
  } // aliased for consumers
  ;

  _proto.openMenu = function openMenu(focusOption) {
    var _this2 = this;

    var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        isFocused = _this$state3.isFocused;
    var menuOptions = this.buildMenuOptions(this.props, selectValue);
    var isMulti = this.props.isMulti;
    var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

    if (!isMulti) {
      var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

      if (selectedIndex > -1) {
        openAtIndex = selectedIndex;
      }
    } // only scroll if the menu isn't already open


    this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
    this.inputIsHiddenAfterUpdate = false;
    this.setState({
      menuOptions: menuOptions,
      focusedValue: null,
      focusedOption: menuOptions.focusable[openAtIndex]
    }, function () {
      _this2.onMenuOpen();

      _this2.announceAriaLiveContext({
        event: 'menu'
      });
    });
  };

  _proto.focusValue = function focusValue(direction) {
    var _this$props11 = this.props,
        isMulti = _this$props11.isMulti,
        isSearchable = _this$props11.isSearchable;
    var _this$state4 = this.state,
        selectValue = _this$state4.selectValue,
        focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

    if (!isMulti) return;
    this.setState({
      focusedOption: null
    });
    var focusedIndex = selectValue.indexOf(focusedValue);

    if (!focusedValue) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'value'
      });
    }

    var lastIndex = selectValue.length - 1;
    var nextFocus = -1;
    if (!selectValue.length) return;

    switch (direction) {
      case 'previous':
        if (focusedIndex === 0) {
          // don't cycle from the start to the end
          nextFocus = 0;
        } else if (focusedIndex === -1) {
          // if nothing is focused, focus the last value first
          nextFocus = lastIndex;
        } else {
          nextFocus = focusedIndex - 1;
        }

        break;

      case 'next':
        if (focusedIndex > -1 && focusedIndex < lastIndex) {
          nextFocus = focusedIndex + 1;
        }

        break;
    }

    if (nextFocus === -1) {
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
    }

    this.setState({
      inputIsHidden: nextFocus !== -1,
      focusedValue: selectValue[nextFocus]
    });
  };

  _proto.focusOption = function focusOption(direction) {
    if (direction === void 0) {
      direction = 'first';
    }

    var pageSize = this.props.pageSize;
    var _this$state5 = this.state,
        focusedOption = _this$state5.focusedOption,
        menuOptions = _this$state5.menuOptions;
    var options = menuOptions.focusable;
    if (!options.length) return;
    var nextFocus = 0; // handles 'first'

    var focusedIndex = options.indexOf(focusedOption);

    if (!focusedOption) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }

    if (direction === 'up') {
      nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
    } else if (direction === 'down') {
      nextFocus = (focusedIndex + 1) % options.length;
    } else if (direction === 'pageup') {
      nextFocus = focusedIndex - pageSize;
      if (nextFocus < 0) nextFocus = 0;
    } else if (direction === 'pagedown') {
      nextFocus = focusedIndex + pageSize;
      if (nextFocus > options.length - 1) nextFocus = options.length - 1;
    } else if (direction === 'last') {
      nextFocus = options.length - 1;
    }

    this.scrollToFocusedOptionOnUpdate = true;
    this.setState({
      focusedOption: options[nextFocus],
      focusedValue: null
    });
    this.announceAriaLiveContext({
      event: 'menu',
      context: {
        isDisabled: isOptionDisabled(options[nextFocus])
      }
    });
  };

  // ==============================
  // Getters
  // ==============================
  _proto.getTheme = function getTheme() {
    // Use the default theme if there are no customizations.
    if (!this.props.theme) {
      return defaultTheme;
    } // If the theme prop is a function, assume the function
    // knows how to merge the passed-in default theme with
    // its own modifications.


    if (typeof this.props.theme === 'function') {
      return this.props.theme(defaultTheme);
    } // Otherwise, if a plain theme object was passed in,
    // overlay it with the default theme.


    return Select_073d29ba_esm__extends$4({}, defaultTheme, this.props.theme);
  };

  _proto.getCommonProps = function getCommonProps() {
    var clearValue = this.clearValue,
        getStyles = this.getStyles,
        setValue = this.setValue,
        selectOption = this.selectOption,
        props = this.props;
    var classNamePrefix = props.classNamePrefix,
        isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
    var selectValue = this.state.selectValue;
    var hasValue = this.hasValue();

    var getValue = function getValue() {
      return selectValue;
    };

    var cx = classNames.bind(null, classNamePrefix);
    return {
      cx: cx,
      clearValue: clearValue,
      getStyles: getStyles,
      getValue: getValue,
      hasValue: hasValue,
      isMulti: isMulti,
      isRtl: isRtl,
      options: options,
      selectOption: selectOption,
      setValue: setValue,
      selectProps: props,
      theme: this.getTheme()
    };
  };

  _proto.getNextFocusedValue = function getNextFocusedValue(nextSelectValue) {
    if (this.clearFocusValueOnUpdate) {
      this.clearFocusValueOnUpdate = false;
      return null;
    }

    var _this$state6 = this.state,
        focusedValue = _this$state6.focusedValue,
        lastSelectValue = _this$state6.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }

    return null;
  };

  _proto.getNextFocusedOption = function getNextFocusedOption(options) {
    var lastFocusedOption = this.state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  };

  _proto.hasValue = function hasValue() {
    var selectValue = this.state.selectValue;
    return selectValue.length > 0;
  };

  _proto.hasOptions = function hasOptions() {
    return !!this.state.menuOptions.render.length;
  };

  _proto.countOptions = function countOptions() {
    return this.state.menuOptions.focusable.length;
  };

  _proto.isClearable = function isClearable() {
    var _this$props12 = this.props,
        isClearable = _this$props12.isClearable,
        isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
    // multi select, by default, IS clearable

    if (isClearable === undefined) return isMulti;
    return isClearable;
  };

  _proto.isOptionDisabled = function isOptionDisabled(option, selectValue) {
    return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
  };

  _proto.isOptionSelected = function isOptionSelected(option, selectValue) {
    var _this3 = this;

    if (selectValue.indexOf(option) > -1) return true;

    if (typeof this.props.isOptionSelected === 'function') {
      return this.props.isOptionSelected(option, selectValue);
    }

    var candidate = this.getOptionValue(option);
    return selectValue.some(function (i) {
      return _this3.getOptionValue(i) === candidate;
    });
  };

  _proto.filterOption = function filterOption(option, inputValue) {
    return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
  };

  _proto.formatOptionLabel = function formatOptionLabel(data, context) {
    if (typeof this.props.formatOptionLabel === 'function') {
      var inputValue = this.props.inputValue;
      var selectValue = this.state.selectValue;
      return this.props.formatOptionLabel(data, {
        context: context,
        inputValue: inputValue,
        selectValue: selectValue
      });
    } else {
      return this.getOptionLabel(data);
    }
  };

  _proto.formatGroupLabel = function formatGroupLabel(data) {
    return this.props.formatGroupLabel(data);
  } // ==============================
  // Mouse Handlers
  // ==============================
  ;

  // ==============================
  // Composition Handlers
  // ==============================
  _proto.startListeningComposition = function startListeningComposition() {
    if (document && document.addEventListener) {
      document.addEventListener('compositionstart', this.onCompositionStart, false);
      document.addEventListener('compositionend', this.onCompositionEnd, false);
    }
  };

  _proto.stopListeningComposition = function stopListeningComposition() {
    if (document && document.removeEventListener) {
      document.removeEventListener('compositionstart', this.onCompositionStart);
      document.removeEventListener('compositionend', this.onCompositionEnd);
    }
  };

  // ==============================
  // Touch Handlers
  // ==============================
  _proto.startListeningToTouch = function startListeningToTouch() {
    if (document && document.addEventListener) {
      document.addEventListener('touchstart', this.onTouchStart, false);
      document.addEventListener('touchmove', this.onTouchMove, false);
      document.addEventListener('touchend', this.onTouchEnd, false);
    }
  };

  _proto.stopListeningToTouch = function stopListeningToTouch() {
    if (document && document.removeEventListener) {
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  // ==============================
  // Renderers
  // ==============================
  _proto.constructAriaLiveMessage = function constructAriaLiveMessage() {
    var _this$state7 = this.state,
        ariaLiveContext = _this$state7.ariaLiveContext,
        selectValue = _this$state7.selectValue,
        focusedValue = _this$state7.focusedValue,
        focusedOption = _this$state7.focusedOption;
    var _this$props13 = this.props,
        options = _this$props13.options,
        menuIsOpen = _this$props13.menuIsOpen,
        inputValue = _this$props13.inputValue,
        screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

    var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
      focusedValue: focusedValue,
      getOptionLabel: this.getOptionLabel,
      selectValue: selectValue
    }) : ''; // An aria live message representing the currently focused option in the select.

    var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
      focusedOption: focusedOption,
      getOptionLabel: this.getOptionLabel,
      options: options
    }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

    var resultsMsg = resultsAriaMessage({
      inputValue: inputValue,
      screenReaderMessage: screenReaderStatus({
        count: this.countOptions()
      })
    });
    return focusedValueMsg + " " + focusedOptionMsg + " " + resultsMsg + " " + ariaLiveContext;
  };

  _proto.renderInput = function renderInput() {
    var _this$props14 = this.props,
        isDisabled = _this$props14.isDisabled,
        isSearchable = _this$props14.isSearchable,
        inputId = _this$props14.inputId,
        inputValue = _this$props14.inputValue,
        tabIndex = _this$props14.tabIndex;
    var Input = this.components.Input;
    var inputIsHidden = this.state.inputIsHidden;
    var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

    var ariaAttributes = {
      'aria-autocomplete': 'list',
      'aria-label': this.props['aria-label'],
      'aria-labelledby': this.props['aria-labelledby']
    };

    if (!isSearchable) {
      // use a dummy input to maintain focus/blur functionality
      return compat_module["default"].createElement(DummyInput, Select_073d29ba_esm__extends$4({
        id: id,
        innerRef: this.getInputRef,
        onBlur: this.onInputBlur,
        onChange: noop,
        onFocus: this.onInputFocus,
        readOnly: true,
        disabled: isDisabled,
        tabIndex: tabIndex,
        value: ""
      }, ariaAttributes));
    }

    var _this$commonProps = this.commonProps,
        cx = _this$commonProps.cx,
        theme = _this$commonProps.theme,
        selectProps = _this$commonProps.selectProps;
    return compat_module["default"].createElement(Input, Select_073d29ba_esm__extends$4({
      autoCapitalize: "none",
      autoComplete: "off",
      autoCorrect: "off",
      cx: cx,
      getStyles: this.getStyles,
      id: id,
      innerRef: this.getInputRef,
      isDisabled: isDisabled,
      isHidden: inputIsHidden,
      onBlur: this.onInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.onInputFocus,
      selectProps: selectProps,
      spellCheck: "false",
      tabIndex: tabIndex,
      theme: theme,
      type: "text",
      value: inputValue
    }, ariaAttributes));
  };

  _proto.renderPlaceholderOrValue = function renderPlaceholderOrValue() {
    var _this4 = this;

    var _this$components = this.components,
        MultiValue = _this$components.MultiValue,
        MultiValueContainer = _this$components.MultiValueContainer,
        MultiValueLabel = _this$components.MultiValueLabel,
        MultiValueRemove = _this$components.MultiValueRemove,
        SingleValue = _this$components.SingleValue,
        Placeholder = _this$components.Placeholder;
    var commonProps = this.commonProps;
    var _this$props15 = this.props,
        controlShouldRenderValue = _this$props15.controlShouldRenderValue,
        isDisabled = _this$props15.isDisabled,
        isMulti = _this$props15.isMulti,
        inputValue = _this$props15.inputValue,
        placeholder = _this$props15.placeholder;
    var _this$state8 = this.state,
        selectValue = _this$state8.selectValue,
        focusedValue = _this$state8.focusedValue,
        isFocused = _this$state8.isFocused;

    if (!this.hasValue() || !controlShouldRenderValue) {
      return inputValue ? null : compat_module["default"].createElement(Placeholder, Select_073d29ba_esm__extends$4({}, commonProps, {
        key: "placeholder",
        isDisabled: isDisabled,
        isFocused: isFocused
      }), placeholder);
    }

    if (isMulti) {
      var selectValues = selectValue.map(function (opt, index) {
        var isOptionFocused = opt === focusedValue;
        return compat_module["default"].createElement(MultiValue, Select_073d29ba_esm__extends$4({}, commonProps, {
          components: {
            Container: MultiValueContainer,
            Label: MultiValueLabel,
            Remove: MultiValueRemove
          },
          isFocused: isOptionFocused,
          isDisabled: isDisabled,
          key: _this4.getOptionValue(opt),
          index: index,
          removeProps: {
            onClick: function onClick() {
              return _this4.removeValue(opt);
            },
            onTouchEnd: function onTouchEnd() {
              return _this4.removeValue(opt);
            },
            onMouseDown: function onMouseDown(e) {
              e.preventDefault();
              e.stopPropagation();
            }
          },
          data: opt
        }), _this4.formatOptionLabel(opt, 'value'));
      });
      return selectValues;
    }

    if (inputValue) {
      return null;
    }

    var singleValue = selectValue[0];
    return compat_module["default"].createElement(SingleValue, Select_073d29ba_esm__extends$4({}, commonProps, {
      data: singleValue,
      isDisabled: isDisabled
    }), this.formatOptionLabel(singleValue, 'value'));
  };

  _proto.renderClearIndicator = function renderClearIndicator() {
    var ClearIndicator = this.components.ClearIndicator;
    var commonProps = this.commonProps;
    var _this$props16 = this.props,
        isDisabled = _this$props16.isDisabled,
        isLoading = _this$props16.isLoading;
    var isFocused = this.state.isFocused;

    if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
      return null;
    }

    var innerProps = {
      onMouseDown: this.onClearIndicatorMouseDown,
      onTouchEnd: this.onClearIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return compat_module["default"].createElement(ClearIndicator, Select_073d29ba_esm__extends$4({}, commonProps, {
      innerProps: innerProps,
      isFocused: isFocused
    }));
  };

  _proto.renderLoadingIndicator = function renderLoadingIndicator() {
    var LoadingIndicator = this.components.LoadingIndicator;
    var commonProps = this.commonProps;
    var _this$props17 = this.props,
        isDisabled = _this$props17.isDisabled,
        isLoading = _this$props17.isLoading;
    var isFocused = this.state.isFocused;
    if (!LoadingIndicator || !isLoading) return null;
    var innerProps = {
      'aria-hidden': 'true'
    };
    return compat_module["default"].createElement(LoadingIndicator, Select_073d29ba_esm__extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderIndicatorSeparator = function renderIndicatorSeparator() {
    var _this$components2 = this.components,
        DropdownIndicator = _this$components2.DropdownIndicator,
        IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

    if (!DropdownIndicator || !IndicatorSeparator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    return compat_module["default"].createElement(IndicatorSeparator, Select_073d29ba_esm__extends$4({}, commonProps, {
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderDropdownIndicator = function renderDropdownIndicator() {
    var DropdownIndicator = this.components.DropdownIndicator;
    if (!DropdownIndicator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    var innerProps = {
      onMouseDown: this.onDropdownIndicatorMouseDown,
      onTouchEnd: this.onDropdownIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return compat_module["default"].createElement(DropdownIndicator, Select_073d29ba_esm__extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderMenu = function renderMenu() {
    var _this5 = this;

    var _this$components3 = this.components,
        Group = _this$components3.Group,
        GroupHeading = _this$components3.GroupHeading,
        Menu = _this$components3.Menu,
        MenuList = _this$components3.MenuList,
        MenuPortal = _this$components3.MenuPortal,
        LoadingMessage = _this$components3.LoadingMessage,
        NoOptionsMessage = _this$components3.NoOptionsMessage,
        Option = _this$components3.Option;
    var commonProps = this.commonProps;
    var _this$state9 = this.state,
        focusedOption = _this$state9.focusedOption,
        menuOptions = _this$state9.menuOptions;
    var _this$props18 = this.props,
        captureMenuScroll = _this$props18.captureMenuScroll,
        inputValue = _this$props18.inputValue,
        isLoading = _this$props18.isLoading,
        loadingMessage = _this$props18.loadingMessage,
        minMenuHeight = _this$props18.minMenuHeight,
        maxMenuHeight = _this$props18.maxMenuHeight,
        menuIsOpen = _this$props18.menuIsOpen,
        menuPlacement = _this$props18.menuPlacement,
        menuPosition = _this$props18.menuPosition,
        menuPortalTarget = _this$props18.menuPortalTarget,
        menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
        noOptionsMessage = _this$props18.noOptionsMessage,
        onMenuScrollToTop = _this$props18.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
    if (!menuIsOpen) return null; // TODO: Internal Option Type here

    var render = function render(props) {
      // for performance, the menu options in state aren't changed when the
      // focused option changes so we calculate additional props based on that
      var isFocused = focusedOption === props.data;
      props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
      return compat_module["default"].createElement(Option, Select_073d29ba_esm__extends$4({}, commonProps, props, {
        isFocused: isFocused
      }), _this5.formatOptionLabel(props.data, 'menu'));
    };

    var menuUI;

    if (this.hasOptions()) {
      menuUI = menuOptions.render.map(function (item) {
        if (item.type === 'group') {
          var type = item.type,
              group = Select_073d29ba_esm__objectWithoutPropertiesLoose$2(item, ["type"]);

          var headingId = item.key + "-heading";
          return compat_module["default"].createElement(Group, Select_073d29ba_esm__extends$4({}, commonProps, group, {
            Heading: GroupHeading,
            headingProps: {
              id: headingId
            },
            label: _this5.formatGroupLabel(item.data)
          }), item.options.map(function (option) {
            return render(option);
          }));
        } else if (item.type === 'option') {
          return render(item);
        }
      });
    } else if (isLoading) {
      var message = loadingMessage({
        inputValue: inputValue
      });
      if (message === null) return null;
      menuUI = compat_module["default"].createElement(LoadingMessage, commonProps, message);
    } else {
      var _message = noOptionsMessage({
        inputValue: inputValue
      });

      if (_message === null) return null;
      menuUI = compat_module["default"].createElement(NoOptionsMessage, commonProps, _message);
    }

    var menuPlacementProps = {
      minMenuHeight: minMenuHeight,
      maxMenuHeight: maxMenuHeight,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition,
      menuShouldScrollIntoView: menuShouldScrollIntoView
    };
    var menuElement = compat_module["default"].createElement(MenuPlacer, Select_073d29ba_esm__extends$4({}, commonProps, menuPlacementProps), function (_ref8) {
      var ref = _ref8.ref,
          _ref8$placerProps = _ref8.placerProps,
          placement = _ref8$placerProps.placement,
          maxHeight = _ref8$placerProps.maxHeight;
      return compat_module["default"].createElement(Menu, Select_073d29ba_esm__extends$4({}, commonProps, menuPlacementProps, {
        innerRef: ref,
        innerProps: {
          onMouseDown: _this5.onMenuMouseDown,
          onMouseMove: _this5.onMenuMouseMove
        },
        isLoading: isLoading,
        placement: placement
      }), compat_module["default"].createElement(ScrollCaptorSwitch, {
        isEnabled: captureMenuScroll,
        onTopArrive: onMenuScrollToTop,
        onBottomArrive: onMenuScrollToBottom
      }, compat_module["default"].createElement(Select_073d29ba_esm_ScrollBlock, {
        isEnabled: menuShouldBlockScroll
      }, compat_module["default"].createElement(MenuList, Select_073d29ba_esm__extends$4({}, commonProps, {
        innerRef: _this5.getMenuListRef,
        isLoading: isLoading,
        maxHeight: maxHeight
      }), menuUI))));
    }); // positioning behaviour is almost identical for portalled and fixed,
    // so we use the same component. the actual portalling logic is forked
    // within the component based on `menuPosition`

    return menuPortalTarget || menuPosition === 'fixed' ? compat_module["default"].createElement(MenuPortal, Select_073d29ba_esm__extends$4({}, commonProps, {
      appendTo: menuPortalTarget,
      controlElement: this.controlRef,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition
    }), menuElement) : menuElement;
  };

  _proto.renderFormField = function renderFormField() {
    var _this6 = this;

    var _this$props19 = this.props,
        delimiter = _this$props19.delimiter,
        isDisabled = _this$props19.isDisabled,
        isMulti = _this$props19.isMulti,
        name = _this$props19.name;
    var selectValue = this.state.selectValue;
    if (!name || isDisabled) return;

    if (isMulti) {
      if (delimiter) {
        var value = selectValue.map(function (opt) {
          return _this6.getOptionValue(opt);
        }).join(delimiter);
        return compat_module["default"].createElement("input", {
          name: name,
          type: "hidden",
          value: value
        });
      } else {
        var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
          return compat_module["default"].createElement("input", {
            key: "i-" + i,
            name: name,
            type: "hidden",
            value: _this6.getOptionValue(opt)
          });
        }) : compat_module["default"].createElement("input", {
          name: name,
          type: "hidden"
        });
        return compat_module["default"].createElement("div", null, input);
      }
    } else {
      var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

      return compat_module["default"].createElement("input", {
        name: name,
        type: "hidden",
        value: _value2
      });
    }
  };

  _proto.renderLiveRegion = function renderLiveRegion() {
    if (!this.state.isFocused) return null;
    return compat_module["default"].createElement(Select_073d29ba_esm_A11yText, {
      "aria-live": "polite"
    }, compat_module["default"].createElement("p", {
      id: "aria-selection-event"
    }, "\xA0", this.state.ariaLiveSelection), compat_module["default"].createElement("p", {
      id: "aria-context"
    }, "\xA0", this.constructAriaLiveMessage()));
  };

  _proto.render = function render() {
    var _this$components4 = this.components,
        Control = _this$components4.Control,
        IndicatorsContainer = _this$components4.IndicatorsContainer,
        SelectContainer = _this$components4.SelectContainer,
        ValueContainer = _this$components4.ValueContainer;
    var _this$props20 = this.props,
        className = _this$props20.className,
        id = _this$props20.id,
        isDisabled = _this$props20.isDisabled,
        menuIsOpen = _this$props20.menuIsOpen;
    var isFocused = this.state.isFocused;
    var commonProps = this.commonProps = this.getCommonProps();
    return compat_module["default"].createElement(SelectContainer, Select_073d29ba_esm__extends$4({}, commonProps, {
      className: className,
      innerProps: {
        id: id,
        onKeyDown: this.onKeyDown
      },
      isDisabled: isDisabled,
      isFocused: isFocused
    }), this.renderLiveRegion(), compat_module["default"].createElement(Control, Select_073d29ba_esm__extends$4({}, commonProps, {
      innerRef: this.getControlRef,
      innerProps: {
        onMouseDown: this.onControlMouseDown,
        onTouchEnd: this.onControlTouchEnd
      },
      isDisabled: isDisabled,
      isFocused: isFocused,
      menuIsOpen: menuIsOpen
    }), compat_module["default"].createElement(ValueContainer, Select_073d29ba_esm__extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderPlaceholderOrValue(), this.renderInput()), compat_module["default"].createElement(IndicatorsContainer, Select_073d29ba_esm__extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  };

  return Select;
}(compat_module["Component"]);

Select_073d29ba_esm_Select.defaultProps = defaultProps;


// CONCATENATED MODULE: ../node_modules/react-select/dist/stateManager-149692c5.esm.js


function stateManager_149692c5_esm__extends() {
  stateManager_149692c5_esm__extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return stateManager_149692c5_esm__extends.apply(this, arguments);
}

function stateManager_149692c5_esm__objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function stateManager_149692c5_esm__inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}
var stateManager_149692c5_esm_defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var stateManager_149692c5_esm_manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    stateManager_149692c5_esm__inheritsLoose(StateManager, _Component);

    function StateManager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    var _proto = StateManager.prototype;

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    } // FIXME: untyped flow code, return any
    ;

    _proto.getProp = function getProp(key) {
      return this.props[key] !== undefined ? this.props[key] : this.state[key];
    } // FIXME: untyped flow code, return any
    ;

    _proto.callProp = function callProp(name) {
      if (typeof this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = this.props)[name].apply(_this$props, args);
      }
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          defaultInputValue = _this$props2.defaultInputValue,
          defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
          defaultValue = _this$props2.defaultValue,
          props = stateManager_149692c5_esm__objectWithoutPropertiesLoose(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

      return compat_module["default"].createElement(SelectComponent, stateManager_149692c5_esm__extends({}, props, {
        ref: function ref(_ref) {
          _this2.select = _ref;
        },
        inputValue: this.getProp('inputValue'),
        menuIsOpen: this.getProp('menuIsOpen'),
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        onMenuClose: this.onMenuClose,
        onMenuOpen: this.onMenuOpen,
        value: this.getProp('value')
      }));
    };

    return StateManager;
  }(compat_module["Component"]), _class.defaultProps = stateManager_149692c5_esm_defaultProps, _temp;
};


// CONCATENATED MODULE: ../node_modules/react-select/dist/react-select.esm.js














function react_select_esm__inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
}

var react_select_esm_NonceProvider =
/*#__PURE__*/
function (_Component) {
  react_select_esm__inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return cache_esm({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoize_one_esm(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return compat_module["default"].createElement(CacheProvider, {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(compat_module["Component"]);

var react_select_esm_index = stateManager_149692c5_esm_manageState(Select_073d29ba_esm_Select);

/* harmony default export */ var react_select_esm = (react_select_esm_index);

// EXTERNAL MODULE: ../node_modules/react-range/lib/index.js
var react_range_lib = __webpack_require__("c4Sn");
var react_range_lib_default = /*#__PURE__*/__webpack_require__.n(react_range_lib);

// EXTERNAL MODULE: ../node_modules/rheostat/initialize.js
var initialize = __webpack_require__("2XCI");
var initialize_default = /*#__PURE__*/__webpack_require__.n(initialize);

// EXTERNAL MODULE: ../node_modules/rheostat/lib/Slider.js
var Slider = __webpack_require__("2c2a");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);

// CONCATENATED MODULE: ./components/dbSorter.js
var dbSorter__dec, dbSorter__class;



function dbSorter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dbSorter__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function dbSorter__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    Composant présentant une interface permettant de faire le tri dans la db
*/






//import des composants d'UI





/*
  Composant pour afficher une liste déroulante alimentée par un tableau
*/

var dbSorter__ref2 = Object(preact_min["h"])("br", null);

var dbSorter__ref3 = Object(preact_min["h"])("br", null);

var dbSorter_DynamicSelect = function (_Component) {
  dbSorter__inherits(DynamicSelect, _Component);

  function DynamicSelect() {
    dbSorter__classCallCheck(this, DynamicSelect);

    var _this = dbSorter__possibleConstructorReturn(this, _Component.call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  DynamicSelect.prototype.toUsableSelectValue = function toUsableSelectValue(rawOptList) {
    //console.log(rawOptList)
    var options = [];
    for (var _iterator = rawOptList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var opt = _ref;

      options.push({
        value: opt,
        label: opt
      });
    }
    return options;
  };

  //fonction qui s'active à la sélection, afin de renvoyer les nouvelles valeurs sélectionnées


  DynamicSelect.prototype.handleChange = function handleChange(selectedOptions) {
    //console.log("DynamicSelect value", selectedOptions)
    //on renvoie les nouvelles options ainsi que le nom du control
    this.props.onInput(selectedOptions, this.props.name);
  };

  DynamicSelect.prototype.render = function render() {
    return Object(preact_min["h"])(
      preact_min["Fragment"],
      null,
      dbSorter__ref2,
      dbSorter__ref3,
      Object(preact_min["h"])(react_select_esm, {
        onChange: this.handleChange,
        value: this.props.value,
        isMulti: true,
        options: this.toUsableSelectValue(this.props.optList) })
    )

    /* <select onChange={this.handleChange} multiple={true} class="form-control" id={this.props.name} name={this.props.name}>
      {this.props.optList.map(opt =>
          <option key={opt} value={opt}>{opt}</option>)}
    </select> */
    ;
  };

  return DynamicSelect;
}(preact_min["Component"]);

/*
  Composant pour afficher un choix entre un min et max
*/


var dbSorter__ref4 = Object(preact_min["h"])("br", null);

var dbSorter__ref5 = Object(preact_min["h"])("br", null);

var dbSorter__ref6 = Object(preact_min["h"])("br", null);

var dbSorter_InputRange = function (_Component2) {
  dbSorter__inherits(InputRange, _Component2);

  function InputRange() {
    dbSorter__classCallCheck(this, InputRange);

    var _this2 = dbSorter__possibleConstructorReturn(this, _Component2.call(this));

    _this2.handleRangeChange = _this2.handleRangeChange.bind(_this2);
    return _this2;
  }

  InputRange.prototype.handleRangeChange = function handleRangeChange(val) {
    this.props.onDrag(val, this.props.name);
  };

  InputRange.prototype.render = function render() {
    return Object(preact_min["h"])(
      preact_min["Fragment"],
      null,
      dbSorter__ref4,
      dbSorter__ref5,
      Object(preact_min["h"])(Slider_default.a, {
        min: this.props.min,
        max: this.props.max,
        values: this.props.values,
        snap: true,
        onValuesUpdated: this.handleRangeChange
      }),
      dbSorter__ref6,
      Object(preact_min["h"])(
        "p",
        null,
        this.props.values[0],
        " - ",
        this.props.values[1]
      )
    );
  };

  /* if(!props.disabled) {
      //on génère la liste d'options
      let rangeOptList = []
      let actualOpt = parseFloat(props.min)
      let max = parseFloat(props.max)
      //console.log("propsInfo", max)
      while (actualOpt <= max) {
        rangeOptList.push(actualOpt)
        actualOpt = actualOpt + parseFloat(props.step)
      }
        return <select multiple class="form-control" id={props.name} name={props.name}>
      {rangeOptList.map(opt =>
         <option key={opt} value={opt}>{opt}</option>)}
      </select>
    } else {
      return <select disabled multiple class="form-control" id={props.name} name={props.name}>
      
        <option>Disabled</option>
      </select>
  } */

  return InputRange;
}(preact_min["Component"]);

var dbSorter__ref7 = Object(preact_min["h"])(
  "h2",
  null,
  "iMAGES DATASET"
);

var dbSorter__ref8 = Object(preact_min["h"])(
  "div",
  { "class": "col" },
  Object(preact_min["h"])(
    "h3",
    null,
    "Image acquisition"
  )
);

var dbSorter__ref9 = Object(preact_min["h"])(
  "div",
  { "class": "col" },
  Object(preact_min["h"])(
    "h3",
    null,
    "Image processing"
  )
);

var dbSorter__ref10 = Object(preact_min["h"])(
  "div",
  { "class": "form-check" },
  Object(preact_min["h"])("input", { type: "checkbox", "class": "form-check-input", name: "useAcquisitionCriteria", id: "useAcquisitionCriteria" }),
  Object(preact_min["h"])(
    "label",
    { "for": "useAcquisitionCriteria", "class": "form-check-label" },
    "Chercher selon les crit\xE8res d'acquisition"
  )
);

var dbSorter__ref11 = Object(preact_min["h"])(
  "div",
  { "class": "form-check" },
  Object(preact_min["h"])("input", { type: "checkbox", "class": "form-check-input", name: "useProcessingCriteria", id: "useProcessingCriteria" }),
  Object(preact_min["h"])(
    "label",
    { "for": "useProcessingCriteria", "class": "form-check-label" },
    "Chercher selon les crit\xE8res de traitement"
  )
);

var dbSorter__ref12 = Object(preact_min["h"])(
  "label",
  { "for": "manufacturer" },
  "Manufacturer"
);

var _ref13 = Object(preact_min["h"])(
  "label",
  { "for": "demosaicing_algorithm" },
  "Demosaicing algorithm"
);

var _ref14 = Object(preact_min["h"])(
  "label",
  { "for": "camera_id" },
  "Camera ID"
);

var _ref15 = Object(preact_min["h"])(
  "div",
  { className: "form-group" },
  Object(preact_min["h"])(
    "label",
    { htmlFor: "" },
    "USM / DEN order"
  )
);

var _ref16 = Object(preact_min["h"])(
  "div",
  { "class": "form-check" },
  Object(preact_min["h"])("input", { "class": "form-check-input", type: "radio", name: "usm|den_order", id: "usm_after_den_choice", value: "0", checked: true }),
  Object(preact_min["h"])(
    "label",
    { "for": "usm_after_den_choice", "class": "form-check-label" },
    "USM after DEN"
  )
);

var _ref17 = Object(preact_min["h"])(
  "div",
  { "class": "form-check" },
  Object(preact_min["h"])("input", { "class": "form-check-input", type: "radio", name: "usm|den_order", id: "usm_before_den_choice", value: "1" }),
  Object(preact_min["h"])(
    "label",
    { "for": "usm_after_den_choice", "class": "form-check-label" },
    "USM before DEN"
  )
);

var _ref18 = Object(preact_min["h"])(
  "label",
  { "for": "year" },
  "Year"
);

var _ref19 = Object(preact_min["h"])(
  "label",
  { "for": "sharpenning" },
  "Sharpenning"
);

var _ref20 = Object(preact_min["h"])(
  "label",
  { "for": "camera_type" },
  "Camera Type"
);

var _ref21 = Object(preact_min["h"])(
  "label",
  { "for": "denoising" },
  "Denoising"
);

var _ref22 = Object(preact_min["h"])(
  "label",
  { "for": "fnumber" },
  "Fnumber"
);

var _ref23 = Object(preact_min["h"])(
  "label",
  { "for": "resizing" },
  "Resizing"
);

var _ref24 = Object(preact_min["h"])(
  "label",
  { "for": "iso" },
  "ISO"
);

var _ref25 = Object(preact_min["h"])(
  "label",
  { "for": "image_size" },
  "ImageSize"
);

var _ref26 = Object(preact_min["h"])(
  "label",
  { "for": "exposure" },
  "Exposure"
);

var _ref27 = Object(preact_min["h"])(
  "label",
  { "for": "jpeg_compression" },
  "JPEG Compression"
);

var _ref28 = Object(preact_min["h"])(
  "label",
  { "for": "mega_pixels" },
  "MegaPixels"
);

var _ref29 = Object(preact_min["h"])("div", { "class": "col" });

var _ref30 = Object(preact_min["h"])(
  "label",
  { "for": "raw_size" },
  "RAWsize"
);

var _ref31 = Object(preact_min["h"])("div", { "class": "col" });

var _ref32 = Object(preact_min["h"])(
  "label",
  { "for": "focal_length" },
  "Focal length"
);

var _ref33 = Object(preact_min["h"])("div", { "class": "col" });

var _ref34 = Object(preact_min["h"])(
  "label",
  { "for": "focal_length_eq35" },
  "Focal length Eq. 35Mm"
);

var _ref35 = Object(preact_min["h"])("div", { "class": "col" });

var _ref36 = Object(preact_min["h"])(
  "label",
  { "for": "crop_factor" },
  "Crop Factor"
);

var _ref37 = Object(preact_min["h"])("div", { "class": "col" });

var _ref38 = Object(preact_min["h"])(
  "label",
  { "for": "sensor_size" },
  "Sensor Size"
);

var _ref39 = Object(preact_min["h"])("div", { "class": "col" });

var _ref40 = Object(preact_min["h"])(
  "label",
  { "for": "sensor_size_mm" },
  "Sensor Size (mm)"
);

var _ref41 = Object(preact_min["h"])(
  "div",
  { "class": "col" },
  " "
);

var _ref42 = Object(preact_min["h"])(
  "label",
  { "for": "pixel_pitch" },
  "Pixel Pitch (\xB5m)"
);

var _ref43 = Object(preact_min["h"])(
  "div",
  { "class": "col" },
  " "
);

var _ref44 = Object(preact_min["h"])(
  "label",
  { "for": "pixel_density" },
  "Pixel Density (MP/cm2)"
);

var _ref45 = Object(preact_min["h"])(
  "div",
  { "class": "col" },
  " "
);

var _ref46 = Object(preact_min["h"])(
  "label",
  { "for": "sensor_model" },
  "Sensor Model"
);

var _ref47 = Object(preact_min["h"])(
  "div",
  { "class": "col" },
  " "
);

var _ref48 = Object(preact_min["h"])(
  "button",
  { type: "submit", className: "btn btn-default btn-lg" },
  "Trier"
);

var dbSorter_DbSorter = (dbSorter__dec = connect_connect(reducer_0, actions_namespaceObject), dbSorter__dec(dbSorter__class = function (_Component3) {
  dbSorter__inherits(DbSorter, _Component3);

  DbSorter.prototype.render = function render() {
    return Object(preact_min["h"])(
      preact_min["Fragment"],
      null,
      Object(preact_min["h"])(
        "section",
        { "class": "content-section text-center" },
        Object(preact_min["h"])(
          "div",
          { "class": "container" },
          dbSorter__ref7,
          Object(preact_min["h"])(
            "form",
            { onSubmit: this.onChoiceSubmit },
            Object(preact_min["h"])(
              "div",
              { "class": "row" },
              dbSorter__ref8,
              dbSorter__ref9
            ),
            Object(preact_min["h"])(
              "div",
              { className: "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                dbSorter__ref10
              ),
              Object(preact_min["h"])(
                "div",
                { className: "col" },
                dbSorter__ref11
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  dbSorter__ref12,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.manufacturer,
                    onInput: this.handleInputChange,
                    name: "manufacturer",
                    value: this.state.manufacturer })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref13,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.demosaicing_algorithm,
                    onInput: this.handleInputChange,
                    name: "demosaicing_algorithm",
                    value: this.state.demosaicing_algorithm }),
                  "                      "
                )
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref14,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.camera_id,
                    onInput: this.handleInputChange,
                    name: "camera_id",
                    value: this.state.camera_id })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                _ref15,
                _ref16,
                _ref17
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref18,
                  Object(preact_min["h"])(dbSorter_InputRange, {
                    name: "year",
                    onDrag: this.handleInputChange,
                    values: this.state.year,
                    max: 2018,
                    min: 2003 })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref19,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.sharpenning,
                    onInput: this.handleInputChange,
                    name: "sharpenning",
                    value: this.state.sharpenning })
                )
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref20,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.camera_type,
                    onInput: this.handleInputChange,
                    name: "camera_type",
                    value: this.state.camera_type })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref21,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.denoising,
                    onInput: this.handleInputChange,
                    name: "denoising",
                    value: this.state.denoising })
                )
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref22,
                  Object(preact_min["h"])(dbSorter_InputRange, {
                    values: this.state.fnumber,
                    min: 0,
                    max: 40,
                    onDrag: this.handleInputChange,
                    name: "fnumber" })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref23,
                  Object(preact_min["h"])(
                    "div",
                    { className: "input-group", id: "resizing" },
                    Object(preact_min["h"])(dbSorter_DynamicSelect, {
                      optList: this.formSelectAllowedValues.resizing_action,
                      onInput: this.handleInputChange,
                      name: "resizing_action",
                      value: this.state.resizing_action }),
                    Object(preact_min["h"])(dbSorter_DynamicSelect, {
                      optList: this.formSelectAllowedValues.resizing_type,
                      onInput: this.handleInputChange,
                      name: "resizing_type",
                      value: this.state.resizing_type }),
                    Object(preact_min["h"])(dbSorter_DynamicSelect, {
                      optList: this.formSelectAllowedValues.resizing_last_number,
                      onInput: this.handleInputChange,
                      name: "resizing_last_number",
                      value: this.state.resizing_last_number })
                  )
                )
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref24,
                  Object(preact_min["h"])(dbSorter_InputRange, {
                    values: this.state.iso,
                    onDrag: this.handleInputChange,
                    min: 16,
                    max: 51200,
                    name: "iso" })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref25,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.image_size,
                    onInput: this.handleInputChange,
                    name: "image_size",
                    value: this.state.image_size })
                )
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref26,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.exposure, min: 0, max: 30, name: "exposure" })
                )
              ),
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref27,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.jpeg_compression, min: 60, max: 100, name: "jpeg_compression" })
                )
              )
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref28,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.mega_pixels, min: 0, max: 60, name: "mega_pixels" })
                )
              ),
              _ref29
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref30,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.raw_size, min: 0, max: 12000, name: "raw_size" })
                )
              ),
              _ref31
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref32,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.focal_length, min: 0, max: 400, name: "focal_length" })
                )
              ),
              _ref33
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref34,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.focal_length_eq35, min: 0, max: 600, name: "focal_length_eq35" })
                )
              ),
              _ref35
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref36,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.crop_factor, min: 1, max: 9, name: "crop_factor" })
                )
              ),
              _ref37
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref38,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.sensor_size,
                    onInput: this.handleInputChange,
                    name: "sensor_size",
                    value: this.state.sensor_size })
                )
              ),
              _ref39
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref40,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.sensor_size_mm, name: "sensor_size_mm", step: 0.1, min: 5, max: 43.2 })
                )
              ),
              _ref41
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref42,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.pixel_pitch, name: "pixel_pitch", min: 1, max: 10 })
                )
              ),
              _ref43
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref44,
                  Object(preact_min["h"])(dbSorter_InputRange, { onDrag: this.handleInputChange, values: this.state.pixel_density, name: "pixel_density", min: 1, max: 100 })
                )
              ),
              _ref45
            ),
            Object(preact_min["h"])(
              "div",
              { "class": "form-row" },
              Object(preact_min["h"])(
                "div",
                { "class": "col" },
                Object(preact_min["h"])(
                  "div",
                  { "class": "form-group" },
                  _ref46,
                  Object(preact_min["h"])(dbSorter_DynamicSelect, {
                    optList: this.formSelectAllowedValues.sensor_model,
                    onInput: this.handleInputChange,
                    name: "sensor_model",
                    value: this.state.sensor_model })
                )
              ),
              _ref47
            ),
            _ref48
          )
        )
      )
    );
  };

  //Liste des valeurs possibles pour les éléments select


  //Liste des valeurs initiales pour les éléments range


  //fonction utilitaire pour convertir les valeurs en un objet utilisable par react-select
  DbSorter.prototype.toUsableSelectValue = function toUsableSelectValue(rawOptList) {
    //console.log(rawOptList)
    var options = [];
    for (var _iterator2 = rawOptList, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref49;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref49 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref49 = _i2.value;
      }

      var opt = _ref49;

      options.push({
        value: opt,
        label: opt
      });
    }
    return options;
  };

  //fonction initialisant le state de tous les éléments du formulaire


  DbSorter.prototype.initState = function initState() {
    this.state = {};
    //init des select
    for (var elem_key in this.formSelectAllowedValues) {
      if (this.formSelectAllowedValues.hasOwnProperty(elem_key)) {

        this.state[elem_key] = this.toUsableSelectValue(this.formSelectAllowedValues[elem_key]);
      }
    }
    //init des sliders
    for (var _elem_key in this.formRangeAllowedValues) {
      if (this.formRangeAllowedValues.hasOwnProperty(_elem_key)) {

        this.state[_elem_key] = this.formRangeAllowedValues[_elem_key];
      }
    }
  };

  function DbSorter() {
    dbSorter__classCallCheck(this, DbSorter);

    var _this3 = dbSorter__possibleConstructorReturn(this, _Component3.call(this));

    _this3.formSelectAllowedValues = {
      //ligne 1
      manufacturer: ['Internet License Free (WeSaturate)', 'Apple', 'Canon', 'Google', 'HTC', 'Huawei', 'Kodak', 'Leica', 'LG', 'Nikon', 'Panasonic', 'Pentax', 'Ricoh', 'Samsung', 'Sigma', 'Sony'],
      demosaicing_algorithm: ["Amaze", "DCB2", "Fast", "IGV"],
      //ligne 2
      camera_id: ["Internet License Free (WeSaturate)", "1-AW1", "Alpha6000 (ILCE-6000)", "Alpha 7R", "Canon PowerShot G11", "D3000 (Lens #1)", "D3000 (Lens #2)", "D5200 (device #1)", "D5200 (device #2)", "D5200 (device #3)", "D5600 (Lens #1)", "D5600 (Lens #2)", "D610", "D7100", "D810", "D90", "DMC-FZ28", "DMC-GM1", "DMC-TZ60", "EasyShare Z990", "EOS 100D (device #1)", "EOS 100D (device #2)", "EOS 20D", "EOS 500D", "EOS 60D", "EOS 700D", "G5 (Sensor #1)", "G5 (Sensor #2)", "G7 fit (LM-Q850)", "Galaxy S8 (SM-G950F)", "Galaxy S9+ (SM-G965F)", "GR DIGITAL III", "Honor 8 (FRD-L09)", "iPad Pro 12.9 (1st Generation)", "iPad Pro 12.9 (2nd Generation)", "*ist DS", "K10D (DNG Image File)", "K10D (PEF Image File)", "K-50 (device #1)", "K-50 (device #2)", "M9", "M Monochrom", "One A9", "One M9", "P20 Lite (ANE-LX1)", "Pixel XL", "SD10", "SD1 Merrill"],
      //ligne 3
      sharpenning: ["OFF", "ON (low)", "ON (modera)", "ON (high)"],
      //ligne 4
      camera_type: ["Internet License Free (WeSaturate)", "Bridge", "Compact", "DSLR", "Mirrorless", "Smartphone/Tablet"],
      denoising: ["OFF", "ON (low)", "ON (modera)", "ON (high)"],
      //ligne 5

      resizing_action: ["CROP ONLY (no resize)", "RESIZE ONLY (no crop)", "Crop And Resize"],
      resizing_type: ["BICUBIC", "BILINEAR", "LANCZOS", "NEAREST", "NONE (CROP ONLY)"],
      resizing_last_number: ["upsampling > 1 ", "downsampling low  0.5 <  < 1", "downsampling moderate  0.25 <  < 0.5", "downsampling strong  0.25"],

      //ligne 6
      image_size: ["1024x1024", "1024x512", "1024x640", "1024x720", "512x1024", "512x512", "512x640", "512x720", "640x1024", "640x512", "640x640", "640x720", "720x1024", "720x512", "720x640", "720x720"],
      //ligne 7
      sensor_size: ['1" (13.2x8.8)', '1/1.7"', '1/2.3"', '1/2.33"', '1/2.4"', '1/2.55"', '1/2.6"', '1/2.9"', '1/3"', '1/3.1"', '1/3.6"', '1.55" (20.7x13.8)', '4/3" (17.3x13.0)', 'APS-C', 'Full Frame'],
      //ligne 17
      sensor_model: ["Foveon X3", "Kodak KAF-18500", "Samsung ISOCELL 2L2 (S5K2L2) {OR IMX333}", "Samsung ISOCELL Plus 2L3 (S5K2L3) {OR IMX345}", "Sony Exmor IMX214RS", "Sony Exmor IMX378 RS", "Sony IMX038 Exmor", "Sony IMX071 Exmor", "Sony IMX094 Exmor", "Sony IMX128 Exmor", "Sony IMX193 Exmor", "Sony IMX210 Exmor", "Sony IMX234 Exmor RS", "Sony IMX268 Exmor RS", "Sony IMX286 Exmor RS", "Sony IMX315 Exmor RS", "Sony IMX351 Exmor RS", "Sony IMX493 Exmor", "Toshiba BSI T4KA7", "Toshiba TOS-5105"] };
    _this3.formRangeAllowedValues = {
      year: [2005, 2009],
      fnumber: [5, 20],
      iso: [290, 512],
      exposure: [10, 20],
      jpeg_compression: [70, 80],
      mega_pixels: [10, 30],
      raw_size: [200, 3000],
      focal_length: [100, 300],
      focal_length_eq35: [100, 300],
      crop_factor: [5, 7],
      sensor_size_mm: [8, 40.1],
      pixel_pitch: [5, 9],
      pixel_density: [50, 80] };

    _this3.initState();
    _this3.handleInputChange = _this3.handleInputChange.bind(_this3);
    return _this3;
  }

  //fonction pour gérer l'envoi du formulaire


  DbSorter.prototype.onChoiceSubmit = function onChoiceSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  };

  //fonction qui gère la sélection de chaque élément


  DbSorter.prototype.handleInputChange = function handleInputChange(newValue, name) {
    var _setState;

    //console.log("MaterialComponent value", newValue.values)
    this.setState((_setState = {}, _setState[name] = newValue.values, _setState));
  };

  return DbSorter;
}(preact_min["Component"])) || dbSorter__class);


/* harmony default export */ var dbSorter = (dbSorter_DbSorter);
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

var loginForm_LoginForm = (loginForm__dec = connect_connect(reducer_0, actions_namespaceObject), loginForm__dec(loginForm__class = function (_Component) {
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

var loginModal_LoginModal = (loginModal__dec = connect_connect(reducer_0, actions_namespaceObject), loginModal__dec(loginModal__class = function (_Component) {
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

var resetForm_ResetForm = (resetForm__dec = connect_connect(reducer_0, actions_namespaceObject), resetForm__dec(resetForm__class = function (_Component) {
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

var resetModal_ResetModal = (resetModal__dec = connect_connect(reducer_0, actions_namespaceObject), resetModal__dec(resetModal__class = function (_Component) {
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








var toastContainer_ToastContainer = (toastContainer__dec = connect_connect(reducer_0, actions_namespaceObject), toastContainer__dec(toastContainer__class = function (_Component) {
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

var timeline_Timeline = (timeline__dec = connect_connect(reducer_0, actions_namespaceObject), timeline__dec(timeline__class = function (_Component) {
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
var style_theme = __webpack_require__("pt8n");
var theme_default = /*#__PURE__*/__webpack_require__.n(style_theme);

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

// Must be the first import



























var app__ref = Object(preact_min["h"])(nav, null);

var app__ref2 = Object(preact_min["h"])(header, null);

var app__ref3 = Object(preact_min["h"])(about, null);

var app__ref4 = Object(preact_min["h"])(timeline, null);

var app__ref5 = Object(preact_min["h"])(material, null);

var app__ref6 = Object(preact_min["h"])(dbSorter, null);

var app__ref7 = Object(preact_min["h"])(components_rules, null);

var app__ref8 = Object(preact_min["h"])(components_HallOfFame, null);

var app__ref9 = Object(preact_min["h"])(acknowledgements, null);

var app__ref10 = Object(preact_min["h"])(footer, null);

var app__ref11 = Object(preact_min["h"])(toastContainer, null);

var app__ref12 = Object(preact_min["h"])(loginModal, null);

var app__ref13 = Object(preact_min["h"])(resetModal, null);

var app_App = (app__dec = connect_connect(reducer_0, actions_namespaceObject), app__dec(app__class = function (_Component) {
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
      app__ref11,
      this.props.showLoginModal ? app__ref12 : null,
      this.props.showResetModal ? app__ref13 : null
    );
  };

  return App;
}(preact_min["Component"])) || app__class);


/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js







//activation du devtools redux
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var index_store = createStore(reducer_0, composeEnhancers(applyMiddleware(redux_thunk_es)));

var index__ref = Object(preact_min["h"])(
	'div',
	{ id: 'outer' },
	Object(preact_min["h"])(
		components_Provider,
		{ store: index_store },
		Object(preact_min["h"])(app, null)
	)
);

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (function () {
	return index__ref;
});

/***/ }),

/***/ "Jlaz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("VxKF");

var implementation = __webpack_require__("+5Pm");
var getPolyfill = __webpack_require__("JzMa");
var shim = __webpack_require__("ViJj");

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;

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

/***/ "JzMa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("+5Pm");

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};

/***/ }),

/***/ "K+N6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("VxKF");
var isSymbol = __webpack_require__("js02");

var globalKey = '__ global cache key __';
/* istanbul ignore else */
// eslint-disable-next-line no-restricted-properties
if (typeof Symbol === 'function' && isSymbol(Symbol('foo')) && typeof Symbol['for'] === 'function') {
	// eslint-disable-next-line no-restricted-properties
	globalKey = Symbol['for'](globalKey);
}

var trueThunk = function trueThunk() {
	return true;
};

var ensureCache = function ensureCache() {
	if (!global[globalKey]) {
		var properties = {};
		properties[globalKey] = {};
		var predicates = {};
		predicates[globalKey] = trueThunk;
		define(global, properties, predicates);
	}
	return global[globalKey];
};

var cache = ensureCache();

var isPrimitive = function isPrimitive(val) {
	return val === null || typeof val !== 'object' && typeof val !== 'function';
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	clear: function clear() {
		delete global[globalKey];
		cache = ensureCache();
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var primitiveKey = getPrimitiveKey(key);
		var props = {};
		props[primitiveKey] = value;
		var predicates = {};
		predicates[primitiveKey] = trueThunk;
		define(cache, props, predicates);
		return globalCache.has(key);
	},

	setIfMissingThenGet: function setIfMissingThenGet(key, valueThunk) {
		if (globalCache.has(key)) {
			return globalCache.get(key);
		}
		var item = valueThunk();
		globalCache.set(key, item);
		return item;
	}
};

module.exports = globalCache;

/***/ }),

/***/ "KHO6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("26zG");

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};

/***/ }),

/***/ "KM04":
/***/ (function(module, exports) {

!function () {
  var n,
      l,
      u,
      t,
      i,
      o,
      r,
      e,
      f = {},
      c = [],
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n, l) {
    for (var u in l) {
      n[u] = l[u];
    }return n;
  }function v(n) {
    var l = n.parentNode;l && l.removeChild(n);
  }function h(n, l, u) {
    var t,
        i = arguments,
        o = {};for (t in l) {
      "key" !== t && "ref" !== t && (o[t] = l[t]);
    }if (arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) {
      u.push(i[t]);
    }if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (t in n.defaultProps) {
      void 0 === o[t] && (o[t] = n.defaultProps[t]);
    }return y(n, o, l && l.key, l && l.ref, null);
  }function y(l, u, t, i, o) {
    var r = { type: l, props: u, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o };return null == o && (r.__v = r), n.vnode && n.vnode(r), r;
  }function p(n) {
    return n.children;
  }function d(n, l) {
    this.props = n, this.context = l;
  }function _(n, l) {
    if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;for (var u; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    }return "function" == typeof n.type ? _(n) : null;
  }function m(n) {
    var l, u;if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
        if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;break;
        }
      }return m(n);
    }
  }function k(l) {
    (!l.__d && (l.__d = !0) && u.push(l) && !w.__r++ || i !== n.debounceRendering) && ((i = n.debounceRendering) || t)(w);
  }function w() {
    for (var n; w.__r = u.length;) {
      n = u.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), u = [], n.some(function (n) {
        var l, u, t, i, o, r, e;n.__d && (r = (o = (l = n).__v).__e, (e = l.__P) && (u = [], (t = s({}, o)).__v = t, i = N(e, o, t, l.__n, void 0 !== e.ownerSVGElement, null, u, null == r ? _(o) : r), z(u, o), i != r && m(o)));
      });
    }
  }function g(n, l, u, t, i, o, r, e, a, s) {
    var h,
        d,
        m,
        k,
        w,
        g,
        x,
        C = t && t.__k || c,
        A = C.length;for (a == f && (a = null != r ? r[0] : A ? _(t, 0) : null), u.__k = [], h = 0; h < l.length; h++) {
      if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? y(null, k, null, null, k) : Array.isArray(k) ? y(p, { children: k }, null, null, null) : null != k.__e || null != k.__c ? y(k.type, k.props, k.key, null, k.__v) : k)) {
        if (k.__ = u, k.__b = u.__b + 1, null === (m = C[h]) || m && k.key == m.key && k.type === m.type) C[h] = void 0;else for (d = 0; d < A; d++) {
          if ((m = C[d]) && k.key == m.key && k.type === m.type) {
            C[d] = void 0;break;
          }m = null;
        }w = N(n, k, m = m || f, i, o, r, e, a, s), (d = k.ref) && m.ref != d && (x || (x = []), m.ref && x.push(m.ref, null, k), x.push(d, k.__c || w, k)), null != w ? (null == g && (g = w), a = b(n, k, m, C, r, w, a), "option" == u.type ? n.value = "" : "function" == typeof u.type && (u.__d = a)) : a && m.__e == a && a.parentNode != n && (a = _(m));
      }
    }if (u.__e = g, null != r && "function" != typeof u.type) for (h = r.length; h--;) {
      null != r[h] && v(r[h]);
    }for (h = A; h--;) {
      null != C[h] && j(C[h], C[h]);
    }if (x) for (h = 0; h < x.length; h++) {
      $(x[h], x[++h], x[++h]);
    }
  }function b(n, l, u, t, i, o, r) {
    var e, f, c;if (void 0 !== l.__d) e = l.__d, l.__d = void 0;else if (i == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), e = null;else {
      for (f = r, c = 0; (f = f.nextSibling) && c < t.length; c += 2) {
        if (f == o) break n;
      }n.insertBefore(o, r), e = r;
    }return void 0 !== e ? e : o.nextSibling;
  }function x(n, l, u, t, i) {
    var o;for (o in u) {
      "children" === o || "key" === o || o in l || A(n, o, null, u[o], t);
    }for (o in l) {
      i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || A(n, o, l[o], u[o], t);
    }
  }function C(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === a.test(l) ? u + "px" : null == u ? "" : u;
  }function A(n, l, u, t, i) {
    var o, r, e, f, c;if (i ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
      if (o = n.style, "string" == typeof u) o.cssText = u;else {
        if ("string" == typeof t && (o.cssText = "", t = null), t) for (f in t) {
          u && f in u || C(o, f, "");
        }if (u) for (c in u) {
          t && u[c] === t[c] || C(o, c, u[c]);
        }
      }
    } else "o" === l[0] && "n" === l[1] ? (r = l !== (l = l.replace(/Capture$/, "")), e = l.toLowerCase(), l = (e in n ? e : l).slice(2), u ? (t || n.addEventListener(l, P, r), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, P, r)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
  }function P(l) {
    this.l[l.type](n.event ? n.event(l) : l);
  }function E(n, l, u) {
    var t, i;for (t = 0; t < n.__k.length; t++) {
      (i = n.__k[t]) && (i.__ = n, i.__e && ("function" == typeof i.type && i.__k.length > 1 && E(i, l, u), l = b(u, i, i, n.__k, null, i.__e, l), "function" == typeof n.type && (n.__d = l)));
    }
  }function N(l, u, t, i, o, r, e, f, c) {
    var a,
        v,
        h,
        y,
        _,
        m,
        k,
        w,
        b,
        x,
        C,
        A = u.type;if (void 0 !== u.constructor) return null;(a = n.__b) && a(u);try {
      n: if ("function" == typeof A) {
        if (w = u.props, b = (a = A.contextType) && i[a.__c], x = a ? b ? b.props.value : a.__ : i, t.__c ? k = (v = u.__c = t.__c).__ = v.__E : ("prototype" in A && A.prototype.render ? u.__c = v = new A(w, x) : (u.__c = v = new d(w, x), v.constructor = A, v.render = F), b && b.sub(v), v.props = w, v.state || (v.state = {}), v.context = x, v.__n = i, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != A.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, A.getDerivedStateFromProps(w, v.__s))), y = v.props, _ = v.state, h) null == A.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
          if (null == A.getDerivedStateFromProps && w !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(w, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(w, v.__s, x) || u.__v === t.__v) {
            v.props = w, v.state = v.__s, u.__v !== t.__v && (v.__d = !1), v.__v = u, u.__e = t.__e, u.__k = t.__k, v.__h.length && e.push(v), E(u, f, l);break n;
          }null != v.componentWillUpdate && v.componentWillUpdate(w, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
            v.componentDidUpdate(y, _, m);
          });
        }v.context = x, v.props = w, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (i = s(s({}, i), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (m = v.getSnapshotBeforeUpdate(y, _)), C = null != a && a.type == p && null == a.key ? a.props.children : a, g(l, Array.isArray(C) ? C : [C], u, t, i, o, r, e, f, c), v.base = u.__e, v.__h.length && e.push(v), k && (v.__E = v.__ = null), v.__e = !1;
      } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = T(t.__e, u, t, i, o, r, e, c);(a = n.diffed) && a(u);
    } catch (l) {
      u.__v = null, n.__e(l, u, t);
    }return u.__e;
  }function z(l, u) {
    n.__c && n.__c(u, l), l.some(function (u) {
      try {
        l = u.__h, u.__h = [], l.some(function (n) {
          n.call(u);
        });
      } catch (l) {
        n.__e(l, u.__v);
      }
    });
  }function T(n, l, u, t, i, o, r, e) {
    var a,
        s,
        v,
        h,
        y,
        p = u.props,
        d = l.props;if (i = "svg" === l.type || i, null != o) for (a = 0; a < o.length; a++) {
      if (null != (s = o[a]) && ((null === l.type ? 3 === s.nodeType : s.localName === l.type) || n == s)) {
        n = s, o[a] = null;break;
      }
    }if (null == n) {
      if (null === l.type) return document.createTextNode(d);n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && { is: d.is }), o = null, e = !1;
    }if (null === l.type) p !== d && n.data != d && (n.data = d);else {
      if (null != o && (o = c.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !e) {
        if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) {
          p[n.attributes[y].name] = n.attributes[y].value;
        }(h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
      }x(n, d, p, i, e), h ? l.__k = [] : (a = l.props.children, g(n, Array.isArray(a) ? a : [a], l, u, t, "foreignObject" !== l.type && i, o, r, f, e)), e || ("value" in d && void 0 !== (a = d.value) && a !== n.value && A(n, "value", a, p.value, !1), "checked" in d && void 0 !== (a = d.checked) && a !== n.checked && A(n, "checked", a, p.checked, !1));
    }return n;
  }function $(l, u, t) {
    try {
      "function" == typeof l ? l(u) : l.current = u;
    } catch (l) {
      n.__e(l, t);
    }
  }function j(l, u, t) {
    var i, o, r;if (n.unmount && n.unmount(l), (i = l.ref) && (i.current && i.current !== l.__e || $(i, null, u)), t || "function" == typeof l.type || (t = null != (o = l.__e)), l.__e = l.__d = void 0, null != (i = l.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (l) {
        n.__e(l, u);
      }i.base = i.__P = null;
    }if (i = l.__k) for (r = 0; r < i.length; r++) {
      i[r] && j(i[r], u, t);
    }null != o && v(o);
  }function F(n, l, u) {
    return this.constructor(n, u);
  }function H(l, u, t) {
    var i, r, e;n.__ && n.__(l, u), r = (i = t === o) ? null : t && t.__k || u.__k, l = h(p, null, [l]), e = [], N(u, (i ? u : t || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : r ? null : u.childNodes.length ? c.slice.call(u.childNodes) : null, e, t || f, i), z(e, l);
  }n = { __e: function __e(n, l) {
      for (var u, t; l = l.__;) {
        if ((u = l.__c) && !u.__) try {
          if (u.constructor && null != u.constructor.getDerivedStateFromError && (t = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (t = !0, u.componentDidCatch(n)), t) return k(u.__E = u);
        } catch (l) {
          n = l;
        }
      }throw n;
    } }, l = function l(n) {
    return null != n && void 0 === n.constructor;
  }, d.prototype.setState = function (n, l) {
    var u;u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
  }, d.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
  }, d.prototype.render = p, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, w.__r = 0, o = f, r = 0, e = { render: H, hydrate: function hydrate(n, l) {
      H(n, l, o);
    }, createElement: h, h: h, Fragment: p, createRef: function createRef() {
      return { current: null };
    }, isValidElement: l, Component: d, cloneElement: function cloneElement(n, l) {
      var u, t;for (t in l = s(s({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), u = {}, l) {
        "key" !== t && "ref" !== t && (u[t] = l[t]);
      }return y(n.type, u, l.key || n.key, l.ref || n.ref, null);
    }, createContext: function createContext(n) {
      var l = {},
          u = { __c: "__cC" + r++, __: n, Consumer: function Consumer(n, l) {
          return n.children(l);
        }, Provider: function Provider(n) {
          var t,
              i = this;return this.getChildContext || (t = [], this.getChildContext = function () {
            return l[u.__c] = i, l;
          }, this.shouldComponentUpdate = function (n) {
            i.props.value !== n.value && t.some(function (l) {
              l.context = n.value, k(l);
            });
          }, this.sub = function (n) {
            t.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {
              t.splice(t.indexOf(n), 1), l && l.call(n);
            };
          }), n.children;
        } };return u.Consumer.contextType = u, u.Provider.__ = u, u;
    }, toChildArray: function n(l) {
      return null == l || "boolean" == typeof l ? [] : Array.isArray(l) ? c.concat.apply([], l.map(n)) : [l];
    }, __u: j, options: n }, typeof module < "u" ? module.exports = e : self.preact = e;
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

/***/ "Kfog":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) {
  return !!value;
};

/***/ }),

/***/ "KkOP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("VxKF");
var callBind = __webpack_require__("I+tp");

var implementation = __webpack_require__("26zG");
var getPolyfill = __webpack_require__("KHO6");
var polyfill = getPolyfill();
var shim = __webpack_require__("m7np");

var boundFlat = callBind(polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;

/***/ }),

/***/ "LENn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function throwTypeError() {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function () {
	try {
		// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
		arguments.callee; // IE 8 does not throw here
		return throwTypeError;
	} catch (calleeThrows) {
		try {
			// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
			return $gOPD(arguments, 'callee').get;
		} catch (gOPDthrows) {
			return throwTypeError;
		}
	}
}() : throwTypeError;

var hasSymbols = __webpack_require__("NS5K")();

var getProto = Object.getPrototypeOf || function (x) {
	return x.__proto__;
}; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__("58Ti");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && i + 1 >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? desc.get || desc.value : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};

/***/ }),

/***/ "LSEm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * on-headers
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = onHeaders;

/**
 * Create a replacement writeHead method.
 *
 * @param {function} prevWriteHead
 * @param {function} listener
 * @private
 */

function createWriteHead(prevWriteHead, listener) {
  var fired = false;

  // return function with core name and argument list
  return function writeHead(statusCode) {
    // set headers from arguments
    var args = setWriteHeadHeaders.apply(this, arguments);

    // fire listener
    if (!fired) {
      fired = true;
      listener.call(this);

      // pass-along an updated status code
      if (typeof args[0] === 'number' && this.statusCode !== args[0]) {
        args[0] = this.statusCode;
        args.length = 1;
      }
    }

    return prevWriteHead.apply(this, args);
  };
}

/**
 * Execute a listener when a response is about to write headers.
 *
 * @param {object} res
 * @return {function} listener
 * @public
 */

function onHeaders(res, listener) {
  if (!res) {
    throw new TypeError('argument res is required');
  }

  if (typeof listener !== 'function') {
    throw new TypeError('argument listener must be a function');
  }

  res.writeHead = createWriteHead(res.writeHead, listener);
}

/**
 * Set headers contained in array on the response object.
 *
 * @param {object} res
 * @param {array} headers
 * @private
 */

function setHeadersFromArray(res, headers) {
  for (var i = 0; i < headers.length; i++) {
    res.setHeader(headers[i][0], headers[i][1]);
  }
}

/**
 * Set headers contained in object on the response object.
 *
 * @param {object} res
 * @param {object} headers
 * @private
 */

function setHeadersFromObject(res, headers) {
  var keys = Object.keys(headers);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (k) res.setHeader(k, headers[k]);
  }
}

/**
 * Set headers and other properties on the response object.
 *
 * @param {number} statusCode
 * @private
 */

function setWriteHeadHeaders(statusCode) {
  var length = arguments.length;
  var headerIndex = length > 1 && typeof arguments[1] === 'string' ? 2 : 1;

  var headers = length >= headerIndex + 1 ? arguments[headerIndex] : undefined;

  this.statusCode = statusCode;

  if (Array.isArray(headers)) {
    // handle array case
    setHeadersFromArray(this, headers);
  } else if (headers) {
    // handle object case
    setHeadersFromObject(this, headers);
  }

  // copy leading arguments
  var args = new Array(Math.min(length, headerIndex));
  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i];
  }

  return args;
}

/***/ }),

/***/ "LVeT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var EMPTY_STYLES = {};

var EMPTY_STYLES_FN = function EMPTY_STYLES_FN() {
  return EMPTY_STYLES;
};

var _default = EMPTY_STYLES_FN;
exports["default"] = _default;

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

/***/ "M3Zt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("ar57");

var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__("QalR");
var ToBoolean = __webpack_require__("Kfog");
var IsCallable = __webpack_require__("kdXM");

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

/***/ }),

/***/ "N+JA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrayPrototype = _interopRequireDefault(__webpack_require__("KkOP"));

var _globalCache = _interopRequireDefault(__webpack_require__("K+N6"));

var _constants = __webpack_require__("CDPk");

var _getClassName = _interopRequireDefault(__webpack_require__("BMG/"));

var _separateStyles2 = _interopRequireDefault(__webpack_require__("JG2J"));

/**
 * Function required as part of the react-with-styles interface. Parses the styles provided by
 * react-with-styles to produce class names based on the style name and optionally the namespace if
 * available.
 *
 * stylesObject {Object} The styles object passed to withStyles.
 *
 * Return an object mapping style names to class names.
 */
function create(stylesObject) {
  var stylesToClasses = {};
  var styleNames = Object.keys(stylesObject);
  var sharedState = _globalCache["default"].get(_constants.GLOBAL_CACHE_KEY) || {};
  var _sharedState$namespac = sharedState.namespace,
      namespace = _sharedState$namespac === void 0 ? '' : _sharedState$namespac;
  styleNames.forEach(function (styleName) {
    var className = (0, _getClassName["default"])(namespace, styleName);
    stylesToClasses[styleName] = className;
  });
  return stylesToClasses;
}
/**
 * Process styles to be consumed by a component.
 *
 * stylesArray {Array} Array of the following: values returned by create, plain JavaScript objects
 * representing inline styles, or arrays thereof.
 *
 * Return an object with optional className and style properties to be spread on a component.
 */

function resolve(stylesArray) {
  var flattenedStyles = (0, _arrayPrototype["default"])(stylesArray, Infinity);

  var _separateStyles = (0, _separateStyles2["default"])(flattenedStyles),
      classNames = _separateStyles.classNames,
      hasInlineStyles = _separateStyles.hasInlineStyles,
      inlineStyles = _separateStyles.inlineStyles;

  var specificClassNames = classNames.map(function (name, index) {
    return "".concat(name, " ").concat(name, "_").concat(index + 1);
  });
  var className = specificClassNames.join(' ');
  var result = {
    className: className
  };
  if (hasInlineStyles) result.style = inlineStyles;
  return result;
}

var _default = {
  create: create,
  resolve: resolve
};
exports["default"] = _default;

/***/ }),

/***/ "NS5K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__("jYt2");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') {
		return false;
	}
	if (typeof Symbol !== 'function') {
		return false;
	}
	if (typeof origSymbol('foo') !== 'symbol') {
		return false;
	}
	if (typeof Symbol('bar') !== 'symbol') {
		return false;
	}

	return hasSymbolSham();
};

/***/ }),

/***/ "NVR6":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

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

var _react = __webpack_require__("AQ6k");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("AQ6k");

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

/***/ "NyUK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

/***/ }),

/***/ "O+3N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__("JJMv"));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__("yK78"));

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ "OMTj":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "OUZ9":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "P2le":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};

/***/ }),

/***/ "Q25H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("IxO8"));

var _react = _interopRequireDefault(__webpack_require__("AQ6k"));

var _airbnbPropTypes = __webpack_require__("qe4R");

var _reactWithStyles = __webpack_require__("ooNQ");

var _SliderConstants = __webpack_require__("mwu8");

var _OrientationPropType = _interopRequireDefault(__webpack_require__("lPvV"));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });keys.push.apply(keys, symbols);
  }return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }return target;
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  orientation: _OrientationPropType["default"]
}));
var defaultProps = {
  orientation: _SliderConstants.HORIZONTAL
};

function DefaultBackground(_ref) {
  var css = _ref.css,
      orientation = _ref.orientation,
      styles = _ref.styles;
  return _react["default"].createElement("div", css(styles.DefaultBackground, orientation === _SliderConstants.VERTICAL ? styles.DefaultBackground_background__vertical : styles.DefaultBackground_background__horizontal));
}

DefaultBackground.propTypes = propTypes;
DefaultBackground.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$rheostat = _ref2.rheostat,
      color = _ref2$rheostat.color,
      unit = _ref2$rheostat.unit;
  return {
    DefaultBackground: {
      backgroundColor: color.white,
      height: 2 * unit - 1,
      width: '100%',
      border: "1px solid ".concat(color.grey),
      position: 'relative'
    },
    DefaultBackground_background__horizontal: {
      height: 2 * unit - 1,
      top: -2,
      left: -2,
      bottom: 4,
      width: '100%'
    },
    DefaultBackground_background__vertical: {
      width: 2 * unit - 1,
      top: 0,
      height: '100%'
    }
  };
})(DefaultBackground);

exports["default"] = _default;

/***/ }),

/***/ "QMjl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getInterface = _getInterface;
exports._getTheme = get;
exports["default"] = void 0;
var styleInterface;
var styleTheme;
var START_MARK = 'react-with-styles.resolve.start';
var END_MARK = 'react-with-styles.resolve.end';
var MEASURE_MARK = "\uD83D\uDC69\u200D\uD83C\uDFA8 [resolve]";

function registerTheme(theme) {
  styleTheme = theme;
}

function registerInterface(interfaceToRegister) {
  styleInterface = interfaceToRegister;
}

function create(makeFromTheme, createWithDirection) {
  var styles = createWithDirection(makeFromTheme(styleTheme));
  return function () {
    return styles;
  };
}

function createLTR(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createLTR || styleInterface.create);
}

function createRTL(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createRTL || styleInterface.create);
}

function get() {
  return styleTheme;
}

function resolve() {
  if (false) {
    performance.clearMarks(START_MARK);
    performance.mark(START_MARK);
  }

  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if (false) {
    performance.clearMarks(END_MARK);
    performance.mark(END_MARK);
    performance.measure(MEASURE_MARK, START_MARK, END_MARK);
    performance.clearMarks(MEASURE_MARK);
  }

  return result;
}

function resolveLTR() {
  for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  if (styleInterface.resolveLTR) {
    return styleInterface.resolveLTR(styles);
  }

  return resolve(styles);
}

function resolveRTL() {
  for (var _len3 = arguments.length, styles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  if (styleInterface.resolveRTL) {
    return styleInterface.resolveRTL(styles);
  }

  return resolve(styles);
}

function flush() {
  if (styleInterface.flush) {
    styleInterface.flush();
  }
} // Exported until we deprecate this API completely
// eslint-disable-next-line no-underscore-dangle


function _getInterface() {
  return styleInterface;
} // Exported until we deprecate this API completely


var _default = {
  registerTheme: registerTheme,
  registerInterface: registerInterface,
  create: createLTR,
  createLTR: createLTR,
  createRTL: createRTL,
  get: get,
  resolve: resolveLTR,
  resolveLTR: resolveLTR,
  resolveRTL: resolveRTL,
  flush: flush
};
exports["default"] = _default;

/***/ }),

/***/ "QPpz":
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "QalR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__("P2le");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};

/***/ }),

/***/ "RPFx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ragd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("ar57");

var assertRecord = __webpack_require__("mBar");

var Type = __webpack_require__("QalR");

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

/***/ }),

/***/ "Rom6":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "RsE0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;switch (u) {case c:
        switch (a = a.type, a) {case l:case m:case e:case g:case f:case p:
            return a;default:
            switch (a = a && a.$$typeof, a) {case k:case n:case t:case r:case h:
                return a;default:
                return u;}}case d:
        return u;}
  }
}function A(a) {
  return z(a) === m;
}exports.AsyncMode = l;exports.ConcurrentMode = m;exports.ContextConsumer = k;exports.ContextProvider = h;exports.Element = c;exports.ForwardRef = n;exports.Fragment = e;exports.Lazy = t;exports.Memo = r;exports.Portal = d;
exports.Profiler = g;exports.StrictMode = f;exports.Suspense = p;exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};exports.isConcurrentMode = A;exports.isContextConsumer = function (a) {
  return z(a) === k;
};exports.isContextProvider = function (a) {
  return z(a) === h;
};exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};exports.isForwardRef = function (a) {
  return z(a) === n;
};exports.isFragment = function (a) {
  return z(a) === e;
};exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};exports.isPortal = function (a) {
  return z(a) === d;
};exports.isProfiler = function (a) {
  return z(a) === g;
};exports.isStrictMode = function (a) {
  return z(a) === f;
};exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};exports.typeOf = z;

/***/ }),

/***/ "SpGf":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "T4LY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e7abb733417793b69f21d05c1f273800.png";

/***/ }),

/***/ "T9JR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || typeof value !== 'function' && typeof value !== 'object';
};

/***/ }),

/***/ "TD7O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

/***/ }),

/***/ "Tsh+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDirectionPropTypes = exports.DIRECTIONS = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports['default'] = withDirection;

var _react = __webpack_require__("AQ6k");

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__("89El");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _deepmerge = __webpack_require__("BokN");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _getComponentName = __webpack_require__("zYaU");

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _constants = __webpack_require__("jwNV");

var _brcast = __webpack_require__("tREi");

var _brcast2 = _interopRequireDefault(_brcast);

var _direction = __webpack_require__("x1VU");

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
} /* eslint-disable react/forbid-foreign-prop-types */
// This higher-order component consumes a string from React context that is
// provided by the DirectionProvider component.
// We can use this to conditionally switch layout/direction for right-to-left layouts.

var contextTypes = _defineProperty({}, _constants.CHANNEL, _brcast2['default']);

exports.DIRECTIONS = _constants.DIRECTIONS;

// set a default direction so that a component wrapped with this HOC can be
// used even without a DirectionProvider ancestor in its react tree.

var defaultDirection = _constants.DIRECTIONS.LTR;

// export for convenience, in order for components to spread these onto their propTypes
var withDirectionPropTypes = exports.withDirectionPropTypes = {
  direction: _direction2['default'].isRequired
};

function withDirection(WrappedComponent) {
  var WithDirection = function (_React$Component) {
    _inherits(WithDirection, _React$Component);

    function WithDirection(props, context) {
      _classCallCheck(this, WithDirection);

      var _this = _possibleConstructorReturn(this, (WithDirection.__proto__ || Object.getPrototypeOf(WithDirection)).call(this, props, context));

      _this.state = {
        direction: context[_constants.CHANNEL] ? context[_constants.CHANNEL].getState() : defaultDirection
      };
      return _this;
    }

    _createClass(WithDirection, [{
      key: 'componentDidMount',
      value: function () {
        function componentDidMount() {
          var _this2 = this;

          if (this.context[_constants.CHANNEL]) {
            // subscribe to future direction changes
            this.channelUnsubscribe = this.context[_constants.CHANNEL].subscribe(function (direction) {
              _this2.setState({ direction: direction });
            });
          }
        }

        return componentDidMount;
      }()
    }, {
      key: 'componentWillUnmount',
      value: function () {
        function componentWillUnmount() {
          if (this.channelUnsubscribe) {
            this.channelUnsubscribe();
          }
        }

        return componentWillUnmount;
      }()
    }, {
      key: 'render',
      value: function () {
        function render() {
          var direction = this.state.direction;

          return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, {
            direction: direction
          }));
        }

        return render;
      }()
    }]);

    return WithDirection;
  }(_react2['default'].Component);

  var wrappedComponentName = (0, _getComponentName2['default'])(WrappedComponent) || 'Component';

  WithDirection.WrappedComponent = WrappedComponent;
  WithDirection.contextTypes = contextTypes;
  WithDirection.displayName = 'withDirection(' + String(wrappedComponentName) + ')';
  if (WrappedComponent.propTypes) {
    WithDirection.propTypes = (0, _deepmerge2['default'])({}, WrappedComponent.propTypes);
    delete WithDirection.propTypes.direction;
  }
  if (WrappedComponent.defaultProps) {
    WithDirection.defaultProps = (0, _deepmerge2['default'])({}, WrappedComponent.defaultProps);
  }

  return (0, _hoistNonReactStatics2['default'])(WithDirection, WrappedComponent);
}

/***/ }),

/***/ "U8F3":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("t2zx");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "UyFj":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("NVR6");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "VCQ6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	return functionsHaveNames() && gOPD && !!gOPD(function () {}, 'name').configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;

/***/ }),

/***/ "ViJj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__("JzMa");
var define = __webpack_require__("VxKF");

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};

/***/ }),

/***/ "VlLp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__("rAXm");
var regexTester = __webpack_require__("JTVQ");
var isPrimitive = __webpack_require__("T9JR");

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\x85', '\u200B', '\uFFFE'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = ['\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003', '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028', '\u2029\uFEFF'].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function $trim(value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__("BXKc");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

/***/ }),

/***/ "VxKF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("ywQn");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function isFunction(fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) {
			// jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) {
		/* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function defineProperty(object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function defineProperties(object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

/***/ }),

/***/ "W9YU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("3t7p");

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propTypes = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3dLy"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("U8F3"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("IxO8"));

var _react = _interopRequireDefault(__webpack_require__("AQ6k"));

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _airbnbPropTypes = __webpack_require__("qe4R");

var _reactWithStyles = __webpack_require__("ooNQ");

var _SliderConstants = __webpack_require__("mwu8");

var _HandlePropTypes = _interopRequireWildcard(__webpack_require__("mfz7"));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });keys.push.apply(keys, symbols);
  }return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }return target;
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {}, _HandlePropTypes["default"], {
  'aria-valuetext': _propTypes["default"].string,
  'aria-label': _propTypes["default"].string
}));
exports.propTypes = propTypes;

var defaultProps = _objectSpread({}, _HandlePropTypes.handleDefaultProps, {
  'aria-valuetext': undefined,
  'aria-label': undefined
});

function DefaultHandle(_ref) {
  var css = _ref.css,
      styles = _ref.styles,
      orientation = _ref.orientation,
      disabled = _ref.disabled,
      handleRef = _ref.handleRef,
      theme = _ref.theme,
      style = _ref.style,
      passProps = (0, _objectWithoutProperties2["default"])(_ref, ["css", "styles", "orientation", "disabled", "handleRef", "theme", "style"]);
  return _react["default"].createElement("button", (0, _extends2["default"])({
    type: "button",
    ref: handleRef
  }, css(styles.DefaultHandle_handle, orientation === _SliderConstants.VERTICAL ? styles.DefaultHandle_handle__vertical : styles.DefaultHandle_handle__horizontal, disabled && styles.DefaultHandle_handle__disabled, style), passProps));
}

DefaultHandle.propTypes = propTypes;
DefaultHandle.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$rheostat = _ref2.rheostat,
      color = _ref2$rheostat.color,
      unit = _ref2$rheostat.unit,
      constants = _ref2$rheostat.constants;
  return {
    DefaultHandle_handle: {
      width: 2 * constants.DEFAULT_HANDLE_WIDTH * unit,
      height: 2 * constants.DEFAULT_HANDLE_WIDTH * unit,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: color.grey,
      backgroundColor: color.white,
      borderRadius: '20%',
      outline: 'none',
      zIndex: 2,
      boxShadow: "0 ".concat(unit / 4, "px ").concat(unit / 4, "px ").concat(color.textDisabled),
      ':focus': {
        boxShadow: "".concat(color.focus, " 0 0 1px 1px")
      },
      ':after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: '#dadfe8'
      },
      ':before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: '#dadfe8'
      }
    },
    DefaultHandle_handle__horizontal: {
      marginLeft: -12,
      top: -5,
      ':before': {
        top: 7,
        height: 10,
        width: 1,
        left: 10
      },
      ':after': {
        top: 7,
        height: 10,
        width: 1,
        left: 13
      }
    },
    DefaultHandle_handle__vertical: {
      marginTop: -constants.DEFAULT_HANDLE_WIDTH * unit,
      left: (constants.BACKGROUND_HEIGHT - constants.DEFAULT_HANDLE_WIDTH) * unit,
      ':before': {
        top: 10
      },
      ':after': {
        top: 13,
        left: 8,
        height: 1,
        width: 10
      }
    },
    DefaultHandle_handle__disabled: {
      borderColor: color.buttons.defaultDisabledColor
    }
  };
})(DefaultHandle);

exports["default"] = _default;

/***/ }),

/***/ "XYeV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("c8Vb");

module.exports = function getPolyfill() {
	return implementation;
};

/***/ }),

/***/ "XfJI":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("NVR6");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "Yahh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perfStart = perfStart;
exports.perfEnd = perfEnd;
exports["default"] = withPerf;

function perfStart(startMark) {
  if (typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function' && startMark) {
    performance.clearMarks(startMark);
    performance.mark(startMark);
  }
}

function perfEnd(startMark, endMark, measureName) {
  if (typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(endMark);
    performance.mark(endMark);
    performance.measure(measureName, startMark, endMark);
    performance.clearMarks(measureName);
  }
}

function withPerf(methodName) {
  var startMark = "react-with-styles.".concat(methodName, ".start");
  var endMark = "react-with-styles.".concat(methodName, ".end");
  var measureName = "\uD83D\uDC69\u200D\uD83C\uDFA8 [".concat(methodName, "]");
  return function (fn) {
    return function () {
      if (false) {
        perfStart(startMark);
      }

      var result = fn.apply(void 0, arguments);

      if (false) {
        perfEnd(startMark, endMark, measureName);
      }

      return result;
    };
  };
}

/***/ }),

/***/ "ZH9+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__("TD7O");

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) {
		// 0 === -0, but they are not identical.
		if (x === 0) {
			return 1 / x === 1 / y;
		}
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

/***/ }),

/***/ "aHsa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["Right"] = "to right";
    Direction["Left"] = "to left";
    Direction["Down"] = "to bottom";
    Direction["Up"] = "to top";
})(Direction = exports.Direction || (exports.Direction = {}));

/***/ }),

/***/ "ar57":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("58Ti");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

/***/ }),

/***/ "b4C7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) {
			return false;
		}
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) {
		return false;
	}
	if (typeof value !== 'function' && typeof value !== 'object') {
		return false;
	}
	if (typeof value === 'function' && !value.prototype) {
		return true;
	}
	if (hasToStringTag) {
		return tryFunctionObject(value);
	}
	if (isES6ClassFn(value)) {
		return false;
	}
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};

/***/ }),

/***/ "b9XL":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "c4Sn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Range_1 = __importDefault(__webpack_require__("f9YM"));
exports.Range = Range_1.default;
var utils_1 = __webpack_require__("9yP8");
exports.getTrackBackground = utils_1.getTrackBackground;
exports.useThumbOverlap = utils_1.useThumbOverlap;
exports.relativeValue = utils_1.relativeValue;
var types_1 = __webpack_require__("aHsa");
exports.Direction = types_1.Direction;

/***/ }),

/***/ "c8Vb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IsCallable = __webpack_require__("kdXM");
var functionsHaveNames = __webpack_require__("VCQ6")();
var callBound = __webpack_require__("rAXm");
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');

var classRegex = /^class /;

var isClass = function isClassConstructor(fn) {
	if (IsCallable(fn)) {
		return false;
	}
	if (typeof fn !== 'function') {
		return false;
	}
	try {
		var match = $stringMatch($functionToString(fn), classRegex);
		return !!match;
	} catch (e) {}
	return false;
};

var regex = /\s*function\s+([^(\s]*)\s*/;

var functionProto = Function.prototype;

module.exports = function getName() {
	if (!isClass(this) && !IsCallable(this)) {
		throw new TypeError('Function.prototype.name sham getter called on non-function');
	}
	if (functionsHaveNames) {
		return this.name;
	}
	if (this === functionProto) {
		return '';
	}
	var str = $functionToString(this);
	var match = $stringMatch(str, regex);
	var name = match && match[1];
	return name;
};

/***/ }),

/***/ "cYxp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__("O+3N"));

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ "d9qy":
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__("GMRz").custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double') {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return '[Object]';
    }

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object') {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var xs = arrObjKeys(obj, inspect);
        if (xs.length === 0) {
            return '{}';
        }
        return '{ ' + xs.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) {
    return toStr(obj) === '[object Array]';
}
function isDate(obj) {
    return toStr(obj) === '[object Date]';
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]';
}
function isError(obj) {
    return toStr(obj) === '[object Error]';
}
function isSymbol(obj) {
    return toStr(obj) === '[object Symbol]';
}
function isString(obj) {
    return toStr(obj) === '[object String]';
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]';
}
function isBigInt(obj) {
    return toStr(obj) === '[object BigInt]';
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]';
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = match.call(f, /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries) {
    return type + ' (' + size + ') {' + entries.join(', ') + '}';
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) {
        // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (/[^\w$]/.test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}

/***/ }),

/***/ "dFpr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = __webpack_require__("qut1");

var FromPropertyDescriptor = __webpack_require__("k6iA");
var OrdinaryGetOwnProperty = __webpack_require__("6HKI");
var IsDataDescriptor = __webpack_require__("Ragd");
var IsExtensible = __webpack_require__("qFre");
var IsPropertyKey = __webpack_require__("mmlB");
var SameValue = __webpack_require__("ZH9+");
var Type = __webpack_require__("QalR");

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = OrdinaryGetOwnProperty(O, P);
	var extensible = !oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc['[[Writable]]'] || !oldDesc['[[Configurable]]']);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Value]]': V,
		'[[Writable]]': true
	});
};

/***/ }),

/***/ "f9YM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
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
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__("AQ6k"));
var utils_1 = __webpack_require__("9yP8");
var types_1 = __webpack_require__("aHsa");
var INCREASE_KEYS = ['ArrowRight', 'ArrowUp', 'k', 'PageUp'];
var DECREASE_KEYS = ['ArrowLeft', 'ArrowDown', 'j', 'PageDown'];
var Range = /** @class */function (_super) {
    __extends(Range, _super);
    function Range(props) {
        var _this = _super.call(this, props) || this;
        _this.trackRef = React.createRef();
        _this.thumbRefs = [];
        _this.state = {
            draggedThumbIndex: -1,
            thumbZIndexes: new Array(_this.props.values.length).fill(0).map(function (t, i) {
                return i;
            }),
            isChanged: false
        };
        _this.getOffsets = function () {
            var _a = _this.props,
                direction = _a.direction,
                values = _a.values,
                min = _a.min,
                max = _a.max;
            var trackElement = _this.trackRef.current;
            var trackRect = trackElement.getBoundingClientRect();
            var trackPadding = utils_1.getPaddingAndBorder(trackElement);
            return _this.getThumbs().map(function (thumb, index) {
                var thumbOffsets = { x: 0, y: 0 };
                var thumbRect = thumb.getBoundingClientRect();
                var thumbMargins = utils_1.getMargin(thumb);
                switch (direction) {
                    case types_1.Direction.Right:
                        thumbOffsets.x = (thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y = ((thumbRect.height - trackRect.height) / 2 + trackPadding.top) * -1;
                        thumbOffsets.x += trackRect.width * utils_1.relativeValue(values[index], min, max) - thumbRect.width / 2;
                        return thumbOffsets;
                    case types_1.Direction.Left:
                        thumbOffsets.x = (thumbMargins.right + trackPadding.right) * -1;
                        thumbOffsets.y = ((thumbRect.height - trackRect.height) / 2 + trackPadding.top) * -1;
                        thumbOffsets.x += trackRect.width - trackRect.width * utils_1.relativeValue(values[index], min, max) - thumbRect.width / 2;
                        return thumbOffsets;
                    case types_1.Direction.Up:
                        thumbOffsets.x = ((thumbRect.width - trackRect.width) / 2 + thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y = -trackPadding.left;
                        thumbOffsets.y += trackRect.height - trackRect.height * utils_1.relativeValue(values[index], min, max) - thumbRect.height / 2;
                        return thumbOffsets;
                    case types_1.Direction.Down:
                        thumbOffsets.x = ((thumbRect.width - trackRect.width) / 2 + thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y = -trackPadding.left;
                        thumbOffsets.y += trackRect.height * utils_1.relativeValue(values[index], min, max) - thumbRect.height / 2;
                        return thumbOffsets;
                    default:
                        return utils_1.assertUnreachable(direction);
                }
            });
        };
        _this.getThumbs = function () {
            if (_this.trackRef && _this.trackRef.current) {
                return Array.from(_this.trackRef.current.children);
            }
            console.warn('No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?');
            return [];
        };
        _this.getTargetIndex = function (e) {
            return _this.getThumbs().findIndex(function (child) {
                return child === e.target || child.contains(e.target);
            });
        };
        _this.addTouchEvents = function (e) {
            document.addEventListener('touchmove', _this.schdOnTouchMove, {
                passive: false
            });
            document.addEventListener('touchend', _this.schdOnEnd, {
                passive: false
            });
            document.addEventListener('touchcancel', _this.schdOnEnd, {
                passive: false
            });
        };
        _this.addMouseEvents = function (e) {
            document.addEventListener('mousemove', _this.schdOnMouseMove);
            document.addEventListener('mouseup', _this.schdOnEnd);
        };
        _this.onMouseDownTrack = function (e) {
            var _a;
            // in case there is a single thumb, we want to support
            // moving the thumb to a place where the track is clicked
            if (e.button !== 0 || _this.props.values.length > 1) return;
            (_a = _this.thumbRefs[0].current) === null || _a === void 0 ? void 0 : _a.focus();
            e.persist();
            e.preventDefault();
            _this.addMouseEvents(e.nativeEvent);
            _this.setState({
                draggedThumbIndex: 0
            }, function () {
                return _this.onMove(e.clientX, e.clientY);
            });
        };
        _this.onResize = function () {
            utils_1.translateThumbs(_this.getThumbs(), _this.getOffsets(), _this.props.rtl);
        };
        _this.onTouchStartTrack = function (e) {
            // in case there is a single thumb, we want to support
            // moving the thumb to a place where the track is clicked
            if (_this.props.values.length > 1) return;
            e.persist();
            _this.addTouchEvents(e.nativeEvent);
            _this.setState({
                draggedThumbIndex: 0
            }, function () {
                return _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
            });
        };
        _this.onMouseOrTouchStart = function (e) {
            if (_this.props.disabled) return;
            var isTouch = utils_1.isTouchEvent(e);
            if (!isTouch && e.button !== 0) return;
            var index = _this.getTargetIndex(e);
            if (index === -1) return;
            if (isTouch) {
                _this.addTouchEvents(e);
            } else {
                _this.addMouseEvents(e);
            }
            _this.setState({
                draggedThumbIndex: index,
                thumbZIndexes: _this.state.thumbZIndexes.map(function (t, i) {
                    if (i === index) {
                        return Math.max.apply(Math, _this.state.thumbZIndexes);
                    }
                    return t <= _this.state.thumbZIndexes[index] ? t : t - 1;
                })
            });
        };
        _this.onMouseMove = function (e) {
            e.preventDefault();
            _this.onMove(e.clientX, e.clientY);
        };
        _this.onTouchMove = function (e) {
            e.preventDefault();
            _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
        };
        _this.onKeyDown = function (e) {
            var _a = _this.props,
                values = _a.values,
                onChange = _a.onChange,
                step = _a.step,
                rtl = _a.rtl;
            var isChanged = _this.state.isChanged;
            var index = _this.getTargetIndex(e.nativeEvent);
            var inverter = rtl ? -1 : 1;
            if (index === -1) return;
            if (INCREASE_KEYS.includes(e.key)) {
                e.preventDefault();
                _this.setState({
                    draggedThumbIndex: index,
                    isChanged: true
                });
                onChange(utils_1.replaceAt(values, index, _this.normalizeValue(values[index] + inverter * (e.key === 'PageUp' ? step * 10 : step), index)));
            } else if (DECREASE_KEYS.includes(e.key)) {
                e.preventDefault();
                _this.setState({
                    draggedThumbIndex: index,
                    isChanged: true
                });
                onChange(utils_1.replaceAt(values, index, _this.normalizeValue(values[index] - inverter * (e.key === 'PageDown' ? step * 10 : step), index)));
            } else if (e.key === 'Tab') {
                _this.setState({ draggedThumbIndex: -1 }, function () {
                    // If key pressed when thumb was moving, fire onFinalChange
                    if (isChanged) {
                        _this.fireOnFinalChange();
                    }
                });
            } else {
                if (isChanged) {
                    _this.fireOnFinalChange();
                }
            }
        };
        _this.onKeyUp = function (e) {
            var isChanged = _this.state.isChanged;
            _this.setState({
                draggedThumbIndex: -1
            }, function () {
                if (isChanged) {
                    _this.fireOnFinalChange();
                }
            });
        };
        _this.onMove = function (clientX, clientY) {
            var draggedThumbIndex = _this.state.draggedThumbIndex;
            var _a = _this.props,
                direction = _a.direction,
                min = _a.min,
                max = _a.max,
                onChange = _a.onChange,
                values = _a.values,
                step = _a.step,
                rtl = _a.rtl;
            if (draggedThumbIndex === -1) return null;
            var trackElement = _this.trackRef.current;
            var trackRect = trackElement.getBoundingClientRect();
            var trackLength = utils_1.isVertical(direction) ? trackRect.height : trackRect.width;
            var newValue = 0;
            switch (direction) {
                case types_1.Direction.Right:
                    newValue = (clientX - trackRect.left) / trackLength * (max - min) + min;
                    break;
                case types_1.Direction.Left:
                    newValue = (trackLength - (clientX - trackRect.left)) / trackLength * (max - min) + min;
                    break;
                case types_1.Direction.Down:
                    newValue = (clientY - trackRect.top) / trackLength * (max - min) + min;
                    break;
                case types_1.Direction.Up:
                    newValue = (trackLength - (clientY - trackRect.top)) / trackLength * (max - min) + min;
                    break;
                default:
                    utils_1.assertUnreachable(direction);
            }
            // invert for RTL
            if (rtl) {
                newValue = max + min - newValue;
            }
            if (Math.abs(values[draggedThumbIndex] - newValue) >= step) {
                onChange(utils_1.replaceAt(values, draggedThumbIndex, _this.normalizeValue(newValue, draggedThumbIndex)));
            }
        };
        _this.normalizeValue = function (value, index) {
            var _a = _this.props,
                min = _a.min,
                max = _a.max,
                step = _a.step,
                allowOverlap = _a.allowOverlap,
                values = _a.values;
            return utils_1.normalizeValue(value, index, min, max, step, allowOverlap, values);
        };
        _this.onEnd = function (e) {
            e.preventDefault();
            document.removeEventListener('mousemove', _this.schdOnMouseMove);
            document.removeEventListener('touchmove', _this.schdOnTouchMove);
            document.removeEventListener('mouseup', _this.schdOnEnd);
            document.removeEventListener('touchend', _this.schdOnEnd);
            document.removeEventListener('touchcancel', _this.schdOnEnd);
            if (_this.state.draggedThumbIndex === -1) return;
            _this.setState({ draggedThumbIndex: -1 }, function () {
                _this.fireOnFinalChange();
            });
        };
        _this.fireOnFinalChange = function () {
            _this.setState({ isChanged: false });
            var _a = _this.props,
                onFinalChange = _a.onFinalChange,
                values = _a.values;
            if (onFinalChange) {
                onFinalChange(values);
            }
        };
        _this.schdOnMouseMove = utils_1.schd(_this.onMouseMove);
        _this.schdOnTouchMove = utils_1.schd(_this.onTouchMove);
        _this.schdOnEnd = utils_1.schd(_this.onEnd);
        _this.schdOnResize = utils_1.schd(_this.onResize);
        _this.thumbRefs = props.values.map(function () {
            return React.createRef();
        });
        if (!utils_1.isStepDivisible(props.min, props.max, props.step)) {
            console.warn('The difference of `max` and `min` must be divisible by `step`');
        }
        return _this;
    }
    Range.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props,
            values = _a.values,
            min = _a.min,
            step = _a.step;
        // @ts-ignore
        this.resizeObserver = window.ResizeObserver ?
        // @ts-ignore
        new window.ResizeObserver(this.schdOnResize) : {
            observe: function observe() {
                return window.addEventListener('resize', _this.schdOnResize);
            },
            unobserve: function unobserve() {
                return window.removeEventListener('resize', _this.schdOnResize);
            }
        };
        document.addEventListener('touchstart', this.onMouseOrTouchStart, {
            passive: false
        });
        document.addEventListener('mousedown', this.onMouseOrTouchStart, {
            passive: false
        });
        !this.props.allowOverlap && utils_1.checkInitialOverlap(this.props.values);
        this.props.values.forEach(function (value) {
            return utils_1.checkBoundaries(value, _this.props.min, _this.props.max);
        });
        this.resizeObserver.observe(this.trackRef.current);
        utils_1.translateThumbs(this.getThumbs(), this.getOffsets(), this.props.rtl);
        values.forEach(function (value) {
            if (!utils_1.isStepDivisible(min, value, step)) {
                console.warn('The `values` property is in conflict with the current `step`, `min` and `max` properties. Please provide values that are accessible using the min, max an step values');
            }
        });
    };
    Range.prototype.componentDidUpdate = function (prevProps) {
        utils_1.translateThumbs(this.getThumbs(), this.getOffsets(), this.props.rtl);
    };
    Range.prototype.componentWillUnmount = function () {
        var options = {
            passive: false
        };
        document.removeEventListener('mousedown', this.onMouseOrTouchStart, options);
        document.removeEventListener('touchstart', this.onMouseOrTouchStart);
        document.removeEventListener('touchend', this.schdOnEnd);
        this.resizeObserver.unobserve(this.trackRef.current);
    };
    Range.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            renderTrack = _a.renderTrack,
            renderThumb = _a.renderThumb,
            values = _a.values,
            min = _a.min,
            max = _a.max,
            allowOverlap = _a.allowOverlap,
            disabled = _a.disabled;
        var _b = this.state,
            draggedThumbIndex = _b.draggedThumbIndex,
            thumbZIndexes = _b.thumbZIndexes;
        return renderTrack({
            props: {
                style: {
                    // creates stacking context that prevents z-index applied to thumbs
                    // interfere with other elements
                    transform: 'scale(1)',
                    cursor: draggedThumbIndex > -1 ? 'grabbing' : values.length === 1 && !disabled ? 'pointer' : 'inherit'
                },
                onMouseDown: disabled ? utils_1.voidFn : this.onMouseDownTrack,
                onTouchStart: disabled ? utils_1.voidFn : this.onTouchStartTrack,
                ref: this.trackRef
            },
            isDragged: this.state.draggedThumbIndex > -1,
            disabled: disabled,
            children: values.map(function (value, index) {
                var isDragged = _this.state.draggedThumbIndex === index;
                return renderThumb({
                    index: index,
                    value: value,
                    isDragged: isDragged,
                    props: {
                        style: {
                            position: 'absolute',
                            zIndex: thumbZIndexes[index],
                            cursor: disabled ? 'inherit' : isDragged ? 'grabbing' : 'grab',
                            userSelect: 'none',
                            touchAction: 'none',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none'
                        },
                        key: index,
                        tabIndex: disabled ? undefined : 0,
                        'aria-valuemax': allowOverlap ? max : values[index + 1] || max,
                        'aria-valuemin': allowOverlap ? min : values[index - 1] || min,
                        'aria-valuenow': value,
                        draggable: false,
                        ref: _this.thumbRefs[index],
                        role: 'slider',
                        onKeyDown: disabled ? utils_1.voidFn : _this.onKeyDown,
                        onKeyUp: disabled ? utils_1.voidFn : _this.onKeyUp
                    }
                });
            })
        });
    };
    Range.defaultProps = {
        step: 1,
        direction: types_1.Direction.Right,
        rtl: false,
        disabled: false,
        allowOverlap: false,
        min: 0,
        max: 100
    };
    return Range;
}(React.Component);
exports.default = Range;

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

/***/ "fy20":
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "hjQ1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * basic-auth
 * Copyright(c) 2013 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Buffer = __webpack_require__("38Wu").Buffer;

/**
 * Module exports.
 * @public
 */

module.exports = auth;
module.exports.parse = parse;

/**
 * RegExp for basic auth credentials
 *
 * credentials = auth-scheme 1*SP token68
 * auth-scheme = "Basic" ; case insensitive
 * token68     = 1*( ALPHA / DIGIT / "-" / "." / "_" / "~" / "+" / "/" ) *"="
 * @private
 */

var CREDENTIALS_REGEXP = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/;

/**
 * RegExp for basic auth user/pass
 *
 * user-pass   = userid ":" password
 * userid      = *<TEXT excluding ":">
 * password    = *TEXT
 * @private
 */

var USER_PASS_REGEXP = /^([^:]*):(.*)$/;

/**
 * Parse the Authorization header field of a request.
 *
 * @param {object} req
 * @return {object} with .name and .pass
 * @public
 */

function auth(req) {
  if (!req) {
    throw new TypeError('argument req is required');
  }

  if (typeof req !== 'object') {
    throw new TypeError('argument req is required to be an object');
  }

  // get header
  var header = getAuthorization(req);

  // parse header
  return parse(header);
}

/**
 * Decode base64 string.
 * @private
 */

function decodeBase64(str) {
  return Buffer.from(str, 'base64').toString();
}

/**
 * Get the Authorization header from request object.
 * @private
 */

function getAuthorization(req) {
  if (!req.headers || typeof req.headers !== 'object') {
    throw new TypeError('argument req is required to have headers property');
  }

  return req.headers.authorization;
}

/**
 * Parse basic auth to object.
 *
 * @param {string} string
 * @return {object}
 * @public
 */

function parse(string) {
  if (typeof string !== 'string') {
    return undefined;
  }

  // parse header
  var match = CREDENTIALS_REGEXP.exec(string);

  if (!match) {
    return undefined;
  }

  // decode user pass
  var userPass = USER_PASS_REGEXP.exec(decodeBase64(match[1]));

  if (!userPass) {
    return undefined;
  }

  // return credentials object
  return new Credentials(userPass[1], userPass[2]);
}

/**
 * Object to represent user credentials.
 * @private
 */

function Credentials(name, pass) {
  this.name = name;
  this.pass = pass;
}

/***/ }),

/***/ "jBCb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf1bbc7267d3a029cfb34de0b195769b.png";

/***/ }),

/***/ "jFZi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__("rAXm")('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

/***/ }),

/***/ "jYt2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
		return false;
	}
	if (typeof Symbol.iterator === 'symbol') {
		return true;
	}

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') {
		return false;
	}

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
		return false;
	}
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
		return false;
	}

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) {
		return false;
	} // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
		return false;
	}

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
		return false;
	}

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) {
		return false;
	}

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
		return false;
	}

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) {
			return false;
		}
	}

	return true;
};

/***/ }),

/***/ "jcLW":
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("y5CM");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),

/***/ "jlWA":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * depd
 * Copyright(c) 2014-2018 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var relative = __webpack_require__("1v4d").relative;

/**
 * Module exports.
 */

module.exports = depd;

/**
 * Get the path to base files on.
 */

var basePath = process.cwd();

/**
 * Determine if namespace is contained in the string.
 */

function containsNamespace(str, namespace) {
  var vals = str.split(/[ ,]+/);
  var ns = String(namespace).toLowerCase();

  for (var i = 0; i < vals.length; i++) {
    var val = vals[i];

    // namespace contained
    if (val && (val === '*' || val.toLowerCase() === ns)) {
      return true;
    }
  }

  return false;
}

/**
 * Convert a data descriptor to accessor descriptor.
 */

function convertDataDescriptorToAccessor(obj, prop, message) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  var value = descriptor.value;

  descriptor.get = function getter() {
    return value;
  };

  if (descriptor.writable) {
    descriptor.set = function setter(val) {
      return value = val;
    };
  }

  delete descriptor.value;
  delete descriptor.writable;

  Object.defineProperty(obj, prop, descriptor);

  return descriptor;
}

/**
 * Create arguments string to keep arity.
 */

function createArgumentsString(arity) {
  var str = '';

  for (var i = 0; i < arity; i++) {
    str += ', arg' + i;
  }

  return str.substr(2);
}

/**
 * Create stack string from stack.
 */

function createStackString(stack) {
  var str = this.name + ': ' + this.namespace;

  if (this.message) {
    str += ' deprecated ' + this.message;
  }

  for (var i = 0; i < stack.length; i++) {
    str += '\n    at ' + stack[i].toString();
  }

  return str;
}

/**
 * Create deprecate for namespace in caller.
 */

function depd(namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required');
  }

  var stack = getStack();
  var site = callSiteLocation(stack[1]);
  var file = site[0];

  function deprecate(message) {
    // call to self as log
    log.call(deprecate, message);
  }

  deprecate._file = file;
  deprecate._ignored = isignored(namespace);
  deprecate._namespace = namespace;
  deprecate._traced = istraced(namespace);
  deprecate._warned = Object.create(null);

  deprecate.function = wrapfunction;
  deprecate.property = wrapproperty;

  return deprecate;
}

/**
 * Determine if event emitter has listeners of a given type.
 *
 * The way to do this check is done three different ways in Node.js >= 0.8
 * so this consolidates them into a minimal set using instance methods.
 *
 * @param {EventEmitter} emitter
 * @param {string} type
 * @returns {boolean}
 * @private
 */

function eehaslisteners(emitter, type) {
  var count = typeof emitter.listenerCount !== 'function' ? emitter.listeners(type).length : emitter.listenerCount(type);

  return count > 0;
}

/**
 * Determine if namespace is ignored.
 */

function isignored(namespace) {
  if (process.noDeprecation) {
    // --no-deprecation support
    return true;
  }

  var str = process.env.NO_DEPRECATION || '';

  // namespace ignored
  return containsNamespace(str, namespace);
}

/**
 * Determine if namespace is traced.
 */

function istraced(namespace) {
  if (process.traceDeprecation) {
    // --trace-deprecation support
    return true;
  }

  var str = process.env.TRACE_DEPRECATION || '';

  // namespace traced
  return containsNamespace(str, namespace);
}

/**
 * Display deprecation message.
 */

function log(message, site) {
  var haslisteners = eehaslisteners(process, 'deprecation');

  // abort early if no destination
  if (!haslisteners && this._ignored) {
    return;
  }

  var caller;
  var callFile;
  var callSite;
  var depSite;
  var i = 0;
  var seen = false;
  var stack = getStack();
  var file = this._file;

  if (site) {
    // provided site
    depSite = site;
    callSite = callSiteLocation(stack[1]);
    callSite.name = depSite.name;
    file = callSite[0];
  } else {
    // get call site
    i = 2;
    depSite = callSiteLocation(stack[i]);
    callSite = depSite;
  }

  // get caller of deprecated thing in relation to file
  for (; i < stack.length; i++) {
    caller = callSiteLocation(stack[i]);
    callFile = caller[0];

    if (callFile === file) {
      seen = true;
    } else if (callFile === this._file) {
      file = this._file;
    } else if (seen) {
      break;
    }
  }

  var key = caller ? depSite.join(':') + '__' + caller.join(':') : undefined;

  if (key !== undefined && key in this._warned) {
    // already warned
    return;
  }

  this._warned[key] = true;

  // generate automatic message from call site
  var msg = message;
  if (!msg) {
    msg = callSite === depSite || !callSite.name ? defaultMessage(depSite) : defaultMessage(callSite);
  }

  // emit deprecation if listeners exist
  if (haslisteners) {
    var err = DeprecationError(this._namespace, msg, stack.slice(i));
    process.emit('deprecation', err);
    return;
  }

  // format and write message
  var format = process.stderr.isTTY ? formatColor : formatPlain;
  var output = format.call(this, msg, caller, stack.slice(i));
  process.stderr.write(output + '\n', 'utf8');
}

/**
 * Get call site location as array.
 */

function callSiteLocation(callSite) {
  var file = callSite.getFileName() || '<anonymous>';
  var line = callSite.getLineNumber();
  var colm = callSite.getColumnNumber();

  if (callSite.isEval()) {
    file = callSite.getEvalOrigin() + ', ' + file;
  }

  var site = [file, line, colm];

  site.callSite = callSite;
  site.name = callSite.getFunctionName();

  return site;
}

/**
 * Generate a default message from the site.
 */

function defaultMessage(site) {
  var callSite = site.callSite;
  var funcName = site.name;

  // make useful anonymous name
  if (!funcName) {
    funcName = '<anonymous@' + formatLocation(site) + '>';
  }

  var context = callSite.getThis();
  var typeName = context && callSite.getTypeName();

  // ignore useless type name
  if (typeName === 'Object') {
    typeName = undefined;
  }

  // make useful type name
  if (typeName === 'Function') {
    typeName = context.name || typeName;
  }

  return typeName && callSite.getMethodName() ? typeName + '.' + funcName : funcName;
}

/**
 * Format deprecation message without color.
 */

function formatPlain(msg, caller, stack) {
  var timestamp = new Date().toUTCString();

  var formatted = timestamp + ' ' + this._namespace + ' deprecated ' + msg;

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    at ' + stack[i].toString();
    }

    return formatted;
  }

  if (caller) {
    formatted += ' at ' + formatLocation(caller);
  }

  return formatted;
}

/**
 * Format deprecation message with color.
 */

function formatColor(msg, caller, stack) {
  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
  ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
  ' \x1b[0m' + msg + '\x1b[39m'; // reset

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    \x1b[36mat ' + stack[i].toString() + '\x1b[39m'; // cyan
    }

    return formatted;
  }

  if (caller) {
    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m'; // cyan
  }

  return formatted;
}

/**
 * Format call site location.
 */

function formatLocation(callSite) {
  return relative(basePath, callSite[0]) + ':' + callSite[1] + ':' + callSite[2];
}

/**
 * Get the stack as array of call sites.
 */

function getStack() {
  var limit = Error.stackTraceLimit;
  var obj = {};
  var prep = Error.prepareStackTrace;

  Error.prepareStackTrace = prepareObjectStackTrace;
  Error.stackTraceLimit = Math.max(10, limit);

  // capture the stack
  Error.captureStackTrace(obj);

  // slice this function off the top
  var stack = obj.stack.slice(1);

  Error.prepareStackTrace = prep;
  Error.stackTraceLimit = limit;

  return stack;
}

/**
 * Capture call site stack from v8.
 */

function prepareObjectStackTrace(obj, stack) {
  return stack;
}

/**
 * Return a wrapped function in a deprecation message.
 */

function wrapfunction(fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function');
  }

  var args = createArgumentsString(fn.length);
  var stack = getStack();
  var site = callSiteLocation(stack[1]);

  site.name = fn.name;

  // eslint-disable-next-line no-new-func
  var deprecatedfn = new Function('fn', 'log', 'deprecate', 'message', 'site', '"use strict"\n' + 'return function (' + args + ') {' + 'log.call(deprecate, message, site)\n' + 'return fn.apply(this, arguments)\n' + '}')(fn, log, this, message, site);

  return deprecatedfn;
}

/**
 * Wrap property in a deprecation message.
 */

function wrapproperty(obj, prop, message) {
  if (!obj || typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('argument obj must be object');
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

  if (!descriptor) {
    throw new TypeError('must call property on owner object');
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable');
  }

  var deprecate = this;
  var stack = getStack();
  var site = callSiteLocation(stack[1]);

  // set site name
  site.name = prop;

  // convert data descriptor
  if ('value' in descriptor) {
    descriptor = convertDataDescriptorToAccessor(obj, prop, message);
  }

  var get = descriptor.get;
  var set = descriptor.set;

  // wrap getter
  if (typeof get === 'function') {
    descriptor.get = function getter() {
      log.call(deprecate, message, site);
      return get.apply(this, arguments);
    };
  }

  // wrap setter
  if (typeof set === 'function') {
    descriptor.set = function setter() {
      log.call(deprecate, message, site);
      return set.apply(this, arguments);
    };
  }

  Object.defineProperty(obj, prop, descriptor);
}

/**
 * Create DeprecationError for deprecation
 */

function DeprecationError(namespace, message, stack) {
  var error = new Error();
  var stackString;

  Object.defineProperty(error, 'constructor', {
    value: DeprecationError
  });

  Object.defineProperty(error, 'message', {
    configurable: true,
    enumerable: false,
    value: message,
    writable: true
  });

  Object.defineProperty(error, 'name', {
    enumerable: false,
    configurable: true,
    value: 'DeprecationError',
    writable: true
  });

  Object.defineProperty(error, 'namespace', {
    configurable: true,
    enumerable: false,
    value: namespace,
    writable: true
  });

  Object.defineProperty(error, 'stack', {
    configurable: true,
    enumerable: false,
    get: function get() {
      if (stackString !== undefined) {
        return stackString;
      }

      // prepare stack trace
      return stackString = createStackString.call(this, stack);
    },
    set: function setter(val) {
      stackString = val;
    }
  });

  return error;
}

/***/ }),

/***/ "js02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__("NS5K")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}

/***/ }),

/***/ "jwNV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = exports.CHANNEL = '__direction__';

var DIRECTIONS = exports.DIRECTIONS = {
  LTR: 'ltr',
  RTL: 'rtl'
};

/***/ }),

/***/ "k6iA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assertRecord = __webpack_require__("mBar");

var Type = __webpack_require__("QalR");

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};

/***/ }),

/***/ "kCgB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kdXM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__("b4C7");

/***/ }),

/***/ "lJl4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) {
  return a !== a;
};

module.exports = Number.isFinite || function (x) {
  return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity;
};

/***/ }),

/***/ "lPvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _SliderConstants = __webpack_require__("mwu8");

var _default = _propTypes["default"].oneOf([_SliderConstants.HORIZONTAL, _SliderConstants.VERTICAL]);

exports["default"] = _default;

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

/***/ "m7np":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("VxKF");
var getPolyfill = __webpack_require__("KHO6");

module.exports = function shimFlat() {
	var polyfill = getPolyfill();
	define(Array.prototype, { flat: polyfill }, { flat: function flat() {
			return Array.prototype.flat !== polyfill;
		} });
	return polyfill;
};

/***/ }),

/***/ "mBar":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__("ar57");

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) {
			// eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};

/***/ }),

/***/ "mfz7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDefaultProps = exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _default = {
  'aria-valuemax': _propTypes["default"].number,
  'aria-valuemin': _propTypes["default"].number,
  'aria-valuenow': _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  'aria-disabled': _propTypes["default"].bool,
  'data-handle-key': _propTypes["default"].node,
  orientation: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onTouchStart: _propTypes["default"].func,
  handleRef: _propTypes["default"].func,
  role: _propTypes["default"].string,
  style: _propTypes["default"].object,
  tabIndex: _propTypes["default"].oneOf([-1, 0])
};
exports["default"] = _default;
var handleDefaultProps = {
  handleRef: null,
  orientation: 'horizontal',
  disabled: false,
  'aria-valuenow': undefined,
  'data-handle-key': undefined,
  'aria-valuemax': undefined,
  'aria-valuemin': undefined,
  'aria-disabled': undefined,
  onClick: undefined,
  onKeyDown: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
  role: undefined,
  tabIndex: undefined
};
exports.handleDefaultProps = handleDefaultProps;

/***/ }),

/***/ "mhfJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};

/***/ }),

/***/ "mmlB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

/***/ }),

/***/ "mnG2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || typeof value !== 'function' && typeof value !== 'object';
};

/***/ }),

/***/ "muFB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = __webpack_require__("dFpr");
var IsPropertyKey = __webpack_require__("mmlB");
var Type = __webpack_require__("QalR");

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};

/***/ }),

/***/ "mwu8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERTICAL = exports.HORIZONTAL = exports.PERCENT_FULL = exports.PERCENT_EMPTY = exports.KEYS = void 0;
var KEYS = {
  DOWN: 40,
  END: 35,
  ESC: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  RIGHT: 39,
  UP: 38
};
exports.KEYS = KEYS;
var PERCENT_EMPTY = 0;
exports.PERCENT_EMPTY = PERCENT_EMPTY;
var PERCENT_FULL = 100;
exports.PERCENT_FULL = PERCENT_FULL;
var HORIZONTAL = 'horizontal';
exports.HORIZONTAL = HORIZONTAL;
var VERTICAL = 'vertical';
exports.VERTICAL = VERTICAL;

/***/ }),

/***/ "nBsr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Math = GetIntrinsic('%Math%');

var ToNumber = __webpack_require__("xdEm");
var $isNaN = __webpack_require__("TD7O");
var $isFinite = __webpack_require__("lJl4");
var $sign = __webpack_require__("mhfJ");

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) {
		return 0;
	}
	if (number === 0 || !$isFinite(number)) {
		return number;
	}
	return $sign(number) * $floor($abs(number));
};

/***/ }),

/***/ "nr3L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("IxO8"));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });keys.push.apply(keys, symbols);
  }return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }return target;
}

var core = {
  black: 'black',
  white: '#fcfcfc',
  grey: '#d8d8d8',
  teal: '#abc4e8',
  lightgrey: '#dbdbdb'
};
var DefaultTheme = {
  rheostat: {
    unit: 8,
    responsive: {
      mediumAndAbove: '@media (min-width: 744px)',
      largeAndAbove: '@media (min-width: 1128px)'
    },
    constants: {
      DEFAULT_HANDLE_WIDTH: 1.5,
      BACKGROUND_HEIGHT: 0.25
    },
    color: _objectSpread({}, core, {
      progressBar: core.teal,
      focus: core.teal,
      textDisabled: core.lightgrey,
      buttons: {
        defaultDisabledColor: core.lightgrey
      }
    })
  }
};
var _default = DefaultTheme;
exports["default"] = _default;

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

/***/ "ooNQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("3t7p");

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStyles = withStyles;
Object.defineProperty(exports, "withStylesPropTypes", {
  enumerable: true,
  get: function get() {
    return _withStylesPropTypes.withStylesPropTypes;
  }
});
exports.css = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3dLy"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("IxO8"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("HOM9"));

var _react = _interopRequireDefault(__webpack_require__("AQ6k"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("89El"));

var _getComponentName = _interopRequireDefault(__webpack_require__("zYaU"));

var _emptyStylesFn = _interopRequireDefault(__webpack_require__("LVeT"));

var _perf = _interopRequireDefault(__webpack_require__("Yahh"));

var _WithStylesContext = _interopRequireWildcard(__webpack_require__("0Bbh"));

var _ThemedStyleSheet = _interopRequireWildcard(__webpack_require__("QMjl"));

var _withStylesPropTypes = __webpack_require__("9aBk");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });keys.push.apply(keys, symbols);
  }return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }return target;
}

/**
 * A higher order function that returns a higher order class component that injects
 * CSS-in-JS props derived from the react-with-styles theme, interface, and
 * direction provided through the WithStylesContext provider.
 *
 * The function should be used as follows:
 * `withStyles((theme) => styles, options)(Component)`
 *
 * Options can be used to rename the injected props, memoize the component, and flush
 * the styles to the styles tag (or whatever the interface implements as flush) before
 * rendering.
 *
 * @export
 * @param {Function|null|undefined} [stylesFn=EMPTY_STYLES_FN]
 * @param {Object} [{
 *     stylesPropName = 'styles',
 *     themePropName = 'theme',
 *     cssPropName = 'css',
 *     flushBefore = false,
 *     pureComponent = false,
 *   }={}]
 * @returns a higher order component that wraps the provided component and injects
 * the react-with-styles css, styles, and theme props.
 */
function withStyles() {
  var stylesFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emptyStylesFn["default"];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stylesPropName = _ref.stylesPropName,
      stylesPropName = _ref$stylesPropName === void 0 ? 'styles' : _ref$stylesPropName,
      _ref$themePropName = _ref.themePropName,
      themePropName = _ref$themePropName === void 0 ? 'theme' : _ref$themePropName,
      _ref$cssPropName = _ref.cssPropName,
      cssPropName = _ref$cssPropName === void 0 ? 'css' : _ref$cssPropName,
      _ref$flushBefore = _ref.flushBefore,
      flushBefore = _ref$flushBefore === void 0 ? false : _ref$flushBefore,
      _ref$pureComponent = _ref.pureComponent,
      pureComponent = _ref$pureComponent === void 0 ? false : _ref$pureComponent;

  stylesFn = stylesFn || _emptyStylesFn["default"];
  var BaseClass = pureComponent ? _react["default"].PureComponent : _react["default"].Component;
  /** Cache for storing the result of stylesFn(theme) for all themes. */

  var stylesFnResultCacheMap = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();

  function getOrCreateStylesFnResultCache(theme) {
    // Get and store the result in the stylesFnResultsCache for the component
    // -- not the instance -- so we only apply the theme to the stylesFn
    // once per theme for this component.
    var cachedResultForTheme = stylesFnResultCacheMap.get(theme);
    var stylesFnResult = cachedResultForTheme || stylesFn(theme) || {};
    stylesFnResultCacheMap.set(theme, stylesFnResult); // cache the result of stylesFn(theme)

    return stylesFnResult;
  }
  /**
   * Cache for storing the results of computations:
   * `WeakMap<Theme, WeakMap<typeof WithStyles, { ltr: {}, rtl: {} }>>`
   * Falling back to `Map` whenever `WeakMap` is not supported
   */

  var withStylesCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();

  function getComponentCache(theme, component, direction) {
    var themeCache = withStylesCache.get(theme);

    if (!themeCache) {
      return null;
    }

    var componentCache = themeCache.get(component);

    if (!componentCache) {
      return null;
    }

    return componentCache[direction];
  }

  function updateComponentCache(theme, component, direction, results) {
    var themeCache = withStylesCache.get(theme);

    if (!themeCache) {
      themeCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();
      withStylesCache.set(theme, themeCache);
    }

    var componentCache = themeCache.get(component);

    if (!componentCache) {
      componentCache = {
        ltr: {},
        rtl: {}
      };
      themeCache.set(component, componentCache);
    }

    componentCache[direction] = results;
  }
  /** Derive the create function from the interface and direction */

  function makeCreateFn(direction, stylesInterface) {
    var directionSelector = direction === _WithStylesContext.DIRECTIONS.RTL ? 'RTL' : 'LTR';
    var create = stylesInterface["create".concat(directionSelector)] || stylesInterface.create;

    if (false) {
      create = (0, _perf["default"])('create')(create);
    }

    return create;
  }
  /** Derive the resolve function from the interface and direction */

  function makeResolveFn(direction, stylesInterface) {
    var directionSelector = direction === _WithStylesContext.DIRECTIONS.RTL ? 'RTL' : 'LTR';
    var resolve = stylesInterface["resolve".concat(directionSelector)] || stylesInterface.resolve;

    if (false) {
      resolve = (0, _perf["default"])('resolve')(resolve);
    }

    return resolve;
  } // The function that wraps the provided component in a wrapper
  // component that injects the withStyles props


  return function withStylesHOC(WrappedComponent) {
    var wrappedComponentName = (0, _getComponentName["default"])(WrappedComponent); // The wrapper component that injects the withStyles props

    var WithStyles =
    /*#__PURE__*/
    function (_BaseClass) {
      (0, _inheritsLoose2["default"])(WithStyles, _BaseClass);

      function WithStyles() {
        return _BaseClass.apply(this, arguments) || this;
      }

      var _proto = WithStyles.prototype;

      _proto.getCurrentInterface = function getCurrentInterface() {
        // Fallback to the singleton implementation
        return this.context && this.context.stylesInterface || (0, _ThemedStyleSheet._getInterface)();
      };

      _proto.getCurrentTheme = function getCurrentTheme() {
        // Fallback to the singleton implementation
        return this.context && this.context.stylesTheme || (0, _ThemedStyleSheet._getTheme)();
      };

      _proto.getCurrentDirection = function getCurrentDirection() {
        return this.context && this.context.direction || _WithStylesContext.DIRECTIONS.LTR;
      };

      _proto.getProps = function getProps() {
        // Get the styles interface, theme, and direction from context
        var stylesInterface = this.getCurrentInterface();
        var theme = this.getCurrentTheme();
        var direction = this.getCurrentDirection(); // Use a cache to store the interface methods and created styles by direction.
        // This way, if the theme and the interface don't change, we do not recalculate
        // styles or any other interface derivations. They are effectively only calculated
        // once per direction, until the theme or interface change.
        // Assume: always an object.

        var componentCache = getComponentCache(theme, WithStyles, direction); // Determine what's changed

        var interfaceChanged = !componentCache || !componentCache.stylesInterface || stylesInterface && componentCache.stylesInterface !== stylesInterface;
        var themeChanged = !componentCache || componentCache.theme !== theme; // If the interface and theme haven't changed for this direction,
        // we return the cached props immediately.

        if (!interfaceChanged && !themeChanged) {
          return componentCache.props;
        } // If the theme or the interface changed, then there are some values
        // we need to recalculate. We avoid recalculating the ones we already
        // calculated in the past if the objects they're derived from have not
        // changed.


        var create = interfaceChanged && makeCreateFn(direction, stylesInterface) || componentCache.create;
        var resolve = interfaceChanged && makeResolveFn(direction, stylesInterface) || componentCache.resolve; // Derive the css function prop

        var css = interfaceChanged && function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return resolve(args);
        } || componentCache.props.css; // Get or calculate the themed styles from the stylesFn:
        // Uses a separate cache at the component level, not at the instance level,
        // to only apply the theme to the stylesFn once per component class per theme.


        var stylesFnResult = getOrCreateStylesFnResultCache(theme); // Derive the styles prop: recalculate it if create changed, or stylesFnResult changed

        var styles = (interfaceChanged || stylesFnResult !== componentCache.stylesFnResult) && create(stylesFnResult) || componentCache.props.styles; // Put the new props together

        var props = {
          css: css,
          styles: styles,
          theme: theme
        }; // Update the cache with all the new values

        updateComponentCache(theme, WithStyles, direction, {
          stylesInterface: stylesInterface,
          theme: theme,
          create: create,
          resolve: resolve,
          stylesFnResult: stylesFnResult,
          props: props
        });
        return props;
      };

      _proto.flush = function flush() {
        var stylesInterface = this.getCurrentInterface();

        if (stylesInterface && stylesInterface.flush) {
          stylesInterface.flush();
        }
      };

      _proto.render = function render() {
        var _ref2;

        // We only want to re-render if the theme, stylesInterface, or direction change.
        // These values are in context so we're listening for their updates.
        // this.getProps() derives the props from the theme, stylesInterface, and direction in
        // context, and memoizes them on the instance per direction.
        var _this$getProps = this.getProps(),
            theme = _this$getProps.theme,
            styles = _this$getProps.styles,
            css = _this$getProps.css; // Flush if specified


        if (flushBefore) {
          this.flush();
        }

        return _react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, this.props, (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, themePropName, theme), (0, _defineProperty2["default"])(_ref2, stylesPropName, styles), (0, _defineProperty2["default"])(_ref2, cssPropName, css), _ref2)));
      };

      return WithStyles;
    }(BaseClass); // Copy the wrapped component's prop types and default props on WithStyles


    if (WrappedComponent.propTypes) {
      WithStyles.propTypes = _objectSpread({}, WrappedComponent.propTypes);
      delete WithStyles.propTypes[stylesPropName];
      delete WithStyles.propTypes[themePropName];
      delete WithStyles.propTypes[cssPropName];
    }

    if (WrappedComponent.defaultProps) {
      WithStyles.defaultProps = _objectSpread({}, WrappedComponent.defaultProps);
    }

    WithStyles.contextType = _WithStylesContext["default"];
    WithStyles.WrappedComponent = WrappedComponent;
    WithStyles.displayName = "withStyles(".concat(wrappedComponentName, ")");
    return (0, _hoistNonReactStatics["default"])(WithStyles, WrappedComponent);
  };
}

var _default = withStyles;
/**
 * Deprecated: Do not use directly. Please wrap your component in `withStyles` and use the `css`
 * prop injected via props instead.
 */

exports["default"] = _default;
var css = _ThemedStyleSheet["default"].resolveLTR;
exports.css = css;

/***/ }),

/***/ "orz+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__("uTT0"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = function () {
		/* global window */
		if (typeof window === 'undefined') {
			return false;
		}
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}();
	var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;

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

/***/ "pbtM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__("d9qy");

var IsCallable = __webpack_require__("kdXM");

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
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

/***/ "qFre":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $Object = GetIntrinsic('%Object%');

var isPrimitive = __webpack_require__("T9JR");

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions ? function IsExtensible(obj) {
	return !isPrimitive(obj) && $isExtensible(obj);
} : function IsExtensible(obj) {
	return !isPrimitive(obj);
};

/***/ }),

/***/ "qe4R":
/***/ (function(module, exports, __webpack_require__) {

module.exports =  true ? __webpack_require__("5gcX") : require('./build');

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "qqQ8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = first;

/**
 * Get the first event in a set of event emitters and event pairs.
 *
 * @param {array} stuff
 * @param {function} done
 * @public
 */

function first(stuff, done) {
  if (!Array.isArray(stuff)) throw new TypeError('arg must be an array of [ee, events...] arrays');

  var cleanups = [];

  for (var i = 0; i < stuff.length; i++) {
    var arr = stuff[i];

    if (!Array.isArray(arr) || arr.length < 2) throw new TypeError('each array member must be [ee, events...]');

    var ee = arr[0];

    for (var j = 1; j < arr.length; j++) {
      var event = arr[j];
      var fn = listener(event, callback);

      // listen to the event
      ee.on(event, fn);
      // push this listener to the list of cleanups
      cleanups.push({
        ee: ee,
        event: event,
        fn: fn
      });
    }
  }

  function callback() {
    cleanup();
    done.apply(null, arguments);
  }

  function cleanup() {
    var x;
    for (var i = 0; i < cleanups.length; i++) {
      x = cleanups[i];
      x.ee.removeListener(x.event, x.fn);
    }
  }

  function thunk(fn) {
    done = fn;
  }

  thunk.cancel = cleanup;

  return thunk;
}

/**
 * Create the event listener.
 * @private
 */

function listener(event, done) {
  return function onevent(arg1) {
    var args = new Array(arguments.length);
    var ee = this;
    var err = event === 'error' ? arg1 : null;

    // copy args to prevent arguments escaping scope
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    done(err, ee, event, args);
  };
}

/***/ }),

/***/ "qrOU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__("VxKF").supportsDescriptors;
var functionsHaveNames = __webpack_require__("VCQ6")();
var getPolyfill = __webpack_require__("XYeV");
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;

module.exports = function shimName() {
	var polyfill = getPolyfill();
	if (functionsHaveNames) {
		return polyfill;
	}
	if (!supportsDescriptors) {
		throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
	}
	var functionProto = Function.prototype;
	defineProperty(functionProto, 'name', {
		configurable: true,
		enumerable: false,
		get: function get() {
			var name = polyfill.call(this);
			if (this !== functionProto) {
				defineProperty(this, 'name', {
					configurable: true,
					enumerable: false,
					value: name,
					writable: false
				});
			}
			return name;
		}
	});
	return polyfill;
};

/***/ }),

/***/ "qut1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

var callBound = __webpack_require__("rAXm");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};

/***/ }),

/***/ "rAXm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("LENn");

var callBind = __webpack_require__("I+tp");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

/***/ }),

/***/ "sfkP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9466613068da42d12b02eda3755b75e7.png";

/***/ }),

/***/ "t2zx":
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "tREi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = _propTypes2['default'].shape({
  getState: _propTypes2['default'].func,
  setState: _propTypes2['default'].func,
  subscribe: _propTypes2['default'].func
});

/***/ }),

/***/ "uTT0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

/***/ }),

/***/ "vHs2":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "wF/n":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

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

/***/ "x1VU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = __webpack_require__("Jlaz");

var _object2 = _interopRequireDefault(_object);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__("jwNV");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = _propTypes2['default'].oneOf((0, _object2['default'])(_constants.DIRECTIONS));

/***/ }),

/***/ "xCnm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = __webpack_require__("3a6K");

var ToInteger = __webpack_require__("CebH");

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) {
		return 0;
	} // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) {
		return MAX_SAFE_INTEGER;
	}
	return len;
};

/***/ }),

/***/ "xdEm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	return +value; // eslint-disable-line no-implicit-coercion
};

/***/ }),

/***/ "xjsR":
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

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__("AQ6k");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
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

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement('div', { className: this.props.className, style: wrapperStyle }, this.renderStyles(), _react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })), _react2.default.createElement('div', { ref: this.sizerRef, style: sizerStyle }, sizerValue), this.props.placeholder ? _react2.default.createElement('div', { ref: this.placeHolderSizerRef, style: sizerStyle }, this.props.placeholder) : null);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "y5CM":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("6IAg");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "yK78":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__("QMjl"));

var _DefaultTheme = _interopRequireDefault(__webpack_require__("nr3L"));

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ "ySAv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d8b990a84abc61e5005e44e88534c81.png";

/***/ }),

/***/ "ywQn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("uTT0");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
	return origKeys(o);
} : __webpack_require__("orz+");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2);
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) {
				// eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

/***/ }),

/***/ "zYaU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getComponentName;

var _functionPrototype = _interopRequireDefault(__webpack_require__("3L1b"));

var _reactIs = __webpack_require__("H1RQ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

function getComponentName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return Component.displayName || (0, _functionPrototype["default"])(Component);
  }

  if ((0, _reactIs.isForwardRef)({
    type: Component,
    $$typeof: _reactIs.Element
  })) {
    return Component.displayName;
  }

  if ((0, _reactIs.isMemo)(Component)) {
    return getComponentName(Component.type);
  }

  return null;
}
//# sourceMappingURL=getComponentName.js.map

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map