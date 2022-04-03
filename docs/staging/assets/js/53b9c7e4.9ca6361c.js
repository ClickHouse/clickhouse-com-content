"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[47622],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82515:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:68,sidebar_label:"Time Window"},p="Time Window Functions",u={unversionedId:"en/sql-reference/functions/time-window-functions",id:"en/sql-reference/functions/time-window-functions",title:"Time Window Functions",description:"time-window-functions}",source:"@site/docs/en/sql-reference/functions/time-window-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/time-window-functions",permalink:"/docs/en/sql-reference/functions/time-window-functions",tags:[],version:"current",sidebarPosition:68,frontMatter:{sidebar_position:68,sidebar_label:"Time Window"},sidebar:"tutorialSidebar",previous:{title:"Other",permalink:"/docs/en/sql-reference/functions/other-functions"},next:{title:"Aggregate Functions",permalink:"/docs/en/sql-reference/aggregate-functions/"}},s={},c=[{value:"tumble",id:"time-window-functions-tumble",level:2},{value:"hop",id:"time-window-functions-hop",level:2},{value:"tumbleStart",id:"time-window-functions-tumblestart",level:2},{value:"tumbleEnd",id:"time-window-functions-tumbleend",level:2},{value:"hopStart",id:"time-window-functions-hopstart",level:2},{value:"hopEnd",id:"time-window-functions-hopend",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-window-functions"},"Time Window Functions"),(0,a.kt)("p",null,"Time window functions return the inclusive lower and exclusive upper bound of the corresponding window. The functions for working with WindowView are listed below:"),(0,a.kt)("h2",{id:"time-window-functions-tumble"},"tumble"),(0,a.kt)("p",null,"A tumbling time window assigns records to non-overlapping, continuous windows with a fixed duration (",(0,a.kt)("inlineCode",{parentName:"p"},"interval"),"). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"tumble(time_attr, interval [, timezone])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time_attr")," - Date and time. ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," data type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval")," - Window interval in ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timezone")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"Timezone name")," (optional). ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The inclusive lower and exclusive upper bound of the corresponding tumbling window.")),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple(DateTime, DateTime)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tumble(now(), toIntervalDay('1'))\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tumble(now(), toIntervalDay('1'))\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['2020-01-01 00:00:00','2020-01-02 00:00:00'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"time-window-functions-hop"},"hop"),(0,a.kt)("p",null,"A hopping time window has a fixed duration (",(0,a.kt)("inlineCode",{parentName:"p"},"window_interval"),") and hops by a specified hop interval (",(0,a.kt)("inlineCode",{parentName:"p"},"hop_interval"),"). If the ",(0,a.kt)("inlineCode",{parentName:"p"},"hop_interval")," is smaller than the ",(0,a.kt)("inlineCode",{parentName:"p"},"window_interval"),", hopping windows are overlapping. Thus, records can be assigned to multiple windows. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"hop(time_attr, hop_interval, window_interval [, timezone])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time_attr")," - Date and time. ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," data type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hop_interval")," - Hop interval in ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type. Should be a positive number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window_interval")," - Window interval in ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type. Should be a positive number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timezone")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"Timezone name")," (optional). ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The inclusive lower and exclusive upper bound of the corresponding hopping window. Since one record can be assigned to multiple hop windows, the function only returns the bound of the ",(0,a.kt)("strong",{parentName:"li"},"first")," window when hop function is used ",(0,a.kt)("strong",{parentName:"li"},"without")," ",(0,a.kt)("inlineCode",{parentName:"li"},"WINDOW VIEW"),".")),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple(DateTime, DateTime)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hop(now(), INTERVAL '1' SECOND, INTERVAL '2' SECOND)\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hop(now(), toIntervalSecond('1'), toIntervalSecond('2'))\u2500\u2500\u2510\n\u2502 ('2020-01-14 16:58:22','2020-01-14 16:58:24')             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"time-window-functions-tumblestart"},"tumbleStart"),(0,a.kt)("p",null,"Returns the inclusive lower bound of the corresponding tumbling window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"tumbleStart(time_attr, interval [, timezone]);\n")),(0,a.kt)("h2",{id:"time-window-functions-tumbleend"},"tumbleEnd"),(0,a.kt)("p",null,"Returns the exclusive upper bound of the corresponding tumbling window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"tumbleEnd(time_attr, interval [, timezone]);\n")),(0,a.kt)("h2",{id:"time-window-functions-hopstart"},"hopStart"),(0,a.kt)("p",null,"Returns the inclusive lower bound of the corresponding hopping window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"hopStart(time_attr, hop_interval, window_interval [, timezone]);\n")),(0,a.kt)("h2",{id:"time-window-functions-hopend"},"hopEnd"),(0,a.kt)("p",null,"Returns the exclusive upper bound of the corresponding hopping window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"hopEnd(time_attr, hop_interval, window_interval [, timezone]);\n")))}m.isMDXComponent=!0}}]);