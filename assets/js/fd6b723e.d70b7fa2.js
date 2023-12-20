"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[20051],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),y=o,f=m["".concat(c,".").concat(y)]||m[y]||s[y]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"Biweekly Report (June 19 - July 02)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/07/03/o1PFlwn0_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E5%85%AC%E4%BC%97%E5%8F%B7%E5%A4%B4%E5%9B%BE-%E8%8B%B1%E6%96%87.png"},i=void 0,p={permalink:"/blog/2023/07/05/weekly-report",source:"@site/blog/2023/07/05/weekly-report.md",title:"Biweekly Report (June 19 - July 02)",description:"The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.",date:"2023-07-05T00:00:00.000Z",formattedDate:"July 5, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.305,truncated:!0,authors:[],prevItem:{title:'A "Tiny" APISIX Plugin',permalink:"/blog/2023/07/07/tiny-apisix-plugin"},nextItem:{title:"Connecting IoT Devices to the Cloud with APISIX MQTT Proxy",permalink:"/blog/2023/06/30/apisix-mqtt-proxy"}},c={authorsImageUrls:[]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have recently fixed and improved some features of Apache APISIX, including optimizing the use of Prometheus, fixing the body-transformer and log-rotate plugins, and adding an annotation to allow rewriting of the response header for Apache APISIX Ingress Controller. Meanwhile, We are pleased to present Apache APISIX 3.4.0 with exciting new features and performance improvements. For more details, please read this biweekly report.")))}s.isMDXComponent=!0}}]);