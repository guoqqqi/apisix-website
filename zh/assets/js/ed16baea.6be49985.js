"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28274:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"proxy-control"},o=void 0,i={unversionedId:"plugins/proxy-control",id:"version-2.15/plugins/proxy-control",isDocsHomePage:!1,title:"proxy-control",description:"proxy-control \u80fd\u591f\u52a8\u6001\u5730\u63a7\u5236 Nginx \u4ee3\u7406\u7684\u884c\u4e3a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/proxy-control.md",sourceDirName:"plugins",slug:"/plugins/proxy-control",permalink:"/zh/docs/apisix/2.15/plugins/proxy-control",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/plugins/proxy-control.md",tags:[],version:"2.15",frontMatter:{title:"proxy-control"},sidebar:"version-2.15/docs",previous:{title:"request-id",permalink:"/zh/docs/apisix/2.15/plugins/request-id"},next:{title:"client-control",permalink:"/zh/docs/apisix/2.15/plugins/client-control"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy-control")," \u80fd\u591f\u52a8\u6001\u5730\u63a7\u5236 Nginx \u4ee3\u7406\u7684\u884c\u4e3a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u4e2a\u63d2\u4ef6\u9700\u8981 APISIX \u5728 ",(0,a.kt)("a",{parentName:"strong",href:"/zh/docs/apisix/2.15/FAQ#%E5%A6%82%E4%BD%95%E6%9E%84%E5%BB%BA-apisix-base-%E7%8E%AF%E5%A2%83"},"APISIX-Base")," \u4e0a\u8fd0\u884c\u3002")),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request_buffering"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering"},(0,a.kt)("inlineCode",{parentName:"a"},"proxy_request_buffering")))))),(0,a.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/upload",\n    "plugins": {\n        "proxy-control": {\n            "request_buffering": false\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u53bb\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/upload -d @very_big_file\n")),(0,a.kt)("p",null,'\u5c06\u4e0d\u4f1a\u5728 error \u65e5\u5fd7\u4e2d\u627e\u5230 "a client request body is buffered to a temporary file" \u3002'),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u60a8\u8981\u7981\u7528\u8fd9\u4e2a\u63d2\u4ef6\u65f6\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u60a8\u53ef\u4ee5\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff0c\u5b83\u5c06\u7acb\u5373\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/upload",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-control")," \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}c.isMDXComponent=!0}}]);