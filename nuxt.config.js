export default {
  target: 'static',
  router: {
    base: '/'
  },

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
    '~/assets/scss/main.scss'
  ],

  plugins: [
    '~/plugins/window.ts',
    '@/plugins/composition-api'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          language: 'en',
          hello: 'Hello',
          hello_content: 'My name is Viacheslav and I am Frontend Developer.',
          about: 'About',
          about_content_1: 'I\'m live in Batumi, Georgia. Have been working remotely since 2020.',
          about_content_2: 'Worked with Vue and SCSS, but also used other frameworks and preprocessors; I have uncommercial experience with React.',
          about_content_3: 'I also have hobbies - playing the harmonica, board games and drawing.',
          work: 'Work experience',
          work_content_1_1: 'Development of an intranet for a customer company',
          work_content_1_2: 'Development of a landing pages constructor',
          work_content_1_3: 'VueJS, NuxtJS, Vuex, Vue Router, Vuetify, Webpack, Gulp, Pug, Jade, Stylus were used',
          work_content_2_1: 'Development of landing pages (adaptive, cross-browser)',
          work_content_2_2: 'Creating and setting up of sliders, navigations, animations and other simple scripts',
          work_content_2_3: 'Gulp, JS, Pug, SASS were used'
        },
        ru: {
          language: 'ru',
          hello: 'Привет',
          hello_content: 'Меня зовут Вячеслав, и я фронтенд-разработчик.',
          about: 'Обо мне',
          about_content_1: 'Живу в Батуми, с начала 2020 работаю удаленно.',
          about_content_2: 'Работаю с Vue и SCSS - но также использовал другие сборщики, препроцессоры и шаблонизаторы; немного писал на React.',
          about_content_3: 'Увлекаюсь губной гармоникой, настольными играми и рисованием.',
          work: 'Опыт работы',
          work_content_1_1: 'Разработка портала для сотрудников компании-заказчика',
          work_content_1_2: 'Разработка конструктора сайтов',
          work_content_1_3: 'В работе использовались VueJS, NuxtJS, Vuex, Vue Router, Vuetify, Webpack, Gulp, Pug, Jade, Stylus',
          work_content_2_1: 'Верстка посадочных страниц, адаптивно и кросс браузерно',
          work_content_2_2: 'Создание слайдеров, навигации, параллакс-эффектов и других анимаций',
          work_content_2_3: 'В работе использовались Gulp, JS, Pug, SASS'
        }
      }
    }
  },

  content: {},

  build: {}
}
