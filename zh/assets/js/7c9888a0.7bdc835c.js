"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,u=m["".concat(c,".").concat(g)]||m[g]||d[g]||p;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1890:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const p={title:"grpc-web",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","gRPC Web","grpc-web"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `grpc-web` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,o={unversionedId:"plugins/grpc-web",id:"version-3.7/plugins/grpc-web",isDocsHomePage:!1,title:"grpc-web",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `grpc-web` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.7/plugins/grpc-web.md",sourceDirName:"plugins",slug:"/plugins/grpc-web",permalink:"/zh/docs/apisix/plugins/grpc-web",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.7/docs/zh/latest/plugins/grpc-web.md",tags:[],version:"3.7",frontMatter:{title:"grpc-web",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","gRPC Web","grpc-web"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `grpc-web` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.7/docs",previous:{title:"grpc-transcode",permalink:"/zh/docs/apisix/plugins/grpc-transcode"},next:{title:"fault-injection",permalink:"/zh/docs/apisix/plugins/fault-injection"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],l={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"grpc-web")," \u63d2\u4ef6\u662f\u4e00\u4e2a\u4ee3\u7406\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5904\u7406\u4ece JavaScript \u5ba2\u6237\u7aef\u5230 gRPC Service \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-web"},"gRPC Web")," \u8bf7\u6c42\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC-web")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/grpc/web/*",\n    "plugins":{\n        "grpc-web":{}\n    },\n    "upstream":{\n        "scheme":"grpc",\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC Web")," \u4ee3\u7406\u63d2\u4ef6\u65f6\uff0c\u8def\u7531\u5fc5\u987b\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f00\u5339\u914d"),"\u6a21\u5f0f\uff08\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"/*")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"/grpc/example/*"),"\uff09\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC Web")," \u5ba2\u6237\u7aef\u4f1a\u5728 URI \u4e2d\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," \u4e2d\u58f0\u660e\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5305\u540d\u79f0"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u63a5\u53e3\u540d\u79f0"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d\u79f0"),"\u7b49\u4fe1\u606f\uff08\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"/path/a6.RouteService/Insert"),"\uff09\u3002"),(0,a.kt)("p",{parentName:"div"},"\u56e0\u6b64\uff0c\u5728\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7edd\u5bf9\u5339\u914d"),"\u65f6\u5c06\u65e0\u6cd5\u547d\u4e2d\u63d2\u4ef6\u548c\u63d0\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"proto")," \u4fe1\u606f\u3002"))),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/grpc-web"},"gRPC-Web Client Runtime Library")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/t/plugin/grpc-web"},"Apache APISIX gRPC Web Test Framework")," \u4e86\u89e3\u5982\u4f55\u914d\u7f6e\u4f60\u7684 Web \u5ba2\u6237\u7aef\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c gRPC Web \u5ba2\u6237\u7aef\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece\u6d4f\u89c8\u5668\u6216\u901a\u8fc7 Node.js \u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8bf7\u6c42\u65b9\u5f0f\u4ec5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS"),"\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-web/blob/master/doc/browser-features.md#cors-support"},"CORS support")," \u3002"),(0,a.kt)("p",{parentName:"div"},"\u5185\u5bb9\u7c7b\u578b\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web-text"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web+proto"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web-text+proto"),"\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md#protocol-differences-vs-grpc-over-http2"},"Protocol differences vs gRPC over HTTP2")," \u3002"))),(0,a.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-web")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/grpc/web/*",\n    "plugins":{},\n    "upstream":{\n        "scheme":"grpc",\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);