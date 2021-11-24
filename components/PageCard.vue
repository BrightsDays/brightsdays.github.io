<template>
  <div class="card">
    <button
      class="card__toggle"
      @click="changeColorMode()"
    />
    <img class="card__image" src="../assets/img/card/vivanov.jpg" alt="vivanov">
    <div class="card__social">
      <a
        v-for="(item, i) in links"
        :key="i"
        class="card__link"
        :class="`card__link--${item.class}`"
        :title="item.title"
        :href="item.url"
        :target="item.target"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      links: [
        {
          title: 'Telegram',
          class: 'telegram',
          url: 'https://t.me/brightsdays',
          target: '_blank'
        },
        {
          title: 'Google Mail',
          class: 'mail',
          url: 'mailto:brightsdayss@gmail.com',
          target: ''
        },
        {
          title: 'Instagram',
          class: 'instagram',
          url: 'https://instagram.com/brightsdays',
          target: '_blank'
        },
        {
          title: 'Github',
          class: 'github',
          url: 'https://github.com/BrightsDays',
          target: '_blank'
        }
      ]
    }
  },
  methods: {
    changeColorMode (): string {
      const colorMode: string = this.$colorMode.preference = this.$colorMode.preference === 'dark'
        ? 'light'
        : 'dark'

      return colorMode
    }
  }
})
</script>

<style lang="sass">
.card
  position: relative
  vertical-align: top
  margin: 0 auto
  width: 290px

  &__toggle
    position: absolute
    top: 0
    right: 0
    -webkit-appearance: none
    -moz-appearance: none
    border: none
    background: none
    width: 30px
    height: 30px
    cursor: pointer

  &__image
    display: block
    width: 290px
    height: 290px
    border-radius: 50%

  &__social
    display: flex
    justify-content: space-between
    list-style: none

  &__link
    display: inline-block
    width: 60px
    height: 60px
    transition: opacity 0.6s
    border-radius: 30px
    margin: 12px 0 0 0

    &--telegram
      background: url("../assets/img/card/telegram.svg") no-repeat

    &--twitter
      background: url("../assets/img/card/twitter.svg") no-repeat

    &--mail
      background: url("../assets/img/card/mail.svg") no-repeat

    &--instagram
      background: url("../assets/img/card/instagram.svg") no-repeat

    &--github
      background: url("../assets/img/card/github.svg") no-repeat

    &:hover, &:focus, &:active
      opacity: 0.5

.light-mode
  .card__toggle
    background: url("../assets/img/card/moon.svg")

.dark-mode
  .card__toggle
    background: url("../assets/img/card/sun.svg")
</style>
