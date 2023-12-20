"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[86491],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=i,k=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70881:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Key Authentication",slug:"/getting-started/key-authentication"},o=void 0,l={unversionedId:"getting-started/key-authentication",id:"version-3.6/getting-started/key-authentication",isDocsHomePage:!1,title:"Key Authentication",description:"The Getting Started tutorials are contributed by API7.ai.",source:"@site/docs-apisix_versioned_docs/version-3.6/getting-started/key-authentication.md",sourceDirName:"getting-started",slug:"/getting-started/key-authentication",permalink:"/docs/apisix/3.6/getting-started/key-authentication",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/getting-started/key-authentication.md",tags:[],version:"3.6",frontMatter:{title:"Key Authentication",slug:"/getting-started/key-authentication"},sidebar:"version-3.6/docs",previous:{title:"Load Balancing",permalink:"/docs/apisix/3.6/getting-started/load-balancing"},next:{title:"Rate Limiting",permalink:"/docs/apisix/3.6/getting-started/rate-limiting"}},s=[{value:"What is a Consumer",id:"what-is-a-consumer",children:[]},{value:"What is Key Authentication",id:"what-is-key-authentication",children:[]},{value:"Enable Key Authentication",id:"enable-key-authentication",children:[{value:"Prerequisite(s)",id:"prerequisites",children:[]},{value:"Create a Consumer",id:"create-a-consumer",children:[]},{value:"Enable Authentication",id:"enable-authentication",children:[]},{value:"Validate",id:"validate",children:[]},{value:"Disable Authentication",id:"disable-authentication",children:[]}]},{value:"What&#39;s Next",id:"whats-next",children:[]}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/key-authentication"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Getting Started tutorials are contributed by ",(0,i.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai"),".")),(0,i.kt)("p",null,"An API gateway's primary role is to connect API consumers and providers. For security reasons, it should authenticate and authorize consumers before access to internal resources."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/02/08/8mRaK3v1_consumer.png",alt:"Key Authentication"})),(0,i.kt)("p",null,"APISIX has a flexible plugin extension system and a number of existing plugins for user authentication and authorization. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/key-auth/"},"Key Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/basic-auth/"},"Basic Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/jwt-auth/"},"JSON Web Token (JWT) Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/authz-keycloak/"},"Keycloak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/authz-casdoor/"},"Casdoor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/wolf-rbac/"},"Wolf RBAC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/openid-connect/"},"OpenID Connect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/cas-auth/"},"Central Authentication Service (CAS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/hmac-auth/"},"HMAC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/authz-casbin/"},"Casbin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/ldap-auth/"},"LDAP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/opa/"},"Open Policy Agent (OPA)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/forward-auth/"},"Forward Authentication"))),(0,i.kt)("p",null,"In this tutorial, you will create a ",(0,i.kt)("em",{parentName:"p"},"consumer")," with ",(0,i.kt)("em",{parentName:"p"},"key authentication"),", and learn how to enable and disable key authentication."),(0,i.kt)("h2",{id:"what-is-a-consumer"},"What is a Consumer"),(0,i.kt)("p",null,"A Consumer is an application or a developer who consumes the API."),(0,i.kt)("p",null,"In APISIX, a Consumer requires a unique ",(0,i.kt)("em",{parentName:"p"},"username")," and an authentication ",(0,i.kt)("em",{parentName:"p"},"plugin")," from the list above to be created."),(0,i.kt)("h2",{id:"what-is-key-authentication"},"What is Key Authentication"),(0,i.kt)("p",null,"Key authentication is a relatively simple but widely used authentication approach. The idea is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Administrator adds an authentication key (API key) to the Route."),(0,i.kt)("li",{parentName:"ol"},"API consumers add the key to the query string or headers for authentication when sending requests.")),(0,i.kt)("h2",{id:"enable-key-authentication"},"Enable Key Authentication"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisite(s)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Complete ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/getting-started/README"},"Get APISIX")," to install APISIX."),(0,i.kt)("li",{parentName:"ol"},"Complete ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/getting-started/configure-routes#what-is-a-route"},"Configure Routes"),".")),(0,i.kt)("h3",{id:"create-a-consumer"},"Create a Consumer"),(0,i.kt)("p",null,"Let's create a consumer named ",(0,i.kt)("inlineCode",{parentName:"p"},"tom")," and enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin with an API key ",(0,i.kt)("inlineCode",{parentName:"p"},"secret-key"),". All requests sent with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"secret-key")," should be authenticated as ",(0,i.kt)("inlineCode",{parentName:"p"},"tom"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please use a complex key in the Production environment."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/consumers" -X PUT -d \'\n{\n  "username": "tom",\n  "plugins": {\n    "key-auth": {\n      "key": "secret-key"\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"You will receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 OK")," response if the consumer was created successfully."),(0,i.kt)("h3",{id:"enable-authentication"},"Enable Authentication"),(0,i.kt)("p",null,"Inheriting the route ",(0,i.kt)("inlineCode",{parentName:"p"},"getting-started-ip")," from ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.6/getting-started/configure-routes"},"Configure Routes"),", we only need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," method to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin to the route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n  "plugins": {\n    "key-auth": {}\n  }\n}\'\n')),(0,i.kt)("p",null,"You will receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 Created")," response if the plugin was added successfully."),(0,i.kt)("h3",{id:"validate"},"Validate"),(0,i.kt)("p",null,"Let's validate the authentication in the following scenarios:"),(0,i.kt)("h4",{id:"1-send-a-request-without-any-key"},"1. Send a request without any key"),(0,i.kt)("p",null,"Send a request without the ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/ip"\n')),(0,i.kt)("p",null,"Since you enabled the key authentication, you will receive an unauthorized response with ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 401 Unauthorized"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 401 Unauthorized\nDate: Wed, 08 Feb 2023 09:38:36 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/3.1.0\n")),(0,i.kt)("h4",{id:"2-send-a-request-with-a-wrong-key"},"2. Send a request with a wrong key"),(0,i.kt)("p",null,"Send a request with a wrong key (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"wrong-key"),") in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i \"http://127.0.0.1:9080/ip\" -H 'apikey: wrong-key'\n")),(0,i.kt)("p",null,"Since the key is incorrect, you will receive an unauthorized response with ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 401 Unauthorized"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 401 Unauthorized\nDate: Wed, 08 Feb 2023 09:38:27 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/3.1.0\n")),(0,i.kt)("h4",{id:"3-send-a-request-with-the-correct-key"},"3. Send a request with the correct key"),(0,i.kt)("p",null,"Send a request with the correct key (",(0,i.kt)("inlineCode",{parentName:"p"},"secret-key"),") in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i \"http://127.0.0.1:9080/ip\" -H 'apikey: secret-key'\n")),(0,i.kt)("p",null,"You will receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 200 OK")," response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 44\nConnection: keep-alive\nDate: Thu, 09 Feb 2023 03:27:57 GMT\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true\nServer: APISIX/3.1.0\n")),(0,i.kt)("h3",{id:"disable-authentication"},"Disable Authentication"),(0,i.kt)("p",null,"Disable the key authentication plugin by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"_meta.disable")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n  "plugins": {\n    "key-auth": {\n      "_meta": {\n        "disable": true\n      }\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"You can send a request without any key to validate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/ip"\n')),(0,i.kt)("p",null,"Because you have disabled the key authentication plugin, you will receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 200 OK")," response."),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"You have learned how to configure key authentication for a route. In the next tutorial, you will learn how to configure rate limiting."))}u.isMDXComponent=!0}}]);