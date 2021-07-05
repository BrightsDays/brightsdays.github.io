<template lang="pug">
  .content

    .info
      .info__intro
        h1.heading--big Привет!&#128075;
        p.paragraph Меня зовут Вячеслав, и я  фронтенд-разработчик.

    Details(:title="'Обо мне'")
      p.paragraph Живу в Санкт-Петербурге, с начала 2020 работаю удаленно.
      p.paragraph Работаю с <b>Vue/Pug/Sass</b> - но использовал и другие препроцессоры и шаблонизаторы, собирал проекты при помощи Gulp, писал на React.
      p.paragraph В свободное время я учусь исполнять блюз на губной гармонике и играю в настольную игру 93 года выпуска.

    Details.work(:title="'Опыт работы'")
      ul.list
        li.list__item <i>2021</i> - <b>ExtTeam</b>, Frontend Developer
        li.list__item <i>2020-2021</i> - <b>AdCombo</b>, HTML/CSS Developer

    Details.portfolio(:title="'Приложения'")
      ul.list
        li.list__item
          a.link(href="https://brightsdays.github.io/mortgage-calculator/index.html" target="_blank" title="Mortage calculator" rel="noreferrer") Mortage calculator

    MyBlog
</template>

<script>

</script>

<style lang="sass">
.info__intro
  padding: 0 15px
  margin-bottom: 1.5em
</style>