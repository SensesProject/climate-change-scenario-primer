const { favicon, msapplication } = require('./assets/js/favicon.js')

module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    base: '/primer/'
  },
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: 'Climate Change Scenario',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Primer on climate change scenarios' },
      ...msapplication()
    ],
    link: [
      ...favicon()
    ]
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    'normalize-scss',
    // CSS file in the project
    '@/assets/style/base.scss'
  ],
  plugins: [
    '~/plugins/components.js'
  ],
  loading: { color: '#4E40B2' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
