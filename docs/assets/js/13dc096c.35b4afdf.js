"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30079],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"What does \u201cClickHouse\u201d mean?",toc_hidden:!0,toc_priority:10},c="What Does \u201cClickHouse\u201d Mean?",l={unversionedId:"faq/general/dbms-naming",id:"faq/general/dbms-naming",title:"What does \u201cClickHouse\u201d mean?",description:"what-does-clickhouse-mean}",source:"@site/docs/faq/general/dbms-naming.md",sourceDirName:"faq/general",slug:"/faq/general/dbms-naming",permalink:"/docs/docs/faq/general/dbms-naming",tags:[],version:"current",frontMatter:{title:"What does \u201cClickHouse\u201d mean?",toc_hidden:!0,toc_priority:10},sidebar:"tutorialSidebar",previous:{title:"What is a columnar database?",permalink:"/docs/docs/faq/general/columnar-database"},next:{title:"How do I contribute code to ClickHouse?",permalink:"/docs/docs/faq/general/how-do-i-contribute-code-to-clickhouse"}},u={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-does-clickhouse-mean"},"What Does \u201cClickHouse\u201d Mean?"),(0,o.kt)("p",null,"It\u2019s a combination of \u201c",(0,o.kt)("strong",{parentName:"p"},"Click"),"stream\u201d and \u201cData ware",(0,o.kt)("strong",{parentName:"p"},"House"),"\u201d. It comes from the original use case at Yandex.Metrica, where ClickHouse was supposed to keep records of all clicks by people from all over the Internet, and it still does the job. You can read more about this use case on ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/about-us/history"},"ClickHouse history")," page."),(0,o.kt)("p",null,"This two-part meaning has two consequences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The only correct way to write Click",(0,o.kt)("strong",{parentName:"li"},"H"),"ouse is with capital H."),(0,o.kt)("li",{parentName:"ul"},"If you need to abbreviate it, use ",(0,o.kt)("strong",{parentName:"li"},"CH"),". For some historical reasons, abbreviating as CK is also popular in China, mostly because one of the first talks about ClickHouse in Chinese used this form.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Many years after ClickHouse got its name, this approach of combining two words that are meaningful on their own has been highlighted as the best way to name a database in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.cs.cmu.edu/~pavlo/blog/2020/03/on-naming-a-database-management-system.html"},"research by Andy Pavlo"),", an Associate Professor of Databases at Carnegie Mellon University. ClickHouse shared his \u201cbest database name of all time\u201d award with Postgres."))))}d.isMDXComponent=!0}}]);