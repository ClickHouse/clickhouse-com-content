"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:58,sidebar_label:"Permissions for Queries"},l="Permissions for Queries",p={unversionedId:"en/operations/settings/permissions-for-queries",id:"en/operations/settings/permissions-for-queries",title:"Permissions for Queries",description:"permissionsforqueries}",source:"@site/docs/en/operations/settings/permissions-for-queries.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/permissions-for-queries",permalink:"/docs/docs/en/operations/settings/permissions-for-queries",tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58,sidebar_label:"Permissions for Queries"},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/docs/en/operations/settings/index"},next:{title:"Restrictions on Query Complexity",permalink:"/docs/docs/en/operations/settings/query-complexity"}},u={},d=[{value:"readonly",id:"settings_readonly",level:2},{value:"allow_ddl",id:"settings_allow_ddl",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions_for_queries"},"Permissions for Queries"),(0,a.kt)("p",null,"Queries in ClickHouse can be divided into several types:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Read data queries: ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DESCRIBE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"EXISTS"),"."),(0,a.kt)("li",{parentName:"ol"},"Write data queries: ",(0,a.kt)("inlineCode",{parentName:"li"},"INSERT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"OPTIMIZE"),"."),(0,a.kt)("li",{parentName:"ol"},"Change settings query: ",(0,a.kt)("inlineCode",{parentName:"li"},"SET"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"USE"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_definition_language"},"DDL")," queries: ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ALTER"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"RENAME"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ATTACH"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DETACH"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DROP")," ",(0,a.kt)("inlineCode",{parentName:"li"},"TRUNCATE"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"KILL QUERY"),".")),(0,a.kt)("p",null,"The following settings regulate user permissions by the type of query:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#settings_readonly"},"readonly")," \u2014 Restricts permissions for all types of queries except DDL queries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#settings_allow_ddl"},"allow_ddl")," \u2014 Restricts permissions for DDL queries.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KILL QUERY")," can be performed with any settings."),(0,a.kt)("h2",{id:"settings_readonly"},"readonly"),(0,a.kt)("p",null,"Restricts permissions for reading data, write data and change settings queries."),(0,a.kt)("p",null,"See how the queries are divided into types ",(0,a.kt)("a",{parentName:"p",href:"#permissions_for_queries"},"above"),"."),(0,a.kt)("p",null,"Possible values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 \u2014 All queries are allowed."),(0,a.kt)("li",{parentName:"ul"},"1 \u2014 Only read data queries are allowed."),(0,a.kt)("li",{parentName:"ul"},"2 \u2014 Read data and change settings queries are allowed.")),(0,a.kt)("p",null,"After setting ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly = 1"),", the user can\u2019t change ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_ddl")," settings in the current session."),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," method in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/interfaces/http"},"HTTP interface"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly = 1")," is set automatically. To modify data, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," method."),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly = 1")," prohibit the user from changing all the settings. There is a way to prohibit the user\nfrom changing only specific settings, for details see ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/constraints-on-settings"},"constraints on settings"),"."),(0,a.kt)("p",null,"Default value: 0"),(0,a.kt)("h2",{id:"settings_allow_ddl"},"allow_ddl"),(0,a.kt)("p",null,"Allows or denies ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_definition_language"},"DDL")," queries."),(0,a.kt)("p",null,"See how the queries are divided into types ",(0,a.kt)("a",{parentName:"p",href:"#permissions_for_queries"},"above"),"."),(0,a.kt)("p",null,"Possible values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 \u2014 DDL queries are not allowed."),(0,a.kt)("li",{parentName:"ul"},"1 \u2014 DDL queries are allowed.")),(0,a.kt)("p",null,"You can\u2019t execute ",(0,a.kt)("inlineCode",{parentName:"p"},"SET allow_ddl = 1")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_ddl = 0")," for the current session."),(0,a.kt)("p",null,"Default value: 1"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/permissions_for_queries/"},"Original article")," "))}m.isMDXComponent=!0}}]);