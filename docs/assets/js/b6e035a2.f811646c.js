"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7885],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72663:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={sidebar_label:"Superset",sidebar_position:198,keywords:["clickhouse","superset","connect","integrate","ui"],description:"Apache Superset is an open-source data exploration and visualization platform."},p="Connect Superset to ClickHouse",l={unversionedId:"connect-a-ui/superset-and-clickhouse",id:"connect-a-ui/superset-and-clickhouse",title:"Connect Superset to ClickHouse",description:"Apache Superset is an open-source data exploration and visualization platform.",source:"@site/docs/connect-a-ui/superset-and-clickhouse.md",sourceDirName:"connect-a-ui",slug:"/connect-a-ui/superset-and-clickhouse",permalink:"/docs/docs/connect-a-ui/superset-and-clickhouse",tags:[],version:"current",sidebarPosition:198,frontMatter:{sidebar_label:"Superset",sidebar_position:198,keywords:["clickhouse","superset","connect","integrate","ui"],description:"Apache Superset is an open-source data exploration and visualization platform."},sidebar:"tutorialSidebar",previous:{title:"Metabase",permalink:"/docs/docs/connect-a-ui/metabase-and-clickhouse"},next:{title:"Tableau",permalink:"/docs/docs/connect-a-ui/tableau-and-clickhouse"}},c={},u=[{value:"1. Install the Drivers",id:"1-install-the-drivers",level:2},{value:"2. Connect Superset to ClickHouse",id:"2-connect-superset-to-clickhouse",level:2},{value:"3. Add a Dataset",id:"3-add-a-dataset",level:2},{value:"4.  Creating charts and a dashboard in Superset",id:"4--creating-charts-and-a-dashboard-in-superset",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"connect-superset-to-clickhouse"},"Connect Superset to ClickHouse"),(0,s.kt)("a",{href:"https://superset.apache.org/",target:"_blank"},"Apache Superset")," is an open-source data exploration and visualization platform written in Python. Superset connects to ClickHouse using a Python driver with a SQLAlchemy dialect. Let's see how it works...",(0,s.kt)("h2",{id:"1-install-the-drivers"},"1. Install the Drivers"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Superset uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse-sqlalchemy")," driver, which requires the ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse-driver")," to connect to ClickHouse. The details of ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse-driver")," are at ",(0,s.kt)("a",{href:"https://pypi.org/project/clickhouse-driver/",target:"_blank"},(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/clickhouse-driver/"},"https://pypi.org/project/clickhouse-driver/"))," and can be installed with the following command:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pip install clickhouse-driver \n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Now install the ",(0,s.kt)("a",{href:"https://pypi.org/project/clickhouse-sqlalchemy/",target:"_blank"},"ClickHouse SQLAlchemy driver"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pip install clickhouse-sqlalchemy\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Start (or restart) Superset."))),(0,s.kt)("h2",{id:"2-connect-superset-to-clickhouse"},"2. Connect Superset to ClickHouse"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Within Superset, select ",(0,s.kt)("strong",{parentName:"p"},"Data")," from the top menu and then ",(0,s.kt)("strong",{parentName:"p"},"Databases")," from the drop-down menu. Add a new database by clicking the ",(0,s.kt)("strong",{parentName:"p"},"+ Database")," button:"),(0,s.kt)("img",{src:a(5517).Z,class:"image",alt:"Add a new database"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the first step, select ",(0,s.kt)("strong",{parentName:"p"},"ClickHouse")," as the type of database:"),(0,s.kt)("img",{src:a(10071).Z,class:"image",alt:"Select ClickHouse"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the second step, enter a display name for your database and the connection URI. The ",(0,s.kt)("strong",{parentName:"p"},"DISPLAY NAME")," can be any name you prefer. The ",(0,s.kt)("strong",{parentName:"p"},"SQLALCHEMY URI")," is the important setting - it has the following format:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"clickhouse+native://username:password@hostname/database_name\n")),(0,s.kt)("p",{parentName:"li"},"In the example below, ClickHouse is running on ",(0,s.kt)("strong",{parentName:"p"},"localhost")," with the ",(0,s.kt)("strong",{parentName:"p"},"default")," user and no password. The name of the database is ",(0,s.kt)("strong",{parentName:"p"},"covid19db"),". Use the ",(0,s.kt)("strong",{parentName:"p"},"TEST CONNECTION")," button to verify that Superset is connecting to your ClickHouse database properly:"),(0,s.kt)("img",{src:a(45883).Z,class:"image",alt:"Test the connection"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("strong",{parentName:"p"},"CONNECT")," button to complete the setup wizard, and you should see your database in the list of databases."))),(0,s.kt)("h2",{id:"3-add-a-dataset"},"3. Add a Dataset"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To define new charts (visualizations) in Superset, you need to define a ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"dataset")),". From the top menu in Superset, select ",(0,s.kt)("strong",{parentName:"p"},"Data"),", then ",(0,s.kt)("strong",{parentName:"p"},"Datasets")," from the drop-down menu. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the button for adding a dataset. Select your new database as the datasource and you should see the tables defined in your database. For example, the ",(0,s.kt)("strong",{parentName:"p"},"covid19db")," database has a table named ",(0,s.kt)("strong",{parentName:"p"},"daily_totals"),":"),(0,s.kt)("img",{src:a(21844).Z,class:"image",alt:"New dataset"}))),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Click the ",(0,s.kt)("strong",{parentName:"li"},"ADD")," button at the bottom of the dialog window and your table appears in the list of datasets. You are ready to build a dashboard and analyze your ClickHouse data!")),(0,s.kt)("h2",{id:"4--creating-charts-and-a-dashboard-in-superset"},"4.  Creating charts and a dashboard in Superset"),(0,s.kt)("p",null,"If you are familiar with Superset, then you will feel right at home with this next section. If you are new to Superset, well...it's like a lot of the other cool visualization tools out there in the world - it doesn't take long to get started, but the details and nuances get learned over time as you use the tool. "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You start with a dashboard. From the top menu in Superset, select ",(0,s.kt)("strong",{parentName:"p"},"Dashboards"),". Click the button in the upper-right to add a new dashboard. The following dashboard is named ",(0,s.kt)("strong",{parentName:"p"},"Covid-19 Dashboard"),":"),(0,s.kt)("img",{src:a(8030).Z,class:"image",alt:"New dashboard"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To create a new chart, select ",(0,s.kt)("strong",{parentName:"p"},"Charts")," from the top menu and click the button to add a new chart. You will be shown a lot of options. The following example shows a ",(0,s.kt)("strong",{parentName:"p"},"Big Number")," chart using the ",(0,s.kt)("strong",{parentName:"p"},"daily_totals")," dataset from the ",(0,s.kt)("strong",{parentName:"p"},"CHOOSE A DATASET")," drop-down:"),(0,s.kt)("img",{src:a(15916).Z,class:"image",alt:"New chart"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You need to add a metric to a ",(0,s.kt)("strong",{parentName:"p"},"Big Number"),". The column named ",(0,s.kt)("strong",{parentName:"p"},"DATA")," and the section named ",(0,s.kt)("strong",{parentName:"p"},"Query")," with a ",(0,s.kt)("strong",{parentName:"p"},"METRIC")," field show a red warning because they are not defined yet. To add a metric, click ",(0,s.kt)("strong",{parentName:"p"},"Add metric")," and a small dialog window appears:"),(0,s.kt)("img",{src:a(40626).Z,class:"image",style:{width:"70%"},alt:"Add a metric"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The following example uses the ",(0,s.kt)("strong",{parentName:"p"},"SUM")," metric, found on the the ",(0,s.kt)("strong",{parentName:"p"},"SIMPLE")," tab. It sums the values of the ",(0,s.kt)("strong",{parentName:"p"},"new_cases")," column:"),(0,s.kt)("img",{src:a(17165).Z,class:"image",style:{width:"70%"},alt:"The SUM metric"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To view the actual number, click the ",(0,s.kt)("strong",{parentName:"p"},"RUN QUERY")," button:"),(0,s.kt)("img",{src:a(4302).Z,class:"image",style:{width:"70%"},alt:"Run the query"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("strong",{parentName:"p"},"SAVE")," button to save the chart, then select ",(0,s.kt)("strong",{parentName:"p"},"Covid-19 Dashboard")," under the ",(0,s.kt)("strong",{parentName:"p"},"ADD TO DASHBOARD")," drop-down, then ",(0,s.kt)("strong",{parentName:"p"},"SAVE & GO TO DASHBOARD")," saves the chart and adds it to the dashboard:"),(0,s.kt)("img",{src:a(4243).Z,class:"image",style:{width:"70%"},alt:"Add Chart to Dashboard"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"That's it. Building dashboards in Superset based on data in ClickHouse opens up a whole world of blazing fast data analytics!"),(0,s.kt)("img",{src:a(47477).Z,class:"image",alt:"New Dashboard"}))))}m.isMDXComponent=!0},5517:function(e,t,a){t.Z=a.p+"assets/images/superset_01-f940023be2d1e8a0e04ee6e06511bb5c.png"},10071:function(e,t,a){t.Z=a.p+"assets/images/superset_02-4a8a3e653a13a64cd7908e1d4c300bc9.png"},45883:function(e,t,a){t.Z=a.p+"assets/images/superset_03-2653c70acfa140fdf0cd163dbe48bd5a.png"},21844:function(e,t,a){t.Z=a.p+"assets/images/superset_04-3ce206181f85330abc93ad9c753dc69f.png"},8030:function(e,t,a){t.Z=a.p+"assets/images/superset_05-818ad2586cc0cbff6d5b290b5ead282f.png"},15916:function(e,t,a){t.Z=a.p+"assets/images/superset_06-6af12ec8fed6f3bf2d434273d4f267b0.png"},40626:function(e,t,a){t.Z=a.p+"assets/images/superset_07-02e8a571d9119d1842601a2f08a380ab.png"},17165:function(e,t,a){t.Z=a.p+"assets/images/superset_08-d1281222c2a894fae40c8fdfde28b32b.png"},4302:function(e,t,a){t.Z=a.p+"assets/images/superset_09-5ddcb82816a6a58b96816c75c36d3ad1.png"},4243:function(e,t,a){t.Z=a.p+"assets/images/superset_10-54234d2012766195b284579584520fad.png"},47477:function(e,t,a){t.Z=a.p+"assets/images/superset_11-e45b3571f8b7212dd86b28cfceba5965.png"}}]);