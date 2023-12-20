"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[93665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54418:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"mqtt-proxy",keywords:["APISIX","API Gateway","Plugin","MQTT Proxy"],description:"This document contains information about the Apache APISIX mqtt-proxy Plugin. The `mqtt-proxy` Plugin is used for dynamic load balancing with `client_id` of MQTT."},o=void 0,l={unversionedId:"plugins/mqtt-proxy",id:"version-3.1/plugins/mqtt-proxy",isDocsHomePage:!1,title:"mqtt-proxy",description:"This document contains information about the Apache APISIX mqtt-proxy Plugin. The `mqtt-proxy` Plugin is used for dynamic load balancing with `client_id` of MQTT.",source:"@site/docs-apisix_versioned_docs/version-3.1/plugins/mqtt-proxy.md",sourceDirName:"plugins",slug:"/plugins/mqtt-proxy",permalink:"/docs/apisix/3.1/plugins/mqtt-proxy",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/plugins/mqtt-proxy.md",tags:[],version:"3.1",frontMatter:{title:"mqtt-proxy",keywords:["APISIX","API Gateway","Plugin","MQTT Proxy"],description:"This document contains information about the Apache APISIX mqtt-proxy Plugin. The `mqtt-proxy` Plugin is used for dynamic load balancing with `client_id` of MQTT."},sidebar:"version-3.1/docs",previous:{title:"dubbo-proxy",permalink:"/docs/apisix/3.1/plugins/dubbo-proxy"},next:{title:"kafka-proxy",permalink:"/docs/apisix/3.1/plugins/kafka-proxy"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Enabling mTLS with mqtt-proxy plugin",id:"enabling-mtls-with-mqtt-proxy-plugin",children:[{value:"Create a stream_route using mqtt-proxy plugin and mTLS",id:"create-a-stream_route-using-mqtt-proxy-plugin-and-mtls",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," Plugin is used for dynamic load balancing with ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," of MQTT. It only works in stream model."),(0,a.kt)("p",null,"This Plugin supports both the protocols ",(0,a.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"},"3.1.*")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html"},"5.0"),"."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"protocol_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the protocol. Generally ",(0,a.kt)("inlineCode",{parentName:"td"},"MQTT"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"protocol_level"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Level of the protocol. It should be ",(0,a.kt)("inlineCode",{parentName:"td"},"4")," for MQTT ",(0,a.kt)("inlineCode",{parentName:"td"},"3.1.*")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"5")," for MQTT ",(0,a.kt)("inlineCode",{parentName:"td"},"5.0"),".")))),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("p",null,"To enable the Plugin, you need to first enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_proxy")," configuration in your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"). The below configuration represents listening on the ",(0,a.kt)("inlineCode",{parentName:"p"},"9100")," TCP port:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"    ...\n    router:\n        http: 'radixtree_uri'\n        ssl: 'radixtree_sni'\n    stream_proxy:                 # TCP/UDP proxy\n      only: false                 # needed if HTTP and Stream Proxy should be enabled\n      tcp:                        # TCP proxy port list\n        - 9100\n    dns_resolver:\n    ...\n")),(0,a.kt)("p",null,"You can now send the MQTT request to port ",(0,a.kt)("inlineCode",{parentName:"p"},"9100"),"."),(0,a.kt)("p",null,"You can now create a stream Route and enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," Plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": [{\n            "host": "127.0.0.1",\n            "port": 1980,\n            "weight": 1\n        }]\n    }\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are using Docker in macOS, then ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," is the right parameter for the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," attribute."))),(0,a.kt)("p",null,"This Plugin exposes a variable ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_client_id")," which can be used for load balancing as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "upstream": {\n        "type": "chash",\n        "key": "mqtt_client_id",\n        "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1995,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1995,\n            "weight": 1\n        }\n        ]\n    }\n}\'\n')),(0,a.kt)("p",null,"MQTT connections with different client ID will be forwarded to different nodes based on the consistent hash algorithm. If client ID is missing, client IP is used instead for load balancing."),(0,a.kt)("h2",{id:"enabling-mtls-with-mqtt-proxy-plugin"},"Enabling mTLS with mqtt-proxy plugin"),(0,a.kt)("p",null,"Stream proxies use TCP connections and can accept TLS. Follow the guide about ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/stream-proxy/#accept-tls-over-tcp-connection"},"how to accept tls over tcp connections")," to open a stream proxy with enabled TLS."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," plugin is enabled through TCP communications on the specified port for the stream proxy, and will also require clients to authenticate via TLS if ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Configure ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," providing the CA certificate and the server certificate, together with a list of SNIs. Steps to protect ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_routes")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," are equivalent to the ones to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/mtls/#protect-route"},"protect Routes"),"."),(0,a.kt)("h3",{id:"create-a-stream_route-using-mqtt-proxy-plugin-and-mtls"},"Create a stream_route using mqtt-proxy plugin and mTLS"),(0,a.kt)("p",null,"Here is an example of how create a stream_route which is using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," plugin, providing the CA certificate, the client certificate and the client key (for self-signed certificates which are not trusted by your host, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-k")," flag):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl 127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "sni": "${your_sni_name}",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sni")," name must match one or more of the SNIs provided to the SSL object that you created with the CA and server certificates."),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"To disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," Plugin you can remove the corresponding configuration as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")))}c.isMDXComponent=!0}}]);