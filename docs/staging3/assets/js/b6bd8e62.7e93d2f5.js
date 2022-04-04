"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={},l="grants",p={unversionedId:"en/operations/system-tables/grants",id:"en/operations/system-tables/grants",title:"grants",description:"system_tables-grants}",source:"@site/docs/en/operations/system-tables/grants.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/grants",permalink:"/docs/staging3/docs/en/operations/system-tables/grants",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"functions",permalink:"/docs/staging3/docs/en/operations/system-tables/functions"},next:{title:"graphite_retentions",permalink:"/docs/staging3/docs/en/operations/system-tables/graphite_retentions"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-grants"},"grants"),(0,s.kt)("p",null,"Privileges granted to ClickHouse user accounts."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 User name.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Role assigned to user account.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Access parameters for ClickHouse user account.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"database")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a database.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"table")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a table.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"column")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a column to which access is granted.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Logical value. It shows whether some privileges have been revoked. Possible values:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"0")," \u2014 The row describes a partial revoke.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"1")," \u2014 The row describes a grant.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Permission is granted ",(0,s.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION"),", see ",(0,s.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/grants"},"Original article")," "))}d.isMDXComponent=!0}}]);