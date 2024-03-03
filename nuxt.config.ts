// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
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
    'nuxt-permissions',
    '@nuxtjs/i18n'
  ],

  i18n:{
    lazy: true,
    langDir: 'locales',
    locales:[
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English(US)',
        file: 'en-US.json'
      },
      {
        code: 'uz',
        iso: 'Lt-uz-UZ',
        name: 'Uzbek',
        file: 'uz-UZB.json'
      },
      {
        code: 'uzk',
        iso: 'uzk-UZ',
        name: 'Uzbek-cyril',
        file: 'uzk-UZB.json'
      },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'ru',
  }


})
