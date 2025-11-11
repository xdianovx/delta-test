// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "normalize.css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/vars.scss" as *;',
        },
      },
    },
  },

  modules: ["nuxt-echarts"],
  echarts: {
    renderer: ["svg"],
    charts: ["LineChart"],
    components: ["DatasetComponent", "GridComponent", "TooltipComponent"],
  },
});
