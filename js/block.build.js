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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_times__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_times___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_times__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_memize__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_memize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_memize__);


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;

/* Parent Accordion Block */

registerBlockType('gca/custom-accordion', {
    title: __('Custom Accordion'),
    description: __('This is custom accordion block.'),
    icon: 'editor-justify',
    category: 'formatting',
    keywords: [__('accordion'), __('gutenberg'), __('faq')],
    attributes: {
        noOfAccordion: {
            type: 'number',
            default: 3
        },
        blockId: {
            type: 'string'
        }
    },
    edit: function edit(props) {
        var noOfAccordion = props.attributes.noOfAccordion,
            className = props.className,
            setAttributes = props.setAttributes,
            clientId = props.clientId;

        setAttributes({ blockId: clientId });
        var ALLOWBLOCKS = ['gca/accordion'];
        var getChildAccordionBlock = __WEBPACK_IMPORTED_MODULE_1_memize___default()(function (accordion) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash_times___default()(accordion, function (n) {
                return ["gca/accordion", { id: n + 1 }];
            });
        });
        return wp.element.createElement(
            "fragment",
            null,
            wp.element.createElement(
                "div",
                { className: { className: className } },
                wp.element.createElement(
                    "div",
                    { className: "accordionParentWrapper" },
                    wp.element.createElement(InnerBlocks, {
                        template: getChildAccordionBlock(noOfAccordion),
                        templateLock: "all",
                        allowedBlocks: ALLOWBLOCKS
                    }),
                    wp.element.createElement("span", { className: "dashicons dashicons-plus", onClick: function onClick() {
                            return setAttributes({ noOfAccordion: noOfAccordion + 1 });
                        } }),
                    wp.element.createElement("span", { className: "dashicons dashicons-minus", onClick: function onClick() {
                            return setAttributes({ noOfAccordion: noOfAccordion - 1 });
                        } })
                )
            )
        );
    },
    save: function save(props) {
        var noOfAccordion = props.attributes.noOfAccordion,
            className = props.className,
            setAttributes = props.setAttributes,
            clientId = props.clientId;

        return wp.element.createElement(InnerBlocks.Content, null);
    }

});

/* Accordion Block */
registerBlockType('gca/accordion', {
    title: __('Accordion Block'),
    description: __('This is custom accordion block with multiple setting.'),
    category: 'formatting',
    parent: ['gca/parent-accordion'],
    attributes: {
        title: {
            type: 'string',
            selector: 'h4'
        },
        open: {
            type: 'boolean',
            default: false
        },
        alignment: {
            type: 'string',
            default: 'unset'
        },
        headerTextFontSize: {
            type: 'string',
            default: '22px'
        },
        headerTextColor: {
            type: 'string',
            default: '#fff'
        },
        titleBackgroundColor: {
            type: 'string',
            default: '#26466d'
        },
        titlePaddingTop: {
            type: 'number',
            default: 10
        },
        titlePaddingRight: {
            type: 'number',
            default: 40
        },
        titlePaddingBottom: {
            type: 'number',
            default: 10
        },
        titlePaddingLeft: {
            type: 'number',
            default: 10
        },
        bodyTextColor: {
            type: 'string',
            default: '#26466d'
        },
        bodyBgColor: {
            type: 'string',
            default: '#f7f7f7'
        },
        borderWidth: {
            type: 'number',
            default: 0
        },
        borderType: {
            type: 'string'
        },
        borderColor: {
            type: 'string',
            default: '#000'
        },
        borderRadius: {
            type: 'number',
            default: 3
        }
    },
    edit: function edit(props) {
        var attributes = props.attributes,
            setAttributes = props.setAttributes,
            className = props.className;
        var title = attributes.title,
            open = attributes.open,
            alignment = attributes.alignment,
            headerTextFontSize = attributes.headerTextFontSize,
            headerTextColor = attributes.headerTextColor,
            titleBackgroundColor = attributes.titleBackgroundColor,
            titlePaddingTop = attributes.titlePaddingTop,
            titlePaddingRight = attributes.titlePaddingRight,
            titlePaddingBottom = attributes.titlePaddingBottom,
            titlePaddingLeft = attributes.titlePaddingLeft,
            bodyTextColor = attributes.bodyTextColor,
            bodyBgColor = attributes.bodyBgColor,
            borderWidth = attributes.borderWidth,
            borderType = attributes.borderType,
            borderColor = attributes.borderColor,
            borderRadius = attributes.borderRadius;

        return wp.element.createElement(
            "div",
            { className: { className: className } },
            wp.element.createElement(
                "div",
                { className: "accordionWrapper", style: { borderWidth: borderWidth + 'px', borderStyle: borderType, borderColor: borderColor, borderRadius: borderRadius + 'px' } },
                wp.element.createElement(
                    "div",
                    { className: "accordionHeader" },
                    wp.element.createElement(RichText, {
                        tagName: "h4",
                        value: title,
                        style: { fontSize: headerTextFontSize, textAlign: alignment, color: headerTextColor, backgroundColor: titleBackgroundColor, paddingTop: titlePaddingTop + 'px', paddingRight: titlePaddingRight + 'px', paddingBottom: titlePaddingBottom + 'px', paddingLeft: titlePaddingLeft + 'px' },
                        onChange: function onChange(value) {
                            return setAttributes({ title: value });
                        },
                        placeholder: __('Accordion Header')
                    })
                ),
                wp.element.createElement(
                    "div",
                    { className: "accordionBody", style: { backgroundColor: bodyBgColor, color: bodyTextColor } },
                    wp.element.createElement(InnerBlocks, { templateLock: false })
                )
            ),
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    "panelBody",
                    { title: __('Accordion Title Setting'), initialOpen: false },
                    wp.element.createElement(
                        "panelRow",
                        null,
                        wp.element.createElement(
                            "label",
                            null,
                            wp.element.createElement(
                                "b",
                                null,
                                "Title Setting"
                            )
                        ),
                        wp.element.createElement(ToggleControl, {
                            label: __('Accordion Open'),
                            checked: !!open,
                            onChange: function onChange() {
                                return setAttributes({ open: !open });
                            }
                        })
                    ),
                    wp.element.createElement(
                        "panelRow",
                        null,
                        wp.element.createElement(
                            "label",
                            null,
                            wp.element.createElement(
                                "b",
                                null,
                                "Title Alignment"
                            )
                        ),
                        wp.element.createElement(AlignmentToolbar, {
                            value: alignment,
                            onChange: function onChange(value) {
                                return setAttributes({ alignment: value });
                            }
                        })
                    ),
                    wp.element.createElement(
                        "panelRow",
                        null,
                        wp.element.createElement(TextControl, {
                            type: "string",
                            label: "Header Font Size",
                            value: headerTextFontSize,
                            onChange: function onChange(value) {
                                return setAttributes({ headerTextFontSize: value });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    "panelBody",
                    null,
                    wp.element.createElement(
                        "panelRow",
                        null,
                        wp.element.createElement(PanelColorSettings, {
                            title: __('Color Settings'),
                            initialOpen: false,
                            colorSettings: [{
                                label: __('Background Color'),
                                value: titleBackgroundColor,
                                onChange: function onChange(value) {
                                    return setAttributes({ titleBackgroundColor: value ? value : '#26466d' });
                                }
                            }, {
                                label: __('Text Color'),
                                value: headerTextColor,
                                onChange: function onChange(value) {
                                    return setAttributes({ headerTextColor: value ? value : '#fff' });
                                }
                            }]
                        })
                    )
                ),
                wp.element.createElement(
                    "panelBody",
                    null,
                    wp.element.createElement(
                        "panelRow",
                        { className: "titlePadding" },
                        wp.element.createElement(
                            "label",
                            null,
                            wp.element.createElement(
                                "b",
                                null,
                                "Header Padding Setting"
                            )
                        ),
                        wp.element.createElement(TextControl, {
                            type: "number",
                            label: "Padding Top",
                            value: titlePaddingTop,
                            onChange: function onChange(value) {
                                return setAttributes({ titlePaddingTop: value });
                            }
                        }),
                        wp.element.createElement(TextControl, {
                            type: "number",
                            label: "Padding Right",
                            value: titlePaddingRight,
                            onChange: function onChange(value) {
                                return setAttributes({ titlePaddingRight: value });
                            }
                        }),
                        wp.element.createElement(TextControl, {
                            type: "number",
                            label: "Padding Bottom",
                            value: titlePaddingBottom,
                            onChange: function onChange(value) {
                                return setAttributes({ titlePaddingBottom: value });
                            }
                        }),
                        wp.element.createElement(TextControl, {
                            type: "number",
                            label: "Padding Left",
                            value: titlePaddingLeft,
                            onChange: function onChange(value) {
                                return setAttributes({ titlePaddingLeft: value });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    "panelBody",
                    { title: __('Accordion Body Setting'), initialOpen: false },
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "b",
                            null,
                            "Accordion Body Style"
                        )
                    ),
                    wp.element.createElement(PanelColorSettings, {
                        title: __('Color Settings'),
                        initialOpen: false,
                        colorSettings: [{
                            label: __('Background Color'),
                            value: bodyBgColor,
                            onChange: function onChange(value) {
                                return setAttributes({ bodyBgColor: value ? value : '#f7f7f7' });
                            }
                        }, {
                            label: __('Text Color'),
                            value: bodyTextColor,
                            onChange: function onChange(value) {
                                return setAttributes({ bodyTextColor: value ? value : '#26466d' });
                            }
                        }]
                    }),
                    wp.element.createElement(RangeControl, {
                        label: __('Border Width'),
                        value: borderWidth,
                        min: "1",
                        max: "100",
                        step: "1",
                        onChange: function onChange(value) {
                            return setAttributes({ borderWidth: value });
                        }
                    }),
                    wp.element.createElement(SelectControl, {
                        label: __('Border Type'),
                        value: borderType,
                        options: [{ label: __('Border Type'), value: '' }, { label: __('Solid'), value: 'solid' }, { label: __('Dashed'), value: 'dashed' }, { label: __('Dotted'), value: 'dotted' }],
                        onChange: function onChange(value) {
                            return setAttributes({ borderType: value });
                        }
                    }),
                    wp.element.createElement(PanelColorSettings, {
                        title: __('Border Color'),
                        initialOpen: false,
                        colorSettings: [{
                            label: __('Border Color'),
                            value: borderColor,
                            onChange: function onChange(value) {
                                return setAttributes({ borderColor: value });
                            }
                        }]
                    }),
                    wp.element.createElement(TextControl, {
                        type: "numer",
                        label: "Border Radius",
                        min: "3",
                        value: borderRadius,
                        onChange: function onChange(value) {
                            return setAttributes({ borderRadius: value });
                        }
                    })
                )
            )
        );
    },
    save: function save(props) {
        var attributes = props.attributes,
            className = props.className;
        var title = attributes.title,
            open = attributes.open,
            alignment = attributes.alignment,
            headerTextFontSize = attributes.headerTextFontSize,
            headerTextColor = attributes.headerTextColor,
            titleBackgroundColor = attributes.titleBackgroundColor,
            titlePaddingTop = attributes.titlePaddingTop,
            titlePaddingRight = attributes.titlePaddingRight,
            titlePaddingBottom = attributes.titlePaddingBottom,
            titlePaddingLeft = attributes.titlePaddingLeft,
            bodyTextColor = attributes.bodyTextColor,
            bodyBgColor = attributes.bodyBgColor,
            borderWidth = attributes.borderWidth,
            borderType = attributes.borderType,
            borderColor = attributes.borderColor,
            borderRadius = attributes.borderRadius;

        var tabOpen = open ? 'tabOpen' : 'tabClose';
        var bodyDisplay = open ? 'block' : 'none';
        return wp.element.createElement(
            "div",
            { className: 'accordionWrapper' + ' ' + tabOpen, style: { borderWidth: borderWidth + 'px', borderStyle: borderType, borderColor: borderColor, borderRadius: borderRadius + 'px' } },
            wp.element.createElement(
                "div",
                { className: "accordionHeader" },
                wp.element.createElement(
                    "h4",
                    { style: { fontSize: headerTextFontSize, textAlign: alignment, color: headerTextColor, backgroundColor: titleBackgroundColor, paddingTop: titlePaddingTop + 'px', paddingRight: titlePaddingRight + 'px', paddingBottom: titlePaddingBottom + 'px', paddingLeft: titlePaddingLeft + 'px' } },
                    title
                )
            ),
            wp.element.createElement(
                "div",
                { className: "accordionBody", style: { backgroundColor: bodyBgColor, color: bodyTextColor, display: bodyDisplay } },
                wp.element.createElement(InnerBlocks.Content, null)
            )
        );
    },
    deprecated: [{
        attributes: {
            titlePaddingTop: {
                type: 'number',
                default: 10
            },
            titlePaddingRight: {
                type: 'number',
                default: 40
            },
            titlePaddingBottom: {
                type: 'number',
                default: 10
            },
            titlePaddingLeft: {
                type: 'number',
                default: 10
            }
        },

        migrate: function migrate(attributes) {
            return {
                content: attributes.text
            };
        },

        save: function save(props) {
            var attributes = props.attributes,
                className = props.className;
            var titlePaddingTop = attributes.titlePaddingTop,
                titlePaddingRight = attributes.titlePaddingRight,
                titlePaddingBottom = attributes.titlePaddingBottom,
                titlePaddingLeft = attributes.titlePaddingLeft;

            var tabOpen = open ? 'tabOpen' : 'tabClose';
            var bodyDisplay = open ? 'block' : 'none';
            return wp.element.createElement(
                "div",
                { className: 'accordionWrapper' + ' ' + tabOpen, style: { borderWidth: borderWidth + 'px', borderStyle: borderType, borderColor: borderColor, borderRadius: borderRadius + 'px' } },
                wp.element.createElement(
                    "div",
                    { className: "accordionHeader" },
                    wp.element.createElement(
                        "h4",
                        { style: { fontSize: headerTextFontSize, textAlign: alignment, color: headerTextColor, backgroundColor: titleBackgroundColor, paddingTop: titlePaddingTop + 'px', paddingRight: titlePaddingRight + 'px', paddingBottom: titlePaddingBottom + 'px', paddingLeft: titlePaddingLeft + 'px' } },
                        title
                    )
                ),
                wp.element.createElement(
                    "div",
                    { className: "accordionBody", style: { backgroundColor: bodyBgColor, color: bodyTextColor, display: bodyDisplay } },
                    wp.element.createElement(InnerBlocks.Content, null)
                )
            );
        }
    }]
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(3),
    castFunction = __webpack_require__(4),
    toInteger = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  n = toInteger(n);
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH,
      length = nativeMin(n, MAX_ARRAY_LENGTH);

  iteratee = castFunction(iteratee);
  n -= MAX_ARRAY_LENGTH;

  var result = baseTimes(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

module.exports = times;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(5);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(7);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(8);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9),
    isSymbol = __webpack_require__(10);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

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
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

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
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    isObjectLike = __webpack_require__(17);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0),
    getRawTag = __webpack_require__(15),
    objectToString = __webpack_require__(16);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(13);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( process.env.NODE_ENV === 'test' ) {
		// Cache is not exposed in the public API, but used in tests to ensure
		// expected list progression
		memoized.getCache = function() {
			return [ head, tail, size ];
		};
	}

	return memoized;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);