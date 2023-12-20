"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[82344],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92566:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"request-validation",keywords:["APISIX","API \u7f51\u5173","Request Validation"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-validation \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9a8c\u8bc1\u5c06\u8981\u8f6c\u53d1\u7ed9\u4e0a\u6e38\u670d\u52a1\u7684\u8bf7\u6c42\u3002"},i=void 0,o={unversionedId:"plugins/request-validation",id:"version-3.6/plugins/request-validation",isDocsHomePage:!1,title:"request-validation",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-validation \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9a8c\u8bc1\u5c06\u8981\u8f6c\u53d1\u7ed9\u4e0a\u6e38\u670d\u52a1\u7684\u8bf7\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.6/plugins/request-validation.md",sourceDirName:"plugins",slug:"/plugins/request-validation",permalink:"/zh/docs/apisix/3.6/plugins/request-validation",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.6/docs/zh/latest/plugins/request-validation.md",tags:[],version:"3.6",frontMatter:{title:"request-validation",keywords:["APISIX","API \u7f51\u5173","Request Validation"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-validation \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9a8c\u8bc1\u5c06\u8981\u8f6c\u53d1\u7ed9\u4e0a\u6e38\u670d\u52a1\u7684\u8bf7\u6c42\u3002"},sidebar:"version-3.6/docs",previous:{title:"proxy-cache",permalink:"/zh/docs/apisix/3.6/plugins/proxy-cache"},next:{title:"proxy-mirror",permalink:"/zh/docs/apisix/3.6/plugins/proxy-mirror"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u679a\u4e3e\uff08Enum\uff09\u9a8c\u8bc1",id:"\u679a\u4e3eenum\u9a8c\u8bc1",children:[]},{value:"\u5e03\u5c14\uff08Boolean\uff09\u9a8c\u8bc1",id:"\u5e03\u5c14boolean\u9a8c\u8bc1",children:[]},{value:"\u6570\u5b57\u8303\u56f4\uff08Number or Integer\uff09\u9a8c\u8bc1",id:"\u6570\u5b57\u8303\u56f4number-or-integer\u9a8c\u8bc1",children:[]},{value:"\u5b57\u7b26\u4e32\u957f\u5ea6\uff08String\uff09\u9a8c\u8bc1",id:"\u5b57\u7b26\u4e32\u957f\u5ea6string\u9a8c\u8bc1",children:[]},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\uff08Regex\uff09\u9a8c\u8bc1",id:"\u6b63\u5219\u8868\u8fbe\u5f0fregex\u9a8c\u8bc1",children:[]},{value:"\u6570\u7ec4\uff08Array\uff09\u9a8c\u8bc1",id:"\u6570\u7ec4array\u9a8c\u8bc1",children:[]},{value:"\u591a\u5b57\u6bb5\u7ec4\u5408\uff08Combined\uff09\u9a8c\u8bc1",id:"\u591a\u5b57\u6bb5\u7ec4\u5408combined\u9a8c\u8bc1",children:[]},{value:"\u81ea\u5b9a\u4e49\u62d2\u7edd\u4fe1\u606f",id:"\u81ea\u5b9a\u4e49\u62d2\u7edd\u4fe1\u606f",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request-validation")," \u63d2\u4ef6\u7528\u4e8e\u63d0\u524d\u9a8c\u8bc1\u5411\u4e0a\u6e38\u670d\u52a1\u8f6c\u53d1\u7684\u8bf7\u6c42\u3002\u8be5\u63d2\u4ef6\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/jsonschema"},"JSON Schema")," \u673a\u5236\u8fdb\u884c\u6570\u636e\u9a8c\u8bc1\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u8bf7\u6c42\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," \u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"header")," \u6570\u636e\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"schema")," \u6570\u636e\u7ed3\u6784\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"body")," \u6570\u636e\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"schema")," \u6570\u636e\u7ed3\u6784\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u88ab\u62d2\u7edd\u65f6\u8981\u8fd4\u56de\u7684\u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u88ab\u62d2\u7edd\u65f6\u8fd4\u56de\u7684\u4fe1\u606f\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u542f\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u81f3\u5c11\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"header_schema")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"body_schema")," \u5c5e\u6027\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\uff0c\u4e24\u8005\u4e5f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u3002"))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"request-validation")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"body_schema")," \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "request-validation": {\n            "body_schema": {\n                "type": "object",\n                "required": ["required_payload"],\n                "properties": {\n                    "required_payload": {"type": "string"},\n                    "boolean_payload": {"type": "boolean"}\n                }\n            }\n            "rejected_msg": "customize reject message"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u4e0d\u540c\u9a8c\u8bc1\u573a\u666f\u4e0b\u8be5\u63d2\u4ef6\u7684 JSON \u914d\u7f6e\uff1a"),(0,r.kt)("h3",{id:"\u679a\u4e3eenum\u9a8c\u8bc1"},"\u679a\u4e3e\uff08Enum\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["enum_payload"],\n        "properties": {\n            "enum_payload": {\n                "type": "string",\n                "enum": ["enum_string_1", "enum_string_2"],\n                "default": "enum_string_1"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u5e03\u5c14boolean\u9a8c\u8bc1"},"\u5e03\u5c14\uff08Boolean\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["bool_payload"],\n        "properties": {\n            "bool_payload": {\n                "type": "boolean",\n                "default": true\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u6570\u5b57\u8303\u56f4number-or-integer\u9a8c\u8bc1"},"\u6570\u5b57\u8303\u56f4\uff08Number or Integer\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["integer_payload"],\n        "properties": {\n            "integer_payload": {\n                "type": "integer",\n                "minimum": 1,\n                "maximum": 65535\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u5b57\u7b26\u4e32\u957f\u5ea6string\u9a8c\u8bc1"},"\u5b57\u7b26\u4e32\u957f\u5ea6\uff08String\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["string_payload"],\n        "properties": {\n            "string_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u6b63\u5219\u8868\u8fbe\u5f0fregex\u9a8c\u8bc1"},"\u6b63\u5219\u8868\u8fbe\u5f0f\uff08Regex\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["regex_payload"],\n        "properties": {\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u6570\u7ec4array\u9a8c\u8bc1"},"\u6570\u7ec4\uff08Array\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["array_payload"],\n        "properties": {\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u591a\u5b57\u6bb5\u7ec4\u5408combined\u9a8c\u8bc1"},"\u591a\u5b57\u6bb5\u7ec4\u5408\uff08Combined\uff09\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["boolean_payload", "array_payload", "regex_payload"],\n        "properties": {\n            "boolean_payload": {\n                "type": "boolean"\n            },\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            },\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u62d2\u7edd\u4fe1\u606f"},"\u81ea\u5b9a\u4e49\u62d2\u7edd\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uri": "/get",\n  "plugins": {\n    "request-validation": {\n      "body_schema": {\n        "type": "object",\n        "required": ["required_payload"],\n        "properties": {\n          "required_payload": {"type": "string"},\n          "boolean_payload": {"type": "boolean"}\n        }\n      },\n      "rejected_msg": "customize reject message"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:8080": 1\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6309\u4e0a\u8ff0\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u8be5\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"boolean-payload":true,"required_payload":"hello"}\' \\\n  http://127.0.0.1:9080/get\n')),(0,r.kt)("p",null,"\u73b0\u5728\u53ea\u5141\u8bb8\u7b26\u5408\u5df2\u914d\u7f6e\u89c4\u5219\u7684\u6709\u6548\u8bf7\u6c42\u5230\u8fbe\u4e0a\u6e38\u670d\u52a1\u3002\u4e0d\u7b26\u5408\u914d\u7f6e\u7684\u8bf7\u6c42\u5c06\u88ab\u62d2\u7edd\uff0c\u5e76\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"400")," \u6216\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u3002"),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);