"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24537:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Expose API",keywords:["API Gateway","Apache APISIX","Expose Service"],description:"This article describes how to publish services through the API Gateway Apache APISIX."},i=void 0,s={unversionedId:"tutorials/expose-api",id:"version-3.7/tutorials/expose-api",isDocsHomePage:!1,title:"Expose API",description:"This article describes how to publish services through the API Gateway Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.7/tutorials/expose-api.md",sourceDirName:"tutorials",slug:"/tutorials/expose-api",permalink:"/docs/apisix/tutorials/expose-api",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/tutorials/expose-api.md",tags:[],version:"3.7",frontMatter:{title:"Expose API",keywords:["API Gateway","Apache APISIX","Expose Service"],description:"This article describes how to publish services through the API Gateway Apache APISIX."},sidebar:"version-3.7/docs",previous:{title:"Architecture",permalink:"/docs/apisix/architecture-design/apisix"},next:{title:"Protect API",permalink:"/docs/apisix/tutorials/protect-api"}},p=[{value:"Concept introduction",id:"concept-introduction",children:[{value:"Upstream",id:"upstream",children:[]},{value:"Route",id:"route",children:[]},{value:"Service",id:"service",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Expose your service",id:"expose-your-service",children:[]},{value:"More Tutorials",id:"more-tutorials",children:[]}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article will guide you through APISIX's upstream, routing, and service concepts and introduce how to publish your services through APISIX."),(0,a.kt)("h2",{id:"concept-introduction"},"Concept introduction"),(0,a.kt)("h3",{id:"upstream"},"Upstream"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/upstream"},"Upstream")," is a virtual host abstraction that performs load balancing on a given set of service nodes according to the configured rules."),(0,a.kt)("p",null,"The role of the Upstream is to load balance the service nodes according to the configuration rules, and Upstream information can be directly configured to the Route or Service."),(0,a.kt)("p",null,"When multiple routes or services refer to the same upstream, you can create an upstream object and use the upstream ID in the Route or Service to reference the upstream to reduce maintenance pressure."),(0,a.kt)("h3",{id:"route"},"Route"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/route"},"Routes")," match the client's request based on defined rules, load and execute the corresponding plugins, and forwards the request to the specified Upstream."),(0,a.kt)("h3",{id:"service"},"Service"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/service"},"Service")," is an abstraction of an API (which can also be understood as a set of Route abstractions). It usually corresponds to an upstream service abstraction."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please make sure you have ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/installation-guide"},"installed Apache APISIX")," before doing the following."),(0,a.kt)("h2",{id:"expose-your-service"},"Expose your service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an Upstream.")),(0,a.kt)("p",null,"Create an Upstream service containing ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin.org")," that you can use for testing. This is a return service that will return the parameters we passed in the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl "http://127.0.0.1:9180/apisix/admin/upstreams/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,a.kt)("p",null,"In this command, we specify the Admin API Key of Apache APISIX as ",(0,a.kt)("inlineCode",{parentName:"p"},"edd1c9f034335f136f87ad84b625c8f1"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"roundrobin")," as the load balancing mechanism, and set ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," as the upstream service. To bind this upstream to a route, ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream_id")," needs to be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," here. Here you can specify multiple upstreams under ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," to achieve load balancing."),(0,a.kt)("p",null,"For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/upstream"},"Upstream"),"."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a Route.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream_id": "1"\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," object to your route can achieve the above effect."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Test")),(0,a.kt)("p",null,"After creating the Route, you can test the Service with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -i -X GET "http://127.0.0.1:9080/anything/get?foo1=bar1&foo2=bar2" -H "Host: example.com"\n')),(0,a.kt)("p",null,"APISIX will forward the request to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/get?foo1=bar1&foo2=bar2"),"."),(0,a.kt)("h2",{id:"more-tutorials"},"More Tutorials"),(0,a.kt)("p",null,"You can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/tutorials/protect-api"},"Protect API")," to protect your API."),(0,a.kt)("p",null,"You can also use APISIX's ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugin")," to achieve more functions."))}l.isMDXComponent=!0}}]);