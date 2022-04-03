"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65209],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29641:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={sidebar_position:65,sidebar_label:"Caches"},s="Cache Types",l={unversionedId:"en/operations/caches",id:"en/operations/caches",title:"Cache Types",description:"cache-types}",source:"@site/docs/en/operations/caches.md",sourceDirName:"en/operations",slug:"/en/operations/caches",permalink:"/docs/en/operations/caches",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"Caches"},sidebar:"tutorialSidebar",previous:{title:"OpenTelemetry Support",permalink:"/docs/en/operations/opentelemetry"},next:{title:"ClickHouse Keeper",permalink:"/docs/en/operations/clickhouse-keeper"}},p={},u=[],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cache-types"},"Cache Types"),(0,o.kt)("p",null,"When performing queries, ClichHouse uses different caches."),(0,o.kt)("p",null,"Main cache types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mark_cache")," \u2014 Cache of marks used by table engines of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uncompressed_cache")," \u2014 Cache of uncompressed data used by table engines of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family.")),(0,o.kt)("p",null,"Additional cache types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DNS cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-regexp"},"Regexp")," cache."),(0,o.kt)("li",{parentName:"ul"},"Compiled expressions cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-avro"},"Avro format")," schemas cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/"},"Dictionaries")," data cache.")),(0,o.kt)("p",null,"Indirectly used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS page cache.")),(0,o.kt)("p",null,"To drop cache, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/system"},"SYSTEM DROP ... CACHE")," statements."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/caches/"},"Original article")," "))}m.isMDXComponent=!0}}]);