<template>
  <div class="container">
    <page-card />
    <div class="content">
      <div class="info">
        <h1 class="heading--big">
          Привет! &#128075;
        </h1>
        <p class="paragraph">
          Меня зовут Вячеслав, и я фронтенд-разработчик.
        </p>
      </div>
      <blog-details :title="'Обо мне'">
        <p class="paragraph">
          Живу в Санкт-Петербурге, с начала 2020 работаю удаленно.
        </p>
        <p class="paragraph">
          Работаю с <b>Vue + Sass</b> - но использовал и другие сборщики, препроцессоры и шаблонизаторы;
          немного писал на React.
        </p>
        <p class="paragraph">
          В свободное время я учусь исполнять блюз на губной гармонике и играю в настольную игру 93 года выпуска.
        </p>
      </blog-details>
      <blog-details class="work" :title="'Опыт работы'">
        <ul class="list">
          <li class="list__item">
            <ul class="work__info">
              <p>
                <i>2021</i> - <b>ExtTeam</b>, Frontend Developer
              </p>
              <p>
                - Разработка портала для сотрудников компании-заказчика;
              </p>
              <p>
                Разработка конструктора сайтов;
              </p>
              <p>
                - В работе использовались VueJS, NuxtJS, Vuex, Vue Router, Vuetify, Webpack, Gulp, Pug, Jade, Stylus.
              </p>
            </ul>
          </li>
          <li class="list__item">
            <ul class="work__info">
              <p>
                <i>2020-2021</i> - <b>AdCombo</b>, HTML/CSS Developer
              </p>
              <p>
                - Верстка посадочных страниц, адаптивно и кросс браузерно;
              </p>
              <p>
                - Создание слайдеров, навигации, параллакс-эффектов и других анимаций;
              </p>
              <p>
                - В работе использовались Gulp, JS, Pug, SASS.
              </p>
            </ul>
          </li>
        </ul>
      </blog-details>
      <page-blog />
    </div>
  </div>
</template>

<script>
import PageCard from '../components/PageCard.vue'
import BlogDetails from '../layouts/BlogDetails.vue'
import PageBlog from '../components/PageBlog.vue'

export default {
  components: {
    PageCard,
    PageBlog,
    BlogDetails
  }
}
</script>

<style lang="sass">
@import './assets/sass/main.sass'

.container
  display: flex
  flex-wrap: wrap
  margin: 0 auto
  padding: 40px 0
  width: 1100px
  max-width: 100%
  gap: 30px

  @media ($tablet)
    padding: 15px 0

.info
  padding: 0 1.5em
  margin-bottom: 1.5em

.work
  &__info
    padding-top: 0.5em
    font-size: inherit

    p
      font-size: 1em
      line-height: 1.2em
      margin-top: 0.3em
</style>
