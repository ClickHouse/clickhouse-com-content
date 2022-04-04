"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65145],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,k=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(k,s(s({ref:n},d),{},{components:t})):a.createElement(k,s({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},31076:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),s=["components"],o={sidebar_label:"Defining SQL Users and Roles",sidebar_position:20},i="Defining SQL Users and Roles",c={unversionedId:"guides/sre/users-and-roles",id:"guides/sre/users-and-roles",title:"Defining SQL Users and Roles",description:"This article shows the basics of defining SQL users and roles then applying privileges and permissions to a databases, tables rows and columns.",source:"@site/docs/guides/sre/users-and-roles.md",sourceDirName:"guides/sre",slug:"/guides/sre/users-and-roles",permalink:"/docs/staging1/docs/guides/sre/users-and-roles",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Defining SQL Users and Roles",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Configuring LDAP",permalink:"/docs/staging1/docs/guides/sre/configuring-ldap"},next:{title:"Reference Guides",permalink:"/docs/staging1/docs/en"}},d={},u=[{value:"1. Enabling SQL user mode and defining users",id:"1-enabling-sql-user-mode-and-defining-users",level:2},{value:"2. Creating a sample database, table and rows",id:"2-creating-a-sample-database-table-and-rows",level:2},{value:"3. Creating roles",id:"3-creating-roles",level:2},{value:"4. Testing role privileges with column restricted user",id:"4-testing-role-privileges-with-column-restricted-user",level:2},{value:"5. Testing role privileges with row restricted user",id:"5-testing-role-privileges-with-row-restricted-user",level:2},{value:"4. Modifying Users and Roles",id:"4-modifying-users-and-roles",level:2},{value:"5. Troubleshooting",id:"5-troubleshooting",level:2},{value:"6. Summary",id:"6-summary",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-sql-users-and-roles"},"Defining SQL Users and Roles"),(0,r.kt)("p",null,"This article shows the basics of defining SQL users and roles then applying privileges and permissions to a databases, tables rows and columns.\nRecommened is to use SQL Users and Roles rather than legacy File users."),(0,r.kt)("h2",{id:"1-enabling-sql-user-mode-and-defining-users"},"1. Enabling SQL user mode and defining users"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enable SQL user mode in the ",(0,r.kt)("inlineCode",{parentName:"li"},"users.xml")," file under the ",(0,r.kt)("inlineCode",{parentName:"li"},"<default>")," user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<access_management>1</access_management>\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," user is the only user that gets created with a fresh install and is also the account used for internode communications, by default."),(0,r.kt)("p",{parentName:"div"},"In production, it is recommended to disable this user once the inter-node commnication has been configured with a SQL admin user and inter-node communications have been set with ",(0,r.kt)("inlineCode",{parentName:"p"},"<secret>"),", cluster credentials and/or internode http and transport protocol credentials since the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," account is used for internode communication."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the nodes to apply the changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into ClickHouse (example password):"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"clickhouse-client --user default --password ClickHouse123!\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a SQL administrator account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER clickhouse_admin IDENTIFIED WITH plaintext_password BY 'password';\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this example, plain text password is used, however, there are several options available for other user directories such as LDAP, AD. Please refer to user guides and documentation for configuring other options.\n",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/user/"},"https://clickhouse.com/docs/en/sql-reference/statements/create/user/")))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Grant the new user full administrative rights")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL ON *.* TO clickhouse_admin WITH GRANT OPTION;\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Create regular user to restrict columns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER column_user IDENTIFIED WITH plaintext_password BY 'password';\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Create a regular user to restrict by row values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER row_user IDENTIFIED WITH plaintext_password BY 'password';\n")),(0,r.kt)("h2",{id:"2-creating-a-sample-database-table-and-rows"},"2. Creating a sample database, table and rows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a test database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table1 (\n    id UInt64,\n    column1 String,\n    column2 String\n)\nENGINE MergeTree\nORDER BY id;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Populate the table with sample rows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table1\n(id, column1, column2)\nVALUES\n(1, 'A', 'abc'),\n(2, 'A', 'def'),\n(3, 'B', 'abc'),\n(4, 'B', 'def');\n")),(0,r.kt)("p",null,"4.verify the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nch_env_2 :) SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: 475015cc-6f51-4b20-bda2-3c9c41404e49\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  1 \u2502 A       \u2502 abc     \u2502\n\u2502  2 \u2502 A       \u2502 def     \u2502\n\u2502  3 \u2502 B       \u2502 abc     \u2502\n\u2502  4 \u2502 B       \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("h2",{id:"3-creating-roles"},"3. Creating roles"),(0,r.kt)("p",null,"With this set of examples, roles for different privileges such as columns and rows will be created, privileges will be granted to the roles and users will be assigned to each role. Roles are used to define groups of users for certain privileges instead of managing each user seperately."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a role to restrict users of this role to only see ",(0,r.kt)("inlineCode",{parentName:"li"},"column1")," in database ",(0,r.kt)("inlineCode",{parentName:"li"},"db1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"table1"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE column1_users;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set privileges to allow view on ",(0,r.kt)("inlineCode",{parentName:"li"},"column1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT(id, column1) ON db1.table1 TO column1_users;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"column_user")," user to the ",(0,r.kt)("inlineCode",{parentName:"li"},"column1_users")," role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT column1_users TO column_user;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a role to restrict users of this role to only see selected rows, in this case only rows containing ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"column1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE A_rows_users;\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"row_user")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"A_rows_users")," role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT A_rows_users TO row_user;\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a policy to allow view on only where ",(0,r.kt)("inlineCode",{parentName:"li"},"column1")," has the values of ",(0,r.kt)("inlineCode",{parentName:"li"},"A"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY A_row_filter ON db1.table1 FOR SELECT USING column1 = 'A' TO A_rows_users;\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Set privileges to the database and table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT(id, column1, column2) ON db1.table1 TO A_rows_users;\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"grant explicit permissions for other roles to still have access to all rows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY allow_other_users_filter ON db1.table1 FOR SELECT USING 1 TO clickhouse_admin, column1_users;\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When attaching a policy to a table, the system will apply that policy and only those users and roles defined will be able to do operations on the table, all others will be denied any operations.\nIn order to not have the restrictive row policy applied to other users, another policy must be defined to allow other users and roles to have regular or other types of access."))),(0,r.kt)("h2",{id:"4-testing-role-privileges-with-column-restricted-user"},"4. Testing role privileges with column restricted user"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the clickhouse client using the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse_admin")," user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," clickhouse-client --user clickhouse_admin --password password\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Verify access to database, table and all rows with the admin user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nch_env_2 :) SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: f5e906ea-10c6-45b0-b649-36334902d31d\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  1 \u2502 A       \u2502 abc     \u2502\n\u2502  2 \u2502 A       \u2502 def     \u2502\n\u2502  3 \u2502 B       \u2502 abc     \u2502\n\u2502  4 \u2502 B       \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Log into the ClickHouse client using the ",(0,r.kt)("inlineCode",{parentName:"li"},"column_user")," user ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-client --user column_user --password password\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Test ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," using all columns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: 5576f4eb-7450-435c-a2d6-d6b49b7c4a23\n\n\n0 rows in set. Elapsed: 0.006 sec.\n\nReceived exception from server (version 22.3.2):\nCode: 497. DB::Exception: Received from localhost:9000. DB::Exception: column_user: Not enough privileges. To execute this query it's necessary to have grant SELECT(id, column1, column2) ON db1.table1. (ACCESS_DENIED)\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Access is denied since all columns were specified and the user only has access to ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"column1")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Verify ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," query with only columns specified and allowed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT id, column1 FROM db1.table1;\n\nSELECT\n    id,\n    column1\nFROM db1.table1\n\nQuery id: cef9a083-d5ce-42ff-9678-f08dc60d4bb9\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 A       \u2502\n\u2502  2 \u2502 A       \u2502\n\u2502  3 \u2502 B       \u2502\n\u2502  4 \u2502 B       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"5-testing-role-privileges-with-row-restricted-user"},"5. Testing role privileges with row restricted user"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the ClickHouse client using ",(0,r.kt)("inlineCode",{parentName:"li"},"row_user"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-client --user row_user --password password\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"View rows available")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: a79a113c-1eca-4c3f-be6e-d034f9a220fb\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  1 \u2502 A       \u2502 abc     \u2502\n\u2502  2 \u2502 A       \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"4-modifying-users-and-roles"},"4. Modifying Users and Roles"),(0,r.kt)("p",null,"Users can be assigned multiple roles for a combination of privileges needed."),(0,r.kt)("p",null,"When using multiple roles, the system will combine the roles to determine privileges, the net effect will be that the role permissions will be cumulative."),(0,r.kt)("p",null,"For example, if one ",(0,r.kt)("inlineCode",{parentName:"p"},"role1")," allows for only select on ",(0,r.kt)("inlineCode",{parentName:"p"},"column1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"role2")," allows for select on ",(0,r.kt)("inlineCode",{parentName:"p"},"column1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"column2")," then the user will have access to both columns."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using the admin account, create new user to restrict by both row and column with default roles")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER row_and_column_user IDENTIFIED WITH plaintext_password BY 'password' DEFAULT ROLE A_rows_users;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Remove prior privileges for ",(0,r.kt)("inlineCode",{parentName:"li"},"A_rows_users")," role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE SELECT(id, column1, column2) ON db1.table1 FROM A_rows_users;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Allow ",(0,r.kt)("inlineCode",{parentName:"li"},"A_row_users")," role to only select from ",(0,r.kt)("inlineCode",{parentName:"li"},"column1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT(id, column1) ON db1.table1 TO A_rows_users;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Log into the ClickHouse client using ",(0,r.kt)("inlineCode",{parentName:"li"},"row_and_column_user"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-client --user row_and_column_user --password password;\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Test with all columns:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: 8cdf0ff5-e711-4cbe-bd28-3c02e52e8bc4\n\n\n0 rows in set. Elapsed: 0.005 sec.\n\nReceived exception from server (version 22.3.2):\nCode: 497. DB::Exception: Received from localhost:9000. DB::Exception: row_and_column_user: Not enough privileges. To execute this query it's necessary to have grant SELECT(id, column1, column2) ON db1.table1. (ACCESS_DENIED)\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Test with limited allowed columns:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SELECT id, column1 FROM db1.table1;\n\nSELECT\n    id,\n    column1\nFROM db1.table1\n\nQuery id: 5e30b490-507a-49e9-9778-8159799a6ed0\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 A       \u2502\n\u2502  2 \u2502 A       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Examples on how to delete privileges, policies, unassign users from roles, delete users and roles")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove privilege from a role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," REVOKE SELECT(column1, id) ON db1.table1 FROM A_rows_users;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete a policy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY A_row_filter ON db1.table1;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unassign a user from a role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," REVOKE A_rows_users FROM row_user;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete a role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE A_rows_users;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete a user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER row_user;\n")),(0,r.kt)("h2",{id:"5-troubleshooting"},"5. Troubleshooting"),(0,r.kt)("p",null,"There are occasions when privileges intersect or combine to produce unexpected results, the following commands can be used to narrow the issue using an admin account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Listing the grants and roles for a user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SHOW GRANTS FOR row_and_column_user;\n\nSHOW GRANTS FOR row_and_column_user\n\nQuery id: 6a73a3fe-2659-4aca-95c5-d012c138097b\n\n\u250c\u2500GRANTS FOR row_and_column_user\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 GRANT A_rows_users, column1_users TO row_and_column_user \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List roles in ClickHouse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SHOW ROLES;\n\nSHOW ROLES\n\nQuery id: 1e21440a-18d9-4e75-8f0e-66ec9b36470a\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 A_rows_users    \u2502\n\u2502 column1_users   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display the policies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SHOW POLICIES;\n\nSHOW ROW POLICIES\n\nQuery id: f2c636e9-f955-4d79-8e80-af40ea227ebc\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 A_row_filter ON db1.table1             \u2502\n\u2502 allow_other_users_filter ON db1.table1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View how a policy was defined and current privileges")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ch_env_2 :) SHOW CREATE ROW POLICY A_row_filter ON db1.table1;\n\nSHOW CREATE ROW POLICY A_row_filter ON db1.table1\n\nQuery id: 0d3b5846-95c7-4e62-9cdd-91d82b14b80b\n\n\u250c\u2500CREATE ROW POLICY A_row_filter ON db1.table1\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE ROW POLICY A_row_filter ON db1.table1 FOR SELECT USING column1 = 'A' TO A_rows_users \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"6-summary"},"6. Summary"),(0,r.kt)("p",null,"This article demostrated the basics of creating SQL users and roles and provided steps to set and modify privileges for users and roles.\nFor more detailed information on each please refer to our user guides and reference documenation."))}m.isMDXComponent=!0}}]);