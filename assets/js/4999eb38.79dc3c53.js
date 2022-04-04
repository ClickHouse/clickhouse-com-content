"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72718],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67718:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:37,sidebar_label:"COLUMN"},s="Column Manipulations",p={unversionedId:"en/sql-reference/statements/alter/column",id:"en/sql-reference/statements/alter/column",title:"Column Manipulations",description:"column-manipulations}",source:"@site/docs/en/sql-reference/statements/alter/column.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/column",permalink:"/docs/en/sql-reference/statements/alter/column",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"COLUMN"},sidebar:"tutorialSidebar",previous:{title:"ALTER",permalink:"/docs/en/sql-reference/statements/alter/"},next:{title:"PARTITION",permalink:"/docs/en/sql-reference/statements/alter/partition"}},m={},u=[{value:"ADD COLUMN",id:"alter_add-column",level:2},{value:"DROP COLUMN",id:"alter_drop-column",level:2},{value:"RENAME COLUMN",id:"alter_rename-column",level:2},{value:"CLEAR COLUMN",id:"alter_clear-column",level:2},{value:"COMMENT COLUMN",id:"alter_comment-column",level:2},{value:"MODIFY COLUMN",id:"alter_modify-column",level:2},{value:"MODIFY COLUMN REMOVE",id:"modify-remove",level:2},{value:"MATERIALIZE COLUMN",id:"materialize-column",level:2},{value:"Limitations",id:"alter-query-limitations",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"column-manipulations"},"Column Manipulations"),(0,l.kt)("p",null,"A set of queries that allow changing the table structure."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] ADD|DROP|RENAME|CLEAR|COMMENT|{MODIFY|ALTER}|MATERIALIZE COLUMN ...\n")),(0,l.kt)("p",null,"In the query, specify a list of one or more comma-separated actions.\nEach action is an operation on a column."),(0,l.kt)("p",null,"The following actions are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alter_add-column"},"ADD COLUMN")," \u2014 Adds a new column to the table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alter_drop-column"},"DROP COLUMN")," \u2014 Deletes the column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alter_rename-column"},"RENAME COLUMN")," \u2014 Renames an existing column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alter_clear-column"},"CLEAR COLUMN")," \u2014 Resets column values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alter_comment-column"},"COMMENT COLUMN")," \u2014 Adds a text comment to the column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alter_modify-column"},"MODIFY COLUMN")," \u2014 Changes column\u2019s type, default expression and TTL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#modify-remove"},"MODIFY COLUMN REMOVE")," \u2014 Removes one of the column properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#materialize-column"},"MATERIALIZE COLUMN")," \u2014 Materializes the column in the parts where the column is missing.")),(0,l.kt)("p",null,"These actions are described in detail below."),(0,l.kt)("h2",{id:"alter_add-column"},"ADD COLUMN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ADD COLUMN [IF NOT EXISTS] name [type] [default_expr] [codec] [AFTER name_after | FIRST]\n")),(0,l.kt)("p",null,"Adds a new column to the table with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#codecs"},(0,l.kt)("inlineCode",{parentName:"a"},"codec"))," and ",(0,l.kt)("inlineCode",{parentName:"p"},"default_expr")," (see the section ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#create-default-values"},"Default expressions"),")."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS")," clause is included, the query won\u2019t return an error if the column already exists. If you specify ",(0,l.kt)("inlineCode",{parentName:"p"},"AFTER name_after")," (the name of another column), the column is added after the specified one in the list of table columns. If you want to add a column to the beginning of the table use the ",(0,l.kt)("inlineCode",{parentName:"p"},"FIRST")," clause. Otherwise, the column is added to the end of the table. For a chain of actions, ",(0,l.kt)("inlineCode",{parentName:"p"},"name_after")," can be the name of a column that is added in one of the previous actions."),(0,l.kt)("p",null,"Adding a column just changes the table structure, without performing any actions with data. The data does not appear on the disk after ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER"),". If the data is missing for a column when reading from the table, it is filled in with default values (by performing the default expression if there is one, or using zeros or empty strings). The column appears on the disk after merging data parts (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),")."),(0,l.kt)("p",null,"This approach allows us to complete the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query instantly, without increasing the volume of old data."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE alter_test ADD COLUMN Added1 UInt32 FIRST;\nALTER TABLE alter_test ADD COLUMN Added2 UInt32 AFTER NestedColumn;\nALTER TABLE alter_test ADD COLUMN Added3 UInt32 AFTER ToDrop;\nDESC alter_test FORMAT TSV;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Added1  UInt32\nCounterID       UInt32\nStartDate       Date\nUserID  UInt32\nVisitID UInt32\nNestedColumn.A  Array(UInt8)\nNestedColumn.S  Array(String)\nAdded2  UInt32\nToDrop  UInt32\nAdded3  UInt32\n")),(0,l.kt)("h2",{id:"alter_drop-column"},"DROP COLUMN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP COLUMN [IF EXISTS] name\n")),(0,l.kt)("p",null,"Deletes the column with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),". If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, the query won\u2019t return an error if the column does not exist."),(0,l.kt)("p",null,"Deletes data from the file system. Since this deletes entire files, the query is completed almost instantly."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can\u2019t delete a column if it is referenced by ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#materialized"},"materialized view"),". Otherwise, it returns an error."))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits DROP COLUMN browser\n")),(0,l.kt)("h2",{id:"alter_rename-column"},"RENAME COLUMN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME COLUMN [IF EXISTS] name to new_name\n")),(0,l.kt)("p",null,"Renames the column ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"new_name"),". If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, the query won\u2019t return an error if the column does not exist. Since renaming does not involve the underlying data, the query is completed almost instantly."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": Columns specified in the key expression of the table (either with ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),") cannot be renamed. Trying to change these columns will produce ",(0,l.kt)("inlineCode",{parentName:"p"},"SQL Error [524]"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits RENAME COLUMN webBrowser TO browser\n")),(0,l.kt)("h2",{id:"alter_clear-column"},"CLEAR COLUMN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CLEAR COLUMN [IF EXISTS] name IN PARTITION partition_name\n")),(0,l.kt)("p",null,"Resets all data in a column for a specified partition. Read more about setting the partition name in the section ",(0,l.kt)("a",{parentName:"p",href:"#alter-how-to-specify-part-expr"},"How to specify the partition expression"),"."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, the query won\u2019t return an error if the column does not exist."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits CLEAR COLUMN browser IN PARTITION tuple()\n")),(0,l.kt)("h2",{id:"alter_comment-column"},"COMMENT COLUMN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COMMENT COLUMN [IF EXISTS] name 'Text comment'\n")),(0,l.kt)("p",null,"Adds a comment to the column. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, the query won\u2019t return an error if the column does not exist."),(0,l.kt)("p",null,"Each column can have one comment. If a comment already exists for the column, a new comment overwrites the previous comment."),(0,l.kt)("p",null,"Comments are stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"comment_expression")," column returned by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/misc#misc-describe-table"},"DESCRIBE TABLE")," query."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits COMMENT COLUMN browser 'The table shows the browser used for accessing the site.'\n")),(0,l.kt)("h2",{id:"alter_modify-column"},"MODIFY COLUMN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MODIFY COLUMN [IF EXISTS] name [type] [default_expr] [codec] [TTL] [AFTER name_after | FIRST]\nALTER COLUMN [IF EXISTS] name TYPE [type] [default_expr] [codec] [TTL] [AFTER name_after | FIRST]\n")),(0,l.kt)("p",null,"This query changes the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default expression")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Compression Codec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"TTL"))),(0,l.kt)("p",null,"For examples of columns compression CODECS modifying, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#codecs"},"Column Compression Codecs"),"."),(0,l.kt)("p",null,"For examples of columns TTL modifying, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#mergetree-column-ttl"},"Column TTL"),"."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, the query won\u2019t return an error if the column does not exist."),(0,l.kt)("p",null,"The query also can change the order of the columns using ",(0,l.kt)("inlineCode",{parentName:"p"},"FIRST | AFTER")," clause, see ",(0,l.kt)("a",{parentName:"p",href:"#alter_add-column"},"ADD COLUMN")," description."),(0,l.kt)("p",null,"When changing the type, values are converted as if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/type-conversion-functions"},"toType")," functions were applied to them. If only the default expression is changed, the query does not do anything complex, and is completed almost instantly."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE visits MODIFY COLUMN browser Array(String)\n")),(0,l.kt)("p",null,"Changing the column type is the only complex action \u2013 it changes the contents of files with data. For large tables, this may take a long time."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query is atomic. For MergeTree tables it is also lock-free."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query for changing columns is replicated. The instructions are saved in ZooKeeper, then each replica applies them. All ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," queries are run in the same order. The query waits for the appropriate actions to be completed on the other replicas. However, a query to change columns in a replicated table can be interrupted, and all actions will be performed asynchronously."),(0,l.kt)("h2",{id:"modify-remove"},"MODIFY COLUMN REMOVE"),(0,l.kt)("p",null,"Removes one of the column properties: ",(0,l.kt)("inlineCode",{parentName:"p"},"DEFAULT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIAS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CODEC"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"COMMENT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL"),"."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name MODIFY column_name REMOVE property;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Remove TTL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_ttl MODIFY COLUMN column_ttl REMOVE TTL;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/ttl"},"REMOVE TTL"),".")),(0,l.kt)("h2",{id:"materialize-column"},"MATERIALIZE COLUMN"),(0,l.kt)("p",null,"Materializes or updates a column with an expression for a default value (",(0,l.kt)("inlineCode",{parentName:"p"},"DEFAULT")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),").\nIt is used if it is necessary to add or update a column with a complicated expression, because evaluating such an expression directly on ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," executing turns out to be expensive. "),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table MATERIALIZE COLUMN col;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS tmp;\nSET mutations_sync = 2;\nCREATE TABLE tmp (x Int64) ENGINE = MergeTree() ORDER BY tuple() PARTITION BY tuple();\nINSERT INTO tmp SELECT * FROM system.numbers LIMIT 5;\nALTER TABLE tmp ADD COLUMN s String MATERIALIZED toString(x);\n\nALTER TABLE tmp MATERIALIZE COLUMN s;\n\nSELECT groupArray(x), groupArray(s) FROM (select x,s from tmp order by x);\n\n\u250c\u2500groupArray(x)\u2500\u252c\u2500groupArray(s)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,1,2,3,4]   \u2502 ['0','1','2','3','4'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nALTER TABLE tmp MODIFY COLUMN s String MATERIALIZED toString(round(100/x));\n\nINSERT INTO tmp SELECT * FROM system.numbers LIMIT 5,5;\n\nSELECT groupArray(x), groupArray(s) FROM tmp;\n\n\u250c\u2500groupArray(x)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500groupArray(s)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,1,2,3,4,5,6,7,8,9] \u2502 ['0','1','2','3','4','20','17','14','12','11'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nALTER TABLE tmp MATERIALIZE COLUMN s;\n\nSELECT groupArray(x), groupArray(s) FROM tmp;\n\n\u250c\u2500groupArray(x)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500groupArray(s)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,1,2,3,4,5,6,7,8,9] \u2502 ['inf','100','50','33','25','20','17','14','12','11'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/table#materialized"},"MATERIALIZED"),".")),(0,l.kt)("h2",{id:"alter-query-limitations"},"Limitations"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query lets you create and delete separate elements (columns) in nested data structures, but not whole nested data structures. To add a nested data structure, you can add columns with a name like ",(0,l.kt)("inlineCode",{parentName:"p"},"name.nested_name")," and the type ",(0,l.kt)("inlineCode",{parentName:"p"},"Array(T)"),". A nested data structure is equivalent to multiple array columns with a name that has the same prefix before the dot."),(0,l.kt)("p",null,"There is no support for deleting columns in the primary key or the sampling key (columns that are used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ENGINE")," expression). Changing the type for columns that are included in the primary key is only possible if this change does not cause the data to be modified (for example, you are allowed to add values to an Enum or to change a type from ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt32"),")."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query is not sufficient to make the table changes you need, you can create a new table, copy the data to it using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/insert-into#insert_query_insert-select"},"INSERT SELECT")," query, then switch the tables using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/misc#misc_operations-rename"},"RENAME")," query and delete the old table. You can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-copier"},"clickhouse-copier")," as an alternative to the ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," query."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query blocks all reads and writes for the table. In other words, if a long ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," is running at the time of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query, the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," query will wait for it to complete. At the same time, all new queries to the same table will wait while this ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," is running."),(0,l.kt)("p",null,"For tables that do not store data themselves (such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/"},"Merge")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/"},"Distributed"),"), ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," just changes the table structure, and does not change the structure of subordinate tables. For example, when running ALTER for a ",(0,l.kt)("inlineCode",{parentName:"p"},"Distributed")," table, you will also need to run ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," for the tables on all remote servers."))}d.isMDXComponent=!0}}]);