"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70955],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,u(u({ref:n},i),{},{components:t})):r.createElement(d,u({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21206:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),u=["components"],l={sidebar_position:144},s="sumCount",c={unversionedId:"en/sql-reference/aggregate-functions/reference/sumcount",id:"en/sql-reference/aggregate-functions/reference/sumcount",title:"sumCount",description:"agg_function-sumCount}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/sumcount.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/sumcount",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/sumcount",tags:[],version:"current",sidebarPosition:144,frontMatter:{sidebar_position:144},sidebar:"tutorialSidebar",previous:{title:"maxMap",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/maxmap"},next:{title:"rankCorr",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/rankCorr"}},i={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-sumCount"},"sumCount"),(0,o.kt)("p",null,"Calculates the sum of the numbers and counts the number of rows at the same time. The function is used by ClickHouse query optimizer: if there are multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"avg")," functions in a query, they can be replaced to single ",(0,o.kt)("inlineCode",{parentName:"p"},"sumCount")," function to reuse the calculations. The function is rarely needed to use explicitly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"sumCount(x)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Input value, must be ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/float"},"Float"),", or ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tuple ",(0,o.kt)("inlineCode",{parentName:"li"},"(sum, count)"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"sum")," is the sum of numbers and ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," is the number of rows with not-NULL values.")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s_table (x Int8) Engine = Log;\nINSERT INTO s_table SELECT number FROM numbers(0, 20);\nINSERT INTO s_table VALUES (NULL);\nSELECT sumCount(x) from s_table;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sumCount(x)\u2500\u2510\n\u2502 (190,20)    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#optimize_syntax_fuse_functions"},"optimize_syntax_fuse_functions")," setting.")))}m.isMDXComponent=!0}}]);