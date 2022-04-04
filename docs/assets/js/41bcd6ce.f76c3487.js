"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98058],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,d=m["".concat(s,".").concat(u)]||m[u]||k[u]||i;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70957:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:8,sidebar_label:"Kafka"},s="Kafka",c={unversionedId:"en/engines/table-engines/integrations/kafka",id:"en/engines/table-engines/integrations/kafka",title:"Kafka",description:"kafka}",source:"@site/docs/en/engines/table-engines/integrations/kafka.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/kafka",permalink:"/docs/docs/en/engines/table-engines/integrations/kafka",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Kafka"},sidebar:"tutorialSidebar",previous:{title:"SQLite",permalink:"/docs/docs/en/engines/table-engines/integrations/sqlite"},next:{title:"EmbeddedRocksDB",permalink:"/docs/docs/en/engines/table-engines/integrations/embedded-rocksdb"}},p={},k=[{value:"Creating a Table",id:"table_engine-kafka-creating-a-table",level:2},{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Kerberos support",id:"kafka-kerberos-support",level:3},{value:"Virtual Columns",id:"virtual-columns",level:2}],m={toc:k};function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("p",null,"This engine works with ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Apache Kafka"),"."),(0,i.kt)("p",null,"Kafka lets you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publish or subscribe to data flows."),(0,i.kt)("li",{parentName:"ul"},"Organize fault-tolerant storage."),(0,i.kt)("li",{parentName:"ul"},"Process streams as they become available.")),(0,i.kt)("h2",{id:"table_engine-kafka-creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = Kafka()\nSETTINGS\n    kafka_broker_list = 'host:port',\n    kafka_topic_list = 'topic1,topic2,...',\n    kafka_group_name = 'group_name',\n    kafka_format = 'data_format'[,]\n    [kafka_row_delimiter = 'delimiter_symbol',]\n    [kafka_schema = '',]\n    [kafka_num_consumers = N,]\n    [kafka_max_block_size = 0,]\n    [kafka_skip_broken_messages = N,]\n    [kafka_commit_every_batch = 0,]\n    [kafka_thread_per_consumer = 0]\n")),(0,i.kt)("p",null,"Required parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_broker_list")," \u2014 A comma-separated list of brokers (for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:9092"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_topic_list")," \u2014 A list of Kafka topics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_group_name")," \u2014 A group of Kafka consumers. Reading margins are tracked for each group separately. If you do not want messages to be duplicated in the cluster, use the same group name everywhere."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_format")," \u2014 Message format. Uses the same notation as the SQL ",(0,i.kt)("inlineCode",{parentName:"li"},"FORMAT")," function, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"JSONEachRow"),". For more information, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/interfaces/formats"},"Formats")," section.")),(0,i.kt)("p",null,"Optional parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_row_delimiter")," \u2014 Delimiter character, which ends the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_schema")," \u2014 Parameter that must be used if the format requires a schema definition. For example, ",(0,i.kt)("a",{parentName:"li",href:"https://capnproto.org/"},"Cap\u2019n Proto")," requires the path to the schema file and the name of the root ",(0,i.kt)("inlineCode",{parentName:"li"},"schema.capnp:Message")," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_num_consumers")," \u2014 The number of consumers per table. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". Specify more consumers if the throughput of one consumer is insufficient. The total number of consumers should not exceed the number of partitions in the topic, since only one consumer can be assigned per partition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_max_block_size")," \u2014 The maximum batch size (in messages) for poll (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"max_block_size"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_skip_broken_messages")," \u2014 Kafka message parser tolerance to schema-incompatible messages per block. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"kafka_skip_broken_messages = N")," then the engine skips ",(0,i.kt)("em",{parentName:"li"},"N")," Kafka messages that cannot be parsed (a message equals a row of data)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_commit_every_batch")," \u2014 Commit every consumed and handled batch instead of a single commit after writing a whole block (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_thread_per_consumer")," \u2014 Provide independent thread for each consumer (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"). When enabled, every consumer flush the data independently, in parallel (otherwise \u2014 rows from several consumers squashed to form one block).")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka('localhost:9092', 'topic', 'group1', 'JSONEachRow');\n\n  SELECT * FROM queue LIMIT 5;\n\n  CREATE TABLE queue2 (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka SETTINGS kafka_broker_list = 'localhost:9092',\n                            kafka_topic_list = 'topic',\n                            kafka_group_name = 'group1',\n                            kafka_format = 'JSONEachRow',\n                            kafka_num_consumers = 4;\n\n  CREATE TABLE queue3 (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka('localhost:9092', 'topic', 'group1')\n              SETTINGS kafka_format = 'JSONEachRow',\n                       kafka_num_consumers = 4;\n")),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not use this method in new projects. If possible, switch old projects to the method described above."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Kafka(kafka_broker_list, kafka_topic_list, kafka_group_name, kafka_format\n      [, kafka_row_delimiter, kafka_schema, kafka_num_consumers, kafka_skip_broken_messages])\n"))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The delivered messages are tracked automatically, so each message in a group is only counted once. If you want to get the data twice, then create a copy of the table with another group name."),(0,i.kt)("p",null,"Groups are flexible and synced on the cluster. For instance, if you have 10 topics and 5 copies of a table in a cluster, then each copy gets 2 topics. If the number of copies changes, the topics are redistributed across the copies automatically. Read more about this at ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/intro"},"http://kafka.apache.org/intro"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," is not particularly useful for reading messages (except for debugging), because each message can be read only once. It is more practical to create real-time threads using materialized views. To do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the engine to create a Kafka consumer and consider it a data stream."),(0,i.kt)("li",{parentName:"ol"},"Create a table with the desired structure."),(0,i.kt)("li",{parentName:"ol"},"Create a materialized view that converts data from the engine and puts it into a previously created table.")),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED VIEW")," joins the engine, it starts collecting data in the background. This allows you to continually receive messages from Kafka and convert them to the required format using ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),".\nOne kafka table can have as many materialized views as you like, they do not read data from the kafka table directly, but receive new records (in blocks), this way you can write to several tables with different detail level (with grouping - aggregation and without)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka('localhost:9092', 'topic', 'group1', 'JSONEachRow');\n\n  CREATE TABLE daily (\n    day Date,\n    level String,\n    total UInt64\n  ) ENGINE = SummingMergeTree(day, (day, level), 8192);\n\n  CREATE MATERIALIZED VIEW consumer TO daily\n    AS SELECT toDate(toDateTime(timestamp)) AS day, level, count() as total\n    FROM queue GROUP BY day, level;\n\n  SELECT level, sum(total) FROM daily GROUP BY level;\n")),(0,i.kt)("p",null,"To improve performance, received messages are grouped into blocks the size of ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#settings-max_insert_block_size"},"max_insert_block_size"),". If the block wasn\u2019t formed within ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings//#stream-flush-interval-ms"},"stream_flush_interval_ms")," milliseconds, the data will be flushed to the table regardless of the completeness of the block."),(0,i.kt)("p",null,"To stop receiving topic data or to change the conversion logic, detach the materialized view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  DETACH TABLE consumer;\n  ATTACH TABLE consumer;\n")),(0,i.kt)("p",null,"If you want to change the target table by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER"),", we recommend disabling the material view to avoid discrepancies between the target table and the data from the view."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Similar to GraphiteMergeTree, the Kafka engine supports extended configuration using the ClickHouse config file. There are two configuration keys that you can use: global (",(0,i.kt)("inlineCode",{parentName:"p"},"kafka"),") and topic-level (",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_*"),"). The global configuration is applied first, and then the topic-level configuration is applied (if it exists)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- Global configuration options for all tables of Kafka engine type --\x3e\n  <kafka>\n    <debug>cgrp</debug>\n    <auto_offset_reset>smallest</auto_offset_reset>\n  </kafka>\n\n  \x3c!-- Configuration specific for topic "logs" --\x3e\n  <kafka_logs>\n    <retry_backoff_ms>250</retry_backoff_ms>\n    <fetch_min_bytes>100000</fetch_min_bytes>\n  </kafka_logs>\n')),(0,i.kt)("p",null,"For a list of possible configuration options, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"librdkafka configuration reference"),". Use the underscore (",(0,i.kt)("inlineCode",{parentName:"p"},"_"),") instead of a dot in the ClickHouse configuration. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"check.crcs=true")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"<check_crcs>true</check_crcs>"),"."),(0,i.kt)("h3",{id:"kafka-kerberos-support"},"Kerberos support"),(0,i.kt)("p",null,"To deal with Kerberos-aware Kafka, add ",(0,i.kt)("inlineCode",{parentName:"p"},"security_protocol")," child element with ",(0,i.kt)("inlineCode",{parentName:"p"},"sasl_plaintext")," value. It is enough if Kerberos ticket-granting ticket is obtained and cached by OS facilities.\nClickHouse is able to maintain Kerberos credentials using a keytab file. Consider ",(0,i.kt)("inlineCode",{parentName:"p"},"sasl_kerberos_service_name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sasl_kerberos_keytab"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sasl_kerberos_principal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sasl.kerberos.kinit.cmd")," child elements."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- Kerberos-aware Kafka --\x3e\n  <kafka>\n    <security_protocol>SASL_PLAINTEXT</security_protocol>\n    <sasl_kerberos_keytab>/home/kafkauser/kafkauser.keytab</sasl_kerberos_keytab>\n    <sasl_kerberos_principal>kafkauser/kafkahost@EXAMPLE.COM</sasl_kerberos_principal>\n  </kafka>\n")),(0,i.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_topic")," \u2014 Kafka topic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_key")," \u2014 Key of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_offset")," \u2014 Offset of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_timestamp")," \u2014 Timestamp of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_timestamp_ms")," \u2014 Timestamp in milliseconds of the message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_partition")," \u2014 Partition of Kafka topic.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/table-engines/#table_engines-virtual_columns"},"Virtual columns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#background_message_broker_schedule_pool_size"},"background_message_broker_schedule_pool_size"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/kafka/"},"Original article")," "))}u.isMDXComponent=!0}}]);