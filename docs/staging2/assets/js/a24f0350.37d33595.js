"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63353],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={sidebar_label:"Configuring ClickHouse Keeper",sidebar_position:20},s="Configuring ClickHouse Keeper",d={unversionedId:"guides/sre/clickhouse-keeper",id:"guides/sre/clickhouse-keeper",title:"Configuring ClickHouse Keeper",description:"ClickHouse Keeper is a component included in ClickHouse to handle replication and coordinated operations across nodes and clusters.",source:"@site/docs/guides/sre/clickhouse-keeper.md",sourceDirName:"guides/sre",slug:"/guides/sre/clickhouse-keeper",permalink:"/docs/staging2/docs/guides/sre/clickhouse-keeper",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Configuring ClickHouse Keeper",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"SRE Guides",permalink:"/docs/staging2/docs/guides/sre"},next:{title:"Configuring LDAP",permalink:"/docs/staging2/docs/guides/sre/configuring-ldap"}},c={},p=[{value:"1. Configure Nodes with Keeper settings",id:"1-configure-nodes-with-keeper-settings",level:2},{value:"2.  Configure a cluster in ClickHouse",id:"2--configure-a-cluster-in-clickhouse",level:2},{value:"3. Create and test distributed table",id:"3-create-and-test-distributed-table",level:2},{value:"4 Summary",id:"4-summary",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-clickhouse-keeper"},"Configuring ClickHouse Keeper"),(0,o.kt)("p",null,"ClickHouse Keeper is a component included in ClickHouse to handle replication and coordinated operations across nodes and clusters.\nThis part of the system replaces the requirement of having a separate Zookeper installation and is compatible with Zookeper for ClickHouse operations."),(0,o.kt)("p",null,"This guide provides simple and minimal settings to configure ClicKHouse Keeper with an example on how to test distributed operations. This example is performed using 3 nodes on Linux."),(0,o.kt)("h2",{id:"1-configure-nodes-with-keeper-settings"},"1. Configure Nodes with Keeper settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install 3 ClickHouse instances on 3 hosts (chnode1, chnode2, chnode3)")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"* for details on installing ClickHouse see the Getting Started guide.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On each node, add the following entry to allow external communication through the network interface.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<listen_host>0.0.0.0</listen_host>\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the following ClickHouse Keeper configuration to all three servers updating the ",(0,o.kt)("inlineCode",{parentName:"li"},"<server_id>")," setting for each server; for ",(0,o.kt)("inlineCode",{parentName:"li"},"chnode1")," would be ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"chnode2")," would be ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),", etc.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<keeper_server>\n    <tcp_port>9181</tcp_port>\n    <server_id>1</server_id>\n    <log_storage_path>/var/lib/clickhouse/coordination/log</log_storage_path>\n    <snapshot_storage_path>/var/lib/clickhouse/coordination/snapshots</snapshot_storage_path>\n\n    <coordination_settings>\n        <operation_timeout_ms>10000</operation_timeout_ms>\n        <session_timeout_ms>30000</session_timeout_ms>\n        <raft_logs_level>warning</raft_logs_level>\n    </coordination_settings>\n\n    <raft_configuration>\n        <server>\n            <id>1</id>\n            <hostname>chnode1.domain.com</hostname>\n            <port>9444</port>\n        </server>\n        <server>\n            <id>2</id>\n            <hostname>chnode2.domain.com</hostname>\n            <port>9444</port>\n        </server>\n        <server>\n            <id>3</id>\n            <hostname>chnode3.domain.com</hostname>\n            <port>9444</port>\n        </server>\n    </raft_configuration>\n</keeper_server>\n")),(0,o.kt)("p",null,"These are the basic settings used above:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tcp_port"),(0,o.kt)("td",{parentName:"tr",align:null},"port to be used by clients of keeper"),(0,o.kt)("td",{parentName:"tr",align:null},"9181 default equivalent of 2181 as in zookeeper")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server_id"),(0,o.kt)("td",{parentName:"tr",align:null},"identifier for each CLickHouse Keeper server used in raft configuration"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coordination_settings"),(0,o.kt)("td",{parentName:"tr",align:null},"section to parameters such as timeouts"),(0,o.kt)("td",{parentName:"tr",align:null},"timeouts: 10000, log level: trace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server"),(0,o.kt)("td",{parentName:"tr",align:null},"definition of server participating"),(0,o.kt)("td",{parentName:"tr",align:null},"list of each server definition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"raft_configuration"),(0,o.kt)("td",{parentName:"tr",align:null},"settings for each server in the keeper cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"server and settings for each")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"numeric id of the server for keeper services"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hostname"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname, IP or FQDN of each server in the keeper cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"chnode1.domain.com")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"port to listen on for interserver keeper connections"),(0,o.kt)("td",{parentName:"tr",align:null},"9444")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Below is link to the full configuration parameters available for ClickHouse Keeper")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/clickhouse-keeper/"},"https://clickhouse.com/docs/en/operations/clickhouse-keeper/")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Enable the Zookeeper component. It will use ClickHouse Keeper engine.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <zookeeper>\n        <node>\n            <host>chnode1.domain.com</host>\n            <port>9181</port>\n        </node>\n        <node>\n            <host>chnode2.domain.com</host>\n            <port>9181</port>\n        </node>\n        <node>\n            <host>chnode3.domain.com</host>\n            <port>9181</port>\n        </node>\n    </zookeeper>\n")),(0,o.kt)("p",null,"These are the basic settings used above:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"node"),(0,o.kt)("td",{parentName:"tr",align:null},"list of nodes for ClickHouse Keeper connections"),(0,o.kt)("td",{parentName:"tr",align:null},"settings entry for each server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname, IP or FQDN of each ClickHouse keepr node"),(0,o.kt)("td",{parentName:"tr",align:null},"chnode1.domain.com")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"ClickHouse Keeper client port"),(0,o.kt)("td",{parentName:"tr",align:null},"9181")))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"restart ClickHouse and verify that each zookeper is running. On each server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# echo ruok | nc localhost 9181; echo\nimok\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Using the ClickHouse client, check the system table for zookeeper was built. ")),(0,o.kt)("p",null,"*The output should look something like this but the values will be different."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"root@chnode1:/# clickhouse-client --user default --password ClickHouse123!\nClickHouse client version 22.2.2.1.\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 22.2.2 revision 54455.\n\nchnode1 :) SELECT * FROM system.zookeeper WHERE path IN ('/', '/clickhouse')\n\nSELECT *\nFROM system.zookeeper\nWHERE path IN ('/', '/clickhouse')\n\nQuery id: a75b1dd6-1765-42e3-870d-1f569f6cb9f4\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u252c\u2500czxid\u2500\u252c\u2500mzxid\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ctime\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mtime\u2500\u252c\u2500version\u2500\u252c\u2500cversion\u2500\u252c\u2500aversion\u2500\u252c\u2500ephemeralOwner\u2500\u252c\u2500dataLength\u2500\u252c\u2500numChildren\u2500\u252c\u2500pzxid\u2500\u252c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 clickhouse \u2502       \u2502   124 \u2502   124 \u2502 2022-03-07 00:49:34 \u2502 2022-03-07 00:49:34 \u2502       0 \u2502        2 \u2502        0 \u2502              0 \u2502          0 \u2502           2 \u2502  5693 \u2502 /           \u2502\n\u2502 task_queue \u2502       \u2502   125 \u2502   125 \u2502 2022-03-07 00:49:34 \u2502 2022-03-07 00:49:34 \u2502       0 \u2502        1 \u2502        0 \u2502              0 \u2502          0 \u2502           1 \u2502   126 \u2502 /clickhouse \u2502\n\u2502 tables     \u2502       \u2502  5693 \u2502  5693 \u2502 2022-03-07 00:49:34 \u2502 2022-03-07 00:49:34 \u2502       0 \u2502        3 \u2502        0 \u2502              0 \u2502          0 \u2502           3 \u2502  6461 \u2502 /clickhouse \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n3 rows in set. Elapsed: 0.009 sec.\n")),(0,o.kt)("h2",{id:"2--configure-a-cluster-in-clickhouse"},"2.  Configure a cluster in ClickHouse"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure a simple cluster with 2 shards and only one replica on 2 of the nodes. The 3rd node will be used to achieve quorum for the requirement in ClickHouse Keeper that there be an odd number nodes.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*update the configuration on chnode1 and chnode2. This will define 1 shard on each node for a total of 2 shards with no replication. In this example, some of the data will be on node and some will be on the other node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        <cluster_2S_1R>\n            <shard>\n                <replica>\n                    <host>chnode1.domain.com</host>\n                    <port>9000</port>\n                    <user>default</user>\n                    <password>ClickHouse123!</password>\n                </replica>\n            </shard>\n            <shard>\n                <replica>\n                    <host>chnode2.domain.com</host>\n                    <port>9000</port>\n                    <user>default</user>\n                    <password>ClickHouse123!</password>\n                </replica>\n            </shard>\n        </cluster_2S_1R>\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"shard"),(0,o.kt)("td",{parentName:"tr",align:null},"list of replicas on the cluster definition"),(0,o.kt)("td",{parentName:"tr",align:null},"list of replicas for each shard")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"replica"),(0,o.kt)("td",{parentName:"tr",align:null},"list of settings for each replica"),(0,o.kt)("td",{parentName:"tr",align:null},"settings entries for each replica")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname, IP or FQDN of server that will host a replica shard"),(0,o.kt)("td",{parentName:"tr",align:null},"chnode1.domain.com")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"port used to communicate using the native tcp protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"9000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"username that will be used to authenticate to the cluster instances"),(0,o.kt)("td",{parentName:"tr",align:null},"default")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"password"),(0,o.kt)("td",{parentName:"tr",align:null},"password for the user define to allow connections to cluster instances"),(0,o.kt)("td",{parentName:"tr",align:null},"ClickHouse123!")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," fields are required if password was set for ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," user as in the case of installing through .",(0,o.kt)("inlineCode",{parentName:"p"},"deb")," packages or was set manually in ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," . There are additional options available such as setting a ",(0,o.kt)("inlineCode",{parentName:"p"},"<secret>")," key. "))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Restart ClickHouse and verify clusters are available")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"root@chnode1:/# clickhouse-client --user default --password ClickHouse123!\nClickHouse client version 22.2.2.1.\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 22.2.2 revision 54455.\n\nchnode1 :) show clusters;\n\nSHOW CLUSTERS\n\nQuery id: 33e129b4-0d9c-489f-9b4c-de55c05c9dda\n\n\u250c\u2500cluster\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 cluster_1S_2R \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,o.kt)("h2",{id:"3-create-and-test-distributed-table"},"3. Create and test distributed table"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new database on the new cluster using ClickHouse client on ",(0,o.kt)("inlineCode",{parentName:"li"},"chnode1"),":")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*This command will automatically create the database on both nodes where the cluster is defined.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1 ON CLUSTER 'cluster_2S_1R';\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a new table on the ",(0,o.kt)("inlineCode",{parentName:"li"},"db1")," database:\n",(0,o.kt)("em",{parentName:"li"},"This command will automatically create the table on both nodes where the cluster is defined."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table1 on cluster 'cluster_2S_1R'\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = MergeTree\nORDER BY column1\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On first node, ",(0,o.kt)("inlineCode",{parentName:"li"},"chnode1")," add sample data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into db1.table1\n(id, column1)\nVALUES\n(1, 'abc'),\n(2, 'def')\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"On second node, ",(0,o.kt)("inlineCode",{parentName:"li"},"chnode2")," add different sample data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into db1.table1\n(id, column1)\nVALUES\n(3, 'ghi'),\n(4, 'jkl')\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"From each node, run a select statement and should only show the data from that node.")),(0,o.kt)("p",null,"On ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"chnode1 :) SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: 7ef1edbc-df25-462b-a9d4-3fe6f9cb0b6d\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 0.006 sec.\n")),(0,o.kt)("p",null,"On ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chnode2 :)  SELECT * FROM db1.table1;\n\nSELECT *\nFROM db1.table1\n\nQuery id: c43763cc-c69c-4bcc-afbe-50e764adfcbf\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create a distributed table on ",(0,o.kt)("inlineCode",{parentName:"li"},"chnode1")," ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table db1.dist_table1 (\n  id UInt64,\n  column1 String\n)\nENGINE = Distributed(cluster_2S_1R,db1,table1)\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"View data across the nodes and cluster in table1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"chnode1 :) SELECT * FROM db1.dist_table1;\n\nSELECT *\nFROM db1.dist_table1\n\nQuery id: 495bffa0-f849-4a0c-aeea-d7115a54747a\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.018 sec.\n")),(0,o.kt)("h2",{id:"4-summary"},"4 Summary"),(0,o.kt)("p",null,"This guide demostrated basic configuration for CLickHouse Keeper for use in ClickHouse DB with definition of a basic cluster and distributed operations.  In addition, ClickHouse Keeper is the component used for replication of data. See documentation for ReplicatedMergeTree, Materialized Views and Distributed tables user guides for more advanced methods and options."))}m.isMDXComponent=!0}}]);