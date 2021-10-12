export default {
  /*
   ** Server middlewares
   */
  serverMiddleware: [{ path: '/', handler: '~/server/index.js' }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/apollo-client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/composition-api/module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@vue/apollo-composable'
    ]
  },

  apollo: {
    clientConfigs: {
      default: '~/graphql'
    }
  },

  env: {
    nuxtApiUrl: process.env.NUXT_API_URL + '/graphql'
  }
}
