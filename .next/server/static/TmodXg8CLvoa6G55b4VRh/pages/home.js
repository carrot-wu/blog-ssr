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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0tbs":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FCkD");


/***/ }),

/***/ "3nhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticleById; });
/* harmony import */ var _src_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sy1d");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getArticleList(params) {
  return _src_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('article/getArticleList', _objectSpread({}, params));
}
function getArticleById(params) {
  return _src_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('article/findArticleById', _objectSpread({}, params));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9JP6":
/***/ (function(module, exports) {



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
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

/***/ "FCkD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/hooks/useInfinite.ts
var useInfinite = __webpack_require__("od86");

// EXTERNAL MODULE: ./src/services/article.ts
var services_article = __webpack_require__("3nhN");

// EXTERNAL MODULE: ./src/reducers/article/types.ts
var types = __webpack_require__("MSyU");

// CONCATENATED MODULE: ./src/reducers/article/actions.ts


//actionCreator
function updArticle(articleList) {
  return {
    type: types["b" /* UPD_ARTICLE_LIST */],
    payload: {
      articleList
    }
  };
} // 清除文章列表

function resetArticle() {
  return {
    type: types["a" /* RESET_ARTICLE_LIST */]
  };
} // action

const thunkUpdArticle = params => async dispatch => {
  const {
    data
  } = await Object(services_article["b" /* getArticleList */])(params);
  dispatch(updArticle(data.list));
  return data;
};
// EXTERNAL MODULE: ./src/components/index.ts + 8 modules
var components = __webpack_require__("Nhdc");

// EXTERNAL MODULE: ./src/pages/home/style.scss
var style = __webpack_require__("laAL");

// EXTERNAL MODULE: ./src/hooks/index.ts + 5 modules
var hooks = __webpack_require__("eZYV");

// CONCATENATED MODULE: ./src/pages/home/index.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Home = props => {
  Object(hooks["b" /* useTitle */])('首页');
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const history = Object(router_["useRouter"])();
  const {
    serverPageNum,
    serverHasMore,
    serverSucceed
  } = props; // 获取state article信息

  const {
    articleIdList,
    articleMap
  } = Object(external_react_redux_["useSelector"])(state => state.article);
  const articleList = articleIdList.map(id => articleMap[id]); //定义无线加载类型

  const getArticleList = Object(external_react_["useCallback"])(async ({
    pageSize,
    pageNum
  }) => dispatch(thunkUpdArticle({
    pageNum,
    pageSize
  })), [dispatch]); //封装分页详情

  const {
    load,
    hasMore,
    loading
  } = Object(useInfinite["a" /* default */])(getArticleList, {
    pageSize: 5,
    immediate: !serverSucceed,
    hasMore: serverHasMore,
    defaultPage: serverPageNum,
    defaultLoading: !serverSucceed
  }); // 跳转详情

  const goPost = Object(external_react_["useCallback"])(id => {
    // 因为post的关系所以这边直接作为query传入就可以了
    return () => history.push({
      pathname: '/post',
      query: {
        id
      }
    });
  }, [history]);
  Object(external_react_["useEffect"])(() => {
    // 组件卸载完成之后清除redux里的数据
    return () => {
      dispatch(resetArticle());
    };
  }, []);
  return __jsx("div", {
    className: "home"
  }, __jsx(components["f" /* Header */], null), __jsx(components["b" /* Banner */], null), __jsx("div", {
    className: "homeContent"
  }, articleList.map(article => __jsx(components["a" /* Article */], _extends({
    key: article.id
  }, article, {
    onClick: goPost(article.id)
  }))), __jsx("div", {
    className: "loadBar"
  }, loading ? __jsx(components["h" /* Loading */], null, "\u52A0\u8F7D\u4E2D...") : hasMore ? __jsx(components["e" /* Button */], {
    onClick: load
  }, "\u52A0\u8F7D\u66F4\u591A") : __jsx(components["d" /* BottomLine */], {
    lineWidth: 100
  }))), __jsx(components["c" /* BottomBar */], null));
};

Home.getInitialProps = async context => {
  const {
    reduxStore
  } = context;
  let pageNum = 1;
  let hasMore = true;
  let list;
  const {
    data
  } = await Object(services_article["b" /* getArticleList */])({
    pageNum,
    pageSize: 5
  });

  if (data.totalPage <= pageNum) {
    hasMore = false;
  }

  pageNum += 1;
  list = data.list;
  reduxStore.dispatch(updArticle(list));
  return {
    serverSucceed: true,
    serverPageNum: pageNum,
    serverHasMore: hasMore,
    serverList: list
  };
};

/* harmony default export */ var home = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "J1CH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bottomWrapper": "_1Ox1mBXQ"
};


/***/ }),

/***/ "JmTP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "_3OdzNeBx",
	"headerWrapper": "_39yheOsy",
	"avatar": "_2wXDP7q5",
	"menu": "_2YdrfEHk",
	"menuItem": "_1oMyFdMd",
	"selected": "_2YK9Jh1o"
};


/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "Nhdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ BottomBar; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Header; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Banner; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ components_Button; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ components_Loading; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_BottomLine; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Article; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ components_Link; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/BottomBar/styles.module.scss
var styles_module = __webpack_require__("J1CH");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./src/components/BottomBar/index.tsx
var __jsx = external_react_default.a.createElement;


function BottomBar() {
  const year = new Date().getFullYear();
  return __jsx("footer", {
    className: styles_module_default.a.bottomWrapper
  }, __jsx("div", null, `©2019-${year}`), __jsx("div", null, "Director by CarrotWu"), __jsx("div", null, __jsx("a", {
    href: "http://beian.miit.gov.cn"
  }, "\u7CA4ICP\u590719128232\u53F7")));
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var Header_styles_module = __webpack_require__("JmTP");
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);

// EXTERNAL MODULE: ./src/assets/images/avatar.jpg
var avatar = __webpack_require__("ku9C");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar);

// CONCATENATED MODULE: ./src/components/Header/index.tsx
var Header_jsx = external_react_default.a.createElement;






const headerLinkItem = [{
  to: '/home',
  key: 'home',
  name: '首页'
}, {
  to: '/tag',
  key: 'tag',
  name: '分类'
}, {
  to: '/love',
  key: 'love',
  name: '关于她'
}];
function Header() {
  const location = Object(router_["useRouter"])();
  return Header_jsx("header", {
    className: Header_styles_module_default.a.header
  }, Header_jsx("div", {
    className: Header_styles_module_default.a.headerWrapper
  }, Header_jsx("img", {
    className: Header_styles_module_default.a.avatar,
    src: avatar_default.a,
    alt: ""
  }), Header_jsx("div", {
    className: Header_styles_module_default.a.menu
  }, headerLinkItem.map(linkItem => Header_jsx("div", {
    className: external_classnames_default()({
      [Header_styles_module_default.a.menuItem]: true,
      [Header_styles_module_default.a.selected]: location.pathname === linkItem.to
    }),
    key: linkItem.key
  }, Header_jsx(components_Link, {
    to: linkItem.to
  }, linkItem.name))))));
}
// EXTERNAL MODULE: ./src/components/Banner/styles.scss
var styles = __webpack_require__("x15h");

// CONCATENATED MODULE: ./src/components/Banner/index.tsx
var Banner_jsx = external_react_default.a.createElement;


function Banner() {
  return Banner_jsx("div", {
    className: "banner"
  }, Banner_jsx("img", {
    src: "http://img.carrotwu.com/FvKr_PFFe8uyWhqwbZMHjKw3tARK",
    alt: ""
  }));
}
// EXTERNAL MODULE: ./src/components/Button/styles.scss
var Button_styles = __webpack_require__("Uofb");

// CONCATENATED MODULE: ./src/components/Button/index.tsx
var Button_jsx = external_react_default.a.createElement;



const Button = props => {
  const {
    className = '',
    style,
    onClick,
    type = 'primary'
  } = props;
  return Button_jsx("div", {
    className: `myButton myButton-${type} ${className}`,
    style: style,
    onClick: onClick
  }, Button_jsx("span", null, props.children));
};

/* harmony default export */ var components_Button = (Button);
// EXTERNAL MODULE: ./src/components/Loading/styles.scss
var Loading_styles = __webpack_require__("0tbs");

// CONCATENATED MODULE: ./src/components/Loading/index.tsx
var Loading_jsx = external_react_default.a.createElement;



const Loading = props => {
  const {
    children = '加载中',
    size = 24,
    color = '#24c3ef'
  } = props;
  return Loading_jsx("div", {
    className: "wu-loading"
  }, Loading_jsx("span", {
    className: "wu-loading-wrapper",
    style: {
      width: size,
      height: size,
      color
    }
  }, Loading_jsx("svg", {
    viewBox: "25 25 50 50",
    className: "wu-loading-circular",
    style: {
      color
    }
  }, Loading_jsx("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  }))), Loading_jsx("span", {
    className: "wu-loading-text"
  }, children));
};

/* harmony default export */ var components_Loading = (Loading);
// EXTERNAL MODULE: ./src/components/BottomLine/styles.scss
var BottomLine_styles = __webpack_require__("iH3g");

// CONCATENATED MODULE: ./src/components/BottomLine/index.tsx
var BottomLine_jsx = external_react_default.a.createElement;



const BottomLine = props => {
  const {
    children = '我是有底线的',
    lineWidth = '100%'
  } = props;
  return BottomLine_jsx("div", {
    className: "bottom-line"
  }, BottomLine_jsx("span", {
    style: {
      maxWidth: lineWidth
    },
    className: "line"
  }), BottomLine_jsx("span", {
    className: "bottom-text"
  }, children), BottomLine_jsx("span", {
    style: {
      maxWidth: lineWidth
    },
    className: "line"
  }));
};

/* harmony default export */ var components_BottomLine = (BottomLine);
// EXTERNAL MODULE: ./src/hooks/useFormatDate.ts
var useFormatDate = __webpack_require__("cuyt");

// EXTERNAL MODULE: ./src/components/Article/style.scss
var style = __webpack_require__("9JP6");

// CONCATENATED MODULE: ./src/components/Article/index.tsx
var Article_jsx = external_react_default.a.createElement;





const Article = props => {
  const {
    title,
    id,
    access,
    abstract,
    imgSrc,
    createdStamp
  } = props;
  const imgStyle = Object(external_react_["useMemo"])(() => {
    return {
      backgroundImage: `url(${imgSrc})`
    };
  }, [imgSrc]);
  const time = Object(useFormatDate["a" /* default */])(createdStamp);
  return Article_jsx("article", {
    className: "article"
  }, Article_jsx("div", {
    className: "title",
    onClick: () => props.onClick(id)
  }, title), Article_jsx("div", {
    className: "detail"
  }, Article_jsx("div", {
    className: "iconWrapper"
  }, Article_jsx("span", {
    className: "iconfont icon-author"
  }), Article_jsx("span", null, "carrotwu")), Article_jsx("div", {
    className: "iconWrapper"
  }, Article_jsx("span", {
    className: "iconfont icon-access"
  }), Article_jsx("span", null, `浏览${access}次`)), Article_jsx("div", {
    className: "iconWrapper"
  }, Article_jsx("span", {
    className: "iconfont icon-rili"
  }), Article_jsx("span", null, time))), imgSrc && Article_jsx("div", {
    className: "imgWrapper",
    style: imgStyle,
    onClick: () => props.onClick(id)
  }), Article_jsx("div", {
    className: "abstract"
  }, abstract), Article_jsx("div", {
    className: "read-more"
  }, Article_jsx(components_Link, {
    to: `/post/${id}`
  }, "\u67E5\u770B\u66F4\u591A")));
};

/* harmony default export */ var components_Article = (Object(external_react_["memo"])(Article));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/Link/index.tsx
var Link_jsx = external_react_default.a.createElement;



const Link = props => {
  const {
    children,
    className,
    to
  } = props;
  return Link_jsx(link_default.a, {
    href: to
  }, children && Link_jsx("a", {
    className: className
  }, children));
};

/* harmony default export */ var components_Link = (Link);
// CONCATENATED MODULE: ./src/components/index.ts









/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "Uofb":
/***/ (function(module, exports) {



/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cuyt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFormatDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function useFormatDate(time, type = 'yyyy-MM-dd HH:MM') {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return time ? Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(time), type) : '暂无';
  }, [time, type]);
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eZYV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ hooks_usePromise; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ useTitle; });

// UNUSED EXPORTS: useFormatDate, useInfinite, useSetState, useNumber

// EXTERNAL MODULE: ./src/hooks/useFormatDate.ts
var useFormatDate = __webpack_require__("cuyt");

// EXTERNAL MODULE: ./src/hooks/useInfinite.ts
var useInfinite = __webpack_require__("od86");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/utils/checkType.ts
var checkType = __webpack_require__("UkXq");

// CONCATENATED MODULE: ./src/hooks/usePromise.ts



/**
 * 用于封装请求的自定义hooks方法
 * @param {PromiseFn<R, P>} promiseFn 传入的promise方法
 * @param {any[] | PromiseOptions} depList depList 依赖数组
 * @param {PromiseOptions} options 一些自定义的配置
 * @returns {PromiseRes<PromiseFn<R, P>, R>}
 */
function usePromise(promiseFn, depList, options) {
  //重载
  let _options;

  let _depList;

  _depList = Object(checkType["a" /* isArray */])(depList) ? depList : [];
  _options = Object(checkType["c" /* isPlainObject */])(depList) && !Object(checkType["a" /* isArray */])(depList) ? depList : options || {};
  const {
    defaultData = {
      data: {}
    },
    immediate,
    defaultLoading = true
  } = _options;
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(defaultLoading); // 这边为了繁殖默认报错 这边就直接强行类型断言就可以了

  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(defaultData);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null); // 返回出去的promise函数

  const returnPromise = Object(external_react_["useCallback"])(async (...params) => {
    try {
      setError(null);
      setLoading(true);
      const result = await promiseFn(...params);
      setData(result);
      setLoading(false);
      return result;
    } catch (e) {
      setLoading(false);
      setError(e);
      return Promise.reject(e);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [..._depList]);
  Object(external_react_["useEffect"])(() => {
    if (immediate) {
      // @ts-ignore
      returnPromise();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return {
    promiseFn: returnPromise,
    res: data,
    loading,
    error
  };
}

/* harmony default export */ var hooks_usePromise = (usePromise);
// CONCATENATED MODULE: ./src/hooks/useTitle.ts

function useTitle(inTitle, leftTitle) {
  Object(external_react_["useEffect"])(() => {
    if (inTitle) {
      document.title = inTitle;
    }

    return () => {
      if (leftTitle) {
        document.title = leftTitle;
      }
    };
  }, [inTitle, leftTitle]);
}
// CONCATENATED MODULE: ./src/hooks/useSetState.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // 约束传入useSetState的类型

/**
 * 模拟class组件的setState方法
 * @param {ISetState<T>} initObj
 * @returns {[T, ((state: ReturnStateMethods<T>) => void)]}
 */
function useSetState(initObj) {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(initObj); // 通过useRef缓存cb方法用于下面的useEffect进行渲染

  const executeCb = Object(external_react_["useRef"])();
  const mySetState = Object(external_react_["useCallback"])((state, cb) => {
    let newState = state;
    setState(prevState => {
      executeCb.current = cb;

      if (Object(checkType["b" /* isFunction */])(state)) {
        newState = state(prevState);
      }

      return _objectSpread(_objectSpread({}, prevState), newState);
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
    const {
      current: cb
    } = executeCb;
    Object(checkType["b" /* isFunction */])(cb) && cb(); // eslint-disable-next-line
  }, [executeCb.current]);
  return [state, mySetState];
}
// CONCATENATED MODULE: ./src/hooks/useMethods.ts

 // 灵感来源于知乎上的筛选出符合函数的类型

/**
 *  接受一个值和方法进行hooks化
 * @param {T} initState 初始化值
 * @param {K} methods 需要hooks话的方法
 * @returns {[T, ReturnMethods<K, T>]}
 */
function useMethods(initState, methods) {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(() => initState);
  const methodsTypes = Object.keys(methods);
  const boundMethods = methodsTypes.reduce((newMethods, name) => {
    const fn = methods[name];

    if (Object(checkType["b" /* isFunction */])(fn)) {
      newMethods[name] = (...args) => {
        setValue(value => fn(value, ...args));
      };
    }

    return newMethods;
  }, {});
  return [value, boundMethods];
}

/* harmony default export */ var hooks_useMethods = (useMethods);
// CONCATENATED MODULE: ./src/hooks/useNumber.ts

const useNumber_methods = {
  increment(value) {
    return value + 1;
  },

  decrement(value) {
    return value - 1;
  },

  add(value, num) {
    return value + num;
  },

  dec(value, num) {
    return value - num;
  }

};
/**
 *
 * @param {number} initState 初始值
 * @returns {[number, ReturnMethods<UseNumberMethods<number>, number>]}
 */

function useNumber(initState) {
  return hooks_useMethods(initState, useNumber_methods);
}

/* harmony default export */ var hooks_useNumber = (useNumber);
// CONCATENATED MODULE: ./src/hooks/index.ts








/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iH3g":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "ku9C":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiYWQzZTRiNjgyNjExMDQzMjBlYjZiNzkxYTA5YzYxODEuanBnIjs="

/***/ }),

/***/ "lG6i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
const isBrowser = false;

/***/ }),

/***/ "laAL":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "od86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInfinite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInfinite(loadFn, options = {}) {
  const {
    pageSize = 10,
    defaultPage = 1,
    immediate = false,
    hasMore: defaultHasMore = true,
    defaultList = [],
    defaultLoading = true
  } = options; // loadFn 是一个异步函数 最终返回的res 包含 {data, pageNo, totalPage}

  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultLoading);
  const {
    0: pageNum,
    1: setPageNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultPage);
  const {
    0: dataList,
    1: setDataList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultList);
  const {
    0: hasMore,
    1: setHasMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultHasMore);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const initLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      setError(null);
      setLoading(true);
      const result = await loadFn({
        pageNum,
        pageSize
      });
      let {
        nextPage,
        totalPage,
        list
      } = result;
      setDataList(dataList.concat(list));
      nextPage = nextPage || pageNum + 1;
      setPageNum(nextPage);

      if (nextPage > totalPage) {
        setHasMore(false);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [loadFn, pageNum, pageSize, dataList]);
  const clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setLoading(false);
    setPageNum(defaultPage);
    setDataList([]);
    setHasMore(true);
    setError(null);
  }, [defaultPage]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (immediate) {
      initLoad();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return {
    load: initLoad,
    loading,
    hasMore,
    list: dataList,
    error,
    clear
  };
}

/***/ }),

/***/ "sy1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/utils/http.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
/**
 * 封装请求响应 Error
 */

class ResError extends Error {
  constructor(resErrorConfig) {
    const {
      status,
      message,
      errorCode,
      requestUrl
    } = resErrorConfig;
    super(message);

    _defineProperty(this, "status", void 0);

    _defineProperty(this, "errorCode", void 0);

    _defineProperty(this, "requestUrl", void 0);

    this.status = status;
    this.errorCode = errorCode;
    this.requestUrl = requestUrl;
  }

}
/**
 * 封装 axios, 对外提供统一的 http 请求工具
 * 支持 get, post, put, patch, delete
 */

class http_Http {
  /**
   * create a request instance
   *
   * @param {Object} options
   * @param {Object} options.defaults axios的默认设置
   * @param {Object} options.interceptors 拦截器设置
   */
  constructor({
    defaults = {},
    interceptors = {}
  }) {
    _defineProperty(this, "instance", void 0);

    // eslint-disable-next-line no-multi-assign
    const instance = this.instance = external_axios_default.a.create(_objectSpread(_objectSpread({}, defaults), {}, {
      timeout: 50000
    }));
    instance.interceptors.request.use(cfg => cfg, err => Promise.reject(err));
    /**
     * 请求失败拦截器 检验是什么类型的错误 网络错误或者自定义错误
     * @param {AxiosError} err
     * @returns {Promise<ResError>}
     */

    function resErrorFn(err) {
      const {
        response,
        request
      } = err;
      let errorParams;

      if (response) {
        const {
          data = {},
          status
        } = response;
        const {
          resultMsg
        } = data;
        const errorText = resultMsg || codeMessage[status] || response.statusText;
        errorParams = {
          status,
          message: errorText,
          errorCode: status,
          requestUrl: request.url
        };
      } else {
        errorParams = {
          status: 9999,
          message: '网络错误',
          errorCode: 9999,
          requestUrl: request.url
        };
      }

      return Promise.reject(new ResError(errorParams));
    }

    instance.interceptors.response.use(interceptors.resHandler || (res => res), interceptors.errHandler || resErrorFn);
  }

  head(url) {
    return this.instance.head(url);
  }

  async get(url, params = {}, config = {}) {
    const res = await this.instance.get(url, _objectSpread(_objectSpread({}, config), {}, {
      params
    }));
    return res.data;
  }

  delete(url) {
    return this.instance.delete(url);
  }

  async post(url, data, config) {
    const res = await this.instance.post(url, data, config);
    return res.data;
  }

  put(url, data, config) {
    return this.instance.put(url, data, config);
  }

  patch(url, data, config) {
    return this.instance.patch(url, data, config);
  }

}
// EXTERNAL MODULE: ./src/config/constants.ts
var constants = __webpack_require__("lG6i");

// CONCATENATED MODULE: ./src/utils/request.ts

 // todo 这边还可以做拆分 抽成公共配置

const request = new http_Http({
  defaults: {
    baseURL: constants["a" /* isBrowser */] ? '/api' : 'https://www.carrotwu.com/api'
  }
});
/* harmony default export */ var utils_request = __webpack_exports__["a"] = (request);

/***/ }),

/***/ "x15h":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });