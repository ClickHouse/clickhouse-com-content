"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[24738],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35402:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:20,sidebar_label:"Dictionary"},c="Dictionary Table Engine",s={unversionedId:"en/engines/table-engines/special/dictionary",id:"en/engines/table-engines/special/dictionary",title:"Dictionary Table Engine",description:"dictionary}",source:"@site/docs/en/engines/table-engines/special/dictionary.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/dictionary",permalink:"/docs/en/engines/table-engines/special/dictionary",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Dictionary"},sidebar:"tutorialSidebar",previous:{title:"Distributed",permalink:"/docs/en/engines/table-engines/special/distributed"},next:{title:"Merge",permalink:"/docs/en/engines/table-engines/special/merge"}},u={},p=[{value:"Example",id:"example",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dictionary"},"Dictionary Table Engine"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," engine displays the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"dictionary")," data as a ClickHouse table."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"As an example, consider a dictionary of ",(0,i.kt)("inlineCode",{parentName:"p"},"products")," with the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionaries>\n    <dictionary>\n        <name>products</name>\n        <source>\n            <odbc>\n                <table>products</table>\n                <connection_string>DSN=some-db-server</connection_string>\n            </odbc>\n        </source>\n        <lifetime>\n            <min>300</min>\n            <max>360</max>\n        </lifetime>\n        <layout>\n            <flat/>\n        </layout>\n        <structure>\n            <id>\n                <name>product_id</name>\n            </id>\n            <attribute>\n                <name>title</name>\n                <type>String</type>\n                <null_value></null_value>\n            </attribute>\n        </structure>\n    </dictionary>\n</dictionaries>\n")),(0,i.kt)("p",null,"Query the dictionary data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    name,\n    type,\n    key,\n    attribute.names,\n    attribute.types,\n    bytes_allocated,\n    element_count,\n    source\nFROM system.dictionaries\nWHERE name = 'products'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u252c\u2500key\u2500\u2500\u2500\u2500\u252c\u2500attribute.names\u2500\u252c\u2500attribute.types\u2500\u252c\u2500bytes_allocated\u2500\u252c\u2500element_count\u2500\u252c\u2500source\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 products \u2502 Flat \u2502 UInt64 \u2502 ['title']       \u2502 ['String']      \u2502        23065376 \u2502        175032 \u2502 ODBC: .products \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/ext-dict-functions#ext_dict_functions"},"dictGet","*")," function to get the dictionary data in this format."),(0,i.kt)("p",null,"This view isn\u2019t helpful when you need to get raw data, or when performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," operation. For these cases, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," engine, which displays the dictionary data in a table."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE %table_name% (%fields%) engine = Dictionary(%dictionary_name%)`\n")),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table products (product_id UInt64, title String) Engine = Dictionary(products);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  Ok\n")),(0,i.kt)("p",null,"Take a look at what\u2019s in the table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from products limit 1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500product_id\u2500\u252c\u2500title\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502        152689 \u2502 Some item       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/dictionary#dictionary-function"},"Dictionary function"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/dictionary/"},"Original article")," "))}m.isMDXComponent=!0}}]);