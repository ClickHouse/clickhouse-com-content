"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51396],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(n),b=o,f=p["".concat(c,".").concat(b)]||p[b]||m[b]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return m}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],u={},c="numbers_mt",i={unversionedId:"en/operations/system-tables/numbers_mt",id:"en/operations/system-tables/numbers_mt",title:"numbers_mt",description:"system-numbers-mt}",source:"@site/docs/en/operations/system-tables/numbers_mt.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/numbers_mt",permalink:"/docs/en/operations/system-tables/numbers_mt",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"numbers",permalink:"/docs/en/operations/system-tables/numbers"},next:{title:"one",permalink:"/docs/en/operations/system-tables/one"}},l={},m=[],p={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-numbers-mt"},"numbers_mt"),(0,s.kt)("p",null,"The same as ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/numbers"},"system.numbers")," but reads are parallelized. The numbers can be returned in any order."),(0,s.kt)("p",null,"Used for tests."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.numbers_mt LIMIT 10;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2502      9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.001 sec.\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/numbers_mt"},"Original article")," "))}b.isMDXComponent=!0}}]);