"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35104],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=o,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u5982\u4f55\u4f7f\u7528 Kubernetes \u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u5f39\u6027\u4f38\u7f29",authors:[{name:"\u5f20\u664b\u6d9b",title:"Author",url:"https://github.com/tao12345666333",image_url:"https://github.com/tao12345666333.png"}],keywords:["APISIX Ingress","Ingress","Ingress Controller","\u4e91\u539f\u751f","Kubernetes","Gateway API"],description:"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002",tags:["Ecosystem"]},l=void 0,i={permalink:"/zh/blog/2023/02/21/how-to-scale-application-elastically-in-kubernetes",source:"@site/blog/2023/02/21/how-to-scale-application-elastically-in-kubernetes.md",title:"\u5982\u4f55\u4f7f\u7528 Kubernetes \u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u5f39\u6027\u4f38\u7f29",description:"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002",date:"2023-02-21T00:00:00.000Z",formattedDate:"2023\u5e742\u670821\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.14,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",title:"Author",url:"https://github.com/tao12345666333",image_url:"https://github.com/tao12345666333.png",imageURL:"https://github.com/tao12345666333.png"}],prevItem:{title:"APISIX \u662f\u600e\u4e48\u4fdd\u62a4\u7528\u6237\u7684\u654f\u611f\u6570\u636e\u4e0d\u88ab\u6cc4\u9732\u7684\uff1f",permalink:"/zh/blog/2023/02/23/how-to-prevent-sensitive-data-from-leaking"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (1.30 - 2.12)",permalink:"/zh/blog/2023/02/16/weekly-report-0216"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002")))}u.isMDXComponent=!0}}]);