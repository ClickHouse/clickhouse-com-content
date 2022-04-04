"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19425],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63954:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],r={sidebar_position:65,sidebar_label:"Build on Mac OS X",description:"How to build ClickHouse on Mac OS X"},s="How to Build ClickHouse on Mac OS X",c={unversionedId:"en/development/build-osx",id:"en/development/build-osx",title:"How to Build ClickHouse on Mac OS X",description:"How to build ClickHouse on Mac OS X",source:"@site/docs/en/development/build-osx.md",sourceDirName:"en/development",slug:"/en/development/build-osx",permalink:"/docs/docs/en/development/build-osx",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"Build on Mac OS X",description:"How to build ClickHouse on Mac OS X"},sidebar:"tutorialSidebar",previous:{title:"Build on Linux",permalink:"/docs/docs/en/development/build"},next:{title:"Build on Linux for Mac OS X",permalink:"/docs/docs/en/development/build-cross-osx"}},u={},d=[{value:"Install Homebrew",id:"install-homebrew",level:2},{value:"Install Xcode and Command Line Tools",id:"install-xcode-and-command-line-tools",level:2},{value:"Install Required Compilers, Tools, and Libraries",id:"install-required-compilers-tools-and-libraries",level:2},{value:"Checkout ClickHouse Sources",id:"checkout-clickhouse-sources",level:2},{value:"Build ClickHouse",id:"build-clickhouse",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Running ClickHouse server",id:"running-clickhouse-server",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-build-clickhouse-on-mac-os-x"},"How to Build ClickHouse on Mac OS X"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"You don't have to build ClickHouse yourself!")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can install pre-built ClickHouse as described in ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/#quick-start"},"Quick Start"),". Follow ",(0,l.kt)("strong",{parentName:"p"},"macOS (Intel)")," or ",(0,l.kt)("strong",{parentName:"p"},"macOS (Apple silicon)")," installation instructions."))),(0,l.kt)("p",null,"Build should work on x86_64 (Intel) and arm64 (Apple silicon) based macOS 10.15 (Catalina) and higher with Homebrew's vanilla Clang.\nIt is always recommended to use vanilla ",(0,l.kt)("inlineCode",{parentName:"p"},"clang")," compiler. "),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is possible to use XCode's ",(0,l.kt)("inlineCode",{parentName:"p"},"apple-clang")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),", but it's strongly discouraged."))),(0,l.kt)("h2",{id:"install-homebrew"},"Install Homebrew"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# ...and follow the printed instructions on any additional steps required to complete the installation.\n')),(0,l.kt)("h2",{id:"install-xcode-and-command-line-tools"},"Install Xcode and Command Line Tools"),(0,l.kt)("p",null,"Install the latest ",(0,l.kt)("a",{parentName:"p",href:"https://apps.apple.com/am/app/xcode/id497799835?mt=12"},"Xcode")," from App Store."),(0,l.kt)("p",null,"Open it at least once to accept the end-user license agreement and automatically install the required components."),(0,l.kt)("p",null,"Then, make sure that the latest Command Line Tools are installed and selected in the system:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /Library/Developer/CommandLineTools\nsudo xcode-select --install\n")),(0,l.kt)("h2",{id:"install-required-compilers-tools-and-libraries"},"Install Required Compilers, Tools, and Libraries"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew install cmake ninja libtool gettext llvm gcc binutils\n")),(0,l.kt)("h2",{id:"checkout-clickhouse-sources"},"Checkout ClickHouse Sources"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive git@github.com:ClickHouse/ClickHouse.git\n# ...alternatively, you can use https://github.com/ClickHouse/ClickHouse.git as the repo URL.\n")),(0,l.kt)("h2",{id:"build-clickhouse"},"Build ClickHouse"),(0,l.kt)("p",null,"To build using Homebrew's vanilla Clang compiler (the only ",(0,l.kt)("strong",{parentName:"p"},"recommended")," way):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nrm -rf build\nmkdir build\ncd build\ncmake -DCMAKE_C_COMPILER=$(brew --prefix llvm)/bin/clang -DCMAKE_CXX_COMPILER=$(brew --prefix llvm)/bin/clang++ -DCMAKE_AR=$(brew --prefix llvm)/bin/llvm-ar -DCMAKE_RANLIB=$(brew --prefix llvm)/bin/llvm-ranlib -DOBJCOPY_PATH=$(brew --prefix llvm)/bin/llvm-objcopy -DCMAKE_BUILD_TYPE=RelWithDebInfo ..\ncmake --build . --config RelWithDebInfo\n# The resulting binary will be created at: ./programs/clickhouse\n")),(0,l.kt)("p",null,"To build using Xcode's native AppleClang compiler in Xcode IDE (this option is only for development builds and workflows, and is ",(0,l.kt)("strong",{parentName:"p"},"not recommended")," unless you know what you are doing):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nrm -rf build\nmkdir build\ncd build\nXCODE_IDE=1 ALLOW_APPLECLANG=1 cmake -G Xcode -DCMAKE_BUILD_TYPE=Debug -DENABLE_JEMALLOC=OFF ..\ncmake --open .\n# ...then, in Xcode IDE select ALL_BUILD scheme and start the building process.\n# The resulting binary will be created at: ./programs/Debug/clickhouse\n")),(0,l.kt)("p",null,"To build using Homebrew's vanilla GCC compiler (this option is only for development experiments, and is ",(0,l.kt)("strong",{parentName:"p"},"absolutely not recommended")," unless you really know what you are doing):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nrm -rf build\nmkdir build\ncd build\ncmake -DCMAKE_C_COMPILER=$(brew --prefix gcc)/bin/gcc-11 -DCMAKE_CXX_COMPILER=$(brew --prefix gcc)/bin/g++-11 -DCMAKE_AR=$(brew --prefix gcc)/bin/gcc-ar-11 -DCMAKE_RANLIB=$(brew --prefix gcc)/bin/gcc-ranlib-11 -DOBJCOPY_PATH=$(brew --prefix binutils)/bin/objcopy -DCMAKE_BUILD_TYPE=RelWithDebInfo ..\ncmake --build . --config RelWithDebInfo\n# The resulting binary will be created at: ./programs/clickhouse\n")),(0,l.kt)("h2",{id:"caveats"},"Caveats"),(0,l.kt)("p",null,"If you intend to run ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", make sure to increase the system\u2019s maxfiles variable."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You\u2019ll need to use sudo."))),(0,l.kt)("p",null,"To do so, create the ",(0,l.kt)("inlineCode",{parentName:"p"},"/Library/LaunchDaemons/limit.maxfiles.plist")," file with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"\n        "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n  <dict>\n    <key>Label</key>\n    <string>limit.maxfiles</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>launchctl</string>\n      <string>limit</string>\n      <string>maxfiles</string>\n      <string>524288</string>\n      <string>524288</string>\n    </array>\n    <key>RunAtLoad</key>\n    <true/>\n    <key>ServiceIPC</key>\n    <false/>\n  </dict>\n</plist>\n')),(0,l.kt)("p",null,"Give the file correct permissions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,l.kt)("p",null,"Validate that the file is correct:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"plutil /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,l.kt)("p",null,"Load the file (or reboot):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo launchctl load -w /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,l.kt)("p",null,"To check if it\u2019s working, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ulimit -n")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"launchctl limit maxfiles")," commands."),(0,l.kt)("h2",{id:"running-clickhouse-server"},"Running ClickHouse server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\n./build/programs/clickhouse-server --config-file ./programs/server/config.xml\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/build_osx/"},"Original article")," "))}m.isMDXComponent=!0}}]);