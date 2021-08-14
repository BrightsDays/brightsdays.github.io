<template lang="pug">
  .content.error
    h1.heading--big(v-if="error.statusCode === 404") Страница не найдена &#128560;
    h1.heading--big(v-else) Произошла ошибка
    p.paragraph
      a.link(href="/") На главную
</template>

<script>
// TODO Change error page
export default {
  props: ['error'],
  layout: 'error'
}
</script>

<style lang="sass">
.error
  padding-top: 30vh
  text-align: center
</style>