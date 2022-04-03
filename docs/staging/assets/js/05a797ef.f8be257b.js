"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46535],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l="storage_policies",c={unversionedId:"en/operations/system-tables/storage_policies",id:"en/operations/system-tables/storage_policies",title:"storage_policies",description:"systemtables-storagepolicies}",source:"@site/docs/en/operations/system-tables/storage_policies.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/storage_policies",permalink:"/docs/en/operations/system-tables/storage_policies",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stack_trace",permalink:"/docs/en/operations/system-tables/stack_trace"},next:{title:"table_engines",permalink:"/docs/en/operations/system-tables/table_engines"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-storage_policies"},"storage_policies"),(0,o.kt)("p",null,"Contains information about storage policies and volumes defined in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes_configure"},"server configuration"),"."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"policy_name")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the storage policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume_name")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Volume name defined in the storage policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume_priority")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Volume order number in the configuration, the data fills the volumes according this priority, i.e. data during inserts and merges is written to volumes with a lower priority (taking into account other rules: TTL, ",(0,o.kt)("inlineCode",{parentName:"li"},"max_data_part_size"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"move_factor"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disks")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Disk names, defined in the storage policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_data_part_size")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Maximum size of a data part that can be stored on volume disks (0 \u2014 no limit)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"move_factor")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),") \u2014 Ratio of free disk space. When the ratio exceeds the value of configuration parameter, ClickHouse start to move data to the next volume in order."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefer_not_to_merge")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"prefer_not_to_merge")," setting. When this setting is enabled, merging data on this volume is not allowed. This allows controlling how ClickHouse works with slow disks.")),(0,o.kt)("p",null,"If the storage policy contains more then one volume, then information for each volume is stored in the individual row of the table."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/storage_policies"},"Original article")," "))}f.isMDXComponent=!0}}]);