export default {
    target: 'static',
    head: {
        title: 'brightsdays',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    ssr: true,
    css: [
        './assets/sass/main.sass',
    ],
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/color-mode'
    ],
    styleResources: {
        sass: [
            './assets/sass/variables.sass'
        ]
    },
    modules: [],
    plugins: [
        '~/plugins/window.client.js'
    ],
    components: {
        dirs: [
            '~/components',
            '~/layouts',
            '~/articles'
        ]
    }
}