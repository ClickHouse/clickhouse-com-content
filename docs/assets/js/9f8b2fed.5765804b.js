"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97741],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_position:130,sidebar_label:"External Data"},l="External Data for Query Processing",p={unversionedId:"en/engines/table-engines/special/external-data",id:"en/engines/table-engines/special/external-data",title:"External Data for Query Processing",description:"external-data-for-query-processing}",source:"@site/docs/en/engines/table-engines/special/external-data.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/external-data",permalink:"/docs/en/engines/table-engines/special/external-data",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/external-data.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{sidebar_position:130,sidebar_label:"External Data"},sidebar:"tutorialSidebar",previous:{title:"Buffer",permalink:"/docs/en/engines/table-engines/special/buffer"},next:{title:"GenerateRandom",permalink:"/docs/en/engines/table-engines/special/generate"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"external-data-for-query-processing"},"External Data for Query Processing"),(0,i.kt)("p",null,"ClickHouse allows sending a server the data that is needed for processing a query, together with a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query. This data is put in a temporary table (see the section \u201cTemporary tables\u201d) and can be used in the query (for example, in ",(0,i.kt)("inlineCode",{parentName:"p"},"IN")," operators)."),(0,i.kt)("p",null,"For example, if you have a text file with important user identifiers, you can upload it to the server along with a query that uses filtration by this list."),(0,i.kt)("p",null,"If you need to run more than one query with a large volume of external data, do not use this feature. It is better to upload the data to the DB ahead of time."),(0,i.kt)("p",null,"External data can be uploaded using the command-line client (in non-interactive mode), or using the HTTP interface."),(0,i.kt)("p",null,"In the command-line client, you can specify a parameters section in the format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--external --file=... [--name=...] [--format=...] [--types=...|--structure=...]\n")),(0,i.kt)("p",null,"You may have multiple sections like this, for the number of tables being transmitted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2013external")," \u2013 Marks the beginning of a clause.\n",(0,i.kt)("strong",{parentName:"p"},"\u2013file")," \u2013 Path to the file with the table dump, or -, which refers to stdin.\nOnly a single table can be retrieved from stdin."),(0,i.kt)("p",null,"The following parameters are optional: ",(0,i.kt)("strong",{parentName:"p"},"\u2013name"),"\u2013 Name of the table. If omitted, _data is used.\n",(0,i.kt)("strong",{parentName:"p"},"\u2013format")," \u2013 Data format in the file. If omitted, TabSeparated is used."),(0,i.kt)("p",null,"One of the following parameters is required:",(0,i.kt)("strong",{parentName:"p"},"\u2013types")," \u2013 A list of comma-separated column types. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt64,String"),". The columns will be named _1, _2, \u2026\n",(0,i.kt)("strong",{parentName:"p"},"\u2013structure"),"\u2013 The table structure in the format",(0,i.kt)("inlineCode",{parentName:"p"},"UserID UInt64"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"URL String"),". Defines the column names and types."),(0,i.kt)("p",null,"The files specified in \u2018file\u2019 will be parsed by the format specified in \u2018format\u2019, using the data types specified in \u2018types\u2019 or \u2018structure\u2019. The table will be uploaded to the server and accessible there as a temporary table with the name in \u2018name\u2019."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -ne "1\\n2\\n3\\n" | clickhouse-client --query="SELECT count() FROM test.visits WHERE TraficSourceID IN _data" --external --file=- --types=Int8\n849897\n$ cat /etc/passwd | sed \'s/:/\\t/g\' | clickhouse-client --query="SELECT shell, count() AS c FROM passwd GROUP BY shell ORDER BY c DESC" --external --file=- --name=passwd --structure=\'login String, unused String, uid UInt16, gid UInt16, comment String, home String, shell String\'\n/bin/sh 20\n/bin/false      5\n/bin/bash       4\n/usr/sbin/nologin       1\n/bin/sync       1\n')),(0,i.kt)("p",null,"When using the HTTP interface, external data is passed in the multipart/form-data format. Each table is transmitted as a separate file. The table name is taken from the file name. The ",(0,i.kt)("inlineCode",{parentName:"p"},"query_string")," is passed the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"name_format"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name_types"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"name_structure"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is the name of the table that these parameters correspond to. The meaning of the parameters is the same as when using the command-line client."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/passwd | sed 's/:/\\t/g' > passwd.tsv\n\n$ curl -F 'passwd=@passwd.tsv;' 'http://localhost:8123/?query=SELECT+shell,+count()+AS+c+FROM+passwd+GROUP+BY+shell+ORDER+BY+c+DESC&passwd_structure=login+String,+unused+String,+uid+UInt16,+gid+UInt16,+comment+String,+home+String,+shell+String'\n/bin/sh 20\n/bin/false      5\n/bin/bash       4\n/usr/sbin/nologin       1\n/bin/sync       1\n")),(0,i.kt)("p",null,"For distributed query processing, the temporary tables are sent to all the remote servers."))}d.isMDXComponent=!0}}]);