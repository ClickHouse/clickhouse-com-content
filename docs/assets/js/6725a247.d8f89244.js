"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55556],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),s=["components"],r={sidebar_position:62,sidebar_label:"Continuous Integration Checks",description:"When you submit a pull request, some automated checks are ran for your code by the ClickHouse continuous integration (CI) system"},o="Continuous Integration Checks",c={unversionedId:"en/development/continuous-integration",id:"en/development/continuous-integration",title:"Continuous Integration Checks",description:"When you submit a pull request, some automated checks are ran for your code by the ClickHouse continuous integration (CI) system",source:"@site/docs/en/development/continuous-integration.md",sourceDirName:"en/development",slug:"/en/development/continuous-integration",permalink:"/docs/docs/en/development/continuous-integration",tags:[],version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62,sidebar_label:"Continuous Integration Checks",description:"When you submit a pull request, some automated checks are ran for your code by the ClickHouse continuous integration (CI) system"},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/docs/docs/en/development/architecture"},next:{title:"Adding Test Queries",permalink:"/docs/docs/en/development/adding_test_queries"}},u={},p=[{value:"Merge With Master",id:"merge-with-master",level:2},{value:"Docs check",id:"docs-check",level:2},{value:"Report Details",id:"report-details",level:3},{value:"Description Check",id:"description-check",level:2},{value:"Push To Dockerhub",id:"push-to-dockerhub",level:2},{value:"Marker Check",id:"marker-check",level:2},{value:"Style Check",id:"style-check",level:2},{value:"Report Details",id:"report-details-1",level:3},{value:"Fast Test",id:"fast-test",level:2},{value:"Report Details",id:"report-details-2",level:3},{value:"Status Page Files",id:"status-page-files",level:4},{value:"Status Page Columns",id:"status-page-columns",level:4},{value:"Build Check",id:"build-check",level:2},{value:"Report Details",id:"report-details-3",level:3},{value:"Special Build Check",id:"special-build-check",level:2},{value:"Functional Stateless Tests",id:"functional-stateless-tests",level:2},{value:"Functional Stateful Tests",id:"functional-stateful-tests",level:2},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Testflows Check",id:"testflows-check",level:2},{value:"Stress Test",id:"stress-test",level:2},{value:"Split Build Smoke Test",id:"split-build-smoke-test",level:2},{value:"Compatibility Check",id:"compatibility-check",level:2},{value:"AST Fuzzer",id:"ast-fuzzer",level:2},{value:"Performance Tests",id:"performance-tests",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"continuous-integration-checks"},"Continuous Integration Checks"),(0,l.kt)("p",null,"When you submit a pull request, some automated checks are ran for your code by\nthe ClickHouse ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#test-automation"},"continuous integration (CI) system"),".\nThis happens after a repository maintainer (someone from ClickHouse team) has\nscreened your code and added the ",(0,l.kt)("inlineCode",{parentName:"p"},"can be tested")," label to your pull request.\nThe results of the checks are listed on the GitHub pull request page as\ndescribed in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks"},"GitHub checks\ndocumentation"),".\nIf a check is failing, you might be required to fix it. This page gives an\noverview of checks you may encounter, and what you can do to fix them."),(0,l.kt)("p",null,"If it looks like the check failure is not related to your changes, it may be\nsome transient failure or an infrastructure problem. Push an empty commit to\nthe pull request to restart the CI checks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git reset\ngit commit --allow-empty\ngit push\n")),(0,l.kt)("p",null,"If you are not sure what to do, ask a maintainer for help."),(0,l.kt)("h2",{id:"merge-with-master"},"Merge With Master"),(0,l.kt)("p",null,"Verifies that the PR can be merged to master. If not, it will fail with the\nmessage 'Cannot fetch mergecommit'. To fix this check, resolve the conflict as\ndescribed in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github"},"GitHub\ndocumentation"),",\nor merge the ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch to your pull request branch using git."),(0,l.kt)("h2",{id:"docs-check"},"Docs check"),(0,l.kt)("p",null,"Tries to build the ClickHouse documentation website. It can fail if you changed\nsomething in the documentation. Most probable reason is that some cross-link in\nthe documentation is wrong. Go to the check report and look for ",(0,l.kt)("inlineCode",{parentName:"p"},"ERROR")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"WARNING")," messages."),(0,l.kt)("h3",{id:"report-details"},"Report Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/eabcc293eb02214caa6826b7c15f101643f67a6b/docs_check.html"},"Status page example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docs_output.txt")," contains the building log. ",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/eabcc293eb02214caa6826b7c15f101643f67a6b/docs_check/docs_output.txt"},"Successful result example"))),(0,l.kt)("h2",{id:"description-check"},"Description Check"),(0,l.kt)("p",null,"Check that the description of your pull request conforms to the template\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/.github/PULL_REQUEST_TEMPLATE.md"},"PULL_REQUEST_TEMPLATE.md"),".\nYou have to specify a changelog category for your change (e.g., Bug Fix), and\nwrite a user-readable message describing the change for ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/whats-new/changelog/"},"CHANGELOG.md")),(0,l.kt)("h2",{id:"push-to-dockerhub"},"Push To Dockerhub"),(0,l.kt)("p",null,"Builds docker images used for build and tests, then pushes them to DockerHub."),(0,l.kt)("h2",{id:"marker-check"},"Marker Check"),(0,l.kt)("p",null,"This check means that the CI system started to process the pull request. When it has 'pending' status, it means that not all checks have been started yet. After all checks have been started, it changes status to 'success'."),(0,l.kt)("h2",{id:"style-check"},"Style Check"),(0,l.kt)("p",null,"Performs some simple regex-based checks of code style, using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/utils/check-style/check-style"},(0,l.kt)("inlineCode",{parentName:"a"},"utils/check-style/check-style"))," binary (note that it can be run locally).\nIf it fails, fix the style errors following the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/style"},"code style guide"),"."),(0,l.kt)("h3",{id:"report-details-1"},"Report Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/659c78c7abb56141723af6a81bfae39335aa8cb2/style_check.html"},"Status page example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output.txt")," contains the check resulting errors (invalid tabulation etc), blank page means no errors. ",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/659c78c7abb56141723af6a81bfae39335aa8cb2/style_check/output.txt"},"Successful result example"),".")),(0,l.kt)("h2",{id:"fast-test"},"Fast Test"),(0,l.kt)("p",null,"Normally this is the first check that is ran for a PR. It builds ClickHouse and\nruns most of ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#functional-tests"},"stateless functional tests"),", omitting\nsome. If it fails, further checks are not started until it is fixed. Look at\nthe report to see which tests fail, then reproduce the failure locally as\ndescribed ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#functional-test-locally"},"here"),"."),(0,l.kt)("h3",{id:"report-details-2"},"Report Details"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse-test-reports.s3.yandex.net/12550/67d716b5cc3987801996c31a67b31bf141bc3486/fast_test.html"},"Status page example")),(0,l.kt)("h4",{id:"status-page-files"},"Status Page Files"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runlog.out.log")," is the general log that includes all other logs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test_log.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"submodule_log.txt")," contains the messages about cloning and checkouting needed submodules."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stderr.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-server.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clone_log.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install_log.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-server.err.log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build_log.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cmake_log.txt")," contains messages about the C/C++ and Linux flags check.")),(0,l.kt)("h4",{id:"status-page-columns"},"Status Page Columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Test name")," contains the name of the test (without the path e.g. all types of tests will be stripped to the name)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Test status")," -- one of ",(0,l.kt)("em",{parentName:"li"},"Skipped"),", ",(0,l.kt)("em",{parentName:"li"},"Success"),", or ",(0,l.kt)("em",{parentName:"li"},"Fail"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Test time, sec.")," -- empty on this test.")),(0,l.kt)("h2",{id:"build-check"},"Build Check"),(0,l.kt)("p",null,"Builds ClickHouse in various configurations for use in further steps. You have to fix the builds that fail. Build logs often has enough information to fix the error, but you might have to reproduce the failure locally. The ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," options can be found in the build log, grepping for ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake"),". Use these options and follow the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/build"},"general build process"),"."),(0,l.kt)("h3",{id:"report-details-3"},"Report Details"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse-builds.s3.yandex.net/12550/67d716b5cc3987801996c31a67b31bf141bc3486/clickhouse_build_check/report.html"},"Status page example"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Compiler"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"gcc-9")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"clang-10")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"clang-10-xx")," for other architectures e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"clang-10-freebsd"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Build type"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Debug")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"RelWithDebInfo")," (cmake)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sanitizer"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"none")," (without sanitizers), ",(0,l.kt)("inlineCode",{parentName:"li"},"address")," (ASan), ",(0,l.kt)("inlineCode",{parentName:"li"},"memory")," (MSan), ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," (UBSan), or ",(0,l.kt)("inlineCode",{parentName:"li"},"thread")," (TSan)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Splitted")," ",(0,l.kt)("inlineCode",{parentName:"li"},"splitted")," is a ",(0,l.kt)("a",{parentName:"li",href:"/docs/docs/en/development/build#split-build"},"split build")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"success")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"fail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Build log"),": link to the building and files copying log, useful when build failed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Build time"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Artifacts"),": build result files (with ",(0,l.kt)("inlineCode",{parentName:"li"},"XXX")," being the server version e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"20.8.1.4344"),").",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-client_XXX_all.deb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-common-static-dbg_XXX[+asan, +msan, +ubsan, +tsan]_amd64.deb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-common-staticXXX_amd64.deb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-server_XXX_all.deb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse_XXX_amd64.buildinfo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse_XXX_amd64.changes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse"),": Main built binary."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-odbc-bridge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unit_tests_dbms"),": GoogleTest binary with ClickHouse unit tests."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shared_build.tgz"),": build with shared libraries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"performance.tgz"),": Special package for performance tests.")))),(0,l.kt)("h2",{id:"special-build-check"},"Special Build Check"),(0,l.kt)("p",null,"Performs static analysis and code style checks using ",(0,l.kt)("inlineCode",{parentName:"p"},"clang-tidy"),". The report is similar to the ",(0,l.kt)("a",{parentName:"p",href:"#build-check"},"build check"),". Fix the errors found in the build log."),(0,l.kt)("h2",{id:"functional-stateless-tests"},"Functional Stateless Tests"),(0,l.kt)("p",null,"Runs ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#functional-tests"},"stateless functional tests")," for ClickHouse\nbinaries built in various configurations -- release, debug, with sanitizers,\netc. Look at the report to see which tests fail, then reproduce the failure\nlocally as described ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#functional-test-locally"},"here"),". Note that you\nhave to use the correct build configuration to reproduce -- a test might fail\nunder AddressSanitizer but pass in Debug. Download the binary from ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/build#you-dont-have-to-build-clickhouse"},"CI build\nchecks page"),", or build it locally."),(0,l.kt)("h2",{id:"functional-stateful-tests"},"Functional Stateful Tests"),(0,l.kt)("p",null,"Runs ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#functional-tests"},"stateful functional tests"),". Treat them in the same way as the functional stateless tests. The difference is that they require ",(0,l.kt)("inlineCode",{parentName:"p"},"hits")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"visits")," tables from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/example-datasets/metrica"},"clickstream dataset")," to run."),(0,l.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,l.kt)("p",null,"Runs ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/tests#integration-tests"},"integration tests"),"."),(0,l.kt)("h2",{id:"testflows-check"},"Testflows Check"),(0,l.kt)("p",null,"Runs some tests using Testflows test system. See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/tests/testflows#running-tests-locally"},"here")," how to run them locally."),(0,l.kt)("h2",{id:"stress-test"},"Stress Test"),(0,l.kt)("p",null,"Runs stateless functional tests concurrently from several clients to detect\nconcurrency-related errors. If it fails:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* Fix all other test failures first;\n* Look at the report to find the server logs and check them for possible causes\n  of error.\n")),(0,l.kt)("h2",{id:"split-build-smoke-test"},"Split Build Smoke Test"),(0,l.kt)("p",null,"Checks that the server build in ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/en/development/build#split-build"},"split build"),"\nconfiguration can start and run simple queries.  If it fails:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* Fix other test errors first;\n* Build the server in [split build](/docs/docs/en/development/build#split-build) configuration\n  locally and check whether it can start and run `select 1`.\n")),(0,l.kt)("h2",{id:"compatibility-check"},"Compatibility Check"),(0,l.kt)("p",null,"Checks that ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary runs on distributions with old libc versions. If it fails, ask a maintainer for help."),(0,l.kt)("h2",{id:"ast-fuzzer"},"AST Fuzzer"),(0,l.kt)("p",null,"Runs randomly generated queries to catch program errors. If it fails, ask a maintainer for help."),(0,l.kt)("h2",{id:"performance-tests"},"Performance Tests"),(0,l.kt)("p",null,"Measure changes in query performance. This is the longest check that takes just below 6 hours to run. The performance test report is described in detail ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/docker/test/performance-comparison#how-to-read-the-report"},"here"),"."))}h.isMDXComponent=!0}}]);