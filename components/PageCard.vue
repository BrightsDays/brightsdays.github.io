<template>
  <div class="card">
    <nuxt-link
      :to="$route.path.includes('/ru') ? switchLocalePath('en') : switchLocalePath('ru')"
      class="card__language"
    >
      {{ $t('language') }}
    </nuxt-link>
    <button
      class="card__color"
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
          title: 'LinkedIn',
          class: 'linkedin',
          url: 'https://www.linkedin.com/in/brightsdays',
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

<style lang="scss">
.card {
  position: relative;
  vertical-align: top;
  margin: 0 auto;
  width: 290px;

  &__language {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    color: #A9A9A9;
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    background: none;
    border: 3px solid #A9A9A9;
    border-radius: 15px;
  }

  &__color {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &__image {
    display: block;
    width: 290px;
    height: 290px;
    border-radius: 50%;
  }

  &__social {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  &__link {
    display: inline-block;
    width: 60px;
    height: 60px;
    transition: opacity 0.6s;
    border-radius: 30px;
    margin: 12px 0 0 0;

    &--telegram {
      background: url("../assets/img/card/telegram.svg") no-repeat;
    }

    &--twitter {
      background: url("../assets/img/card/twitter.svg") no-repeat;
    }

    &--mail {
      background: url("../assets/img/card/mail.svg") no-repeat;
    }

    &--linkedin {
      background: url("../assets/img/card/linkedin.svg") no-repeat;
    }

    &--github {
      background: url("../assets/img/card/github.svg") no-repeat;
    }

    &:hover, &:focus, &:active {
      opacity: 0.5;
    }
  }
}

.light-mode {
  .card__color {
    background: url("../assets/img/card/moon.svg");
  }
}

.dark-mode {
  .card__color {
    background: url("../assets/img/card/sun.svg");
  }
}
</style>
