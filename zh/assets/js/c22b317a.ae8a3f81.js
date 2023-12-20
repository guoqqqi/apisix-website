"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[72944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45926:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={title:"gRPC \u4ee3\u7406"},o=void 0,i={unversionedId:"grpc-proxy",id:"version-3.4/grpc-proxy",isDocsHomePage:!1,title:"gRPC \u4ee3\u7406",description:"\u901a\u8fc7 APISIX \u4ee3\u7406 gRPC \u8fde\u63a5\uff0c\u5e76\u4f7f\u7528 APISIX \u7684\u5927\u90e8\u5206\u7279\u6027\u7ba1\u7406\u4f60\u7684 gRPC \u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.4/grpc-proxy.md",sourceDirName:".",slug:"/grpc-proxy",permalink:"/zh/docs/apisix/3.4/grpc-proxy",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/grpc-proxy.md",tags:[],version:"3.4",frontMatter:{title:"gRPC \u4ee3\u7406"},sidebar:"version-3.4/docs",previous:{title:"TCP/UDP \u52a8\u6001\u4ee3\u7406",permalink:"/zh/docs/apisix/3.4/stream-proxy"},next:{title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e",permalink:"/zh/docs/apisix/3.4/customize-nginx-configuration"}},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u521b\u5efa\u4ee3\u7406 gRPC \u7684 Route",id:"\u521b\u5efa\u4ee3\u7406-grpc-\u7684-route",children:[]},{value:"\u6d4b\u8bd5 TLS \u52a0\u5bc6\u7684 HTTP/2",id:"\u6d4b\u8bd5-tls-\u52a0\u5bc6\u7684-http2",children:[]},{value:"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684 HTTP/2",id:"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684-http2",children:[]},{value:"gRPCS",id:"grpcs",children:[]}]}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u901a\u8fc7 APISIX \u4ee3\u7406 gRPC \u8fde\u63a5\uff0c\u5e76\u4f7f\u7528 APISIX \u7684\u5927\u90e8\u5206\u7279\u6027\u7ba1\u7406\u4f60\u7684 gRPC \u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scheme"),": Route \u5bf9\u5e94\u7684 Upstream \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"scheme")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"grpc")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"grpcs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uri"),": \u683c\u5f0f\u4e3a /service/method \u5982\uff1a/helloworld.Greeter/SayHello")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u521b\u5efa\u4ee3\u7406-grpc-\u7684-route"},"\u521b\u5efa\u4ee3\u7406 gRPC \u7684 Route"),(0,l.kt)("p",null,"\u5728\u6307\u5b9a Route \u4e2d\uff0c\u4ee3\u7406 gRPC \u670d\u52a1\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u8fd9\u4e2a Route \u5bf9\u5e94\u7684 Upstream \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"scheme")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"grpc")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"grpcs"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1aAPISIX \u4f7f\u7528 TLS \u52a0\u5bc6\u7684 HTTP/2 \u66b4\u9732 gRPC \u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u5148 ",(0,l.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.4/certificate"},"\u914d\u7f6e SSL \u8bc1\u4e66"),"\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1aAPISIX \u4e5f\u652f\u6301\u901a\u8fc7\u7eaf\u6587\u672c\u7684 HTTP/2 \u66b4\u9732 gRPC \u670d\u52a1\uff0c\u8fd9\u4e0d\u9700\u8981\u4f9d\u8d56 SSL\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u7f51\u73af\u5883\u4ee3\u7406 gRPC \u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u4f8b\u5b50\u6240\u4ee3\u7406\u7684 gRPC \u670d\u52a1\u53ef\u4f9b\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/api7/grpc_server_example"},"grpc_server_example"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"\u6d4b\u8bd5-tls-\u52a0\u5bc6\u7684-http2"},"\u6d4b\u8bd5 TLS \u52a0\u5bc6\u7684 HTTP/2"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 Route\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -insecure -import-path /pathtoprotos  -proto helloworld.proto  \\\n    -d \'{"name":"apisix"}\' 127.0.0.1:9443 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"grpcurl \u662f\u4e00\u4e2a CLI \u5de5\u5177\uff0c\u7c7b\u4f3c\u4e8e curl\uff0c\u5145\u5f53 gRPC \u5ba2\u6237\u7aef\u5e76\u8ba9\u60a8\u4e0e gRPC \u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92\u3002\u5b89\u88c5\u65b9\u5f0f\u8bf7\u67e5\u770b\u5b98\u65b9",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl#installation"},"\u6587\u6863"))),(0,l.kt)("p",null,"\u8fd9\u8868\u793a\u5df2\u6210\u529f\u4ee3\u7406\u3002"),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684-http2"},"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684 HTTP/2"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAPISIX \u53ea\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"9443")," \u7aef\u53e3\u652f\u6301 TLS \u52a0\u5bc6\u7684 HTTP/2\u3002\u4f60\u4e5f\u53ef\u4ee5\u652f\u6301\u7eaf\u672c\u6587\u7684 HTTP/2\uff0c\u53ea\u9700\u8981\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_listen")," \u914d\u7f6e\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    node_listen:\n        - port: 9080\n          enable_http2: false\n        - port: 9081\n          enable_http2: true\n")),(0,l.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 Route\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext -import-path /pathtoprotos  -proto helloworld.proto  \\\n    -d \'{"name":"apisix"}\' 127.0.0.1:9081 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,l.kt)("p",null,"\u8fd9\u8868\u793a\u5df2\u6210\u529f\u4ee3\u7406\u3002"),(0,l.kt)("h3",{id:"grpcs"},"gRPCS"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 gRPC \u670d\u52a1\u4f7f\u7528\u4e86\u81ea\u5df1\u7684 TLS \u52a0\u5bc6\uff0c\u5373\u6240\u8c13\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"gPRCS")," (gRPC + TLS)\uff0c\u90a3\u4e48\u9700\u8981\u4fee\u6539 scheme \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"grpcs"),"\u3002\u7ee7\u7eed\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c50052 \u7aef\u53e3\u4e0a\u8dd1\u7684\u662f gPRCS \u7684\u670d\u52a1\uff0c\u8fd9\u65f6\u5019\u5e94\u8be5\u8fd9\u4e48\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpcs",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50052": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);