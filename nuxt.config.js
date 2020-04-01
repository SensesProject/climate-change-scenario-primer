const nodeExternals = require('webpack-node-externals')
const { favicon, msapplication } = require('./assets/js/favicon.js')

module.exports = {
  /*
  ** Headers of the page
  */
  // mode: 'spa',
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
      { property: 'og:image:width', content: '1190' },
      { property: 'og:image:height', content: '623' },
      { property: 'og:title', content: 'Climate Change Scenario Primer' },
      { property: 'og:description', content: 'We can’t predict the future, but scenarios allow us to explore possible futures. This primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate and climate impacts.' },
      { property: 'og:url', content: 'http://climatescenarios.org/primer' },
      { property: 'og:image', content: 'http://climatescenarios.org/primer/og.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@UCLab_Potsdam' },
      { name: 'twitter:title', content: 'Climate Change Scenario Primer' },
      { name: 'twitter:description', content: 'We can&rsquo;t predict the future, but scenarios allow us to explore possible futures. This primer explains what climate change scenarios are and how they are connected to socioeconomics, energy &amp; land use, emissions, climate and climate impacts.' },
      { name: 'twitter:image', content: 'http://climatescenarios.org/primer/og.png' },
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
