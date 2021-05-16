<template lang="pug">
  .card
    input.card__toggle(
      type="checkbox"
      :checked="loaded === 'dark'"
      @change="switchTheme($event)")

    img.card__image(src="../assets/img/card/vivanov.jpg" alt="vivanov")

    .card__social
      a.card__link(
        v-for="(item, i) in links"
        :key="i"
        :class="`card__link--${item.class}`"
        :title="item.title"
        :href="item.url"
        :target="item.target"
      )
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Telegram',
          class: 'telegram',
          url: 'https://t.me/brightsdays',
          target: '_blank'
        },
        { title: 'Google Mail',
          class: 'mail',
          url: 'mailto:brightsdayss@gmail.com',
          target: ''
        },
        { title: 'Instagram',
          class: 'instagram',
          url: 'https://instagram.com/brightsdays',
          target: '_blank'
        },
        { title: 'Github',
          class: 'github',
          url: 'https://github.com/BrightsDays',
          target: '_blank'
        }
      ]
    }
  },
  computed: {
    loaded() {
      if (!process.server) {
        return localStorage.theme;
      }
    }
  },
  methods: {
    switchTheme (e) {
      if (e.target.checked) {
        this.$colorMode.preference = 'dark';
        localStorage.setItem('theme', 'dark');
      }
      else {
        this.$colorMode.preference = 'light';
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
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
    width: 36px
    height: 20px
    cursor: pointer

    &:before
      content: ''
      position: absolute
      top: 0
      right: 0
      width: 44px
      height: 28px
      border: solid darkgrey 1px
      border-radius: 20px
      opacity: 1

    &:after
      content: url("../assets/img/card/color-mode.svg")
      position: absolute
      top: 3px
      right: 3px
      width: 24px
      height: 24px
      border-radius: 16px
      -moz-transition: all 0.3s ease-out
      -o-transition: all 0.3s ease-out
      -webkit-transition: all 0.3s ease-out
      transition: all 0.3s ease-out
      pointer-events: none

    &:checked.card__toggle:after
      transform: translateX(-16px)

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

    &--mail
      background: url("../assets/img/card/mail.svg") no-repeat

    &--instagram
      background: url("../assets/img/card/instagram.svg") no-repeat

    &--github
      background: url("../assets/img/card/github.svg") no-repeat

    &:hover, &:focus, &:active
      opacity: 0.5
</style>