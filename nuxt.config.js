
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap' }
    ],
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bootstrap-vue',
    '~/plugins/axios' ,
    '~/plugins/vue-swal'
  ],
  proxy: {
    '/api': 'https://sispsu.herokuapp.com/', 
    
    //-- ตั้งค่า map proxy url api server
    ws: true
  },
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy' 
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-axios' ,
      'vue-swal'//-- add vendor vue-axios
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      
    }
  }
}
