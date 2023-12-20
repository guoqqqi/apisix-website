"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[55975],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return a?i.createElement(d,o(o({ref:t},c),{},{components:a})):i.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},98321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=a(25773),n=(a(27378),a(35318));const r={title:"Release Apache APISIX 3.7.0",authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://github.com/AlinsRan.png"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://github.com/kayx23.png"}],keywords:["Apache APISIX","API Gateway","API Management Platform","New Release","Cloud Native"],description:"The Apache APISIX 3.7.0 version is released on November 21, 2023. This release includes a few breaking changes, new features, and bug fixes.",tags:["Community"]},o=void 0,p={permalink:"/blog/2023/11/21/release-apache-apisix-3.7.0",source:"@site/blog/2023/11/21/release-apache-apisix-3.7.0.md",title:"Release Apache APISIX 3.7.0",description:"The Apache APISIX 3.7.0 version is released on November 21, 2023. This release includes a few breaking changes, new features, and bug fixes.",date:"2023-11-21T00:00:00.000Z",formattedDate:"November 21, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.21,truncated:!0,authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://github.com/AlinsRan.png",imageURL:"https://github.com/AlinsRan.png"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://github.com/kayx23.png",imageURL:"https://github.com/kayx23.png"}],nextItem:{title:"Biweekly Report (October 23 - November 05)",permalink:"/blog/2023/11/08/bi-weekly-report"}},l={authorsImageUrls:[void 0,void 0]},s=[{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Restrict modification to create time and update time of core resources",id:"restrict-modification-to-create-time-and-update-time-of-core-resources",children:[],level:3},{value:"Remove <code>exptime</code>, <code>validity_start</code>, and <code>validity_end</code> attributes from SSL schema",id:"remove-exptime-validity_start-and-validity_end-attributes-from-ssl-schema",children:[],level:3},{value:"Update <code>opentelemetry</code> plugin attributes to beter follow the specifications",id:"update-opentelemetry-plugin-attributes-to-beter-follow-the-specifications",children:[],level:3}],level:2},{value:"New Features",id:"new-features",children:[{value:"Support ACL tokens for Consul discovery",id:"support-acl-tokens-for-consul-discovery",children:[],level:3},{value:"Support configuring services for stream routes",id:"support-configuring-services-for-stream-routes",children:[],level:3},{value:"Support authorization parameters in <code>openid-connect</code> plugin",id:"support-authorization-parameters-in-openid-connect-plugin",children:[],level:3},{value:"Support setting variables in <code>zipkin</code> plugin",id:"support-setting-variables-in-zipkin-plugin",children:[],level:3},{value:"Support Nacos AK/SK authentication",id:"support-nacos-aksk-authentication",children:[],level:3}],level:2},{value:"Other Updates",id:"other-updates",children:[],level:2},{value:"Changelog",id:"changelog",children:[],level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are glad to present Apache APISIX 3.7.0 with exciting new features, bug fixes, and other improvements to user experiences."),(0,n.kt)("p",null,"This new release adds a number of new features, including the support for ACL tokens for Consul service discovery, authorization parameters in ",(0,n.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin, Nacos AK/SK authentication, and more."),(0,n.kt)("p",null,"There are also a few important changes included in this release. Should you find these changes impacting your operations, please plan your upgrade accordingly."),(0,n.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,n.kt)("h3",{id:"restrict-modification-to-create-time-and-update-time-of-core-resources"},"Restrict modification to create time and update time of core resources"),(0,n.kt)("p",null,"In the earlier versions, modifying resources' ",(0,n.kt)("inlineCode",{parentName:"p"},"create_time")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"update_time")," was unrestricted with Admin API. This behaviour is unneeded and prone to risks. Starting from 3.7.0, users would not be allowed to modify these timestamps."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/968kp7hd6zcg7ty2clomkbshmd53v71d"},"change proposal")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10232"},"PR #10232"),"."),(0,n.kt)("h3",{id:"remove-exptime-validity_start-and-validity_end-attributes-from-ssl-schema"},"Remove ",(0,n.kt)("inlineCode",{parentName:"h3"},"exptime"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"validity_start"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"validity_end")," attributes from SSL schema"),(0,n.kt)("p",null,"Remove ",(0,n.kt)("inlineCode",{parentName:"p"},"exptime"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"validity_start"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"validity_end")," attributes from SSL schema as these information are present in the certificate."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/8l4h8f6wcv482s0b7vt17do5z3g1y3o3"},"change proposal")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10323"},"PR #10323"),"."),(0,n.kt)("h3",{id:"update-opentelemetry-plugin-attributes-to-beter-follow-the-specifications"},"Update ",(0,n.kt)("inlineCode",{parentName:"h3"},"opentelemetry")," plugin attributes to beter follow the specifications"),(0,n.kt)("p",null,"Replace attributes ",(0,n.kt)("inlineCode",{parentName:"p"},"route")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"apisix.route_name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"apisix.service_name")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"opentelemetry")," plugin to follow the OpenTelemetry specifications for span name. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10393"},"PR #10393"),"."),(0,n.kt)("h2",{id:"new-features"},"New Features"),(0,n.kt)("h3",{id:"support-acl-tokens-for-consul-discovery"},"Support ACL tokens for Consul discovery"),(0,n.kt)("p",null,"Support for ACL tokens when using Consul or Consul KV service discovery. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10278"},"PR #10278"),"."),(0,n.kt)("h3",{id:"support-configuring-services-for-stream-routes"},"Support configuring services for stream routes"),(0,n.kt)("p",null,"Support referencing services in stream routes to configure upstreams. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10298"},"PR #10298"),"."),(0,n.kt)("h3",{id:"support-authorization-parameters-in-openid-connect-plugin"},"Support authorization parameters in ",(0,n.kt)("inlineCode",{parentName:"h3"},"openid-connect")," plugin"),(0,n.kt)("p",null,"Support additional authorization parameters in the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization_params")," attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10058"},"PR #10058"),"."),(0,n.kt)("h3",{id:"support-setting-variables-in-zipkin-plugin"},"Support setting variables in ",(0,n.kt)("inlineCode",{parentName:"h3"},"zipkin")," plugin"),(0,n.kt)("p",null,"Support setting variables in zipkin plugin to expose the span information during the rewrite phase. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wizhuo/apisix/blob/master/docs/en/latest/plugins/zipkin.md#variables"},"documentation")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10361"},"PR #10361"),"."),(0,n.kt)("h3",{id:"support-nacos-aksk-authentication"},"Support Nacos AK/SK authentication"),(0,n.kt)("p",null,"Support Nacos AK/SK authentication. The access key and secret key can be configured in the configuration file as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'discovery:\n  nacos:\n    ...\n    access_key: ""    # Nacos AccessKey ID\n    secret_key: ""    # Nacos AccessKey Secret\n')),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10445"},"PR #10445"),"."),(0,n.kt)("h2",{id:"other-updates"},"Other Updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix ",(0,n.kt)("inlineCode",{parentName:"li"},"post_arg_*")," variable matching failure when the POST form ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Type")," is appended with character set (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10372"},"PR #10372"),")"),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"apisix-runtime")," as the default APISIX runtime (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10415"},"PR #10415")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10427"},"PR #10427"),")"),(0,n.kt)("li",{parentName:"ul"},"Add tests for ",(0,n.kt)("inlineCode",{parentName:"li"},"authz-keycloak")," with apisix secrets (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10353"},"PR #10353"),")"),(0,n.kt)("li",{parentName:"ul"},"Keep healthcheck target state when upstream changes (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10312"},"PR #10312")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/10307"},"PR #10307"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix incomplete log compression due to timeout in the ",(0,n.kt)("inlineCode",{parentName:"li"},"log-rotate")," plugin  (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8620"},"PR #8620"),")")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("p",null,"For a complete list of changes in this release, please see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/CHANGELOG.md#370"},"CHANGELOG"),"."))}u.isMDXComponent=!0}}]);