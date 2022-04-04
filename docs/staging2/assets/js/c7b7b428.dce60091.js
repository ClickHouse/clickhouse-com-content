"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[39916],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},28835:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"What is a columnar database?",toc_hidden:!0,toc_priority:101},l="What Is a Columnar Database?",c={unversionedId:"faq/general/columnar-database",id:"faq/general/columnar-database",title:"What is a columnar database?",description:"what-is-a-columnar-database}",source:"@site/docs/faq/general/columnar-database.md",sourceDirName:"faq/general",slug:"/faq/general/columnar-database",permalink:"/docs/staging2/docs/faq/general/columnar-database",tags:[],version:"current",frontMatter:{title:"What is a columnar database?",toc_hidden:!0,toc_priority:101},sidebar:"tutorialSidebar",previous:{title:"General Questions about ClickHouse",permalink:"/docs/staging2/docs/faq/general/"},next:{title:"What does \u201cClickHouse\u201d mean?",permalink:"/docs/staging2/docs/faq/general/dbms-naming"}},u={},d=[],p={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-columnar-database"},"What Is a Columnar Database?"),(0,o.kt)("p",null,"A columnar database stores data of each column independently. This allows to read data from disks only for those columns that are used in any given query. The cost is that operations that affect whole rows become proportionally more expensive. The synonym for a columnar database is a column-oriented database management system. ClickHouse is a typical example of such a system."),(0,o.kt)("p",null,"Key columnar database advantages are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Queries that use only a few columns out of many."),(0,o.kt)("li",{parentName:"ul"},"Aggregating queries against large volumes of data."),(0,o.kt)("li",{parentName:"ul"},"Column-wise data compression.")),(0,o.kt)("p",null,"Here is the illustration of the difference between traditional row-oriented systems and columnar databases when building reports:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Traditional row-oriented"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://clickhouse.com/docs/en/images/row-oriented.gif#",alt:"Traditional row-oriented"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Columnar"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://clickhouse.com/docs/en/images/column-oriented.gif#",alt:"Columnar"})),(0,o.kt)("p",null,"A columnar database is a preferred choice for analytical applications because it allows to have many columns in a table just in case, but do not pay the cost for unused columns on read query execution time. Column-oriented databases are designed for big data processing because and data warehousing, they often natively scale using distributed clusters of low-cost hardware to increase throughput. ClickHouse does it with combination of ",(0,o.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/engines/table-engines/special/distributed"},"distributed")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," tables."))}m.isMDXComponent=!0}}]);