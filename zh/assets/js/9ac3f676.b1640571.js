"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=l(n),d=s,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22760:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const i={title:"Checking the synchronization status of the CRDs",keywords:["APISIX Ingress","Apache APISIX","Kubernetes Ingress","APISIX CRDs","Synchronization"],description:"A guide to check the synchronization status of APISIX CRDs."},o=void 0,a={unversionedId:"tutorials/check-crd-status",id:"version-1.7.0/tutorials/check-crd-status",isDocsHomePage:!1,title:"Checking the synchronization status of the CRDs",description:"A guide to check the synchronization status of APISIX CRDs.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.7.0/tutorials/check-crd-status.md",sourceDirName:"tutorials",slug:"/tutorials/check-crd-status",permalink:"/zh/docs/ingress-controller/tutorials/check-crd-status",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.7.0/docs/zh/latest/tutorials/check-crd-status.md",tags:[],version:"1.7.0",frontMatter:{title:"Checking the synchronization status of the CRDs",keywords:["APISIX Ingress","Apache APISIX","Kubernetes Ingress","APISIX CRDs","Synchronization"],description:"A guide to check the synchronization status of APISIX CRDs."},sidebar:"version-1.7.0/docs",previous:{title:"Ingress APISIX Use Examples",permalink:"/zh/docs/ingress-controller/tutorials/index"},next:{title:"Configuring Mutual Authentication via ApisixTls",permalink:"/zh/docs/ingress-controller/tutorials/mtls"}},c=[{value:"Example with ApisixRoute",id:"example-with-apisixroute",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"APISIX CRDs are applied to a Kubernetes cluster using the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command. Behind the scenes, Kubernetes verifies the configuration using the ",(0,s.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"Open API V3 schema")," and its validation webhooks (if any)."),(0,s.kt)("p",null,"But this does not mean that the configuration is synchronized and validated by APISIX. APISIX will convert the declared configuration to APISIX-specific resources and verify it. If the verification fails, the Ingress controller will log an error message and will retry until the desired state is successfully synchronized to APISIX."),(0,s.kt)("p",null,"This guide will show how you can check the synchronization status of the CRDs."),(0,s.kt)("h2",{id:"example-with-apisixroute"},"Example with ApisixRoute"),(0,s.kt)("p",null,"This example uses ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/references/apisix_route_v2"},"ApisixRoute")," resources. But this also applies to other APISIX CRDs like ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/references/apisix_upstream"},"ApisixUpstream"),", ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/references/apisix_tls_v2"},"ApisixTls"),", and ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/references/apisix_cluster_config_v2"},"ApisixClusterConfig"),"."),(0,s.kt)("p",null,"We can deploy a sample ApisixRoute resource:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: rule1\n      match:\n        hosts:\n          - httpbin.com\n        paths:\n          - /ip\n      backends:\n        - serviceName: httpbin-service-e2e-test\n          servicePort: 80\nEOF\n")),(0,s.kt)("p",null,"Once this resource is applied, you can check its synchronization status with its name as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe ar httpbin-route\n")),(0,s.kt)("p",null,"This will give the status as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="output"',title:'"output"'},"...\nStatus:\n  Conditions:\n    Message:              Sync Successfully\n    Observed Generation:  1\n    Reason:               ResourcesSynced\n    Status:               True\n    Type:                 ResourcesAvailable\nEvents:\n  Type    Reason           Age                From           Message\n  ----    ------           ----               ----           -------\n  Normal  ResourcesSynced  50s (x2 over 50s)  ApisixIngress  ApisixIngress synced successfully\n")),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"If you are not able to see the status, please check if you are using:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An APISIX Ingress controller version ",(0,s.kt)("inlineCode",{parentName:"li"},">=1.0"),"."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/tree/master/samples/deploy/crd/v1"},"latest CRD definition file"),"."),(0,s.kt)("li",{parentName:"ol"},"The latest ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/tree/master/samples/deploy/rbac"},"RBAC configuration"),".")))}p.isMDXComponent=!0}}]);