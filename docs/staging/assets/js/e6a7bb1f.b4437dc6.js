"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41715],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={},o="columns",p={unversionedId:"en/operations/system-tables/columns",id:"en/operations/system-tables/columns",title:"columns",description:"system-columns}",source:"@site/docs/en/operations/system-tables/columns.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/columns",permalink:"/docs/en/operations/system-tables/columns",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"clusters",permalink:"/docs/en/operations/system-tables/clusters"},next:{title:"contributors",permalink:"/docs/en/operations/system-tables/contributors"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-columns"},"columns"),(0,i.kt)("p",null,"Contains information about columns in all the tables."),(0,i.kt)("p",null,"You can use this table to get information similar to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/misc#misc-describe-table"},"DESCRIBE TABLE")," query, but for multiple tables at once."),(0,i.kt)("p",null,"Columns from ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#temporary-tables"},"temporary tables")," are visible in the ",(0,i.kt)("inlineCode",{parentName:"p"},"system.columns")," only in those session where they have been created. They are shown with the empty ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," field."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"system.columns")," table contains the following columns (the column type is shown in brackets):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Database name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Column name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Column type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Ordinal position of a column in a table starting with 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_kind")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Expression type (",(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MATERIALIZED"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ALIAS"),") for the default value, or an empty string if it is not defined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_expression")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Expression for the default value, or an empty string if it is not defined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of compressed data, in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of decompressed data, in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of marks, in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comment")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Comment on the column, or an empty string if it is not defined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_partition_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the partition expression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_sorting_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the sorting key expression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_primary_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the primary key expression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_sampling_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the sampling key expression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression_codec")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Compression codec name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"character_octet_length")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum length in bytes for binary data, character data, or text data and images. In ClickHouse makes sense only for ",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString")," data type. Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_precision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Accuracy of approximate numeric data, exact numeric data, integer data, or monetary data. In ClickHouse it is bitness for integer types and decimal precision for ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal")," types. Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_precision_radix")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The base of the number system is the accuracy of approximate numeric data, exact numeric data, integer data or monetary data. In ClickHouse it's 2 for integer types and 10 for ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal")," types. Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_scale")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The scale of approximate numeric data, exact numeric data, integer data, or monetary data. In ClickHouse makes sense only for ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal")," types. Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datetime_precision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Decimal precision of ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64")," data type. For other data types, the ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.columns LIMIT 2 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_catalog\ntype:                    String\nposition:                1\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_schema\ntype:                    String\nposition:                2\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/columns"},"Original article")," "))}d.isMDXComponent=!0}}]);