"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4714],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),I=u(n),m=i,d=I["".concat(p,".").concat(m)]||I[m]||s[m]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=I;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},4469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={sidebar_position:40,sidebar_label:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"},p="UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",u={unversionedId:"en/sql-reference/data-types/int-uint",id:"en/sql-reference/data-types/int-uint",title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",description:"Fixed-length integers, with or without a sign.",source:"@site/docs/en/sql-reference/data-types/int-uint.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/int-uint",permalink:"/docs/en/sql-reference/data-types/int-uint",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/docs/en/sql-reference/data-types/"},next:{title:"Float32, Float64",permalink:"/docs/en/sql-reference/data-types/float"}},c={},s=[{value:"Int Ranges",id:"int-ranges",level:2},{value:"UInt Ranges",id:"uint-ranges",level:2}],I={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uint8-uint16-uint32-uint64-uint128-uint256-int8-int16-int32-int64-int128-int256"},"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"),(0,a.kt)("p",null,"Fixed-length integers, with or without a sign."),(0,a.kt)("p",null,"When creating tables, numeric parameters for integer numbers can be set (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"TINYINT(8)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SMALLINT(16)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INT(32)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT(64)"),"), but ClickHouse ignores them."),(0,a.kt)("h2",{id:"int-ranges"},"Int Ranges"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int8")," \u2014 ","[","-128 : 127","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int16")," \u2014 ","[","-32768 : 32767","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int32")," \u2014 ","[","-2147483648 : 2147483647","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int64")," \u2014 ","[","-9223372036854775808 : 9223372036854775807","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int128")," \u2014 ","[","-170141183460469231731687303715884105728 : 170141183460469231731687303715884105727","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int256")," \u2014 ","[","-57896044618658097711785492504343953926634992332820282019728792003956564819968 : 57896044618658097711785492504343953926634992332820282019728792003956564819967","]")),(0,a.kt)("p",null,"Aliases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int8")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"TINYINT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BOOL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BOOLEAN"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"INT1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int16")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"SMALLINT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"INT2"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int32")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"INT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"INT4"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"INTEGER"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Int64")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"BIGINT"),".")),(0,a.kt)("h2",{id:"uint-ranges"},"UInt Ranges"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UInt8")," \u2014 ","[","0 : 255","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UInt16")," \u2014 ","[","0 : 65535","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UInt32")," \u2014 ","[","0 : 4294967295","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UInt64")," \u2014 ","[","0 : 18446744073709551615","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UInt128")," \u2014 ","[","0 : 340282366920938463463374607431768211455","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UInt256")," \u2014 ","[","0 : 115792089237316195423570985008687907853269984665640564039457584007913129639935","]")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/int_uint/"},"Original article")," "))}m.isMDXComponent=!0}}]);