// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'layout', mode: 'out-in' }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

})
