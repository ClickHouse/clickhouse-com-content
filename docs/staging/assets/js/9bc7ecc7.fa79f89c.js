"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45145],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=o(n),m=r,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],u={sidebar_position:203},c="quantileExactWeighted",o={unversionedId:"en/sql-reference/aggregate-functions/reference/quantileexactweighted",id:"en/sql-reference/aggregate-functions/reference/quantileexactweighted",title:"quantileExactWeighted",description:"quantileexactweighted}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantileexactweighted.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantileexactweighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantileexactweighted",tags:[],version:"current",sidebarPosition:203,frontMatter:{sidebar_position:203},sidebar:"tutorialSidebar",previous:{title:"quantileExact Functions",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantileexact"},next:{title:"quantileTiming",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletiming"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantileexactweighted"},"quantileExactWeighted"),(0,i.kt)("p",null,"Exactly computes the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence, taking into account the weight of each element."),(0,i.kt)("p",null,"To get exact value, all the passed values \u200b\u200bare combined into an array, which is then partially sorted. Each value is counted with its weight, as if it is present ",(0,i.kt)("inlineCode",{parentName:"p"},"weight")," times. A hash table is used in the algorithm. Because of this, if the passed values \u200b\u200bare frequently repeated, the function consumes less RAM than ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantileexact#quantileexact"},"quantileExact"),". You can use this function instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"quantileExact")," and specify the weight 1."),(0,i.kt)("p",null,"When using multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactWeighted(level)(expr, weight)\n")),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianExactWeighted"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,i.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,i.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,i.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 Column with weights of sequence members. Weight is a number of value occurrences.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,i.kt)("p",null,"Type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Input table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u252c\u2500val\u2500\u2510\n\u2502 0 \u2502   3 \u2502\n\u2502 1 \u2502   2 \u2502\n\u2502 2 \u2502   1 \u2502\n\u2502 5 \u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactWeighted(n, val) FROM t\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactWeighted(n, val)\u2500\u2510\n\u2502                             1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);