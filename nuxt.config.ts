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
  },
  i18n: {
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
