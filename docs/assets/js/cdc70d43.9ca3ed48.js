"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80081],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,O=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(O,s(s({ref:t},u),{},{components:n})):r.createElement(O,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],o={sidebar_position:44,sidebar_label:"DROP"},i="DROP Statements",p={unversionedId:"en/sql-reference/statements/drop",id:"en/sql-reference/statements/drop",title:"DROP Statements",description:"drop}",source:"@site/docs/en/sql-reference/statements/drop.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/drop",permalink:"/docs/en/sql-reference/statements/drop",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/drop.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"DROP"},sidebar:"tutorialSidebar",previous:{title:"DETACH",permalink:"/docs/en/sql-reference/statements/detach"},next:{title:"EXISTS",permalink:"/docs/en/sql-reference/statements/exists"}},u={},c=[{value:"DROP DATABASE",id:"drop-database",level:2},{value:"DROP TABLE",id:"drop-table",level:2},{value:"DROP DICTIONARY",id:"drop-dictionary",level:2},{value:"DROP USER",id:"drop-user-statement",level:2},{value:"DROP ROLE",id:"drop-role-statement",level:2},{value:"DROP ROW POLICY",id:"drop-row-policy-statement",level:2},{value:"DROP QUOTA",id:"drop-quota-statement",level:2},{value:"DROP SETTINGS PROFILE",id:"drop-settings-profile-statement",level:2},{value:"DROP VIEW",id:"drop-view",level:2},{value:"DROP FUNCTION",id:"drop-function",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drop"},"DROP Statements"),(0,l.kt)("p",null,"Deletes existing entity. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, these queries do not return an error if the entity does not exist."),(0,l.kt)("h2",{id:"drop-database"},"DROP DATABASE"),(0,l.kt)("p",null,"Deletes all tables inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"db")," database, then deletes the ",(0,l.kt)("inlineCode",{parentName:"p"},"db")," database itself."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-table"},"DROP TABLE"),(0,l.kt)("p",null,"Deletes the table."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-dictionary"},"DROP DICTIONARY"),(0,l.kt)("p",null,"Deletes the dictionary."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DICTIONARY [IF EXISTS] [db.]name\n")),(0,l.kt)("h2",{id:"drop-user-statement"},"DROP USER"),(0,l.kt)("p",null,"Deletes a user."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-role-statement"},"DROP ROLE"),(0,l.kt)("p",null,"Deletes a role. The deleted role is revoked from all the entities where it was assigned."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-row-policy-statement"},"DROP ROW POLICY"),(0,l.kt)("p",null,"Deletes a row policy. Deleted row policy is revoked from all the entities where it was assigned."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [ROW] POLICY [IF EXISTS] name [,...] ON [database.]table [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-quota-statement"},"DROP QUOTA"),(0,l.kt)("p",null,"Deletes a quota. The deleted quota is revoked from all the entities where it was assigned."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP QUOTA [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-settings-profile-statement"},"DROP SETTINGS PROFILE"),(0,l.kt)("p",null,"Deletes a settings profile. The deleted settings profile is revoked from all the entities where it was assigned."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [SETTINGS] PROFILE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-view"},"DROP VIEW"),(0,l.kt)("p",null,"Deletes a view. Views can be deleted by a ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," command as well but ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP VIEW")," checks that ",(0,l.kt)("inlineCode",{parentName:"p"},"[db.]name")," is a view."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-function"},"DROP FUNCTION"),(0,l.kt)("p",null,"Deletes a user defined function created by ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/function"},"CREATE FUNCTION"),".\nSystem functions can not be dropped."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP FUNCTION [IF EXISTS] function_name\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nDROP FUNCTION linear_equation;\n")))}m.isMDXComponent=!0}}]);