// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    static: true,
  },

  image: {
    domains: ['amazon.it']
  },
  
  site: {  
    url: 'https://eidosinformatica.it',
    name: 'Eidos Informatica',
    description: 'Migliori prezzi e recensioni per prodotti di informatica, tablet, portatili, componenti e altro ancora',
    defaultLocale: 'it', // not needed if you have @nuxtjs/i18n installed    
  },
  modules: ['@nuxtjs/seo','@nuxt/image'],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // head: {
  //   meta: [
  //     { name: 'google-site-verification', content: 'Q-VK_2Se54rJT10RvyOYgD3xX9uieENzzQ7vPsh64F0' }
  //   ]
  // }
});