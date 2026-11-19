// =============================================================
//  站点内容集中配置
//  标记了 TODO 的地方是上线前需要你本人确认 / 替换的信息
// =============================================================

export const profile = {
  name: "Ricardo",
  brand: "ricardomchen",
  role: "Claude Code 部署与 AI 工作流顾问",
  location: "澳大利亚 · 远程服务",
  domain: "https://ricardomchen.com", // TODO: 确认域名拼写（与 astro.config.mjs 保持一致）
  email: "hello@ricardomchen.com", // TODO: 可用 Cloudflare Email Routing 免费转发到你的邮箱
  bookingUrl: "https://cal.com/YOUR_HANDLE/15min", // TODO: Cal.com / Calendly 预约链接
  currency: "AUD",
  avatar: "/images/avatar-placeholder.svg" // TODO: 替换为你的头像
};

export const navLinks = [
  { href: "/services", label: "服务与价格" },
  { href: "/services#process", label: "合作流程" },
  { href: "/articles", label: "知识库" },
  { href: "/updates", label: "更新" },
  { href: "/connect", label: "预约咨询" }
];

export const footerLinks = navLinks;

// 服务范围 / 合规声明：在首页、服务页、联系页都会展示
export const scopeNotice = {
  title: "服务范围说明",
  points: [
    "仅服务位于 Anthropic 官方支持国家/地区的个人与团队（如澳大利亚、新西兰、美国、英国、加拿大、新加坡、日本等，以官方列表为准）。",
    "你需要使用自己名下合法的 Claude 订阅（Pro / Max / Team / Enterprise）或 Anthropic Console API Key。",
    "不提供账号注册代办、代充、共享账号、API 转售或任何网络代理 / 绕过地区限制的服务。",
    "全程由你本人在自己的电脑上操作，我通过屏幕共享指导，不接触、不保存你的密码和密钥。",
    "本站为独立第三方技术服务，与 Anthropic 无隶属关系；Claude 是 Anthropic PBC 的商标。"
  ],
  officialRegionsUrl: "https://www.anthropic.com/supported-countries"
};

export const hero = {
  kicker: "Claude Code Setup & Workflow",
  title: "把 Claude Code 装好、配好、用顺手",
  description:
    "面向海外华人开发者、留学生和中小团队的中文远程服务：一次把 Claude Code 安装配置到位，再按你的项目搭好 MCP、命令和团队规范。你负责写代码，我负责让 AI 工具顺手。"
};

export const heroStats = [
  { value: "中文", label: "全程中文沟通" },
  { value: "远程", label: "屏幕共享 1 对 1" },
  { value: "A$149 起", label: "单次安装配置" },
  { value: "7–30 天", label: "交付后答疑" }
];

export const homeQuickEntries = [
  { label: "安装配置", href: "/services#pkg-setup", text: "macOS / Windows / Linux，从零到能用，60–90 分钟搞定。", meta: "A$149 / 次" },
  { label: "MCP 与工作流", href: "/services#pkg-workflow", text: "接上 GitHub、数据库、浏览器和文档，定制命令与 Hooks。", meta: "A$399 起" },
  { label: "团队部署培训", href: "/services#pkg-team", text: "统一权限、规范和成本管理，配一场实操工作坊。", meta: "A$1,500 起" },
  { label: "包月顾问", href: "/services#pkg-retainer", text: "长期陪跑：定期会议 + 异步答疑 + 工作流迭代。", meta: "A$299 / 月" }
];

export const audiences = [
  { title: "海外华人开发者", text: "英文文档看得懂，但想用中文快速把环境、权限和最佳实践一次搞清楚。" },
  { title: "海外留学生", text: "做课程项目、毕设或实习，想把 AI 编程助手正确地用起来，而不是只会聊天。" },
  { title: "中小团队 / 创业公司", text: "想让整个团队统一用 Claude Code，但缺一个人把规范、权限和成本先理顺。" },
  { title: "非全职程序员", text: "产品、数据、运营等岗位，想用 Claude Code 写脚本、处理数据、做自动化。" }
];

export const whyMe = [
  { title: "中文讲清楚", text: "所有概念、命令和坑都用中文解释，配套交付中文操作文档。" },
  { title: "按你的项目配", text: "不是通用教程，而是基于你真实的仓库、技术栈和习惯来配置。" },
  { title: "安全优先", text: "你本人操作、我远程指导；默认最小权限，敏感目录和命令先拦住。" },
  { title: "交付可复用", text: "CLAUDE.md、命令、MCP 配置都留在你的仓库里，团队可以直接复用。" }
];

// TODO: 价格为建议定价，上线前按你的实际情况调整
export const servicePackages = [
  {
    id: "pkg-setup",
    title: "快速上手 · 安装配置",
    label: "最受欢迎",
    price: "A$149",
    unit: "/ 次 · 60–90 分钟",
    description: "从零开始，把 Claude Code 在你的电脑上装好、登录好、跑通第一个真实任务。",
    points: [
      "环境检查与安装（macOS / Windows / Linux / WSL）",
      "订阅登录或 API Key 配置，帮你选合适的计费方式",
      "VS Code / JetBrains / 终端集成",
      "用 /init 为你的项目生成 CLAUDE.md",
      "基础权限与安全设置",
      "交付后 7 天文字答疑"
    ],
    featured: true
  },
  {
    id: "pkg-workflow",
    title: "进阶 · MCP 与工作流搭建",
    label: "开发者进阶",
    price: "A$399",
    unit: "起 · 约 2–3 小时",
    description: "围绕你的项目和日常工作，把 Claude Code 接上工具、定制命令，形成可复用的工作流。",
    points: [
      "需求梳理：哪些环节交给 AI 最划算",
      "MCP 服务器选型与配置（GitHub、数据库、浏览器、文档等）",
      "自定义斜杠命令、Subagents 与 Hooks",
      "项目级 CLAUDE.md 与代码规范沉淀",
      "中文操作文档",
      "交付后 14 天答疑"
    ],
    featured: false
  },
  {
    id: "pkg-team",
    title: "团队 · 部署与培训",
    label: "2–20 人团队",
    price: "A$1,500",
    unit: "起 / 团队",
    description: "让团队用同一套标准使用 Claude Code：权限、规范、成本都可控，成员上手快。",
    points: [
      "Team / Enterprise / API 方案选型与成本估算",
      "共享 settings.json 权限策略与仓库模板",
      "团队 CLAUDE.md、命令库与 MCP 配置",
      "2 小时实操工作坊（可录屏）",
      "新成员上手指南",
      "交付后 30 天支持"
    ],
    featured: false
  },
  {
    id: "pkg-retainer",
    title: "包月 · 长期顾问",
    label: "持续迭代",
    price: "A$299",
    unit: "/ 月 · 随时可停",
    description: "适合已经在用、想持续优化的个人或小团队。新功能出来，我帮你判断要不要用、怎么用。",
    points: [
      "每月 2 次 60 分钟远程会议",
      "工作日 24 小时内异步答疑",
      "工作流与配置持续迭代",
      "新版本 / 新功能解读与落地建议",
      "按月付费，随时可停"
    ],
    featured: false
  }
];

export const processSteps = [
  { no: "01", title: "预约免费评估", text: "选一个 15 分钟时段，简单说明你的系统、项目和目标。" },
  { no: "02", title: "确认方案与报价", text: "我给出建议套餐和具体范围，确认后付款锁定时间。" },
  { no: "03", title: "远程 1 对 1 实施", text: "Zoom / Google Meet 屏幕共享，你操作、我指导，边做边讲。" },
  { no: "04", title: "交付文档与答疑", text: "配置留在你的仓库，附中文文档；答疑期内随时提问。" }
];

export const prerequisites = [
  "一台可以屏幕共享的电脑（macOS、Windows 或 Linux）",
  "你本人名下的 Claude 订阅或 Anthropic Console 账号",
  "位于 Anthropic 支持的国家/地区",
  "一个你想用 Claude Code 处理的真实项目（可选，但效果更好）"
];

export const faqs = [
  {
    q: "我在中国大陆，可以购买吗？",
    a: "不可以。Claude 目前不在中国大陆提供服务，我只为位于 Anthropic 官方支持地区的用户服务，也不提供任何代理、代充或共享账号。"
  },
  {
    q: "需要我提前准备什么？",
    a: "你自己的 Claude 订阅（Pro / Max / Team / Enterprise）或 Anthropic Console API Key，以及一台能屏幕共享的电脑。不确定选哪种计费方式，可以在免费评估里先聊。"
  },
  {
    q: "你会接触我的密码或 API Key 吗？",
    a: "不会。所有登录和密钥输入都由你本人完成，我只通过屏幕共享指导，也会提醒你在共享前遮挡敏感信息。"
  },
  {
    q: "支持 Windows 吗？",
    a: "支持。Claude Code 可以在 macOS、Linux 和 Windows（原生或 WSL）上运行，我会根据你的环境推荐最稳妥的方式。"
  },
  {
    q: "怎么付款？可以开收据吗？",
    a: "支持银行转账（PayID）、Stripe 付款链接或 PayPal，确认方案后发送。可以提供正式收据。"
  },
  {
    q: "如果没装成功怎么办？",
    a: "单次安装配置如果因为我的原因没能跑通，全额退款。评估阶段我也会先确认你的环境能不能支持。"
  },
  {
    q: "可以用英文沟通吗？",
    a: "可以。默认中文，英文也没问题，交付文档可以出中英双语版本。"
  }
];

export const updates = [
  { date: "2026-11-13", tag: "上线", title: "ricardomchen.com 上线", excerpt: "Claude Code 部署与工作流咨询服务正式开放预约，提供安装配置、MCP 工作流、团队培训和包月顾问四种方案。" },
  { date: "2026-11-13", tag: "知识库", title: "首批 6 篇中文指南发布", excerpt: "覆盖 Claude Code 入门、计费方式选择、安装前检查、CLAUDE.md、MCP 和团队规范。" }
];

export const contentCategories = [
  { slug: "basics", label: "入门" },
  { slug: "workflow", label: "工作流" },
  { slug: "mcp", label: "MCP" },
  { slug: "team", label: "团队" }
];

export const contentArticleDocs = [
  {
    slug: "what-is-claude-code",
    categorySlug: "basics",
    category: "入门",
    keywords: ["Claude Code", "入门", "适合谁"],
    title: "Claude Code 是什么，适合谁用",
    summary: "它不是聊天窗口，而是一个能读你的代码、跑命令、改文件的终端 AI 助手。",
    minutes: "5 分钟",
    sections: [
      { heading: "一句话理解", paragraphs: ["Claude Code 是 Anthropic 官方推出的命令行 AI 编程工具。你在项目目录里启动它，用自然语言描述任务，它会自己阅读代码、提出修改方案、执行命令，并在你确认后改动文件。", "和网页版聊天最大的区别是：它直接工作在你的真实项目里，而不是让你来回复制粘贴代码。"] },
      { heading: "适合哪些场景", paragraphs: ["理解陌生代码库、批量重构、写测试、修 Bug、写脚本处理数据、生成文档、做代码审查，都是它的强项。", "对于非全职程序员，用它写一次性的自动化脚本、整理表格和文件，也非常高效。"] },
      { heading: "不适合什么", paragraphs: ["它不会替你做产品判断，也不应该在没有审查的情况下直接改生产环境。好的用法是：你定目标和边界，它负责执行，你负责验收。"] }
    ]
  },
  {
    slug: "plan-vs-api",
    categorySlug: "basics",
    category: "入门",
    keywords: ["订阅", "API", "计费"],
    title: "订阅还是 API Key：怎么选更划算",
    summary: "个人高频使用通常选订阅，团队和自动化场景再考虑 API 或团队方案。",
    minutes: "4 分钟",
    sections: [
      { heading: "两种主要方式", paragraphs: ["一种是用 Claude 订阅（如 Pro、Max）登录，按月付费，用量有额度限制；另一种是用 Anthropic Console 的 API Key，按实际 Token 用量计费。", "团队还可以选择 Team 或 Enterprise 方案，统一管理成员和账单。具体包含的额度和价格以 Anthropic 官网为准。"] },
      { heading: "简单的选择原则", paragraphs: ["个人每天都在用、希望费用可预期：优先订阅。", "偶尔使用，或需要在 CI / 脚本里自动调用：API Key 更灵活。", "团队超过几个人、需要统一管理：评估 Team / Enterprise。"] }
    ]
  },
  {
    slug: "install-checklist",
    categorySlug: "basics",
    category: "入门",
    keywords: ["安装", "检查清单", "Windows", "macOS"],
    title: "安装前的 5 项检查清单",
    summary: "大部分安装问题都出在环境上。动手前先花 5 分钟检查这几项。",
    minutes: "4 分钟",
    sections: [
      { heading: "1. 所在地区", paragraphs: ["确认你位于 Anthropic 官方支持的国家/地区，这是能正常注册和使用的前提。"] },
      { heading: "2. 操作系统与终端", paragraphs: ["macOS、Linux 和 Windows 都可以使用。Windows 用户可以选择原生方式或 WSL，提前想好你习惯在哪个终端里工作。"] },
      { heading: "3. 安装方式", paragraphs: ["官方提供原生安装脚本，也支持通过 npm 安装（需要较新版本的 Node.js）。安装命令以官方文档为准，不要使用来路不明的“一键安装包”。"] },
      { heading: "4. 账号与计费", paragraphs: ["准备好你自己的订阅账号或 Console API Key，不要使用他人共享的账号。"] },
      { heading: "5. 一个真实项目", paragraphs: ["准备一个用 Git 管理的项目目录。第一次使用就在真实项目里跑一个小任务，比看十篇教程更有效。"] }
    ]
  },
  {
    slug: "claude-md",
    categorySlug: "workflow",
    category: "工作流",
    keywords: ["CLAUDE.md", "项目记忆", "/init"],
    title: "用 CLAUDE.md 让 Claude 读懂你的项目",
    summary: "CLAUDE.md 是写给 AI 的项目说明书，写好它，输出质量会明显提升。",
    minutes: "6 分钟",
    sections: [
      { heading: "它是什么", paragraphs: ["CLAUDE.md 是放在项目根目录的 Markdown 文件，Claude Code 每次启动都会读取它。你可以把它理解为项目的长期记忆。", "在项目里运行 /init，Claude 会先扫描代码库并生成一份初稿。"] },
      { heading: "应该写什么", paragraphs: ["技术栈和目录结构、常用命令（安装、测试、构建）、代码风格约定、不允许碰的目录、提交规范。", "写具体的规则，比如“测试用 Vitest，新功能必须带单测”，比“写高质量代码”有用得多。"] },
      { heading: "保持精简", paragraphs: ["它会占用上下文，越长不代表越好。只写 AI 每次都需要知道的信息，其余放到单独文档里按需引用。"] }
    ]
  },
  {
    slug: "mcp-intro",
    categorySlug: "mcp",
    category: "MCP",
    keywords: ["MCP", "工具", "集成"],
    title: "MCP 入门：把 Claude 接上你的工具",
    summary: "MCP 让 Claude Code 能直接查询 GitHub、数据库、浏览器和文档。",
    minutes: "6 分钟",
    sections: [
      { heading: "MCP 是什么", paragraphs: ["MCP（Model Context Protocol）是一个开放协议，让 AI 应用以统一方式连接外部工具和数据源。接上之后，Claude 可以直接读 Issue、查数据库、操作浏览器，而不是让你手动复制信息。"] },
      { heading: "怎么添加", paragraphs: ["可以用 claude mcp add 命令添加服务器，也可以在项目里通过 .mcp.json 共享配置，让团队成员拿到同样的工具。"] },
      { heading: "安全提醒", paragraphs: ["只安装可信来源的 MCP 服务器，数据库优先用只读账号，凭据放在环境变量里，不要直接写进仓库。"] }
    ]
  },
  {
    slug: "team-setup",
    categorySlug: "team",
    category: "团队",
    keywords: ["团队", "权限", "成本", "settings.json"],
    title: "团队使用 Claude Code：权限、规范与成本",
    summary: "团队上 AI 工具，先定规则再推广，比先推广再补救轻松得多。",
    minutes: "5 分钟",
    sections: [
      { heading: "先定权限", paragraphs: ["通过项目级 settings.json 统一允许和禁止的命令，比如禁止读取 .env、禁止直接推送主分支。规则进仓库，所有人自动生效。"] },
      { heading: "再定规范", paragraphs: ["共享 CLAUDE.md、常用斜杠命令和 MCP 配置，让每个人的 AI 都按同一套标准工作。"] },
      { heading: "最后看成本", paragraphs: ["根据人数和使用强度比较订阅、Team / Enterprise 和 API 方案，定期查看用量，避免意外账单。"] }
    ]
  }
];

// TODO: 替换为你的真实联系方式；微信二维码放到 public/images/ 后修改 qr 路径
export const connectChannels = [
  { icon: "calendar", name: "在线预约", value: "选择时间", desc: "免费 15 分钟评估，自动发送会议链接。", href: profile.bookingUrl },
  { icon: "mail", name: "邮件", value: "发送邮件", desc: `${profile.email} · 适合发送详细需求或团队询价。`, href: `mailto:${profile.email}?subject=Claude%20Code%20consultation` },
  { icon: "wechat", name: "微信", value: "查看二维码", desc: "微信号 Ricardo，添加请备注「Claude」+ 所在国家。", qr: "/images/wechat-qr.jpg" }
];
