"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49559],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],o={sidebar_position:63,sidebar_label:"User Settings"},l="User Settings",p={unversionedId:"en/operations/settings/settings-users",id:"en/operations/settings/settings-users",title:"User Settings",description:"user-settings}",source:"@site/docs/en/operations/settings/settings-users.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/settings-users",permalink:"/docs/staging2/docs/en/operations/settings/settings-users",tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63,sidebar_label:"User Settings"},sidebar:"tutorialSidebar",previous:{title:"Constraints on Settings",permalink:"/docs/staging2/docs/en/operations/settings/constraints-on-settings"},next:{title:"MergeTree tables settings",permalink:"/docs/staging2/docs/en/operations/settings/merge-tree-settings"}},d={},u=[{value:"user_name/password",id:"user-namepassword",level:3},{value:"access_management",id:"access_management-user-setting",level:3},{value:"user_name/networks",id:"user-namenetworks",level:3},{value:"user_name/profile",id:"user-nameprofile",level:3},{value:"user_name/quota",id:"user-namequota",level:3},{value:"user_name/databases",id:"user-namedatabases",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"user-settings"},"User Settings"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"users")," section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"user.xml")," configuration file contains user settings."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"ClickHouse also supports ",(0,s.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/operations/access-rights#access-control"},"SQL-driven workflow")," for managing users. We recommend using it."))),(0,s.kt)("p",null,"Structure of the ",(0,s.kt)("inlineCode",{parentName:"p"},"users")," section:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<users>\n    \x3c!-- If user name was not specified, \'default\' user is used. --\x3e\n    <user_name>\n        <password></password>\n        \x3c!-- Or --\x3e\n        <password_sha256_hex></password_sha256_hex>\n\n        <access_management>0|1</access_management>\n\n        <networks incl="networks" replace="replace">\n        </networks>\n\n        <profile>profile_name</profile>\n\n        <quota>default</quota>\n        <default_database>default<default_database>\n        <databases>\n            <database_name>\n                <table_name>\n                    <filter>expression</filter>\n                <table_name>\n            </database_name>\n        </databases>\n    </user_name>\n    \x3c!-- Other users settings --\x3e\n</users>\n')),(0,s.kt)("h3",{id:"user-namepassword"},"user_name/password"),(0,s.kt)("p",null,"Password can be specified in plaintext or in SHA256 (hex format)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"To assign a password in plaintext (",(0,s.kt)("strong",{parentName:"p"},"not recommended"),"), place it in a ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," element."),(0,s.kt)("p",{parentName:"li"},"For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"<password>qwerty</password>"),". The password can be left blank."))),(0,s.kt)("a",{id:"password_sha256_hex"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"To assign a password using its SHA256 hash, place it in a ",(0,s.kt)("inlineCode",{parentName:"p"},"password_sha256_hex")," element."),(0,s.kt)("p",{parentName:"li"},"For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"<password_sha256_hex>65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5</password_sha256_hex>"),"."),(0,s.kt)("p",{parentName:"li"},"Example of how to generate a password from shell:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'  PASSWORD=$(base64 < /dev/urandom | head -c8); echo "$PASSWORD"; echo -n "$PASSWORD" | sha256sum | tr -d \'-\'\n')),(0,s.kt)("p",{parentName:"li"},"The first line of the result is the password. The second line is the corresponding SHA256 hash."))),(0,s.kt)("a",{id:"password_double_sha1_hex"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For compatibility with MySQL clients, password can be specified in double SHA1 hash. Place it in ",(0,s.kt)("inlineCode",{parentName:"p"},"password_double_sha1_hex")," element."),(0,s.kt)("p",{parentName:"li"},"For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"<password_double_sha1_hex>08b4a0f1de6ad37da17359e592c8d74788a83eb0</password_double_sha1_hex>"),"."),(0,s.kt)("p",{parentName:"li"},"Example of how to generate a password from shell:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"  PASSWORD=$(base64 < /dev/urandom | head -c8); echo \"$PASSWORD\"; echo -n \"$PASSWORD\" | sha1sum | tr -d '-' | xxd -r -p | sha1sum | tr -d '-'\n")),(0,s.kt)("p",{parentName:"li"},"The first line of the result is the password. The second line is the corresponding double SHA1 hash."))),(0,s.kt)("h3",{id:"access_management-user-setting"},"access_management"),(0,s.kt)("p",null,"This setting enables or disables using of SQL-driven ",(0,s.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/operations/access-rights#access-control"},"access control and account management")," for the user."),(0,s.kt)("p",null,"Possible values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"0 \u2014 Disabled."),(0,s.kt)("li",{parentName:"ul"},"1 \u2014 Enabled.")),(0,s.kt)("p",null,"Default value: 0."),(0,s.kt)("h3",{id:"user-namenetworks"},"user_name/networks"),(0,s.kt)("p",null,"List of networks from which the user can connect to the ClickHouse server."),(0,s.kt)("p",null,"Each element of the list can have one of the following forms:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"<ip>")," \u2014 IP address or network mask."),(0,s.kt)("p",{parentName:"li"},"Examples: ",(0,s.kt)("inlineCode",{parentName:"p"},"213.180.204.3"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"10.0.0.1/8"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"10.0.0.1/255.255.255.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2a02:6b8::3"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2a02:6b8::3/64"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2a02:6b8::3/ffff:ffff:ffff:ffff::"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"<host>")," \u2014 Hostname."),(0,s.kt)("p",{parentName:"li"},"Example: ",(0,s.kt)("inlineCode",{parentName:"p"},"example01.host.ru"),"."),(0,s.kt)("p",{parentName:"li"},"To check access, a DNS query is performed, and all returned IP addresses are compared to the peer address.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"<host_regexp>")," \u2014 Regular expression for hostnames."),(0,s.kt)("p",{parentName:"li"},"Example, ",(0,s.kt)("inlineCode",{parentName:"p"},"^example\\d\\d-\\d\\d-\\d\\.host\\.ru$")),(0,s.kt)("p",{parentName:"li"},"To check access, a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reverse_DNS_lookup"},"DNS PTR query")," is performed for the peer address and then the specified regexp is applied. Then, another DNS query is performed for the results of the PTR query and all the received addresses are compared to the peer address. We strongly recommend that regexp ends with $."))),(0,s.kt)("p",null,"All results of DNS requests are cached until the server restarts."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"To open access for user from any network, specify:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<ip>::/0</ip>\n")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It\u2019s insecure to open access from any network unless you have a firewall properly configured or the server is not directly connected to Internet."))),(0,s.kt)("p",null,"To open access only from localhost, specify:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<ip>::1</ip>\n<ip>127.0.0.1</ip>\n")),(0,s.kt)("h3",{id:"user-nameprofile"},"user_name/profile"),(0,s.kt)("p",null,"You can assign a settings profile for the user. Settings profiles are configured in a separate section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," file. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/operations/settings/settings-profiles"},"Profiles of Settings"),"."),(0,s.kt)("h3",{id:"user-namequota"},"user_name/quota"),(0,s.kt)("p",null,"Quotas allow you to track or limit resource usage over a period of time. Quotas are configured in the ",(0,s.kt)("inlineCode",{parentName:"p"},"quotas"),"\nsection of the ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," configuration file."),(0,s.kt)("p",null,"You can assign a quotas set for the user. For a detailed description of quotas configuration, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/operations/quotas#quotas"},"Quotas"),"."),(0,s.kt)("h3",{id:"user-namedatabases"},"user_name/databases"),(0,s.kt)("p",null,"In this section, you can limit rows that are returned by ClickHouse for ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," queries made by the current user, thus implementing basic row-level security."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"The following configuration forces that user ",(0,s.kt)("inlineCode",{parentName:"p"},"user1")," can only see the rows of ",(0,s.kt)("inlineCode",{parentName:"p"},"table1")," as the result of ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," queries, where the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," field is 1000."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<user1>\n    <databases>\n        <database_name>\n            <table1>\n                <filter>id = 1000</filter>\n            </table1>\n        </database_name>\n    </databases>\n</user1>\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"filter")," can be any expression resulting in a ",(0,s.kt)("a",{parentName:"p",href:"/docs/staging2/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"-type value. It usually contains comparisons and logical operators. Rows from ",(0,s.kt)("inlineCode",{parentName:"p"},"database_name.table1")," where filter results to 0 are not returned for this user. The filtering is incompatible with ",(0,s.kt)("inlineCode",{parentName:"p"},"PREWHERE")," operations and disables ",(0,s.kt)("inlineCode",{parentName:"p"},"WHERE\u2192PREWHERE")," optimization."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings_users/"},"Original article")," "))}m.isMDXComponent=!0}}]);