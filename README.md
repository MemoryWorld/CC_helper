# ricardomchen.com

Claude Code 部署与工作流咨询服务网站（Astro 静态站，部署在 Cloudflare Pages）。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 改内容

几乎所有文字、价格、联系方式都在 `src/data/site.ts`，搜索 `TODO` 逐项确认：

| 项目 | 位置 |
|---|---|
| 名字、域名、邮箱、预约链接 | `profile` |
| 套餐价格与内容 | `servicePackages` |
| 常见问题 | `faqs` |
| 知识库文章 | `contentArticleDocs` |
| 联系方式 | `connectChannels` |
| 域名（SEO canonical） | `astro.config.mjs` 的 `site` |

替换图片：`public/images/avatar-placeholder.svg`（头像）、`public/images/qr-placeholder.svg`（微信二维码）。

## 部署到 Cloudflare Pages

### 方式 A：连接 GitHub（推荐，push 自动发布）

1. 把本目录推到一个 GitHub 仓库。
2. Cloudflare 控制台 → Workers & Pages → Create → Pages → Connect to Git，选择仓库。
3. 构建设置：Framework preset 选 `Astro`；Build command `npm run build`；Output directory `dist`；环境变量 `NODE_VERSION=22`。
4. 部署完成后进入项目 → Custom domains → 添加 `ricardomchen.com` 和 `www.ricardomchen.com`。域名已托管在 Cloudflare，DNS 记录会自动创建。

### 方式 B：命令行直接上传

```bash
npm run build
npx wrangler login
npx wrangler pages deploy dist --project-name ricardomchen
```

然后同样在 Custom domains 里绑定域名。

### 可选

- 邮箱：Cloudflare → 域名 → Email → Email Routing，把 `hello@ricardomchen.com` 转发到你的个人邮箱（免费）。
- www 跳转：Rules → Redirect Rules，把 `www.ricardomchen.com/*` 301 到 `https://ricardomchen.com/$1`。
- 统计：Pages 项目 → Metrics → 开启 Web Analytics（免费、无 Cookie）。

## 当前线上状态（2026-11-19）

- GitHub 仓库：https://github.com/MemoryWorld/CC_helper （分支 `main`）
- Cloudflare Pages 项目名：`ricardomchen`，账号 `chenfusheng448@gmail.com`
- 线上地址：https://ricardomchen.com （`www` 同样可访问）
- Pages 临时地址：https://ricardomchen.pages.dev
- DNS：`ricardomchen.com` 和 `www.ricardomchen.com` 均为 CNAME → `ricardomchen.pages.dev`（Proxied）

### 以后如何更新线上网站

当前是**手动上传 dist** 的方式部署（未连 Git 自动构建）。改完代码后执行：

```bash
npm run build
npx wrangler pages deploy dist --project-name ricardomchen --branch main
```

如需 push 自动部署，去 Cloudflare Pages 项目 → Settings → Builds & deployments → Connect to Git，
连接 `MemoryWorld/CC_helper`，构建命令 `npm run build`，输出目录 `dist`，环境变量 `NODE_VERSION=22`。
