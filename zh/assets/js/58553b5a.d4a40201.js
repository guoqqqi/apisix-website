"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[25033],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,d=m["".concat(o,".").concat(h)]||m[h]||s[h]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(25773),r=(a(27378),a(35318));const l={title:"Apache APISIX 3.6.0 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://avatars.githubusercontent.com/u/79972061?v=4"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://avatars.githubusercontent.com/u/39619599?v=4"}],keywords:["Apache APISIX","API Gateway","API Management Platform","New Release","Cloud Native"],description:"Apache APISIX 3.6.0 \u7248\u672c\u4e8e 2023 \u5e74 10 \u6708 5 \u65e5\u53d1\u5e03\u3002\u8be5\u7248\u672c\u5e26\u6765\u4e86\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u4fee\u590d\uff0c\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316\u3002",tags:["Community"]},i=void 0,p={permalink:"/zh/blog/2023/10/05/release-apache-apisix-3.6.0",source:"@site/blog/2023/10/05/release-apache-apisix-3.6.0.md",title:"Apache APISIX 3.6.0 \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX 3.6.0 \u7248\u672c\u4e8e 2023 \u5e74 10 \u6708 5 \u65e5\u53d1\u5e03\u3002\u8be5\u7248\u672c\u5e26\u6765\u4e86\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u4fee\u590d\uff0c\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316\u3002",date:"2023-10-05T00:00:00.000Z",formattedDate:"2023\u5e7410\u67085\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:4.155,truncated:!0,authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://avatars.githubusercontent.com/u/79972061?v=4",imageURL:"https://avatars.githubusercontent.com/u/79972061?v=4"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://avatars.githubusercontent.com/u/39619599?v=4",imageURL:"https://avatars.githubusercontent.com/u/39619599?v=4"}],prevItem:{title:"APISIX \u65b0\u7279\u6027\u4e4b GitOps \u58f0\u660e\u5f0f\u914d\u7f6e",permalink:"/zh/blog/2023/10/07/apisix-gitops-adc"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (9.11 - 9.24)",permalink:"/zh/blog/2023/09/26/bi-weekly report"}},o={authorsImageUrls:[void 0,void 0]},c=[{value:"\u91cd\u5927\u53d8\u66f4",id:"\u91cd\u5927\u53d8\u66f4",children:[{value:"\u79fb\u9664 APISIX \u548c etcd \u4e4b\u95f4\u7684 gRPC \u901a\u4fe1\u652f\u6301",id:"\u79fb\u9664-apisix-\u548c-etcd-\u4e4b\u95f4\u7684-grpc-\u901a\u4fe1\u652f\u6301",children:[],level:3},{value:"\u79fb\u9664 Conf Server",id:"\u79fb\u9664-conf-server",children:[],level:3},{value:"\u5bf9 APISIX \u6838\u5fc3\u8d44\u6e90\u8fdb\u884c\u4e25\u683c\u9a8c\u8bc1",id:"\u5bf9-apisix-\u6838\u5fc3\u8d44\u6e90\u8fdb\u884c\u4e25\u683c\u9a8c\u8bc1",children:[],level:3}],level:2},{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[{value:"\u652f\u6301\u4f7f\u7528\u672c\u5730 DNS \u89e3\u6790\u5668\u8fdb\u884c\u670d\u52a1\u53d1\u73b0",id:"\u652f\u6301\u4f7f\u7528\u672c\u5730-dns-\u89e3\u6790\u5668\u8fdb\u884c\u670d\u52a1\u53d1\u73b0",children:[],level:3},{value:"\u652f\u6301\u76f4\u63a5\u8f6c\u53d1 Dubbo \u6d41\u91cf",id:"\u652f\u6301\u76f4\u63a5\u8f6c\u53d1-dubbo-\u6d41\u91cf",children:[],level:3},{value:"\u5728 <code>opentelemetry</code> \u63d2\u4ef6\u4e2d\u652f\u6301 NGINX \u53d8\u91cf",id:"\u5728-opentelemetry-\u63d2\u4ef6\u4e2d\u652f\u6301-nginx-\u53d8\u91cf",children:[],level:3},{value:"\u5728\u5916\u90e8\u63d2\u4ef6\u4e2d\u652f\u6301\u5bf9\u8bf7\u6c42\u4f53\u8fdb\u884c\u91cd\u5199",id:"\u5728\u5916\u90e8\u63d2\u4ef6\u4e2d\u652f\u6301\u5bf9\u8bf7\u6c42\u4f53\u8fdb\u884c\u91cd\u5199",children:[],level:3}],level:2},{value:"\u5176\u4ed6\u66f4\u65b0",id:"\u5176\u4ed6\u66f4\u65b0",children:[],level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",children:[],level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 Apache APISIX 3.6.0 \u7248\u672c\u5df2\u7ecf\u53d1\u5e03\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u4fee\u590d\uff0c\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316\u3002"),(0,r.kt)("p",null,"\u8be5\u7248\u672c\u589e\u52a0\u4e86\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u5305\u62ec\u652f\u6301\u5728\u670d\u52a1\u53d1\u73b0\u4e2d\u4f7f\u7528\u672c\u5730 DNS \u89e3\u6790\u5668\u3001\u8f6c\u53d1 Dubbo \u6d41\u91cf\u3001\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u4e2d\u4f7f\u7528 NGINX \u53d8\u91cf\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8be5\u7248\u672c\u8fd8\u5305\u542b\u4e86\u4e00\u4e9b\u91cd\u8981\u7684\u53d8\u66f4\u3002\u5982\u679c\u60a8\u53d1\u73b0\u8fd9\u4e9b\u53d8\u66f4\u4f1a\u5bf9\u60a8\u7684\u4f7f\u7528\u4ea7\u751f\u5f71\u54cd\uff0c\u8bf7\u8fdb\u884c\u76f8\u5e94\u7684\u8ba1\u5212\u5347\u7ea7\u3002"),(0,r.kt)("h2",{id:"\u91cd\u5927\u53d8\u66f4"},"\u91cd\u5927\u53d8\u66f4"),(0,r.kt)("h3",{id:"\u79fb\u9664-apisix-\u548c-etcd-\u4e4b\u95f4\u7684-grpc-\u901a\u4fe1\u652f\u6301"},"\u79fb\u9664 APISIX \u548c etcd \u4e4b\u95f4\u7684 gRPC \u901a\u4fe1\u652f\u6301"),(0,r.kt)("p",null,"\u8be5\u7248\u672c\u79fb\u9664\u4e86 APISIX \u548c etcd \u4e4b\u95f4\u7684 gRPC \u901a\u4fe1\uff0c\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u79fb\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd.use_grpc")," \u914d\u7f6e\u9879\u3002\u8be5\u53d8\u66f4\u4fee\u590d\u4e86\u4e00\u4e9bbugs\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u76ee\u524d\u6b63\u5728\u4f7f\u7528 gRPC \u4f5c\u4e3a APISIX \u548c etcd \u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u8bf7\u8ba1\u5212\u53d8\u66f4\u81f3 HTTP\u3002"),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/b69vjkbdszdtk9y30k45c2tvg4f3hqwt"},"\u53d8\u66f4\u63d0\u6848"),"\u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10015"},"PR #10015"),"\u3002"),(0,r.kt)("h3",{id:"\u79fb\u9664-conf-server"},"\u79fb\u9664 Conf Server"),(0,r.kt)("p",null,"\u5728\u79fb\u9664\u4e86 APISIX \u548c etcd \u4e4b\u95f4\u7684 gRPC \u652f\u6301\u7684\u540c\u65f6\uff0c\u4e00\u5e76\u79fb\u9664 Conf server\u3002\u8be5\u53d8\u66f4\u4fee\u590d\u4e86\u4e00\u4e9bbugs\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u76ee\u524d\u6b63\u5728\u4ee5\u89e3\u8026\u6a21\u5f0f\u90e8\u7f72APISIX\uff0c\u8bf7\u6ce8\u610f\u5728\u8fd9\u4e2a\u7248\u672c\u4e2d\uff0c\u6570\u636e\u5e73\u9762\uff08DP\uff09APISIX\u5b9e\u4f8b\u4e0d\u518d\u76f4\u63a5\u4e0e\u63a7\u5236\u5e73\u9762\uff08CP\uff09APISIX\u5b9e\u4f8b\u901a\u4fe1\u3002\u73b0\u5728\uff0c\u4e24\u4e2a\u5b9e\u4f8b\u90fd\u4e0eetcd\u8fdb\u884c\u901a\u4fe1\u3002\u8bf7\u6839\u636e\u89e3\u8026\u6a21\u5f0f\u6587\u6863\u8ba1\u5212\u76f8\u5e94\u7684\u914d\u7f6e\u53d8\u66f4\u3002"),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/b69vjkbdszdtk9y30k45c2tvg4f3hqwt"},"\u53d8\u66f4\u63d0\u6848"),"\u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10012"},"PR #10012"),"\u3002"),(0,r.kt)("h3",{id:"\u5bf9-apisix-\u6838\u5fc3\u8d44\u6e90\u8fdb\u884c\u4e25\u683c\u9a8c\u8bc1"},"\u5bf9 APISIX \u6838\u5fc3\u8d44\u6e90\u8fdb\u884c\u4e25\u683c\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u5bf9\u6838\u5fc3\u8d44\u6e90\u8fdb\u884c\u4e25\u683c\u9a8c\u8bc1\u3002\u8fd9\u610f\u5473\u7740\u5728\u914d\u7f6e upstream \u65f6\uff0c\u60a8\u6dfb\u52a0\u7684\u4efb\u4f55\u81ea\u5b9a\u4e49\u5b57\u6bb5\u5fc5\u987b\u7b26\u5408\u5b9a\u4e49\u7684\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u914d\u7f6e\u4e00\u4e2a\u8fd9\u6837\u7684\u4e0a\u6e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 -X PUT \\\n  -H "X-API-KEY: ${ADMIN_API_KEY}" \\\n  -d \'{\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:8080": 1\n    },\n    "custom_field": "this_is_not_allowed"\n  }\'\n')),(0,r.kt)("p",null,"\u60a8\u4f1a\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"400")," \u54cd\u5e94\u548c\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"error_msg":"invalid configuration: additional properties forbidden found .*"\\}\n')),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10233"},"PR #10233"),"\u3002"),(0,r.kt)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,r.kt)("h3",{id:"\u652f\u6301\u4f7f\u7528\u672c\u5730-dns-\u89e3\u6790\u5668\u8fdb\u884c\u670d\u52a1\u53d1\u73b0"},"\u652f\u6301\u4f7f\u7528\u672c\u5730 DNS \u89e3\u6790\u5668\u8fdb\u884c\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684\u9009\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"resolv_conf"),"\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u6307\u5b9a\u5305\u542b\u672c\u5730DNS\u89e3\u6790\u5668\u5217\u8868\u7684\u6587\u4ef6\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u60a8\u5e94\u8be5\u53ea\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"servers")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"resolv_conf")," \u5176\u4e2d\u4e00\u4e2a\u9009\u9879\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'discovery:\n  dns:\n    # servers:\n    #  - "127.0.0.1:8600"          # Address of DNS server.\n    resolv_conf: /etc/resolv.conf  # Path to the local DNS resolver config.\n')),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9770"},"PR #9770"),"\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301\u76f4\u63a5\u8f6c\u53d1-dubbo-\u6d41\u91cf"},"\u652f\u6301\u76f4\u63a5\u8f6c\u53d1 Dubbo \u6d41\u91cf"),(0,r.kt)("p",null,"APISIX \u63d0\u4f9b\u4e86\u5bf9 Dubbo \u6d41\u91cf\u7684\u76f4\u63a5\u8f6c\u53d1\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9660"},"PR #9660"),"\u3002"),(0,r.kt)("h3",{id:"\u5728-opentelemetry-\u63d2\u4ef6\u4e2d\u652f\u6301-nginx-\u53d8\u91cf"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"h3"},"opentelemetry")," \u63d2\u4ef6\u4e2d\u652f\u6301 NGINX \u53d8\u91cf"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u4e2d\u652f\u6301\u4f7f\u7528 NGINX \u53d8\u91cf\u3002\u4f8b\u5982\u60a8\u53ef\u4ee5\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'http:\n  enable_access_log: true\n  access_log: "/dev/stdout"\n  access_log_format: \'{"time": "$time_iso8601","opentelemetry_context_traceparent": "$opentelemetry_context_traceparent","opentelemetry_trace_id": "$opentelemetry_trace_id","opentelemetry_span_id": "$opentelemetry_span_id","remote_addr": "$remote_addr","uri": "$uri"}\'\n  access_log_format_escape: json\nplugins:\n  - opentelemetry\nplugin_attr:\n  opentelemetry:\n    set_ngx_var: true\n')),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8871"},"PR #8871"),"\u3002"),(0,r.kt)("h3",{id:"\u5728\u5916\u90e8\u63d2\u4ef6\u4e2d\u652f\u6301\u5bf9\u8bf7\u6c42\u4f53\u8fdb\u884c\u91cd\u5199"},"\u5728\u5916\u90e8\u63d2\u4ef6\u4e2d\u652f\u6301\u5bf9\u8bf7\u6c42\u4f53\u8fdb\u884c\u91cd\u5199"),(0,r.kt)("p",null,"\u5728\u5916\u90e8\u63d2\u4ef6\uff08\u5373\u975e Lua \u63d2\u4ef6\uff09\u4e2d\u652f\u6301\u5bf9\u8bf7\u6c42\u4f53\u8fdb\u884c\u91cd\u5199\u3002"),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9990"},"PR #9990"),"\u3002"),(0,r.kt)("h2",{id:"\u5176\u4ed6\u66f4\u65b0"},"\u5176\u4ed6\u66f4\u65b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u8bbf\u95ee\u65e5\u5fd7\u7684\u7f13\u51b2\u533a\u5927\u5c0f (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10225"},"PR #10225"),")"),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5b89\u88c5\u8fc7\u7a0b Rust \u4f9d\u8d56 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10121"},"PR #10121"),")"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"traffic-split")," \u63d2\u4ef6\u4e2d\u652f\u6301 HTTPS (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/9115"},"PR #9115"),")"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"chaitin-waf")," \u63d2\u4ef6\u4e2d\u652f\u6301\u4f7f\u7528 UNIX sock \u4e3b\u673a\u6a21\u5f0f (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10161"},"PR #10161"),")"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u590d GraphQL POST \u8bf7\u6c42\u8def\u7531\u5339\u914d\u5f02\u5e38 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10198"},"PR #10198"),")"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u590d ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy-cache")," \u63d2\u4ef6\u4e2d\u914d\u7f6e\u65e0\u6548 ",(0,r.kt)("inlineCode",{parentName:"li"},"cache_zone")," \u65f6\u7684\u62a5\u9519 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10138"},"PR #10138"),")")),(0,r.kt)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.kt)("p",null,"\u6709\u5173\u6b64\u7248\u672c\u4e2d\u66f4\u6539\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/CHANGELOG.md#360"},"\u53d8\u66f4\u65e5\u5fd7"),"\u3002"))}s.isMDXComponent=!0}}]);