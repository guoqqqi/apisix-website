"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[54637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54296:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Wasm"},l=void 0,o={unversionedId:"wasm",id:"version-3.4/wasm",isDocsHomePage:!1,title:"Wasm",description:"APISIX supports Wasm plugins written with Proxy Wasm SDK.",source:"@site/docs-apisix_versioned_docs/version-3.4/wasm.md",sourceDirName:".",slug:"/wasm",permalink:"/docs/apisix/3.4/wasm",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/wasm.md",tags:[],version:"3.4",frontMatter:{title:"Wasm"},sidebar:"version-3.4/docs",previous:{title:"External Plugin",permalink:"/docs/apisix/3.4/external-plugin"},next:{title:"The Implementation of Plugin Runner",permalink:"/docs/apisix/3.4/internal/plugin-runner"}},p=[{value:"Programming model",id:"programming-model",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"Example",id:"example",children:[]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APISIX supports Wasm plugins written with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/proxy-wasm/spec#sdks"},"Proxy Wasm SDK"),"."),(0,a.kt)("p",null,"This plugin requires APISIX to run on ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/FAQ#how-do-i-build-the-apisix-base-environment"},"APISIX-Base"),", and is under construction.\nCurrently, only a few APIs are implemented. Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module"},"wasm-nginx-module")," to know the progress."),(0,a.kt)("h2",{id:"programming-model"},"Programming model"),(0,a.kt)("p",null,"The plugin supports the following concepts from Proxy Wasm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                    Wasm Virtual Machine\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      Your Plugin                                               \u2502\n\u2502          \u2502                                                     \u2502\n\u2502          \u2502 1: 1                                                \u2502\n\u2502          \u2502         1: N                                        \u2502\n\u2502      VMContext  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  PluginContext                      \u2502\n\u2502                                           \u2572 1: N               \u2502\n\u2502                                            \u2572                   \u2502\n\u2502                                             \u2572  HttpContext     \u2502\n\u2502                                               (Http stream)    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All plugins run in the same Wasm VM, like the Lua plugin in the Lua VM"),(0,a.kt)("li",{parentName:"ul"},"Each plugin has its own VMContext (the root ctx)"),(0,a.kt)("li",{parentName:"ul"},"Each configured route/global rules has its own PluginContext (the plugin ctx).\nFor example, if we have a service configuring with Wasm plugin, and two routes inherit from it,\nthere will be two plugin ctxs."),(0,a.kt)("li",{parentName:"ul"},"Each HTTP request which hits the configuration will have its own HttpContext (the HTTP ctx).\nFor example, if we configure both global rules and route, the HTTP request will\nhave two HTTP ctxs, one for the plugin ctx from global rules and the other for the\nplugin ctx from route.")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"First of all, we need to define the plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'wasm:\n  plugins:\n    - name: wasm_log # the name of the plugin\n      priority: 7999 # priority\n      file: t/wasm/log/main.go.wasm # the path of `.wasm` file\n      http_request_phase: access # default to "access", can be one of ["access", "rewrite"]\n')),(0,a.kt)("p",null,"That's all. Now you can use the wasm plugin as a regular plugin."),(0,a.kt)("p",null,"For example, enable this plugin on the specified route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n         "wasm_log": {\n             "conf": "blahblah"\n         }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Attributes below can be configured in the plugin:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conf"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'!= ""'),(0,a.kt)("td",{parentName:"tr",align:null},"the plugin ctx configuration which can be fetched via Proxy Wasm SDK")))),(0,a.kt)("p",null,"Here is the mapping between Proxy Wasm callbacks and APISIX's phases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_configure"),": run once there is not PluginContext for the new configuration.\nFor example, when the first request hits the route which has Wasm plugin configured."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_request_headers"),": run in the access/rewrite phase, depends on the configuration of ",(0,a.kt)("inlineCode",{parentName:"li"},"http_request_phase"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_request_body"),": run in the same phase of ",(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_request_headers"),". To run this callback, we need to set property ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm_process_req_body")," to non-empty value in ",(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_request_headers"),". See ",(0,a.kt)("inlineCode",{parentName:"li"},"t/wasm/request-body/main.go")," as an example."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_response_headers"),": run in the header_filter phase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_response_body"),": run in the body_filter phase. To run this callback, we need to set property ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm_process_resp_body")," to non-empty value in ",(0,a.kt)("inlineCode",{parentName:"li"},"proxy_on_http_response_headers"),". See ",(0,a.kt)("inlineCode",{parentName:"li"},"t/wasm/response-rewrite/main.go")," as an example.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We have reimplemented some Lua plugin via Wasm, under ",(0,a.kt)("inlineCode",{parentName:"p"},"t/wasm/")," of this repo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fault-injection"),(0,a.kt)("li",{parentName:"ul"},"forward-auth"),(0,a.kt)("li",{parentName:"ul"},"response-rewrite")))}u.isMDXComponent=!0}}]);