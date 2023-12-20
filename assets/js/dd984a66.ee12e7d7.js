"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[46892],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21278:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const r={title:"Plugin Config",keywords:["API Gateway","Apache APISIX","Plugin Config"],description:"Plugin Config in Apache APISIX."},a=void 0,l={unversionedId:"terminology/plugin-config",id:"version-3.7/terminology/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"Plugin Config in Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.7/terminology/plugin-config.md",sourceDirName:"terminology",slug:"/terminology/plugin-config",permalink:"/docs/apisix/terminology/plugin-config",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/terminology/plugin-config.md",tags:[],version:"3.7",frontMatter:{title:"Plugin Config",keywords:["API Gateway","Apache APISIX","Plugin Config"],description:"Plugin Config in Apache APISIX."},sidebar:"version-3.7/docs",previous:{title:"Plugin",permalink:"/docs/apisix/terminology/plugin"},next:{title:"Route",permalink:"/docs/apisix/terminology/route"}},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],p={toc:c};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Plugin Configs are used to extract commonly used ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugin")," configurations and can be bound directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/route"},"Route"),"."),(0,o.kt)("p",null,"While configuring the same plugin, only one copy of the configuration is valid. Please read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin#plugins-execution-order"},"plugin execution order")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin#plugins-merging-precedence"},"plugin merging order"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The example below illustrates how to create a Plugin Config and bind it to a Route:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_configs/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "blah",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY:edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"When APISIX can't find the Plugin Config with the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", the requests reaching this Route are terminated with a status code of ",(0,o.kt)("inlineCode",{parentName:"p"},"503"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a Route already has the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," field configured, the plugins in the Plugin Config will effectively be merged to it."),(0,o.kt)("p",{parentName:"div"},"The same plugin in the Plugin Config will not override the ones configured directly in the Route. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugin"),"."))),(0,o.kt)("p",null,"For example, if you configure a Plugin Config as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_configs/1 \\\n -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "I am plugin_config 1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"to a Route as shown below,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"the effective configuration will be as the one shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);