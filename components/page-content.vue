<template lang="pug">
  .content

    .info
      h1.heading--big Привет! &#128075;
      p.paragraph Меня зовут Вячеслав, и я  фронтенд-разработчик.

    Details(:title="'Обо мне'")
      p.paragraph Живу в Санкт-Петербурге, с начала 2020 работаю удаленно.
      p.paragraph Работаю с <b>Vue + Sass</b> - но использовал и другие сборщики, препроцессоры и шаблонизаторы; немного писал на React.
      p.paragraph В свободное время я учусь исполнять блюз на губной гармонике и играю в настольную игру 93 года выпуска.

    Details.work(:title="'Опыт работы'")
      ul.list
        li.list__item <i>2021</i> - <b>ExtTeam</b>, Frontend Developer
          ul.work__info
            p - работаю в настоящее время.
        li.list__item <i>2020-2021</i> - <b>AdCombo</b>, HTML/CSS Developer
          ul.work__info
            p - верстал посадочные страницы, адаптивно и кроссбраузерно;
            p - использовал сборщик, шаблонизатор, препроцессы (Gulp, Pug, SASS/SCSS);
            p - создавал слайдеры, навигацию, паралакс-эффекты и другие анимации.

    page-blog
</template>

<script>

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
      font-size: 0.9em
      line-height: 1.2em
      margin-top: 0.3em

  .list__item
    margin-top: 1em
</style>