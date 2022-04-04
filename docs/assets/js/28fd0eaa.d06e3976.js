"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73617],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:195},u="uniqTheta",l={unversionedId:"en/sql-reference/aggregate-functions/reference/uniqthetasketch",id:"en/sql-reference/aggregate-functions/reference/uniqthetasketch",title:"uniqTheta",description:"agg_function-uniqthetasketch}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch",tags:[],version:"current",sidebarPosition:195,frontMatter:{sidebar_position:195},sidebar:"tutorialSidebar",previous:{title:"uniqHLL12",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniqhll12"},next:{title:"quantile",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/quantile"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-uniqthetasketch"},"uniqTheta"),(0,i.kt)("p",null,"Calculates the approximate number of different argument values, using the ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaSketchFramework.html"},"Theta Sketch Framework"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqTheta(x[, ...])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("p",null,"The function takes a variable number of parameters. Parameters can be ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", or numeric types."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type number.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation details")),(0,i.kt)("p",null,"Function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculates a hash for all parameters in the aggregate, then uses it in calculations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uses the ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/InverseEstimate.html"},"KMV")," algorithm to approximate the number of different argument values."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"4096(2^12) 64-bit sketch are used. The size of the state is about 41 KB.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The relative error is 3.125% (95% confidence), see the ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaErrorTable.html"},"relative error table")," for detail."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}m.isMDXComponent=!0}}]);