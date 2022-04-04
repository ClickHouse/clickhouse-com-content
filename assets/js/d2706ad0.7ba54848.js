"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4925],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),g=a,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||l;return n?t.createElement(m,o(o({ref:r},p),{},{components:n})):t.createElement(m,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7522:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var t=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:106},u="argMax",c={unversionedId:"en/sql-reference/aggregate-functions/reference/argmax",id:"en/sql-reference/aggregate-functions/reference/argmax",title:"argMax",description:"agg-function-argmax}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/argmax.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/argmax",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/argmax",tags:[],version:"current",sidebarPosition:106,frontMatter:{sidebar_position:106},sidebar:"tutorialSidebar",previous:{title:"argMin",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/argmin"},next:{title:"avgWeighted",permalink:"/docs/docs/en/sql-reference/aggregate-functions/reference/avgweighted"}},p={},s=[],f={toc:s};function g(e){var r=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"agg-function-argmax"},"argMax"),(0,l.kt)("p",null,"Calculates the ",(0,l.kt)("inlineCode",{parentName:"p"},"arg")," value for a maximum ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," value. If there are several different values of ",(0,l.kt)("inlineCode",{parentName:"p"},"arg")," for maximum values of ",(0,l.kt)("inlineCode",{parentName:"p"},"val"),", returns the first of these values encountered."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"argMax(arg, val)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 Argument."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val")," \u2014 Value.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," value that corresponds to maximum ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," value.")),(0,l.kt)("p",null,"Type: matches ",(0,l.kt)("inlineCode",{parentName:"p"},"arg")," type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500user\u2500\u2500\u2500\u2500\u2500\u252c\u2500salary\u2500\u2510\n\u2502 director \u2502   5000 \u2502\n\u2502 manager  \u2502   3000 \u2502\n\u2502 worker   \u2502   1000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT argMax(user, salary) FROM salary;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500argMax(user, salary)\u2500\u2510\n\u2502 director             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);