"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[67968],{35318:(t,a,e)=>{e.d(a,{Zo:()=>g,kt:()=>s});var n=e(27378);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=n.createContext({}),o=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},g=function(t){var a=o(t.components);return n.createElement(i.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,g=d(t,["components","mdxType","originalType","parentName"]),u=o(e),s=l,k=u["".concat(i,".").concat(s)]||u[s]||m[s]||r;return e?n.createElement(k,p(p({ref:a},g),{},{components:e})):n.createElement(k,p({ref:a},g))}));function s(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=u;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=t,d.mdxType="string"==typeof t?t:l,p[1]=d;for(var o=2;o<r;o++)p[o]=e[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},34858:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=e(25773),l=(e(27378),e(35318));const r={title:"API \u7f51\u5173 Datadog \u63d2\u4ef6\u53d1\u5e03\uff0c\u52a9\u529b\u63d0\u9ad8\u7cfb\u7edf\u53ef\u89c2\u6d4b\u6027",author:"Bisakh Mondal",authorURL:"https://github.com/bisakhmondal",authorImageURL:"https://avatars.githubusercontent.com/u/41498427?v=4",keywords:["Apache APISIX","Datadog","\u53ef\u89c2\u6d4b\u6027","Cloud Monitoring"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5982\u4f55\u4f7f\u7528 datadog \u63d2\u4ef6\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u8fdb\u884c\u96c6\u6210\uff0c\u5e76\u4e14\u4e5f\u4ecb\u7ecd\u4e86 datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u3001\u529f\u80fd\u4ee5\u53ca\u5177\u4f53\u53c2\u6570\u3002",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/Datadog.png"},p=void 0,d={permalink:"/zh/blog/2021/11/12/apisix-datadog",source:"@site/blog/2021/11/12/apisix-datadog.md",title:"API \u7f51\u5173 Datadog \u63d2\u4ef6\u53d1\u5e03\uff0c\u52a9\u529b\u63d0\u9ad8\u7cfb\u7edf\u53ef\u89c2\u6d4b\u6027",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5982\u4f55\u4f7f\u7528 datadog \u63d2\u4ef6\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u8fdb\u884c\u96c6\u6210\uff0c\u5e76\u4e14\u4e5f\u4ecb\u7ecd\u4e86 datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u3001\u529f\u80fd\u4ee5\u53ca\u5177\u4f53\u53c2\u6570\u3002",date:"2021-11-12T00:00:00.000Z",formattedDate:"2021\u5e7411\u670812\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.765,truncated:!0,authors:[{name:"Bisakh Mondal",url:"https://github.com/bisakhmondal",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"}],prevItem:{title:"\u793e\u533a\u5468\u62a5\uff0811.1-11.14\uff09",permalink:"/zh/blog/2021/11/16/weekly-report-1114"},nextItem:{title:"\u6d45\u8c08 Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/blog/2021/11/04/skywalking"}},i={authorsImageUrls:[void 0]},o=[{value:"APISIX-Datadog plugin \u5de5\u4f5c\u539f\u7406",id:"apisix-datadog-plugin-\u5de5\u4f5c\u539f\u7406",children:[],level:2},{value:"\u542f\u52a8 Datadog Agent",id:"\u542f\u52a8-datadog-agent",children:[],level:2},{value:"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Datadog",id:"\u5982\u4f55\u5728-apache-apisix-\u4e2d\u4f7f\u7528-datadog",children:[{value:"\u542f\u7528 APISIX-Datadog \u63d2\u4ef6",id:"\u542f\u7528-apisix-datadog-\u63d2\u4ef6",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:[{value:"\u5143\u6570\u636e\u53c2\u6570\u89e3\u91ca",id:"\u5143\u6570\u636e\u53c2\u6570\u89e3\u91ca",children:[],level:4},{value:"\u63d2\u4ef6\u53c2\u6570\u89e3\u91ca",id:"\u63d2\u4ef6\u53c2\u6570\u89e3\u91ca",children:[],level:4}],level:3},{value:"\u505c\u7528 APISIX-Datadog \u63d2\u4ef6",id:"\u505c\u7528-apisix-datadog-\u63d2\u4ef6",children:[],level:3}],level:2}],g={toc:o};function m(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apache APISIX \u6700\u8fd1\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/next/plugins/datadog"},"APISIX-Datadog"),"\uff0c\u4ee5\u63d0\u4f9b\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u96c6\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 APISIX-Datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u529f\u80fd\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636955062917-28911d71-0d56-48ec-85e5-a7908195da2f.png",alt:"APISIX-Datadog \u63d2\u4ef6\u5c01\u9762\u56fe"})),(0,l.kt)("p",null,"\u968f\u7740\u5e94\u7528\u5f00\u53d1\u7684\u590d\u6742\u5ea6\u589e\u52a0\uff0c\u76d1\u63a7\u6210\u4e3a\u4e86\u5e94\u7528\u7684\u4e00\u4e2a\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u53ca\u65f6\u3001\u51c6\u786e\u7684\u76d1\u63a7\u65e2\u80fd\u6ee1\u8db3\u5feb\u901f\u8fed\u4ee3\u7684\u5468\u671f\u6027\u9700\u6c42\uff0c\u53c8\u80fd\u591f\u786e\u4fdd\u5e94\u7528\u7684\u7a33\u5b9a\u6027\u548c\u6d41\u7545\u6027\u3002\u5982\u4f55\u9009\u62e9\u4e00\u4e2a\u9002\u5408\u7684\u76d1\u63a7\uff0c\u4ee5\u63d0\u5347\u5e94\u7528\u7684\u53ef\u89c2\u6d4b\u6027\uff0c\u6210\u4e3a\u4e86\u6bcf\u4e2a\u5f00\u53d1\u8005\u90fd\u5fc5\u987b\u9762\u4e34\u7684\u4e00\u9053\u96be\u9898\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," \u5c06\u76d1\u63a7\u548c\u53ef\u89c2\u6d4b\u6027\u4ece\u5e94\u7528\u4e2d\u89e3\u8026\u4e86\u51fa\u6765\uff0c\u7ed9\u5f00\u53d1\u4eba\u5458\u5e26\u6765\u4e86\u4e00\u4e2a\u4f18\u52bf\uff1a\u5728\u6784\u5efa\u5e94\u7528\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u5173\u6ce8\u4e1a\u52a1\u903b\u8f91\uff0c\u800c Apache APISIX \u53ef\u4ee5\u548c\u5f00\u53d1\u4eba\u5458\u9009\u5b9a\u7684\u76d1\u63a7\u5e73\u53f0\u5bf9\u63a5\uff0c\u5904\u7406\u53ef\u89c2\u6d4b\u6027\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"Apache APISIX \u6700\u8fd1\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff1aAPISIX-Datadog\uff0c\u4ee5\u63d0\u4f9b\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u96c6\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 APISIX-Datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"apisix-datadog-plugin-\u5de5\u4f5c\u539f\u7406"},"APISIX-Datadog plugin \u5de5\u4f5c\u539f\u7406"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636685752757-d02d8305-2a68-4b3e-b2cc-9e5410c8bf11.png",alt:"APISIX-Datadog \u63d2\u4ef6\u67b6\u6784\u56fe"})),(0,l.kt)("p",null,"APISIX-Datadog \u63d2\u4ef6\u5c06\u5176\u81ea\u5b9a\u4e49\u6307\u6807\u63a8\u9001\u5230 DogStatsD server\u3002\u800c DogStatsD server \u901a\u8fc7 UDP \u8fde\u63a5\u4e0e Datadog agent \u6346\u7ed1\u5728\u4e00\u8d77\u3002DogStatsD \u662f StatsD \u534f\u8bae\u7684\u4e00\u4e2a\u5b9e\u73b0\u3002\u5b83\u4e3a Apache APISIX agent \u6536\u96c6\u81ea\u5b9a\u4e49\u6307\u6807\uff0c\u5c06\u5176\u805a\u5408\u6210\u4e00\u4e2a\u6570\u636e\u70b9\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u5230\u914d\u7f6e\u7684 Datadog server\u3002\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e DogStatsD \u7684\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee DogStatsD \u6587\u6863\u3002"),(0,l.kt)("p",null,"\u5f53\u4f60\u542f\u7528 APISIX-Datadog \u63d2\u4ef6\u65f6\uff0cApache APISIX agent \u4f1a\u5728\u6bcf\u4e2a\u8bf7\u6c42\u54cd\u5e94\u5468\u671f\u5411 DogStatsD server \u8f93\u51fa\u4ee5\u4e0b\u6307\u6807\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"StatsD \u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Request Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u7684\u8bf7\u6c42\u6570\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Request Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8be5\u8bf7\u6c42\u6240\u9700\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Upstream latency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38 server agent \u8bf7\u6c42\u5230\u6536\u5230\u54cd\u5e94\u6240\u9700\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"APISIX Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX agent \u5904\u7406\u8be5\u8bf7\u6c42\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Timer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Egress Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Timer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u4f53\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002")))),(0,l.kt)("p",null,"\u8fd9\u4e9b\u6307\u6807\u5c06\u88ab\u53d1\u9001\u5230 DogStatsD agent\uff0c\u5e76\u5e26\u6709\u4ee5\u4e0b\u6807\u7b7e\u3002\u5982\u679c\u4efb\u4f55\u7279\u5b9a\u7684\u6807\u7b7e\u6ca1\u6709\u5408\u9002\u7684\u503c\uff0c\u8be5\u6807\u7b7e\u5c06\u88ab\u76f4\u63a5\u7701\u7565\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"route_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u7684\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c06\u663e\u793a\u8def\u7531 ID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e00\u4e2a\u8def\u7531\u662f\u7528\u670d\u52a1\u7684\u62bd\u8c61\u6982\u5ff5\u521b\u5efa\u7684\uff0c\u90a3\u4e48\u7279\u5b9a\u7684\u670d\u52a1 ID \u5c06\u88ab\u4f7f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8def\u7531\u6709\u4e00\u4e2a\u94fe\u63a5\u7684\u6d88\u8d39\u8005\uff0c\u6d88\u8d39\u8005\u7684\u7528\u6237\u540d\u5c06\u88ab\u6dfb\u52a0\u4e3a\u4e00\u4e2a\u6807\u7b7e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"balancer_ip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e86\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u6e38\u590d\u5236\u5747\u8861\u5668\u7684\u7684 IP\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_status"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u54cd\u5e94\u72b6\u6001\u4ee3\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5df2\u7528\u4e8e\u63d0\u51fa\u8bf7\u6c42\u7684\u534f\u8bae\uff0c\u5982 HTTP\u3001gRPC\u3001gRPCs \u7b49\u3002")))),(0,l.kt)("p",null,"APISIX-Datadog \u63d2\u4ef6\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5e26\u6709 timer \u7684 buffer\u3002\u5f53 timer \u5931\u6548\u65f6\uff0cAPISIX-Datadog \u63d2\u4ef6\u4f1a\u5c06 buffer \u7684\u6307\u6807\u4f5c\u4e3a\u4e00\u4e2a\u6279\u91cf\u5904\u7406\u7a0b\u5e8f\u4f20\u9001\u7ed9\u672c\u5730\u8fd0\u884c\u7684 DogStatsD server\u3002\u8fd9\u79cd\u65b9\u6cd5\u901a\u8fc7\u91cd\u590d\u4f7f\u7528\u76f8\u540c\u7684 UDP \u5957\u63a5\u5b57\uff0c\u5bf9\u8d44\u6e90\u7684\u5360\u7528\u8f83\u5c11\uff0c\u800c\u4e14\u7531\u4e8e\u53ef\u4ee5\u914d\u7f6e timer\uff0c\u6240\u4ee5\u4e0d\u4f1a\u4e00\u76f4\u8ba9\u7f51\u7edc\u8fc7\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u542f\u52a8-datadog-agent"},"\u542f\u52a8 Datadog Agent"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u4f7f\u7528 Datadog\uff0c\u4f60\u5fc5\u987b\u5728\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4e00\u4e2a Datadog agent\u3002\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a docker \u5bb9\u5668\uff0c\u4e00\u4e2a pod \u6216\u4e8c\u8fdb\u5236\u7684\u5305\u7ba1\u7406\u5668\u3002\u4f60\u53ea\u9700\u8981\u786e\u4fddApache APISIX agent \u53ef\u4ee5\u5230\u8fbe Datadog agent \u7684 8125 \u7aef\u53e3\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u5b89\u88c5\u4e00\u4e2a\u5b8c\u6574\u7684 Datadog agent\uff0c\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/agent/"},"\u8fd9\u91cc"),"\u3002")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4ece\u6ca1\u4f7f\u7528\u8fc7 Datadog"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u9996\u5148\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"li",href:"http://www.datadoghq.com"},"www.datadoghq.com")," \uff0c\u521b\u5efa\u4e00\u4e2a\u8d26\u6237\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7136\u540e\u6309\u7167\u4e0b\u56fe\u6807\u6ce8\u7684\u6b65\u9aa4\u751f\u6210 API \u5bc6\u94a5\u3002\n",(0,l.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1636685007445-05f134fd-e80a-4173-b1d7-f0a118087998.png",alt:"Generate an API Key"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"APISIX-Datadog \u63d2\u4ef6\u53ea\u9700\u8981\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"datadog/agent")," \u7684 dogstatsd \u7ec4\u4ef6\u5373\u53ef\u5b9e\u73b0\uff0c\u56e0\u4e3a\u8be5\u63d2\u4ef6\u6309\u7167 statsd \u534f\u8bae\u901a\u8fc7\u6807\u51c6\u7684 UDP \u5957\u63a5\u5b57\u5411 DogStatsD server \u5f02\u6b65\u53d1\u9001\u53c2\u6570\u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u72ec\u7acb\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"datadog/dogstatsd")," \u955c\u50cf\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5b8c\u6574\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"datadog/agent")," \uff0c\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"datadog/dogstatsd")," \u7684\u7ec4\u4ef6\u5927\u5c0f\u53ea\u6709\u5927\u7ea6 11 MB\uff0c\u66f4\u52a0\u8f7b\u91cf\u5316\u3002\u800c\u5b8c\u6574\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"datadog/agent")," \u955c\u50cf\u7684\u5927\u5c0f\u4e3a 2.8 GB\u3002"))),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u5bb9\u5668\u6765\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# pull the latest image\ndocker pull datadog/dogstatsd:latest\n# run a detached container\ndocker run -d --name dogstatsd-agent -e DD_API_KEY=<Your API Key from step 2> -p 8125:8125/udp datadog/dogstatsd\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Kubernetes\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"dogstatsd")," \u4f5c\u4e3a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Daemonset")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi-Container Pod")," \u4e0e Apache APISIX agent \u4e00\u8d77\u90e8\u7f72\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5728-apache-apisix-\u4e2d\u4f7f\u7528-datadog"},"\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Datadog"),(0,l.kt)("h3",{id:"\u542f\u7528-apisix-datadog-\u63d2\u4ef6"},"\u542f\u7528 APISIX-Datadog \u63d2\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u542f\u52a8\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"dogstatsd")," agent\uff0c\u53ea\u9700\u6267\u884c\u4e00\u6761\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u4e3a\u6307\u5b9a\u8def\u7531\u542f\u7528 APISIX-Datadog \u63d2\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# enable plugin for a specific route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "datadog": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u542f\u7528 APISIX-Datadog \u63d2\u4ef6\u540e\uff0c\u4efb\u4f55\u5bf9\u7aef\u70b9 URI ",(0,l.kt)("inlineCode",{parentName:"p"},"/hello")," \u7684\u8bf7\u6c42\u90fd\u4f1a\u4ea7\u751f\u4e0a\u8ff0\u6307\u6807\uff0c\u5e76\u63a8\u9001\u5230 Datadog agent\u7684\u672c\u5730 DogStatsD server\u3002"),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\u679c\u542f\u7528 APISIX-Datadog \u63d2\u4ef6\u65f6\uff0c\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4\u914d\u7f6e\uff0cdogstatsd \u670d\u52a1\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8125")," \u53ef\u7528\u3002\u5982\u679c\u4f60\u60f3\u66f4\u65b0\u914d\u7f6e\uff0c\u8bf7\u66f4\u65b0\u63d2\u4ef6\u7684\u5143\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u5143\u6570\u636e\u53c2\u6570\u89e3\u91ca"},"\u5143\u6570\u636e\u53c2\u6570\u89e3\u91ca"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b\u4fee\u6539"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"127.0.0.1"'),(0,l.kt)("td",{parentName:"tr",align:null},"DogStatsD server \u7684\u4e3b\u673a\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"8125"),(0,l.kt)("td",{parentName:"tr",align:null},"DogStatsD server\u7684\u4e3b\u673a\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 APISIX agent\u53d1\u9001\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u524d\u7f00\u3002\u5bf9\u5bfb\u627e\u6307\u6807\u56fe\u7684\u5b9e\u4f53\u5f88\u6709\u5e2e\u52a9\uff0c\u4f8b\u5982\uff1a(apisix.request.counter)\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"constant_tags"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'["source:apisix"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u6807\u7b7e\u5d4c\u5165\u5230\u751f\u6210\u7684\u6307\u6807\u4e2d\u3002\u5bf9\u67d0\u4e9b\u4fe1\u53f7\u7684 metrics \u8fdb\u884c\u5206\u7ec4\u5f88\u6709\u7528\u3002")))),(0,l.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u6709\u6548\u5730\u7f16\u5199\u6807\u7b7e\uff0c\u8bf7\u8bbf\u95ee",(0,l.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/getting_started/tagging/#defining-tags"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("p",null,"\u5411 /apisix/admin/plugin_metadata \u7aef\u70b9\u53d1\u51fa\u8bf7\u6c42\uff0c\u66f4\u65b0\u5143\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/datadog -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "host": "127.0.0.1",\n    "port": 8125,\n    "constant_tags": [\n        "source:apisix",\n        "service:custom"\n    ],\n    "namespace": "apisix"\n}\'\n')),(0,l.kt)("h4",{id:"\u63d2\u4ef6\u53c2\u6570\u89e3\u91ca"},"\u63d2\u4ef6\u53c2\u6570\u89e3\u91ca"),(0,l.kt)("p",null,"\u4e0e\u5143\u6570\u636e\u7c7b\u4f3c\uff0c\u5728\u542f\u7528 APISIX-Datadog \u63d2\u4ef6\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8c03\u6574\u5176\u4ed6\u53c2\u6570\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b\u4fee\u6539"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u6279\u6b21\u7684 buffer \u6700\u5927\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e0d\u6d3b\u8dc3\uff0cbuffer \u5c06\u88ab\u5237\u65b0\u7684\u6700\u957f\u65f6\u95f4\uff08\u79d2\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5fc5\u987b\u5904\u7406\u4e00\u4e2a\u6279\u6b21\u4e4b\u524d\uff0c\u8be5\u6279\u6b21\u4e2d\u6700\u8001\u7684\u6761\u76ee\u7684\u6700\u957f\u5b58\u6d3b\u65f6\u95f4\uff08\u79d2\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e00\u4e2a\u6761\u76ee\u672a\u80fd\u5230\u8fbe dogstatsd server\uff0c\u91cd\u8bd5\u7684\u6b21\u6570\u3002")))),(0,l.kt)("p",null,"\u7531\u4e8e\u6240\u6709\u7684\u5b57\u6bb5\u90fd\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u624b\u52a8\u8bbe\u7f6e\u4efb\u4f55\u53c2\u6570\uff0cAPISIX-Datadog \u63d2\u4ef6\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\u8bbe\u7f6e\u8fd9\u4e9b\u53c2\u6570\u3002\u5982\u679c\u4f60\u9700\u8981\u66f4\u65b0\u4efb\u4f55\u53c2\u6570\uff0c\u53ea\u9700\u7528\u66f4\u65b0\u7684\u53c2\u6570\u503c\u66f4\u65b0\u6240\u9700\u7684\u8def\u7531\u3001\u670d\u52a1\u6216\u6d88\u8d39\u8005\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_size")," \u4fee\u6539\u4e3a 10\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\'{\n...\n"plugins": {\n    "datadog": {\n        "batch_max_size": 10\n    }\n}\n... }\'\n')),(0,l.kt)("h3",{id:"\u505c\u7528-apisix-datadog-\u63d2\u4ef6"},"\u505c\u7528 APISIX-Datadog \u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ea\u9700\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u5373\u53ef\u505c\u7528 APISIX-Datadog \u63d2\u4ef6\u3002\u5f97\u76ca\u4e8e Apache APISIX \u63d2\u4ef6\u7684\u70ed\u52a0\u8f7d\u673a\u5236\uff0c\u5220\u9664 json \u914d\u7f6e\u540e\uff0c\u4f1a\u7acb\u5373\u505c\u7528APISIX-Datadog \u63d2\u4ef6\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# disable plugin for a route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);