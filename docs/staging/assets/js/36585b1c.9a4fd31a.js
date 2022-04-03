"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76550],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(t),g=o,m=f["".concat(p,".").concat(g)]||f[g]||s[g]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47867:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],u={sidebar_position:126},p="groupBitOr",c={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitor",id:"en/sql-reference/aggregate-functions/reference/groupbitor",title:"groupBitOr",description:"groupbitor}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitor.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitor",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitor",tags:[],version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"tutorialSidebar",previous:{title:"groupBitAnd",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitand"},next:{title:"groupBitXor",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitxor"}},l={},s=[],f={toc:s};function g(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitor"},"groupBitOr"),(0,a.kt)("p",null,"Applies bitwise ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," for series of numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitOr(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"Value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Test data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitOr(num) FROM t\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," is the column with the test data."),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n01111101 = 125\n")))}g.isMDXComponent=!0}}]);