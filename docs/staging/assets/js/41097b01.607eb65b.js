"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12805],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11193:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=["components"],o={sidebar_label:"S3 Backed Merge Tree",sidebar_position:4,description:"S3 Backed Merge Tree"},l="S3 Backed Merge Tree",c={unversionedId:"integrations/s3/s3-merge-tree",id:"integrations/s3/s3-merge-tree",title:"S3 Backed Merge Tree",description:"S3 Backed Merge Tree",source:"@site/docs/integrations/s3/s3-merge-tree.md",sourceDirName:"integrations/s3",slug:"/integrations/s3/s3-merge-tree",permalink:"/docs/staging/docs/integrations/s3/s3-merge-tree",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"S3 Backed Merge Tree",sidebar_position:4,description:"S3 Backed Merge Tree"},sidebar:"tutorialSidebar",previous:{title:"S3 Table Engine",permalink:"/docs/staging/docs/integrations/s3/s3-table-engine"},next:{title:"Optimizing S3 Performance",permalink:"/docs/staging/docs/integrations/s3/s3-optimizing-performance"}},u={},d=[{value:"Storage Tiers",id:"storage-tiers",level:2},{value:"Creating a Disk",id:"creating-a-disk",level:2},{value:"Creating a Storage Policy",id:"creating-a-storage-policy",level:2},{value:"Creating a table",id:"creating-a-table",level:2},{value:"Modifying a Table",id:"modifying-a-table",level:2},{value:"Handling Replication",id:"handling-replication",level:2},{value:"Internals",id:"internals",level:2},{value:"Read &amp; Writes",id:"read--writes",level:2}],p={toc:d};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-backed-merge-tree"},"S3 Backed Merge Tree"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This feature is currently experimental and undergoing improvements and experimentation to understand performance.")),(0,r.kt)("p",null,"The s3 functions and associated table engine allow us to query data in s3 using familiar ClickHouse syntax. However, concerning data management features and performance, they are limited. There is no support for primary indexes, no-cache support, and files inserts need to be managed by the user."),(0,r.kt)("p",null,"ClickHouse recognizes that S3 represents an attraction storage operation: especially where query performance on \u201ccolder\u201d data is less critical, and users seek to separate storage and compute. To help achieve this, support is provided for using s3 as the storage for a Merge Tree engine. This will enable users to exploit the scalability and cost of benefits of s3 and the insert and query performance of the Merge Tree engine."),(0,r.kt)("h2",{id:"storage-tiers"},"Storage Tiers"),(0,r.kt)("p",null,"ClickHouse storage volumes allow physical disks to be abstracted from the Merge Tree table engine. Any single volume can be composed of an ordered set of disks. Whilst principally allowing multiple block devices to be potentially used for data storage, this abstraction also allows other storage types, including s3. ClickHouse data parts can be moved between volumes and fill rates according to storage policies, thus creating the concept of storage tiers. "),(0,r.kt)("p",null,"Storage tiers unlock hot-cold architectures where the most recent data, which is typically also the most queried, requires only a small amount of space on high-performing storage, e.g., NVMe SSDs. As the data ages, SLAs for query times increase, as does query frequency. This fat tail of data can be stored on slower, less performant storage such as HDD or object storage such as s3."),(0,r.kt)("h2",{id:"creating-a-disk"},"Creating a Disk"),(0,r.kt)("p",null,"To utilize an s3 bucket as a disk, we must first declare it within the ClickHouse configuration file. Either extend config.xml or preferably provide a new file under conf.d. An example of an s3 disk declaration is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        ...\n        <disks>\n            <s3>\n                <type>s3</type>\n                <endpoint>https://sample-bucket.s3.us-east-2.amazonaws.com/tables/</endpoint>\n                <access_key_id>your_access_key_id</access_key_id>\n                <secret_access_key>your_secret_access_key</secret_access_key>\n                <region></region>\n                <metadata_path>/var/lib/clickhouse/disks/s3/</metadata_path>\n                <cache_enabled>true</cache_enabled>\n            <data_cache_enabled>true</data_cache_enabled>   \n                <cache_path>/var/lib/clickhouse/disks/s3/cache/</cache_path>\n            </s3>\n        </disks>\n        ...\n    </storage_configuration>\n</clickhouse>\n\n")),(0,r.kt)("p",null,"A complete list of settings relevant to this disk declaration can be found ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-s3"},"here"),". Note that credentials can be managed here using the same approaches described in ",(0,r.kt)("a",{parentName:"p",href:"./s3-table-engine#managing-credentials"},"Managing credentials"),", i.e., the use_environment_credentials can be set to true in the above settings block to use IAM roles. Further information on the cache settings can be found under ",(0,r.kt)("a",{parentName:"p",href:"#internals"},"Internals"),"."),(0,r.kt)("h2",{id:"creating-a-storage-policy"},"Creating a Storage Policy"),(0,r.kt)("p",null,"Once configured, this \u201cdisk\u201d can be used by a storage volume declared within a policy. For the example below, we assume s3 is our only storage. This ignores more complex hot-cold architectures where data can be relocated based on TTLs and fill rates. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <s3>\n            ...\n            </s3>\n        </disks>\n        <policies>\n            <s3_main>\n                <volumes>\n                    <main>\n                        <disk>s3</disk>\n                    </main>\n                </volumes>\n            </s3_main>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a table"),(0,r.kt)("p",null,"Assuming you have configured your disk to use a bucket with write access, you should be able to create a table such as in the example below. For purposes of brevity, we use a subset of the NYC taxi columns and stream data directly to the s3 backed table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips_s3\n(\n   `trip_id` UInt32,\n   `pickup_date` Date,\n   `pickup_datetime` DateTime,\n   `dropoff_datetime` DateTime,\n   `pickup_longitude` Float64,\n   `pickup_latitude` Float64,\n   `dropoff_longitude` Float64,\n   `dropoff_latitude` Float64,\n   `passenger_count` UInt8,\n   `trip_distance` Float64,\n   `tip_amount` Float32,\n   `total_amount` Float32,\n   `payment_type` Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4)\n)\nENGINE = MergeTree\nPARTITION BY toYYYYMM(pickup_date)\nORDER BY pickup_datetime\nSETTINGS index_granularity = 8192, storage_policy='s3_main'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips_s3 SELECT trip_id, pickup_date, pickup_datetime, dropoff_datetime, pickup_longitude, pickup_latitude, dropoff_longitude, dropoff_latitude, passenger_count, trip_distance, tip_amount, total_amount, payment_type FROM s3('https://ch-nyc-taxi.s3.eu-west-3.amazonaws.com/tsv/trips_{0..9}.tsv.gz', 'TabSeparatedWithNames') LIMIT 1000000;\n")),(0,r.kt)("p",null,"Depending on the hardware, this latter insert of 1m rows may take a few minutes to execute. You can confirm the progress via the system.processes table. Feel free to adjust the row count up to the limit of 10m and explore some sample queries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT passenger_count, avg(tip_amount) as avg_tip, avg(total_amount) as avg_amount FROM trips_s3 GROUP BY passenger_count;\n")),(0,r.kt)("h2",{id:"modifying-a-table"},"Modifying a Table"),(0,r.kt)("p",null,"Occasionally users may need to modify the storage policy of a specific table. Whilst this is possible, it comes with limitations. The new target policy must contain all of the disks and volumes of the previous policy, i.e., data will not be migrated to satisfy a policy change. When validating these constraints, volumes and disks will be identified by their name, with attempts to violate resulting in an error. However, assuming you use the previous examples, the following changes are valid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<policies>\n   <s3_main>\n       <volumes>\n           <main>\n               <disk>s3</disk>\n           </main>\n       </volumes>\n   </s3_main>\n   <s3_tiered>\n       <volumes>\n           <hot>\n               <disk>default</disk>\n           </hot>\n           <main>\n               <disk>s3</disk>\n           </main>\n       </volumes>\n       <move_factor>0.2</move_factor>\n   </s3_tiered>\n</policies>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE trips_s3 MODIFY SETTING storage_policy='s3_tiered'\n")),(0,r.kt)("p",null,"Here we reuse the main volume in our new s3_tiered policy and introduce a new hot volume. This uses the default disk, which consists of only one disk configured via the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>"),". Note that our volume names and disks do not change.  New inserts to our table will reside on the default disk until this reaches move_factor * disk_size - at which data will be relocated to s3. "),(0,r.kt)("h2",{id:"handling-replication"},"Handling Replication"),(0,r.kt)("p",null,"For traditional disk-backed tables, we rely on ClickHouse to handle data replication via the ReplicatedTableEngine. Whilst for s3, this replication is inherently handled at the storage layer, local files are still held for the table on disk. Specifically, ClickHouse stores metadata data files on disk (see ",(0,r.kt)("a",{parentName:"p",href:"#internals"},"Internals"),") for further details. These files will be replicated if using a ReplicatedMergeTree in a process known as ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/storing-data/#zero-copy"},"Zero Copy Replication"),". This is enabled by default through the setting allow_remote_fs_zero_copy_replication. This is best illustrated below where the table exists on 2 ClickHouse nodes:"),(0,r.kt)("img",{src:a(40094).Z,class:"image",alt:"Replicating S3 backed Merge Tree",style:{width:"80%"}}),(0,r.kt)("h2",{id:"internals"},"Internals"),(0,r.kt)("h2",{id:"read--writes"},"Read & Writes"),(0,r.kt)("p",null,"The following notes cover the implementation of s3 interactions with ClickHouse. Whilst generally only informative, it may help the readers when ",(0,r.kt)("a",{parentName:"p",href:"./s3-optimizing-performance"},"Optimizing for Performance"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, the maximum number of query processing threads used by any stage of the query processing pipeline is equal to the number of cores. Some stages are more parallelizable than others, so this value provides an upper bound.  Multiple query stages may execute at once since data is streamed from the disk. The exact number of threads used for a query may thus exceed this. Modify through the setting ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_threads"},"max_threads"),"."),(0,r.kt)("li",{parentName:"ul"},"Reads on s3 are asynchronous by default. This behavior is determined by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"remote_filesystem_read_method"),", set to the value \u201cthreadpool\u201d by default. When serving a request, ClickHouse reads granules in stripes. Each of these stripes potentially contain many columns. A thread will read the columns for their granules one by one. Rather than doing this synchronously, a prefetch is made for all columns before waiting for the data. This offers significant performance improvements over synchronous waits on each column. Users will not need to change this setting in most cases - see ",(0,r.kt)("a",{parentName:"li",href:"./s3-optimizing-performance"},"Optimizing for Performance"),"."),(0,r.kt)("li",{parentName:"ul"},"Writes are performed in parallel, with a maximum of 100 concurrent file writing threads. ",(0,r.kt)("inlineCode",{parentName:"li"},"max_insert_delayed_streams_for_parallel_write"),", which has a default value of 1000,  controls the number of s3 blobs written in parallel. Since a buffer is required for each file being written (~1MB), this effectively limits the memory consumption of an INSERT. It may be appropriate to lower this value in low server memory scenarios.")))}m.isMDXComponent=!0},40094:function(e,t,a){t.Z=a.p+"assets/images/s3_01-229e8ffca9e82f6c7a9515c5e073b3a1.png"}}]);