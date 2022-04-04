"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[94059],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="dictionaries",c={unversionedId:"en/operations/system-tables/dictionaries",id:"en/operations/system-tables/dictionaries",title:"dictionaries",description:"system_tables-dictionaries}",source:"@site/docs/en/operations/system-tables/dictionaries.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/dictionaries",permalink:"/docs/en/operations/system-tables/dictionaries",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"detached_parts",permalink:"/docs/en/operations/system-tables/detached_parts"},next:{title:"disks",permalink:"/docs/en/operations/system-tables/disks"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-dictionaries"},"dictionaries"),(0,i.kt)("p",null,"Contains information about ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"external dictionaries"),"."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the database containing the dictionary created by DDL query. Empty string for other dictionaries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},"Dictionary name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uuid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Dictionary UUID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Dictionary status. Possible values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NOT_LOADED")," \u2014 Dictionary was not loaded because it was not used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOADED")," \u2014 Dictionary loaded successfully."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FAILED")," \u2014 Unable to load the dictionary as a result of an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOADING")," \u2014 Dictionary is loading now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOADED_AND_RELOADING")," \u2014 Dictionary is loaded successfully, and is being reloaded right now (frequent reasons: ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/system#query_language-system-reload-dictionary"},"SYSTEM RELOAD DICTIONARY")," query, timeout, dictionary config has changed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FAILED_AND_RELOADING")," \u2014 Could not load the dictionary as a result of an error and is loading now."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the configuration file that describes the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Type of a dictionary allocation. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"Storing Dictionaries in Memory"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key.names")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"key names")," provided by the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key.types")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Corresponding array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"key types")," provided by the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attribute.names")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"attribute names")," provided by the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attribute.types")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Corresponding array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"attribute types")," provided by the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_allocated")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Amount of RAM allocated for the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_count")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of queries since the dictionary was loaded or since the last successful reboot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_rate")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),") \u2014 For cache dictionaries, the percentage of uses for which the value was in the cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"found_rate")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),") \u2014 The percentage of uses for which the value was found."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element_count")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of items stored in the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load_factor")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),") \u2014 Percentage filled in the dictionary (for a hashed dictionary, the percentage filled in the hash table)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Text describing the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"data source")," for the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifetime_min")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Minimum ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," of the dictionary in memory, after which ClickHouse tries to reload the dictionary (if ",(0,i.kt)("inlineCode",{parentName:"li"},"invalidate_query")," is set, then only if it has changed). Set in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifetime_max")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Maximum ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," of the dictionary in memory, after which ClickHouse tries to reload the dictionary (if ",(0,i.kt)("inlineCode",{parentName:"li"},"invalidate_query")," is set, then only if it has changed). Set in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading_start_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Start time for loading the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_successful_update_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 End time for loading or updating the dictionary. Helps to monitor some troubles with external sources and investigate causes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading_duration")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float32"),") \u2014 Duration of a dictionary loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_exception")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Text of the error that occurs when creating or reloading the dictionary if the dictionary couldn\u2019t be created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comment")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Text of the comment to dictionary.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Configure the dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dictionary_with_comment\n(\n    id UInt64,\n    value String\n)\nPRIMARY KEY id\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'source_table'))\nLAYOUT(FLAT())\nLIFETIME(MIN 0 MAX 1000)\nCOMMENT 'The temporary dictionary';\n")),(0,i.kt)("p",null,"Make sure that the dictionary is loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.dictionaries LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                    default\nname:                        dictionary_with_comment\nuuid:                        4654d460-0d03-433a-8654-d4600d03d33a\nstatus:                      NOT_LOADED\norigin:                      4654d460-0d03-433a-8654-d4600d03d33a\ntype:\nkey.names:                   ['id']\nkey.types:                   ['UInt64']\nattribute.names:             ['value']\nattribute.types:             ['String']\nbytes_allocated:             0\nquery_count:                 0\nhit_rate:                    0\nfound_rate:                  0\nelement_count:               0\nload_factor:                 0\nsource:\nlifetime_min:                0\nlifetime_max:                0\nloading_start_time:          1970-01-01 00:00:00\nlast_successful_update_time: 1970-01-01 00:00:00\nloading_duration:            0\nlast_exception:\ncomment:                     The temporary dictionary\n")))}m.isMDXComponent=!0}}]);