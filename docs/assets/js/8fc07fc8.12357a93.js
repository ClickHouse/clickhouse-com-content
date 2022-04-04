"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[5975],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27259:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],p={},i="users",l={unversionedId:"en/operations/system-tables/users",id:"en/operations/system-tables/users",title:"users",description:"system_tables-users}",source:"@site/docs/en/operations/system-tables/users.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/users",permalink:"/docs/docs/en/operations/system-tables/users",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trace_log",permalink:"/docs/docs/en/operations/system-tables/trace_log"},next:{title:"zookeeper",permalink:"/docs/docs/en/operations/system-tables/zookeeper"}},c={},d=[{value:"See Also",id:"see-also",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-users"},"users"),(0,s.kt)("p",null,"Contains a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/access-rights#user-account-management"},"user accounts")," configured at the server."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),") \u2014 User name.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"id")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 User ID.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"storage")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the storage of users. Configured in the ",(0,s.kt)("inlineCode",{parentName:"p"},"access_control_path")," parameter.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"auth_type")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/enum"},"Enum8"),"('no_password' = 0,'plaintext_password' = 1, 'sha256_password' = 2, 'double_sha1_password' = 3)) \u2014 Shows the authentication type. There are multiple ways of user identification: with no password, with plain text password, with ",(0,s.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/SHA-2"},"SHA256"),"-encoded password or with ",(0,s.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/SHA-1"},"double SHA-1"),"-encoded password.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"auth_params")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Authentication parameters in the JSON format depending on the ",(0,s.kt)("inlineCode",{parentName:"p"},"auth_type"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_ip")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 IP addresses of hosts that are allowed to connect to the ClickHouse server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_names")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Names of hosts that are allowed to connect to the ClickHouse server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_names_regexp")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Regular expression for host names that are allowed to connect to the ClickHouse server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_names_like")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Names of hosts that are allowed to connect to the ClickHouse server, set using the LIKE predicate.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"default_roles_all")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Shows that all granted roles set for user by default.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"default_roles_list")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 List of granted roles provided by default.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"default_roles_except")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 All the granted roles set as default excepting of the listed ones."))),(0,s.kt)("h2",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/show#show-users-statement"},"SHOW USERS"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/users"},"Original article")," "))}m.isMDXComponent=!0}}]);