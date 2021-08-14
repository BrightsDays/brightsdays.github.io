<template>
  <vue-details class="blog" :title="'Мой блог'">
    <div class="blog__wrap">
      <div class="blog__section">
        <h3 class="heading--small">Old School Magic</h3>
        <ul class="list">
          <li class="list__item">
            <a class="link" href="articles/os-mtg-kak-nachaty-igrat">Old School: Как начать играть?</a>
          </li>
          <li class="list__item">
            <a class="link" href="articles/old-school-deck-dead-guy-ale">Old School Deck: Dead Guy Ale</a>
          </li>
          <li class="list__item">
            <a class="link" href="articles/old-school-deck-rabid-wombat">Old School Deck: Rabid Wombat</a>
          </li>
        </ul>
      </div>
      <div class="blog__section">
        <h3 class="heading--small">Magic: the Gathering</h3>
        <ul class="list">
          <li class="list__item">
            <a class="link" href="articles/modern-fetchless-gifts-storm">Modern: Fetchless Gifts Storm</a>
          </li>
          <li class="list__item">
            <a class="link" href="articles/articles/standard-mono-black-aggro">Standard: Mono-Black Aggro</a>
          </li>
          <li class="list__item">
            <a class="link" href="articles/articles/retro-decktech-warp-world-t2">Retro Decktech Warp World (T2)</a>
          </li>
        </ul>
      </div>
    </div>
  </vue-details>
</template>

<script>
import VueDetails from '../layouts/VueDetails';

export default {
  components: {
    VueDetails
  },
}
</script>

<style lang="sass">
.blog
  &__wrap
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 20px

  &__section
    flex: 1 1 45%
</style>