"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41854],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,k=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return r?t.createElement(k,s(s({ref:n},u),{},{components:r})):t.createElement(k,s({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37655:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={sidebar_position:151},p="skewSamp",c={unversionedId:"en/sql-reference/aggregate-functions/reference/skewsamp",id:"en/sql-reference/aggregate-functions/reference/skewsamp",title:"skewSamp",description:"skewsamp}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/skewsamp.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/skewsamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewsamp",tags:[],version:"current",sidebarPosition:151,frontMatter:{sidebar_position:151},sidebar:"tutorialSidebar",previous:{title:"skewPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewpop"},next:{title:"kurtPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtpop"}},u={},l=[],f={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skewsamp"},"skewSamp"),(0,o.kt)("p",null,"Computes the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness"},"sample skewness")," of a sequence."),(0,o.kt)("p",null,"It represents an unbiased estimate of the skewness of a random variable if passed values form its sample."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"skewSamp(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a number."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("p",null,"The skewness of the given distribution. Type \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is the size of the sample), then the function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT skewSamp(value) FROM series_with_value_column;\n")))}m.isMDXComponent=!0}}]);