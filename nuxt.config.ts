// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  ui: {},
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "/static/",
    head: {
      title: "Febe's Website", // 設置預設網頁標題
      link: [
        // 設置 Favicon，文件應放在 public/favicon.ico
        { rel: 'icon', type: 'image/x-icon', href: '/myLogo.png' } 
      ]
    }
  },
  i18n: {
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "zh-tw",
        iso: "zh-TW",
        file: "zh-tw.json",
      },
    ],
    defaultLocale: "zh-tw",
  },
});
