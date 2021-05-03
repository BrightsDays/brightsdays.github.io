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
    // modules: [
    //     '@nuxtjs/axios',
    //     '@nuxtjs/style-resources',
    //     '@nuxtjs/auth-next'
    // ],
    // styleResources: {
    //     stylus: [
    //         './assets/styl/variables.styl'
    //     ]
    // },
    // plugins: [
    // ],
    components: {
        dirs: [
            '~/components'
        ]
    },
    // generate: {
    //     fallback: '404.html'
    // }
}