"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32291],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),g=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=g(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=g(t),c=a,d=p["".concat(o,".").concat(c)]||p[c]||u[c]||r;return t?i.createElement(d,l(l({ref:n},m),{},{components:t})):i.createElement(d,l({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var g=2;g<r;g++)l[g]=t[g];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},18794:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return u}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],s={toc_folder_title:"Table Engines",toc_priority:26,toc_title:"Introduction"},o="Table Engines",g={unversionedId:"en/engines/table-engines/index",id:"en/engines/table-engines/index",title:"Table Engines",description:"table_engines}",source:"@site/docs/en/engines/table-engines/index.md",sourceDirName:"en/engines/table-engines",slug:"/en/engines/table-engines/",permalink:"/docs/en/engines/table-engines/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/index.md",tags:[],version:"current",frontMatter:{toc_folder_title:"Table Engines",toc_priority:26,toc_title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"MaterializedMySQL",permalink:"/docs/en/engines/database-engines/materialized-mysql"},next:{title:"MergeTree Family",permalink:"/docs/en/engines/table-engines/mergetree-family/"}},m={},u=[{value:"Engine Families",id:"engine-families",level:2},{value:"MergeTree",id:"mergetree",level:3},{value:"Log",id:"log",level:3},{value:"Integration Engines",id:"integration-engines",level:3},{value:"Special Engines",id:"special-engines",level:3},{value:"Virtual Columns",id:"table_engines-virtual_columns",level:2}],p={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table_engines"},"Table Engines"),(0,r.kt)("p",null,"The table engine (type of table) determines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How and where data is stored, where to write it to, and where to read it from."),(0,r.kt)("li",{parentName:"ul"},"Which queries are supported, and how."),(0,r.kt)("li",{parentName:"ul"},"Concurrent data access."),(0,r.kt)("li",{parentName:"ul"},"Use of indexes, if present."),(0,r.kt)("li",{parentName:"ul"},"Whether multithreaded request execution is possible."),(0,r.kt)("li",{parentName:"ul"},"Data replication parameters.")),(0,r.kt)("h2",{id:"engine-families"},"Engine Families"),(0,r.kt)("h3",{id:"mergetree"},"MergeTree"),(0,r.kt)("p",null,"The most universal and functional table engines for high-load tasks. The property shared by these engines is quick data insertion with subsequent background data processing. ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," family engines support data replication (with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication#table_engines-replication"},"Replicated","*")," versions of engines), partitioning, secondary data-skipping indexes, and other features not supported in other engines."),(0,r.kt)("p",null,"Engines in the family:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#mergetree"},"MergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/replacingmergetree#replacingmergetree"},"ReplacingMergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/summingmergetree#summingmergetree"},"SummingMergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree#aggregatingmergetree"},"AggregatingMergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/collapsingmergetree#table_engine-collapsingmergetree"},"CollapsingMergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree#versionedcollapsingmergetree"},"VersionedCollapsingMergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/graphitemergetree#graphitemergetree"},"GraphiteMergeTree"))),(0,r.kt)("h3",{id:"log"},"Log"),(0,r.kt)("p",null,"Lightweight ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/"},"engines")," with minimum functionality. They\u2019re the most effective when you need to quickly write many small tables (up to approximately 1 million rows) and read them later as a whole."),(0,r.kt)("p",null,"Engines in the family:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/log-family/tinylog#tinylog"},"TinyLog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/log-family/stripelog#stripelog"},"StripeLog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/log-family/log#log"},"Log"))),(0,r.kt)("h3",{id:"integration-engines"},"Integration Engines"),(0,r.kt)("p",null,"Engines for communicating with other data storage and processing systems."),(0,r.kt)("p",null,"Engines in the family:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/odbc"},"ODBC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/jdbc"},"JDBC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mysql"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mongodb"},"MongoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/hdfs"},"HDFS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/s3"},"S3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/kafka"},"Kafka")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/embedded-rocksdb"},"EmbeddedRocksDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/rabbitmq"},"RabbitMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/postgresql"},"PostgreSQL"))),(0,r.kt)("h3",{id:"special-engines"},"Special Engines"),(0,r.kt)("p",null,"Engines in the family:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/distributed#distributed"},"Distributed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/materializedview#materializedview"},"MaterializedView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/dictionary#dictionary"},"Dictionary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/merge#merge"},"Merge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/file#file"},"File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/null#null"},"Null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/set#set"},"Set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/join#join"},"Join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/url#table_engines-url"},"URL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/view#table_engines-view"},"View")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/memory#memory"},"Memory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/buffer#buffer"},"Buffer"))),(0,r.kt)("h2",{id:"table_engines-virtual_columns"},"Virtual Columns"),(0,r.kt)("p",null,"Virtual column is an integral table engine attribute that is defined in the engine source code."),(0,r.kt)("p",null,"You shouldn\u2019t specify virtual columns in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," query and you can\u2019t see them in ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DESCRIBE TABLE")," query results. Virtual columns are also read-only, so you can\u2019t insert data into virtual columns."),(0,r.kt)("p",null,"To select data from a virtual column, you must specify its name in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query. ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT *")," does not return values from virtual columns."),(0,r.kt)("p",null,"If you create a table with a column that has the same name as one of the table virtual columns, the virtual column becomes inaccessible. We do not recommend doing this. To help avoid conflicts, virtual column names are usually prefixed with an underscore."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/"},"Original article")," "))}c.isMDXComponent=!0}}]);