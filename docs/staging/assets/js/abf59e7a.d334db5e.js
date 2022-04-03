"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86634],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},o),{},{components:n})):a.createElement(k,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24392:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],c={sidebar_position:44,sidebar_label:"Dictionary Key and Fields"},s="Dictionary Key and Fields",d={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",title:"Dictionary Key and Fields",description:"The structure clause describes the dictionary key and fields available for queries.",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"Dictionary Key and Fields"},sidebar:"tutorialSidebar",previous:{title:"Sources of External Dictionaries",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},next:{title:"Hierarchical dictionaries",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical"}},o={},u=[{value:"Key",id:"ext_dict_structure-key",level:2},{value:"Numeric Key",id:"numeric-key",level:3},{value:"Composite Key",id:"composite-key",level:3},{value:"Attributes",id:"ext_dict_structure-attributes",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dictionary-key-and-fields"},"Dictionary Key and Fields"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"structure")," clause describes the dictionary key and fields available for queries."),(0,i.kt)("p",null,"XML description:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <structure>\n        <id>\n            <name>Id</name>\n        </id>\n\n        <attribute>\n            \x3c!-- Attribute parameters --\x3e\n        </attribute>\n\n        ...\n\n    </structure>\n</dictionary>\n")),(0,i.kt)("p",null,"Attributes are described in the elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<id>")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"Key column"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<attribute>")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"Data column"),". There can be a multiple number of attributes.")),(0,i.kt)("p",null,"DDL query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name (\n    Id UInt64,\n    -- attributes\n)\nPRIMARY KEY Id\n...\n")),(0,i.kt)("p",null,"Attributes are described in the query body:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"Key column")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttrName AttrType")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"Data column"),". There can be a multiple number of attributes.")),(0,i.kt)("h2",{id:"ext_dict_structure-key"},"Key"),(0,i.kt)("p",null,"ClickHouse supports the following types of keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Numeric key. ",(0,i.kt)("inlineCode",{parentName:"li"},"UInt64"),". Defined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"<id>")," tag or using ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," keyword."),(0,i.kt)("li",{parentName:"ul"},"Composite key. Set of values of different types. Defined in the tag ",(0,i.kt)("inlineCode",{parentName:"li"},"<key>")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," keyword.")),(0,i.kt)("p",null,"An xml structure can contain either ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>"),". DDL-query must contain single ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),"."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must not describe key as an attribute."))),(0,i.kt)("h3",{id:"numeric-key"},"Numeric Key"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt64"),"."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<id>\n    <name>Id</name>\n</id>\n")),(0,i.kt)("p",null,"Configuration fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The name of the column with keys.")),(0,i.kt)("p",null,"For DDL-query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (\n    Id UInt64,\n    ...\n)\nPRIMARY KEY Id\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," \u2013 The name of the column with keys.")),(0,i.kt)("h3",{id:"composite-key"},"Composite Key"),(0,i.kt)("p",null,"The key can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple")," from any types of fields. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"layout")," in this case must be ",(0,i.kt)("inlineCode",{parentName:"p"},"complex_key_hashed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"complex_key_cache"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A composite key can consist of a single element. This makes it possible to use a string as the key, for instance."))),(0,i.kt)("p",null,"The key structure is set in the element ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>"),". Key fields are specified in the same format as the dictionary ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"attributes"),". Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    <key>\n        <attribute>\n            <name>field1</name>\n            <type>String</type>\n        </attribute>\n        <attribute>\n            <name>field2</name>\n            <type>UInt32</type>\n        </attribute>\n        ...\n    </key>\n...\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (\n    field1 String,\n    field2 String\n    ...\n)\nPRIMARY KEY field1, field2\n...\n")),(0,i.kt)("p",null,"For a query to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dictGet*")," function, a tuple is passed as the key. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"dictGetString('dict_name', 'attr_name', tuple('string for field1', num_for_field2))"),"."),(0,i.kt)("h2",{id:"ext_dict_structure-attributes"},"Attributes"),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    ...\n    <attribute>\n        <name>Name</name>\n        <type>ClickHouseDataType</type>\n        <null_value></null_value>\n        <expression>rand64()</expression>\n        <hierarchical>true</hierarchical>\n        <injective>true</injective>\n        <is_object_id>true</is_object_id>\n    </attribute>\n</structure>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somename (\n    Name ClickHouseDataType DEFAULT '' EXPRESSION rand64() HIERARCHICAL INJECTIVE IS_OBJECT_ID\n)\n")),(0,i.kt)("p",null,"Configuration fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"Column name."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"ClickHouse data type: ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt16"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"Int8"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"Int16"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/float"},"Float32"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/float"},"Float64"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/uuid"},"UUID"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal32"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal64"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal128"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal256"),",",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/date"},"Date"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/date32"},"Date32"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/datetime64"},"DateTime64"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/array"},"Array"),".",(0,i.kt)("br",null),"ClickHouse tries to cast value from dictionary to the specified data type. For example, for MySQL, the field might be ",(0,i.kt)("inlineCode",{parentName:"td"},"TEXT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"BLOB")," in the MySQL source table, but it can be uploaded as ",(0,i.kt)("inlineCode",{parentName:"td"},"String")," in ClickHouse.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable")," is currently supported for ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#flat"},"Flat"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#dicts-external_dicts_dict_layout-hashed"},"Hashed"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#complex-key-hashed"},"ComplexKeyHashed"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#direct"},"Direct"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#complex-key-direct"},"ComplexKeyDirect"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#range-hashed"},"RangeHashed"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon"},"Polygon"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#cache"},"Cache"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#complex-key-cache"},"ComplexKeyCache"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#ssd-cache"},"SSDCache"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#complex-key-ssd-cache"},"SSDComplexKeyCache")," dictionaries. In ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout#ip-trie"},"IPTrie")," dictionaries ",(0,i.kt)("inlineCode",{parentName:"td"},"Nullable")," types are not supported."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null_value")),(0,i.kt)("td",{parentName:"tr",align:null},"Default value for a non-existing element.",(0,i.kt)("br",null),"In the example, it is an empty string. ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL")," value can be used only for the ",(0,i.kt)("inlineCode",{parentName:"td"},"Nullable")," types (see the previous line with types description)."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"expression")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," that ClickHouse executes on the value.",(0,i.kt)("br",null),"The expression can be a column name in the remote SQL database. Thus, you can use it to create an alias for the remote column.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Default value: no expression."),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{name:"hierarchical-dict-attr"})," ",(0,i.kt)("inlineCode",{parentName:"td"},"hierarchical")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the attribute contains the value of a parent key for the current key. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical"},"Hierarchical Dictionaries"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"Default value: ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"injective")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag that shows whether the ",(0,i.kt)("inlineCode",{parentName:"td"},"id -> attribute")," image is ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Injective_function"},"injective"),".",(0,i.kt)("br",null),"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", ClickHouse can automatically place after the ",(0,i.kt)("inlineCode",{parentName:"td"},"GROUP BY")," clause the requests to dictionaries with injection. Usually it significantly reduces the amount of such requests.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Default value: ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"is_object_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag that shows whether the query is executed for a MongoDB document by ",(0,i.kt)("inlineCode",{parentName:"td"},"ObjectID"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"Default value: ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/ext-dict-functions"},"Functions for working with external dictionaries"),".")))}m.isMDXComponent=!0}}]);