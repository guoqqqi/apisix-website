"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86968:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"client-control",keywords:["Apache APISIX","API Gateway","Client Control"],description:"This document describes the Apache APISIX client-control Plugin, you can use it to control NGINX behavior to handle a client request dynamically."},l=void 0,o={unversionedId:"plugins/client-control",id:"version-3.4/plugins/client-control",isDocsHomePage:!1,title:"client-control",description:"This document describes the Apache APISIX client-control Plugin, you can use it to control NGINX behavior to handle a client request dynamically.",source:"@site/docs-apisix_versioned_docs/version-3.4/plugins/client-control.md",sourceDirName:"plugins",slug:"/plugins/client-control",permalink:"/docs/apisix/3.4/plugins/client-control",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/plugins/client-control.md",tags:[],version:"3.4",frontMatter:{title:"client-control",keywords:["Apache APISIX","API Gateway","Client Control"],description:"This document describes the Apache APISIX client-control Plugin, you can use it to control NGINX behavior to handle a client request dynamically."},sidebar:"version-3.4/docs",previous:{title:"proxy-control",permalink:"/docs/apisix/3.4/plugins/proxy-control"},next:{title:"zipkin",permalink:"/docs/apisix/3.4/plugins/zipkin"}},c=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"client-control")," Plugin can be used to dynamically control the behavior of NGINX to handle a client request, by setting the max size of the request body."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This Plugin requires APISIX to run on APISIX-Base. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools")," for more info."))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_body_size"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"Dynamically set the ",(0,i.kt)("a",{parentName:"td",href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size"},(0,i.kt)("inlineCode",{parentName:"a"},"client_max_body_size"))," directive.")))),(0,i.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,i.kt)("p",null,"The example below enables the Plugin on a specific Route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "client-control": {\n            "max_body_size" : 1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"Now since you have configured the ",(0,i.kt)("inlineCode",{parentName:"p"},"max_body_size")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," above, you will get the following message when you make a request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -d '123'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 413 Request Entity Too Large\n...\n<html>\n<head><title>413 Request Entity Too Large</title></head>\n<body>\n<center><h1>413 Request Entity Too Large</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"client-control")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload, and you do not have to restart for this to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);