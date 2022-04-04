"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20747],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85693:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={},l="processes",u={unversionedId:"en/operations/system-tables/processes",id:"en/operations/system-tables/processes",title:"processes",description:"system_tables-processes}",source:"@site/docs/en/operations/system-tables/processes.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/processes",permalink:"/docs/docs/en/operations/system-tables/processes",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"parts_columns",permalink:"/docs/docs/en/operations/system-tables/parts_columns"},next:{title:"query_log",permalink:"/docs/docs/en/operations/system-tables/query_log"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-processes"},"processes"),(0,o.kt)("p",null,"This system table is used for implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST")," query."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," (String) \u2013 The user who made the query. Keep in mind that for distributed processing, queries are sent to remote servers under the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," user. The field contains the username for a specific query, not for a query that this query initiated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address")," (String) \u2013 The IP address the request was made from. The same for distributed processing. To track where a distributed query was originally made from, look at ",(0,o.kt)("inlineCode",{parentName:"li"},"system.processes")," on the query requestor server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2013 The time in seconds since request execution started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2013 The number of rows read from the table. For distributed processing, on the requestor server, this is the total for all remote servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes_read")," (UInt64) \u2013 The number of uncompressed bytes read from the table. For distributed processing, on the requestor server, this is the total for all remote servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"total_rows_approx")," (UInt64) \u2013 The approximation of the total number of rows that should be read. For distributed processing, on the requestor server, this is the total for all remote servers. It can be updated during request processing, when new sources to process become known."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memory_usage")," (UInt64) \u2013 Amount of RAM the request uses. It might not include some types of dedicated memory. See the ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/query-complexity#settings_max_memory_usage"},"max_memory_usage")," setting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," (String) \u2013 The query text. For ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT"),", it does not include the data to insert."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query_id")," (String) \u2013 Query ID, if defined.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.processes LIMIT 10 FORMAT Vertical;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nis_initial_query:     1\nuser:                 default\nquery_id:             35a360fa-3743-441d-8e1f-228c938268da\naddress:              ::ffff:172.23.0.1\nport:                 47588\ninitial_user:         default\ninitial_query_id:     35a360fa-3743-441d-8e1f-228c938268da\ninitial_address:      ::ffff:172.23.0.1\ninitial_port:         47588\ninterface:            1\nos_user:              bharatnc\nclient_hostname:      tower\nclient_name:          ClickHouse\nclient_revision:      54437\nclient_version_major: 20\nclient_version_minor: 7\nclient_version_patch: 2\nhttp_method:          0\nhttp_user_agent:\nquota_key:\nelapsed:              0.000582537\nis_cancelled:         0\nread_rows:            0\nread_bytes:           0\ntotal_rows_approx:    0\nwritten_rows:         0\nwritten_bytes:        0\nmemory_usage:         0\npeak_memory_usage:    0\nquery:                SELECT * from system.processes LIMIT 10 FORMAT Vertical;\nthread_ids:           [67]\nProfileEvents:        {'Query':1,'SelectQuery':1,'ReadCompressedBytes':36,'CompressedReadBufferBlocks':1,'CompressedReadBufferBytes':10,'IOBufferAllocs':1,'IOBufferAllocBytes':89,'ContextLock':15,'RWLockAcquiredReadLocks':1}\nSettings:             {'background_pool_size':'32','load_balancing':'random','allow_suspicious_low_cardinality_types':'1','distributed_aggregation_memory_efficient':'1','skip_unavailable_shards':'1','log_queries':'1','max_bytes_before_external_group_by':'20000000000','max_bytes_before_external_sort':'20000000000','allow_introspection_functions':'1'}\n\n1 rows in set. Elapsed: 0.002 sec.\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/processes"},"Original article")," "))}d.isMDXComponent=!0}}]);