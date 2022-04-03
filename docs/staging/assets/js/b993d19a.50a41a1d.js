"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28625],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(y,s(s({ref:t},m),{},{components:n})):r.createElement(y,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60919:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={},i="asynchronous_metric_log",c={unversionedId:"en/operations/system-tables/asynchronous_metric_log",id:"en/operations/system-tables/asynchronous_metric_log",title:"asynchronous_metric_log",description:"system-tables-async-log}",source:"@site/docs/en/operations/system-tables/asynchronous_metric_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/asynchronous_metric_log",permalink:"/docs/en/operations/system-tables/asynchronous_metric_log",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System Tables",permalink:"/docs/en/operations/system-tables/"},next:{title:"asynchronous_metrics",permalink:"/docs/en/operations/system-tables/asynchronous_metrics"}},m={},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-tables-async-log"},"asynchronous_metric_log"),(0,o.kt)("p",null,"Contains the historical values for ",(0,o.kt)("inlineCode",{parentName:"p"},"system.asynchronous_metrics"),", which are saved once per minute. Enabled by default."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 Event date."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Event time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Event time with microseconds resolution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Metric name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),") \u2014 Metric value.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.asynchronous_metric_log LIMIT 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500event_date\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u252c\u2500\u2500\u2500\u2500event_time_microseconds\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500value\u2500\u2510\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 CPUFrequencyMHz_0                        \u2502    2120.9 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.arenas.all.pmuzzy               \u2502       743 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.arenas.all.pdirty               \u2502     26288 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.background_thread.run_intervals \u2502         0 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.background_thread.num_runs      \u2502         0 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.retained                        \u2502  60694528 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.mapped                          \u2502 303161344 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.resident                        \u2502 260931584 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.metadata                        \u2502  12079488 \u2502\n\u2502 2020-09-05 \u2502 2020-09-05 15:56:30 \u2502 2020-09-05 15:56:30.025227 \u2502 jemalloc.allocated                       \u2502 133756128 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/asynchronous_metrics"},"system.asynchronous_metrics")," \u2014 Contains metrics, calculated periodically in the background."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/metric_log"},"system.metric_log")," \u2014 Contains history of metrics values from tables ",(0,o.kt)("inlineCode",{parentName:"li"},"system.metrics")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"system.events"),", periodically flushed to disk.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/asynchronous_metric_log"},"Original article")," "))}d.isMDXComponent=!0}}]);