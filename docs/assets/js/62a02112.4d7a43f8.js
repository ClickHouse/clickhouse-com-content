"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),g=r,d=c["".concat(o,".").concat(g)]||c[g]||p[g]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:50,sidebar_label:"SummingMergeTree"},o="SummingMergeTree",m={unversionedId:"en/engines/table-engines/mergetree-family/summingmergetree",id:"en/engines/table-engines/mergetree-family/summingmergetree",title:"SummingMergeTree",description:"summingmergetree}",source:"@site/docs/en/engines/table-engines/mergetree-family/summingmergetree.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/summingmergetree",permalink:"/docs/docs/en/engines/table-engines/mergetree-family/summingmergetree",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"SummingMergeTree"},sidebar:"tutorialSidebar",previous:{title:"ReplacingMergeTree",permalink:"/docs/docs/en/engines/table-engines/mergetree-family/replacingmergetree"},next:{title:"AggregatingMergeTree",permalink:"/docs/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree"}},u={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Data Processing",id:"data-processing",level:2},{value:"Common Rules for Summation",id:"common-rules-for-summation",level:3},{value:"The Summation in the Aggregatefunction Columns",id:"the-summation-in-the-aggregatefunction-columns",level:3},{value:"Nested Structures",id:"nested-structures",level:3}],c={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"summingmergetree"},"SummingMergeTree"),(0,i.kt)("p",null,"The engine inherits from ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree"),". The difference is that when merging data parts for ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," tables ClickHouse replaces all the rows with the same primary key (or more accurately, with the same ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/mergetree-family/mergetree"},"sorting key"),") with one row which contains summarized values for the columns with the numeric data type. If the sorting key is composed in a way that a single key value corresponds to large number of rows, this significantly reduces storage volume and speeds up data selection."),(0,i.kt)("p",null,"We recommend using the engine together with ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),". Store complete data in ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," table, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," for aggregated data storing, for example, when preparing reports. Such an approach will prevent you from losing valuable data due to an incorrectly composed primary key."),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = SummingMergeTree([columns])\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"For a description of request parameters, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/create/table"},"request description"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters of SummingMergeTree")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"columns")," - a tuple with the names of columns where values will be summarized. Optional parameter.\nThe columns must be of a numeric type and must not be in the primary key."),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," not specified, ClickHouse summarizes the values in all columns with a numeric data type that are not in the primary key."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Query clauses")),(0,i.kt)("p",null,"When creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," table the same ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/mergetree-family/mergetree"},"clauses")," are required, as when creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not use this method in new projects and, if possible, switch the old projects to the method described above."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] SummingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, [columns])\n")),(0,i.kt)("p",null,"All of the parameters excepting ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," have the same meaning as in ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"columns")," \u2014 tuple with names of columns values of which will be summarized. Optional parameter. For a description, see the text above."))),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"Consider the following table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE summtt\n(\n    key UInt32,\n    value UInt32\n)\nENGINE = SummingMergeTree()\nORDER BY key\n")),(0,i.kt)("p",null,"Insert data to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO summtt Values(1,1),(1,2),(2,1)\n")),(0,i.kt)("p",null,"ClickHouse may sum all the rows not completely (",(0,i.kt)("a",{parentName:"p",href:"#data-processing"},"see below"),"), so we use an aggregate function ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause in the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT key, sum(value) FROM summtt GROUP BY key\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500key\u2500\u252c\u2500sum(value)\u2500\u2510\n\u2502   2 \u2502          1 \u2502\n\u2502   1 \u2502          3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"data-processing"},"Data Processing"),(0,i.kt)("p",null,"When data are inserted into a table, they are saved as-is. ClickHouse merges the inserted parts of data periodically and this is when rows with the same primary key are summed and replaced with one for each resulting part of data."),(0,i.kt)("p",null,"ClickHouse can merge the data parts so that different resulting parts of data can consist rows with the same primary key, i.e.\xa0the summation will be incomplete. Therefore (",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),") an aggregate function ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/sum#agg_function-sum"},"sum()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause should be used in a query as described in the example above."),(0,i.kt)("h3",{id:"common-rules-for-summation"},"Common Rules for Summation"),(0,i.kt)("p",null,"The values in the columns with the numeric data type are summarized. The set of columns is defined by the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"columns"),"."),(0,i.kt)("p",null,"If the values were 0 in all of the columns for summation, the row is deleted."),(0,i.kt)("p",null,"If column is not in the primary key and is not summarized, an arbitrary value is selected from the existing ones."),(0,i.kt)("p",null,"The values are not summarized for columns in the primary key."),(0,i.kt)("h3",{id:"the-summation-in-the-aggregatefunction-columns"},"The Summation in the Aggregatefunction Columns"),(0,i.kt)("p",null,"For columns of ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/aggregatefunction"},"AggregateFunction type")," ClickHouse behaves as ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," engine aggregating according to the function."),(0,i.kt)("h3",{id:"nested-structures"},"Nested Structures"),(0,i.kt)("p",null,"Table can have nested data structures that are processed in a special way."),(0,i.kt)("p",null,"If the name of a nested table ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," and it contains at least two columns that meet the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the first column is numeric ",(0,i.kt)("inlineCode",{parentName:"li"},"(*Int*, Date, DateTime)")," or a string ",(0,i.kt)("inlineCode",{parentName:"li"},"(String, FixedString)"),", let\u2019s call it ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),","),(0,i.kt)("li",{parentName:"ul"},"the other columns are arithmetic ",(0,i.kt)("inlineCode",{parentName:"li"},"(*Int*, Float32/64)"),", let\u2019s call it ",(0,i.kt)("inlineCode",{parentName:"li"},"(values...)"),",")),(0,i.kt)("p",null,"then this nested table is interpreted as a mapping of ",(0,i.kt)("inlineCode",{parentName:"p"},"key => (values...)"),", and when merging its rows, the elements of two data sets are merged by ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," with a summation of the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"(values...)"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[(1, 100)] + [(2, 150)] -> [(1, 100), (2, 150)]\n[(1, 100)] + [(1, 150)] -> [(1, 250)]\n[(1, 100)] + [(1, 150), (2, 150)] -> [(1, 250), (2, 150)]\n[(1, 100), (2, 150)] + [(1, -100)] -> [(2, 150)]\n")),(0,i.kt)("p",null,"When requesting data, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/aggregate-functions/reference/summap"},"sumMap(key, value)")," function for aggregation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"."),(0,i.kt)("p",null,"For nested data structure, you do not need to specify its columns in the tuple of columns for summation."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/summingmergetree/"},"Original article")," "))}g.isMDXComponent=!0}}]);