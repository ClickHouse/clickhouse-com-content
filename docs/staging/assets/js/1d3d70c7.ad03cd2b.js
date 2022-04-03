"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50105],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={},s="text_log",p={unversionedId:"en/operations/system-tables/text_log",id:"en/operations/system-tables/text_log",title:"text_log",description:"systemtables-textlog}",source:"@site/docs/en/operations/system-tables/text_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/text_log",permalink:"/docs/en/operations/system-tables/text_log",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tables",permalink:"/docs/en/operations/system-tables/tables"},next:{title:"time_zones",permalink:"/docs/en/operations/system-tables/time_zones"}},m={},c=[],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-text_log"},"text_log"),(0,a.kt)("p",null,"Contains logging entries. The logging level which goes to this table can be limited to the ",(0,a.kt)("inlineCode",{parentName:"p"},"text_log.level")," server setting."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_date")," (Date) \u2014 Date of the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_time")," (DateTime) \u2014 Time of the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (DateTime) \u2014 Time of the entry with microseconds precision."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"microseconds")," (UInt32) \u2014 Microseconds of the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_name")," (String) \u2014 Name of the thread from which the logging was done."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_id")," (UInt64) \u2014 OS thread ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Enum8"),") \u2014 Entry level. Possible values:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Fatal'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Critical'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Error'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Warning'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"5")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Notice'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Information'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"7")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Debug'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Trace'"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query_id")," (String) \u2014 ID of the query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logger_name")," (LowCardinality(String)) \u2014 Name of the logger (i.e.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"DDLWorker"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," (String) \u2014 The message itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"revision")," (UInt32) \u2014 ClickHouse revision."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_file")," (LowCardinality(String)) \u2014 Source file from which the logging was done."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_line")," (UInt64) \u2014 Source line from which the logging was done.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.text_log LIMIT 1 \\G\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2020-09-10\nevent_time:              2020-09-10 11:23:07\nevent_time_microseconds: 2020-09-10 11:23:07.871397\nmicroseconds:            871397\nthread_name:             clickhouse-serv\nthread_id:               564917\nlevel:                   Information\nquery_id:\nlogger_name:             DNSCacheUpdater\nmessage:                 Update period 15 seconds\nrevision:                54440\nsource_file:             /ClickHouse/src/Interpreters/DNSCacheUpdater.cpp; void DB::DNSCacheUpdater::start()\nsource_line:             45\n")),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/text_log"},"Original article")," "))}d.isMDXComponent=!0}}]);