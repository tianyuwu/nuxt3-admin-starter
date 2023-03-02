// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      link: [],
      script: [],
    }
  },
  // 自定义配置项
  runtimeConfig: {
    // 只在服务端可以访问的配置项
    apiSecret: 'api-secret',
    // 可以暴露给客户端使用的配置项
    public: {}
  },
  modules: [
    '@unocss/nuxt',
    '@element-plus/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
})
