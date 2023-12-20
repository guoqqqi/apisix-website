"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35783],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const i={title:"Hands-On: Set Up Ingress on Kubernetes With Apache APISIX Ingress Controller",authors:[{name:"Navendu Pottekkat",title:"Author",url:"https://github.com/navendu-pottekkat",image_url:"https://avatars.githubusercontent.com/u/49474499"}],keywords:["Ingress controller","Kubernetes ingress","Apache APISIX","APISIX ingress controller"],description:"A tutorial on using Ingress in your Kubernetes cluster with Apache APISIX.",tags:["Ingress","Kubernetes"],image:"https://static.apiseven.com/2022/09/05/6315bd71d6846.png"},s=void 0,o={permalink:"/blog/2022/09/09/kubernetes-ingress-with-apisix",source:"@site/blog/2022/09/09/kubernetes-ingress-with-apisix.md",title:"Hands-On: Set Up Ingress on Kubernetes With Apache APISIX Ingress Controller",description:"A tutorial on using Ingress in your Kubernetes cluster with Apache APISIX.",date:"2022-09-09T00:00:00.000Z",formattedDate:"September 9, 2022",tags:[{label:"Ingress",permalink:"/blog/tags/ingress"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:4.99,truncated:!0,authors:[{name:"Navendu Pottekkat",title:"Author",url:"https://github.com/navendu-pottekkat",image_url:"https://avatars.githubusercontent.com/u/49474499",imageURL:"https://avatars.githubusercontent.com/u/49474499"}],prevItem:{title:"Why Is Apache APISIX the Best API Gateway?",permalink:"/blog/2022/09/13/why-is-apache-apisix-the-best-api-gateway"},nextItem:{title:"API monetization using an API Management and a billing provider",permalink:"/blog/2022/09/08/api-monetization-using-stack"}},l={authorsImageUrls:[void 0]},p=[{value:"Deploying a Sample Application",id:"deploying-a-sample-application",children:[],level:2},{value:"Deploying APISIX Ingress",id:"deploying-apisix-ingress",children:[],level:2},{value:"Configuring APISIX Ingress",id:"configuring-apisix-ingress",children:[],level:2},{value:"Testing the Created Routes",id:"testing-the-created-routes",children:[],level:2},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A tutorial on using Ingress in your Kubernetes cluster with Apache APISIX.")),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://navendu.me/posts/hands-on-set-up-ingress-on-kubernetes-with-apache-apisix-ingress-controller/"})),(0,r.kt)("p",null,"In Kubernetes, ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," is a native object that allows you to access your services externally by defining a set of rules. Using a reverse proxy, an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Ingress controller")," implements these defined rules and routes external traffic to your services."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/05/6315bd0573d30.jpg",alt:"Ingress controller"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is an open source API gateway (a souped-up reverse proxy) that provides features like authentication, traffic routing, load balancing, canary releases, monitoring, and more. APISIX also supports custom Plugins and integrates with popular open source projects like ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/skywalking/"},"Apache SkyWalking")," and ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/prometheus/"},"Prometheus"),". To learn more about APISIX, you can see the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started/"},"official documentation"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/next/getting-started/"},"Apache APISIX Ingress controller")," sits between the defined Ingress rules and the APISIX API gateway. It configures the proxy to route traffic based on the defined rules."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/05/6315bd04245df.jpg",alt:"APISIX Ingress controller"})),(0,r.kt)("p",null,"This hands-on tutorial will teach you how to set up the APISIX Ingress controller on your Kubernetes cluster and route traffic to your services."),(0,r.kt)("p",null,"Before you move on, make sure you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Have access to a Kubernetes cluster. This tutorial uses ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/"},"minikube")," for creating a cluster."),(0,r.kt)("li",{parentName:"ol"},"Install and configure ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," to communicate with your cluster."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Install Helm")," to deploy the APISIX Ingress controller.")),(0,r.kt)("h2",{id:"deploying-a-sample-application"},"Deploying a Sample Application"),(0,r.kt)("p",null,"We will use a sample HTTP server application (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/navendu-pottekkat/bare-minimum-api"},"bare-minimum-api"),") to demonstrate the working of the Ingress controller."),(0,r.kt)("p",null,'While running the application, you can set a "version" and a port to listen to. For this example, we will create two "versions" of this application which will return different responses as shown below:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/05/6315bd05e15cd.jpg",alt:"Sample application"})),(0,r.kt)("p",null,"You can deploy the application on your Kubernetes cluster by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run bare-minimum-api-v1 --image navendup/bare-minimum-api --port 8080 -- 8080 v1.0\nkubectl expose pod bare-minimum-api-v1 --port 8080\n")),(0,r.kt)("p",null,"To test the application outside the cluster, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward bare-minimum-api-v1 8080:8080\n")),(0,r.kt)("p",null,"Now, if you open up a new terminal window and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080\n")),(0,r.kt)("p",null,"You will get back a response from the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'{title="output"}',"{title":'"output"}'},"Hello from API v1.0!\n")),(0,r.kt)("p",null,'Similarly, you can deploy another "version" of the application by running:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run bare-minimum-api-v2 --image navendup/bare-minimum-api --port 8081 -- 8081 v2.0\nkubectl expose pod bare-minimum-api-v2 --port 8081\n")),(0,r.kt)("p",null,"Now, we can deploy APISIX Ingress and expose these applications to external traffic."),(0,r.kt)("h2",{id:"deploying-apisix-ingress"},"Deploying APISIX Ingress"),(0,r.kt)("p",null,"APISIX and APISIX Ingress controller can be installed using Helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get pods --namespace ingress-apisix\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We are using ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePort")," as the Gateway service type. You can also set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," if your cluster has one."))),(0,r.kt)("p",null,"Helm will create five resources in your cluster:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": The data plane that handles external traffic."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": Control plane that processes configuration changes."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": The ingress controller."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and 5. ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd headless"),": To store configuration and handle internal communication.")),(0,r.kt)("p",null,"Once all the pods and services are running, you can test APISIX by accessing the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n ingress-apisix deploy/apisix -- curl -s http://127.0.0.1:9180/apisix/admin/routes -H 'X-API-Key: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,r.kt)("p",null,"If you get a response similar to the one shown below, APISIX is up and running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'{title="output"}',"{title":'"output"}'},'{\n  "action": "get",\n  "node": {\n    "key": "/apisix/routes",\n    "dir": true,\n    "nodes": []\n  },\n  "count": 0\n}\n')),(0,r.kt)("h2",{id:"configuring-apisix-ingress"},"Configuring APISIX Ingress"),(0,r.kt)("p",null,"Once you have verified that the APISIX gateway and Ingress controller is running, you can create ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/route/"},"Routes")," to expose the deployed application to external traffic."),(0,r.kt)("p",null,"This will route traffic between the two application versions based on the client request:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/05/6315bd0296577.jpg",alt:"Configuring APISIX Ingress"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/05/6315bd04c542c.jpg",alt:"Configuring APISIX"})),(0,r.kt)("p",null,"To configure Routes, APISIX comes with declarative and easy-to-use ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/next/references/apisix_route_v2beta3/"},"custom resource"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{title="apisix-ingress-manifest.yaml"}',"{title":'"apisix-ingress-manifest.yaml"}'},"apiVersion: apisix.apache.org/v2beta3\nkind: ApisixRoute\nmetadata:\n  name: api-routes\nspec:\n  http:\n    - name: route-1\n      match:\n        hosts:\n          - local.navendu.me\n        paths:\n          - /v1\n      backends:\n        - serviceName: bare-minimum-api-v1\n          servicePort: 8080\n    - name: route-2\n      match:\n        hosts:\n          - local.navendu.me\n        paths:\n          - /v2\n      backends:\n        - serviceName: bare-minimum-api-v2\n          servicePort: 8081\n")),(0,r.kt)("p",null,"The APISIX Ingress controller converts this resource to an APISIX gateway configuration."),(0,r.kt)("p",null,"APISIX also supports configuration using native ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource"},"Kubernetes Ingress resource"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{title="kubernetes-ingress-manifest.yaml"}',"{title":'"kubernetes-ingress-manifest.yaml"}'},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: api-routes\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: local.navendu.me\n      http:\n        paths:\n          - backend:\n              service:\n                name: bare-minimum-api-v1\n                port:\n                  number: 8080\n            path: /v1\n            pathType: Exact\n          - backend:\n              service:\n                name: bare-minimum-api-v2\n                port:\n                  number: 8081\n            path: /v2\n            pathType: Exact\n")),(0,r.kt)("p",null,"You can use either to configure APISIX but I prefer the easier APISIX custom resource. We can apply this manifest file to our cluster to create Routes in APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f apisix-ingress-manifest.yaml\n")),(0,r.kt)("p",null,"If the Ingress controller is configured correctly, you should see a response indicating that APISIX API gateway has been configured:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'{title="output"}',"{title":'"output"}'},"apisixroute.apisix.apache.org/api-routes created\n")),(0,r.kt)("p",null,"Now, let's test these Routes."),(0,r.kt)("h2",{id:"testing-the-created-routes"},"Testing the Created Routes"),(0,r.kt)("p",null,"If you were following along using minikube and ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePort"),", you should be able to access APISIX through the Node IP of the service ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),". If the Node IP is not reachable directly (if you are on Darwin, Windows, or WSL), you can create a tunnel to access the service on your machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"minikube service apisix-gateway --url -n ingress-apisix\n")),(0,r.kt)("p",null,"This will show the URL with which you can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-gateway")," service."),(0,r.kt)("p",null,"You can send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to this URL and it would be Routed to the appropriate service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:51538/v2 -H 'host:local.navendu.me'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'{title="output"}',"{title":'"output"}'},"Hello from API v2.0!\n")),(0,r.kt)("p",null,"Now you have APISIX routing traffic to your applications! You can try the two configured Routes and see APISIX routing the requests to the appropriate application."),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"In this tutorial, you learned to set up APISIX Ingress on your cluster. We tested it out by configuring basic Routes to a sample application."),(0,r.kt)("p",null,"With APISIX gateway and the Ingress controller, you can also configure Upstreams, Plugins, mTLS, and monitoring. To learn more about APISIX and how you can use these features, visit ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"apisix.apache.org"),"."))}c.isMDXComponent=!0}}]);