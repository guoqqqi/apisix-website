"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10932],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(25773),a=(n(27378),n(35318));const o={title:"\u5982\u4f55\u4f7f\u7528 Kubernetes \u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u5f39\u6027\u4f38\u7f29",authors:[{name:"\u5f20\u664b\u6d9b",title:"Author",url:"https://github.com/tao12345666333",image_url:"https://github.com/tao12345666333.png"}],keywords:["APISIX Ingress","Ingress","Ingress Controller","\u4e91\u539f\u751f","Kubernetes","Gateway API"],description:"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002",tags:["Ecosystem"]},s=void 0,i={permalink:"/zh/blog/2023/02/21/how-to-scale-application-elastically-in-kubernetes",source:"@site/blog/2023/02/21/how-to-scale-application-elastically-in-kubernetes.md",title:"\u5982\u4f55\u4f7f\u7528 Kubernetes \u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u5f39\u6027\u4f38\u7f29",description:"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002",date:"2023-02-21T00:00:00.000Z",formattedDate:"2023\u5e742\u670821\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.14,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",title:"Author",url:"https://github.com/tao12345666333",image_url:"https://github.com/tao12345666333.png",imageURL:"https://github.com/tao12345666333.png"}],prevItem:{title:"APISIX \u662f\u600e\u4e48\u4fdd\u62a4\u7528\u6237\u7684\u654f\u611f\u6570\u636e\u4e0d\u88ab\u6cc4\u9732\u7684\uff1f",permalink:"/zh/blog/2023/02/23/how-to-prevent-sensitive-data-from-leaking"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (1.30 - 2.12)",permalink:"/zh/blog/2023/02/16/weekly-report-0216"}},p={authorsImageUrls:[void 0]},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"KEDA \u4e2d\u5982\u4f55\u4f7f\u7528 Prometheus \u5b9e\u73b0\u4f38\u7f29",id:"keda-\u4e2d\u5982\u4f55\u4f7f\u7528-prometheus-\u5b9e\u73b0\u4f38\u7f29",children:[{value:"\u90e8\u7f72 KEDA",id:"\u90e8\u7f72-keda",children:[],level:3},{value:"\u90e8\u7f72 Prometheus",id:"\u90e8\u7f72-prometheus",children:[],level:3}],level:2},{value:"\u5982\u4f55\u90e8\u7f72\u7f51\u5173\u5e76\u5f00\u542f\u76d1\u63a7",id:"\u5982\u4f55\u90e8\u7f72\u7f51\u5173\u5e76\u5f00\u542f\u76d1\u63a7",children:[],level:2},{value:"\u9a8c\u8bc1\u5e94\u7528\u5f39\u6027\u4f38\u7f29\u80fd\u529b",id:"\u9a8c\u8bc1\u5e94\u7528\u5f39\u6027\u4f38\u7f29\u80fd\u529b",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tao12345666333"},"\u5f20\u664b\u6d9b"),"\uff0cAPI7.ai \u4e91\u539f\u751f\u5de5\u7a0b\u5e08\uff0cApache APISIX PMC\u3002")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u5e94\u7528\u53ef\u4ee5\u627f\u8f7d\u7684\u538b\u529b\u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u63d0\u524d\u8fdb\u884c\u538b\u6d4b\u6765\u4e86\u89e3\u5355\u5e94\u7528\u7a0b\u5e8f\u526f\u672c\u7684\u8d1f\u8f7d\u80fd\u529b\u3002\u5982\u679c\u5728\u4e1a\u52a1\u9ad8\u5cf0\uff0c\u6216\u8005\u4e1a\u52a1\u7684\u8bf7\u6c42\u538b\u529b\u589e\u52a0\u65f6\u5019\uff0c\u5bf9\u5e94\u7528\u8fdb\u884c\u6a2a\u5411\u6269\u5bb9\u53ef\u4ee5\u4fdd\u8bc1\u66f4\u597d\u7684\u4e3a\u7528\u6237\u63d0\u4f9b\u670d\u52a1\u3002"),(0,a.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u6240\u6709\u53d1\u9001\u5230\u4e0a\u6e38\u5e94\u7528\u7a0b\u5e8f\u7684\u6d41\u91cf\u90fd\u5c06\u901a\u8fc7 APISIX\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u6839\u636e APISIX \u63d0\u4f9b\u7684\u6d41\u91cf\u6307\u6807\uff0c\u6765\u5224\u65ad\u5e94\u7528\u7a0b\u5e8f\u662f\u5426\u9700\u8981\u8fdb\u884c\u5f39\u6027\u4f38\u7f29\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4e2d\u5c06\u4f7f\u7528 KEDA \u4f5c\u4e3a\u5f39\u6027\u4f38\u7f29\u7684\u63a7\u5236\u7ec4\u4ef6\uff0c\u7528 Prometheus \u91c7\u96c6 APISIX \u63d0\u4f9b\u7684\u6d41\u91cf\u6307\u6807\u6765\u8fdb\u884c\u5e94\u7528\u7684\u5f39\u6027\u4f38\u7f29\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/02/21/Zrw8DGl2_0221.png",alt:"using KEDA for autocaling"})),(0,a.kt)("h2",{id:"keda-\u4e2d\u5982\u4f55\u4f7f\u7528-prometheus-\u5b9e\u73b0\u4f38\u7f29"},"KEDA \u4e2d\u5982\u4f55\u4f7f\u7528 Prometheus \u5b9e\u73b0\u4f38\u7f29"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," \u662f\u4e00\u4e2a Kubernetes \u4e2d\u57fa\u4e8e\u4e8b\u4ef6\u7684\u81ea\u52a8\u4f38\u7f29\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u79cd\u4f38\u7f29\u5668\u3002\u672c\u6587\u5c06\u4f7f\u7528 Prometheus \u4f5c\u4e3a\u4f38\u7f29\u5668 \uff0c\u83b7\u53d6 APISIX \u66b4\u9732\u51fa\u6765\u7684 metrics\uff08\u6307\u6807\uff09\u5e76\u8fdb\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u6269\u7f29\u5bb9\u3002"),(0,a.kt)("h3",{id:"\u90e8\u7f72-keda"},"\u90e8\u7f72 KEDA"),(0,a.kt)("p",null,"KEDA \u7684\u90e8\u7f72\u6bd4\u8f83\u7b80\u5355\uff0c\u6dfb\u52a0\u5bf9\u5e94\u7684 Helm repo \u5e76\u8fdb\u884c\u5b89\u88c5\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c helm repo add kedacore https://kedacore.github.io/charts\n"kedacore" has been added to your repositories\n(MoeLove) \u279c helm repo update kedacore\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "kedacore" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n(MoeLove) \u279c helm install keda kedacore/keda --namespace keda --create-namespace\nNAME: keda\nLAST DEPLOYED: Thu Jan 19 00:01:00 2023\nNAMESPACE: keda\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n')),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u5b8c\u6210\u540e\uff0cPod \u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\uff0c\u8868\u793a\u5df2\u7ecf\u6b63\u5e38\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl -n keda get pods\nNAME                                               READY   STATUS    RESTARTS   AGE\nkeda-operator-metrics-apiserver-6d4db7dcff-ck9qg   1/1     Running   0          36s\nkeda-operator-5dd4748dcd-k8jjz                     1/1     Running   0          36s\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u90e8\u7f72 Prometheus\u3002"),(0,a.kt)("h3",{id:"\u90e8\u7f72-prometheus"},"\u90e8\u7f72 Prometheus"),(0,a.kt)("p",null,"\u6b64\u5904\u6211\u4eec\u4f7f\u7528 Prometheus Operator \u6765\u8fdb\u884c Prometheus \u7684\u90e8\u7f72\u3002Prometheus Operator \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5728 Kubernetes \u4e2d\u5feb\u901f\u90e8\u7f72 Prometheus \u5b9e\u4f8b\uff0c\u4ee5\u53ca\u901a\u8fc7\u58f0\u660e\u5f0f\u914d\u7f6e\u7684\u65b9\u5f0f\u6dfb\u52a0\u76d1\u63a7\u89c4\u5219\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u6b65\u9aa4\u5b8c\u6210 Prometheus Operator \u7684\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c https://github.com/prometheus-operator/prometheus-operator/releases/download/v0.62.0/bundle.yaml\n(MoeLove) \u279c kubectl apply --server-side -f bundle.yaml\ncustomresourcedefinition.apiextensions.k8s.io/alertmanagerconfigs.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/alertmanagers.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/podmonitors.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/probes.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/prometheuses.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/prometheusrules.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/servicemonitors.monitoring.coreos.com serverside-applied\ncustomresourcedefinition.apiextensions.k8s.io/thanosrulers.monitoring.coreos.com serverside-applied\nclusterrolebinding.rbac.authorization.k8s.io/prometheus-operator serverside-applied\nclusterrole.rbac.authorization.k8s.io/prometheus-operator serverside-applied\ndeployment.apps/prometheus-operator serverside-applied\nserviceaccount/prometheus-operator serverside-applied\nservice/prometheus-operator serverside-applied\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f7f\u7528\u5982\u4e0b\u914d\u7f6e\u4f5c\u4e3a Prometheus \u5b9e\u4f8b\u7684\u914d\u7f6e\uff0c\u7136\u540e\u5c06\u5176\u5e94\u7528\u5230 Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: prometheus\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: prometheus\nrules:\n- apiGroups: [""]\n  resources:\n  - nodes\n  - nodes/metrics\n  - services\n  - endpoints\n  - pods\n  verbs: ["get", "list", "watch"]\n- apiGroups: [""]\n  resources:\n  - configmaps\n  verbs: ["get"]\n- apiGroups:\n  - networking.k8s.io\n  resources:\n  - ingresses\n  verbs: ["get", "list", "watch"]\n- nonResourceURLs: ["/metrics"]\n  verbs: ["get"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: prometheus\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: prometheus\nsubjects:\n- kind: ServiceAccount\n  name: prometheus\n  namespace: default\n---\napiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  name: prometheus\nspec:\n  serviceAccountName: prometheus\n  serviceMonitorSelector:\n    matchLabels:\n      app: apisix\n  serviceMonitorNamespaceSelector:\n    matchLabels:\n      team: apisix\n  resources:\n    requests:\n      memory: 400Mi\n  enableAdminAPI: false\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: prometheus\nspec:\n  type: LoadBalancer\n  ports:\n  - name: web\n    port: 9090\n    protocol: TCP\n    targetPort: web\n  selector:\n    prometheus: prometheus\n')),(0,a.kt)("p",null,"\u5e94\u7528\u540e\uff0c\u5219\u53ef\u4ee5\u770b\u5230\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace \u4e0b\u521b\u5efa\u4e86 Prometheus \u5b9e\u4f8b\u3002\u7531\u4e8e\u4e0a\u8ff0\u914d\u7f6e\u4e2d\u521b\u5efa\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u7c7b\u578b\u7684 Service\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 LoadBalancer \u7684\u516c\u7f51 IP \u8fdb\u884c Prometheus \u7684\u8bbf\u95ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl get svc\nNAME                  TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)          AGE\nkubernetes            ClusterIP      10.43.0.1       <none>         443/TCP          96m\nprometheus-operator   ClusterIP      None            <none>         8080/TCP         92m\nprometheus-operated   ClusterIP      None            <none>         9090/TCP         41m\nprometheus            LoadBalancer   10.43.125.194   216.6.66.66    9090:30099/TCP   41m\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u90e8\u7f72\u7f51\u5173\u5e76\u5f00\u542f\u76d1\u63a7"},"\u5982\u4f55\u90e8\u7f72\u7f51\u5173\u5e76\u5f00\u542f\u76d1\u63a7"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u90e8\u7f72 APISIX Ingress\uff0c\u5e76\u4f7f\u7528 Prometheus \u8fdb\u884c metrics \u91c7\u96c6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u7528\u6237\u6ca1\u6709\u4f7f\u7528 APISIX Ingress\uff0c\u800c\u662f\u4ec5\u4ec5\u4f7f\u7528\u4e86 APISIX\uff0c\u64cd\u4f5c\u65b9\u6cd5\u4e5f\u662f\u7c7b\u4f3c\u7684\u3002")," \u8fd9\u91cc\u4e0d\u518d\u5206\u5f00\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"\u6b64\u5904\u4f7f\u7528 Helm \u8fdb\u884c\u90e8\u7f72\uff0c\u53ef\u4ee5\u540c\u65f6\u5c06 APISIX Ingress controller \u548c APISIX \u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'(MoeLove) \u279c helm repo add apisix https://charts.apiseven.com\n"apisix" already exists with the same configuration, skipping\n(MoeLove) \u279c helm repo update apisix\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "apisix" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n(MoeLove) \u279c helm upgrade --install apisix apisix/apisix --create-namespace  --namespace apisix --set gateway.type=LoadBalancer --set ingress-controller.enabled=true --set ingress-controller.config.apisix.serviceNamespace=apisix\nRelease "apisix" has been upgraded. Happy Helming!\nNAME: apisix\nLAST DEPLOYED: Thu Jan 19 02:11:23 2023\nNAMESPACE: apisix\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n1. Get the application URL by running these commands:\n     NOTE: It may take a few minutes for the LoadBalancer IP to be available.\n           You can watch the status of by running \'kubectl get --namespace apisix svc -w apisix-gateway\'\n  export SERVICE_IP=$(kubectl get svc --namespace apisix apisix-gateway --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")\n  echo http://$SERVICE_IP:80\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5f00\u542f APISIX \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u6cd5\u548c\u76f8\u5173\u53c2\u6570\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u4e24\u7bc7\u6587\u6863\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/"},"prometheus plugins | Apache APISIX\xae")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s/"},"How to access Apache APISIX Prometheus metrics on Kubernetes | Apache APISIX\xae"))),(0,a.kt)("p",null,"\u5f00\u542f\u540e\uff0c\u4fbf\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa ServiceMonitor \u8d44\u6e90\uff0c\u8ba9 Prometheus \u6293\u53d6 APISIX \u66b4\u9732\u51fa\u7684 metrics \u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: example-app\n  labels:\n    app: apisix\nspec:\n  selector:\n    matchLabels:\n      app: apisix\n  endpoints:\n  - port: web\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1\u5e94\u7528\u5f39\u6027\u4f38\u7f29\u80fd\u529b"},"\u9a8c\u8bc1\u5e94\u7528\u5f39\u6027\u4f38\u7f29\u80fd\u529b"),(0,a.kt)("p",null,"\u6b64\u5904\u5c06\u521b\u5efa\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl create deploy httpbin --image=kennethreitz/httpbin --port=80\ndeployment.apps/httpbin created\n(MoeLove) \u279c kubectl expose deploy httpbin --port 80\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5982\u4e0b\u8def\u7531\u89c4\u5219\uff0c\u5e94\u7528\u5230 Kubernetes \u96c6\u7fa4\u540e\uff0c\u5219\u53ef\u901a\u8fc7 APISIX \u8fdb\u884c\u8bf7\u6c42\u7684\u4ee3\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  http:\n  - name: rule1\n    match:\n      hosts:\n      - local.httpbin.org\n      paths:\n      - /*\n    backends:\n       - serviceName: httpbin\n         servicePort: 80\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u521b\u5efa KEDA \u7684 ScaledObject\uff0c\u914d\u7f6e Prometheus \u76f8\u5173\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: prometheus-scaledobject\n  namespace: default\nspec:\n  scaleTargetRef:\n    name: httpbin\n  triggers:\n  - type: prometheus\n    metadata:\n      serverAddress: http://prometheus.default.svc:9090\n      metricName: apisix_http_status\n      threshold: '10'\n      query: sum(rate(apisix_http_status{route=\"httpserver-route\"}[1m]))\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u53c2\u6570\u8868\u793a\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},'sum(rate(apisix_http_status{route="httpserver-route"}[1m]))')," \u4f5c\u4e3a\u67e5\u8be2\u8868\u8fbe\u5f0f\uff0c\u5982\u679c\u7ed3\u679c\u80fd\u5230\u8fbe 10, \u5219\u5f00\u59cb\u8fdb\u884c\u6269\u5bb9\uff08\u6b64\u5904\u914d\u7f6e\u4ec5\u7528\u4e8e\u672c\u6587\u4e2d\u7684\u793a\u4f8b\u4f7f\u7528\uff0c\u751f\u4ea7\u73af\u5883\u8bf7\u6309\u7167\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\uff09\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u901a\u8fc7 curl \u5411 httpbin \u670d\u52a1\u53d1\u51fa\u8fde\u7eed\u8bf7\u6c42\uff0c\u518d\u6b21\u67e5\u770b\u793a\u4f8b\u5e94\u7528\u7684 Pod \u5df2\u7ecf\u53d8\u6210\u4e24\u4e2a\uff0c\u8bc1\u660e KEDA \u6210\u529f\u81ea\u52a8\u6269\u5bb9\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl get pods\nNAME                      READY   STATUS    RESTARTS   AGE\nhttpbin-d46d778d7-chtdw   1/1     Running   0          12m\nhttpbin-d46d778d7-xanbj   1/1     Running   0          10s\n")),(0,a.kt)("p",null,"\u5f85\u4e00\u6bb5\u65f6\u95f4\u65e0\u8bf7\u6c42\u540e\uff0c\u518d\u6b21\u67e5\u770b\u53d1\u73b0 Pod \u7684\u6570\u91cf\u81ea\u52a8\u7f29\u51cf\u4e3a\u4e00\u4e2a\uff0c\u8bc1\u660e\u81ea\u52a8\u7f29\u5bb9\u4e5f\u5b9e\u73b0\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"(MoeLove) \u279c kubectl get pods\nNAME                      READY   STATUS    RESTARTS   AGE\nhttpbin-d46d778d7-chtdw   1/1     Running   0          32m\n")),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u5229\u7528 KEDA \u4f7f\u7528 Prometheus \u91c7\u96c6 APISIX \u66b4\u9732\u51fa\u6765\u7684\u6307\u6807\u4f5c\u4e3a\u4f38\u7f29\u5668\uff0c\u8fdb\u800c\u5b9e\u73b0\u57fa\u4e8e\u6d41\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5f39\u6027\u4f38\u7f29\u3002\u7531\u4e8e\u6240\u6709\u6d41\u91cf\u90fd\u4f1a\u5148\u7ecf\u8fc7 APISIX \uff0c\u6240\u4ee5\u5728 APISIX \u4fa7\u8fdb\u884c\u6570\u636e\u7edf\u8ba1\u66f4\u52a0\u7b80\u5355\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"\u5728\u4e1a\u52a1\u8bf7\u6c42\u91cf\u4e0a\u6765\u540e\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c06\u8fdb\u884c\u81ea\u52a8\u5316\u7684\u6269\u5bb9\uff0c\u5f53\u4e1a\u52a1\u4f4e\u8c37\u7684\u65f6\u5019\uff0c\u5219\u4f1a\u81ea\u52a8\u7684\u7f29\u5bb9\u3002\u8fd9\u53ef\u4ee5\u5728\u7f13\u89e3\u5f88\u591a\u751f\u4ea7\u73af\u5883\u4e0b\u7684\u624b\u52a8\u6269/\u7f29\u5bb9\u64cd\u4f5c\uff0c\u4ee5\u4fdd\u969c\u7528\u6237\u7684\u670d\u52a1\u4f53\u9a8c\u3002"))}u.isMDXComponent=!0}}]);