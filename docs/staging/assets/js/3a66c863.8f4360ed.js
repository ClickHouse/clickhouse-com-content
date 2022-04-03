"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44371],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,N=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(N,s(s({ref:n},u),{},{components:t})):a.createElement(N,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58921:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),s=["components"],o={sidebar_label:"ARRAY JOIN"},i="ARRAY JOIN Clause",p={unversionedId:"en/sql-reference/statements/select/array-join",id:"en/sql-reference/statements/select/array-join",title:"ARRAY JOIN Clause",description:"select-array-join-clause}",source:"@site/docs/en/sql-reference/statements/select/array-join.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/array-join",permalink:"/docs/en/sql-reference/statements/select/array-join",tags:[],version:"current",frontMatter:{sidebar_label:"ARRAY JOIN"},sidebar:"tutorialSidebar",previous:{title:"ALL",permalink:"/docs/en/sql-reference/statements/select/all"},next:{title:"DISTINCT",permalink:"/docs/en/sql-reference/statements/select/distinct"}},u={},c=[{value:"Basic ARRAY JOIN Examples",id:"basic-array-join-examples",level:2},{value:"Using Aliases",id:"using-aliases",level:2},{value:"ARRAY JOIN with Nested Data Structure",id:"array-join-with-nested-data-structure",level:2},{value:"Implementation Details",id:"implementation-details",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-array-join-clause"},"ARRAY JOIN Clause"),(0,l.kt)("p",null,"It is a common operation for tables that contain an array column to produce a new table that has a column with each individual array element of that initial column, while values of other columns are duplicated. This is the basic case of what ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," clause does."),(0,l.kt)("p",null,"Its name comes from the fact that it can be looked at as executing ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," with an array or nested data structure. The intent is similar to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/array-join#functions_arrayjoin"},"arrayJoin")," function, but the clause functionality is broader."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list>\nFROM <left_subquery>\n[LEFT] ARRAY JOIN <array>\n[WHERE|PREWHERE <expr>]\n...\n")),(0,l.kt)("p",null,"You can specify only one ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," clause in a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," query."),(0,l.kt)("p",null,"Supported types of ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," are listed below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ARRAY JOIN")," - In base case, empty arrays are not included in the result of ",(0,l.kt)("inlineCode",{parentName:"li"},"JOIN"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LEFT ARRAY JOIN")," - The result of ",(0,l.kt)("inlineCode",{parentName:"li"},"JOIN")," contains rows with empty arrays. The value for an empty array is set to the default value for the array element type (usually 0, empty string or NULL).")),(0,l.kt)("h2",{id:"basic-array-join-examples"},"Basic ARRAY JOIN Examples"),(0,l.kt)("p",null,"The examples below demonstrate the usage of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LEFT ARRAY JOIN")," clauses. Let\u2019s create a table with an ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array")," type column and insert values into it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE arrays_test\n(\n    s String,\n    arr Array(UInt8)\n) ENGINE = Memory;\n\nINSERT INTO arrays_test\nVALUES ('Hello', [1,2]), ('World', [3,4,5]), ('Goodbye', []);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello       \u2502 [1,2]   \u2502\n\u2502 World       \u2502 [3,4,5] \u2502\n\u2502 Goodbye     \u2502 []      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The example below uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr\nFROM arrays_test\nARRAY JOIN arr;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2510\n\u2502 Hello \u2502   1 \u2502\n\u2502 Hello \u2502   2 \u2502\n\u2502 World \u2502   3 \u2502\n\u2502 World \u2502   4 \u2502\n\u2502 World \u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The next example uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"LEFT ARRAY JOIN")," clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr\nFROM arrays_test\nLEFT ARRAY JOIN arr;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2510\n\u2502 Hello       \u2502   1 \u2502\n\u2502 Hello       \u2502   2 \u2502\n\u2502 World       \u2502   3 \u2502\n\u2502 World       \u2502   4 \u2502\n\u2502 World       \u2502   5 \u2502\n\u2502 Goodbye     \u2502   0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"using-aliases"},"Using Aliases"),(0,l.kt)("p",null,"An alias can be specified for an array in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," clause. In this case, an array item can be accessed by this alias, but the array itself is accessed by the original name. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a\nFROM arrays_test\nARRAY JOIN arr AS a;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u2510\n\u2502 Hello \u2502 [1,2]   \u2502 1 \u2502\n\u2502 Hello \u2502 [1,2]   \u2502 2 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 3 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 4 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Using aliases, you can perform ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," with an external array. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr_external\nFROM arrays_test\nARRAY JOIN [1, 2, 3] AS arr_external;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr_external\u2500\u2510\n\u2502 Hello       \u2502            1 \u2502\n\u2502 Hello       \u2502            2 \u2502\n\u2502 Hello       \u2502            3 \u2502\n\u2502 World       \u2502            1 \u2502\n\u2502 World       \u2502            2 \u2502\n\u2502 World       \u2502            3 \u2502\n\u2502 Goodbye     \u2502            1 \u2502\n\u2502 Goodbye     \u2502            2 \u2502\n\u2502 Goodbye     \u2502            3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Multiple arrays can be comma-separated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," clause. In this case, ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," is performed with them simultaneously (the direct sum, not the cartesian product). Note that all the arrays must have the same size by default. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a, num, mapped\nFROM arrays_test\nARRAY JOIN arr AS a, arrayEnumerate(arr) AS num, arrayMap(x -> x + 1, arr) AS mapped;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u252c\u2500num\u2500\u252c\u2500mapped\u2500\u2510\n\u2502 Hello \u2502 [1,2]   \u2502 1 \u2502   1 \u2502      2 \u2502\n\u2502 Hello \u2502 [1,2]   \u2502 2 \u2502   2 \u2502      3 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 3 \u2502   1 \u2502      4 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 4 \u2502   2 \u2502      5 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 5 \u2502   3 \u2502      6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The example below uses the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/array-functions#array_functions-arrayenumerate"},"arrayEnumerate")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a, num, arrayEnumerate(arr)\nFROM arrays_test\nARRAY JOIN arr AS a, arrayEnumerate(arr) AS num;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u252c\u2500num\u2500\u252c\u2500arrayEnumerate(arr)\u2500\u2510\n\u2502 Hello \u2502 [1,2]   \u2502 1 \u2502   1 \u2502 [1,2]               \u2502\n\u2502 Hello \u2502 [1,2]   \u2502 2 \u2502   2 \u2502 [1,2]               \u2502\n\u2502 World \u2502 [3,4,5] \u2502 3 \u2502   1 \u2502 [1,2,3]             \u2502\n\u2502 World \u2502 [3,4,5] \u2502 4 \u2502   2 \u2502 [1,2,3]             \u2502\n\u2502 World \u2502 [3,4,5] \u2502 5 \u2502   3 \u2502 [1,2,3]             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Multiple arrays with different sizes can be joined by using: ",(0,l.kt)("inlineCode",{parentName:"p"},"SETTINGS enable_unaligned_array_join = 1"),". Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a, b \nFROM arrays_test ARRAY JOIN arr as a, [['a','b'],['c']] as b \nSETTINGS enable_unaligned_array_join = 1;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u252c\u2500b\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello   \u2502 [1,2]   \u2502 1 \u2502 ['a','b'] \u2502\n\u2502 Hello   \u2502 [1,2]   \u2502 2 \u2502 ['c']     \u2502\n\u2502 World   \u2502 [3,4,5] \u2502 3 \u2502 ['a','b'] \u2502\n\u2502 World   \u2502 [3,4,5] \u2502 4 \u2502 ['c']     \u2502\n\u2502 World   \u2502 [3,4,5] \u2502 5 \u2502 []        \u2502\n\u2502 Goodbye \u2502 []      \u2502 0 \u2502 ['a','b'] \u2502\n\u2502 Goodbye \u2502 []      \u2502 0 \u2502 ['c']     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"array-join-with-nested-data-structure"},"ARRAY JOIN with Nested Data Structure"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," also works with ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nested-data-structures/nested"},"nested data structures"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE nested_test\n(\n    s String,\n    nest Nested(\n    x UInt8,\n    y UInt32)\n) ENGINE = Memory;\n\nINSERT INTO nested_test\nVALUES ('Hello', [1,2], [10,20]), ('World', [3,4,5], [30,40,50]), ('Goodbye', [], []);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello   \u2502 [1,2]   \u2502 [10,20]    \u2502\n\u2502 World   \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2502 Goodbye \u2502 []      \u2502 []         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN nest;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u252c\u2500nest.y\u2500\u2510\n\u2502 Hello \u2502      1 \u2502     10 \u2502\n\u2502 Hello \u2502      2 \u2502     20 \u2502\n\u2502 World \u2502      3 \u2502     30 \u2502\n\u2502 World \u2502      4 \u2502     40 \u2502\n\u2502 World \u2502      5 \u2502     50 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"When specifying names of nested data structures in ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN"),", the meaning is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," with all the array elements that it consists of. Examples are listed below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN `nest.x`, `nest.y`;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u252c\u2500nest.y\u2500\u2510\n\u2502 Hello \u2502      1 \u2502     10 \u2502\n\u2502 Hello \u2502      2 \u2502     20 \u2502\n\u2502 World \u2502      3 \u2502     30 \u2502\n\u2502 World \u2502      4 \u2502     40 \u2502\n\u2502 World \u2502      5 \u2502     50 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"This variation also makes sense:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN `nest.x`;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello \u2502      1 \u2502 [10,20]    \u2502\n\u2502 Hello \u2502      2 \u2502 [10,20]    \u2502\n\u2502 World \u2502      3 \u2502 [30,40,50] \u2502\n\u2502 World \u2502      4 \u2502 [30,40,50] \u2502\n\u2502 World \u2502      5 \u2502 [30,40,50] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"An alias may be used for a nested data structure, in order to select either the ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," result or the source array. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `n.x`, `n.y`, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN nest AS n;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500n.x\u2500\u252c\u2500n.y\u2500\u252c\u2500nest.x\u2500\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello \u2502   1 \u2502  10 \u2502 [1,2]   \u2502 [10,20]    \u2502\n\u2502 Hello \u2502   2 \u2502  20 \u2502 [1,2]   \u2502 [10,20]    \u2502\n\u2502 World \u2502   3 \u2502  30 \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2502 World \u2502   4 \u2502  40 \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2502 World \u2502   5 \u2502  50 \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example of using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/array-functions#array_functions-arrayenumerate"},"arrayEnumerate")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `n.x`, `n.y`, `nest.x`, `nest.y`, num\nFROM nested_test\nARRAY JOIN nest AS n, arrayEnumerate(`nest.x`) AS num;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500n.x\u2500\u252c\u2500n.y\u2500\u252c\u2500nest.x\u2500\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u252c\u2500num\u2500\u2510\n\u2502 Hello \u2502   1 \u2502  10 \u2502 [1,2]   \u2502 [10,20]    \u2502   1 \u2502\n\u2502 Hello \u2502   2 \u2502  20 \u2502 [1,2]   \u2502 [10,20]    \u2502   2 \u2502\n\u2502 World \u2502   3 \u2502  30 \u2502 [3,4,5] \u2502 [30,40,50] \u2502   1 \u2502\n\u2502 World \u2502   4 \u2502  40 \u2502 [3,4,5] \u2502 [30,40,50] \u2502   2 \u2502\n\u2502 World \u2502   5 \u2502  50 \u2502 [3,4,5] \u2502 [30,40,50] \u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,l.kt)("p",null,"The query execution order is optimized when running ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN"),". Although ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," must always be specified before the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/where"},"WHERE"),"/",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/prewhere"},"PREWHERE")," clause in a query, technically they can be performed in any order, unless result of ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," is used for filtering. The processing order is controlled by the query optimizer."))}m.isMDXComponent=!0}}]);