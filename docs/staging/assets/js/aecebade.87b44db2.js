"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51947],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46692:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={sidebar_position:45,sidebar_label:"Secured Communication with Zookeeper"},l="Optional secured communication between ClickHouse and Zookeeper",s={unversionedId:"en/operations/ssl-zookeeper",id:"en/operations/ssl-zookeeper",title:"Optional secured communication between ClickHouse and Zookeeper",description:"secured-communication-with-zookeeper}",source:"@site/docs/en/operations/ssl-zookeeper.md",sourceDirName:"en/operations",slug:"/en/operations/ssl-zookeeper",permalink:"/docs/en/operations/ssl-zookeeper",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"Secured Communication with Zookeeper"},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/docs/en/operations/monitoring"},next:{title:"Troubleshooting",permalink:"/docs/en/operations/troubleshooting"}},p={},u=[],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secured-communication-with-zookeeper"},"Optional secured communication between ClickHouse and Zookeeper"),(0,i.kt)("p",null,"You should specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.keyStore.location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.keyStore.password")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.trustStore.location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.trustStore.password")," for communication with ClickHouse client over SSL. These options are available from Zookeeper version 3.5.2."),(0,i.kt)("p",null,"You can add ",(0,i.kt)("inlineCode",{parentName:"p"},"zookeeper.crt")," to trusted certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp zookeeper.crt /usr/local/share/ca-certificates/zookeeper.crt\nsudo update-ca-certificates\n")),(0,i.kt)("p",null,"Client section in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<client>\n    <certificateFile>/etc/clickhouse-server/client.crt</certificateFile>\n    <privateKeyFile>/etc/clickhouse-server/client.key</privateKeyFile>\n    <loadDefaultCAFile>true</loadDefaultCAFile>\n    <cacheSessions>true</cacheSessions>\n    <disableProtocols>sslv2,sslv3</disableProtocols>\n    <preferServerCiphers>true</preferServerCiphers>\n    <invalidCertificateHandler>\n        <name>RejectCertificateHandler</name>\n    </invalidCertificateHandler>\n</client>\n")),(0,i.kt)("p",null,"Add Zookeeper to ClickHouse config with some cluster and macros:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <zookeeper>\n        <node>\n            <host>localhost</host>\n            <port>2281</port>\n            <secure>1</secure>\n        </node>\n    </zookeeper>\n</clickhouse>\n")),(0,i.kt)("p",null,"Start ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),". In logs you should see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"<Trace> ZooKeeper: initialized, hosts: secure://localhost:2281\n")),(0,i.kt)("p",null,"Prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"secure://")," indicates that connection is secured by SSL."),(0,i.kt)("p",null,"To ensure traffic is encrypted run ",(0,i.kt)("inlineCode",{parentName:"p"},"tcpdump")," on secured port:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tcpdump -i any dst port 2281 -nnXS\n")),(0,i.kt)("p",null,"And query in ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper WHERE path = '/';\n")),(0,i.kt)("p",null,"On unencrypted connection you will see in ",(0,i.kt)("inlineCode",{parentName:"p"},"tcpdump")," output something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"..../zookeeper/quota.\n")),(0,i.kt)("p",null,"On encrypted connection you should not see this."))}m.isMDXComponent=!0}}]);