"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14292],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,c=u["".concat(o,".").concat(m)]||u[m]||k[m]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15336:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"openwhisk",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","OpenWhisk"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX openwhisk \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/openwhisk",id:"version-3.7/plugins/openwhisk",isDocsHomePage:!1,title:"openwhisk",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX openwhisk \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.7/plugins/openwhisk.md",sourceDirName:"plugins",slug:"/plugins/openwhisk",permalink:"/zh/docs/apisix/plugins/openwhisk",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.7/docs/zh/latest/plugins/openwhisk.md",tags:[],version:"3.7",frontMatter:{title:"openwhisk",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","OpenWhisk"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX openwhisk \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.7/docs",previous:{title:"azure-functions",permalink:"/zh/docs/apisix/plugins/azure-functions"},next:{title:"aws-lambda",permalink:"/zh/docs/apisix/plugins/aws-lambda"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u642d\u5efa Apache OpenWhisk \u6d4b\u8bd5\u73af\u5883",id:"\u642d\u5efa-apache-openwhisk-\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u521b\u5efa\u8def\u7531",id:"\u521b\u5efa\u8def\u7531",children:[]},{value:"\u6d4b\u8bd5\u8bf7\u6c42",id:"\u6d4b\u8bd5\u8bf7\u6c42",children:[]}]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],s={toc:o};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"openwhisk")," \u63d2\u4ef6\u7528\u4e8e\u5c06\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u65e0\u670d\u52a1\u5668\u5e73\u53f0 ",(0,r.kt)("a",{parentName:"p",href:"https://openwhisk.apache.org"},"Apache OpenWhisk")," \u4f5c\u4e3a\u52a8\u6001\u4e0a\u6e38\u96c6\u6210\u81f3 APISIX\u3002"),(0,r.kt)("p",null,"\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"openwhisk")," \u63d2\u4ef6\u540e\uff0c\u8be5\u63d2\u4ef6\u4f1a\u7ec8\u6b62\u5bf9\u5df2\u914d\u7f6e URI \u7684\u8bf7\u6c42\uff0c\u5e76\u4ee3\u8868\u5ba2\u6237\u7aef\u5411 OpenWhisk \u7684 API Host \u7aef\u70b9\u53d1\u8d77\u4e00\u4e2a\u65b0\u7684\u8bf7\u6c42\uff0c\u7136\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"openwhisk")," \u63d2\u4ef6\u4f1a\u5c06\u54cd\u5e94\u4fe1\u606f\u8fd4\u56de\u81f3\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OpenWhisk API Host \u5730\u5740\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://localhost:3233"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u6267\u884c SSL \u9a8c\u8bc1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OpenWhisk service token\uff0c\u5176\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"xxx:xxx")," \uff0c\u7528\u4e8e API \u8c03\u7528\u65f6\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OpenWhisk namespace\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"guest"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OpenWhisk action\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"hello"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u83b7\u5f97 action \u5143\u6570\u636e\uff08\u6267\u884c\u51fd\u6570\u5e76\u83b7\u5f97\u54cd\u5e94\u7ed3\u679c\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,60000]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenWhisk action \u548c HTTP \u8c03\u7528\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u4fdd\u6301\u8fde\u63a5\u7684\u6d3b\u52a8\u72b6\u6001\u4ee5\u4fbf\u91cd\u590d\u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000,...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8fde\u63a5\u7a7a\u95f2\u65f6\uff0c\u4fdd\u6301\u8be5\u8fde\u63a5\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u65ad\u5f00\u4e4b\u524d\uff0c\u53ef\u63a5\u6536\u7684\u6700\u5927\u8bf7\u6c42\u6570\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," \u5b57\u6bb5\u89c4\u5b9a\u4e86 OpenWhisk action \u7684\u6700\u5927\u6267\u884c\u65f6\u95f4\uff0c\u4ee5\u53ca APISIX \u4e2d HTTP \u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("p",{parentName:"div"},"\u56e0\u4e3a OpenWhisk action \u8c03\u7528\u53ef\u80fd\u4f1a\u8017\u8d39\u5f88\u957f\u65f6\u95f4\u6765\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u548c\u542f\u52a8\u5bb9\u5668\uff0c\u6240\u4ee5\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," \u5b57\u6bb5\u503c\u8bbe\u7f6e\u592a\u5c0f\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5927\u91cf\u7684\u5931\u8d25\u8bf7\u6c42\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5728 OpenWhisk \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," \u5b57\u6bb5\u7684\u503c\u8bbe\u7f6e\u8303\u56f4\u4ece 1 ms \u5230 60000 ms\uff0c\u5efa\u8bae\u7528\u6237\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," \u5b57\u6bb5\u7684\u503c\u81f3\u5c11\u8bbe\u7f6e\u4e3a 1000ms\u3002"))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("h3",{id:"\u642d\u5efa-apache-openwhisk-\u6d4b\u8bd5\u73af\u5883"},"\u642d\u5efa Apache OpenWhisk \u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"openwhisk")," \u63d2\u4ef6\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c OpenWhisk standalone \u6a21\u5f0f\u3002\u8bf7\u786e\u4fdd\u5f53\u524d\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 Docker \u8f6f\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -d \\\n  -h openwhisk --name openwhisk \\\n  -p 3233:3233 -p 3232:3232 \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  openwhisk/standalone:nightly\ndocker exec openwhisk waitready\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/openwhisk-cli"},"openwhisk-cli")," \u5de5\u5177\uff1a")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk-cli"},"openwhisk-cli")," \u4ed3\u5e93\u4e0b\u8f7d\u5df2\u53d1\u5e03\u7684\u9002\u7528\u4e8e Linux \u7cfb\u7edf\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6 wsk\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728 OpenWhisk \u4e2d\u6ce8\u518c\u51fd\u6570\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wsk property set --apihost "http://localhost:3233" --auth "${service_token}"\nwsk action update test <(echo \'function main(){return {"ready":true}}\') --kind nodejs:14\n')),(0,r.kt)("h3",{id:"\u521b\u5efa\u8def\u7531"},"\u521b\u5efa\u8def\u7531"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "openwhisk": {\n            "api_host": "http://localhost:3233",\n            "service_token": "${service_token}",\n            "namespace": "guest",\n            "action": "test"\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u8bf7\u6c42"},"\u6d4b\u8bd5\u8bf7\u6c42"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "ready": true }\n')),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);