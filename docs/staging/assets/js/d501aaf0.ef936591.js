"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50821],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69326:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:39,sidebar_label:"REVOKE"},s="REVOKE Statement",c={unversionedId:"en/sql-reference/statements/revoke",id:"en/sql-reference/statements/revoke",title:"REVOKE Statement",description:"revoke}",source:"@site/docs/en/sql-reference/statements/revoke.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/revoke",permalink:"/docs/staging/docs/en/sql-reference/statements/revoke",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"REVOKE"},sidebar:"tutorialSidebar",previous:{title:"EXPLAIN",permalink:"/docs/staging/docs/en/sql-reference/statements/explain"},next:{title:"ATTACH",permalink:"/docs/staging/docs/en/sql-reference/statements/attach"}},p={},u=[{value:"Syntax",id:"revoke-syntax",level:2},{value:"Description",id:"revoke-description",level:2},{value:"Partial Revokes",id:"partial-revokes-dscr",level:3},{value:"Examples",id:"revoke-example",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"revoke"},"REVOKE Statement"),(0,o.kt)("p",null,"Revokes privileges from users or roles."),(0,o.kt)("h2",{id:"revoke-syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Revoking privileges from users")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Revoking roles from users")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,o.kt)("h2",{id:"revoke-description"},"Description"),(0,o.kt)("p",null,"To revoke some privilege you can use a privilege of a wider scope than you plan to revoke. For example, if a user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT (x,y)")," privilege, administrator can execute ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT(x,y) ..."),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT * ..."),", or even ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE ALL PRIVILEGES ...")," query to revoke this privilege."),(0,o.kt)("h3",{id:"partial-revokes-dscr"},"Partial Revokes"),(0,o.kt)("p",null,"You can revoke a part of a privilege. For example, if a user has the ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT *.*")," privilege you can revoke from it a privilege to read data from some table or a database."),(0,o.kt)("h2",{id:"revoke-example"},"Examples"),(0,o.kt)("p",null,"Grant the ",(0,o.kt)("inlineCode",{parentName:"p"},"john")," user account with a privilege to select from all the databases, excepting the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON *.* TO john;\nREVOKE SELECT ON accounts.* FROM john;\n")),(0,o.kt)("p",null,"Grant the ",(0,o.kt)("inlineCode",{parentName:"p"},"mira")," user account with a privilege to select from all the columns of the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts.staff")," table, excepting the ",(0,o.kt)("inlineCode",{parentName:"p"},"wage")," one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings/"},"Original article")))}f.isMDXComponent=!0}}]);