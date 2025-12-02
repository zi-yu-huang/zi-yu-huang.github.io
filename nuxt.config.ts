// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {},
  app: {
    baseURL: "/zi-yu-huang.github.io/", // ← 你的 repo 名稱
    buildAssetsDir: "/static/",
  },
});
