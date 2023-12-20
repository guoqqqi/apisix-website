"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return r?i.createElement(m,a(a({ref:t},c),{},{components:r})):i.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30108:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={title:"FAQ"},a=void 0,s={unversionedId:"FAQ",id:"version-1.2.0/FAQ",isDocsHomePage:!1,title:"FAQ",description:"All resource objects are uniquely determined by the namespace / name / port combination Id. If the combined Id is the same, the service and upstream will be considered as a binding relationship.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.2.0/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/zh/docs/ingress-controller/1.2.0/FAQ",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.2.0/docs/zh/latest/FAQ.md",tags:[],version:"1.2.0",frontMatter:{title:"FAQ"},sidebar:"version-1.2.0/docs",previous:{title:"Contributing to apisix-ingress-controller",permalink:"/zh/docs/ingress-controller/1.2.0/contribute"}},l=[{value:"1. How to bind Service and Upstream",id:"1-how-to-bind-service-and-upstream",children:[]},{value:"2. When modifying a CRD, how do other binding objects perceive it",id:"2-when-modifying-a-crd-how-do-other-binding-objects-perceive-it",children:[]},{value:"3. Can I mix CRDs and admin api to define routing rules",id:"3-can-i-mix-crds-and-admin-api-to-define-routing-rules",children:[]},{value:"4. Why there are some error logs like &quot;list upstreams failed, err: http get failed, url: blahblahblah, err: status: 401&quot;",id:"4-why-there-are-some-error-logs-like-list-upstreams-failed-err-http-get-failed-url-blahblahblah-err-status-401",children:[]},{value:"5. Failed to create route with <code>ApisixRoute</code>",id:"5-failed-to-create-route-with-apisixroute",children:[]},{value:"6. What is the retry rule of <code>apisix-ingress-controller</code>",id:"6-what-is-the-retry-rule-of-apisix-ingress-controller",children:[]},{value:"7. What if the CRDs need to be updated when you upgrading apisix-ingress-controller",id:"7-what-if-the-crds-need-to-be-updated-when-you-upgrading-apisix-ingress-controller",children:[]}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-how-to-bind-service-and-upstream"},"1. How to bind Service and Upstream"),(0,n.kt)("p",null,"All resource objects are uniquely determined by the namespace / name / port combination Id. If the combined Id is the same, the ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"upstream")," will be considered as a binding relationship."),(0,n.kt)("h3",{id:"2-when-modifying-a-crd-how-do-other-binding-objects-perceive-it"},"2. When modifying a CRD, how do other binding objects perceive it"),(0,n.kt)("p",null,"This is a cascading update problem, see for details ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.2.0/design"},"apisix-ingress-controller Design ideas")),(0,n.kt)("h3",{id:"3-can-i-mix-crds-and-admin-api-to-define-routing-rules"},"3. Can I mix CRDs and admin api to define routing rules"),(0,n.kt)("p",null,"No, currently we are implementing one-way synchronization, that is, CRDs file -> Apache AIPSIX. If the configuration is modified separately through admin api, it will not be synchronized to CRDs in Kubernetes."),(0,n.kt)("p",null,"This is because CRDs are generally declared in the file system, and Apply to enter Kubernetes etcd, we follow the definition of CRDs and synchronize to Apache Apisix Data Plane, but the reverse will make the situation more complicated."),(0,n.kt)("h3",{id:"4-why-there-are-some-error-logs-like-list-upstreams-failed-err-http-get-failed-url-blahblahblah-err-status-401"},'4. Why there are some error logs like "list upstreams failed, err: http get failed, url: blahblahblah, err: status: 401"'),(0,n.kt)("p",null,"So far apisix-ingress-controller doesn't support set admin_key for Apache APISIX, so when you deploy your APISIX cluster, admin_key should be removed from config."),(0,n.kt)("p",null,"Note since APISIX have two configuration files, the first is config.yaml, which contains the user specified configs, the other is config-default.yaml, which has all default items, config items in these two files will be merged. So admin_key in both files should be removed. You can customize these two configuration files and mount them to APISIX deployment."),(0,n.kt)("h3",{id:"5-failed-to-create-route-with-apisixroute"},"5. Failed to create route with ",(0,n.kt)("inlineCode",{parentName:"h3"},"ApisixRoute")),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," creates a route with CRD, it checks the ",(0,n.kt)("inlineCode",{parentName:"p"},"Endpoint")," resources in Kubernetes (matched by namespace_name_port). If the corresponding endpoint information is not found, the route will not be created and wait for the next retry."),(0,n.kt)("p",null,"Tips: The failure caused by empty upstream nodes is a limitation of Apache APISIX, related ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/3072"},"issue")),(0,n.kt)("h3",{id:"6-what-is-the-retry-rule-of-apisix-ingress-controller"},"6. What is the retry rule of ",(0,n.kt)("inlineCode",{parentName:"h3"},"apisix-ingress-controller")),(0,n.kt)("p",null,"If an error occurs during the process of ",(0,n.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," parsing CRD and distributing the configuration to APISIX, a retry will be triggered."),(0,n.kt)("p",null,"The delayed retry method is adopted. After the first failure, it is retried once per second. After 5 retries are triggered, the slow retry strategy will be enabled, and the retry will be performed every 1 minute until it succeeds."),(0,n.kt)("h3",{id:"7-what-if-the-crds-need-to-be-updated-when-you-upgrading-apisix-ingress-controller"},"7. What if the CRDs need to be updated when you upgrading apisix-ingress-controller"),(0,n.kt)("p",null,"CRDs upgrading is special as helm chart will skip to apply these resources when they already exist."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"With the arrival of Helm 3, we removed the old crd-install hooks for a more simple methodology. There is now a special directory called crds that you can create in your chart to hold your CRDs. These CRDs are not templated, but will be installed by default when running a helm install for the chart. If the CRD already exists, it will be skipped with a warning. If you wish to skip the CRD installation step, you can pass the --skip-crds flag.")),(0,n.kt)("p",null,"In such a case, you may need to apply these CRDs by yourself."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -k samples/deploy/crd/\n")))}c.isMDXComponent=!0}}]);