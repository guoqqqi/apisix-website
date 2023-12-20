"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10490],{35318:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>p});var o=i(27378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),p=n,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||a;return i?o.createElement(m,r(r({ref:t},u),{},{components:i})):o.createElement(m,r({ref:t},u))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},17911:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=i(25773),n=(i(27378),i(35318));const a={title:"How can I contribute to an open source project without writing code?",slug:"2021/09/09/how-to-contribute-to-an-openSource-without-coding",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["Open Source","Contribution"],description:"You can participate in open source projects by writing articles, making videos, sharing them externally, building local communities.",tags:["Community"]},r=void 0,l={permalink:"/blog/2021/09/09/how-to-contribute-to-an-openSource-without-coding",source:"@site/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding.md",title:"How can I contribute to an open source project without writing code?",description:"You can participate in open source projects by writing articles, making videos, sharing them externally, building local communities.",date:"2021-09-09T00:00:00.000Z",formattedDate:"September 9, 2021",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:6.715,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"How APISIX implemented in China Mobile Cloud",permalink:"/blog/2021/09/13/china-mobile-cloud-usercase"},nextItem:{title:"Centralized Authentication with Apache APISIX and Advanced Tricks",permalink:"/blog/2021/09/07/how-to-use-apisix-auth"}},s={authorsImageUrls:[void 0]},c=[{value:"Contributing without Coding",id:"contributing-without-coding",children:[{value:"Writing articles",id:"writing-articles",children:[],level:3},{value:"Making videos",id:"making-videos",children:[],level:3},{value:"Conference sharing",id:"conference-sharing",children:[],level:3},{value:"Improve the documentation",id:"improve-the-documentation",children:[],level:3},{value:"Build local community, organize/participate in events",id:"build-local-community-organizeparticipate-in-events",children:[],level:3},{value:"Actively participate in community discussions",id:"actively-participate-in-community-discussions",children:[{value:"is active on the Apache mailing list",id:"is-active-on-the-apache-mailing-list",children:[],level:4},{value:"is active on Github",id:"is-active-on-github",children:[],level:4},{value:"Apache mail list vs Github",id:"apache-mail-list-vs-github",children:[],level:4}],level:3}],level:2},{value:"Contributing with Coding",id:"contributing-with-coding",children:[{value:"Contribute features, fix bugs",id:"contribute-features-fix-bugs",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:c};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article describes many ways to contribute to open source projects without writing code. You can get involved in open source projects by writing articles, making videos, sharing them externally, building local communities, and participating actively in community discussions.")),(0,n.kt)("p",null,"I have contributed several PRs and submitted several issues to open source projects, and I still remember clearly the excitement when my first PR was merged a few years ago, and I experienced the fun of participating in open source. But my experience remains in the contributor stage with no further progress, because I changed my position from front-end developer to marketing. I am afraid that I would be less familiar with the code,  and I can not fix the bug, which will result in no contribution to the project."),(0,n.kt)("p",null,"There is a misunderstanding here, not only contributing code and fixing bugs are contributions to the project. Is the only way to become a contributor is to contribute code? ",(0,n.kt)("strong",{parentName:"p"},"If I can't write code and I'm not a developer, how can I become a contributor to an open source project and even get promoted to committer?")," If I don't know how to write code and am not a developer, how can I become a contributor to an open source project or even be promoted to committer?"),(0,n.kt)("p",null,"After I sorted it out, I found that there are many ways to become a contributor, so I'll share them here. (The author is also on the way to practice)"),(0,n.kt)("h2",{id:"contributing-without-coding"},"Contributing without Coding"),(0,n.kt)("h3",{id:"writing-articles"},"Writing articles"),(0,n.kt)("p",null,"Writing articles is an easily overlooked way to promote and evangelize a technology. For example, writing a project's induction guide, a pit-stop record, an architectural design analysis, implementation principles, etc."),(0,n.kt)("p",null,"If it is difficult to start writing articles, you can start with translation, either from Chinese to English or from English to Chinese, as long as the content is meaningful to the project, you are contributing to it."),(0,n.kt)("p",null,"Or if you have watched others' technical practical sharing, organize others' sharing into a text version and share it to the community to help more people understand the project."),(0,n.kt)("p",null,"I have also noticed that some contributors have put together a development booklet, or a professional book, to systematically introduce a technology to others."),(0,n.kt)("h3",{id:"making-videos"},"Making videos"),(0,n.kt)("p",null,"Making videos is also a good way to do this. We can convert the text into a video, introduce an open source project in a video way, record a guide, step in the record, architecture design analysis, implementation principles and so on. I also saw a lot of projects using video presentation, the video may be the form of animation, may also be a real person to explain, no matter which, the video presentation will be more vivid and interesting than the text some."),(0,n.kt)("p",null,"However, the pre-editing video for newcomers to the workload may be relatively large."),(0,n.kt)("h3",{id:"conference-sharing"},"Conference sharing"),(0,n.kt)("p",null,"If you are not shy and like to share outside, then going to technical conferences to share and preach open source projects is also a very good choice. This may be difficult for newcomers who understand the project, with time, when we progress from the little white to familiar, go to share is easier to reach. Sharing can exercise their own expression skills, logical thinking skills, but also exercise their own guts ~ (may also harvest the olive branch)"),(0,n.kt)("h3",{id:"improve-the-documentation"},"Improve the documentation"),(0,n.kt)("p",null,"Most developers do not like to write documentation, but documentation is an important way for other people to understand the project and get started with the project. I once in the development experience, if you encounter a clear and detailed documentation, I feel very lucky thing, get started on the project will be much faster. Documentation is not limited to start-up instructions, if there is an architectural design, the principle of the introduction is even better."),(0,n.kt)("p",null,"We can submit documentation for open source projects of interest, or even fix the documentation, for example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"code updates, the documentation is not updated at the same time"),(0,n.kt)("li",{parentName:"ul"},"fix the wrong download links, documentation links"),(0,n.kt)("li",{parentName:"ul"},"Optimize the documentation, modify the description of the documentation to make it easier to understand"),(0,n.kt)("li",{parentName:"ul"},"Submit architecture design, schematic documentation")),(0,n.kt)("h3",{id:"build-local-community-organizeparticipate-in-events"},"Build local community, organize/participate in events"),(0,n.kt)("p",null,"If you are interested in a project, get involved in the local community, communicate with like-minded people, organize local events, and contribute to the development of the project."),(0,n.kt)("p",null,"If there is no local community, you can build one as an initiator. I know that the Apache Software Foundation encourages people to build Local Communities, such as ALC Beijing, and other technical communities such as KubeSphere and Cloud Native Community are actively developing local communities."),(0,n.kt)("h3",{id:"actively-participate-in-community-discussions"},"Actively participate in community discussions"),(0,n.kt)("h4",{id:"is-active-on-the-apache-mailing-list"},"is active on the Apache mailing list"),(0,n.kt)("p",null,"The Apache culture encourages discussion and decision making through mailing lists, where everything is documented. Each Apache project has its own mailing list, and if you have an idea for a project, the community strongly encourages you to discuss it on the mailing list."),(0,n.kt)("p",null,"We can."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Post a poll for a project"),(0,n.kt)("li",{parentName:"ul"},"Reply to discussions started by others to express our own views"),(0,n.kt)("li",{parentName:"ul"},"Start a discussion")),(0,n.kt)("p",null,"Why a mailing list?"),(0,n.kt)("p",null,"Mailing lists give me a very old-fashioned feeling. I went to learn about the history of the Apache Software Foundation, and initially the founders of the foundation discussed issues by way of mailing lists, is it a preservation of the old culture?"),(0,n.kt)("p",null,"Although the Internet is developing rapidly, but the world still has difficulties in receiving pictures, difficulties in using other software, although wechat, Twitter users we know also do not cover the world, but the use of mail can be the smallest threshold to establish contact with others, to ensure that people around the world can participate in community discussions, this is the original intention of the Apache Software Foundation to retain the mailing list approach."),(0,n.kt)("h4",{id:"is-active-on-github"},"is active on Github"),(0,n.kt)("p",null,"Github is the most common site for developers, and most open source projects are hosted on Github. I can"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"raise an issue with my thoughts on how to improve the project"),(0,n.kt)("li",{parentName:"ul"},"submit a bug report"),(0,n.kt)("li",{parentName:"ul"},"review pr submitted by other partners")),(0,n.kt)("p",null,"These are all ways to contribute to open source projects."),(0,n.kt)("h4",{id:"apache-mail-list-vs-github"},"Apache mail list vs Github"),(0,n.kt)("p",null,"Why use a mailing list when you have Github? The code is hosted on Github, and it seems like all the community collaboration is done on Github?"),(0,n.kt)("p",null,"If there are no objections to discussing an issue on the mailing list, the proposal will be approved by default. If there are objections, they will be fully discussed and eventually agreed or set aside."),(0,n.kt)("p",null,"The use of mailing lists for discussion is also a way to identify with the Apache culture. For projects that follow Apache rules, the mailing list is the primary place for the community, and Github is a convenient collaborative tool."),(0,n.kt)("h2",{id:"contributing-with-coding"},"Contributing with Coding"),(0,n.kt)("h3",{id:"contribute-features-fix-bugs"},"Contribute features, fix bugs"),(0,n.kt)("p",null,"Of course, open source projects are inseparable from the code. If you are familiar with the technology stack of an open source project, you will soon be able to contribute code, work with community partners to improve the relevant features, fix bugs, and continue to contribute, becoming a project contributor, and further nominated to become a committer, PMC is very easy to do. Most of the contributors become committer by submitting code, but as a small partner like me who is not familiar with code, this one is not suitable."),(0,n.kt)("p",null,"It is important to note that a committer is an affirmation of a contributor's past contributions and will not be removed as a committer because he or she will no longer contribute in the future, nor will they have greater rights because they are a committer."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"If you are interested in open source projects but not familiar with the code, and want to participate in the open source community, writing articles, making videos, sharing with the public, building local communities, and actively participating in community discussions are all very good ways, welcome to practice."))}h.isMDXComponent=!0}}]);