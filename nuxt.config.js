export default {

  target: 'server', // static|server default is server
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My description' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  // not sensitive variable available to public
  publicRuntimeConfig: {
    youtube_api_key: process.env.YOUTUBE_API_KEY
  },

  // sensitive variable only available on serverside
  privateRuntimeConfig: {
    facebook_api_key: process.env.FACEBOOK_API_KEY
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/my-plugin",
      mode: 'client' // server or client
    },
    "@/plugins/dayjs",
    "@/plugins/vtooltip",
    "@/plugins/axios"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: '/',

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
