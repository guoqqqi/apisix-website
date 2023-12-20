"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=l,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85297:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={title:"cors",keywords:["Apache APISIX","API Gateway","CORS"],description:"This document contains information about the Apache APISIX cors Plugin."},r=void 0,o={unversionedId:"plugins/cors",id:"plugins/cors",isDocsHomePage:!1,title:"cors",description:"This document contains information about the Apache APISIX cors Plugin.",source:"@site/docs/apisix/plugins/cors.md",sourceDirName:"plugins",slug:"/plugins/cors",permalink:"/docs/apisix/next/plugins/cors",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/cors.md",tags:[],version:"current",frontMatter:{title:"cors",keywords:["Apache APISIX","API Gateway","CORS"],description:"This document contains information about the Apache APISIX cors Plugin."},sidebar:"docs",previous:{title:"multi-auth",permalink:"/docs/apisix/next/plugins/multi-auth"},next:{title:"uri-blocker",permalink:"/docs/apisix/next/plugins/uri-blocker"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"CORS attributes",id:"cors-attributes",children:[]},{value:"Resource Timing attributes",id:"resource-timing-attributes",children:[]}]},{value:"Metadata",id:"metadata",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cors")," Plugins lets you enable ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," easily."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("h3",{id:"cors-attributes"},"CORS attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_origins"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null},"Origins to allow CORS. Use the ",(0,l.kt)("inlineCode",{parentName:"td"},"scheme://host:port")," format. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"https://somedomain.com:8081"),". If you have multiple origins, use a ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to list them. If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can enable CORS for all origins by using ",(0,l.kt)("inlineCode",{parentName:"td"},"*"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", you can forcefully allow CORS on all origins by using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," but it will pose some security issues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_methods"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null},"Request methods to enable CORS on. For example ",(0,l.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"POST"),". Use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to add multiple methods. If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can enable CORS for all methods by using ",(0,l.kt)("inlineCode",{parentName:"td"},"*"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", you can forcefully allow CORS on all methods by using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," but it will pose some security issues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null},"Headers in the request allowed when accessing a cross-origin resource. Use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to add multiple headers. If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can enable CORS for all request headers by using ",(0,l.kt)("inlineCode",{parentName:"td"},"*"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", you can forcefully allow CORS on all request headers by using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," but it will pose some security issues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expose_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null},"Headers in the response allowed when accessing a cross-origin resource. Use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to add multiple headers. If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can enable CORS for all response headers by using ",(0,l.kt)("inlineCode",{parentName:"td"},"*"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", you can forcefully allow CORS on all response headers by using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," but it will pose some security issues.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_age"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum time in seconds the result is cached. If the time is within this limit, the browser will check the cached result. Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"-1")," to disable caching. Note that the maximum value is browser dependent. See ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age#Directives"},"Access-Control-Max-Age")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_credential"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", allows requests to include credentials like cookies. According to CORS specification, if you set this to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", you cannot use '*' to allow all for the other attributes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_origins_by_regex"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"Regex to match origins that allow CORS. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},'[".*\\.test.com$"]')," can match all subdomains of ",(0,l.kt)("inlineCode",{parentName:"td"},"test.com"),". When set to specified range, only domains in this range will be allowed, no matter what ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_origins")," is.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_origins_by_metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"Origins to enable CORS referenced from ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_origins")," set in the Plugin metadata. For example, if ",(0,l.kt)("inlineCode",{parentName:"td"},'"allow_origins": {"EXAMPLE": "https://example.com"}')," is set in the Plugin metadata, then ",(0,l.kt)("inlineCode",{parentName:"td"},'["EXAMPLE"]')," can be used to allow CORS on the origin ",(0,l.kt)("inlineCode",{parentName:"td"},"https://example.com"),".")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"allow_credential")," attribute is sensitive and must be used carefully. If set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," the default value ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," of the other attributes will be invalid and they should be specified explicitly."),(0,l.kt)("li",{parentName:"ol"},"When using ",(0,l.kt)("inlineCode",{parentName:"li"},"**")," you are vulnerable to security risks like CSRF. Make sure that this meets your security levels before using it.")))),(0,l.kt)("h3",{id:"resource-timing-attributes"},"Resource Timing attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timing_allow_origins"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"Origin to allow to access the resource timing information. See ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin"},"Timing-Allow-Origin"),". Use the ",(0,l.kt)("inlineCode",{parentName:"td"},"scheme://host:port")," format. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"https://somedomain.com:8081"),". If you have multiple origins, use a ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to list them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timing_allow_origins_by_regex"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"Regex to match with origin for enabling access to the resource timing information. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},'[".*\\.test.com"]')," can match all subdomain of ",(0,l.kt)("inlineCode",{parentName:"td"},"test.com"),". When set to specified range, only domains in this range will be allowed, no matter what ",(0,l.kt)("inlineCode",{parentName:"td"},"timing_allow_origins")," is.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The Timing-Allow-Origin header is defined in the Resource Timing API, but it is related to the CORS concept."),(0,l.kt)("p",{parentName:"div"},"Suppose you have 2 domains, ",(0,l.kt)("inlineCode",{parentName:"p"},"domain-A.com")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"domain-B.com"),".\nYou are on a page on ",(0,l.kt)("inlineCode",{parentName:"p"},"domain-A.com"),", you have an XHR call to a resource on ",(0,l.kt)("inlineCode",{parentName:"p"},"domain-B.com")," and you need its timing information.\nYou can allow the browser to show this timing information only if you have cross-origin permissions on ",(0,l.kt)("inlineCode",{parentName:"p"},"domain-B.com"),".\nSo, you have to set the CORS headers first, then access the ",(0,l.kt)("inlineCode",{parentName:"p"},"domain-B.com")," URL, and if you set ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin"},"Timing-Allow-Origin"),", the browser will show the requested timing information."))),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_origins"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"A map with origin reference and allowed origins. The keys in the map are used in the attribute ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_origins_by_metadata")," and the value are equivalent to the ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_origins")," attribute of the Plugin.")))),(0,l.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,l.kt)("p",null,"You can enable the Plugin on a specific Route or Service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "cors": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"example-usage"},"Example usage"),(0,l.kt)("p",null,"After enabling the Plugin, you can make a request to the server and see the CORS headers returned:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -v\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\n< Server: APISIX web server\n< Access-Control-Allow-Origin: *\n< Access-Control-Allow-Methods: *\n< Access-Control-Allow-Headers: *\n< Access-Control-Expose-Headers: *\n< Access-Control-Max-Age: 5\n...\n")),(0,l.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,l.kt)("p",null,"To remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"cors")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);