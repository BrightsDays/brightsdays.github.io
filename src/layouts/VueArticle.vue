<template>
  <div class="content article">
    <h1 class="heading--big">{{ title }}</h1>
    <slot />
    <i class="article__date">Viacheslav Ivanov<br>{{ date }}</i>
    <a class="link article__index-bottom" href="/">На главную</a>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    date: { type: String }
  }
}
</script>

<style lang="sass">
@import '../assets/sass/main.sass'

.article
  position: relative
  padding: 0 1.5em 6em

  &__blockquote
    font-size: 1.4em
    padding-left: 10px
    margin-top: 1.5em
    border-left: 2px solid var(--summary)

  &__image
    display: block
    margin: 1.5em auto 0
    max-width: 100%

  &__caption
    font-size: 1.6em
    text-align: center
    margin-top: 3px

  &__index-bottom
    position: absolute
    font-size: 1.6em
    bottom: 1em
    left: 1em

  &__date
    font-size: 1.2em
    position: absolute
    bottom: 1em
    right: 1.5em
    text-align: right
</style>