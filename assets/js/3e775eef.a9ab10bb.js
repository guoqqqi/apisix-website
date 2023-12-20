"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[73621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3356:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"grpc-web",keywords:["Apache APISIX","API Gateway","Plugin","gRPC Web","grpc-web"],description:"This document contains information about the Apache APISIX grpc-web Plugin."},o=void 0,p={unversionedId:"plugins/grpc-web",id:"version-3.7/plugins/grpc-web",isDocsHomePage:!1,title:"grpc-web",description:"This document contains information about the Apache APISIX grpc-web Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.7/plugins/grpc-web.md",sourceDirName:"plugins",slug:"/plugins/grpc-web",permalink:"/docs/apisix/plugins/grpc-web",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/plugins/grpc-web.md",tags:[],version:"3.7",frontMatter:{title:"grpc-web",keywords:["Apache APISIX","API Gateway","Plugin","gRPC Web","grpc-web"],description:"This document contains information about the Apache APISIX grpc-web Plugin."},sidebar:"version-3.7/docs",previous:{title:"grpc-transcode",permalink:"/docs/apisix/plugins/grpc-transcode"},next:{title:"fault-injection",permalink:"/docs/apisix/plugins/fault-injection"}},c=[{value:"Description",id:"description",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],l={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-web")," Plugin is a proxy Plugin that can process ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-web"},"gRPC Web")," requests from JavaScript clients to a gRPC service."),(0,a.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,a.kt)("p",null,"You can enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-web")," Plugin on a specific Route as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/grpc/web/*",\n    "plugins":{\n        "grpc-web":{}\n    },\n    "upstream":{\n        "scheme":"grpc",\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"While using the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-web")," Plugin, always use a prefix matching pattern (",(0,a.kt)("inlineCode",{parentName:"p"},"/*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/grpc/example/*"),") for matching Routes. This is because the gRPC Web client passes the package name, the service interface name, the method name and other information in the proto in the URI. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/a6.RouteService/Insert"),"."),(0,a.kt)("p",{parentName:"div"},"So, when absolute matching is used, the Plugin would not be hit and the information from the proto would not be extracted."))),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/grpc-web"},"gRPC-Web Client Runtime Library")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/t/plugin/grpc-web"},"Apache APISIX gRPC Web Test Framework")," to learn how to setup your web client."),(0,a.kt)("p",null,"Once you have your gRPC Web client running, you can make a request to APISIX from the browser or through Node.js."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The supported request methods are ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-web/blob/master/doc/browser-features.md#cors-support"},"CORS support"),"."),(0,a.kt)("p",{parentName:"div"},"The supported ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," includes ",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web-text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web+proto"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"application/grpc-web-text+proto"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md#protocol-differences-vs-grpc-over-http2"},"Protocol differences vs gRPC over HTTP2"),"."))),(0,a.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,a.kt)("p",null,"To remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-web")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/grpc/web/*",\n    "plugins":{},\n    "upstream":{\n        "scheme":"grpc",\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);