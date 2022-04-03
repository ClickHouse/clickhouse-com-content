"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65731],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83453:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={},p="tables",o={unversionedId:"en/operations/system-tables/tables",id:"en/operations/system-tables/tables",title:"tables",description:"system-tables}",source:"@site/docs/en/operations/system-tables/tables.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/tables",permalink:"/docs/en/operations/system-tables/tables",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"table_engines",permalink:"/docs/en/operations/system-tables/table_engines"},next:{title:"text_log",permalink:"/docs/en/operations/system-tables/text_log"}},m={},d=[],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-tables"},"tables"),(0,i.kt)("p",null,"Contains metadata of each table that the server knows about."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/detach"},"Detached")," tables are not shown in ",(0,i.kt)("inlineCode",{parentName:"p"},"system.tables"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#temporary-tables"},"Temporary tables")," are visible in the ",(0,i.kt)("inlineCode",{parentName:"p"},"system.tables")," only in those session where they have been created. They are shown with the empty ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," field and with the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_temporary")," flag switched on."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the database the table is in.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Table name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Table engine name (without parameters).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_temporary")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") - Flag that indicates whether the table is temporary.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_path")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - Path to the table data in the file system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"metadata_path")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - Path to the table metadata in the file system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"metadata_modification_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") - Time of latest modification of the table metadata.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dependencies_database")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) - Database dependencies.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dependencies_table")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) - Table dependencies (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/materializedview"},"MaterializedView")," tables based on the current table).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"create_table_query")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The query that was used to create the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine_full")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - Parameters of the table engine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"as_select")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query for view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition_key")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The partition key expression specified in the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sorting_key")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The sorting key expression specified in the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"primary_key")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The primary key expression specified in the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sampling_key")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The sampling key expression specified in the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"storage_policy")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The storage policy:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"MergeTree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/distributed#distributed"},"Distributed")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"total_rows")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) - Total number of rows, if it is possible to quickly determine exact number of rows in the table, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," (including underying ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," table).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"total_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) - Total number of bytes, if it is possible to quickly determine exact number of bytes for the table on storage, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," (does not includes any underlying storage)."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the table stores data on disk, returns used space on disk (i.e.\xa0compressed)."),(0,i.kt)("li",{parentName:"ul"},"If the table stores data in memory, returns approximated number of used bytes in memory."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lifetime_rows")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) - Total number of rows INSERTed since server start (only for ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," tables).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lifetime_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) - Total number of bytes INSERTed since server start (only for ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," tables).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"comment")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") - The comment for the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"has_own_data")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the table itself stores some data on disk or only accesses some other source."))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"system.tables")," table is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," query implementation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.tables LIMIT 2 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                   base\nname:                       t1\nuuid:                       81b1c20a-b7c6-4116-a2ce-7583fb6b6736\nengine:                     MergeTree\nis_temporary:               0\ndata_paths:                 ['/var/lib/clickhouse/store/81b/81b1c20a-b7c6-4116-a2ce-7583fb6b6736/']\nmetadata_path:              /var/lib/clickhouse/store/461/461cf698-fd0b-406d-8c01-5d8fd5748a91/t1.sql\nmetadata_modification_time: 2021-01-25 19:14:32\ndependencies_database:      []\ndependencies_table:         []\ncreate_table_query:         CREATE TABLE base.t1 (`n` UInt64) ENGINE = MergeTree ORDER BY n SETTINGS index_granularity = 8192\nengine_full:                MergeTree ORDER BY n SETTINGS index_granularity = 8192\nas_select:                  SELECT database AS table_catalog\npartition_key:\nsorting_key:                n\nprimary_key:                n\nsampling_key:\nstorage_policy:             default\ntotal_rows:                 1\ntotal_bytes:                99\nlifetime_rows:              \u1d3a\u1d41\u1d38\u1d38\nlifetime_bytes:             \u1d3a\u1d41\u1d38\u1d38\ncomment:\nhas_own_data:               0\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                   default\nname:                       53r93yleapyears\nuuid:                       00000000-0000-0000-0000-000000000000\nengine:                     MergeTree\nis_temporary:               0\ndata_paths:                 ['/var/lib/clickhouse/data/default/53r93yleapyears/']\nmetadata_path:              /var/lib/clickhouse/metadata/default/53r93yleapyears.sql\nmetadata_modification_time: 2020-09-23 09:05:36\ndependencies_database:      []\ndependencies_table:         []\ncreate_table_query:         CREATE TABLE default.`53r93yleapyears` (`id` Int8, `febdays` Int8) ENGINE = MergeTree ORDER BY id SETTINGS index_granularity = 8192\nengine_full:                MergeTree ORDER BY id SETTINGS index_granularity = 8192\nas_select:                  SELECT name AS catalog_name\npartition_key:\nsorting_key:                id\nprimary_key:                id\nsampling_key:\nstorage_policy:             default\ntotal_rows:                 2\ntotal_bytes:                155\nlifetime_rows:              \u1d3a\u1d41\u1d38\u1d38\nlifetime_bytes:             \u1d3a\u1d41\u1d38\u1d38\ncomment:\nhas_own_data:               0\n")))}u.isMDXComponent=!0}}]);