// const { favicon, msapplication } = require('./assets/js/favicon.js')
const { getHead } = require('library/src/assets/js/head.js')

module.exports = {
  /*
  ** Headers of the page
  */
  // mode: 'spa',
  router: {
    base: '/primer/'
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    ...getHead({
      title: 'Primer to Climate Scenarios',
      description: 'An interactive primer that gives an introduction to climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate change and climate impacts.',
      image: 'https://climatescenarios.org/share/og-primer.jpg'
    })
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    // 'normalize-scss',
    // CSS file in the project
    '@/assets/style/base.scss'
  ],
  plugins: [
    '~/plugins/components.js',
    // '~/plugins/vue-js-modal.js'
  ],
  loading: { color: '#4E40B2' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.pug$/,
          loader: 'pug-plain-loader',
          options: {
            data: {}
          }
        })
      }
    }
  }
}
