"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32181],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,g=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52350:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={sidebar_position:54,sidebar_label:"Server Configuration Parameters"},c="Server Configuration Parameters",u={unversionedId:"en/operations/server-configuration-parameters/index",id:"en/operations/server-configuration-parameters/index",title:"Server Configuration Parameters",description:"This section contains descriptions of server settings that cannot be changed at the session or query level.",source:"@site/docs/en/operations/server-configuration-parameters/index.md",sourceDirName:"en/operations/server-configuration-parameters",slug:"/en/operations/server-configuration-parameters/",permalink:"/docs/staging3/docs/en/operations/server-configuration-parameters/",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"Server Configuration Parameters"},sidebar:"tutorialSidebar",previous:{title:"Testing Hardware",permalink:"/docs/staging3/docs/en/operations/performance-test"},next:{title:"Server Settings",permalink:"/docs/staging3/docs/en/operations/server-configuration-parameters/settings"}},p={},l=[],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-configuration-parameters"},"Server Configuration Parameters"),(0,i.kt)("p",null,"This section contains descriptions of server settings that cannot be changed at the session or query level."),(0,i.kt)("p",null,"These settings are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file on the ClickHouse server."),(0,i.kt)("p",null,"Other settings are described in the \u201c",(0,i.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/operations/settings/index#session-settings-intro"},"Settings"),"\u201d section."),(0,i.kt)("p",null,"Before studying the settings, read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/staging3/docs/en/operations/configuration-files#configuration_files"},"Configuration files")," section and note the use of substitutions (the ",(0,i.kt)("inlineCode",{parentName:"p"},"incl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")," attributes)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/server_configuration_parameters/"},"Original article")," "))}d.isMDXComponent=!0}}]);