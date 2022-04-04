"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1455],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(n),f=a,d=u["".concat(o,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(d,c(c({ref:t},m),{},{components:n})):r.createElement(d,c({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<s;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),c=["components"],l={sidebar_position:31,sidebar_label:"Statements"},o="ClickHouse SQL Statements",i={unversionedId:"en/sql-reference/statements/index",id:"en/sql-reference/statements/index",title:"ClickHouse SQL Statements",description:"Statements represent various kinds of action you can perform using SQL queries. Each kind of statement has it\u2019s own syntax and usage details that are described separately:",source:"@site/docs/en/sql-reference/statements/index.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/",permalink:"/docs/docs/en/sql-reference/statements/",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,sidebar_label:"Statements"},sidebar:"tutorialSidebar",previous:{title:"SQL Reference",permalink:"/docs/docs/en/sql-reference/"},next:{title:"SELECT",permalink:"/docs/docs/en/sql-reference/statements/select/"}},m={},p=[],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"clickhouse-sql-statements"},"ClickHouse SQL Statements"),(0,s.kt)("p",null,"Statements represent various kinds of action you can perform using SQL queries. Each kind of statement has it\u2019s own syntax and usage details that are described separately:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/select/"},"SELECT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/insert-into"},"INSERT INTO")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/create/"},"CREATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/alter/"},"ALTER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/system"},"SYSTEM")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/show"},"SHOW")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/grant"},"GRANT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/revoke"},"REVOKE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/attach"},"ATTACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/check-table"},"CHECK TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/describe-table"},"DESCRIBE TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/detach"},"DETACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/drop"},"DROP")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/exists"},"EXISTS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/kill"},"KILL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/optimize"},"OPTIMIZE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/rename"},"RENAME")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/set"},"SET")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/set-role"},"SET ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/truncate"},"TRUNCATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/use"},"USE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/statements/explain"},"EXPLAIN"))))}f.isMDXComponent=!0}}]);