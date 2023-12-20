"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[39029],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,I=m["".concat(i,".").concat(h)]||m[h]||u[h]||l;return a?r.createElement(I,p(p({ref:t},s),{},{components:a})):r.createElement(I,p({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<l;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79115:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(25773),n=(a(27378),a(35318));const l={title:"\u793e\u533a\u53cc\u5468\u62a5 (6.19 - 7.02)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/07/03/eFGYTgLd_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E5%85%AC%E4%BC%97%E5%8F%B7%E5%A4%B4%E5%9B%BE-%E4%B8%AD%E6%96%87.png"},p=void 0,o={permalink:"/zh/blog/2023/07/05/weekly-report",source:"@site/blog/2023/07/05/weekly-report.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (6.19 - 7.02)",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2023-07-05T00:00:00.000Z",formattedDate:"2023\u5e747\u67085\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3,truncated:!0,authors:[],prevItem:{title:"APISIX \u7684\u51fa\u6d77\u5f81\u7a0b\u52bf\u5982\u7834\u7af9\uff1aAPISIX \u9a6c\u6765\u897f\u4e9a Meetup",permalink:"/zh/blog/2023/07/12/2023-apisix-meetup-malaysia"},nextItem:{title:"Release Apache APISIX 3.4.0",permalink:"/zh/blog/2023/06/30/release-apache-apisix-3.4.0"}},i={authorsImageUrls:[]},c=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd",id:"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache APISIX Ingress Controller",id:"apache-apisix-ingress-controller",children:[],level:3}],level:2},{value:"\u6700\u65b0\u535a\u5ba2\u901f\u89c8",id:"\u6700\u65b0\u535a\u5ba2\u901f\u89c8",children:[],level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u8fd1\u671f\u5bf9 Apache APISIX \u548c Apache APISIX Ingress Controller \u7684\u90e8\u5206\u529f\u80fd\u8fdb\u884c\u4e86\u4fee\u590d\u6216\u6539\u5584\uff0c\u5305\u62ec\u4f18\u5316 Prometheus\u3001\u4fee\u590d body-transformer \u548c log-rotate \u63d2\u4ef6\u3001\u65b0\u589e annotation \u5141\u8bb8\u91cd\u5199 response header\uff0c\u8be6\u60c5\u8bf7\u9605\u8bfb\u672c\u671f\u53cc\u5468\u62a5\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u53d1\u5e03\u4e86 Apache APISIX 3.4.0\u3002\u5b83\u7684\u529f\u80fd\u66f4\u52a0\u5f3a\u5927\uff0c\u6027\u80fd\u66f4\u52a0\u4f18\u8d8a\u3002")),(0,n.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,n.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,n.kt)("p",null,"\u4ece 2023.6.19 - 2023.7.02\uff0c\u6709 22 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 35 \u4e2a commit\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01"),(0,n.kt)("p",null,"\u6211\u4eec\u8fd1\u671f\u5bf9\u90e8\u5206\u529f\u80fd\u8fdb\u884c\u4e86\u4fee\u590d\u6216\u6539\u5584\uff0c\u66f4\u65b0\u5185\u5bb9\u6c47\u603b\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"APISIX \u5141\u8bb8\u81ea\u5b9a\u4e49 Prometheus \u9ed8\u8ba4 bucket\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d body-transformer \u63d2\u4ef6\u65e0\u6cd5\u6b63\u5e38\u8f6c\u6362\u7a7a\u7684 table \u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u4f7f\u7528\u81ea\u5b9a\u4e49\u540d\u79f0\u65f6 log-rotate \u63d2\u4ef6\u7684 max_kept \u914d\u7f6e\u65e0\u6cd5\u751f\u6548\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"APISIX Ingress Controller \u65b0\u589e annotation \u5141\u8bb8\u91cd\u5199 response header\u3002"))),(0,n.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,n.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/07/21/V68ySc8U_0619-0702.png",alt:"\u8d21\u732e\u8005\u540d\u5355"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/07/07/M3P3D5AP_%E6%96%B0%E6%99%8B%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A5.png",alt:"\u65b0\u664b\u8d21\u732e\u8005"})),(0,n.kt)("h2",{id:"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd"},"\u8fd1\u671f\u4eae\u70b9\u529f\u80fd"),(0,n.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9673"},"APISIX \u5141\u8bb8\u81ea\u5b9a\u4e49 prometheus \u9ed8\u8ba4 bucket"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jiangfucheng"},"jiangfucheng"),"\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9669"},"\u4fee\u590d body-transformer \u63d2\u4ef6\u65e0\u6cd5\u6b63\u5e38\u8f6c\u6362\u7a7a\u7684 table \u95ee\u9898"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kingluo"},"kingluo"),"\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9749"},"\u4fee\u590d\u4f7f\u7528\u81ea\u5b9a\u4e49\u540d\u79f0\u65f6 log-rotate \u63d2\u4ef6\u7684 max_kept \u914d\u7f6e\u65e0\u6cd5\u751f\u6548\u95ee\u9898"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/monkeyDluffy6017"},"monkeyDluffy6017"),"\uff09"))),(0,n.kt)("h3",{id:"apache-apisix-ingress-controller"},"Apache APISIX Ingress Controller"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/1861"},"APISIX Ingress Controller \u65b0\u589e annotation \u5141\u8bb8\u91cd\u5199 response header"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Revolyssup"},"Revolyssup"),"\uff09")),(0,n.kt)("h2",{id:"\u6700\u65b0\u535a\u5ba2\u901f\u89c8"},"\u6700\u65b0\u535a\u5ba2\u901f\u89c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2023/06/30/release-apache-apisix-3.4.0/"},"Release Apache APISIX 3.4.0")),(0,n.kt)("p",{parentName:"li"},"\u6b64\u7248\u672c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6 loki-logger\uff0c\u53ef\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230 Grafana Loki\uff0c\u5e76\u5141\u8bb8\u5728\u8def\u7531\u7ea7\u522b\u4e0a\u5efa\u7acb mTLS \u8fde\u63a5\u3002\u6b64\u5916\uff0c\u6b64\u7248\u672c\u8fd8\u8fd8\u5f15\u5165\u4e86\u8bb8\u591a\u65b0\u7684\u7279\u6027\uff0c\u65e8\u5728\u4f18\u5316\u5bf9 APISIX \u7684\u4f7f\u7528\u4f53\u9a8c\u3002"))),(0,n.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 Issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 Issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e Issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"))}u.isMDXComponent=!0}}]);