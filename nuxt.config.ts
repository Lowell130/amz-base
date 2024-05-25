// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  nitro: {
    static: true,
  },
  
  site: {
    // url: 'https://example.com',
    name: 'Fantastico sito di test',
    description: 'Sito di recensioni!',
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
