"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29323],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84230:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),r=["components"],o={sidebar_label:"Kafka Table Engine",sidebar_position:3,description:"Using the Kafka Table Engine"},l="Using the Kafka table engine",u={unversionedId:"integrations/kafka/kafka-table-engine",id:"integrations/kafka/kafka-table-engine",title:"Using the Kafka table engine",description:"Using the Kafka Table Engine",source:"@site/docs/integrations/kafka/kafka-table-engine.md",sourceDirName:"integrations/kafka",slug:"/integrations/kafka/kafka-table-engine",permalink:"/docs/integrations/kafka/kafka-table-engine",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Kafka Table Engine",sidebar_position:3,description:"Using the Kafka Table Engine"},sidebar:"tutorialSidebar",previous:{title:"Choosing an Approach",permalink:"/docs/integrations/kafka/kafka-choosing-an-approach"},next:{title:"Kafka Connect",permalink:"/docs/integrations/kafka/kafka-connect-intro"}},c={},d=[{value:"Kafka to ClickHouse",id:"kafka-to-clickhouse",level:2},{value:"Overview",id:"overview",level:3},{value:"Steps",id:"steps",level:3},{value:"1. Prepare",id:"1-prepare",level:4},{value:"2. Configure ClickHouse",id:"2-configure-clickhouse",level:4},{value:"3. Create the destination table",id:"3-create-the-destination-table",level:4},{value:"4. Create and populate the topic",id:"4-create-and-populate-the-topic",level:4},{value:"5. Create the Kafka table engine",id:"5-create-the-kafka-table-engine",level:4},{value:"6. Create the materialized view",id:"6-create-the-materialized-view",level:4},{value:"7. Confirm rows have been inserted",id:"7-confirm-rows-have-been-inserted",level:4},{value:"Common Operations",id:"common-operations",level:3},{value:"Stopping &amp; restarting message consumption",id:"stopping--restarting-message-consumption",level:4},{value:"Adding Kafka Metadata",id:"adding-kafka-metadata",level:4},{value:"Modify Kafka Engine Settings",id:"modify-kafka-engine-settings",level:4},{value:"Debugging Issues",id:"debugging-issues",level:4},{value:"Handling malformed messages",id:"handling-malformed-messages",level:4},{value:"Delivery Semantics and challenges with duplicates",id:"delivery-semantics-and-challenges-with-duplicates",level:4},{value:"Quorum based Inserts",id:"quorum-based-inserts",level:4},{value:"ClickHouse to Kafka",id:"clickhouse-to-kafka",level:2},{value:"Steps",id:"steps-1",level:3},{value:"1. Inserting rows directly",id:"1-inserting-rows-directly",level:4},{value:"2. Utilizing materialized views",id:"2-utilizing-materialized-views",level:4},{value:"Clusters and Performance",id:"clusters-and-performance",level:2},{value:"Working with ClickHouse Clusters",id:"working-with-clickhouse-clusters",level:3},{value:"Tuning Performance",id:"tuning-performance",level:3},{value:"Additional Settings",id:"additional-settings",level:3}],m={toc:d};function p(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-the-kafka-table-engine"},"Using the Kafka table engine"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The Kafka table engine is currently not supported in ClickHouse Cloud.")),(0,s.kt)("h2",{id:"kafka-to-clickhouse"},"Kafka to ClickHouse"),(0,s.kt)("h3",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Initially, we focus on the most common use case: using the Kafka table engine to insert data into ClickHouse from Kafka."),(0,s.kt)("p",null,"The Kafka table engine allows ClickHouse to read from a Kafka topic directly. Whilst useful for viewing messages on a topic, the engine by design only permits one-time retrieval, i.e. when a query is issued to the table, it consumes data from the queue and increases the consumer offset before returning results to the caller. Data cannot, in effect, be re-read without resetting these offsets."),(0,s.kt)("p",null,"To persist this data from a read of the table engine, we need a means of capturing the data and inserting it into another table. Trigger-based materialized views natively provide this functionality. A materialized view initiates a read on the table engine, receiving batches of documents. The TO clause determines the destination of the data - typically a table of the ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/"},"Merge Tree family"),". This process is visualized below:"),(0,s.kt)("img",{src:a(40194).Z,class:"image",alt:"Kakfa table engine",style:{width:"80%"}}),(0,s.kt)("h3",{id:"steps"},"Steps"),(0,s.kt)("h4",{id:"1-prepare"},"1. Prepare"),(0,s.kt)("p",null,"If you have data populated on a target topic, you can adapt the following for use in your dataset. Alternatively, a sample Github dataset is provided ",(0,s.kt)("a",{parentName:"p",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"here"),". This dataset is used in the examples below and uses a reduced schema and subset of the rows (specifically, we limit to Github events concerning the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"ClickHouse repository"),"), compared to the full dataset available ",(0,s.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/"},"here"),", for brevity. This is still sufficient for most of the queries ",(0,s.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/"},"published with the dataset")," to work. "),(0,s.kt)("h4",{id:"2-configure-clickhouse"},"2. Configure ClickHouse"),(0,s.kt)("p",null,"This step is required if you are connecting to a secure Kafka. These settings cannot be passed through the SQL DDL commands and must be configured in the ClickHouse config.xml. We assume you are connecting to a SASL secured instance. This is the simplest method when interacting with Confluent Cloud."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n   <kafka>\n       <sasl_username>username</sasl_username>\n       <sasl_password>password</sasl_password>\n       <security_protocol>sasl_ssl</security_protocol>\n       <sasl_mechanisms>PLAIN</sasl_mechanisms>\n   </kafka>\n</clickhouse>\n")),(0,s.kt)("p",null,"Either place the above snippet inside a new file under your conf.d/ directory or merge it into existing configuration files. For settings that can be configured, see ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/kafka/#configuration"},"here"),"."),(0,s.kt)("h4",{id:"3-create-the-destination-table"},"3. Create the destination table"),(0,s.kt)("p",null,"Prepare your destination table. In the example below we use the reduced GitHub schema for purposes of brevity. Note that although we use a MergeTree table engine, this example could easily be adapted for any member of the MergeTree family. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE github\n(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4, 'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    labels Array(LowCardinality(String)),\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    assignees Array(LowCardinality(String)),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    requested_reviewers Array(LowCardinality(String)),\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n) ENGINE = MergeTree ORDER BY (event_type, repo_name, created_at)\n")),(0,s.kt)("h4",{id:"4-create-and-populate-the-topic"},"4. Create and populate the topic"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/edenhill/kcat"},"Kcat")," is recommended as a simple means of publishing data to a topic. Using the provided dataset with Confluent Cloud is as simple as modifying the configuration file and running the below example. The following assumes you have ",(0,s.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/tutorials/examples/clients/docs/kcat.html#produce-records"},"created the topic")," \u201cgithub\u201d. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat github_all_columns.ndjson | kafkacat -b <host>:<port> -X security.protocol=sasl_ssl -X sasl.mechanisms=PLAIN -X sasl.username=<username>  -X sasl.password=<password> -t github\n")),(0,s.kt)("p",null,"Note that this dataset is deliberately small, with only 200,000 rows. This should take only a few seconds to insert on most Kafka clusters, although this may depend on network connectivity. We include ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/kafka-samples/tree/main/producer#large-datasets"},"instructions")," to produce larger datasets should you need e.g. for performance testing."),(0,s.kt)("h4",{id:"5-create-the-kafka-table-engine"},"5. Create the Kafka table engine"),(0,s.kt)("p",null,"The below example creates a table engine with the same schema as the merge tree table. Note that this isn\u2019t required, e.g. you can have an alias or ephemeral columns in the target table. The settings are important; however - note the use of JSONEachRow as the data type for consuming JSON from a Kafka topic. The values \u201cgithub\u201d and \u201cclickhouse\u201d represent the name of the topic and consumer group names, respectively. Note that the topics can actually be a list of values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.github_queue\n(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4, 'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    labels Array(LowCardinality(String)),\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    assignees Array(LowCardinality(String)),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    requested_reviewers Array(LowCardinality(String)),\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n)\n   ENGINE = Kafka('kafka_host:9092', 'github', 'clickhouse',\n            'JSONEachRow') settings kafka_thread_per_consumer = 0, kafka_num_consumers = 1;\n")),(0,s.kt)("p",null,"We discuss engine settings and performance tuning below. At this point, a simple select on the table ",(0,s.kt)("inlineCode",{parentName:"p"},"github_queue")," should read some rows.  Note that this will move the consumer offsets forward, preventing these rows from being re-read without a ",(0,s.kt)("a",{parentName:"p",href:"#common-operations"},"reset"),". Note the limit and required parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"stream_like_engine_allow_direct_select.")),(0,s.kt)("h4",{id:"6-create-the-materialized-view"},"6. Create the materialized view"),(0,s.kt)("p",null,"The materialized view will connect the two previously created tables, reading data from the Kafka table engine and inserting it into the target merge tree table. We can do a number of data transformations. We will do a simple read and insert. The use of * assumes column names are identical (case sensitive)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW default.github_mv TO default.github AS\nSELECT *\nFROM default.github_queue;\n")),(0,s.kt)("p",null,"At the point of creation, the materialized view connects to the Kafka engine and commences reading: inserting rows into the target table. This process will continue indefinitely, with subsequent message inserts into Kafka being consumed. Feel free to re-run the insertion script to insert further messages to Kafka."),(0,s.kt)("h4",{id:"7-confirm-rows-have-been-inserted"},"7. Confirm rows have been inserted"),(0,s.kt)("p",null,"Confirm data exists in the target table:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM default.github;\n")),(0,s.kt)("p",null,"You should see 200,000 rows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"| count\\(\\) |\n| :--- |\n| 200000 |\n")),(0,s.kt)("h3",{id:"common-operations"},"Common Operations"),(0,s.kt)("h4",{id:"stopping--restarting-message-consumption"},"Stopping & restarting message consumption"),(0,s.kt)("p",null,"To stop message consumption, simply detach the Kafka engine table e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE github_queue;\n")),(0,s.kt)("p",null,"Note that this will not impact the offsets of the consumer group. To restart consumption, and continue from the previous offset, simply reattach the table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE github_queue;\n")),(0,s.kt)("p",null,"We can use this operation to make setting and schema changes - see below."),(0,s.kt)("h4",{id:"adding-kafka-metadata"},"Adding Kafka Metadata"),(0,s.kt)("p",null,"It is not uncommon for users to need to identify the coordinates of the original Kafka messages for the rows in ClickHouse. For example, we may want to know how much of a specific topic or partition we have consumed. For this purpose, the Kafka table engine exposes several ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/kafka/#virtual-columns"},"virtual columns"),". These can be persisted as columns in our target table by modifying our schema and materialized view\u2019s select statement."),(0,s.kt)("p",null,"First, we perform the stop operation described above before adding columns to our target table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE github_queue;\n")),(0,s.kt)("p",null,"Below we add information columns to identify the source topic and the partition from which the row originated. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE github\n   ADD COLUMN topic String,\n   ADD COLUMN partition UInt64;\n")),(0,s.kt)("p",null,"Next, we need to ensure virtual columns are mapped as required. This requires us to drop and recreate our materialized view. Note those prefixed with _. A complete listing of virtual columns can be found ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/kafka/#virtual-columns"},"here"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW default.github_mv;\n\nCREATE MATERIALIZED VIEW default.github_mv TO default.github AS\nSELECT *, _topic as topic, _partition as partition\nFROM default.github_queue;\n")),(0,s.kt)("p",null,"Finally, we are good to reattach our Kafka engine table ",(0,s.kt)("inlineCode",{parentName:"p"},"github_queue")," and restart message consumption."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE github_queue;\n")),(0,s.kt)("p",null,"Newly consumed rows should have the metadata."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT actor_login, event_type, created_at, topic, partition FROM default.github LIMIT 10;\n")),(0,s.kt)("p",null,"The result looks like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"| actor\\_login | event\\_type | created\\_at | topic | partition |\n| :--- | :--- | :--- | :--- | :--- |\n| IgorMinar | CommitCommentEvent | 2011-02-12 02:22:00 | github | 0 |\n| queeup | CommitCommentEvent | 2011-02-12 02:23:23 | github | 0 |\n| IgorMinar | CommitCommentEvent | 2011-02-12 02:23:24 | github | 0 |\n| IgorMinar | CommitCommentEvent | 2011-02-12 02:24:50 | github | 0 |\n| IgorMinar | CommitCommentEvent | 2011-02-12 02:25:20 | github | 0 |\n| dapi | CommitCommentEvent | 2011-02-12 06:18:36 | github | 0 |\n| sourcerebels | CommitCommentEvent | 2011-02-12 06:34:10 | github | 0 |\n| jamierumbelow | CommitCommentEvent | 2011-02-12 12:21:40 | github | 0 |\n| jpn | CommitCommentEvent | 2011-02-12 12:24:31 | github | 0 |\n| Oxonium | CommitCommentEvent | 2011-02-12 12:31:28 | github | 0 |\n")),(0,s.kt)("h4",{id:"modify-kafka-engine-settings"},"Modify Kafka Engine Settings"),(0,s.kt)("p",null,"We recommend dropping the Kafka engine table and recreating it with the new settings. The materialized view does not need to be modified during this process - message consumption will resume once the Kafka engine table is recreated."),(0,s.kt)("h4",{id:"debugging-issues"},"Debugging Issues"),(0,s.kt)("p",null,"Errors such as authentication issues are not reported in responses to Kafka engine DDL. For diagnosing issues, we recommend using the main ClickHouse log file clickhouse-server.err.log. Further trace logging for the underlying Kafka client library ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka"},"librdkafka")," can be enabled through configuration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<kafka>\n   <debug>all</debug>\n</kafka>\n")),(0,s.kt)("h4",{id:"handling-malformed-messages"},"Handling malformed messages"),(0,s.kt)("p",null,'Kafka is often used as a "dumping ground" for data. This leads to topics containing mixed message formats and inconsistent field names. Avoid this and utilize Kafka features such Kafka Streams or ksqlDB to ensure messages are well-formed and consistent before insertion into Kafka. If these options are not possible, we can assist:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Treat the message field as strings. Functions can be used in the materialized view statement to perform cleansing and casting if required. This should not represent a production solution but might assist in one-off ingestions."),(0,s.kt)("li",{parentName:"ul"},"If you\u2019re consuming JSON from a topic, using the JSONEachRow format, consider the setting ",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#settings-input-format-skip-unknown-fields"},"input_format_skip_unknown_fields"),". Normally, when writing data, ClickHouse throws an exception if input data contains columns that do not exist in the target table. If this option is enabled, these excess columns will be ignored. Again this is not a production-level solution and might confuse others."),(0,s.kt)("li",{parentName:"ul"},"Consider the setting kafka_skip_broken_messages. This requires the user to specify the level of tolerance per block for malformed messages - considered in the context of kafka_max_block_size. If this tolerance is exceeded (measured in absolute messages) the usual exception behaviour will revert, and other messages will be skipped. ")),(0,s.kt)("h4",{id:"delivery-semantics-and-challenges-with-duplicates"},"Delivery Semantics and challenges with duplicates"),(0,s.kt)("p",null,"The Kafka table engine has at-least-once semantics. Duplicates are possible in several known rare circumstances. For example, messages could be read from Kafka and successfully inserted into ClickHouse. Before the new offset can be committed, the connection to Kafka is lost. A retry of the block in this situation is required. The block may be ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replication/#table_engines-replication"},"de-duplicated "),"using a distributed table or ReplicatedMergeTree as the target table. While this reduces the chance of duplicate rows, it relies on identical blocks. Events such as a Kafka rebalancing may invalidate this assumption, causing duplicates in rare circumstances."),(0,s.kt)("h4",{id:"quorum-based-inserts"},"Quorum based Inserts"),(0,s.kt)("p",null,"Users often need ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings/#settings-insert_quorum"},"quorum-based inserts")," for cases where higher delivery guarantees are required in ClickHouse. This can\u2019t be set on the materialized view or the target table. It can, however, be set for user profiles e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <default>\n    <insert_quorum>2</insert_quorum>\n  </default>\n</profiles>\n")),(0,s.kt)("h2",{id:"clickhouse-to-kafka"},"ClickHouse to Kafka"),(0,s.kt)("p",null,"Although a rarer use case, ClickHouse data can also be persisted in Kafka. For example, we will insert rows manually into a Kafka table engine. This data will be read by the same Kafka engine, whose materialized view will place the data into a Merge Tree table. Finally, we demonstrate the application of materialized views in inserts to Kafka to read tables from existing source tables."),(0,s.kt)("h3",{id:"steps-1"},"Steps"),(0,s.kt)("p",null,"Our initial objective is best illustrated:"),(0,s.kt)("img",{src:a(67971).Z,class:"image",alt:"Kakfa table engine with inserts",style:{width:"80%"}}),(0,s.kt)("p",null,"We assume you have the tables and views created under steps for ",(0,s.kt)("a",{parentName:"p",href:"#kafka-to-clickhouse"},"Kafka to ClickHouse")," and that the topic has been fully consumed. "),(0,s.kt)("h4",{id:"1-inserting-rows-directly"},"1. Inserting rows directly"),(0,s.kt)("p",null,"First, confirm the count of the target table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM default.github;\n")),(0,s.kt)("p",null,"You should have 200,000 rows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"| count\\(\\) |\n| :--- |\n| 200000 |\n")),(0,s.kt)("p",null,"Now insert rows from the GitHub target table back into the Kafka table engine github_queue. Note how we utilize JSONEachRow format and LIMIT the select to 100."),(0,s.kt)("p",null,"INSERT INTO default.github_queue (*) SELECT file_time, event_type, actor_login, repo_name, created_at, updated_at, action, comment_id, path, ref, ref_type, creator_user_login, number, title, labels, state, assignee, assignees, closed_at, merged_at, merge_commit_sha, requested_reviewers, merged_by, review_comments, member_login FROM default.github LIMIT 100 FORMAT JSONEachRow;"),(0,s.kt)("p",null,"Recount the row in GitHub to confirm it has increased by 100. As shown in the above diagram, rows have been inserted into Kafka via the Kafka table engine before being re-read by the same engine and inserted into the GitHub target table by our materialized view!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM default.github;\n")),(0,s.kt)("p",null,"You should see 100 additional rows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"| count\\(\\) |\n| :--- |\n| 200100 |\n")),(0,s.kt)("h4",{id:"2-utilizing-materialized-views"},"2. Utilizing materialized views"),(0,s.kt)("p",null,"We can utilize materialized views to push messages to a Kafka engine (and a topic) when documents are inserted into a table. When rows are inserted into the GitHub table, a materialized view is triggered, which causes the rows to be inserted back into a Kafka engine and into a new topic. Again this is best illustrated:"),(0,s.kt)("img",{src:a(18363).Z,class:"image",alt:"Kakfa table engine inserts with materialized view",style:{width:"80%"}}),(0,s.kt)("p",null,"Create a new Kafka topic ",(0,s.kt)("inlineCode",{parentName:"p"},"github_out")," or equivalent. Ensure a Kafka table engine ",(0,s.kt)("inlineCode",{parentName:"p"},"github_out_queue")," points to this topic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4, 'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    labels Array(LowCardinality(String)),\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    assignees Array(LowCardinality(String)),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    requested_reviewers Array(LowCardinality(String)),\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n)\n   ENGINE = Kafka('host:port', 'github_out', 'clickhouse_out',\n            'JSONEachRow') settings kafka_thread_per_consumer = 0, kafka_num_consumers = 1;\n")),(0,s.kt)("p",null,"Now create a new materialized view ",(0,s.kt)("inlineCode",{parentName:"p"},"github_out_mv")," to point at the GitHub table, inserting rows to the above engine when it triggers. Additions to the GitHub table will, as a result, be pushed to our new Kafka topic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW default.github_out_mv TO default.github_out_queue AS\nSELECT file_time, event_type, actor_login, repo_name, created_at, updated_at, action, comment_id, path, ref, ref_type, creator_user_login, number, title, labels, state, assignee, assignees, closed_at, merged_at, merge_commit_sha, requested_reviewers, merged_by, review_comments, member_login FROM default.github FORMAT JsonEachRow;\n")),(0,s.kt)("p",null,"Should you insert into the original github topic, created as part of ",(0,s.kt)("a",{parentName:"p",href:"#kafka-to-clickhouse"},"Kafka to ClickHouse"),", documents will magically appear in the \u201cgithub_clickhouse\u201d topic. Confirm this with native Kafka tooling. For example, below, we insert 100 rows onto the github topic using kcat for a Confluent Cloud hosted topic:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"head -n 10 github_all_columns.ndjson | kafkacat -b <host>:<port> -X security.protocol=sasl_ssl -X sasl.mechanisms=PLAIN -X sasl.username=<username>  -X sasl.password=<password> -t github\n")),(0,s.kt)("p",null,"A read on the ",(0,s.kt)("inlineCode",{parentName:"p"},"github_out")," topic should confirm delivery of the messages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"kafkacat -b <host>:<port> -X security.protocol=sasl_ssl -X sasl.mechanisms=PLAIN -X sasl.username=<username>  -X sasl.password=<password> -t github_out -C -e -q | wc -l\n")),(0,s.kt)("p",null,"Although an elaborate example, this illustrates the power of materialized views when used in conjunction with the Kafka engine."),(0,s.kt)("h2",{id:"clusters-and-performance"},"Clusters and Performance"),(0,s.kt)("h3",{id:"working-with-clickhouse-clusters"},"Working with ClickHouse Clusters"),(0,s.kt)("p",null,"Through Kafka consumer groups, multiple ClickHouse instances can potentially read from the same topic. Each consumer will be assigned to a topic partition in a 1:1 mapping. When scaling ClickHouse consumption using the Kafka table engine, consider that the total number of consumers within a cluster cannot exceed the number of partitions on the topic. Therefore ensure partitioning is appropriately configured for the topic in advance. "),(0,s.kt)("p",null,"Multiple ClickHouse instances can all be configured to read from a topic using the same consumer group id - specified during the Kafka table engine creation. Therefore, each instance will read from one or more partitions, inserting segments to their local target table. The target tables can, in turn, be configured to use a ReplicatedMergeTree to handle duplication of the data. This approach allows Kafka reads to be scaled with the ClickHouse cluster, provided there are sufficient Kafka partitions."),(0,s.kt)("img",{src:a(11859).Z,class:"image",alt:"Replicated Kakfa table engine",style:{width:"80%"}}),(0,s.kt)("h3",{id:"tuning-performance"},"Tuning Performance"),(0,s.kt)("p",null,"Consider the following when looking to increase Kafka Engine table throughput performance:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The performance will vary depending on the message size, format, and target table types. 100k rows/sec on a single table engine should be considered obtainable. By default, messages are read in blocks, controlled by the parameter kafka_max_block_size. By default, this is set to the ",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_block_size"},"max_block_size"),", defaulting to 65,536. Unless messages are extremely large, this should nearly always be increased. Values between 500k to 1M are not uncommon. Test and evaluate the effect on throughput performance."),(0,s.kt)("li",{parentName:"ul"},"The number of consumers for a table engine can be increased using kafka_num_consumers. However, by default, inserts will be linearized in a single thread unless kafka_thread_per_consumer is changed from the default value of 1. Set this to 1 to ensure flushes are performed in parallel. Note that creating a Kafka engine table with N consumers (and kafka_thread_per_consumer=1) is logically equivalent to creating N Kafka engines, each with a materialized view and kafka_thread_per_consumer=0."),(0,s.kt)("li",{parentName:"ul"},"Increasing consumers is not a free operation. Each consumer maintains its own buffers and threads, increasing the overhead on the server. Be conscious of the overhead of consumers and scale linearly across your cluster first and if possible."),(0,s.kt)("li",{parentName:"ul"},"If the throughput of Kafka messages is variable and delays are acceptable, consider increasing the stream_flush_interval_ms to ensure larger blocks are flushed. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#background_message_broker_schedule_pool_size"},"background_schedule_pool_size")," sets the number of threads performing background tasks. These threads are used for Kafka streaming. This setting is applied at the ClickHouse server start and can\u2019t be changed in a user session, defaulting to 128. It is unlikely you should ever need to change this as sufficient threads are available for the number of Kafka engines you will create on a single host. If you see timeouts in the logs, it may be appropriate to increase this."),(0,s.kt)("li",{parentName:"ul"},"For communication with Kafka, the librdkafka library is used, which itself creates threads. Large numbers of Kafka tables, or consumers, can thus result in large numbers of context switches. Either distribute this load across the cluster, only replicating the target tables if possible, or consider using a table engine to read from multiple topics - a list of values is supported. Multiple materialized views can be read from a single table, each filtering to the data from a specific topic.")),(0,s.kt)("p",null,"Any settings changes should be tested. We recommend monitoring Kafka consumer lags to ensure you are properly scaled."),(0,s.kt)("h3",{id:"additional-settings"},"Additional Settings"),(0,s.kt)("p",null,"Aside from the settings discussed above, the following may be of interest:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#kafka-max-wait-ms"},"Kafka_max_wait_ms")," -  The wait time in milliseconds for reading messages from Kafka before retry. Set at a user profile level and defaults to 5000.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"All settings "),"from the underlying librdkafka can also be placed in the ClickHouse configuration files inside a ",(0,s.kt)("em",{parentName:"p"},"kafka")," element - setting names should be XML elements with periods replaced with underscores e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n   <kafka>\n       <enable_ssl_certificate_verification>false</enable_ssl_certificate_verification>\n   </kafka>\n</clickhouse>\n")),(0,s.kt)("p",null,"These are expert settings for which the user is referred to the Kafka documentation."))}p.isMDXComponent=!0},40194:function(e,t,a){t.Z=a.p+"assets/images/kafka_01-0624da693b23e1e7a55c22fda4dfb1f9.png"},67971:function(e,t,a){t.Z=a.p+"assets/images/kafka_02-c39eebd51a35aae3e3e6bc3ca9e9a7d9.png"},18363:function(e,t,a){t.Z=a.p+"assets/images/kafka_03-04bdd767e4968813e62839b3fe66aa07.png"},11859:function(e,t,a){t.Z=a.p+"assets/images/kafka_04-d8d740630bd9420dd905a7964e5b13d7.png"}}]);