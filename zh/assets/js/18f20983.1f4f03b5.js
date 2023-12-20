"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[25545],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"APISIX \u5728\u4f17\u5b89\u4fdd\u9669\u7684\u5e94\u7528\u5b9e\u8df5",author:"Sylvia",authorURL:"https://github.com/SylviaBABY",authorImageURL:"https://avatars.githubusercontent.com/u/39793568?v=4",keywords:["API \u7f51\u5173","Apache APISIX","\u4f17\u5b89\u4fdd\u9669","\u4e92\u8054\u7f51\u4fdd\u9669","Apache APISIX"],description:"\u672c\u6587\u5c06\u901a\u8fc7\u4ecb\u7ecd\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5728\u4f17\u5b89\u4fdd\u9669\u7684\u4e00\u4e9b\u4f7f\u7528\u573a\u666f\u4e0e\u5b9e\u8df5\u6848\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e\u4e92\u8054\u7f51\u4fdd\u9669\u573a\u666f\u4e0b\u7684\u7f51\u5173\u9009\u578b\u4e0e\u843d\u5730\u64cd\u4f5c\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E4%BC%97%E5%AE%89%E4%BF%9D%E9%99%A9.png"},i=void 0,c={permalink:"/zh/blog/2022/03/02/zhongan-usercase-with-apache-apisix",source:"@site/blog/2022/03/02/zhongan-usercase-with-apache-apisix.md",title:"APISIX \u5728\u4f17\u5b89\u4fdd\u9669\u7684\u5e94\u7528\u5b9e\u8df5",description:"\u672c\u6587\u5c06\u901a\u8fc7\u4ecb\u7ecd\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5728\u4f17\u5b89\u4fdd\u9669\u7684\u4e00\u4e9b\u4f7f\u7528\u573a\u666f\u4e0e\u5b9e\u8df5\u6848\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e\u4e92\u8054\u7f51\u4fdd\u9669\u573a\u666f\u4e0b\u7684\u7f51\u5173\u9009\u578b\u4e0e\u843d\u5730\u64cd\u4f5c\u3002",date:"2022-03-02T00:00:00.000Z",formattedDate:"2022\u5e743\u67082\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:13.865,truncated:!0,authors:[{name:"Sylvia",url:"https://github.com/SylviaBABY",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"GraphQL \u78b0\u649e API \u7f51\u5173 Apache APISIX\uff0c\u63d0\u5347 API \u9886\u57df\u7684\u5b89\u5168\u4e0e\u6027\u80fd",permalink:"/zh/blog/2022/03/02/apisix-integration-graphql"},nextItem:{title:"API \u7f51\u5173 APISIX Public API \u5904\u7406\u80fd\u529b\u518d\u589e\u5f3a",permalink:"/zh/blog/2022/03/01/apisix-integration-public-api-plugin"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5185\u5bb9\u6574\u7406\u81ea Apache APISIX Weekly Meeting \u4e2d\u4f17\u5b89\u4fdd\u9669\u548c\u79d1\u6280\u57fa\u7840\u67b6\u6784\u8d1f\u8d23\u4eba\u5f90\u654f\u5e26\u6765\u7684\u76f8\u5173\u5206\u4eab\u3002")))}s.isMDXComponent=!0}}]);