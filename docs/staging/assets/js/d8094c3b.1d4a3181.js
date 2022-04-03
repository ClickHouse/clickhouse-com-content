"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[84297],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},l="one",c={unversionedId:"en/operations/system-tables/one",id:"en/operations/system-tables/one",title:"one",description:"system-one}",source:"@site/docs/en/operations/system-tables/one.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/one",permalink:"/docs/en/operations/system-tables/one",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"numbers_mt",permalink:"/docs/en/operations/system-tables/numbers_mt"},next:{title:"opentelemetry_span_log",permalink:"/docs/en/operations/system-tables/opentelemetry_span_log"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-one"},"one"),(0,a.kt)("p",null,"This table contains a single row with a single ",(0,a.kt)("inlineCode",{parentName:"p"},"dummy")," UInt8 column containing the value 0."),(0,a.kt)("p",null,"This table is used if a ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," query does not specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM")," clause."),(0,a.kt)("p",null,"This is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DUAL")," table found in other DBMSs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.one LIMIT 10;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dummy\u2500\u2510\n\u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.001 sec.\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/one"},"Original article")," "))}f.isMDXComponent=!0}}]);