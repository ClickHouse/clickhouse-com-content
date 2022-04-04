"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48975],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?t.createElement(y,i(i({ref:n},u),{},{components:r})):t.createElement(y,i({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37152:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={sidebar_position:61,sidebar_label:"arrayJoin"},s="arrayJoin function",l={unversionedId:"en/sql-reference/functions/array-join",id:"en/sql-reference/functions/array-join",title:"arrayJoin function",description:"functions_arrayjoin}",source:"@site/docs/en/sql-reference/functions/array-join.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/array-join",permalink:"/docs/staging1/docs/en/sql-reference/functions/array-join",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"arrayJoin"},sidebar:"tutorialSidebar",previous:{title:"IN Operator",permalink:"/docs/staging1/docs/en/sql-reference/functions/in-functions"},next:{title:"Geo",permalink:"/docs/staging1/docs/en/sql-reference/functions/geo/"}},u={},p=[],f={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions_arrayjoin"},"arrayJoin function"),(0,a.kt)("p",null,"This is a very unusual function."),(0,a.kt)("p",null,"Normal functions do not change a set of rows, but just change the values in each row (map).\nAggregate functions compress a set of rows (fold or reduce).\nThe \u2018arrayJoin\u2019 function takes each row and generates a set of rows (unfold)."),(0,a.kt)("p",null,"This function takes an array as an argument, and propagates the source row to multiple rows for the number of elements in the array.\nAll the values in columns are simply copied, except the values in the column where this function is applied; it is replaced with the corresponding array value."),(0,a.kt)("p",null,"A query can use multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin")," functions. In this case, the transformation is performed multiple times."),(0,a.kt)("p",null,"Note the ARRAY JOIN syntax in the SELECT query, which provides broader possibilities."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayJoin([1, 2, 3] AS src) AS dst, 'Hello', src\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dst\u2500\u252c\u2500\\'Hello\\'\u2500\u252c\u2500src\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   2 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   3 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);