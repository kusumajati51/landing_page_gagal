// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-font-loader',
  ],
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
})
