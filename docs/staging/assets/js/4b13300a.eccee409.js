"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40148],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),r=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=r(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=r(t),p=o,g=d["".concat(l,".").concat(p)]||d[p]||u[p]||s;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var r=2;r<s;r++)i[r]=t[r];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70757:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return u}});var a=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],c={sidebar_position:69,sidebar_label:"Named connections"},l="Storing details for connecting to external sources in configuration files",r={unversionedId:"en/operations/named-collections",id:"en/operations/named-collections",title:"Storing details for connecting to external sources in configuration files",description:"named-collections}",source:"@site/docs/en/operations/named-collections.md",sourceDirName:"en/operations",slug:"/en/operations/named-collections",permalink:"/docs/en/operations/named-collections",tags:[],version:"current",sidebarPosition:69,frontMatter:{sidebar_position:69,sidebar_label:"Named connections"},sidebar:"tutorialSidebar",previous:{title:"External Disks for Storing Data",permalink:"/docs/en/operations/storing-data"},next:{title:"Building ClickHouse",permalink:"/docs/category/building-clickhouse"}},m={},u=[{value:"Named connections for accessing S3.",id:"named-connections-for-accessing-s3",level:2},{value:"Example of using named connections with the s3 function",id:"example-of-using-named-connections-with-the-s3-function",level:3},{value:"Example of using named connections with an S3 table",id:"example-of-using-named-connections-with-an-s3-table",level:3},{value:"Named connections for accessing MySQL database",id:"named-connections-for-accessing-mysql-database",level:2},{value:"Example of using named connections with the mysql function",id:"example-of-using-named-connections-with-the-mysql-function",level:3},{value:"Example of using named connections with an MySQL table",id:"example-of-using-named-connections-with-an-mysql-table",level:3},{value:"Example of using named connections with database with engine MySQL",id:"example-of-using-named-connections-with-database-with-engine-mysql",level:3},{value:"Example of using named connections with an external dictionary with source MySQL",id:"example-of-using-named-connections-with-an-external-dictionary-with-source-mysql",level:3},{value:"Named connections for accessing PostgreSQL database",id:"named-connections-for-accessing-postgresql-database",level:2},{value:"Example of using named connections with the postgresql function",id:"example-of-using-named-connections-with-the-postgresql-function",level:3},{value:"Example of using named connections with database with engine PostgreSQL",id:"example-of-using-named-connections-with-database-with-engine-postgresql",level:3},{value:"Example of using named connections with database with engine PostgreSQL",id:"example-of-using-named-connections-with-database-with-engine-postgresql-1",level:3},{value:"Example of using named connections with an external dictionary with source POSTGRESQL",id:"example-of-using-named-connections-with-an-external-dictionary-with-source-postgresql",level:3}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"named-collections"},"Storing details for connecting to external sources in configuration files"),(0,s.kt)("p",null,"Details for connecting to external sources (dictionaries, tables, table functions) can be saved\nin configuration files and thus simplify the creation of objects and hide credentials\nfrom users with only SQL access."),(0,s.kt)("p",null,"Parameters can be set in XML ",(0,s.kt)("inlineCode",{parentName:"p"},"<format>CSV</format>")," and overridden in SQL ",(0,s.kt)("inlineCode",{parentName:"p"},", format = 'TSV'"),".\nThe parameters in SQL can be overridden using format ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"compression_method = 'gzip'"),"."),(0,s.kt)("p",null,"Named connections are stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.xml")," file of the ClickHouse server in the ",(0,s.kt)("inlineCode",{parentName:"p"},"<named_collections>")," section and are applied when ClickHouse starts."),(0,s.kt)("p",null,"Example of configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"$ cat /etc/clickhouse-server/config.d/named_collections.xml\n<clickhouse>\n     <named_collections>\n     ...\n     </named_collections>\n</clickhouse>\n")),(0,s.kt)("h2",{id:"named-connections-for-accessing-s3"},"Named connections for accessing S3."),(0,s.kt)("p",null,"The description of parameters see ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3"},"s3 Table Function"),"."),(0,s.kt)("p",null,"Example of configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <named_collections>\n        <s3_mydata>\n            <access_key_id>AKIAIOSFODNN7EXAMPLE</access_key_id>\n            <secret_access_key> wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</secret_access_key>\n            <format>CSV</format>\n            <url>https://s3.us-east-1.amazonaws.com/yourbucket/mydata/</url>\n        </s3_mydata>\n    </named_collections>\n</clickhouse>\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-the-s3-function"},"Example of using named connections with the s3 function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3(s3_mydata, filename = 'test_file.tsv.gz',\n   format = 'TSV', structure = 'number UInt64', compression_method = 'gzip')\nSELECT * FROM numbers(10000);\n\nSELECT count()\nFROM s3(s3_mydata, filename = 'test_file.tsv.gz')\n\n\u250c\u2500count()\u2500\u2510\n\u2502   10000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 rows in set. Elapsed: 0.279 sec. Processed 10.00 thousand rows, 90.00 KB (35.78 thousand rows/s., 322.02 KB/s.)\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-an-s3-table"},"Example of using named connections with an S3 table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (number Int64)\nENGINE=S3(s3_mydata, url='https://s3.us-east-1.amazonaws.com/yourbucket/mydata/test_file.tsv.gz', format = 'TSV')\nSETTINGS input_format_with_names_use_header = 0;\n\nSELECT * FROM s3_engine_table LIMIT 3;\n\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"named-connections-for-accessing-mysql-database"},"Named connections for accessing MySQL database"),(0,s.kt)("p",null,"The description of parameters see ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/mysql"},"mysql"),"."),(0,s.kt)("p",null,"Example of configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <named_collections>\n        <mymysql>\n            <user>myuser</user>\n            <password>mypass</password>\n            <host>127.0.0.1</host>\n            <port>3306</port>\n            <database>test</database>\n            <connection_pool_size>8</connection_pool_size>\n            <on_duplicate_clause>1</on_duplicate_clause>\n            <replace_query>1</replace_query>\n        </mymysql>\n    </named_collections>\n</clickhouse>\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-the-mysql-function"},"Example of using named connections with the mysql function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM mysql(mymysql, table = 'test');\n\n\u250c\u2500count()\u2500\u2510\n\u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-an-mysql-table"},"Example of using named connections with an MySQL table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mytable(A Int64) ENGINE = MySQL(mymysql, table = 'test', connection_pool_size=3, replace_query=0);\nSELECT count() FROM mytable;\n\n\u250c\u2500count()\u2500\u2510\n\u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-database-with-engine-mysql"},"Example of using named connections with database with engine MySQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mydatabase ENGINE = MySQL(mymysql);\n\nSHOW TABLES FROM mydatabase;\n\n\u250c\u2500name\u2500\u2500\u2500\u2510\n\u2502 source \u2502\n\u2502 test   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-an-external-dictionary-with-source-mysql"},"Example of using named connections with an external dictionary with source MySQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict (A Int64, B String)\nPRIMARY KEY A\nSOURCE(MYSQL(NAME mymysql TABLE 'source'))\nLIFETIME(MIN 1 MAX 2)\nLAYOUT(HASHED());\n\nSELECT dictGet('dict', 'B', 2);\n\n\u250c\u2500dictGet('dict', 'B', 2)\u2500\u2510\n\u2502 two                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"named-connections-for-accessing-postgresql-database"},"Named connections for accessing PostgreSQL database"),(0,s.kt)("p",null,"The description of parameters see ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/postgresql"},"postgresql"),"."),(0,s.kt)("p",null,"Example of configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <named_collections>\n        <mypg>\n            <user>pguser</user>\n            <password>jw8s0F4</password>\n            <host>127.0.0.1</host>\n            <port>5432</port>\n            <database>test</database>\n            <schema>test_schema</schema>\n            <connection_pool_size>8</connection_pool_size>\n        </mypg>\n    </named_collections>\n</clickhouse>\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-the-postgresql-function"},"Example of using named connections with the postgresql function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM postgresql(mypg, table = 'test');\n\n\u250c\u2500a\u2500\u252c\u2500b\u2500\u2500\u2500\u2510\n\u2502 2 \u2502 two \u2502\n\u2502 1 \u2502 one \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nSELECT * FROM postgresql(mypg, table = 'test', schema = 'public');\n\n\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-database-with-engine-postgresql"},"Example of using named connections with database with engine PostgreSQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mypgtable (a Int64) ENGINE = PostgreSQL(mypg, table = 'test', schema = 'public');\n\nSELECT * FROM mypgtable;\n\n\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-database-with-engine-postgresql-1"},"Example of using named connections with database with engine PostgreSQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mydatabase ENGINE = PostgreSQL(mypg);\n\nSHOW TABLES FROM mydatabase\n\n\u250c\u2500name\u2500\u2510\n\u2502 test \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"example-of-using-named-connections-with-an-external-dictionary-with-source-postgresql"},"Example of using named connections with an external dictionary with source POSTGRESQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict (a Int64, b String)\nPRIMARY KEY a\nSOURCE(POSTGRESQL(NAME mypg TABLE test))\nLIFETIME(MIN 1 MAX 2)\nLAYOUT(HASHED());\n\nSELECT dictGet('dict', 'b', 2);\n\n\u250c\u2500dictGet('dict', 'b', 2)\u2500\u2510\n\u2502 two                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}p.isMDXComponent=!0}}]);