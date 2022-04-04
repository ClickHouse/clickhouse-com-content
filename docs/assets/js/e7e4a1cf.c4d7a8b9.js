"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22815],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:37,sidebar_label:"file"},s="file",u={unversionedId:"en/sql-reference/table-functions/file",id:"en/sql-reference/table-functions/file",title:"file",description:"file}",source:"@site/docs/en/sql-reference/table-functions/file.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/file",permalink:"/docs/docs/en/sql-reference/table-functions/file",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"file"},sidebar:"tutorialSidebar",previous:{title:"Table Functions",permalink:"/docs/docs/en/sql-reference/table-functions/"},next:{title:"merge",permalink:"/docs/docs/en/sql-reference/table-functions/merge"}},p={},c=[{value:"Globs in Path",id:"globs-in-path",level:2},{value:"Virtual Columns",id:"virtual-columns",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file"},"file"),(0,l.kt)("p",null,"Creates a table from a file. This table function is similar to ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/table-functions/url"},"url")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/table-functions/hdfs"},"hdfs")," ones."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"file")," function can be used in ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," queries on data in ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/special/file"},"File")," tables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"file(path, format, structure)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u2014 The relative path to the file from ",(0,l.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-user_files_path"},"user_files_path"),". Path to file support following globs in read-only mode: ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,l.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,l.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 strings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,l.kt)("a",{parentName:"li",href:"/docs/docs/en/interfaces/formats#formats"},"format")," of the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"A table with the specified structure for reading or writing data in the specified file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"user_files_path")," and the contents of the file ",(0,l.kt)("inlineCode",{parentName:"p"},"test.csv"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ grep user_files_path /etc/clickhouse-server/config.xml\n    <user_files_path>/var/lib/clickhouse/user_files/</user_files_path>\n\n$ cat /var/lib/clickhouse/user_files/test.csv\n    1,2,3\n    3,2,1\n    78,43,45\n")),(0,l.kt)("p",null,"Getting data from a table in ",(0,l.kt)("inlineCode",{parentName:"p"},"test.csv")," and selecting the first two rows from it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32') LIMIT 2;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting the first 10 lines of a table that contains 3 columns of ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/data-types/int-uint"},"UInt32")," type from a CSV file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32') LIMIT 10;\n")),(0,l.kt)("p",null,"Inserting data from a file into a table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32') VALUES (1, 2, 3), (3, 2, 1);\nSELECT * FROM file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"globs-in-path"},"Globs in Path"),(0,l.kt)("p",null,"Multiple path components can have globs. For being processed file must exist and match to the whole path pattern (not only suffix or prefix)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u2014 Substitutes any number of any characters except ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," including empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u2014 Substitutes any single character."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 Substitutes any of strings ",(0,l.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 Substitutes any number in range from N to M including both borders.")),(0,l.kt)("p",null,"Constructions with ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," are similar to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/table-functions/remote"},"remote")," table function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Suppose we have several files with the following relative paths:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'some_dir/some_file_1'"),(0,l.kt)("li",{parentName:"ul"},"'some_dir/some_file_2'"),(0,l.kt)("li",{parentName:"ul"},"'some_dir/some_file_3'"),(0,l.kt)("li",{parentName:"ul"},"'another_dir/some_file_1'"),(0,l.kt)("li",{parentName:"ul"},"'another_dir/some_file_2'"),(0,l.kt)("li",{parentName:"ul"},"'another_dir/some_file_3'")),(0,l.kt)("p",null,"Query the number of rows in these files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('{some,another}_dir/some_file_{1..3}', 'TSV', 'name String, value UInt32');\n")),(0,l.kt)("p",null,"Query the number of rows in all files of these two directories:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('{some,another}_dir/*', 'TSV', 'name String, value UInt32');\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query the data from files named ",(0,l.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file999"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('big_dir/file{0..9}{0..9}{0..9}', 'CSV', 'name String, value UInt32');\n")),(0,l.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 Path to the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 Name of the file.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/docs/en/engines/table-engines/#table_engines-virtual_columns"},"Virtual columns"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/file/"},"Original article")," "))}f.isMDXComponent=!0}}]);