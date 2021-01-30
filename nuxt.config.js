export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'سيما ببلاش',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/Root.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/owl.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],


  env: {
    baseUrl: process.env.BASE_URL || 'https://cima-api.shofda.com/api'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: '#DD3F3F',
    height: '10px'
  }  
}
