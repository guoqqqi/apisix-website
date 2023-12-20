"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44674:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"node-status",keywords:["Apache APISIX","API Gateway","Plugin","Node status"],description:"This document contains information about the Apache APISIX node-status Plugin."},l=void 0,o={unversionedId:"plugins/node-status",id:"version-3.6/plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"This document contains information about the Apache APISIX node-status Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.6/plugins/node-status.md",sourceDirName:"plugins",slug:"/plugins/node-status",permalink:"/docs/apisix/3.6/plugins/node-status",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/plugins/node-status.md",tags:[],version:"3.6",frontMatter:{title:"node-status",keywords:["Apache APISIX","API Gateway","Plugin","Node status"],description:"This document contains information about the Apache APISIX node-status Plugin."},sidebar:"version-3.6/docs",previous:{title:"prometheus",permalink:"/docs/apisix/3.6/plugins/prometheus"},next:{title:"datadog",permalink:"/docs/apisix/3.6/plugins/datadog"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"node-status")," Plugin can be used get the status of requests to APISIX by exposing an API endpoint."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"None."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This Plugin will add the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status")," to expose the status of APISIX."),(0,i.kt)("p",null,"You may need to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.6/plugins/public-api"},"public-api")," Plugin to expose the endpoint."),(0,i.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,i.kt)("p",null,"To configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-status")," Plugin, you have to first enable it in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  - node-status\n  ......\n")),(0,i.kt)("p",null,"You have to the setup the Route for the status API and expose it using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.6/plugins/public-api"},"public-api")," Plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/ns -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/status",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"Once you have configured the Plugin, you can make a request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix/status")," endpoint to get the status:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/status -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),(0,i.kt)("p",null,"The parameters in the response are described below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"Status of APISIX.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"total"),(0,i.kt)("td",{parentName:"tr",align:null},"Total number of client requests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"waiting"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of idle client connections waiting for a request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accepted"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of accepted client connections.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"writing"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of connections to which APISIX is writing back a response.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"handled"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of handled connections. Generally, this value is the same as ",(0,i.kt)("inlineCode",{parentName:"td"},"accepted")," unless any a resource limit is reached.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"active"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of active client connections including ",(0,i.kt)("inlineCode",{parentName:"td"},"waiting")," connections.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reading"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of connections where APISIX is reading the request header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"UID of APISIX instance saved in ",(0,i.kt)("inlineCode",{parentName:"td"},"apisix/conf/apisix.uid"),".")))),(0,i.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,i.kt)("p",null,"To remove the Plugin, you can remove it from your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("p",null,"You can also remove the Route on ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/routes/ns -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")))}p.isMDXComponent=!0}}]);