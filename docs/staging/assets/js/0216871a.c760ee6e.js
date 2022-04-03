"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62093],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9735:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={sidebar_position:32,sidebar_label:"Functions"},l="Functions",u={unversionedId:"en/sql-reference/functions/index",id:"en/sql-reference/functions/index",title:"Functions",description:"There are at least\\* two types of functions - regular functions (they are just called \u201cfunctions\u201d) and aggregate functions. These are completely different concepts. Regular functions work as if they are applied to each row separately (for each row, the result of the function does not depend on the other rows). Aggregate functions accumulate a set of values from various rows (i.e.\xa0they depend on the entire set of rows).",source:"@site/docs/en/sql-reference/functions/index.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/",permalink:"/docs/en/sql-reference/functions/",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32,sidebar_label:"Functions"},sidebar:"tutorialSidebar",previous:{title:"Distributed DDL",permalink:"/docs/en/sql-reference/distributed-ddl"},next:{title:"Arithmetic",permalink:"/docs/en/sql-reference/functions/arithmetic-functions"}},c={},p=[{value:"Strong Typing",id:"strong-typing",level:2},{value:"Common Subexpression Elimination",id:"common-subexpression-elimination",level:2},{value:"Types of Results",id:"types-of-results",level:2},{value:"Constants",id:"constants",level:2},{value:"NULL Processing",id:"null-processing",level:2},{value:"Constancy",id:"constancy",level:2},{value:"Higher-order functions, <code>-&gt;</code> operator and lambda(params, expr) function",id:"higher-order-functions",level:2},{value:"SQL User Defined Functions",id:"user-defined-functions",level:2},{value:"Executable User Defined Functions",id:"executable-user-defined-functions",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Evaluation of Argument Expressions",id:"evaluation-of-argument-expressions",level:2},{value:"Performing Functions for Distributed Query Processing",id:"performing-functions-for-distributed-query-processing",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("p",null,"There are at least","*"," two types of functions - regular functions (they are just called \u201cfunctions\u201d) and aggregate functions. These are completely different concepts. Regular functions work as if they are applied to each row separately (for each row, the result of the function does not depend on the other rows). Aggregate functions accumulate a set of values from various rows (i.e.\xa0they depend on the entire set of rows)."),(0,i.kt)("p",null,"In this section we discuss regular functions. For aggregate functions, see the section \u201cAggregate functions\u201d."),(0,i.kt)("p",null,"*"," - There is a third type of function that the \u2018arrayJoin\u2019 function belongs to; table functions can also be mentioned separately.","*"),(0,i.kt)("h2",{id:"strong-typing"},"Strong Typing"),(0,i.kt)("p",null,"In contrast to standard SQL, ClickHouse has strong typing. In other words, it does not make implicit conversions between types. Each function works for a specific set of types. This means that sometimes you need to use type conversion functions."),(0,i.kt)("h2",{id:"common-subexpression-elimination"},"Common Subexpression Elimination"),(0,i.kt)("p",null,"All expressions in a query that have the same AST (the same record or same result of syntactic parsing) are considered to have identical values. Such expressions are concatenated and executed once. Identical subqueries are also eliminated this way."),(0,i.kt)("h2",{id:"types-of-results"},"Types of Results"),(0,i.kt)("p",null,"All functions return a single return as the result (not several values, and not zero values). The type of result is usually defined only by the types of arguments, not by the values. Exceptions are the tupleElement function (the a.N operator), and the toFixedString function."),(0,i.kt)("h2",{id:"constants"},"Constants"),(0,i.kt)("p",null,"For simplicity, certain functions can only work with constants for some arguments. For example, the right argument of the LIKE operator must be a constant.\nAlmost all functions return a constant for constant arguments. The exception is functions that generate random numbers.\nThe \u2018now\u2019 function returns different values for queries that were run at different times, but the result is considered a constant, since constancy is only important within a single query.\nA constant expression is also considered a constant (for example, the right half of the LIKE operator can be constructed from multiple constants)."),(0,i.kt)("p",null,"Functions can be implemented in different ways for constant and non-constant arguments (different code is executed). But the results for a constant and for a true column containing only the same value should match each other."),(0,i.kt)("h2",{id:"null-processing"},"NULL Processing"),(0,i.kt)("p",null,"Functions have the following behaviors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If at least one of the arguments of the function is ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),", the function result is also ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},"Special behavior that is specified individually in the description of each function. In the ClickHouse source code, these functions have ",(0,i.kt)("inlineCode",{parentName:"li"},"UseDefaultImplementationForNulls=false"),".")),(0,i.kt)("h2",{id:"constancy"},"Constancy"),(0,i.kt)("p",null,"Functions can\u2019t change the values of their arguments \u2013 any changes are returned as the result. Thus, the result of calculating separate functions does not depend on the order in which the functions are written in the query."),(0,i.kt)("h2",{id:"higher-order-functions"},"Higher-order functions, ",(0,i.kt)("inlineCode",{parentName:"h2"},"->")," operator and lambda(params, expr) function"),(0,i.kt)("p",null,"Higher-order functions can only accept lambda functions as their functional argument. To pass a lambda function to a higher-order function use ",(0,i.kt)("inlineCode",{parentName:"p"},"->")," operator. The left side of the arrow has a formal parameter, which is any ID, or multiple formal parameters \u2013 any IDs in a tuple. The right side of the arrow has an expression that can use these formal parameters, as well as any table columns."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x -> 2 * x\nstr -> str != Referer\n")),(0,i.kt)("p",null,"A lambda function that accepts multiple arguments can also be passed to a higher-order function. In this case, the higher-order function is passed several arrays of identical length that these arguments will correspond to."),(0,i.kt)("p",null,"For some functions the first argument (the lambda function) can be omitted. In this case, identical mapping is assumed."),(0,i.kt)("h2",{id:"user-defined-functions"},"SQL User Defined Functions"),(0,i.kt)("p",null,"Custom functions from lambda expressions can be created using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/function"},"CREATE FUNCTION")," statement. To delete these functions use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/drop#drop-function"},"DROP FUNCTION")," statement."),(0,i.kt)("h2",{id:"executable-user-defined-functions"},"Executable User Defined Functions"),(0,i.kt)("p",null,"ClickHouse can call any external executable program or script to process data. Describe such functions in a ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/configuration-files"},"configuration file")," and add the path of that file to the main configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"user_defined_executable_functions_config")," setting. If a wildcard symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," is used in the path, then all files matching the pattern are loaded. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<user_defined_executable_functions_config>*_function.xml</user_defined_executable_functions_config>\n")),(0,i.kt)("p",null,"User defined function configurations are searched relative to the path specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_files_path")," setting."),(0,i.kt)("p",null,"A function configuration contains the following settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - a function name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command")," - script name to execute or command if ",(0,i.kt)("inlineCode",{parentName:"li"},"execute_direct")," is false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"argument")," - argument description with the ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", and optional ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," of an argument. Each argument is described in a separate setting. Specifying name is necessary if argument names are part of serialization for user defined function format like ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#native"},"Native")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#jsoneachrow"},"JSONEachRow"),". Default argument name value is ",(0,i.kt)("inlineCode",{parentName:"li"},"c")," + argument_number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," - a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats"},"format")," in which arguments are passed to the command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"return_type")," - the type of a returned value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"return_name")," - name of retuned value. Specifying return name is necessary if return name is part of serialization for user defined function format like ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#native"},"Native")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#jsoneachrow"},"JSONEachRow"),". Optional. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"result"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - an executable type. If ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"executable")," then single command is started. If it is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"executable_pool")," then a pool of commands is created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_command_execution_time")," - maximum execution time in seconds for processing block of data. This setting is valid for ",(0,i.kt)("inlineCode",{parentName:"li"},"executable_pool")," commands only. Optional. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_termination_timeout")," - time in seconds during which a command should finish after its pipe is closed. After that time ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGTERM")," is sent to the process executing the command. Optional. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_read_timeout")," - timeout for reading data from command stdout in milliseconds. Default value 10000. Optional parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_write_timeout")," - timeout for writing data to command stdin in milliseconds. Default value 10000. Optional parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pool_size")," - the size of a command pool. Optional. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"16"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"send_chunk_header")," - controls whether to send row count before sending a chunk of data to process. Optional. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute_direct")," - If ",(0,i.kt)("inlineCode",{parentName:"li"},"execute_direct")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," will be searched inside user_scripts folder. Additional script arguments can be specified using whitespace separator. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"script_name arg1 arg2"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"execute_direct")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"command")," is passed as argument for ",(0,i.kt)("inlineCode",{parentName:"li"},"bin/sh -c"),". Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". Optional parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifetime")," - the reload interval of a function in seconds. If it is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," then the function is not reloaded. Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". Optional parameter.")),(0,i.kt)("p",null,"The command must read arguments from ",(0,i.kt)("inlineCode",{parentName:"p"},"STDIN")," and must output the result to ",(0,i.kt)("inlineCode",{parentName:"p"},"STDOUT"),". The command must process arguments iteratively. That is after processing a chunk of arguments it must wait for the next chunk."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"\nCreating ",(0,i.kt)("inlineCode",{parentName:"p"},"test_function")," using XML configuration.\nFile test_function.xml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<functions>\n    <function>\n        <type>executable</type>\n        <name>test_function_python</name>\n        <return_type>String</return_type>\n        <argument>\n            <type>UInt64</type>\n            <name>value</name>\n        </argument>\n        <format>TabSeparated</format>\n        <command>test_function.py</command>\n    </function>\n</functions>\n")),(0,i.kt)("p",null,"Script file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"user_scripts")," folder ",(0,i.kt)("inlineCode",{parentName:"p"},"test_function.py"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/python3\n\nimport sys\n\nif __name__ == '__main__':\n    for line in sys.stdin:\n        print(\"Value \" + line, end='')\n        sys.stdout.flush()\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT test_function_python(toUInt64(2));\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500test_function_python(2)\u2500\u2510\n\u2502 Value 2                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Creating ",(0,i.kt)("inlineCode",{parentName:"p"},"test_function_sum")," manually specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"execute_direct")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using XML configuration.\nFile test_function.xml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<functions>\n    <function>\n        <type>executable</type>\n        <name>test_function_sum</name>\n        <return_type>UInt64</return_type>\n        <argument>\n            <type>UInt64</type>\n            <name>lhs</name>\n        </argument>\n        <argument>\n            <type>UInt64</type>\n            <name>rhs</name>\n        </argument>\n        <format>TabSeparated</format>\n        <command>cd /; clickhouse-local --input-format TabSeparated --output-format TabSeparated --structure 'x UInt64, y UInt64' --query \"SELECT x + y FROM table\"</command>\n        <execute_direct>0</execute_direct>\n    </function>\n</functions>\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT test_function_sum(2, 2);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500test_function_sum(2, 2)\u2500\u2510\n\u2502                       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Creating ",(0,i.kt)("inlineCode",{parentName:"p"},"test_function_sum_json")," with named arguments and format ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#jsoneachrow"},"JSONEachRow")," using XML configuration.\nFile test_function.xml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<function>\n    <type>executable</type>\n    <name>test_function_sum_json</name>\n    <return_type>UInt64</return_type>\n    <return_name>result_name</return_name>\n    <argument>\n        <type>UInt64</type>\n        <name>argument_1</name>\n    </argument>\n    <argument>\n        <type>UInt64</type>\n        <name>argument_2</name>\n    </argument>\n    <format>JSONEachRow</format>\n    <command>test_function_sum_json.py</command>\n</function>\n")),(0,i.kt)("p",null,"Script file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"user_scripts")," folder ",(0,i.kt)("inlineCode",{parentName:"p"},"test_function_sum_json.py"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/python3\n\nimport sys\nimport json\n\nif __name__ == '__main__':\n    for line in sys.stdin:\n        value = json.loads(line)\n        first_arg = int(value['argument_1'])\n        second_arg = int(value['argument_2'])\n        result = {'result_name': first_arg + second_arg}\n        print(json.dumps(result), end='\\n')\n        sys.stdout.flush()\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT test_function_sum_json(2, 2);\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500test_function_sum_json(2, 2)\u2500\u2510\n\u2502                            4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"error-handling"},"Error Handling"),(0,i.kt)("p",null,"Some functions might throw an exception if the data is invalid. In this case, the query is canceled and an error text is returned to the client. For distributed processing, when an exception occurs on one of the servers, the other servers also attempt to abort the query."),(0,i.kt)("h2",{id:"evaluation-of-argument-expressions"},"Evaluation of Argument Expressions"),(0,i.kt)("p",null,"In almost all programming languages, one of the arguments might not be evaluated for certain operators. This is usually the operators ",(0,i.kt)("inlineCode",{parentName:"p"},"&&"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"||"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"?:"),".\nBut in ClickHouse, arguments of functions (operators) are always evaluated. This is because entire parts of columns are evaluated at once, instead of calculating each row separately."),(0,i.kt)("h2",{id:"performing-functions-for-distributed-query-processing"},"Performing Functions for Distributed Query Processing"),(0,i.kt)("p",null,"For distributed query processing, as many stages of query processing as possible are performed on remote servers, and the rest of the stages (merging intermediate results and everything after that) are performed on the requestor server."),(0,i.kt)("p",null,"This means that functions can be performed on different servers.\nFor example, in the query ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT f(sum(g(x))) FROM distributed_table GROUP BY h(y),")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if a ",(0,i.kt)("inlineCode",{parentName:"li"},"distributed_table")," has at least two shards, the functions \u2018g\u2019 and \u2018h\u2019 are performed on remote servers, and the function \u2018f\u2019 is performed on the requestor server."),(0,i.kt)("li",{parentName:"ul"},"if a ",(0,i.kt)("inlineCode",{parentName:"li"},"distributed_table")," has only one shard, all the \u2018f\u2019, \u2018g\u2019, and \u2018h\u2019 functions are performed on this shard\u2019s server.")),(0,i.kt)("p",null,"The result of a function usually does not depend on which server it is performed on. However, sometimes this is important.\nFor example, functions that work with dictionaries use the dictionary that exists on the server they are running on.\nAnother example is the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostName")," function, which returns the name of the server it is running on in order to make ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," by servers in a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query."),(0,i.kt)("p",null,"If a function in a query is performed on the requestor server, but you need to perform it on remote servers, you can wrap it in an \u2018any\u2019 aggregate function or add it to a key in ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"."))}d.isMDXComponent=!0}}]);