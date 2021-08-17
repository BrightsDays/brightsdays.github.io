<template>
  <div class="content">
    <div class="info">
      <h1 class="heading--big">
        Привет! &#128075;
      </h1>
      <p class="paragraph">
        Меня зовут Вячеслав, и я  фронтенд-разработчик.
      </p>
    </div>
    <vue-details :title="'Обо мне'">
      <p class="paragraph">Живу в Санкт-Петербурге, с начала 2020 работаю удаленно.</p>
      <p class="paragraph">Работаю с <b>Vue + Sass</b> - но использовал и другие сборщики, препроцессоры и шаблонизаторы; немного писал на React.</p>
      <p class="paragraph">В свободное время я учусь исполнять блюз на губной гармонике и играю в настольную игру 93 года выпуска.</p>
    </vue-details>
    <vue-details class="work" :title="'Опыт работы'">
      <ul class="list">
        <li class="list__item">
          <ul class="work__info">
            <p><i>2021</i> - <b>ExtTeam</b>, Frontend Developer</p>
            <p>- работаю в настоящее время.</p>
          </ul>
        </li>
        <li class="list__item">
          <ul class="work__info">
            <p><i>2020-2021</i> - <b>AdCombo</b>, HTML/CSS Developer</p>
            <p>- верстал посадочные страницы, адаптивно и кросс-браузерно;</p>
            <p>- использовал Gulp, Pug, SASS/SCSS;</p>
            <p>- создавал слайдеры, навигацию, параллакс-эффекты и другие анимации.</p>
          </ul>
        </li>
      </ul>
    </vue-details>
    <page-blog />
  </div>
</template>

<script>
import VueDetails from '../layouts/VueDetails';
import PageBlog from "@/components/PageBlog";

export default {
  components: {
    PageBlog,
    VueDetails
  }
}
</script>

<style lang="sass">
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