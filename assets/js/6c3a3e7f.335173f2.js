"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30775],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),p=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return t?o.createElement(g,l(l({ref:n},s),{},{components:t})):o.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69629:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={title:"Deployment modes",keywords:["API Gateway","Apache APISIX","APISIX deployment modes"],description:"Documentation about the three deployment modes of Apache APISIX."},l=void 0,i={unversionedId:"deployment-modes",id:"version-3.7/deployment-modes",isDocsHomePage:!1,title:"Deployment modes",description:"Documentation about the three deployment modes of Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.7/deployment-modes.md",sourceDirName:".",slug:"/deployment-modes",permalink:"/docs/apisix/deployment-modes",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/deployment-modes.md",tags:[],version:"3.7",frontMatter:{title:"Deployment modes",keywords:["API Gateway","Apache APISIX","APISIX deployment modes"],description:"Documentation about the three deployment modes of Apache APISIX."},sidebar:"version-3.7/docs",previous:{title:"Debug mode",permalink:"/docs/apisix/debug-mode"},next:{title:"FAQ",permalink:"/docs/apisix/FAQ"}},d=[{value:"Traditional",id:"traditional",children:[]},{value:"Decoupled",id:"decoupled",children:[]},{value:"Standalone",id:"standalone",children:[{value:"How to configure rules",id:"how-to-configure-rules",children:[]},{value:"How to configure Route",id:"how-to-configure-route",children:[]},{value:"How to configure Route + Service",id:"how-to-configure-route--service",children:[]},{value:"How to configure Route + Upstream",id:"how-to-configure-route--upstream",children:[]},{value:"How to configure Route + Service + Upstream",id:"how-to-configure-route--service--upstream",children:[]},{value:"How to configure Plugins",id:"how-to-configure-plugins",children:[]},{value:"How to enable SSL",id:"how-to-enable-ssl",children:[]},{value:"How to configure global rule",id:"how-to-configure-global-rule",children:[]},{value:"How to configure consumer",id:"how-to-configure-consumer",children:[]},{value:"How to configure plugin metadata",id:"how-to-configure-plugin-metadata",children:[]},{value:"How to configure stream route",id:"how-to-configure-stream-route",children:[]},{value:"How to configure protos",id:"how-to-configure-protos",children:[]}]}],p={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APISIX has three different deployment modes for different production use cases. The table below summarises the deployment modes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Roles"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"traditional"),(0,a.kt)("td",{parentName:"tr",align:null},"traditional"),(0,a.kt)("td",{parentName:"tr",align:null},"Data plane and control plane are deployed together. ",(0,a.kt)("inlineCode",{parentName:"td"},"enable_admin")," attribute should be disabled manually.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decoupled"),(0,a.kt)("td",{parentName:"tr",align:null},"data_plane / control_plane"),(0,a.kt)("td",{parentName:"tr",align:null},"Data plane and control plane are deployed independently.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"standalone"),(0,a.kt)("td",{parentName:"tr",align:null},"data_plane"),(0,a.kt)("td",{parentName:"tr",align:null},"Only ",(0,a.kt)("inlineCode",{parentName:"td"},"data_plane")," is deployed and the configurations are loaded from a local YAML file.")))),(0,a.kt)("p",null,"Each of these deployment modes are explained in detail below."),(0,a.kt)("h2",{id:"traditional"},"Traditional"),(0,a.kt)("p",null,"In the traditional deployment mode, one instance of APISIX will be both the ",(0,a.kt)("inlineCode",{parentName:"p"},"data_plane")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"control_plane"),"."),(0,a.kt)("p",null,"An example configuration of the traditional deployment mode is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"apisix:\n    node_listen:\n        - port: 9080\ndeployment:\n    role: traditional\n    role_traditional:\n        config_provider: etcd\n    admin:\n        admin_listen:\n            port: 9180\n    etcd:\n       host:\n           - http://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n#END\n")),(0,a.kt)("p",null,"The instance of APISIX deployed as the traditional role will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Listen on port ",(0,a.kt)("inlineCode",{parentName:"li"},"9080")," to handle user requests, controlled by ",(0,a.kt)("inlineCode",{parentName:"li"},"node_listen"),"."),(0,a.kt)("li",{parentName:"ol"},"Listen on port ",(0,a.kt)("inlineCode",{parentName:"li"},"9180")," to handle Admin API requests, controlled by ",(0,a.kt)("inlineCode",{parentName:"li"},"admin_listen"),".")),(0,a.kt)("h2",{id:"decoupled"},"Decoupled"),(0,a.kt)("p",null,"In the decoupled deployment mode the ",(0,a.kt)("inlineCode",{parentName:"p"},"data_plane")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"control_plane")," instances of APISIX are deployed separately, i.e., one instance of APISIX is configured to be a ",(0,a.kt)("em",{parentName:"p"},"data plane")," and the other to be a ",(0,a.kt)("em",{parentName:"p"},"control plane"),"."),(0,a.kt)("p",null,"The instance of APISIX deployed as the data plane will:"),(0,a.kt)("p",null,"Once the service is started, it will handle the user requests."),(0,a.kt)("p",null,"The example below shows the configuration of an APISIX instance as ",(0,a.kt)("em",{parentName:"p"},"data plane")," in the decoupled mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: data_plane\n    role_data_plane:\n       config_provider: etcd\n#END\n")),(0,a.kt)("p",null,"The instance of APISIX deployed as the control plane will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Listen on port ",(0,a.kt)("inlineCode",{parentName:"li"},"9180")," and handle Admin API requests.")),(0,a.kt)("p",null,"The example below shows the configuration of an APISIX instance as ",(0,a.kt)("em",{parentName:"p"},"control plane")," in the decoupled mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plane:\n        config_provider: etcd\n    etcd:\n       host:\n           - https://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n#END\n")),(0,a.kt)("h2",{id:"standalone"},"Standalone"),(0,a.kt)("p",null,"Turning on the APISIX node in Standalone mode will no longer use the default etcd as the configuration center."),(0,a.kt)("p",null,"This method is more suitable for two types of users:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Kubernetes(k8s)\uff1aDeclarative API that dynamically updates the routing rules with a full yaml configuration."),(0,a.kt)("li",{parentName:"ol"},"Different configuration centers: There are many implementations of the configuration center, such as Consul, etc., using the full yaml file for intermediate conversion.")),(0,a.kt)("p",null,"The routing rules in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml")," file are loaded into memory immediately after the APISIX node service starts. And every time interval (default 1 second), will try to detect whether the file content is updated, if there is an update, reload the rule."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": Reloading and updating routing rules are all hot memory updates. There is no replacement of working processes, since it's a hot update."),(0,a.kt)("p",null,"Since the current Admin API is based on the etcd configuration center solution, enable Admin API is not allowed when the Standalone mode is enabled."),(0,a.kt)("p",null,"Standalone mode can only be enabled when we set the role of APISIX as data plane. We set ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment.role")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"data_plane")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment.role_data_plane.config_provider")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),"."),(0,a.kt)("p",null,"Refer to the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"deployment:\n  role: data_plane\n  role_data_plane:\n    config_provider: yaml\n#END\n")),(0,a.kt)("h3",{id:"how-to-configure-rules"},"How to configure rules"),(0,a.kt)("p",null,"All of the rules are stored in one file which named ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml"),",\nAPISIX checks if this file has any change ",(0,a.kt)("strong",{parentName:"p"},"every second"),".\nIf the file is changed & it ends with ",(0,a.kt)("inlineCode",{parentName:"p"},"#END"),",\nAPISIX loads the rules from this file and updates its memory."),(0,a.kt)("p",null,"Here is a mini example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"WARNING"),": APISIX will not load the rules into memory from file ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml")," if there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"#END")," at the end."),(0,a.kt)("h3",{id:"how-to-configure-route"},"How to configure Route"),(0,a.kt)("p",null,"Single Route\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("p",null,"Multiple Routes\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n  -\n    uri: /hello2\n    upstream:\n        nodes:\n            "127.0.0.1:1981": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-route--service"},"How to configure Route + Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        service_id: 1\nservices:\n    -\n        id: 1\n        upstream:\n            nodes:\n                "127.0.0.1:1980": 1\n            type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-route--upstream"},"How to configure Route + Upstream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        upstream_id: 1\nupstreams:\n    -\n        id: 1\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-route--service--upstream"},"How to configure Route + Service + Upstream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        service_id: 1\nservices:\n    -\n        id: 1\n        upstream_id: 2\nupstreams:\n    -\n        id: 2\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-plugins"},"How to configure Plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# plugins listed here will be hot reloaded and override the boot configuration\nplugins:\n  - name: ip-restriction\n  - name: jwt-auth\n  - name: mqtt-proxy\n    stream: true # set 'stream' to true for stream plugins\n#END\n")),(0,a.kt)("h3",{id:"how-to-enable-ssl"},"How to enable SSL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'ssls:\n    -\n        cert: |\n            -----BEGIN CERTIFICATE-----\n            MIIDrzCCApegAwIBAgIJAI3Meu/gJVTLMA0GCSqGSIb3DQEBCwUAMG4xCzAJBgNV\n            BAYTAkNOMREwDwYDVQQIDAhaaGVqaWFuZzERMA8GA1UEBwwISGFuZ3pob3UxDTAL\n            BgNVBAoMBHRlc3QxDTALBgNVBAsMBHRlc3QxGzAZBgNVBAMMEmV0Y2QuY2x1c3Rl\n            ci5sb2NhbDAeFw0yMDEwMjgwMzMzMDJaFw0yMTEwMjgwMzMzMDJaMG4xCzAJBgNV\n            BAYTAkNOMREwDwYDVQQIDAhaaGVqaWFuZzERMA8GA1UEBwwISGFuZ3pob3UxDTAL\n            BgNVBAoMBHRlc3QxDTALBgNVBAsMBHRlc3QxGzAZBgNVBAMMEmV0Y2QuY2x1c3Rl\n            ci5sb2NhbDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ/qwxCR7g5S\n            s9+VleopkLi5pAszEkHYOBpwF/hDeRdxU0I0e1zZTdTlwwPy2vf8m3kwoq6fmNCt\n            tdUUXh5Wvgi/2OA8HBBzaQFQL1Av9qWwyES5cx6p0ZBwIrcXQIsl1XfNSUpQNTSS\n            D44TGduXUIdeshukPvMvLWLezynf2/WlgVh/haWtDG99r/Gj3uBdjl0m/xGvKvIv\n            NFy6EdgG9fkwcIalutjrUnGl9moGjwKYu4eXW2Zt5el0d1AHXUsqK4voe0p+U2Nz\n            quDmvxteXWdlsz8o5kQT6a4DUtWhpPIfNj9oZfPRs3LhBFQ74N70kVxMOCdec1lU\n            bnFzLIMGlz0CAwEAAaNQME4wHQYDVR0OBBYEFFHeljijrr+SPxlH5fjHRPcC7bv2\n            MB8GA1UdIwQYMBaAFFHeljijrr+SPxlH5fjHRPcC7bv2MAwGA1UdEwQFMAMBAf8w\n            DQYJKoZIhvcNAQELBQADggEBAG6NNTK7sl9nJxeewVuogCdMtkcdnx9onGtCOeiQ\n            qvh5Xwn9akZtoLMVEdceU0ihO4wILlcom3OqHs9WOd6VbgW5a19Thh2toxKidHz5\n            rAaBMyZsQbFb6+vFshZwoCtOLZI/eIZfUUMFqMXlEPrKru1nSddNdai2+zi5rEnM\n            HCot43+3XYuqkvWlOjoi9cP+C4epFYrxpykVbcrtbd7TK+wZNiK3xtDPnVzjdNWL\n            geAEl9xrrk0ss4nO/EreTQgS46gVU+tLC+b23m2dU7dcKZ7RDoiA9bdVc4a2IsaS\n            2MvLL4NZ2nUh8hAEHiLtGMAV3C6xNbEyM07hEpDW6vk6tqk=\n            -----END CERTIFICATE-----\n        key: |\n            -----BEGIN PRIVATE KEY-----\n            MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCf6sMQke4OUrPf\n            lZXqKZC4uaQLMxJB2DgacBf4Q3kXcVNCNHtc2U3U5cMD8tr3/Jt5MKKun5jQrbXV\n            FF4eVr4Iv9jgPBwQc2kBUC9QL/alsMhEuXMeqdGQcCK3F0CLJdV3zUlKUDU0kg+O\n            Exnbl1CHXrIbpD7zLy1i3s8p39v1pYFYf4WlrQxvfa/xo97gXY5dJv8RryryLzRc\n            uhHYBvX5MHCGpbrY61JxpfZqBo8CmLuHl1tmbeXpdHdQB11LKiuL6HtKflNjc6rg\n            5r8bXl1nZbM/KOZEE+muA1LVoaTyHzY/aGXz0bNy4QRUO+De9JFcTDgnXnNZVG5x\n            cyyDBpc9AgMBAAECggEAatcEtehZPJaCeClPPF/Cwbe9YoIfe4BCk186lHI3z7K1\n            5nB7zt+bwVY0AUpagv3wvXoB5lrYVOsJpa9y5iAb3GqYMc/XDCKfD/KLea5hwfcn\n            BctEn0LjsPVKLDrLs2t2gBDWG2EU+udunwQh7XTdp2Nb6V3FdOGbGAg2LgrSwP1g\n            0r4z14F70oWGYyTQ5N8UGuyryVrzQH525OYl38Yt7R6zJ/44FVi/2TvdfHM5ss39\n            SXWi00Q30fzaBEf4AdHVwVCRKctwSbrIOyM53kiScFDmBGRblCWOxXbiFV+d3bjX\n            gf2zxs7QYZrFOzOO7kLtHGua4itEB02497v+1oKDwQKBgQDOBvCVGRe2WpItOLnj\n            SF8iz7Sm+jJGQz0D9FhWyGPvrN7IXGrsXavA1kKRz22dsU8xdKk0yciOB13Wb5y6\n            yLsr/fPBjAhPb4h543VHFjpAQcxpsH51DE0b2oYOWMmz+rXGB5Jy8EkP7Q4njIsc\n            2wLod1dps8OT8zFx1jX3Us6iUQKBgQDGtKkfsvWi3HkwjFTR+/Y0oMz7bSruE5Z8\n            g0VOHPkSr4XiYgLpQxjbNjq8fwsa/jTt1B57+By4xLpZYD0BTFuf5po+igSZhH8s\n            QS5XnUnbM7d6Xr/da7ZkhSmUbEaMeHONSIVpYNgtRo4bB9Mh0l1HWdoevw/w5Ryt\n            L/OQiPhfLQKBgQCh1iG1fPh7bbnVe/HI71iL58xoPbCwMLEFIjMiOFcINirqCG6V\n            LR91Ytj34JCihl1G4/TmWnsH1hGIGDRtJLCiZeHL70u32kzCMkI1jOhFAWqoutMa\n            7obDkmwraONIVW/kFp6bWtSJhhTQTD4adI9cPCKWDXdcCHSWj0Xk+U8HgQKBgBng\n            t1HYhaLzIZlP/U/nh3XtJyTrX7bnuCZ5FhKJNWrYjxAfgY+NXHRYCKg5x2F5j70V\n            be7pLhxmCnrPTMKZhik56AaTBOxVVBaYWoewhUjV4GRAaK5Wc8d9jB+3RizPFwVk\n            V3OU2DJ1SNZ+W2HBOsKrEfwFF/dgby6i2w6MuAP1AoGBAIxvxUygeT/6P0fHN22P\n            zAHFI4v2925wYdb7H//D8DIADyBwv18N6YH8uH7L+USZN7e4p2k8MGGyvTXeC6aX\n            IeVtU6fH57Ddn59VPbF20m8RCSkmBvSdcbyBmqlZSBE+fKwCliKl6u/GH0BNAWKz\n            r8yiEiskqRmy7P7MY9hDmEbG\n            -----END PRIVATE KEY-----\n        snis:\n            - "yourdomain.com"\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-global-rule"},"How to configure global rule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'global_rules:\n    -\n        id: 1\n        plugins:\n            response-rewrite:\n                body: "hello\\n"\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-consumer"},"How to configure consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n  - username: jwt\n    plugins:\n        jwt-auth:\n            key: user-key\n            secret: my-secret-key\n#END\n")),(0,a.kt)("h3",{id:"how-to-configure-plugin-metadata"},"How to configure plugin metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'upstreams:\n  - id: 1\n    nodes:\n      "127.0.0.1:1980": 1\n    type: roundrobin\nroutes:\n  -\n    uri: /hello\n    upstream_id: 1\n    plugins:\n        http-logger:\n            batch_max_size: 1\n            uri: http://127.0.0.1:1980/log\nplugin_metadata:\n  - id: http-logger # note the id is the plugin name\n    log_format:\n        host: "$host",\n        remote_addr: "$remote_addr"\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-stream-route"},"How to configure stream route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_routes:\n  - server_addr: 127.0.0.1\n    server_port: 1985\n    id: 1\n    upstream_id: 1\n    plugins:\n      mqtt-proxy:\n        protocol_name: "MQTT"\n        protocol_level: 4\nupstreams:\n  - nodes:\n      "127.0.0.1:1995": 1\n    type: roundrobin\n    id: 1\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-protos"},"How to configure protos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'protos:\n  - id: helloworld\n    desc: hello world\n    content: >\n      syntax = "proto3";\n      package helloworld;\n\n      service Greeter {\n        rpc SayHello (HelloRequest) returns (HelloReply) {}\n      }\n      message HelloRequest {\n        string name = 1;\n      }\n      message HelloReply {\n        string message = 1;\n      }\n#END\n')))}s.isMDXComponent=!0}}]);