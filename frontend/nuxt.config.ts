// https://nuxt.com/docs/api/configuration/nuxt-config
console.log('ENV Base API URL:', process.env.NUXT_PUBLIC_BASE_API_URL);
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseApiUrl: '',
    },
  },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '@/assets/css/main.css',
    'vue-final-modal/style.css',
  ],

  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
  ],

  carousel: {
    prefix: 'Base'
  },

  compatibilityDate: '2025-01-04'
})