"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3851],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,m=g["".concat(i,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85200:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={sidebar_label:"Connect PostgreSQL and ClickHouse",sidebar_position:10,keywords:["clickhouse","postgres","postgresql","connect","integrate","table","engine"]},i="Connecting ClickHouse to PostgreSQL using the PostgreSQL Table Engine",p={unversionedId:"integrations/postgresql/postgres-with-clickhouse",id:"integrations/postgresql/postgres-with-clickhouse",title:"Connecting ClickHouse to PostgreSQL using the PostgreSQL Table Engine",description:"The PostgreSQL table engine allows SELECT and INSERT operations on data stored on the remote Postgres server from ClickHouse.",source:"@site/docs/integrations/postgresql/postgres-with-clickhouse.md",sourceDirName:"integrations/postgresql",slug:"/integrations/postgresql/postgres-with-clickhouse",permalink:"/docs/integrations/postgresql/postgres-with-clickhouse",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Connect PostgreSQL and ClickHouse",sidebar_position:10,keywords:["clickhouse","postgres","postgresql","connect","integrate","table","engine"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/docs/integrations/postgresql"},next:{title:"PostgreSQL Database Engine",permalink:"/docs/integrations/postgresql/postgres-with-clickhouse-database-engine"}},c={},u=[{value:"1. Configure PostgreSQL",id:"1-configure-postgresql",level:2},{value:"2. Define a Table in ClickHouse",id:"2-define-a-table-in-clickhouse",level:2},{value:"3 Testing the integration",id:"3-testing-the-integration",level:2},{value:"4 Summary",id:"4-summary",level:2}],g={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-clickhouse-to-postgresql-using-the-postgresql-table-engine"},"Connecting ClickHouse to PostgreSQL using the PostgreSQL Table Engine"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," table engine allows ",(0,o.kt)("strong",{parentName:"p"},"SELECT")," and ",(0,o.kt)("strong",{parentName:"p"},"INSERT")," operations on data stored on the remote Postgres server from ClickHouse.\nThis article is to illustrate basic methods of integration using one table."),(0,o.kt)("h2",{id:"1-configure-postgresql"},"1. Configure PostgreSQL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"postgresql.conf"),", add the following entry to enable PostgreSQL to listen on the network interfaces:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"listen_addresses = '*' \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a user to connect from ClickHouse. For demonstration purposes, this example grants full superuser rights."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE clickhouse_user SUPERUSER LOGIN PASSWORD 'ClickHouse_123';\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new database in PostgreSQL:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new table:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table1 (\n    id         integer primary key,\n    column1    varchar(10)\n);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let's add a few rows for testing:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table1\n(id, column1)\nVALUES\n(1, 'abc'),\n(2, 'def');\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the Postgres to allow connections to the new database with the new user for replication:\nbelow is the minimum entry to add to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pg_hba.conf")," file:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# TYPE  DATABASE        USER            ADDRESS                 METHOD\nhost    db1             clickhouse_user 192.168.1.0/24          password\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*for demonstration purposes, this is using clear text password authentication method. update the address line with either the subnet or the address of the server per PostgreSQL documentation")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"reload the ",(0,o.kt)("inlineCode",{parentName:"li"},"pg_hba.conf")," configuration with something like this (adjust for your version):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/usr/pgsql-12/bin/pg_ctl reload\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Test the login with new ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse_user"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," psql -U clickhouse_user -W -d db1 -h <your_postgresql_host>\n")),(0,o.kt)("h2",{id:"2-define-a-table-in-clickhouse"},"2. Define a Table in ClickHouse"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"log into the ClickHouse CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client --user default --password ClickHouse123!\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create database:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1_postgres;\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create the table with the PostgreSQL table engine:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1_postgres.table1\n(\n    id UInt64,\n    column1 String\n) \nENGINE = PostgreSQL('postgres-host.domain.com:5432', 'db1', 'table1', 'clickhouse_user', 'ClickHouse_123');\n")),(0,o.kt)("p",null,"minimum options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host:port"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname or IP and port"),(0,o.kt)("td",{parentName:"tr",align:null},"postgres-host.domain.com:5432")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"database"),(0,o.kt)("td",{parentName:"tr",align:null},"postgres database name"),(0,o.kt)("td",{parentName:"tr",align:null},"db1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"username to connect to postgres"),(0,o.kt)("td",{parentName:"tr",align:null},"clickhouse_user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"password"),(0,o.kt)("td",{parentName:"tr",align:null},"password to connect to postgres"),(0,o.kt)("td",{parentName:"tr",align:null},"ClickHouse_123")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," For complete guide to the PostgreSQL database engine, refer to: ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/postgresql/"},"https://clickhouse.com/docs/en/engines/table-engines/integrations/postgresql/")),(0,o.kt)("h2",{id:"3-testing-the-integration"},"3 Testing the integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ClickHouse, view initial rows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT * FROM db1_postgres.table1;\n\nSELECT *\nFROM db1_postgres.table1\n\nQuery id: 34193d31-fe21-44ac-a182-36aaefbd78bf\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In Postgres, add sample rows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table1 \n  (id, column1) \nVALUES \n  (3, 'ghi'),\n  (4, 'jkl');\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In ClickHouse, view newly added rows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT * FROM db1_postgres.table1;\n\nSELECT *\nFROM db1_postgres.table1\n\nQuery id: 86fa2c62-d320-4e47-b564-47ebf3d5d27b\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2502  3 \u2502 ghi     \u2502\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"In ClickHouse, add sample rows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1_postgres.table1\n  (id, column1)\nVALUES\n  (5, 'mno'),\n  (6, 'pqr');\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"In Postgres, verify new rows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"db1=# SELECT * FROM table1;\n id | column1\n----+---------\n  1 | abc\n  2 | def\n  3 | ghi\n  4 | jkl\n  5 | mno\n  6 | pqr\n(6 rows)\n")),(0,o.kt)("h2",{id:"4-summary"},"4 Summary"),(0,o.kt)("p",null,"This integration example demonstrated the basic integration between Postgres and ClickHouse using the PostrgeSQL table engine.\nThe table engine has more features such as specifying schemas, returning only a subset of columns and connecting to multiple replicas."))}d.isMDXComponent=!0}}]);