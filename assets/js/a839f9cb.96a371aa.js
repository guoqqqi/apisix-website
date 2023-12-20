"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16931],{26916:e=>{e.exports=JSON.parse('{"pluginId":"docs-apisix-ingress-controller","version":"1.7.0","label":"1.7.0","banner":null,"badge":true,"className":"docs-version-1.7.0","isLast":true,"docsSidebars":{"version-1.7.0/docs":[{"type":"link","label":"Getting started","href":"/docs/ingress-controller/getting-started"},{"type":"category","label":"Installation","items":[{"type":"link","label":"minikube","href":"/docs/ingress-controller/deployments/minikube"},{"type":"link","label":"kind","href":"/docs/ingress-controller/deployments/kind"},{"type":"link","label":"EKS (Amazon)","href":"/docs/ingress-controller/deployments/aws"},{"type":"link","label":"ACK (Alibaba Cloud)","href":"/docs/ingress-controller/deployments/ack"},{"type":"link","label":"GKE (Google)","href":"/docs/ingress-controller/deployments/gke"},{"type":"link","label":"AKS (Azure)","href":"/docs/ingress-controller/deployments/azure"},{"type":"link","label":"TKE (Tencent)","href":"/docs/ingress-controller/deployments/tke"},{"type":"link","label":"KubeSphere","href":"/docs/ingress-controller/deployments/kubesphere"},{"type":"link","label":"K3s and RKE (Rancher)","href":"/docs/ingress-controller/deployments/k3s-rke"},{"type":"link","label":"OpenShift","href":"/docs/ingress-controller/deployments/openshift"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Ingress APISIX Use Examples","href":"/docs/ingress-controller/tutorials/index"},{"type":"link","label":"Checking the synchronization status of the CRDs","href":"/docs/ingress-controller/tutorials/check-crd-status"},{"type":"link","label":"Configuring Mutual Authentication via ApisixTls","href":"/docs/ingress-controller/tutorials/mtls"},{"type":"link","label":"Install APISIX Ingress with Kubernetes manifest files","href":"/docs/ingress-controller/tutorials/the-hard-way"},{"type":"link","label":"Configuring Ingress with Kubernetes Ingress resource","href":"/docs/ingress-controller/tutorials/proxy-the-httpbin-service-with-ingress"},{"type":"link","label":"Configuring Ingress with Kubernetes Gateway API","href":"/docs/ingress-controller/tutorials/configure-ingress-with-gateway-api"},{"type":"link","label":"Configuring Ingress with APISIX CRDs","href":"/docs/ingress-controller/tutorials/proxy-the-httpbin-service"},{"type":"link","label":"How to proxy the gRPC service","href":"/docs/ingress-controller/tutorials/proxy-grpc-service"},{"type":"link","label":"Manage Certificates With Cert Manager","href":"/docs/ingress-controller/tutorials/manage-certificates-with-cert-manager"},{"type":"link","label":"Manage Ingress Certificates With Cert Manager","href":"/docs/ingress-controller/tutorials/manage-ingress-certificates-with-cert-manager"},{"type":"link","label":"Enable authentication and restriction","href":"/docs/ingress-controller/tutorials/enable-authentication-and-restriction"},{"type":"link","label":"Exporting Prometheus metrics from APISIX","href":"/docs/ingress-controller/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s"},{"type":"link","label":"Using custom Plugins in APISIX Ingress","href":"/docs/ingress-controller/tutorials/using-custom-plugins"},{"type":"link","label":"How to use go-plugin-runner with APISIX Ingress","href":"/docs/ingress-controller/tutorials/how-to-use-go-plugin-runner-in-apisix-ingress"},{"type":"link","label":"Using External Services In ApisixUpstream","href":"/docs/ingress-controller/tutorials/external-service"},{"type":"link","label":"Using External Services Discovery In ApisixUpstream","href":"/docs/ingress-controller/tutorials/external-service-discovery"},{"type":"link","label":"Using APISIX Ingress as Istio Egress Gateway","href":"/docs/ingress-controller/tutorials/istio-egress-gateway"},{"type":"link","label":"Match Stream Route with SNI","href":"/docs/ingress-controller/tutorials/match-stream-route-by-sni"}],"collapsible":true,"collapsed":true},{"type":"category","label":"References","items":[{"type":"link","label":"ApisixRoute/v2beta3","href":"/docs/ingress-controller/references/apisix_route_v2beta3"},{"type":"link","label":"ApisixRoute/v2","href":"/docs/ingress-controller/references/apisix_route_v2"},{"type":"link","label":"ApisixUpstream","href":"/docs/ingress-controller/references/apisix_upstream"},{"type":"link","label":"ApisixTls/v2","href":"/docs/ingress-controller/references/apisix_tls_v2"},{"type":"link","label":"ApisixTls/v2beta3","href":"/docs/ingress-controller/references/apisix_tls_v2beta3"},{"type":"link","label":"ApisixClusterConfig/v2","href":"/docs/ingress-controller/references/apisix_cluster_config_v2"},{"type":"link","label":"ApisixClusterConfig/v2beta3","href":"/docs/ingress-controller/references/apisix_cluster_config_v2beta3"},{"type":"link","label":"ApisixPluginConfig/v2","href":"/docs/ingress-controller/references/apisix_pluginconfig_v2"},{"type":"link","label":"ApisixPluginConfig/v2beta3","href":"/docs/ingress-controller/references/apisix_pluginconfig_v2beta3"},{"type":"link","label":"v2 API Reference","href":"/docs/ingress-controller/references/v2"},{"type":"link","label":"ApisixGlobalRule/v2","href":"/docs/ingress-controller/references/apisix_global_rule_v2"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Concepts","items":[{"type":"link","label":"ApisixRoute","href":"/docs/ingress-controller/concepts/apisix_route"},{"type":"link","label":"ApisixUpstream","href":"/docs/ingress-controller/concepts/apisix_upstream"},{"type":"link","label":"ApisixTls","href":"/docs/ingress-controller/concepts/apisix_tls"},{"type":"link","label":"ApisixClusterConfig","href":"/docs/ingress-controller/concepts/apisix_cluster_config"},{"type":"link","label":"ApisixPluginConfig","href":"/docs/ingress-controller/concepts/apisix_plugin_config"},{"type":"link","label":"Annotations","href":"/docs/ingress-controller/concepts/annotations"},{"type":"link","label":"ApisixGlobalRule","href":"/docs/ingress-controller/concepts/apisix_global_rule"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Ingress Controller","href":"/docs/ingress-controller/design"},{"type":"link","label":"Composite Architecture","href":"/docs/ingress-controller/composite"},{"type":"link","label":"Development","href":"/docs/ingress-controller/contribute"},{"type":"link","label":"FAQ","href":"/docs/ingress-controller/FAQ"},{"type":"link","label":"Monitoring APISIX with Helm Chart","href":"/docs/ingress-controller/monitoring"},{"type":"link","label":"Upgrade Guide","href":"/docs/ingress-controller/upgrade"},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix-ingress-controller/blob/master/CHANGELOG.md"}]}}')}}]);