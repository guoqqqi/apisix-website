"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47988],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?t.createElement(g,a(a({ref:n},u),{},{components:r})):t.createElement(g,a({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64567:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={title:"Consumer Group",keywords:["API gateway","Apache APISIX","Consumer Group"],description:"Consumer Group in Apache APISIX."},a=void 0,s={unversionedId:"terminology/consumer-group",id:"version-3.7/terminology/consumer-group",isDocsHomePage:!1,title:"Consumer Group",description:"Consumer Group in Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.7/terminology/consumer-group.md",sourceDirName:"terminology",slug:"/terminology/consumer-group",permalink:"/docs/apisix/terminology/consumer-group",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/terminology/consumer-group.md",tags:[],version:"3.7",frontMatter:{title:"Consumer Group",keywords:["API gateway","Apache APISIX","Consumer Group"],description:"Consumer Group in Apache APISIX."},sidebar:"version-3.7/docs",previous:{title:"Consumer",permalink:"/docs/apisix/terminology/consumer"},next:{title:"Global Rules",permalink:"/docs/apisix/terminology/global-rule"}},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Consumer Groups are used to extract commonly used ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugin")," configurations and can be bound directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/consumer"},"Consumer"),"."),(0,o.kt)("p",null,"With consumer groups, you can define any number of plugins, e.g. rate limiting and apply them to a set of consumers,\ninstead of managing each consumer individually."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The example below illustrates how to create a Consumer Group and bind it to a Consumer."),(0,o.kt)("p",null,"Create a Consumer Group which shares the same rate limiting quota:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumer_groups/company_a \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 200,\n            "time_window": 60,\n            "rejected_code": 503,\n            "group": "grp_company_a"\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"Create a Consumer within the Consumer Group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        }\n    },\n    "group_id": "company_a"\n}\'\n')),(0,o.kt)("p",null,"When APISIX can't find the Consumer Group with the ",(0,o.kt)("inlineCode",{parentName:"p"},"group_id"),", the Admin API is terminated with a status code of ",(0,o.kt)("inlineCode",{parentName:"p"},"400"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"When the same plugin is configured in ",(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/terminology/consumer"},"consumer"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/terminology/route"},"routing"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/terminology/plugin-config"},"plugin config")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/terminology/service"},"service"),", only one configuration is in effect, and the consumer has the highest priority. Please refer to ",(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/terminology/plugin"},"Plugin"),"."),(0,o.kt)("li",{parentName:"ol"},"If a Consumer already has the ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins")," field configured, the plugins in the Consumer Group will effectively be merged into it. The same plugin in the Consumer Group will not override the one configured directly in the Consumer.")))),(0,o.kt)("p",null,"For example, if we configure a Consumer Group as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "bar",\n    "plugins": {\n        "response-rewrite": {\n            "body": "hello"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"To a Consumer as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "foo",\n    "group_id": "bar",\n    "plugins": {\n        "basic-auth": {\n            "username": "foo",\n            "password": "bar"\n        },\n        "response-rewrite": {\n            "body": "world"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Then the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"response-rewrite")," keeps ",(0,o.kt)("inlineCode",{parentName:"p"},"world"),"."))}u.isMDXComponent=!0}}]);