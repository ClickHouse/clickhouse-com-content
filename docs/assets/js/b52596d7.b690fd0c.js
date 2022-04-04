"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68199],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69695:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],o={sidebar_position:10,sidebar_label:"Distributed"},l="Distributed Table Engine",d={unversionedId:"en/engines/table-engines/special/distributed",id:"en/engines/table-engines/special/distributed",title:"Distributed Table Engine",description:"distributed}",source:"@site/docs/en/engines/table-engines/special/distributed.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/distributed",permalink:"/docs/docs/en/engines/table-engines/special/distributed",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Distributed"},sidebar:"tutorialSidebar",previous:{title:"Special",permalink:"/docs/docs/en/engines/table-engines/special/"},next:{title:"Dictionary",permalink:"/docs/docs/en/engines/table-engines/special/dictionary"}},p={},c=[{value:"Creating a Table",id:"distributed-creating-a-table",level:2},{value:"From a Table",id:"distributed-from-a-table",level:3},{value:"Clusters",id:"distributed-clusters",level:2},{value:"Writing data",id:"distributed-writing-data",level:2},{value:"Reading data",id:"distributed-reading-data",level:2},{value:"Virtual Columns",id:"virtual-columns",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distributed"},"Distributed Table Engine"),(0,r.kt)("p",null,"Tables with Distributed engine do not store any data of their own, but allow distributed query processing on multiple servers.\nReading is automatically parallelized. During a read, the table indexes on remote servers are used, if there are any."),(0,r.kt)("h2",{id:"distributed-creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = Distributed(cluster, database, table[, sharding_key[, policy_name]])\n[SETTINGS name=value, ...]\n")),(0,r.kt)("h3",{id:"distributed-from-a-table"},"From a Table"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table is pointing to a table on the current server you can adopt that table's schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster] AS [db2.]name2 ENGINE = Distributed(cluster, database, table[, sharding_key[, policy_name]]) [SETTINGS name=value, ...]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Distributed Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cluster")," - the cluster name in the server\u2019s config file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"database")," - the name of a remote database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table")," - the name of a remote table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sharding_key")," - (optionally) sharding key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"policy_name")," - (optionally) policy name, it will be used to store temporary files for async send"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#insert_distributed_sync"},"insert_distributed_sync")," setting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"MergeTree")," for the examples")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Distributed Settings")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fsync_after_insert")," - do the ",(0,r.kt)("inlineCode",{parentName:"p"},"fsync")," for the file data after asynchronous insert to Distributed. Guarantees that the OS flushed the whole inserted data to a file ",(0,r.kt)("strong",{parentName:"p"},"on the initiator node")," disk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fsync_directories")," - do the ",(0,r.kt)("inlineCode",{parentName:"p"},"fsync")," for directories. Guarantees that the OS refreshed directory metadata after operations related to asynchronous inserts on Distributed table (after insert, after sending the data to shard, etc).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bytes_to_throw_insert")," - if more than this number of compressed bytes will be pending for async INSERT, an exception will be thrown. 0 - do not throw. Default 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bytes_to_delay_insert")," - if more than this number of compressed bytes will be pending for async INSERT, the query will be delayed. 0 - do not delay. Default 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_delay_to_insert")," - max delay of inserting data into Distributed table in seconds, if there are a lot of pending bytes for async send. Default 60.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"monitor_batch_inserts")," - same as ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_batch_inserts"},"distributed_directory_monitor_batch_inserts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"monitor_split_batch_on_failure")," - same as ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_split_batch_on_failure"},"distributed_directory_monitor_split_batch_on_failure"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"monitor_sleep_time_ms")," - same as ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_sleep_time_ms"},"distributed_directory_monitor_sleep_time_ms"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"monitor_max_sleep_time_ms")," - same as ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_max_sleep_time_ms"},"distributed_directory_monitor_max_sleep_time_ms")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Durability settings")," (",(0,r.kt)("inlineCode",{parentName:"p"},"fsync_..."),"):"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Affect only asynchronous INSERTs (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"insert_distributed_sync=false"),") when data first stored on the initiator node disk and later asynchronously send to shards."),(0,r.kt)("li",{parentName:"ul"},"May significantly decrease the inserts' performance"),(0,r.kt)("li",{parentName:"ul"},"Affect writing the data stored inside Distributed table folder into the ",(0,r.kt)("strong",{parentName:"li"},"node which accepted your insert"),". If you need to have guarantees of writing data to underlying MergeTree tables - see durability settings (",(0,r.kt)("inlineCode",{parentName:"li"},"...fsync..."),") in ",(0,r.kt)("inlineCode",{parentName:"li"},"system.merge_tree_settings"))),(0,r.kt)("p",{parentName:"div"},"For ",(0,r.kt)("strong",{parentName:"p"},"Insert limit settings")," (",(0,r.kt)("inlineCode",{parentName:"p"},"..._insert"),") see also:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#insert_distributed_sync"},"insert_distributed_sync")," setting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#settings-prefer-localhost-replica"},"prefer_localhost_replica")," setting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes_to_throw_insert")," handled before ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes_to_delay_insert"),", so you should not set it to the value less then ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes_to_delay_insert"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits_all AS hits\nENGINE = Distributed(logs, default, hits[, sharding_key[, policy_name]])\nSETTINGS\n    fsync_after_insert=0,\n    fsync_directories=0;\n")),(0,r.kt)("p",null,"Data will be read from all servers in the ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," cluster, from the ",(0,r.kt)("inlineCode",{parentName:"p"},"default.hits")," table located on every server in the cluster.\nData is not only read but is partially processed on the remote servers (to the extent that this is possible).\nFor example, for a query with ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", data will be aggregated on remote servers, and the intermediate states of aggregate functions will be sent to the requestor server. Then data will be further aggregated."),(0,r.kt)("p",null,"Instead of the database name, you can use a constant expression that returns a string. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"currentDatabase()"),"."),(0,r.kt)("h2",{id:"distributed-clusters"},"Clusters"),(0,r.kt)("p",null,"Clusters are configured in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/configuration-files"},"server configuration file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<remote_servers>\n    <logs>\n        \x3c!-- Inter-server per-cluster secret for Distributed queries\n             default: no secret (no authentication will be performed)\n\n             If set, then Distributed queries will be validated on shards, so at least:\n             - such cluster should exist on the shard,\n             - such cluster should have the same secret.\n\n             And also (and which is more important), the initial_user will\n             be used as current user for the query.\n        --\x3e\n        \x3c!-- <secret></secret> --\x3e\n        <shard>\n            \x3c!-- Optional. Shard weight when writing data. Default: 1. --\x3e\n            <weight>1</weight>\n            \x3c!-- Optional. Whether to write data to just one of the replicas. Default: false (write data to all replicas). --\x3e\n            <internal_replication>false</internal_replication>\n            <replica>\n                \x3c!-- Optional. Priority of the replica for load balancing (see also load_balancing setting). Default: 1 (less value has more priority). --\x3e\n                <priority>1</priority>\n                <host>example01-01-1</host>\n                <port>9000</port>\n            </replica>\n            <replica>\n                <host>example01-01-2</host>\n                <port>9000</port>\n            </replica>\n        </shard>\n        <shard>\n            <weight>2</weight>\n            <internal_replication>false</internal_replication>\n            <replica>\n                <host>example01-02-1</host>\n                <port>9000</port>\n            </replica>\n            <replica>\n                <host>example01-02-2</host>\n                <secure>1</secure>\n                <port>9440</port>\n            </replica>\n        </shard>\n    </logs>\n</remote_servers>\n")),(0,r.kt)("p",null,"Here a cluster is defined with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," that consists of two shards, each of which contains two replicas.\nShards refer to the servers that contain different parts of the data (in order to read all the data, you must access all the shards).\nReplicas are duplicating servers (in order to read all the data, you can access the data on any one of the replicas)."),(0,r.kt)("p",null,"Cluster names must not contain dots."),(0,r.kt)("p",null,"The parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"port"),", and optionally ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compression")," are specified for each server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host")," \u2013 The address of the remote server. You can use either the domain or the IPv4 or IPv6 address. If you specify the domain, the server makes a DNS request when it starts, and the result is stored as long as the server is running. If the DNS request fails, the server does not start. If you change the DNS record, restart the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," \u2013 The TCP port for messenger activity (",(0,r.kt)("inlineCode",{parentName:"li"},"tcp_port")," in the config, usually set to 9000). Not to be confused with ",(0,r.kt)("inlineCode",{parentName:"li"},"http_port"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2013 Name of the user for connecting to a remote server. Default value is the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," user. This user must have access to connect to the specified server. Access is configured in the ",(0,r.kt)("inlineCode",{parentName:"li"},"users.xml")," file. For more information, see the section ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/access-rights"},"Access rights"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," \u2013 The password for connecting to a remote server (not masked). Default value: empty string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secure")," - Whether to use a secure SSL/TLS connection. Usually also requires specifying the port (the default secure port is ",(0,r.kt)("inlineCode",{parentName:"li"},"9440"),"). The server should listen on ",(0,r.kt)("inlineCode",{parentName:"li"},"<tcp_port_secure>9440</tcp_port_secure>")," and be configured with correct certificates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compression")," - Use data compression. Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("p",null,"When specifying replicas, one of the available replicas will be selected for each of the shards when reading. You can configure the algorithm for load balancing (the preference for which replica to access) \u2013 see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#settings-load_balancing"},"load_balancing")," setting.\nIf the connection with the server is not established, there will be an attempt to connect with a short timeout. If the connection failed, the next replica will be selected, and so on for all the replicas. If the connection attempt failed for all the replicas, the attempt will be repeated the same way, several times.\nThis works in favour of resiliency, but does not provide complete fault tolerance: a remote server might accept the connection, but might not work, or work poorly."),(0,r.kt)("p",null,"You can specify just one of the shards (in this case, query processing should be called remote, rather than distributed) or up to any number of shards. In each shard, you can specify from one to any number of replicas. You can specify a different number of replicas for each shard."),(0,r.kt)("p",null,"You can specify as many clusters as you wish in the configuration."),(0,r.kt)("p",null,"To view your clusters, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"system.clusters")," table."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," engine allows working with a cluster like a local server. However, the cluster's configuration cannot be specified dynamically, it has to be configured in the server config file. Usually, all servers in a cluster will have the same cluster config (though this is not required). Clusters from the config file are updated on the fly, without restarting the server."),(0,r.kt)("p",null,"If you need to send a query to an unknown set of shards and replicas each time, you do not need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table \u2013 use the ",(0,r.kt)("inlineCode",{parentName:"p"},"remote")," table function instead. See the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/table-functions/"},"Table functions"),"."),(0,r.kt)("h2",{id:"distributed-writing-data"},"Writing data"),(0,r.kt)("p",null,"There are two methods for writing data to a cluster:"),(0,r.kt)("p",null,"First, you can define which servers to write which data to and perform the write directly on each shard. In other words, perform direct ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements on the remote tables in the cluster that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table is pointing to. This is the most flexible solution as you can use any sharding scheme, even one that is non-trivial due to the requirements of the subject area. This is also the most optimal solution since data can be written to different shards completely independently."),(0,r.kt)("p",null,"Second, you can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table. In this case, the table will distribute the inserted data across the servers itself. In order to write to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table, it must have the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharding_key")," parameter configured (except if there is only one shard)."),(0,r.kt)("p",null,"Each shard can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"<weight>")," defined in the config file. By default, the weight is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". Data is distributed across shards in the amount proportional to the shard weight. All shard weights are summed up, then each shard's weight is divided by the total to determine each shard's proportion. For example, if there are two shards and the first has a weight of 1 while the second has a weight of 2, the first will be sent one third (1 / 3) of inserted rows and the second will be sent two thirds (2 / 3)."),(0,r.kt)("p",null,"Each shard can have the ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_replication")," parameter defined in the config file. If this parameter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the write operation selects the first healthy replica and writes data to it. Use this if the tables underlying the ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table are replicated tables (e.g. any of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Replicated*MergeTree")," table engines). One of the table replicas will receive the write and it will be replicated to the other replicas automatically."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_replication")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (the default), data is written to all replicas. In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table replicates data itself. This is worse than using replicated tables because the consistency of replicas is not checked and, over time, they will contain slightly different data."),(0,r.kt)("p",null,"To select the shard that a row of data is sent to, the sharding expression is analyzed, and its remainder is taken from dividing it by the total weight of the shards. The row is sent to the shard that corresponds to the half-interval of the remainders from ",(0,r.kt)("inlineCode",{parentName:"p"},"prev_weights")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"prev_weights + weight"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"prev_weights")," is the total weight of the shards with the smallest number, and ",(0,r.kt)("inlineCode",{parentName:"p"},"weight")," is the weight of this shard. For example, if there are two shards, and the first has a weight of 9 while the second has a weight of 10, the row will be sent to the first shard for the remainders from the range ","[","0, 9), and to the second for the remainders from the range ","[","9, 19)."),(0,r.kt)("p",null,"The sharding expression can be any expression from constants and table columns that returns an integer. For example, you can use the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"rand()")," for random distribution of data, or ",(0,r.kt)("inlineCode",{parentName:"p"},"UserID")," for distribution by the remainder from dividing the user\u2019s ID (then the data of a single user will reside on a single shard, which simplifies running ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," by users). If one of the columns is not distributed evenly enough, you can wrap it in a hash function e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"intHash64(UserID)"),"."),(0,r.kt)("p",null,"A simple remainder from the division is a limited solution for sharding and isn\u2019t always appropriate. It works for medium and large volumes of data (dozens of servers), but not for very large volumes of data (hundreds of servers or more). In the latter case, use the sharding scheme required by the subject area rather than using entries in ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," tables."),(0,r.kt)("p",null,"You should be concerned about the sharding scheme in the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Queries are used that require joining data (",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),") by a specific key. If data is sharded by this key, you can use local ",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"GLOBAL IN")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"GLOBAL JOIN"),", which is much more efficient."),(0,r.kt)("li",{parentName:"ul"},"A large number of servers is used (hundreds or more) with a large number of small queries, for example, queries for data of individual clients (e.g. websites, advertisers, or partners). In order for the small queries to not affect the entire cluster, it makes sense to locate data for a single client on a single shard. Alternatively, you can set up bi-level sharding: divide the entire cluster into \u201clayers\u201d, where a layer may consist of multiple shards. Data for a single client is located on a single layer, but shards can be added to a layer as necessary, and data is randomly distributed within them. ",(0,r.kt)("inlineCode",{parentName:"li"},"Distributed")," tables are created for each layer, and a single shared distributed table is created for global queries.")),(0,r.kt)("p",null,"Data is written asynchronously. When inserted in the table, the data block is just written to the local file system. The data is sent to the remote servers in the background as soon as possible. The periodicity for sending data is managed by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_sleep_time_ms"},"distributed_directory_monitor_sleep_time_ms")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_max_sleep_time_ms"},"distributed_directory_monitor_max_sleep_time_ms")," settings. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," engine sends each file with inserted data separately, but you can enable batch sending of files with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#distributed_directory_monitor_batch_inserts"},"distributed_directory_monitor_batch_inserts")," setting. This setting improves cluster performance by better utilizing local server and network resources. You should check whether data is sent successfully by checking the list of files (data waiting to be sent) in the table directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/database/table/"),". The number of threads performing background tasks can be set by ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#background_distributed_schedule_pool_size"},"background_distributed_schedule_pool_size")," setting."),(0,r.kt)("p",null,"If the server ceased to exist or had a rough restart (for example, due to a hardware failure) after an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table, the inserted data might be lost. If a damaged data part is detected in the table directory, it is transferred to the ",(0,r.kt)("inlineCode",{parentName:"p"},"broken")," subdirectory and no longer used."),(0,r.kt)("h2",{id:"distributed-reading-data"},"Reading data"),(0,r.kt)("p",null,"When querying a ",(0,r.kt)("inlineCode",{parentName:"p"},"Distributed")," table, ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries are sent to all shards and work regardless of how data is distributed across the shards (they can be distributed completely randomly). When you add a new shard, you do not have to transfer old data into it. Instead, you can write new data to it by using a heavier weight \u2013 the data will be distributed slightly unevenly, but queries will work correctly and efficiently."),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_parallel_replicas")," option is enabled, query processing is parallelized across all replicas within a single shard. For more information, see the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#settings-max_parallel_replicas"},"max_parallel_replicas"),"."),(0,r.kt)("p",null,"To learn more about how distibuted ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"global in")," queries are processed, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/operators/in#select-distributed-subqueries"},"this")," documentation. "),(0,r.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_shard_num")," \u2014 Contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"shard_num")," value from the table ",(0,r.kt)("inlineCode",{parentName:"li"},"system.clusters"),". Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/table-functions/remote"},"remote")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/table-functions/cluster"},"cluster")," table functions internally create temporary Distributed table, ",(0,r.kt)("inlineCode",{parentName:"p"},"_shard_num")," is available there too."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/table-engines/#table_engines-virtual_columns"},"Virtual columns")," description"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#background_distributed_schedule_pool_size"},"background_distributed_schedule_pool_size")," setting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/functions/other-functions#shard-num"},"shardNum()")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs/en/sql-reference/functions/other-functions#shard-count"},"shardCount()")," functions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/distributed/"},"Original article")," "))}h.isMDXComponent=!0}}]);