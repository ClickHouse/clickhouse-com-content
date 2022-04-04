"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60965],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15050:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={},l="databases",c={unversionedId:"en/operations/system-tables/databases",id:"en/operations/system-tables/databases",title:"databases",description:"system-databases}",source:"@site/docs/en/operations/system-tables/databases.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/databases",permalink:"/docs/docs/en/operations/system-tables/databases",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"data_type_families",permalink:"/docs/docs/en/operations/system-tables/data_type_families"},next:{title:"detached_parts",permalink:"/docs/docs/en/operations/system-tables/detached_parts"}},p={},u=[],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-databases"},"databases"),(0,s.kt)("p",null,"Contains information about the databases that are available to the current user."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Database name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"engine")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/database-engines/"},"Database engine"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"data_path")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Data path."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metadata_path")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/enum"},"String"),") \u2014 Metadata path."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"uuid")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Database UUID."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"comment")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/enum"},"String"),") \u2014 Database comment.")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," column from this system table is used for implementing the ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES")," query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Create a database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test;\n")),(0,s.kt)("p",null,"Check all of the available databases to the user."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.databases;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500engine\u2500\u252c\u2500data_path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500metadata_path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500comment\u2500\u2510\n\u2502 INFORMATION_SCHEMA \u2502 Memory \u2502 /var/lib/clickhouse/       \u2502                                                                     \u2502 00000000-0000-0000-0000-000000000000 \u2502         \u2502\n\u2502 default            \u2502 Atomic \u2502 /var/lib/clickhouse/store/ \u2502 /var/lib/clickhouse/store/d31/d317b4bd-3595-4386-81ee-c2334694128a/ \u2502 24363899-31d7-42a0-a436-389931d752a0 \u2502         \u2502\n\u2502 information_schema \u2502 Memory \u2502 /var/lib/clickhouse/       \u2502                                                                     \u2502 00000000-0000-0000-0000-000000000000 \u2502         \u2502\n\u2502 system             \u2502 Atomic \u2502 /var/lib/clickhouse/store/ \u2502 /var/lib/clickhouse/store/1d1/1d1c869d-e465-4b1b-a51f-be033436ebf9/ \u2502 03e9f3d1-cc88-4a49-83e9-f3d1cc881a49 \u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);