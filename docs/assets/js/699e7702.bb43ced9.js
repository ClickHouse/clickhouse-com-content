"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[82218],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,s(s({ref:n},l),{},{components:t})):r.createElement(d,s({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77865:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],c={sidebar_label:"Using MinIO",sidebar_position:6,description:"Using MinIO"},a="Using MinIO",u={unversionedId:"integrations/s3/s3-minio",id:"integrations/s3/s3-minio",title:"Using MinIO",description:"Using MinIO",source:"@site/docs/integrations/s3/s3-minio.md",sourceDirName:"integrations/s3",slug:"/integrations/s3/s3-minio",permalink:"/docs/integrations/s3/s3-minio",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/integrations/s3/s3-minio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Using MinIO",sidebar_position:6,description:"Using MinIO"},sidebar:"tutorialSidebar",previous:{title:"Optimizing S3 Performance",permalink:"/docs/integrations/s3/s3-optimizing-performance"},next:{title:"Vector",permalink:"/docs/integrations/vector-to-clickhouse"}},l={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-minio"},"Using MinIO"),(0,o.kt)("p",null,"All S3 functions and tables and compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO"),". Users may experience superior throughput on self-hosted MinIO stores, especially in the event of optimal network locality."))}m.isMDXComponent=!0}}]);