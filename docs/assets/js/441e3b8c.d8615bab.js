"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12261],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24369:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),s=["components"],o={sidebar_label:"Optimizing S3 Performance",sidebar_position:5,description:"Optimizing S3 Performance with ClickHouse"},l="Optimizing for Performance",c={unversionedId:"integrations/s3/s3-optimizing-performance",id:"integrations/s3/s3-optimizing-performance",title:"Optimizing for Performance",description:"Optimizing S3 Performance with ClickHouse",source:"@site/docs/integrations/s3/s3-optimizing-performance.md",sourceDirName:"integrations/s3",slug:"/integrations/s3/s3-optimizing-performance",permalink:"/docs/docs/integrations/s3/s3-optimizing-performance",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Optimizing S3 Performance",sidebar_position:5,description:"Optimizing S3 Performance with ClickHouse"},sidebar:"tutorialSidebar",previous:{title:"S3 Backed MergeTree",permalink:"/docs/docs/integrations/s3/s3-merge-tree"},next:{title:"Using MinIO",permalink:"/docs/docs/integrations/s3/s3-minio"}},u={},m=[{value:"Measuring Performance",id:"measuring-performance",level:2},{value:"Region Locality",id:"region-locality",level:2},{value:"Using Threads",id:"using-threads",level:2},{value:"Formats",id:"formats",level:2},{value:"Scaling with Nodes",id:"scaling-with-nodes",level:2}],p={toc:m};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimizing-for-performance"},"Optimizing for Performance"),(0,a.kt)("h2",{id:"measuring-performance"},"Measuring Performance"),(0,a.kt)("p",null,"Before making any changes to improve performance, ensure you measure appropriately. As S3 API calls are sensitive to latency and may impact client timings, use the query log for performance metrics, i.e., system.query_log. For further details on how to analyze query performance, see here."),(0,a.kt)("p",null,"If measuring the performance of SELECT queries, where large volumes of data are returned to the client, either utilize the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats/#null"},"null format")," for queries or direct results to the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/null/"},"Null engine"),". This should avoid the client being overwhelmed with data and network saturation."),(0,a.kt)("h2",{id:"region-locality"},"Region Locality"),(0,a.kt)("p",null,"Ensure your buckets are located in the same region as your ClickHouse instances. This simple optimization can dramatically improve throughput performance, especially if you deploy your ClickHouse instances on AWS infrastructure."),(0,a.kt)("h2",{id:"using-threads"},"Using Threads"),(0,a.kt)("p",null,"Read performance on s3 will scale linearly with the number of cores, provided you are not limited by network bandwidth or local IO. Increasing the number of threads also has memory overhead permutations that users should be aware of. The following can be modified to improve throughput performance potentially:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Usually, the default value of ",(0,a.kt)("inlineCode",{parentName:"li"},"max_threads")," is sufficient, i.e., the number of cores. If the amount of memory used for a query is high, and this needs to be reduced, or the LIMIT on results is low, this value can be set lower. Users with plenty of memory may wish to experiment with increasing this value for possible higher read throughput from s3. Typically this is only beneficial on machines with lower core counts, i.e., ","<"," 10. The benefit from further parallelization typically diminishes as other resources act as a bottleneck, e.g., network."),(0,a.kt)("li",{parentName:"ul"},"If performing an ",(0,a.kt)("inlineCode",{parentName:"li"},"INSERT INTO x SELECT")," request, note that the number of threads will be set to 1 as dictated by the setting ",(0,a.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_threads"},"max_insert_threads"),". Provided max_threads is greater than 1 (confirm with ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT * FROM system.settings WHERE name='max_threads'"),"), increasing this will improve insert performance at the expense of memory. Increase with caution due to memory consumption overheads. This value should not be as high as the max_threads as resources are consumed on background merges. Furthermore, not all target engines (MergeTree does) support parallel inserts. Finally, parallel inserts invariably cause more parts, slowing down subsequent reads. Increase with caution."),(0,a.kt)("li",{parentName:"ul"},"For low memory scenarios, consider lowering ",(0,a.kt)("inlineCode",{parentName:"li"},"max_insert_delayed_streams_for_parallel_write")," if inserting into s3."),(0,a.kt)("li",{parentName:"ul"},"Versions of ClickHouse before 22.3.1 only parallelized reads across multiple files when using the s3 function or s3 table engine. This required the user to ensure files were split into chunks on s3 and read using a glob pattern to achieve optimal read performance. Later versions now parallelize downloads within a file. "),(0,a.kt)("li",{parentName:"ul"},"Assuming sufficient memory (test!), increasing ",(0,a.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#min-insert-block-size-rows"},"min_insert_block_size_rows")," can improve insert throughput."),(0,a.kt)("li",{parentName:"ul"},"In low thread count scenarios, users may benefit from setting ",(0,a.kt)("inlineCode",{parentName:"li"},"remote_filesystem_read_method"),' to "read" to cause the synchronous reading of files from s3.')),(0,a.kt)("h2",{id:"formats"},"Formats"),(0,a.kt)("p",null,"ClickHouse can read files stored in s3 buckets in the ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats/#data-formatting"},"supported formats")," using the s3 function and s3 engine. If reading raw files, some of these formats have distinct advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Formats with encoded column names such as Native, Parquet, CSVWithNames, and TabSeparatedWithNames will be less verbose to query since the user will not be required to specify the column name is the s3 function. The column names allow this information to be inferred."),(0,a.kt)("li",{parentName:"ul"},"Formats will differ in performance with respect to read and write throughputs. Native and parquet represent the most optimal formats for read performance since they are already column orientated and more compact. The native format additionally benefits from alignment with how ClickHouse stores data in memory - thus reducing processing overhead as data is streamed into ClickHouse."),(0,a.kt)("li",{parentName:"ul"},"The block size will often impact the latency of reads on large files. This is very apparent if you only sample the data, e.g., returning the top N rows. In the case of formats such as CSV and TSV, files must be parsed to return a set of rows. Formats such as Native and Parquet will allow faster sampling as a result."),(0,a.kt)("li",{parentName:"ul"},"Each compression format brings pros and cons, often balancing the compression level for speed and biasing compression or decompression performance. If compressing raw files such as CSV or TSV, lz4 offers the fastest decompression performance, sacrificing the compression level. Gzip typically compresses better at the expense of slightly slower read speeds. Xz takes this further by usually offering the best compression with the slowest compression and decompression performance. If exporting, Gz and lz4 offer comparable compression speeds. Balance this against your connection speeds. Any gains from faster decompression or compression will be easily negated by a slower connection to your s3 buckets."),(0,a.kt)("li",{parentName:"ul"},"Formats such as native or parquet do not typically justify the overhead of compression. Any savings in data size are likely to be minimal since these formats are inherently compact. The time spent compressing and decompressing will rarely offset network transfer times - especially since s3 is globally available with higher network bandwidth.")),(0,a.kt)("p",null,"Internally the ClickHouse merge tree uses two primary storage formats: ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#mergetree-data-storage"},"Wide and Compact"),". Whilst the current implementation uses the default behavior of ClickHouse - controlled through the settings ",(0,a.kt)("inlineCode",{parentName:"p"},"min_bytes_for_wide_part")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"min_rows_for_wide_part"),"; we expect behavior to diverge for s3 in the future releases, e.g., a larger default value of min_bytes_for_wide_part encouraging a more Compact format and thus fewer files. Users may now wish to tune these settings when using exclusively s3 storage. "),(0,a.kt)("h2",{id:"scaling-with-nodes"},"Scaling with Nodes"),(0,a.kt)("p",null,"Users will have often have more than one node of ClickHouse available. While users can scale vertically, improving s3 throughput linearly with the number of cores, horizontal scaling is often necessary due to hardware availability and cost-efficiency."),(0,a.kt)("p",null,"The replication of an s3 backed Merge Tree is supported through zero copy replication. "),(0,a.kt)("p",null,"Utilizing a cluster for s3 reads requires using the s3Cluster function as described in ",(0,a.kt)("a",{parentName:"p",href:"./s3-table-functions#utilizing-clusters"},"Utilizing Clusters"),". While this allows reads to be distributed across nodes, thread settings will not currently be sent to all nodes as of 22.3.1. For example, if the following query was executed against a node, only the receiving initiator node will respect the max_insert_threads setting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO default.trips_all SELECT * FROM s3Cluster('events', 'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames') SETTINGS max_insert_threads=8;\n")),(0,a.kt)("p",null,"To ensure this setting is used, the following would need to be added to each nodes config.xml file (or under conf.d):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>  \n  <profiles>     \n    <default>\n      <max_insert_threads>8</max_insert_threads>\n    </default>\n  </profiles>\n</clickhouse>\n")))}d.isMDXComponent=!0}}]);