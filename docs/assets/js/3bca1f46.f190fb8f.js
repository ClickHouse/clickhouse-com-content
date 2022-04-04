"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[83937],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,N=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(N,r(r({ref:t},m),{},{components:n})):a.createElement(N,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={sidebar_label:"JOIN"},s="JOIN Clause",p={unversionedId:"en/sql-reference/statements/select/join",id:"en/sql-reference/statements/select/join",title:"JOIN Clause",description:"select-join}",source:"@site/docs/en/sql-reference/statements/select/join.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/join",permalink:"/docs/docs/en/sql-reference/statements/select/join",tags:[],version:"current",frontMatter:{sidebar_label:"JOIN"},sidebar:"tutorialSidebar",previous:{title:"INTO OUTFILE",permalink:"/docs/docs/en/sql-reference/statements/select/into-outfile"},next:{title:"LIMIT BY",permalink:"/docs/docs/en/sql-reference/statements/select/limit-by"}},m={},d=[{value:"Supported Types of JOIN",id:"select-join-types",level:2},{value:"Settings",id:"join-settings",level:2},{value:"ON Section Conditions",id:"on-section-conditions",level:2},{value:"ASOF JOIN Usage",id:"asof-join-usage",level:2},{value:"Distributed JOIN",id:"global-join",level:2},{value:"Implicit Type Conversion",id:"implicit-type-conversion",level:2},{value:"Usage Recommendations",id:"usage-recommendations",level:2},{value:"Processing of Empty or NULL Cells",id:"processing-of-empty-or-null-cells",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Syntax Limitations",id:"syntax-limitations",level:3},{value:"Performance",id:"performance",level:3},{value:"Memory Limitations",id:"memory-limitations",level:3},{value:"Examples",id:"examples",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"select-join"},"JOIN Clause"),(0,o.kt)("p",null,"Join produces a new table by combining columns from one or multiple tables by using values common to each. It is a common operation in databases with SQL support, which corresponds to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_algebra#Joins_and_join-like_operators"},"relational algebra")," join. The special case of one table join is often referred to as \u201cself-join\u201d."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list>\nFROM <left_table>\n[GLOBAL] [INNER|LEFT|RIGHT|FULL|CROSS] [OUTER|SEMI|ANTI|ANY|ASOF] JOIN <right_table>\n(ON <expr_list>)|(USING <column_list>) ...\n")),(0,o.kt)("p",null,"Expressions from ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," clause and columns from ",(0,o.kt)("inlineCode",{parentName:"p"},"USING")," clause are called \u201cjoin keys\u201d. Unless otherwise stated, join produces a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cartesian_product"},"Cartesian product")," from rows with matching \u201cjoin keys\u201d, which might produce results with much more rows than the source tables."),(0,o.kt)("h2",{id:"select-join-types"},"Supported Types of JOIN"),(0,o.kt)("p",null,"All standard ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Join_(SQL)"},"SQL JOIN")," types are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"INNER JOIN"),", only matching rows are returned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEFT OUTER JOIN"),", non-matching rows from left table are returned in addition to matching rows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RIGHT OUTER JOIN"),", non-matching rows from right table are returned in addition to matching rows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FULL OUTER JOIN"),", non-matching rows from both tables are returned in addition to matching rows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CROSS JOIN"),", produces cartesian product of whole tables, \u201cjoin keys\u201d are ",(0,o.kt)("strong",{parentName:"li"},"not")," specified.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," without specified type implies ",(0,o.kt)("inlineCode",{parentName:"p"},"INNER"),". Keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTER")," can be safely omitted. Alternative syntax for ",(0,o.kt)("inlineCode",{parentName:"p"},"CROSS JOIN")," is specifying multiple tables in ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/from"},"FROM clause")," separated by commas."),(0,o.kt)("p",null,"Additional join types available in ClickHouse:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEFT SEMI JOIN")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"RIGHT SEMI JOIN"),", a whitelist on \u201cjoin keys\u201d, without producing a cartesian product."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEFT ANTI JOIN")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"RIGHT ANTI JOIN"),", a blacklist on \u201cjoin keys\u201d, without producing a cartesian product."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEFT ANY JOIN"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"RIGHT ANY JOIN")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"INNER ANY JOIN"),", partially (for opposite side of ",(0,o.kt)("inlineCode",{parentName:"li"},"LEFT")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"RIGHT"),") or completely (for ",(0,o.kt)("inlineCode",{parentName:"li"},"INNER")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FULL"),") disables the cartesian product for standard ",(0,o.kt)("inlineCode",{parentName:"li"},"JOIN")," types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ASOF JOIN")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"LEFT ASOF JOIN"),", joining sequences with a non-exact match. ",(0,o.kt)("inlineCode",{parentName:"li"},"ASOF JOIN")," usage is described below.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#settings-join_algorithm"},"join_algorithm")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"partial_merge"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RIGHT JOIN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FULL JOIN")," are supported only with ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL")," strictness (",(0,o.kt)("inlineCode",{parentName:"p"},"SEMI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ANTI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ANY"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ASOF")," are not supported)."))),(0,o.kt)("h2",{id:"join-settings"},"Settings"),(0,o.kt)("p",null,"The default join type can be overridden using ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#settings-join_default_strictness"},"join_default_strictness")," setting."),(0,o.kt)("p",null,"The behavior of ClickHouse server for ",(0,o.kt)("inlineCode",{parentName:"p"},"ANY JOIN")," operations depends on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#any_join_distinct_right_table_keys"},"any_join_distinct_right_table_keys")," setting."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#settings-join_algorithm"},"join_algorithm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#settings-join_any_take_last_row"},"join_any_take_last_row")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#join_use_nulls"},"join_use_nulls")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#partial_merge_join_optimizations"},"partial_merge_join_optimizations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#partial_merge_join_rows_in_right_blocks"},"partial_merge_join_rows_in_right_blocks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#join_on_disk_max_files_to_merge"},"join_on_disk_max_files_to_merge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#any_join_distinct_right_table_keys"},"any_join_distinct_right_table_keys"))),(0,o.kt)("h2",{id:"on-section-conditions"},"ON Section Conditions"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," section can contain several conditions combined using the ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operators. Conditions specifying join keys must refer both left and right tables and must use the equality operator. Other conditions may use other logical operators but they must refer either the left or the right table of a query."),(0,o.kt)("p",null,"Rows are joined if the whole complex condition is met. If the conditions are not met, still rows may be included in the result depending on the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," type. Note that if the same conditions are placed in a ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," section and they are not met, then rows are always filtered out from the result."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," clause works using the hash join algorithm \u2014 for each ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," argument with join keys for ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN"),", a separate hash table is created, so memory consumption and query execution time grow linearly with an increase in the number of expressions ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," clause."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a condition refers columns from different tables, then only the equality operator (",(0,o.kt)("inlineCode",{parentName:"p"},"="),") is supported so far."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Consider ",(0,o.kt)("inlineCode",{parentName:"p"},"table_1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"table_2"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500Id\u2500\u252c\u2500name\u2500\u2510     \u250c\u2500Id\u2500\u252c\u2500text\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500scores\u2500\u2510\n\u2502  1 \u2502 A    \u2502     \u2502  1 \u2502 Text A         \u2502     10 \u2502\n\u2502  2 \u2502 B    \u2502     \u2502  1 \u2502 Another text A \u2502     12 \u2502\n\u2502  3 \u2502 C    \u2502     \u2502  2 \u2502 Text B         \u2502     15 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query with one join key condition and an additional condition for ",(0,o.kt)("inlineCode",{parentName:"p"},"table_2"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, text FROM table_1 LEFT OUTER JOIN table_2 \n    ON table_1.Id = table_2.Id AND startsWith(table_2.text, 'Text');\n")),(0,o.kt)("p",null,"Note that the result contains the row with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," and the empty text column. It is included into the result because an ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTER")," type of a join is used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u252c\u2500text\u2500\u2500\u2500\u2510\n\u2502 A    \u2502 Text A \u2502\n\u2502 B    \u2502 Text B \u2502\n\u2502 C    \u2502        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query with ",(0,o.kt)("inlineCode",{parentName:"p"},"INNER")," type of a join and multiple conditions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, text, scores FROM table_1 INNER JOIN table_2 \n    ON table_1.Id = table_2.Id AND table_2.scores > 10 AND startsWith(table_2.text, 'Text');\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u252c\u2500text\u2500\u2500\u2500\u252c\u2500scores\u2500\u2510\n\u2502 B    \u2502 Text B \u2502     15 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query with ",(0,o.kt)("inlineCode",{parentName:"p"},"INNER")," type of a join and condition with ",(0,o.kt)("inlineCode",{parentName:"p"},"OR"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t1 (`a` Int64, `b` Int64) ENGINE = MergeTree() ORDER BY a;\n\nCREATE TABLE t2 (`key` Int32, `val` Int64) ENGINE = MergeTree() ORDER BY key;\n\nINSERT INTO t1 SELECT number as a, -a as b from numbers(5);\n\nINSERT INTO t2 SELECT if(number % 2 == 0, toInt64(number), -number) as key, number as val from numbers(5);\n\nSELECT a, b, val FROM t1 INNER JOIN t2 ON t1.a = t2.key OR t1.b = t2.key;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500a\u2500\u252c\u2500\u2500b\u2500\u252c\u2500val\u2500\u2510\n\u2502 0 \u2502  0 \u2502   0 \u2502\n\u2502 1 \u2502 -1 \u2502   1 \u2502\n\u2502 2 \u2502 -2 \u2502   2 \u2502\n\u2502 3 \u2502 -3 \u2502   3 \u2502\n\u2502 4 \u2502 -4 \u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query with ",(0,o.kt)("inlineCode",{parentName:"p"},"INNER")," type of a join and conditions with ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AND"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, val FROM t1 INNER JOIN t2 ON t1.a = t2.key OR t1.b = t2.key AND t2.val > 3;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500a\u2500\u252c\u2500\u2500b\u2500\u252c\u2500val\u2500\u2510\n\u2502 0 \u2502  0 \u2502   0 \u2502\n\u2502 2 \u2502 -2 \u2502   2 \u2502\n\u2502 4 \u2502 -4 \u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"asof-join-usage"},"ASOF JOIN Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ASOF JOIN")," is useful when you need to join records that have no exact match."),(0,o.kt)("p",null,"Algorithm requires the special column in tables. This column:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must contain an ordered sequence."),(0,o.kt)("li",{parentName:"ul"},"Can be one of the following types: ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/int-uint"},"Int, UInt"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/float"},"Float"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/date"},"Date"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/datetime"},"DateTime"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,o.kt)("li",{parentName:"ul"},"Can\u2019t be the only column in the ",(0,o.kt)("inlineCode",{parentName:"li"},"JOIN")," clause.")),(0,o.kt)("p",null,"Syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"ASOF JOIN ... ON"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT expressions_list\nFROM table_1\nASOF LEFT JOIN table_2\nON equi_cond AND closest_match_cond\n")),(0,o.kt)("p",null,"You can use any number of equality conditions and exactly one closest match condition. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM table_1 ASOF LEFT JOIN table_2 ON table_1.a == table_2.b AND table_2.t <= table_1.t"),"."),(0,o.kt)("p",null,"Conditions supported for the closest match: ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", ",(0,o.kt)("inlineCode",{parentName:"p"},">="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<="),"."),(0,o.kt)("p",null,"Syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"ASOF JOIN ... USING"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT expressions_list\nFROM table_1\nASOF JOIN table_2\nUSING (equi_column1, ... equi_columnN, asof_column)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ASOF JOIN")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"equi_columnX")," for joining on equality and ",(0,o.kt)("inlineCode",{parentName:"p"},"asof_column")," for joining on the closest match with the ",(0,o.kt)("inlineCode",{parentName:"p"},"table_1.asof_column >= table_2.asof_column")," condition. The ",(0,o.kt)("inlineCode",{parentName:"p"},"asof_column")," column is always the last one in the ",(0,o.kt)("inlineCode",{parentName:"p"},"USING")," clause."),(0,o.kt)("p",null,"For example, consider the following tables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"     table_1                           table_2\n  event   | ev_time | user_id       event   | ev_time | user_id\n----------|---------|----------   ----------|---------|----------\n              ...                               ...\nevent_1_1 |  12:00  |  42         event_2_1 |  11:59  |   42\n              ...                 event_2_2 |  12:30  |   42\nevent_1_2 |  13:00  |  42         event_2_3 |  13:00  |   42\n              ...                               ...\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ASOF JOIN")," can take the timestamp of a user event from ",(0,o.kt)("inlineCode",{parentName:"p"},"table_1")," and find an event in ",(0,o.kt)("inlineCode",{parentName:"p"},"table_2")," where the timestamp is closest to the timestamp of the event from ",(0,o.kt)("inlineCode",{parentName:"p"},"table_1")," corresponding to the closest match condition. Equal timestamp values are the closest if available. Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," column can be used for joining on equality and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ev_time")," column can be used for joining on the closest match. In our example, ",(0,o.kt)("inlineCode",{parentName:"p"},"event_1_1")," can be joined with ",(0,o.kt)("inlineCode",{parentName:"p"},"event_2_1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"event_1_2")," can be joined with ",(0,o.kt)("inlineCode",{parentName:"p"},"event_2_3"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"event_2_2")," can\u2019t be joined."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"ASOF")," join is ",(0,o.kt)("strong",{parentName:"p"},"not")," supported in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/special/join"},"Join")," table engine."))),(0,o.kt)("h2",{id:"global-join"},"Distributed JOIN"),(0,o.kt)("p",null,"There are two ways to execute join involving distributed tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using a normal ",(0,o.kt)("inlineCode",{parentName:"li"},"JOIN"),", the query is sent to remote servers. Subqueries are run on each of them in order to make the right table, and the join is performed with this table. In other words, the right table is formed on each server separately."),(0,o.kt)("li",{parentName:"ul"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"GLOBAL ... JOIN"),", first the requestor server runs a subquery to calculate the right table. This temporary table is passed to each remote server, and queries are run on them using the temporary data that was transmitted.")),(0,o.kt)("p",null,"Be careful when using ",(0,o.kt)("inlineCode",{parentName:"p"},"GLOBAL"),". For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/operators/in#select-distributed-subqueries"},"Distributed subqueries")," section."),(0,o.kt)("h2",{id:"implicit-type-conversion"},"Implicit Type Conversion"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INNER JOIN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LEFT JOIN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RIGHT JOIN"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"FULL JOIN"),' queries support the implicit type conversion for "join keys". However the query can not be executed, if join keys from the left and the right tables cannot be converted to a single type (for example, there is no data type that can hold all values from both ',(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Int64"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Int32"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Consider the table ",(0,o.kt)("inlineCode",{parentName:"p"},"t_1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500toTypeName(a)\u2500\u252c\u2500toTypeName(b)\u2500\u2510\n\u2502 1 \u2502 1 \u2502 UInt16        \u2502 UInt8         \u2502\n\u2502 2 \u2502 2 \u2502 UInt16        \u2502 UInt8         \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"and the table ",(0,o.kt)("inlineCode",{parentName:"p"},"t_2"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500a\u2500\u252c\u2500\u2500\u2500\u2500b\u2500\u252c\u2500toTypeName(a)\u2500\u252c\u2500toTypeName(b)\u2500\u2500\u2500\u2510\n\u2502 -1 \u2502    1 \u2502 Int16         \u2502 Nullable(Int64) \u2502\n\u2502  1 \u2502   -1 \u2502 Int16         \u2502 Nullable(Int64) \u2502\n\u2502  1 \u2502    1 \u2502 Int16         \u2502 Nullable(Int64) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, toTypeName(a), toTypeName(b) FROM t_1 FULL JOIN t_2 USING (a, b);\n")),(0,o.kt)("p",null,"returns the set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500a\u2500\u252c\u2500\u2500\u2500\u2500b\u2500\u252c\u2500toTypeName(a)\u2500\u252c\u2500toTypeName(b)\u2500\u2500\u2500\u2510\n\u2502  1 \u2502    1 \u2502 Int32         \u2502 Nullable(Int64) \u2502\n\u2502  2 \u2502    2 \u2502 Int32         \u2502 Nullable(Int64) \u2502\n\u2502 -1 \u2502    1 \u2502 Int32         \u2502 Nullable(Int64) \u2502\n\u2502  1 \u2502   -1 \u2502 Int32         \u2502 Nullable(Int64) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"usage-recommendations"},"Usage Recommendations"),(0,o.kt)("h3",{id:"processing-of-empty-or-null-cells"},"Processing of Empty or NULL Cells"),(0,o.kt)("p",null,"While joining tables, the empty cells may appear. The setting ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#join_use_nulls"},"join_use_nulls")," define how ClickHouse fills these cells."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," keys are ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/nullable"},"Nullable")," fields, the rows where at least one of the keys has the value ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/syntax#null-literal"},"NULL")," are not joined."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"The columns specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"USING")," must have the same names in both subqueries, and the other columns must be named differently. You can use aliases to change the names of columns in subqueries."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"USING")," clause specifies one or more columns to join, which establishes the equality of these columns. The list of columns is set without brackets. More complex join conditions are not supported."),(0,o.kt)("h3",{id:"syntax-limitations"},"Syntax Limitations"),(0,o.kt)("p",null,"For multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," clauses in a single ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," query:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Taking all the columns via ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," is available only if tables are joined, not subqueries."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"PREWHERE")," clause is not available.")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"ON"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clauses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arbitrary expressions cannot be used in ",(0,o.kt)("inlineCode",{parentName:"li"},"ON"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY")," clauses, but you can define an expression in a ",(0,o.kt)("inlineCode",{parentName:"li"},"SELECT")," clause and then use it in these clauses via an alias.")),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,"When running a ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN"),", there is no optimization of the order of execution in relation to other stages of the query. The join (a search in the right table) is run before filtering in ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," and before aggregation."),(0,o.kt)("p",null,"Each time a query is run with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN"),", the subquery is run again because the result is not cached. To avoid this, use the special ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/special/join"},"Join")," table engine, which is a prepared array for joining that is always in RAM."),(0,o.kt)("p",null,"In some cases, it is more efficient to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/operators/in"},"IN")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN"),"."),(0,o.kt)("p",null,"If you need a ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," for joining with dimension tables (these are relatively small tables that contain dimension properties, such as names for advertising campaigns), a ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," might not be very convenient due to the fact that the right table is re-accessed for every query. For such cases, there is an \u201cexternal dictionaries\u201d feature that you should use instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN"),". For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"External dictionaries")," section."),(0,o.kt)("h3",{id:"memory-limitations"},"Memory Limitations"),(0,o.kt)("p",null,"By default, ClickHouse uses the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash_join"},"hash join")," algorithm. ClickHouse takes the right_table and creates a hash table for it in RAM. If ",(0,o.kt)("inlineCode",{parentName:"p"},"join_algorithm = 'auto'")," is enabled, then after some threshold of memory consumption, ClickHouse falls back to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sort-merge_join"},"merge")," join algorithm. For ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," algorithms description see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#settings-join_algorithm"},"join_algorithm")," setting."),(0,o.kt)("p",null,"If you need to restrict ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," operation memory consumption use the following settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/query-complexity#settings-max_rows_in_join"},"max_rows_in_join")," \u2014 Limits number of rows in the hash table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/query-complexity#settings-max_bytes_in_join"},"max_bytes_in_join")," \u2014 Limits size of the hash table.")),(0,o.kt)("p",null,"When any of these limits is reached, ClickHouse acts as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/query-complexity#settings-join_overflow_mode"},"join_overflow_mode")," setting instructs."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    CounterID,\n    hits,\n    visits\nFROM\n(\n    SELECT\n        CounterID,\n        count() AS hits\n    FROM test.hits\n    GROUP BY CounterID\n) ANY LEFT JOIN\n(\n    SELECT\n        CounterID,\n        sum(Sign) AS visits\n    FROM test.visits\n    GROUP BY CounterID\n) USING CounterID\nORDER BY hits DESC\nLIMIT 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500CounterID\u2500\u252c\u2500\u2500\u2500hits\u2500\u252c\u2500visits\u2500\u2510\n\u2502   1143050 \u2502 523264 \u2502  13665 \u2502\n\u2502    731962 \u2502 475698 \u2502 102716 \u2502\n\u2502    722545 \u2502 337212 \u2502 108187 \u2502\n\u2502    722889 \u2502 252197 \u2502  10547 \u2502\n\u2502   2237260 \u2502 196036 \u2502   9522 \u2502\n\u2502  23057320 \u2502 147211 \u2502   7689 \u2502\n\u2502    722818 \u2502  90109 \u2502  17847 \u2502\n\u2502     48221 \u2502  85379 \u2502   4652 \u2502\n\u2502  19762435 \u2502  77807 \u2502   7026 \u2502\n\u2502    722884 \u2502  77492 \u2502  11056 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);