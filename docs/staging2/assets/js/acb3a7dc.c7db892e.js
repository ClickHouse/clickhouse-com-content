"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18110],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:108},c="topK",u={unversionedId:"en/sql-reference/aggregate-functions/reference/topk",id:"en/sql-reference/aggregate-functions/reference/topk",title:"topK",description:"topk}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/topk.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/topk",permalink:"/docs/staging2/docs/en/sql-reference/aggregate-functions/reference/topk",tags:[],version:"current",sidebarPosition:108,frontMatter:{sidebar_position:108},sidebar:"tutorialSidebar",previous:{title:"groupArraySorted",permalink:"/docs/staging2/docs/en/sql-reference/aggregate-functions/reference/grouparraysorted"},next:{title:"topKWeighted",permalink:"/docs/staging2/docs/en/sql-reference/aggregate-functions/reference/topkweighted"}},p={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"topk"},"topK"),(0,o.kt)("p",null,"Returns an array of the approximately most frequent values in the specified column. The resulting array is sorted in descending order of approximate frequency of values (not by the values themselves)."),(0,o.kt)("p",null,"Implements the ",(0,o.kt)("a",{parentName:"p",href:"http://www.l2f.inesc-id.pt/~fmmb/wiki/uploads/Work/misnis.ref0a.pdf"},"Filtered Space-Saving")," algorithm for analyzing TopK, based on the reduce-and-combine algorithm from ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1401.0702.pdf"},"Parallel Space Saving"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"topK(N)(column)\n")),(0,o.kt)("p",null,"This function does not provide a guaranteed result. In certain situations, errors might occur and it might return frequent values that aren\u2019t the most frequent values."),(0,o.kt)("p",null,"We recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"N < 10")," value; performance is reduced with large ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," values. Maximum value of ",(0,o.kt)("inlineCode",{parentName:"p"},"N = 65536"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"N")," \u2013 The number of elements to return.")),(0,o.kt)("p",null,"If the parameter is omitted, default value 10 is used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2013 The value to calculate frequency.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Take the ",(0,o.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/example-datasets/ontime"},"OnTime")," data set and select the three most frequently occurring values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AirlineID")," column."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT topK(3)(AirlineID) AS res\nFROM ontime\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [19393,19790,19805] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);