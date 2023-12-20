"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[66934],{35318:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),g=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=g(o),m=n,h=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return o?r.createElement(h,l(l({ref:t},u),{},{components:o})):r.createElement(h,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var g=2;g<a;g++)l[g]=o[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},65669:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var r=o(25773),n=(o(27378),o(35318));const a={title:"API \u7f51\u5173\u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Google Cloud","API \u7f51\u5173","Google Logging","APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 API \u7f51\u5173 Apache APISIX \u7684 google-cloud-logging \u63d2\u4ef6\u4e0e Google Cloud Logging \u670d\u52a1\u5bf9\u63a5\uff0c\u5e76\u5c06 Apache APISIX \u7684\u65e5\u5fd7\u4e0a\u4f20\u5230 Google \u4e91\u4e2d\u3002",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/Google-cloud.png"},l=void 0,i={permalink:"/zh/blog/2021/12/22/google-logging",source:"@site/blog/2021/12/22/google-logging.md",title:"API \u7f51\u5173\u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 API \u7f51\u5173 Apache APISIX \u7684 google-cloud-logging \u63d2\u4ef6\u4e0e Google Cloud Logging \u670d\u52a1\u5bf9\u63a5\uff0c\u5e76\u5c06 Apache APISIX \u7684\u65e5\u5fd7\u4e0a\u4f20\u5230 Google \u4e91\u4e2d\u3002",date:"2021-12-22T00:00:00.000Z",formattedDate:"2021\u5e7412\u670822\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:9.58,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Apache APISIX \u96c6\u6210 Open Policy Agent",permalink:"/zh/blog/2021/12/24/open-policy-agent"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff0812.1-12.15\uff09",permalink:"/zh/blog/2021/12/20/weekly-report-1215"}},c={authorsImageUrls:[void 0,void 0]},g=[],u={toc:g};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Google Cloud Logging \u670d\u52a1\u3002")))}p.isMDXComponent=!0}}]);