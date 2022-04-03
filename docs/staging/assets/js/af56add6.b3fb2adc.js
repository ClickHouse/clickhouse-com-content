"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68668],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},o),{},{components:n})):a.createElement(k,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:58,sidebar_label:"External Dictionaries"},c=void 0,p={unversionedId:"en/sql-reference/functions/ext-dict-functions",id:"en/sql-reference/functions/ext-dict-functions",title:"ext-dict-functions",description:"For dictionaries created with DDL queries, the dict_name parameter must be fully specified, like .. Otherwise, the current database is used.",source:"@site/docs/en/sql-reference/functions/ext-dict-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/ext-dict-functions",permalink:"/docs/en/sql-reference/functions/ext-dict-functions",tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58,sidebar_label:"External Dictionaries"},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/docs/en/sql-reference/functions/json-functions"},next:{title:"Embedded Dictionaries",permalink:"/docs/en/sql-reference/functions/ym-dict-functions"}},o={},d=[{value:"dictGet, dictGetOrDefault, dictGetOrNull",id:"dictget",level:2},{value:"dictHas",id:"dicthas",level:2},{value:"dictGetHierarchy",id:"dictgethierarchy",level:2},{value:"dictIsIn",id:"dictisin",level:2},{value:"dictGetChildren",id:"dictgetchildren",level:2},{value:"dictGetDescendant",id:"dictgetdescendant",level:2},{value:"Other Functions",id:"ext_dict_functions-other",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For dictionaries created with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/dictionary"},"DDL queries"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"dict_name")," parameter must be fully specified, like ",(0,i.kt)("inlineCode",{parentName:"p"},"<database>.<dict_name>"),". Otherwise, the current database is used."))),(0,i.kt)("h1",{id:"ext_dict_functions"},"Functions for Working with External Dictionaries"),(0,i.kt)("p",null,"For information on connecting and configuring external dictionaries, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"External dictionaries"),"."),(0,i.kt)("h2",{id:"dictget"},"dictGet, dictGetOrDefault, dictGetOrNull"),(0,i.kt)("p",null,"Retrieves values from an external dictionary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGet('dict_name', attr_names, id_expr)\ndictGetOrDefault('dict_name', attr_names, id_expr, default_value_expr)\ndictGetOrNull('dict_name', attr_name, id_expr)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attr_names")," \u2014 Name of the column of the dictionary, ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),", or tuple of column names, ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id_expr")," \u2014 Key value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning dictionary key-type value or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"-type value depending on the dictionary configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_value_expr")," \u2014 Values returned if the dictionary does not contain a row with the ",(0,i.kt)("inlineCode",{parentName:"li"},"id_expr")," key. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression"),"), returning the value (or values) in the data types configured for the ",(0,i.kt)("inlineCode",{parentName:"li"},"attr_names")," attribute.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ClickHouse parses the attribute successfully in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"attribute\u2019s data type"),", functions return the value of the dictionary attribute that corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"id_expr"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there is no the key, corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"id_expr"),", in the dictionary, then:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- `dictGet` returns the content of the `<null_value>` element specified for the attribute in the dictionary configuration.\n- `dictGetOrDefault` returns the value passed as the `default_value_expr` parameter.\n- `dictGetOrNull` returns `NULL` in case key was not found in dictionary.\n")))),(0,i.kt)("p",null,"ClickHouse throws an exception if it cannot parse the value of the attribute or the value does not match the attribute data type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example for simple key dictionary")),(0,i.kt)("p",null,"Create a text file ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-dict-test.csv")," containing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"1,1\n2,2\n")),(0,i.kt)("p",null,"The first column is ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", the second column is ",(0,i.kt)("inlineCode",{parentName:"p"},"c1"),"."),(0,i.kt)("p",null,"Configure the external dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        <name>ext-dict-test</name>\n        <source>\n            <file>\n                <path>/path-to/ext-dict-test.csv</path>\n                <format>CSV</format>\n            </file>\n        </source>\n        <layout>\n            <flat />\n        </layout>\n        <structure>\n            <id>\n                <name>id</name>\n            </id>\n            <attribute>\n                <name>c1</name>\n                <type>UInt32</type>\n                <null_value></null_value>\n            </attribute>\n        </structure>\n        <lifetime>0</lifetime>\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"Perform the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    dictGetOrDefault('ext-dict-test', 'c1', number + 1, toUInt32(number * 10)) AS val,\n    toTypeName(val) AS type\nFROM system.numbers\nLIMIT 3;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u252c\u2500type\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 UInt32 \u2502\n\u2502   2 \u2502 UInt32 \u2502\n\u2502  20 \u2502 UInt32 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example for complex key dictionary")),(0,i.kt)("p",null,"Create a text file ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-dict-mult.csv")," containing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"1,1,'1'\n2,2,'2'\n3,3,'3'\n")),(0,i.kt)("p",null,"The first column is ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", the second is ",(0,i.kt)("inlineCode",{parentName:"p"},"c1"),", the third is ",(0,i.kt)("inlineCode",{parentName:"p"},"c2"),"."),(0,i.kt)("p",null,"Configure the external dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        <name>ext-dict-mult</name>\n        <source>\n            <file>\n                <path>/path-to/ext-dict-mult.csv</path>\n                <format>CSV</format>\n            </file>\n        </source>\n        <layout>\n            <flat />\n        </layout>\n        <structure>\n            <id>\n                <name>id</name>\n            </id>\n            <attribute>\n                <name>c1</name>\n                <type>UInt32</type>\n                <null_value></null_value>\n            </attribute>\n            <attribute>\n                <name>c2</name>\n                <type>String</type>\n                <null_value></null_value>\n            </attribute>\n        </structure>\n        <lifetime>0</lifetime>\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"Perform the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    dictGet('ext-dict-mult', ('c1','c2'), number) AS val,\n    toTypeName(val) AS type\nFROM system.numbers\nLIMIT 3;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (1,'1') \u2502 Tuple(UInt8, String)  \u2502\n\u2502 (2,'2') \u2502 Tuple(UInt8, String)  \u2502\n\u2502 (3,'3') \u2502 Tuple(UInt8, String)  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example for range key dictionary")),(0,i.kt)("p",null,"Input table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE range_key_dictionary_source_table\n(\n    key UInt64,\n    start_date Date,\n    end_date Date,\n    value String,\n    value_nullable Nullable(String)\n)\nENGINE = TinyLog();\n\nINSERT INTO range_key_dictionary_source_table VALUES(1, toDate('2019-05-20'), toDate('2019-05-20'), 'First', 'First');\nINSERT INTO range_key_dictionary_source_table VALUES(2, toDate('2019-05-20'), toDate('2019-05-20'), 'Second', NULL);\nINSERT INTO range_key_dictionary_source_table VALUES(3, toDate('2019-05-20'), toDate('2019-05-20'), 'Third', 'Third');\n")),(0,i.kt)("p",null,"Create the external dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY range_key_dictionary\n(\n    key UInt64,\n    start_date Date,\n    end_date Date,\n    value String,\n    value_nullable Nullable(String)\n)\nPRIMARY KEY key\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'range_key_dictionary_source_table'))\nLIFETIME(MIN 1 MAX 1000)\nLAYOUT(RANGE_HASHED())\nRANGE(MIN start_date MAX end_date);\n")),(0,i.kt)("p",null,"Perform the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    (number, toDate('2019-05-20')),\n    dictHas('range_key_dictionary', number, toDate('2019-05-20')),\n    dictGetOrNull('range_key_dictionary', 'value', number, toDate('2019-05-20')),\n    dictGetOrNull('range_key_dictionary', 'value_nullable', number, toDate('2019-05-20')),\n    dictGetOrNull('range_key_dictionary', ('value', 'value_nullable'), number, toDate('2019-05-20'))\nFROM system.numbers LIMIT 5 FORMAT TabSeparated;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"(0,'2019-05-20')        0       \\N      \\N      (NULL,NULL)\n(1,'2019-05-20')        1       First   First   ('First','First')\n(2,'2019-05-20')        1       Second  \\N      ('Second',NULL)\n(3,'2019-05-20')        1       Third   Third   ('Third','Third')\n(4,'2019-05-20')        0       \\N      \\N      (NULL,NULL)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"External Dictionaries"))),(0,i.kt)("h2",{id:"dicthas"},"dictHas"),(0,i.kt)("p",null,"Checks whether a key is present in a dictionary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictHas('dict_name', id_expr)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id_expr")," \u2014 Key value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning dictionary key-type value or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"-type value depending on the dictionary configuration.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0, if there is no key."),(0,i.kt)("li",{parentName:"ul"},"1, if there is a key.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,i.kt)("h2",{id:"dictgethierarchy"},"dictGetHierarchy"),(0,i.kt)("p",null,"Creates an array, containing all the parents of a key in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical"},"hierarchical dictionary"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetHierarchy('dict_name', key)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Key value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type value.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parents for the key.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array(UInt64)"),"."),(0,i.kt)("h2",{id:"dictisin"},"dictIsIn"),(0,i.kt)("p",null,"Checks the ancestor of a key through the whole hierarchical chain in the dictionary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictIsIn('dict_name', child_id_expr, ancestor_id_expr)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"child_id_expr")," \u2014 Key to be checked. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ancestor_id_expr")," \u2014 Alleged ancestor of the ",(0,i.kt)("inlineCode",{parentName:"li"},"child_id_expr")," key. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type value.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0, if ",(0,i.kt)("inlineCode",{parentName:"li"},"child_id_expr")," is not a child of ",(0,i.kt)("inlineCode",{parentName:"li"},"ancestor_id_expr"),"."),(0,i.kt)("li",{parentName:"ul"},"1, if ",(0,i.kt)("inlineCode",{parentName:"li"},"child_id_expr")," is a child of ",(0,i.kt)("inlineCode",{parentName:"li"},"ancestor_id_expr")," or if ",(0,i.kt)("inlineCode",{parentName:"li"},"child_id_expr")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"ancestor_id_expr"),".")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,i.kt)("h2",{id:"dictgetchildren"},"dictGetChildren"),(0,i.kt)("p",null,"Returns first-level children as an array of indexes. It is the inverse transformation for ",(0,i.kt)("a",{parentName:"p",href:"#dictgethierarchy"},"dictGetHierarchy"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetChildren(dict_name, key)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Key value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type value.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First-level descendants for the key.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Consider the hierarchic dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500parent_id\u2500\u2510\n\u2502  1 \u2502         0 \u2502\n\u2502  2 \u2502         1 \u2502\n\u2502  3 \u2502         1 \u2502\n\u2502  4 \u2502         2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"First-level children:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dictGetChildren('hierarchy_flat_dictionary', number) FROM system.numbers LIMIT 4;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dictGetChildren('hierarchy_flat_dictionary', number)\u2500\u2510\n\u2502 [1]                                                  \u2502\n\u2502 [2,3]                                                \u2502\n\u2502 [4]                                                  \u2502\n\u2502 []                                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"dictgetdescendant"},"dictGetDescendant"),(0,i.kt)("p",null,"Returns all descendants as if ",(0,i.kt)("a",{parentName:"p",href:"#dictgetchildren"},"dictGetChildren")," function was applied ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," times recursively."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetDescendants(dict_name, key, level)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Key value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Hierarchy level. If ",(0,i.kt)("inlineCode",{parentName:"li"},"level = 0")," returns all descendants to the end. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Descendants for the key.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Consider the hierarchic dictionary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500parent_id\u2500\u2510\n\u2502  1 \u2502         0 \u2502\n\u2502  2 \u2502         1 \u2502\n\u2502  3 \u2502         1 \u2502\n\u2502  4 \u2502         2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"All descendants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dictGetDescendants('hierarchy_flat_dictionary', number) FROM system.numbers LIMIT 4;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dictGetDescendants('hierarchy_flat_dictionary', number)\u2500\u2510\n\u2502 [1,2,3,4]                                               \u2502\n\u2502 [2,3,4]                                                 \u2502\n\u2502 [4]                                                     \u2502\n\u2502 []                                                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"First-level descendants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dictGetDescendants('hierarchy_flat_dictionary', number, 1) FROM system.numbers LIMIT 4;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dictGetDescendants('hierarchy_flat_dictionary', number, 1)\u2500\u2510\n\u2502 [1]                                                        \u2502\n\u2502 [2,3]                                                      \u2502\n\u2502 [4]                                                        \u2502\n\u2502 []                                                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"ext_dict_functions-other"},"Other Functions"),(0,i.kt)("p",null,"ClickHouse supports specialized functions that convert dictionary attribute values to a specific data type regardless of the dictionary configuration."),(0,i.kt)("p",null,"Functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetInt8"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetInt16"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetInt32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetInt64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetUInt8"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetUInt16"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetUInt32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetUInt64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetFloat32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dictGetFloat64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetDate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetDateTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetUUID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictGetString"))),(0,i.kt)("p",null,"All these functions have the ",(0,i.kt)("inlineCode",{parentName:"p"},"OrDefault")," modification. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"dictGetDateOrDefault"),"."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGet[Type]('dict_name', 'attr_name', id_expr)\ndictGet[Type]OrDefault('dict_name', 'attr_name', id_expr, default_value_expr)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict_name")," \u2014 Name of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attr_name")," \u2014 Name of the column of the dictionary. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-string-literal"},"String literal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id_expr")," \u2014 Key value. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"-type value depending on the dictionary configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_value_expr")," \u2014 Value returned if the dictionary does not contain a row with the ",(0,i.kt)("inlineCode",{parentName:"li"},"id_expr")," key. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning the value in the data type configured for the ",(0,i.kt)("inlineCode",{parentName:"li"},"attr_name")," attribute.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ClickHouse parses the attribute successfully in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"attribute\u2019s data type"),", functions return the value of the dictionary attribute that corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"id_expr"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there is no requested ",(0,i.kt)("inlineCode",{parentName:"p"},"id_expr")," in the dictionary then:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- `dictGet[Type]` returns the content of the `<null_value>` element specified for the attribute in the dictionary configuration.\n- `dictGet[Type]OrDefault` returns the value passed as the `default_value_expr` parameter.\n")))),(0,i.kt)("p",null,"ClickHouse throws an exception if it cannot parse the value of the attribute or the value does not match the attribute data type."))}m.isMDXComponent=!0}}]);