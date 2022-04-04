"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64878],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17364:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={sidebar_position:48,sidebar_label:"RENAME"},l="RENAME Statement",c={unversionedId:"en/sql-reference/statements/rename",id:"en/sql-reference/statements/rename",title:"RENAME Statement",description:"misc_operations-rename}",source:"@site/docs/en/sql-reference/statements/rename.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/rename",permalink:"/docs/docs/en/sql-reference/statements/rename",tags:[],version:"current",sidebarPosition:48,frontMatter:{sidebar_position:48,sidebar_label:"RENAME"},sidebar:"tutorialSidebar",previous:{title:"OPTIMIZE",permalink:"/docs/docs/en/sql-reference/statements/optimize"},next:{title:"EXCHANGE",permalink:"/docs/docs/en/sql-reference/statements/exchange"}},p={},m=[{value:"RENAME DATABASE",id:"misc_operations-rename_database",level:2},{value:"RENAME TABLE",id:"misc_operations-rename_table",level:2},{value:"RENAME DICTIONARY",id:"rename_dictionary",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"misc_operations-rename"},"RENAME Statement"),(0,s.kt)("p",null,"Renames databases, tables, or dictionaries. Several entities can be renamed in a single query.\nNote that the ",(0,s.kt)("inlineCode",{parentName:"p"},"RENAME")," query with several entities is non-atomic operation. To swap entities names atomically, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/exchange"},"EXCHANGE")," statement."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"RENAME")," query is supported by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/database-engines/atomic"},"Atomic")," database engine only."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DATABASE|TABLE|DICTIONARY name TO new_name [,...] [ON CLUSTER cluster]\n")),(0,s.kt)("h2",{id:"misc_operations-rename_database"},"RENAME DATABASE"),(0,s.kt)("p",null,"Renames databases."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DATABASE atomic_database1 TO atomic_database2 [,...] [ON CLUSTER cluster]\n")),(0,s.kt)("h2",{id:"misc_operations-rename_table"},"RENAME TABLE"),(0,s.kt)("p",null,"Renames one or more tables."),(0,s.kt)("p",null,"Renaming tables is a light operation. If you pass a different database after ",(0,s.kt)("inlineCode",{parentName:"p"},"TO"),", the table will be moved to this database. However, the directories with databases must reside in the same file system. Otherwise, an error is returned.\nIf you rename multiple tables in one query, the operation is not atomic. It may be partially executed, and queries in other sessions may get ",(0,s.kt)("inlineCode",{parentName:"p"},"Table ... does not exist ...")," error."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE [db1.]name1 TO [db2.]name2 [,...] [ON CLUSTER cluster]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE table_A TO table_A_bak, table_B TO table_B_bak;\n")),(0,s.kt)("h2",{id:"rename_dictionary"},"RENAME DICTIONARY"),(0,s.kt)("p",null,"Renames one or several dictionaries. This query can be used to move dictionaries between databases."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DICTIONARY [db0.]dict_A TO [db1.]dict_B [,...] [ON CLUSTER cluster]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/dictionaries/"},"Dictionaries"))))}d.isMDXComponent=!0}}]);