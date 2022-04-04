"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62076],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),k=r,d=p["".concat(c,".").concat(k)]||p[k]||f[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Kafka Connect",sidebar_position:4,description:"Introduction to Kafka Connect"},c="Using Kafka Connect",l={unversionedId:"integrations/kafka/kafka-connect-intro",id:"integrations/kafka/kafka-connect-intro",title:"Using Kafka Connect",description:"Introduction to Kafka Connect",source:"@site/docs/integrations/kafka/kafka-connect-intro.md",sourceDirName:"integrations/kafka",slug:"/integrations/kafka/kafka-connect-intro",permalink:"/docs/docs/integrations/kafka/kafka-connect-intro",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Kafka Connect",sidebar_position:4,description:"Introduction to Kafka Connect"},sidebar:"tutorialSidebar",previous:{title:"Kafka Table Engine",permalink:"/docs/docs/integrations/kafka/kafka-table-engine"},next:{title:"Kafka Connect Options",permalink:"/docs/docs/integrations/kafka/kafka-connect-options"}},u={},f=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Assumptions",id:"assumptions",level:3}],p={toc:f};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-kafka-connect"},"Using Kafka Connect"),(0,o.kt)("p",null,"For users that prefer to manage the Kafka ClickHouse interaction external to ClickHouse, Kafka Connect provides an alternative. As of the time of writing, there are several approaches to using Kafka Connect, depending on the direction of data transfer, each with its own limitations. The following is not a comprehensive tutorial on Kafka Connect, and the user is referred to Confluent documentation for advanced configurations."),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install the Confluent platform ",(0,o.kt)("a",{parentName:"li",href:"https://www.confluent.io/installation%5D(https://www.confluent.io/installation)"},"[https://www.confluent.io/installation](https://www.confluent.io/installation)"),". This main Confluent package contains the tested version of Kafka Connect v7.0.1. "),(0,o.kt)("li",{parentName:"ol"},"Java is required for the Confluent Platform. Refer to their documentation for the currently ",(0,o.kt)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/installation/versions-interoperability.html"},"supported java versions"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure you have a ClickHouse instance available."),(0,o.kt)("li",{parentName:"ol"},"Kafka instance - Confluent cloud is the easiest for this; otherwise, set up a self-managed instance using the above Confluent package. The setup of Kafka is beyond the scope of these docs."),(0,o.kt)("li",{parentName:"ol"},"Test dataset. A small GitHub JSON-based dataset with an insertion script is provided for convenience ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/tree/main/producer"},"here"),". This will automatically apply a Kafka schema to the data to ensure it is compatible with the JDBC connector. ")),(0,o.kt)("h3",{id:"assumptions"},"Assumptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We assume you are familiar with the Confluent Platform, specifically Kafka Connect. We recommend the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/connect/userguide.html"},"Getting Started guide")," for Kafka Connect and the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.confluent.io/learn-kafka/kafka-connect"},"Kafka Connect 101")," guide."),(0,o.kt)("li",{parentName:"ul"},"We assume your source data is in JSON. Other data formats and the relevant configuration parameters are highlighted.")))}k.isMDXComponent=!0}}]);