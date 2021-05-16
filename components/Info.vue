<template lang="pug">
  .info
    .info__intro
      h1.heading--big Привет!&#128075;
      p.paragraph Меня зовут Вячеслав, и я  фронтенд-разработчик.
    Details(:title="'Обо мне'")
      p.paragraph Живу в Санкт-Петербурге, с начала 2020 работаю удаленно.
      p.paragraph В основном работаю с Vue/Pug/Sass - но использовал и другие препроцессоры и шаблонизаторы, собирал проекты при помощи Gulp, писал на React.
      p.paragraph В свободное время я учусь исполнять блюз на губной гармонике и играю в настольную игру 93 года выпуска.
</template>

<style lang="sass">
.info__intro
  padding: 0 15px
  margin-bottom: 1.5em
</style>