module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "5MvH":
/***/ (function(module, exports) {



/***/ }),

/***/ "D1kb":
/***/ (function(module, exports) {



/***/ }),

/***/ "MSyU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPD_ARTICLE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESET_ARTICLE_LIST; });
// action type
const UPD_ARTICLE_LIST = 'UPD_ARTICLE_LIST';
const RESET_ARTICLE_LIST = 'RESET_ARTICLE_LIST'; // action
// 缓存文章列表action

/***/ }),

/***/ "UkXq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/* unused harmony export isBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFunction; });
/* unused harmony export isPromise */
/* unused harmony export isAsyncFunction */
/* unused harmony export isUndefined */
/* unused harmony export isString */
/* unused harmony export isSymbol */
/* unused harmony export isDate */
/* unused harmony export isError */
// 检查类型的策略模式
const typeToString = Object.prototype.toString;

const checkType = type => val => typeToString.call(val).slice(8, -1).toLowerCase() === type.toLowerCase();

const isNumber = checkType('number');
const isArray = checkType('array');
const isBoolean = checkType('boolean');
const isPlainObject = checkType('object');
const isAsyncFunction = checkType('asyncFunction');
const isPromise = checkType('promise');
const isUndefined = checkType('undefined');
const isString = checkType('string');
const isSymbol = checkType('symbol');
const isDate = checkType('date');
const isError = checkType('error');

const isFunction = val => typeof val === 'function';



/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/pages/index.scss
var pages = __webpack_require__("pxef");

// EXTERNAL MODULE: ./src/iconfont/iconfont.css
var iconfont = __webpack_require__("D1kb");

// EXTERNAL MODULE: ./node_modules/github-markdown-css/github-markdown.css
var github_markdown = __webpack_require__("5MvH");

// EXTERNAL MODULE: ./src/config/constants.ts
var constants = __webpack_require__("lG6i");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./src/reducers/article/types.ts
var types = __webpack_require__("MSyU");

// CONCATENATED MODULE: ./src/reducers/article/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  articleIdList: [],
  articleMap: {}
};
function articleReducer(state = defaultState, action) {
  switch (action.type) {
    // 扁平化缓存文章数据
    case types["b" /* UPD_ARTICLE_LIST */]:
      const {
        articleList
      } = action.payload;
      const articleMap = articleList.reduce((obj, cur) => {
        obj[cur.id] = cur;
        return obj;
      }, {});
      return {
        articleIdList: [...state.articleIdList, ...articleList.map(article => article.id)],
        articleMap: _objectSpread(_objectSpread({}, state.articleMap), articleMap)
      };

    case types["a" /* RESET_ARTICLE_LIST */]:
      return {
        articleIdList: [],
        articleMap: _objectSpread({}, state.articleMap)
      };

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./src/reducers/tag/types.ts
var tag_types = __webpack_require__("uAn5");

// CONCATENATED MODULE: ./src/reducers/tag/index.ts
function tag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tag_ownKeys(Object(source), true).forEach(function (key) { tag_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tag_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const tag_defaultState = {
  tagList: [],
  tagMap: {}
};
function tag_articleReducer(state = tag_defaultState, action) {
  switch (action.type) {
    case tag_types["b" /* UPD_TAG_LIST */]:
      const {
        tagList
      } = action.payload;
      const tagMap = tagList.reduce((obj, cur) => {
        obj[cur.name] = cur;
        return obj;
      }, {});
      return {
        tagList: [...state.tagList, ...tagList.map(article => article.name)],
        tagMap: tag_objectSpread(tag_objectSpread({}, state.tagMap), tagMap)
      };

    case tag_types["a" /* RESET_TAG_LIST */]:
      return {
        tagList: [],
        tagMap: tag_objectSpread({}, state.tagMap)
      };

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/index.ts



const rootReducers = Object(external_redux_["combineReducers"])({
  article: articleReducer,
  tag: tag_articleReducer
});
/* harmony default export */ var reducers = (rootReducers);
// CONCATENATED MODULE: ./src/store/index.ts




function getStore(initState) {
  const isReduxDevtools = constants["a" /* isBrowser */] && window.__REDUX_DEVTOOLS_EXTENSION__;
  let store;

  if (true) {
    store = Object(external_redux_["createStore"])(reducers, initState, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
  } else {}

  return store;
}
// EXTERNAL MODULE: ./src/utils/checkType.ts
var checkType = __webpack_require__("UkXq");

// CONCATENATED MODULE: ./src/utils/withReduxHoc.js
var __jsx = external_react_default.a.createElement;

function withReduxHoc_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withReduxHoc_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withReduxHoc_ownKeys(Object(source), true).forEach(function (key) { withReduxHoc_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withReduxHoc_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withReduxHoc_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  if (!constants["a" /* isBrowser */]) {
    // 服务端每次执行都重新创建一个store
    return getStore(initialState);
  } // 在客户端执行这个方法的时候 优先返回window上已有的store
  // 而不能每次执行都重新创建一个store 否则状态就无限重置了


  if (!window[__NEXT_REDUX_STORE__]) {
    //@ts-ignore
    window[__NEXT_REDUX_STORE__] = getStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxHoc(AppComponent) {
  class WithReduxApp extends external_react_default.a.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const _this$props = this.props,
            {
        Component,
        pageProps
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["Component", "pageProps"]);

      return __jsx(AppComponent, _extends({}, rest, {
        Component: Component,
        pageProps: pageProps,
        reduxStore: this.reduxStore
      }));
    }

  }

  WithReduxApp.getInitialProps = async ctx => {
    let reduxStore = getOrCreateStore();
    ctx.reduxStore = reduxStore;
    let appProps = {}; //@ts-ignore

    if (Object(checkType["b" /* isFunction */])(AppComponent.getInitialProps)) {
      //@ts-ignore
      appProps = await AppComponent.getInitialProps(ctx);
    }

    return withReduxHoc_objectSpread(withReduxHoc_objectSpread({}, appProps), {}, {
      initialReduxState: reduxStore.getState()
    });
  };

  return WithReduxApp;
}
// CONCATENATED MODULE: ./src/pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;




 //import '@src/utils/prism'




const BlogApp = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return _app_jsx(external_react_redux_["Provider"], {
    store: reduxStore
  }, _app_jsx(Component, pageProps));
}; //@ts-ignore


BlogApp.getInitialProps = async appContext => {
  const {
    Component
  } = appContext;
  let pageProps = {};

  if (Object(checkType["b" /* isFunction */])(Component.getInitialProps)) {
    //@ts-ignore
    pageProps = await Component.getInitialProps(appContext);
  }

  return {
    pageProps
  };
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (withReduxHoc(BlogApp));

/***/ }),

/***/ "lG6i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
const isBrowser = false;

/***/ }),

/***/ "pxef":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "uAn5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPD_TAG_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESET_TAG_LIST; });
// action type
const UPD_TAG_LIST = 'UPD_TAG_LIST'; // 清除tagList

const RESET_TAG_LIST = 'RESET_TAG_LIST'; // action

/***/ })

/******/ });