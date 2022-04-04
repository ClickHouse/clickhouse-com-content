"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22673],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,b=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(b,o(o({ref:n},g),{},{components:t})):r.createElement(b,o({ref:n},g))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2196:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={sidebar_position:40,sidebar_label:"Integrations"},l="Table Engines for Integrations",c={unversionedId:"en/engines/table-engines/integrations/index",id:"en/engines/table-engines/integrations/index",title:"Table Engines for Integrations",description:"table-engines-for-integrations}",source:"@site/docs/en/engines/table-engines/integrations/index.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/",permalink:"/docs/en/engines/table-engines/integrations/",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"Integrations"},sidebar:"tutorialSidebar",previous:{title:"TinyLog",permalink:"/docs/en/engines/table-engines/log-family/tinylog"},next:{title:"ODBC",permalink:"/docs/en/engines/table-engines/integrations/odbc"}},g={},u=[],p={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-engines-for-integrations"},"Table Engines for Integrations"),(0,a.kt)("p",null,"ClickHouse provides various means for integrating with external systems, including table engines. Like with all other table engines, the configuration is done using ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," queries. Then from a user perspective, the configured integration looks like a normal table, but queries to it are proxied to the external system. This transparent querying is one of the key advantages of this approach over alternative integration methods, like external dictionaries or table functions, which require to use custom query methods on each use."),(0,a.kt)("p",null,"List of supported integrations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/odbc"},"ODBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/jdbc"},"JDBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mysql"},"MySQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mongodb"},"MongoDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/hdfs"},"HDFS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/s3"},"S3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/kafka"},"Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/embedded-rocksdb"},"EmbeddedRocksDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/rabbitmq"},"RabbitMQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/postgresql"},"PostgreSQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/sqlite"},"SQLite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/hive"},"Hive"))))}f.isMDXComponent=!0}}]);