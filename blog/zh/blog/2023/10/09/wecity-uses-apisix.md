---
title: "荷兰智慧城市革命：WeCity 与 APISIX 的合作之旅"
authors:
  - name: Arjen Hof
    title: Author
  - name: Tim van Densen
    title: Author
  - name: Jing Yan
    title: Technical Writer
    url: https://github.com/JYan00
    image_url: https://github.com/JYan00.png
keywords:
  - WeCity
  - API Gateway
  - Apache APISIX
  - API Gateway 最佳实践
description: 荷兰知名公共数据管理企业 WeCity 与 APISIX 携手同行，共同打造荷兰的稳定安全的数据市场。
tags: [Case Studies]
image: https://static.apiseven.com/uploads/2023/09/20/6ZpgFEMr_WeCity.png
---

> “开源项目 APISIX 的运营理念开放灵活，自身功能强大齐全，社区响应沟通及时，优点相当瞩目。”
>
> ——WeCity 联合创始人兼首席技术官 Arjen Hof、WeCity 软件架构师兼首席开发人员 Tim van Densen
<!--truncate-->

## 业务背景与痛点

WeCity 成立于荷兰，致力于为智慧城市解决方案提供商及其用户建设沟通协作的桥梁。我们在智慧城市治理和公共数据管理等领域耕耘多年，潜心为客户研制与数据交换相关的技术和组织工具，蜚声荷兰市场，深得社会与政府的信任。我们已与荷兰基础设施部门建立良好合作关系，将在未来主导荷兰的数据驱动移动生态系统中的通用服务开发，为打造庞大的数据网络添砖加瓦。

目前，我们正在构建数据市场，旨在让数据的所有者能与数据消费者共享其数据集。在这一市场中，数据的所有者有权制定数据的使用计划和策略，还可以按照国际标准对数据进行标准化处理。

在构建数据市场的过程中，我们很快发现了不少问题与痛点：

### 痛点 1：数据交换过程不透明，难跟踪

WeCity 希望构建一个涵盖数据所有者、数据平台、数据提供者和数据消费者的综合性联合网络。因此，我们亟需构建全面、安全、透明的数据治理架构，并保证全流程可审计、可跟踪，但我们在启用 APISIX 前仍未完善相关架构建设。

### 痛点 2：定制解决方案成本高，难维护

在 WeCity 的数据市场中，数据的交换和公开过程较为复杂繁琐，数据所有者的控制权也受到极大限制。现有的解决方案通常需要进行定制开发，带来高昂的成本，并难以维护。此外，将有价值的数据货币化的机会也相对有限，盈利机会不多。

### 痛点 3：市面数据集种类繁多，难管理

WeCity 的数据市场涵盖了许多与公共空间有关的数据集，包括交通、住房、自然、物流、废物管理等领域。我们希望确保数据所有者对这些数据集拥有绝对控制权，并同时以安全和标准化的方式使这些数据可供新的解决方案使用。然而，要实现数据管理与数据开放利用的平衡并非易事。

![WeCity](https://static.apiseven.com/uploads/2023/09/21/pcp55Tv4_Accessible%20city.png)

## 为什么 WeCity 选择 APISIX

为寻找适合的网关，我们曾调研多个知名开源项目，如 WSO2、Kong、Gravitee、3Scale、API Umbrella 等。然而，这些开源方案都存在不少限制。它们不仅需要我们签署昂贵的协议来获得附加技术支持，而且还需要我们的技术团队在原有基础上修改较多功能，且无法通过插件扩展，操作复杂，不符合我们对开源网关方案的期待。一番选型后，我们最终选定了 APISIX。

### 亮点 1：架构灵活、扩展性强

我们需要能够无缝集成到 WeCity 现有系统结构和基础架构的数据管理解决方案。WeCity 的基础架构在 Kubernetes 上运行，而 APISIX 支持原生 Kubernetes 解决方案，因而能够完美适配我们的需求。此外，APISIX 可以与其他组件轻松集成，包括元数据管理、流服务、数据模型、IAM（身份和访问管理）、指标和监控等。APISIX 还通过近100个开源插件提供了可扩展性，使我们能够根据自身需要自定义和增强功能效果。

### 亮点 2：功能强大、保障安全

WeCity 的目标是实现数据的安全交换，同时赋予数据所有者完全的控制权。APISIX 提供了强大的安全功能，包括身份验证和访问控制机制，如 JWT、OAuth、IP 允许列表和拒绝列表，以及速率限制等。这确保了数据的安全性。此外，APISIX 仅允许经授权一方访问，这也和我们保护数据隐私和控制的目标相契合。

### 亮点 3：多样交付、支持全面

WeCity 预计可以处理多种数据类型和交付机制。APISIX 提供全面支持，让我们能够灵活处理各种数据格式和协议。不论是 RESTful API、GraphQL、WebSockets 还是其他交付机制，APISIX 都可以提供所需的功能。

### 亮点 4：开源项目、响应及时

我们希望能在自己的架构中采用开源软件。因此，我们一直关注着 Apache 软件基金会提供的项目，并研究了部分开源 API 管理解决方案。最终，我们发现了APISIX，十分认可其开放性、灵活性以及活跃的社区生态，因此最终选择了它作为网关解决方案。事实证明，这个选择是正确的。APISIX 热心的开源团队给予了我们许多技术支持，帮我们解决了一些使用过程中遇到的问题，我们对此表示诚挚的感谢。

### 亮点 5：上手即用、讲解清晰

我们评估了多个开源项目提供的解决方案，但发现许多项目不是功能受限，就是仍需要大规模修改。而 APISIX 性能全面，无需进行太多调整即可满足我们团队的需求。另外，APISIX 易于使用，这也大大降低了实施的复杂性。例如，APISIX 的官方 Helm Chart 清晰直观，协助我们团队快速地成功启用了 APISIX Kubernetes Ingress Controller，节省了许多时间成本。

### 亮点 6：定制路由、快速高效

WeCity 目前在使用 APISIX 作为管理其路由和消费者的网关。由于我们需要处理来自不同类型的合作伙伴和客户的大量 API 访问请求，因此路由必须保持高度的灵活性。在使用 APISIX 之后，通过插件自定义每个路由的行为变得非常简单。例如，为现有后端 API 设置具有不同速率限制的新路由相当容易，只需通过对插件进行少量更改，即可快速生成新路由。我们使用 Kubernetes 中的本地 ApisixRoute 创建这些路由，并同时利用 APISIX Admin API。客户可以自主管理他们的订阅，一旦激活订阅，就会基于不同的身份验证配置动态创建路由。

## 成果

### 成果1：数据高效整合拓展

APISIX 简化了我们团队向 WeCity 数据市场添加新数据源的过程。通过 APISIX，我们可以无缝引入新的数据提供商，将其数据集集成到平台中，而无需进行大量的定制开发或复杂的集成工作。这种简化方法不仅为我们节省了时间，还为数据产品的快速扩展和多样化提供了更多机会。

同时，APISIX 还为 WeCity 提供了强大的解决方案，使我们能够高效地将计划和策略应用于不同的数据集，并将其顺利集成到现有架构中，帮助我们迅速适应并响应合作伙伴和客户不断变化的需求。

### 成果2：自定义规则提效率

APISIX 让我们团队能够利用现有的知识和专业经验，制定全面的计划和政策。我们可以为不同的数据集定义特定的访问规则、使用限制和定价模型，以确保其数据市场高效、安全地运行。APISIX 强大的监控功能还使我们能够密切跟踪和分析其 API 的使用情况，从而优化资源配置。

### 成果3：数据货币化得盈利

使用 APISIX 后，我们可以通过订阅实现盈利。APISIX 提供多种计费和订阅管理功能，使我们的团队能够有效管理收入流、自动化计费流程，并为客户提供良好的支付体验。

## 展望

WeCity 受荷兰基础设施部之托，将在未来三年着力于开发通用服务，以推动数据驱动移动生态系统的创新。预计 APISIX 在此项目中将继续展示其强大功能，助力我们为合作伙伴和客户提供卓越的数据驱动解决方案。