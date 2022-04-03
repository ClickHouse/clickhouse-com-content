"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92725],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),b=i,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22143:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={sidebar_position:90,sidebar_label:"View"},c="View Table Engine",s={unversionedId:"en/engines/table-engines/special/view",id:"en/engines/table-engines/special/view",title:"View Table Engine",description:"table_engines-view}",source:"@site/docs/en/engines/table-engines/special/view.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/view",permalink:"/docs/en/engines/table-engines/special/view",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,sidebar_label:"View"},sidebar:"tutorialSidebar",previous:{title:"URL",permalink:"/docs/en/engines/table-engines/special/url"},next:{title:"MaterializedView",permalink:"/docs/en/engines/table-engines/special/materializedview"}},u={},p=[],f={toc:p};function b(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"table_engines-view"},"View Table Engine"),(0,o.kt)("p",null,"Used for implementing views (for more information, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE VIEW query"),"). It does not store data, but only stores the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," query. When reading from a table, it runs this query (and deletes all unnecessary columns from the query)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/special/view/"},"Original article")," "))}b.isMDXComponent=!0}}]);