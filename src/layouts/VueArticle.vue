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
  },
  head () {
    return {
      title: `brightsdays: ${this.title}`,
    }
  },
}
</script>

<style lang="sass">
.article
  position: relative
  padding: 40px 10px 80px

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
    bottom: 30px
    left: 10px

  &__date
    font-size: 1.2em
    position: absolute
    bottom: 30px
    right: 10px
    text-align: right

  @media ($tablet)
    padding-top: 15px
</style>