"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63805],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,f=g["".concat(o,".").concat(m)]||g[m]||c[m]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},25209:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],l={sidebar_position:112},o="groupArrayInsertAt",u={unversionedId:"en/sql-reference/aggregate-functions/reference/grouparrayinsertat",id:"en/sql-reference/aggregate-functions/reference/grouparrayinsertat",title:"groupArrayInsertAt",description:"grouparrayinsertat}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/grouparrayinsertat.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/grouparrayinsertat",permalink:"/docs/staging1/docs/en/sql-reference/aggregate-functions/reference/grouparrayinsertat",tags:[],version:"current",sidebarPosition:112,frontMatter:{sidebar_position:112},sidebar:"tutorialSidebar",previous:{title:"groupUniqArray",permalink:"/docs/staging1/docs/en/sql-reference/aggregate-functions/reference/groupuniqarray"},next:{title:"groupArrayMovingSum",permalink:"/docs/staging1/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum"}},p={},c=[],g={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grouparrayinsertat"},"groupArrayInsertAt"),(0,i.kt)("p",null,"Inserts a value into the array at the specified position."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayInsertAt(default_x, size)(x, pos)\n")),(0,i.kt)("p",null,"If in one query several values are inserted into the same position, the function behaves in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a query is executed in a single thread, the first one of the inserted values is used."),(0,i.kt)("li",{parentName:"ul"},"If a query is executed in multiple threads, the resulting value is an undetermined one of the inserted values.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Value to be inserted. ",(0,i.kt)("a",{parentName:"li",href:"/docs/staging1/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," resulting in one of the ",(0,i.kt)("a",{parentName:"li",href:"/docs/staging1/docs/en/sql-reference/data-types/"},"supported data types"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pos")," \u2014 Position at which the specified element ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," is to be inserted. Index numbering in the array starts from zero. ",(0,i.kt)("a",{parentName:"li",href:"/docs/staging1/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt32"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_x")," \u2014 Default value for substituting in empty positions. Optional parameter. ",(0,i.kt)("a",{parentName:"li",href:"/docs/staging1/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," resulting in the data type configured for the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," parameter. If ",(0,i.kt)("inlineCode",{parentName:"li"},"default_x")," is not defined, the ",(0,i.kt)("a",{parentName:"li",href:"/docs/staging1/docs/en/sql-reference/statements/create/table#create-default-values"},"default values")," are used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," \u2014 Length of the resulting array. Optional parameter. When using this parameter, the default value ",(0,i.kt)("inlineCode",{parentName:"li"},"default_x")," must be specified. ",(0,i.kt)("a",{parentName:"li",href:"/docs/staging1/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt32"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Array with inserted values.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/staging1/docs/en/sql-reference/data-types/array#data-type-array"},"Array"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt(toString(number), number * 2) FROM numbers(5);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','','1','','2','','3','','4']                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt('-')(toString(number), number * 2) FROM numbers(5);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt('-')(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','-','1','-','2','-','3','-','4']                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt('-', 5)(toString(number), number * 2) FROM numbers(5);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt('-', 5)(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','-','1','-','2']                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Multi-threaded insertion of elements into one position."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt(number, 0) FROM numbers_mt(10) SETTINGS max_block_size = 1;\n")),(0,i.kt)("p",null,"As a result of this query you get random integer in the ",(0,i.kt)("inlineCode",{parentName:"p"},"[0,9]")," range. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt(number, 0)\u2500\u2510\n\u2502 [7]                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);