"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[23680],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>I});var l=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),d=u(a),I=n,A=d["".concat(c,".").concat(I)]||d[I]||o[I]||r;return a?l.createElement(A,i(i({ref:t},h),{},{components:a})):l.createElement(A,i({ref:t},h))}));function I(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=a(25773),n=(a(27378),a(35318));const r={title:"8.21 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u62a5\u540d\u5f00\u542f\uff01",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Meetup"],description:"\u672c\u6b21 Meetup \u5c06\u4e3a\u5927\u5bb6\u5206\u4eab\u5173\u4e8e API \u7f51\u5173 Apache APISIX \u793e\u533a\u7684\u7531\u6765\uff0c\u7231\u5947\u827a\u4f7f\u7528 APISIX \u7684\u7528\u6237\u6848\u4f8b\uff0c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u4f18\u70b9\u4ee5\u53ca\u5982\u4f55\u5728 APISIX \u4e0a\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u3002",tags:["Community"]},i=void 0,p={permalink:"/zh/blog/2021/08/21/shanghai-meetup",source:"@site/blog/2021/08/21/shanghai-meetup.md",title:"8.21 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u62a5\u540d\u5f00\u542f\uff01",description:"\u672c\u6b21 Meetup \u5c06\u4e3a\u5927\u5bb6\u5206\u4eab\u5173\u4e8e API \u7f51\u5173 Apache APISIX \u793e\u533a\u7684\u7531\u6765\uff0c\u7231\u5947\u827a\u4f7f\u7528 APISIX \u7684\u7528\u6237\u6848\u4f8b\uff0c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u4f18\u70b9\u4ee5\u53ca\u5982\u4f55\u5728 APISIX \u4e0a\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u3002",date:"2021-08-21T00:00:00.000Z",formattedDate:"2021\u5e748\u670821\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:5.27,truncated:!0,authors:[],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff088.16-8.22\uff09",permalink:"/zh/blog/2021/08/23/weekly-report"},nextItem:{title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",permalink:"/zh/blog/2021/08/19/go-makes-apache-apisix-better"}},c={authorsImageUrls:[]},u=[{value:"\u65f6\u95f4\uff1a2021 \u5e74 8 \u6708 21 \u65e5 13:30",id:"\u65f6\u95f42021-\u5e74-8-\u6708-21-\u65e5-1330",children:[],level:4},{value:"\u5730\u70b9\uff1a\u4e0a\u6d77\u5e02\u9ec4\u6d66\u533a\u4e2d\u533a\u5e7f\u573a 6 \u697c\u9759\u548c\u5c9b\u4e8c\u671f",id:"\u5730\u70b9\u4e0a\u6d77\u5e02\u9ec4\u6d66\u533a\u4e2d\u533a\u5e7f\u573a-6-\u697c\u9759\u548c\u5c9b\u4e8c\u671f",children:[],level:4},{value:"\u53c2\u52a0\u672c\u6b21 Meetup\uff0c\u4f60\u53ef\u4ee5",id:"\u53c2\u52a0\u672c\u6b21-meetup\u4f60\u53ef\u4ee5",children:[],level:4},{value:"\u6d3b\u52a8\u5b89\u6392",id:"\u6d3b\u52a8\u5b89\u6392",children:[],level:2},{value:"\u8bae\u9898\u4ecb\u7ecd",id:"\u8bae\u9898\u4ecb\u7ecd",children:[{value:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5",id:"\u57fa\u4e8e-apache-apisix\u7231\u5947\u827a-api-\u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5",children:[{value:"\u5206\u4eab\u5609\u5bbe",id:"\u5206\u4eab\u5609\u5bbe",children:[],level:4},{value:"\u8bae\u9898\u8be6\u60c5",id:"\u8bae\u9898\u8be6\u60c5",children:[],level:4}],level:3},{value:"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1",id:"\u5982\u4f55\u4f7f\u7528-apache-apisix-\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1",children:[{value:"\u5206\u4eab\u5609\u5bbe",id:"\u5206\u4eab\u5609\u5bbe-1",children:[],level:4},{value:"\u8bae\u9898\u8be6\u60c5",id:"\u8bae\u9898\u8be6\u60c5-1",children:[],level:4}],level:3},{value:"\u6570\u636e\u4e3b\u6743\u4e0e Apache APISIX \u7f51\u5173\u843d\u5730\u5b9e\u8df5",id:"\u6570\u636e\u4e3b\u6743\u4e0e-apache-apisix-\u7f51\u5173\u843d\u5730\u5b9e\u8df5",children:[{value:"\u5206\u4eab\u5609\u5bbe",id:"\u5206\u4eab\u5609\u5bbe-2",children:[],level:4},{value:"\u8bae\u9898\u8be6\u60c5",id:"\u8bae\u9898\u8be6\u60c5-2",children:[],level:4}],level:3},{value:"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0cApache APISIX \u611f\u6069\u6709\u4f60",id:"\u72ec\u884c\u8005\u901f\u4f17\u884c\u8005\u8fdcapache-apisix-\u611f\u6069\u6709\u4f60",children:[{value:"\u5206\u4eab\u5609\u5bbe",id:"\u5206\u4eab\u5609\u5bbe-3",children:[],level:4},{value:"\u8bae\u9898\u8be6\u60c5",id:"\u8bae\u9898\u8be6\u60c5-3",children:[],level:4}],level:3}],level:2},{value:"\u5468\u8fb9\u798f\u5229",id:"\u5468\u8fb9\u798f\u5229",children:[],level:2},{value:"\u53c2\u4e0e\u65b9\u5f0f",id:"\u53c2\u4e0e\u65b9\u5f0f",children:[{value:"\u73b0\u573a\u62a5\u540d",id:"\u73b0\u573a\u62a5\u540d",children:[],level:3},{value:"\u7ebf\u4e0a\u76f4\u64ad",id:"\u7ebf\u4e0a\u76f4\u64ad",children:[],level:3}],level:2},{value:"\u5165\u7fa4\u4ea4\u6d41",id:"\u5165\u7fa4\u4ea4\u6d41",children:[],level:2}],h={toc:u};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6b21 Meetup \u7531 ",(0,n.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"api7.ai")," \u53d1\u8d77\uff0c\u5e76\u9080\u8bf7\u7231\u5947\u827a\u3001\u7a7a\u4e2d\u4e91\u6c47\u7b49\u5408\u4f5c\u4f19\u4f34\u5171\u540c\u4e3a\u5927\u5bb6\u5448\u73b0\u3002Apache APISIX PMC \u6210\u5458\u3001\u8d21\u732e\u8005\u3001\u793e\u533a\u6280\u672f\u4e13\u5bb6\u6c47\u805a\u4e00\u5802\uff0c\u5171\u540c\u63a2\u8ba8 Apache APISIX \u793e\u533a\u53d1\u5c55\u3001\u884c\u4e1a\u5b9e\u8df5\u7b49\u8bdd\u9898\u3002")),(0,n.kt)("h4",{id:"\u65f6\u95f42021-\u5e74-8-\u6708-21-\u65e5-1330"},"\u65f6\u95f4\uff1a2021 \u5e74 8 \u6708 21 \u65e5 13:30"),(0,n.kt)("h4",{id:"\u5730\u70b9\u4e0a\u6d77\u5e02\u9ec4\u6d66\u533a\u4e2d\u533a\u5e7f\u573a-6-\u697c\u9759\u548c\u5c9b\u4e8c\u671f"},"\u5730\u70b9\uff1a\u4e0a\u6d77\u5e02\u9ec4\u6d66\u533a\u4e2d\u533a\u5e7f\u573a 6 \u697c\u9759\u548c\u5c9b\u4e8c\u671f"),(0,n.kt)("h4",{id:"\u53c2\u52a0\u672c\u6b21-meetup\u4f60\u53ef\u4ee5"},"\u53c2\u52a0\u672c\u6b21 Meetup\uff0c\u4f60\u53ef\u4ee5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5171\u540c\u63a2\u8ba8 Apache APISIX \u793e\u533a\u7684\u524d\u4e16\u4eca\u751f"),(0,n.kt)("li",{parentName:"ul"},"\u542c\u7231\u5947\u827a\u79d1\u5b66\u5bb6\u8bb2\u8ff0\uff0c\u7231\u5947\u827a\u662f\u5982\u4f55\u4f7f\u7528 Apache APISIX \u652f\u6491\u8d77\u5343\u4e07\u7ea7\u8c03\u7528\u91cf\u7684\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u7a7a\u4e2d\u4e91\u6c47\u662f\u5982\u4f55\u5728\u4f7f\u7528 Apache APISIX \u65f6\u517c\u987e\u7528\u6237\u4f53\u9a8c\u3001\u6574\u6d01\u67b6\u6784\u4e0e\u6570\u636e\u4e3b\u6743"),(0,n.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u4f18\u70b9\u4ee5\u53ca\u5982\u4f55\u5728 APISIX \u4e0a\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u611f\u5174\u8da3\u7684\u8bdd\uff0c\u5343\u4e07\u4e0d\u8981\u9519\u8fc7\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u626b\u63cf\u6d3b\u52a8\u6d77\u62a5\u4e8c\u7ef4\u7801\u62a5\u540d\u5427\uff01")),(0,n.kt)("p",null,"tips\uff1a\u75ab\u60c5\u9632\u63a7\u4e0d\u653e\u677e\uff0c\u6211\u4eec\u5c06\u4f1a\u63a7\u5236\u73b0\u573a\u6d3b\u52a8\u89c4\u6a21\uff0c\u540d\u989d\u6709\u9650\uff0c\u62a5\u540d\u4ece\u901f\uff01"),(0,n.kt)("h2",{id:"\u6d3b\u52a8\u5b89\u6392"},"\u6d3b\u52a8\u5b89\u6392"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639467909853-fd9caa2e-8b45-459c-8bb7-8acb4a20692e.jpg",alt:"Apache APISIX Meetup"})),(0,n.kt)("h2",{id:"\u8bae\u9898\u4ecb\u7ecd"},"\u8bae\u9898\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"\u57fa\u4e8e-apache-apisix\u7231\u5947\u827a-api-\u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5"},"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u843d\u5730\u5b9e\u8df5"),(0,n.kt)("h4",{id:"\u5206\u4eab\u5609\u5bbe"},"\u5206\u4eab\u5609\u5bbe"),(0,n.kt)("p",null,"\u848b\u6587\u6770 / \u7231\u5947\u827a\u79d1\u5b66\u5bb6"),(0,n.kt)("h4",{id:"\u8bae\u9898\u8be6\u60c5"},"\u8bae\u9898\u8be6\u60c5"),(0,n.kt)("p",null,"API \u7f51\u5173\u5df2\u7ecf\u6210\u4e3a\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u73af\u3002\u5b83\u65e2\u627f\u62c5\u7740\u670d\u52a1\u5bf9\u5916\u7684\u552f\u4e00\u95e8\u6237\uff0c\u53c8\u9700\u8981\u6ee1\u8db3\u8bb8\u591a\u5e94\u7528\u7684\u5171\u6027\u529f\u80fd\u3002\u7231\u5947\u827a\u4f5c\u4e3a\u4e00\u5bb6\u5728\u7ebf\u89c6\u9891\u516c\u53f8\uff0c\u6bcf\u5929\u9700\u8981\u627f\u8f7d\u5343\u4e07\u7ea7\u7684\u8c03\u7528\u91cf\uff0c\u5e76\u4e14\u5bf9\u6570\u636e\u7684\u5b89\u5168\u3001\u7528\u6237\u8bf7\u6c42\u54cd\u5e94\u65f6\u6548\u3001\u7cfb\u7edf\u7684\u7a33\u5b9a\u90fd\u6709\u7740\u6781\u5176\u4e25\u683c\u7684\u8981\u6c42\uff0c\u56e0\u6b64\u516c\u53f8\u9700\u8981\u6253\u9020\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u7684 API \u7f51\u5173\u3002\u672c\u6587\u7b80\u5355\u4ecb\u7ecd\u7231\u5947\u827a API \u7f51\u5173\u7684\u67b6\u6784\u4ee5\u53ca\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u5305\u62ec\u8bf7\u6c42\u5206\u53d1\u3001\u6761\u4ef6\u8def\u7531\u3001API \u7ba1\u7406\u3001\u9650\u6d41\u7194\u65ad\u3001\u5b89\u5168\u4e09\u9632\u3001\u76d1\u63a7\u62a5\u8b66\u4ee5\u53ca\u5168\u94fe\u8def\u8ffd\u8e2a\u7b49\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528-apache-apisix-\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"},"\u5982\u4f55\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"),(0,n.kt)("h4",{id:"\u5206\u4eab\u5609\u5bbe-1"},"\u5206\u4eab\u5609\u5bbe"),(0,n.kt)("p",null,"\u6731\u6b23\u6b23 / api7.ai \u5de5\u7a0b\u5e08\uff0cApache APISIX Committer"),(0,n.kt)("h4",{id:"\u8bae\u9898\u8be6\u60c5-1"},"\u8bae\u9898\u8be6\u60c5"),(0,n.kt)("p",null,"\u8eab\u4efd\u8ba4\u8bc1\u662f\u96f6\u4fe1\u4efb\u67b6\u6784\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u73af\u3002\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u53ef\u4ee5\u6709\u6548\u4fdd\u62a4\u670d\u52a1\uff0c\u907f\u514d\u672a\u7ecf\u6388\u6743\u7684\u6076\u610f\u8bbf\u95ee\uff0c\u6570\u636e\u6cc4\u6f0f\u4ee5\u53ca\u9ed1\u5ba2\u653b\u51fb\u3002APISIX \u4f5c\u4e3a\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u652f\u6301\u4e30\u5bcc\u7684\u8eab\u4efd\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u672c\u6b21\u5206\u4eab\u5c06\u4ecb\u7ecd\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7684\u4f18\u70b9\u548c\u5982\u4f55\u5728 APISIX \u4e0a\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u3002"),(0,n.kt)("h3",{id:"\u6570\u636e\u4e3b\u6743\u4e0e-apache-apisix-\u7f51\u5173\u843d\u5730\u5b9e\u8df5"},"\u6570\u636e\u4e3b\u6743\u4e0e Apache APISIX \u7f51\u5173\u843d\u5730\u5b9e\u8df5"),(0,n.kt)("h4",{id:"\u5206\u4eab\u5609\u5bbe-2"},"\u5206\u4eab\u5609\u5bbe"),(0,n.kt)("p",null,"\u674e\u6768 / \u7a7a\u4e2d\u4e91\u6c47\u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba"),(0,n.kt)("h4",{id:"\u8bae\u9898\u8be6\u60c5-2"},"\u8bae\u9898\u8be6\u60c5"),(0,n.kt)("p",null,"\u6570\u636e\u65e0\u5904\u4e0d\u5728\uff0c\u6bcf\u65f6\u6bcf\u523b\u90fd\u6709\u6d77\u91cf\u6570\u636e\u5728\u4e16\u754c\u5404\u5730\u88ab\u5904\u7406\u3001\u4f20\u8f93\u3001\u5b58\u50a8\u3002\u7136\u800c\u6570\u636e\u4e16\u754c\u4e0d\u662f\u6cd5\u5916\u4e4b\u5730\uff0c\u6570\u636e\u7684\u6536\u96c6\u4e0e\u5904\u7406\u5fc5\u987b\u9075\u7167\u5404\u56fd\u6cd5\u5f8b\u6267\u884c\u3002\u8fd9\u4e3a\u4f01\u4e1a\u7684\u6280\u672f\u67b6\u6784\u63d0\u51fa\u4e86\u5de8\u5927\u7684\u6311\u6218\uff0c\u5982\u4f55\u517c\u987e\u7528\u6237\u4f53\u9a8c\u3001\u6574\u6d01\u67b6\u6784\u4e0e\u6570\u636e\u4e3b\u6743\uff1fAPI \u7f51\u5173\u5728\u4f01\u4e1a\u67b6\u6784\u4e2d\u5177\u6709\u7279\u6b8a\u5730\u4f4d\uff0c\u4e5f\u56e0\u6b64\u80fd\u5728\u6570\u636e\u4e3b\u6743\u573a\u666f\u4e0b\u8d77\u5230\u7279\u6b8a\u91cd\u8981\u7684\u4f5c\u7528\u3002"),(0,n.kt)("h3",{id:"\u72ec\u884c\u8005\u901f\u4f17\u884c\u8005\u8fdcapache-apisix-\u611f\u6069\u6709\u4f60"},"\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\uff0cApache APISIX \u611f\u6069\u6709\u4f60"),(0,n.kt)("h4",{id:"\u5206\u4eab\u5609\u5bbe-3"},"\u5206\u4eab\u5609\u5bbe"),(0,n.kt)("p",null,"\u738b\u9662\u751f / api7.ai \u8054\u5408\u521b\u59cb\u4eba & CTO"),(0,n.kt)("h4",{id:"\u8bae\u9898\u8be6\u60c5-3"},"\u8bae\u9898\u8be6\u60c5"),(0,n.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u77ed\u77ed\u4e24\u5e74\u65f6\u95f4\u4ea7\u54c1\u591a\u9879\u6280\u672f\u6307\u6807\u5305\u63fd\u7b2c\u4e00\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3 API \u7f51\u5173\u9879\u76ee\uff0c\u5e76\u786e\u5b9a\u4e86\u4e13\u5c5e\u4e8e Apache APISIX \u7684\u9053\u8def\uff1a\u7edf\u4e00 7 \u5c42\u6d41\u91cf\u5904\u7406\u3002\u4e00\u4e2a\u4eba\u53ef\u80fd\u8d70\u7684\u5f88\u5feb\uff0c\u4e00\u7fa4\u4eba\u624d\u80fd\u8d70\u7684\u66f4\u8fdc\uff0cApache APISIX \u6210\u957f\u4e4b\u8def\u611f\u6069\u6709\u4f60\u3002"),(0,n.kt)("h2",{id:"\u5468\u8fb9\u798f\u5229"},"\u5468\u8fb9\u798f\u5229"),(0,n.kt)("p",null,"\u53c2\u52a0 Meetup\uff0c\u4e0e\u8bb2\u5e08\u4e92\u52a8\uff0c\u6709\u673a\u4f1a\u83b7\u5f97 Apache APISIX \u6700\u65b0\u5468\u8fb9\uff1a\u8d85\u5927\u9f20\u6807\u57ab\u3001\u7cbe\u81f4\u9a6c\u514b\u676f\u3001Apache APISIX \u5fbd\u7ae0\u3001\u5b9a\u5236\u96e8\u4f1e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639468073361-021ba09a-69bb-47ac-a852-e879c3109a9a.jpg",alt:"Apache APISIX Gift"})),(0,n.kt)("h2",{id:"\u53c2\u4e0e\u65b9\u5f0f"},"\u53c2\u4e0e\u65b9\u5f0f"),(0,n.kt)("h3",{id:"\u73b0\u573a\u62a5\u540d"},"\u73b0\u573a\u62a5\u540d"),(0,n.kt)("p",null,"\u626b\u63cf\u4e0a\u65b9\u6d3b\u52a8\u6d77\u62a5\u4e8c\u7ef4\u7801\u5373\u53ef\u62a5\u540d\uff01"),(0,n.kt)("h3",{id:"\u7ebf\u4e0a\u76f4\u64ad"},"\u7ebf\u4e0a\u76f4\u64ad"),(0,n.kt)("p",null,"\u5982\u679c\u4e0d\u80fd\u5230\u73b0\u573a\u53c2\u52a0 Meetup\uff0c\u5173\u6ce8 Apache APISIX \u89c6\u9891\u53f7\u89c2\u770b\u76f4\u64ad\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639467967121-2fff2f38-7949-4ea5-be55-7a3bf47b2bd5.png",alt:"Apache APISIX Live"})),(0,n.kt)("h2",{id:"\u5165\u7fa4\u4ea4\u6d41"},"\u5165\u7fa4\u4ea4\u6d41"),(0,n.kt)("p",null,"\u6b22\u8fce\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u5728\u540e\u53f0\u56de\u590d\u5173\u952e\u5b57\u201c\u4e0a\u6d77\u201d\uff0c\u52a0\u5165 Apache APISIX \u4e0a\u6d77\u4ea4\u6d41\u7fa4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639468019348-d2d555ab-e860-41a4-9efa-f383eb0c0069.png",alt:"Apache APISIX wechat"})))}o.isMDXComponent=!0}}]);