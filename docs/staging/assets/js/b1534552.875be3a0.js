"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32308],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:42,sidebar_label:"Dictionary Updates"},s="Dictionary Updates",d={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",title:"Dictionary Updates",description:"ClickHouse periodically updates the dictionaries. The update interval for fully downloaded dictionaries and the invalidation interval for cached dictionaries are defined in the lifetime tag in seconds.",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"Dictionary Updates"},sidebar:"tutorialSidebar",previous:{title:"Storing Dictionaries in Memory",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},next:{title:"Sources of External Dictionaries",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"}},c={},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dictionary-updates"},"Dictionary Updates"),(0,r.kt)("p",null,"ClickHouse periodically updates the dictionaries. The update interval for fully downloaded dictionaries and the invalidation interval for cached dictionaries are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lifetime")," tag in seconds."),(0,r.kt)("p",null,"Dictionary updates (other than loading for first use) do not block queries. During updates, the old version of a dictionary is used. If an error occurs during an update, the error is written to the server log, and queries continue using the old version of dictionaries."),(0,r.kt)("p",null,"Example of settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <lifetime>300</lifetime>\n    ...\n</dictionary>\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (...)\n...\nLIFETIME(300)\n...\n")),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"<lifetime>0</lifetime>")," (",(0,r.kt)("inlineCode",{parentName:"p"},"LIFETIME(0)"),") prevents dictionaries from updating."),(0,r.kt)("p",null,"You can set a time interval for updates, and ClickHouse will choose a uniformly random time within this range. This is necessary in order to distribute the load on the dictionary source when updating on a large number of servers."),(0,r.kt)("p",null,"Example of settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <lifetime>\n        <min>300</min>\n        <max>360</max>\n    </lifetime>\n    ...\n</dictionary>\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LIFETIME(MIN 300 MAX 360)\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"<min>0</min>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<max>0</max>"),", ClickHouse does not reload the dictionary by timeout.\nIn this case, ClickHouse can reload the dictionary earlier if the dictionary configuration file was changed or the ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM RELOAD DICTIONARY")," command was executed."),(0,r.kt)("p",null,"When updating the dictionaries, the ClickHouse server applies different logic depending on the type of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For a text file, it checks the time of modification. If the time differs from the previously recorded time, the dictionary is updated."),(0,r.kt)("li",{parentName:"ul"},"For MySQL source, the time of modification is checked using a ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOW TABLE STATUS")," query (in case of MySQL 8 you need to disable meta-information caching in MySQL by ",(0,r.kt)("inlineCode",{parentName:"li"},"set global information_schema_stats_expiry=0"),")."),(0,r.kt)("li",{parentName:"ul"},"Dictionaries from other sources are updated every time by default.")),(0,r.kt)("p",null,"For other sources (ODBC, PostgreSQL, ClickHouse, etc), you can set up a query that will update the dictionaries only if they really changed, rather than each time. To do this, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The dictionary table must have a field that always changes when the source data is updated."),(0,r.kt)("li",{parentName:"ul"},"The settings of the source must specify a query that retrieves the changing field. The ClickHouse server interprets the query result as a row, and if this row has changed relative to its previous state, the dictionary is updated. Specify the query in the ",(0,r.kt)("inlineCode",{parentName:"li"},"<invalidate_query>")," field in the settings for the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source"),".")),(0,r.kt)("p",null,"Example of settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n    <odbc>\n      ...\n      <invalidate_query>SELECT update_time FROM dictionary_source where id = 1</invalidate_query>\n    </odbc>\n    ...\n</dictionary>\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"...\nSOURCE(ODBC(... invalidate_query 'SELECT update_time FROM dictionary_source where id = 1'))\n...\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ComplexKeyCache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SSDCache"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SSDComplexKeyCache")," dictionaries both synchronious and asynchronious updates are supported."),(0,r.kt)("p",null,"It is also possible for ",(0,r.kt)("inlineCode",{parentName:"p"},"Flat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Hashed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ComplexKeyHashed")," dictionaries to only request data that was changed after the previous update. If ",(0,r.kt)("inlineCode",{parentName:"p"},"update_field")," is specified as part of the dictionary source configuration, value of the previous update time in seconds will be added to the data request. Depends on source type (Executable, HTTP, MySQL, PostgreSQL, ClickHouse, or ODBC) different logic will be applied to ",(0,r.kt)("inlineCode",{parentName:"p"},"update_field")," before request data from an external source."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the source is HTTP then ",(0,r.kt)("inlineCode",{parentName:"li"},"update_field")," will be added as a query parameter with the last update time as the parameter value."),(0,r.kt)("li",{parentName:"ul"},"If the source is Executable then ",(0,r.kt)("inlineCode",{parentName:"li"},"update_field")," will be added as an executable script argument with the last update time as the argument value."),(0,r.kt)("li",{parentName:"ul"},"If the source is ClickHouse, MySQL, PostgreSQL, ODBC there will be an additional part of ",(0,r.kt)("inlineCode",{parentName:"li"},"WHERE"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"update_field")," is compared as greater or equal with the last update time.")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"update_field")," option is set, additional option ",(0,r.kt)("inlineCode",{parentName:"p"},"update_lag")," can be set. Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"update_lag")," option is subtracted from previous update time before request updated data."),(0,r.kt)("p",null,"Example of settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    ...\n        <clickhouse>\n            ...\n            <update_field>added_time</update_field>\n            <update_lag>15</update_lag>\n        </clickhouse>\n    ...\n</dictionary>\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"...\nSOURCE(CLICKHOUSE(... update_field 'added_time' update_lag 15))\n...\n")))}f.isMDXComponent=!0}}]);