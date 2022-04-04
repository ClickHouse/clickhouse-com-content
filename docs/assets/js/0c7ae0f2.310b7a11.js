"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51509],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,E=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return n?r.createElement(E,o(o({ref:t},c),{},{components:n})):r.createElement(E,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s=void 0,u={unversionedId:"en/operations/utilities/clickhouse-format",id:"en/operations/utilities/clickhouse-format",title:"clickhouse-format",description:"Allows formatting input queries.",source:"@site/docs/en/operations/utilities/clickhouse-format.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-format",permalink:"/docs/docs/en/operations/utilities/clickhouse-format",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"clickhouse-compressor",permalink:"/docs/docs/en/operations/utilities/clickhouse-compressor"},next:{title:"clickhouse-obfuscator",permalink:"/docs/docs/en/operations/utilities/clickhouse-obfuscator"}},c={},p=[{value:"Examples",id:"examples",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-format"},"clickhouse-format"),(0,l.kt)("p",null,"Allows formatting input queries."),(0,l.kt)("p",null,"Keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help")," or",(0,l.kt)("inlineCode",{parentName:"li"},"-h")," \u2014 Produce help message."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--query")," \u2014 Format queries of any length and complexity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--hilite")," \u2014 Add syntax highlight with ANSI terminal escape sequences."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--oneline")," \u2014 Format in single line."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--quiet")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"-q")," \u2014 Just check syntax, no output on success."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--multiquery")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"-n")," \u2014 Allow multiple queries in the same file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--obfuscate")," \u2014 Obfuscate instead of formatting."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--seed <string>")," \u2014 Seed arbitrary string that determines the result of obfuscation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--backslash")," \u2014 Add a backslash at the end of each line of the formatted query. Can be useful when you copy a query from web or somewhere else with multiple lines, and want to execute it in command line.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Formatting a query:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --query "select number from numbers(10) where number%2 order by number desc;"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT number\nFROM numbers(10)\nWHERE number % 2\nORDER BY number DESC\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Highlighting and single line:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --oneline --hilite <<< "SELECT sum(number) FROM numbers(5);"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(number) FROM numbers(5)\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Multiqueries:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format -n <<< "SELECT * FROM (SELECT 1 AS x UNION ALL SELECT 1 UNION DISTINCT SELECT 3);"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM\n(\n    SELECT 1 AS x\n    UNION ALL\n    SELECT 1\n    UNION DISTINCT\n    SELECT 3\n)\n;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Obfuscating:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --seed Hello --obfuscate <<< "SELECT cost_first_screen BETWEEN a AND b, CASE WHEN x >= 123 THEN y ELSE NULL END;"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT treasury_mammoth_hazelnut BETWEEN nutmeg AND span, CASE WHEN chive >= 116 THEN switching ELSE ANYTHING END;\n")),(0,l.kt)("p",null,"Same query and another seed string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --seed World --obfuscate <<< "SELECT cost_first_screen BETWEEN a AND b, CASE WHEN x >= 123 THEN y ELSE NULL END;"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT horse_tape_summer BETWEEN folklore AND moccasins, CASE WHEN intestine >= 116 THEN nonconformist ELSE FORESTRY END;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Adding backslash:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --backslash <<< "SELECT * FROM (SELECT 1 AS x UNION ALL SELECT 1 UNION DISTINCT SELECT 3);"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT * \\\nFROM  \\\n( \\\n    SELECT 1 AS x \\\n    UNION ALL \\\n    SELECT 1 \\\n    UNION DISTINCT \\\n    SELECT 3 \\\n)\n")))}k.isMDXComponent=!0}}]);