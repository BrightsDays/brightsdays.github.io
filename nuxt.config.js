export default {
  target: 'static',

  head: {
    title: 'brightsdays.io',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/sass/main.sass'
  ],

  plugins: [
    '~/plugins/window.ts'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode'
  ],

  modules: [
    '@nuxt/content'
  ],

  content: {},

  build: {}
}
