"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32609],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"What is OLAP?",toc_hidden:!0,toc_priority:100},l="What Is OLAP?",c={unversionedId:"faq/general/olap",id:"faq/general/olap",title:"What is OLAP?",description:"what-is-olap}",source:"@site/docs/faq/general/olap.md",sourceDirName:"faq/general",slug:"/faq/general/olap",permalink:"/docs/faq/general/olap",tags:[],version:"current",frontMatter:{title:"What is OLAP?",toc_hidden:!0,toc_priority:100},sidebar:"tutorialSidebar",previous:{title:"What does \u201c\u043d\u0435 \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442\u201d mean?",permalink:"/docs/faq/general/ne-tormozit"},next:{title:"Who is using ClickHouse?",permalink:"/docs/faq/general/who-is-using-clickhouse"}},u={},p=[{value:"OLAP from the Business Perspective",id:"olap-from-the-business-perspective",level:2},{value:"OLAP from the Technical Perspective",id:"olap-from-the-technical-perspective",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-olap"},"What Is OLAP?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_analytical_processing"},"OLAP")," stands for Online Analytical Processing. It is a broad term that can be looked at from two perspectives: technical and business. But at the very high level, you can just read these words backward:"),(0,o.kt)("p",null,"Processing\n:   Some source data is processed\u2026"),(0,o.kt)("p",null,"Analytical\n:   \u2026to produce some analytical reports and insights\u2026"),(0,o.kt)("p",null,"Online\n:   \u2026in real-time."),(0,o.kt)("h2",{id:"olap-from-the-business-perspective"},"OLAP from the Business Perspective"),(0,o.kt)("p",null,"In recent years, business people started to realize the value of data. Companies who make their decisions blindly, more often than not fail to keep up with the competition. The data-driven approach of successful companies forces them to collect all data that might be remotely useful for making business decisions and need mechanisms to timely analyze them. Here\u2019s where OLAP database management systems (DBMS) come in."),(0,o.kt)("p",null,"In a business sense, OLAP allows companies to continuously plan, analyze, and report operational activities, thus maximizing efficiency, reducing expenses, and ultimately conquering the market share. It could be done either in an in-house system or outsourced to SaaS providers like web/mobile analytics services, CRM services, etc. OLAP is the technology behind many BI applications (Business Intelligence)."),(0,o.kt)("p",null,"ClickHouse is an OLAP database management system that is pretty often used as a backend for those SaaS solutions for analyzing domain-specific data. However, some businesses are still reluctant to share their data with third-party providers and an in-house data warehouse scenario is also viable."),(0,o.kt)("h2",{id:"olap-from-the-technical-perspective"},"OLAP from the Technical Perspective"),(0,o.kt)("p",null,"All database management systems could be classified into two groups: OLAP (Online ",(0,o.kt)("strong",{parentName:"p"},"Analytical")," Processing) and OLTP (Online ",(0,o.kt)("strong",{parentName:"p"},"Transactional")," Processing). Former focuses on building reports, each based on large volumes of historical data, but doing it not so frequently. While the latter usually handle a continuous stream of transactions, constantly modifying the current state of data."),(0,o.kt)("p",null,"In practice OLAP and OLTP are not categories, it\u2019s more like a spectrum. Most real systems usually focus on one of them but provide some solutions or workarounds if the opposite kind of workload is also desired. This situation often forces businesses to operate multiple storage systems integrated, which might be not so big deal but having more systems make it more expensive to maintain. So the trend of recent years is HTAP (",(0,o.kt)("strong",{parentName:"p"},"Hybrid Transactional/Analytical Processing"),") when both kinds of the workload are handled equally well by a single database management system."),(0,o.kt)("p",null,"Even if a DBMS started as a pure OLAP or pure OLTP, they are forced to move towards that HTAP direction to keep up with their competition. And ClickHouse is no exception, initially, it has been designed as ",(0,o.kt)("a",{parentName:"p",href:"/docs/faq/general/why-clickhouse-is-so-fast"},"fast-as-possible OLAP system")," and it still does not have full-fledged transaction support, but some features like consistent read/writes and mutations for updating/deleting data had to be added."),(0,o.kt)("p",null,"The fundamental trade-off between OLAP and OLTP systems remains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To build analytical reports efficiently it\u2019s crucial to be able to read columns separately, thus most OLAP databases are ",(0,o.kt)("a",{parentName:"li",href:"/docs/faq/general/columnar-database"},"columnar"),","),(0,o.kt)("li",{parentName:"ul"},"While storing columns separately increases costs of operations on rows, like append or in-place modification, proportionally to the number of columns (which can be huge if the systems try to collect all details of an event just in case). Thus, most OLTP systems store data arranged by rows.")))}m.isMDXComponent=!0}}]);