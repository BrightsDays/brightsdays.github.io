<template lang="pug">
  .content

    .info
      h1.heading--big Привет! &#128075;
      p.paragraph Меня зовут Вячеслав, и я  фронтенд-разработчик.

    Details(:title="'Обо мне'")
      p.paragraph Живу в Санкт-Петербурге, с начала 2020 работаю удаленно.
      p.paragraph Работаю с <b>Vue/Pug/Sass</b> - но использовал и другие препроцессоры и шаблонизаторы, собирал проекты при помощи Gulp, писал на React.
      p.paragraph В свободное время я учусь исполнять блюз на губной гармонике и играю в настольную игру 93 года выпуска.

    Details.work(:title="'Опыт работы'")
      ul.list
        li.list__item <i>2021</i> - <b>ExtTeam</b>, Frontend Developer
        li.list__item <i>2020-2021</i> - <b>AdCombo</b>, HTML/CSS Developer

    Details.portfolio(:title="'Портфолио'")
      ul.list
        li.list__item
          a.link(href="https://brightsdays.github.io/mortgage-calculator/" target="_blank" title="Mortage calculator" rel="noreferrer") Ипотечный калькулятор
          p.list__about Простое React-приложение, с помощью которого можно рассчитать ежемесячные затраты на выплату ипотечного обязательства.
        li.list__item
          a.link(href="https://brightsdays.github.io/nan-landing-page/" target="_blank" title="NAN Optipro" rel="noreferrer") Лендинг NAN Optipro
          p.list__about Пример верстки рекламной страницы для производителя детского питания. Лендинг составлен из компонентов React.
    MyBlog
</template>

<script>

</script>

<style lang="sass">
.info
  padding: 0 15px
  margin-bottom: 1.5em
</style>