// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  nitro: {
    static: true,
  },
  
  site: {
    url: 'https://eidosinformatica.it',
    name: 'Eidos Informatica',
    description: 'Migliori prezzi e recensioni per prodotti di informatica, tablet, portatili, componenti e altro ancora',
    defaultLocale: 'it', // not needed if you have @nuxtjs/i18n installed
  },
  modules: ['@nuxtjs/seo'],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
