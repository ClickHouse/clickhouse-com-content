"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Can I use ClickHouse as a key-value storage?",toc_hidden:!0,toc_priority:101},l="Can I Use ClickHouse As a Key-Value Storage?",u={unversionedId:"faq/use-cases/key-value",id:"faq/use-cases/key-value",title:"Can I use ClickHouse as a key-value storage?",description:"can-i-use-clickhouse-as-a-key-value-storage}",source:"@site/docs/faq/use-cases/key-value.md",sourceDirName:"faq/use-cases",slug:"/faq/use-cases/key-value",permalink:"/docs/docs/faq/use-cases/key-value",tags:[],version:"current",frontMatter:{title:"Can I use ClickHouse as a key-value storage?",toc_hidden:!0,toc_priority:101},sidebar:"tutorialSidebar",previous:{title:"Questions about ClickHouse use cases",permalink:"/docs/docs/faq/use-cases/"},next:{title:"Can I use ClickHouse as a time-series database?",permalink:"/docs/docs/faq/use-cases/time-series"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"can-i-use-clickhouse-as-a-key-value-storage"},"Can I Use ClickHouse As a Key-Value Storage?"),(0,o.kt)("p",null,"The short answer is ",(0,o.kt)("strong",{parentName:"p"},"\u201cno\u201d"),". The key-value workload is among top positions in the list of cases when ",(0,o.kt)("strong",{parentName:"p"},"NOT"),"{.text-danger} to use ClickHouse. It\u2019s an ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/faq/general/olap"},"OLAP")," system after all, while there are many excellent key-value storage systems out there."),(0,o.kt)("p",null,"However, there might be situations where it still makes sense to use ClickHouse for key-value-like queries. Usually, it\u2019s some low-budget products where the main workload is analytical in nature and fits ClickHouse well, but there\u2019s also some secondary process that needs a key-value pattern with not so high request throughput and without strict latency requirements. If you had an unlimited budget, you would have installed a secondary key-value database for thus secondary workload, but in reality, there\u2019s an additional cost of maintaining one more storage system (monitoring, backups, etc.) which might be desirable to avoid."),(0,o.kt)("p",null,"If you decide to go against recommendations and run some key-value-like queries against ClickHouse, here\u2019re some tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The key reason why point queries are expensive in ClickHouse is its sparse primary index of main ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree table engine family"),". This index can\u2019t point to each specific row of data, instead, it points to each N-th and the system has to scan from the neighboring N-th row to the desired one, reading excessive data along the way. In a key-value scenario, it might be useful to reduce the value of N with the ",(0,o.kt)("inlineCode",{parentName:"li"},"index_granularity")," setting."),(0,o.kt)("li",{parentName:"ul"},"ClickHouse keeps each column in a separate set of files, so to assemble one complete row it needs to go through each of those files. Their count increases linearly with the number of columns, so in the key-value scenario, it might be worth to avoid using many columns and put all your payload in a single ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," column encoded in some serialization format like JSON, Protobuf or whatever makes sense."),(0,o.kt)("li",{parentName:"ul"},"There\u2019s an alternative approach that uses ",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/table-engines/special/join"},"Join")," table engine instead of normal ",(0,o.kt)("inlineCode",{parentName:"li"},"MergeTree")," tables and ",(0,o.kt)("a",{parentName:"li",href:"../../en/sql-reference/functions/other-functions/#joinget"},"joinGet")," function to retrieve the data. It can provide better query performance but might have some usability and reliability issues. Here\u2019s an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/00800_versatile_storage_join.sql#L49-L51"},"usage example"),".")))}f.isMDXComponent=!0}}]);