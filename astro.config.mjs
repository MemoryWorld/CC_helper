import { defineConfig } from "astro/config";

export default defineConfig({
  // TODO: 确认域名拼写，与 src/data/site.ts 中 profile.domain 保持一致
  site: "https://ricardomchen.com",
  build: {
    format: "file"
  }
});
