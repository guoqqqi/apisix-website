"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[92973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67636:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Consumer",keywords:["Apache APISIX","API Gateway","APISIX Consumer","Consumer"],description:"This article describes the role of the Apache APISIX Consumer object and how to use the Consumer."},o=void 0,s={unversionedId:"terminology/consumer",id:"version-3.4/terminology/consumer",isDocsHomePage:!1,title:"Consumer",description:"This article describes the role of the Apache APISIX Consumer object and how to use the Consumer.",source:"@site/docs-apisix_versioned_docs/version-3.4/terminology/consumer.md",sourceDirName:"terminology",slug:"/terminology/consumer",permalink:"/docs/apisix/3.4/terminology/consumer",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/terminology/consumer.md",tags:[],version:"3.4",frontMatter:{title:"Consumer",keywords:["Apache APISIX","API Gateway","APISIX Consumer","Consumer"],description:"This article describes the role of the Apache APISIX Consumer object and how to use the Consumer."},sidebar:"version-3.4/docs",previous:{title:"API Gateway",permalink:"/docs/apisix/3.4/terminology/api-gateway"},next:{title:"Consumer Group",permalink:"/docs/apisix/3.4/terminology/consumer-group"}},l=[{value:"Description",id:"description",children:[{value:"Configuration options",id:"configuration-options",children:[]}]},{value:"Identifying a Consumer",id:"identifying-a-consumer",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"For an API gateway, it is usually possible to identify the type of the requester by using things like their request domain name and client IP address. A gateway like APISIX can then filter these requests using ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/terminology/plugin"},"Plugins")," and forward it to the specified ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/terminology/upstream"},"Upstream"),"."),(0,r.kt)("p",null,"It has the highest priority: Consumer > Route > Plugin Config > Service."),(0,r.kt)("p",null,"But this level of depth can be insufficient on some occasions."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.4/docs/assets/images/consumer-who.png",alt:"consumer-who"})),(0,r.kt)("p",null,"An API gateway should know who the consumer of the API is to configure different rules for different consumers. This is where the ",(0,r.kt)("strong",{parentName:"p"},"Consumer")," construct comes in APISIX."),(0,r.kt)("h3",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"The fields for defining a Consumer are defined as below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plugins")),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Plugin configuration of the ",(0,r.kt)("strong",{parentName:"td"},"Consumer"),". For specific Plugin configurations, please refer the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/3.4/terminology/plugin"},"Plugins"),".")))),(0,r.kt)("h2",{id:"identifying-a-consumer"},"Identifying a Consumer"),(0,r.kt)("p",null,"The process of identifying a Consumer in APISIX is described below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.4/docs/assets/images/consumer-internal.png",alt:"consumer-internal"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first step is Authentication. This is achieved by Authentication Plugins like ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/3.4/plugins/key-auth"},"key-auth")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/3.4/plugins/jwt-auth"},"JWT"),"."),(0,r.kt)("li",{parentName:"ol"},"After authenticating, you can obtain the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the Consumer. This ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," will be the unique identifier of a Consumer."),(0,r.kt)("li",{parentName:"ol"},"The configurations like Plugins and Upstream bound to the Consumer are then executed.")),(0,r.kt)("p",null,"Consumers are useful when you have different consumers requesting the same API and you need to execute different Plugin and Upstream configurations based on the consumer. These need to be used in conjunction with the user authentication system."),(0,r.kt)("p",null,"Refer to the documentation for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/plugins/key-auth"},"key-auth")," authentication Plugin to further understand the concept of a Consumer."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information about the Consumer object, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/admin-api#consumer"},"Admin API Consumer")," object resource introduction."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The example below shows how you can enable a Plugin for a specific Consumer."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Consumer, specify the authentication plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth"),", and enable the specific plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Router, set routing rules and enable plugin configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send a test request, the first two return to normal, did not reach the speed limit threshold."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -H 'apikey: auth-one' -I\n")),(0,r.kt)("p",{parentName:"li"},"The third test returns ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," and the request is restricted."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\n...\n")))),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/plugins/consumer-restriction"},"consumer-restriction"),' Plugin to restrict our user "Jack" from accessing the API.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add Jack to the blacklist."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {},\n        "consumer-restriction": {\n            "blacklist": [\n                "jack"\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeated tests, all return ",(0,r.kt)("inlineCode",{parentName:"p"},"403"),"; Jack is forbidden to access this API."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -H 'apikey: auth-one' -I\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403\n...\n")))))}u.isMDXComponent=!0}}]);