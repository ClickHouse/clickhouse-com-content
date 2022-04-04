"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93408],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={sidebar_position:50,sidebar_label:"SET"},c="SET Statement",l={unversionedId:"en/sql-reference/statements/set",id:"en/sql-reference/statements/set",title:"SET Statement",description:"query-set}",source:"@site/docs/en/sql-reference/statements/set.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/set",permalink:"/docs/docs/en/sql-reference/statements/set",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"SET"},sidebar:"tutorialSidebar",previous:{title:"EXCHANGE",permalink:"/docs/docs/en/sql-reference/statements/exchange"},next:{title:"SET ROLE",permalink:"/docs/docs/en/sql-reference/statements/set-role"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-set"},"SET Statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET param = value\n")),(0,a.kt)("p",null,"Assigns ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"param")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/index"},"setting")," for the current session. You cannot change ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/server-configuration-parameters/"},"server settings")," this way."),(0,a.kt)("p",null,"You can also set all the values from the specified settings profile in a single query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'profile-name-from-the-settings-file'\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/"},"Settings"),"."))}m.isMDXComponent=!0}}]);