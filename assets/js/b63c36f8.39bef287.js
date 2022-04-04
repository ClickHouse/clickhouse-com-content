"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88009],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="clickhouse-obfuscator",u={unversionedId:"en/operations/utilities/clickhouse-obfuscator",id:"en/operations/utilities/clickhouse-obfuscator",title:"clickhouse-obfuscator",description:"A simple tool for table data obfuscation.",source:"@site/docs/en/operations/utilities/clickhouse-obfuscator.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-obfuscator",permalink:"/docs/docs/en/operations/utilities/clickhouse-obfuscator",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"clickhouse-format",permalink:"/docs/docs/en/operations/utilities/clickhouse-format"},next:{title:"clickhouse-odbc-bridge",permalink:"/docs/docs/en/operations/utilities/odbc-bridge"}},c={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-obfuscator"},"clickhouse-obfuscator"),(0,r.kt)("p",null,"A simple tool for table data obfuscation."),(0,r.kt)("p",null,"It reads an input table and produces an output table, that retains some properties of input, but contains different data.\nIt allows publishing almost real production data for usage in benchmarks."),(0,r.kt)("p",null,"It is designed to retain the following properties of data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cardinalities of values (number of distinct values) for every column and every tuple of columns;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"conditional cardinalities: number of distinct values of one column under the condition on the value of another column;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"probability distributions of the absolute value of integers; the sign of signed integers; exponent and sign for floats;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"probability distributions of the length of strings;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"probability of zero values of numbers; empty strings and arrays, ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"s;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data compression ratio when compressed with LZ77 and entropy family of codecs;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"continuity (magnitude of difference) of time values across the table; continuity of floating-point values;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"date component of ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," values;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UTF-8 validity of string values;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"string values look natural."))),(0,r.kt)("p",null,"Most of the properties above are viable for performance testing:"),(0,r.kt)("p",null,"reading data, filtering, aggregatio, and sorting will work at almost the same speed\nas on original data due to saved cardinalities, magnitudes, compression ratios, etc."),(0,r.kt)("p",null,"It works in a deterministic fashion: you define a seed value and the transformation is determined by input data and by seed.\nSome transformations are one to one and could be reversed, so you need to have a large seed and keep it in secret."),(0,r.kt)("p",null,"It uses some cryptographic primitives to transform data but from the cryptographic point of view, it does not do it properly, that is why you should not consider the result as secure unless you have another reason. The result may retain some data you don't want to publish."),(0,r.kt)("p",null,"It always leaves 0, 1, -1 numbers, dates, lengths of arrays, and null flags exactly as in source data.\nFor example, you have a column ",(0,r.kt)("inlineCode",{parentName:"p"},"IsMobile")," in your table with values 0 and 1. In transformed data, it will have the same value."),(0,r.kt)("p",null,"So, the user will be able to count the exact ratio of mobile traffic."),(0,r.kt)("p",null,"Let's give another example. When you have some private data in your table, like user email and you don't want to publish any single email address.\nIf your table is large enough and contains multiple different emails and no email has a very high frequency than all others, it will anonymize all data. But if you have a small number of different values in a column, it can reproduce some of them.\nYou should look at the working algorithm of this tool works, and fine-tune its command line parameters."),(0,r.kt)("p",null,"This tool works fine only with an average amount of data (at least 1000s of rows)."))}d.isMDXComponent=!0}}]);