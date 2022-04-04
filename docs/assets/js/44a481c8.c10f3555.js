"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[611],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},c="How Do I Export Data from ClickHouse to a File?",s={unversionedId:"faq/integration/file-export",id:"faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",description:"how-to-export-to-file}",source:"@site/docs/faq/integration/file-export.md",sourceDirName:"faq/integration",slug:"/faq/integration/file-export",permalink:"/docs/docs/faq/integration/file-export",tags:[],version:"current",frontMatter:{title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},sidebar:"tutorialSidebar",previous:{title:"Integrating ClickHouse with Other Systems",permalink:"/docs/docs/faq/integration/"},next:{title:"How to import JSON into ClickHouse?",permalink:"/docs/docs/faq/integration/json-import"}},u={},p=[{value:"Using INTO OUTFILE Clause",id:"using-into-outfile-clause",level:2},{value:"Using a File-Engine Table",id:"using-a-file-engine-table",level:2},{value:"Using Command-Line Redirection",id:"using-command-line-redirection",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-export-to-file"},"How Do I Export Data from ClickHouse to a File?"),(0,a.kt)("h2",{id:"using-into-outfile-clause"},"Using INTO OUTFILE Clause"),(0,a.kt)("p",null,"Add an ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/into-outfile"},"INTO OUTFILE")," clause to your query."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file'\n")),(0,a.kt)("p",null,"By default, ClickHouse uses the ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/interfaces/formats"},"TabSeparated")," format for output data. To select the ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/interfaces/formats"},"data format"),", use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/sql-reference/statements/select/format"},"FORMAT clause"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file' FORMAT CSV\n")),(0,a.kt)("h2",{id:"using-a-file-engine-table"},"Using a File-Engine Table"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/engines/table-engines/special/file"},"File")," table engine."),(0,a.kt)("h2",{id:"using-command-line-redirection"},"Using Command-Line Redirection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/en/interfaces/cli"},"clickhouse-client"),"."))}d.isMDXComponent=!0}}]);