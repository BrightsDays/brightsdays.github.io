<template>
  <article class="content article">
    <nuxt-content :document="article" />
    <i class="article__date">Viacheslav Ivanov<br>{{ article.date || 'one day' }}</i>
    <a class="link article__index-bottom" href="/">На главную</a>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content(`magic/${params.slug}`).fetch()

    return { article }
  }
}
</script>

<style lang="sass">
.article
  position: relative
  padding: 1.5em 1.5em 6em

  h1
    font-size: 3em
    font-weight: 600
    margin-top: 0

  h2
    font-size: 1.8em
    font-weight: 500
    margin-top: 1em

  p
    font-size: 1.8em
    margin-top: 1em
    line-height: 1.7em

  b, i
    font-size: 1em
    font-weight: 500

  a
    font-size: 1em
    text-decoration: none
    font-weight: 450
    color: var(--link)

    &:hover, &:focus, &:active
      text-decoration: underline

  blockquote
    font-size: 1.4em
    padding-left: 10px
    margin-top: 1.5em
    border-left: 2px solid var(--summary)

  img
    display: block
    margin: 1.5em auto 0
    max-width: 100%

  caption
    font-size: 1.6em
    text-align: center
    margin-top: 3px

  .article__index-bottom
    position: absolute
    font-size: 1.6em
    bottom: 1em
    left: 1em

  .article__date
    font-size: 1.2em
    position: absolute
    bottom: 1em
    right: 1.5em
    text-align: right
</style>
