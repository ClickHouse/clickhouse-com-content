"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90522],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],i={sidebar_label:"Table Functions",sidebar_position:34},o="Table Functions",c={unversionedId:"en/sql-reference/table-functions/index",id:"en/sql-reference/table-functions/index",title:"Table Functions",description:"Table functions are methods for constructing tables.",source:"@site/docs/en/sql-reference/table-functions/index.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/",permalink:"/docs/docs/en/sql-reference/table-functions/",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_label:"Table Functions",sidebar_position:34},sidebar:"tutorialSidebar",previous:{title:"Parametric",permalink:"/docs/docs/en/sql-reference/aggregate-functions/parametric-functions"},next:{title:"file",permalink:"/docs/docs/en/sql-reference/table-functions/file"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table-functions"},"Table Functions"),(0,l.kt)("p",null,"Table functions are methods for constructing tables."),(0,l.kt)("p",null,"You can use table functions in:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/from"},"FROM")," clause of the ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," query."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"The method for creating a temporary table that is available only in the current query. The table is deleted when the query finishes.\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/create/table"},"CREATE TABLE AS table_function()")," query."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"It's one of the methods of creating a table.\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/insert-into#inserting-into-table-function"},"INSERT INTO TABLE FUNCTION")," query."))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can\u2019t use table functions if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/permissions-for-queries#settings_allow_ddl"},"allow_ddl")," setting is disabled."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/file"},"file")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/special/file"},"File"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/merge"},"merge")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/special/merge"},"Merge"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/numbers"},"numbers")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a table with a single column filled with integer numbers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/remote"},"remote")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to access remote servers without creating a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/special/distributed"},"Distributed"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/url"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/special/url"},"Url"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/mysql"},"mysql")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/mysql"},"MySQL"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/postgresql"},"postgresql")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/postgresql"},"PostgreSQL"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/jdbc"},"jdbc")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/jdbc"},"JDBC"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/odbc"},"odbc")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/odbc"},"ODBC"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/hdfs"},"hdfs")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/hdfs"},"HDFS"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/s3"},"s3")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/s3"},"S3"),"-engine table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/sql-reference/table-functions/sqlite"},"sqlite")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,l.kt)("a",{parentName:"td",href:"/docs/docs/en/engines/table-engines/integrations/sqlite"},"sqlite"),"-engine table.")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/"},"Original article")," "))}m.isMDXComponent=!0}}]);