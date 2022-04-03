"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58471],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s="SSL X.509 certificate authentication",u={unversionedId:"en/operations/external-authenticators/ssl-x509",id:"en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication",description:"ssl-external-authentication}",source:"@site/docs/en/operations/external-authenticators/ssl-x509.md",sourceDirName:"en/operations/external-authenticators",slug:"/en/operations/external-authenticators/ssl-x509",permalink:"/docs/en/operations/external-authenticators/ssl-x509",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LDAP",permalink:"/docs/en/operations/external-authenticators/ldap"},next:{title:"Data Backup",permalink:"/docs/en/operations/backup"}},l={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssl-external-authentication"},"SSL X.509 certificate authentication"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"SSL 'strict' option")," enables mandatory certificate validation for the incoming connections. In this case, only connections with trusted certificates can be established. Connections with untrusted certificates will be rejected. Thus, certificate validation allows to uniquely authenticate an incoming connection. ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Name")," field of the certificate is used to identify connected user. This allows to associate multiple certificates with the same user. Additionally, reissuing and revoking of the certificates does not affect the ClickHouse configuration."),(0,o.kt)("p",null,"To enable SSL certificate authentication, a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Name"),"'s for each ClickHouse user must be sspecified in the settings file ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml "),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <users>\n        <user_name>\n            <certificates>\n                <common_name>host.domain.com:example_user</common_name>\n                <common_name>host.domain.com:example_user_dev</common_name>\n                \x3c!-- More names --\x3e\n            </certificates>\n            \x3c!-- Other settings --\x3e\n        </user_name>\n    </users>\n</clickhouse>\n")),(0,o.kt)("p",null,"For the SSL ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chain_of_trust"},(0,o.kt)("inlineCode",{parentName:"a"},"chain of trust"))," to work correctly, it is also important to make sure that the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},(0,o.kt)("inlineCode",{parentName:"a"},"caConfig"))," parameter is configured properly."))}m.isMDXComponent=!0}}]);