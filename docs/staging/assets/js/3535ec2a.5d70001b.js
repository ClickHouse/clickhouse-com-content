"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[89725],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_label:"FROM"},o="FROM Clause",c={unversionedId:"en/sql-reference/statements/select/from",id:"en/sql-reference/statements/select/from",title:"FROM Clause",description:"select-from}",source:"@site/docs/en/sql-reference/statements/select/from.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/from",permalink:"/docs/en/sql-reference/statements/select/from",tags:[],version:"current",frontMatter:{sidebar_label:"FROM"},sidebar:"tutorialSidebar",previous:{title:"FORMAT",permalink:"/docs/en/sql-reference/statements/select/format"},next:{title:"GROUP BY",permalink:"/docs/en/sql-reference/statements/select/group-by"}},u={},p=[{value:"FINAL Modifier",id:"select-from-final",level:2},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Implementation Details",id:"implementation-details",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"select-from"},"FROM Clause"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," clause specifies the source to read data from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/"},"Table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/"},"Subquery")," {## TODO: better link ##}"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/#table-functions"},"Table function"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join"},"JOIN")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/array-join"},"ARRAY JOIN")," clauses may also be used to extend the functionality of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," clause."),(0,i.kt)("p",null,"Subquery is another ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query that may be specified in parenthesis inside ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," clause."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," clause can contain multiple data sources, separated by commas, which is equivalent of performing ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join"},"CROSS JOIN")," on them."),(0,i.kt)("h2",{id:"select-from-final"},"FINAL Modifier"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"FINAL")," is specified, ClickHouse fully merges the data before returning the result and thus performs all data transformations that happen during merges for the given table engine."),(0,i.kt)("p",null,"It is applicable when selecting data from tables that use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"-engine family. Also supported for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"Replicated")," versions of ",(0,i.kt)("inlineCode",{parentName:"li"},"MergeTree")," engines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/view"},"View"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/buffer"},"Buffer"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed"),", and ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/materializedview"},"MaterializedView")," engines that operate over other engines, provided they were created over ",(0,i.kt)("inlineCode",{parentName:"li"},"MergeTree"),"-engine tables.")),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries with ",(0,i.kt)("inlineCode",{parentName:"p"},"FINAL")," are executed in parallel and slightly faster. But there are drawbacks (see below). The ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/#max-final-threads"},"max_final_threads")," setting limits the number of threads used."),(0,i.kt)("h3",{id:"drawbacks"},"Drawbacks"),(0,i.kt)("p",null,"Queries that use ",(0,i.kt)("inlineCode",{parentName:"p"},"FINAL")," are executed slightly slower than similar queries that do not, because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data is merged during query execution."),(0,i.kt)("li",{parentName:"ul"},"Queries with ",(0,i.kt)("inlineCode",{parentName:"li"},"FINAL")," read primary key columns in addition to the columns specified in the query.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In most cases, avoid using ",(0,i.kt)("inlineCode",{parentName:"strong"},"FINAL"),".")," The common approach is to use different queries that assume the background processes of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," engine have\u2019t happened yet and deal with it by applying aggregation (for example, to discard duplicates). {## TODO: examples ##}"),(0,i.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," clause is omitted, data will be read from the ",(0,i.kt)("inlineCode",{parentName:"p"},"system.one")," table.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"system.one")," table contains exactly one row (this table fulfills the same purpose as the DUAL table found in other DBMSs)."),(0,i.kt)("p",null,"To execute a query, all the columns listed in the query are extracted from the appropriate table. Any columns not needed for the external query are thrown out of the subqueries.\nIf a query does not list any columns (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM t"),"), some column is extracted from the table anyway (the smallest one is preferred), in order to calculate the number of rows."))}f.isMDXComponent=!0}}]);