"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10842],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15932:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={sidebar_label:"Playground",sidebar_position:2,keywords:["clickhouse","playground","getting","started","docs"],description:"The ClickHouse Playground allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.",slug:"/en/getting-started/playground"},s="ClickHouse Playground",u={unversionedId:"en/playground",id:"en/playground",title:"ClickHouse Playground",description:"The ClickHouse Playground allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.",source:"@site/docs/en/playground.md",sourceDirName:"en",slug:"/en/getting-started/playground",permalink:"/docs/en/getting-started/playground",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Playground",sidebar_position:2,keywords:["clickhouse","playground","getting","started","docs"],description:"The ClickHouse Playground allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.",slug:"/en/getting-started/playground"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/en/getting-started/install"},next:{title:"Example Datasets",permalink:"/docs/en/example-datasets"}},p={},c=[{value:"Credentials",id:"credentials",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-playground"},"ClickHouse Playground"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play"},"ClickHouse Playground")," allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.\nSeveral example datasets are available in Playground."),(0,l.kt)("p",null,"You can make queries to Playground using any HTTP client, for example ",(0,l.kt)("a",{parentName:"p",href:"https://curl.haxx.se"},"curl")," or ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget"),", or set up a connection using ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/interfaces/jdbc"},"JDBC")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/interfaces/odbc"},"ODBC")," drivers. More information about software products that support ClickHouse is available ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/interfaces/"},"here"),"."),(0,l.kt)("h2",{id:"credentials"},"Credentials"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HTTPS endpoint"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"https://play.clickhouse.com:443/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Native TCP endpoint"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"play.clickhouse.com:9440"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"User"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"explorer")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"play"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(empty)")))),(0,l.kt)("h2",{id:"limitations"},"Limitations"),(0,l.kt)("p",null,"The queries are executed as a read-only user. It implies some limitations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DDL queries are not allowed"),(0,l.kt)("li",{parentName:"ul"},"INSERT queries are not allowed")),(0,l.kt)("p",null,"The service also have quotas on its usage."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"HTTPS endpoint example with ",(0,l.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://play.clickhouse.com/?user=explorer" --data-binary "SELECT \'Play ClickHouse\'"\n')),(0,l.kt)("p",null,"TCP endpoint example with ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/interfaces/cli"},"CLI"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse client --secure --host play.clickhouse.com --user explorer\n")))}m.isMDXComponent=!0}}]);