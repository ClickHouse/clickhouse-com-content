"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44084],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||o;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],i={sidebar_position:128},c="groupBitmap",u={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitmap",id:"en/sql-reference/aggregate-functions/reference/groupbitmap",title:"groupBitmap",description:"groupbitmap}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitmap.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitmap",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/groupbitmap",tags:[],version:"current",sidebarPosition:128,frontMatter:{sidebar_position:128},sidebar:"tutorialSidebar",previous:{title:"groupBitXor",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/groupbitxor"},next:{title:"groupBitmapAnd",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/groupbitmapand"}},l={},s=[],f={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitmap"},"groupBitmap"),(0,o.kt)("p",null,"Bitmap or Aggregate calculations from a unsigned integer column, return cardinality of type UInt64, if add suffix -State, then return ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/functions/bitmap-functions"},"bitmap object"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmap(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value")),(0,o.kt)("p",null,"Value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Test data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"UserID\n1\n1\n2\n3\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitmap(UserID) as num FROM t\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"num\n3\n")))}g.isMDXComponent=!0}}]);