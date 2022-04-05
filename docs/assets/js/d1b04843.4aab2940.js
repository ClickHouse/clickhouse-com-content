"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43495],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={},l="merge_tree_settings",c={unversionedId:"en/operations/system-tables/merge_tree_settings",id:"en/operations/system-tables/merge_tree_settings",title:"merge_tree_settings",description:"system-mergetreesettings}",source:"@site/docs/en/operations/system-tables/merge_tree_settings.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/merge_tree_settings",permalink:"/docs/en/operations/system-tables/merge_tree_settings",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/merge_tree_settings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"licenses",permalink:"/docs/en/operations/system-tables/licenses"},next:{title:"merges",permalink:"/docs/en/operations/system-tables/merges"}},p={},m=[],u={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-merge_tree_settings"},"merge_tree_settings"),(0,o.kt)("p",null,"Contains information about settings for ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeTree")," tables."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 Setting name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," (String) \u2014 Setting value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," (String) \u2014 Setting description."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," (String) \u2014 Setting type (implementation specific string value)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"changed")," (UInt8) \u2014 Whether the setting was explicitly defined in the config or explicitly changed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.merge_tree_settings LIMIT 4 FORMAT Vertical;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        index_granularity\nvalue:       8192\nchanged:     0\ndescription: How many rows correspond to one primary key value.\ntype:        SettingUInt64\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        min_bytes_for_wide_part\nvalue:       0\nchanged:     0\ndescription: Minimal uncompressed size in bytes to create part in wide format instead of compact\ntype:        SettingUInt64\n\nRow 3:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        min_rows_for_wide_part\nvalue:       0\nchanged:     0\ndescription: Minimal number of rows to create part in wide format instead of compact\ntype:        SettingUInt64\n\nRow 4:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        merge_max_block_size\nvalue:       8192\nchanged:     0\ndescription: How many rows in blocks should be formed for merge operations.\ntype:        SettingUInt64\n\n4 rows in set. Elapsed: 0.001 sec.\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/merge_tree_settings"},"Original article")," "))}g.isMDXComponent=!0}}]);