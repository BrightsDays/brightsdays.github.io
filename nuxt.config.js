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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    ssr: true,
    css: [
        './assets/styl/main.styl',
    ],
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/color-mode'
    ],
    styleResources: {
        stylus: [
            './assets/styl/variables.styl'
        ]
    },
    modules: [],
    components: {
        dirs: [
            '~/components',
            '~/layouts',
            '~/articles'
        ]
    }
}