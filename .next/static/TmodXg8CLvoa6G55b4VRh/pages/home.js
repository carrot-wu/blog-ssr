(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3nhN":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r("rePB"),a=r("sy1d");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e){return a.a.get("article/getArticleList",u({},e))}function o(e){return a.a.get("article/findArticleById",u({},e))}},"70uq":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return r("FCkD")}])},FCkD:function(e,t,r){"use strict";r.r(t);var n=r("wx14"),a=r("o0o1"),c=r.n(a),u=r("HaE+"),i=r("q1tI"),o=r.n(i),s=r("/MKj"),f=r("nOHt"),p=r("od86"),l=r("3nhN"),b=r("MSyU");function d(e){return{type:b.b,payload:{articleList:e}}}var O=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(r){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.b)(e);case 2:return n=t.sent,a=n.data,r(d(a.list)),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=r("Nhdc"),v=(r("laAL"),r("eZYV")),m=o.a.createElement,h=function(e){Object(v.b)("\u9996\u9875");var t=Object(s.b)(),r=Object(f.useRouter)(),a=e.serverPageNum,o=e.serverHasMore,l=e.serverSucceed,d=Object(s.c)((function(e){return e.article})),h=d.articleIdList,g=d.articleMap,w=h.map((function(e){return g[e]})),y=Object(i.useCallback)(function(){var e=Object(u.a)(c.a.mark((function e(r){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.pageSize,a=r.pageNum,e.abrupt("return",t(O({pageNum:a,pageSize:n})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),P=Object(p.a)(y,{pageSize:5,immediate:!l,hasMore:o,defaultPage:a,defaultLoading:!l}),S=P.load,k=P.hasMore,E=P.loading,N=Object(i.useCallback)((function(e){return function(){return r.push({pathname:"/post",query:{id:e}})}}),[r]);return Object(i.useEffect)((function(){return function(){t({type:b.a})}}),[]),m("div",{className:"home"},m(j.f,null),m(j.b,null),m("div",{className:"homeContent"},w.map((function(e){return m(j.a,Object(n.a)({key:e.id},e,{onClick:N(e.id)}))})),m("div",{className:"loadBar"},E?m(j.h,null,"\u52a0\u8f7d\u4e2d..."):k?m(j.e,{onClick:S},"\u52a0\u8f7d\u66f4\u591a"):m(j.d,{lineWidth:100}))),m(j.c,null))};h.getInitialProps=function(){var e=Object(u.a)(c.a.mark((function e(t){var r,n,a,u,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.reduxStore,n=1,a=!0,e.next=5,Object(l.b)({pageNum:n,pageSize:5});case 5:return i=e.sent,(o=i.data).totalPage<=n&&(a=!1),n+=1,u=o.list,r.dispatch(d(u)),e.abrupt("return",{serverSucceed:!0,serverPageNum:n,serverHasMore:a,serverList:u});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=h},MSyU:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n="UPD_ARTICLE_LIST",a="RESET_ARTICLE_LIST"},eZYV:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));r("cuyt"),r("od86");var n=r("KQm4"),a=r("o0o1"),c=r.n(a),u=r("HaE+"),i=r("q1tI"),o=r("UkXq");var s=function(e,t,r){var a;a=Object(o.a)(t)?t:[];var s=Object(o.c)(t)&&!Object(o.a)(t)?t:r||{},f=s.defaultData,p=void 0===f?{data:{}}:f,l=s.immediate,b=s.defaultLoading,d=void 0===b||b,O=Object(i.useState)(d),j=O[0],v=O[1],m=Object(i.useState)(p),h=m[0],g=m[1],w=Object(i.useState)(null),y=w[0],P=w[1],S=Object(i.useCallback)(Object(u.a)(c.a.mark((function t(){var r,n=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(null),v(!0),t.next=5,e.apply(void 0,n);case 5:return r=t.sent,g(r),v(!1),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(0),v(!1),P(t.t0),t.abrupt("return",Promise.reject(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,11]])}))),Object(n.a)(a));return Object(i.useEffect)((function(){l&&S()}),[]),{promiseFn:S,res:h,loading:j,error:y}};function f(e,t){Object(i.useEffect)((function(){return e&&(document.title=e),function(){t&&(document.title=t)}}),[e,t])}r("rePB")}},[["70uq",0,2,1,4,5,6,3]]]);