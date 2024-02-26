// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
  ],

})
