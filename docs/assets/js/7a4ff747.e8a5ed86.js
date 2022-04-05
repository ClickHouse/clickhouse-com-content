"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6205],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73655:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={sidebar_position:43,sidebar_label:"SETTINGS PROFILE"},l="CREATE SETTINGS PROFILE",c={unversionedId:"en/sql-reference/statements/create/settings-profile",id:"en/sql-reference/statements/create/settings-profile",title:"CREATE SETTINGS PROFILE",description:"create-settings-profile-statement}",source:"@site/docs/en/sql-reference/statements/create/settings-profile.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/settings-profile",permalink:"/docs/en/sql-reference/statements/create/settings-profile",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/settings-profile.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"SETTINGS PROFILE"},sidebar:"tutorialSidebar",previous:{title:"QUOTA",permalink:"/docs/en/sql-reference/statements/create/quota"},next:{title:"ALTER",permalink:"/docs/en/sql-reference/statements/alter/"}},p={},u=[{value:"Example",id:"create-settings-profile-syntax",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-settings-profile-statement"},"CREATE SETTINGS PROFILE"),(0,s.kt)("p",null,"Creates ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#settings-profiles-management"},"settings profiles")," that can be assigned to a user or a role."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SETTINGS PROFILE [IF NOT EXISTS | OR REPLACE] TO name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY|WRITABLE] | INHERIT 'profile_name'] [,...]\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause allows creating settings profiles on a cluster, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,s.kt)("h2",{id:"create-settings-profile-syntax"},"Example"),(0,s.kt)("p",null,"Create the ",(0,s.kt)("inlineCode",{parentName:"p"},"max_memory_usage_profile")," settings profile with value and constraints for the ",(0,s.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," setting and assign it to user ",(0,s.kt)("inlineCode",{parentName:"p"},"robin"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SETTINGS PROFILE max_memory_usage_profile SETTINGS max_memory_usage = 100000001 MIN 90000000 MAX 110000000 TO robin\n")))}m.isMDXComponent=!0}}]);