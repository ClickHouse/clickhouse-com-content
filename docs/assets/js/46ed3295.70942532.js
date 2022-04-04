"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75799],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,N=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(N,i(i({ref:n},p),{},{components:t})):r.createElement(N,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33490:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={sidebar_label:"UNION"},s="UNION Clause",u={unversionedId:"en/sql-reference/statements/select/union",id:"en/sql-reference/statements/select/union",title:"UNION Clause",description:"union-clause}",source:"@site/docs/en/sql-reference/statements/select/union.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/union",permalink:"/docs/docs/en/sql-reference/statements/select/union",tags:[],version:"current",frontMatter:{sidebar_label:"UNION"},sidebar:"tutorialSidebar",previous:{title:"SAMPLE",permalink:"/docs/docs/en/sql-reference/statements/select/sample"},next:{title:"WHERE",permalink:"/docs/docs/en/sql-reference/statements/select/where"}},p={},c=[],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"union-clause"},"UNION Clause"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," with explicitly specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION ALL")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT"),"."),(0,o.kt)("p",null,"If you don't specify ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", it will depend on the ",(0,o.kt)("inlineCode",{parentName:"p"},"union_default_mode")," setting. The difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION ALL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT")," is that ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT")," will do a distinct transform for union result, it is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT")," from a subquery containing ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION ALL"),"."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," to combine any number of ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," queries by extending their results. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CounterID, 1 AS table, toInt64(count()) AS c\n    FROM test.hits\n    GROUP BY CounterID\n\nUNION ALL\n\nSELECT CounterID, 2 AS table, sum(Sign) AS c\n    FROM test.visits\n    GROUP BY CounterID\n    HAVING c > 0\n")),(0,o.kt)("p",null,"Result columns are matched by their index (order inside ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT"),"). If column names do not match, names for the final result are taken from the first query."),(0,o.kt)("p",null,"Type casting is performed for unions. For example, if two queries being combined have the same field with non-",(0,o.kt)("inlineCode",{parentName:"p"},"Nullable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Nullable")," types from a compatible type, the resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Nullable")," type field."),(0,o.kt)("p",null,"Queries that are parts of ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," can be enclosed in round brackets. ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/order-by"},"ORDER BY")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/limit"},"LIMIT")," are applied to separate queries, not to the final result. If you need to apply a conversion to the final result, you can put all the queries with ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," in a subquery in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/from"},"FROM")," clause."),(0,o.kt)("p",null,"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," without explicitly specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION ALL")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT"),", you can specify the union mode using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/en/operations/settings/#union-default-mode"},"union_default_mode")," setting. The setting values can be ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DISTINCT")," or an empty string. However, if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"union_default_mode")," setting to empty string, it will throw an exception. The following examples demonstrate the results of queries with different values setting."),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET union_default_mode = 'DISTINCT';\nSELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 2;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u25001\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET union_default_mode = 'ALL';\nSELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 2;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u25001\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Queries that are parts of ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION/UNION ALL/UNION DISTINCT")," can be run simultaneously, and their results can be mixed together."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#insert_null_as_default"},"insert_null_as_default")," setting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/en/operations/settings/#union-default-mode"},"union_default_mode")," setting.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/union/"},"Original article")," "))}d.isMDXComponent=!0}}]);