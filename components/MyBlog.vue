<template lang="pug">
  Details.blog(:title="'Мой блог'")
    .blog__wrap
      .blog__section
        h3.heading--small Old School Magic
        ul.list
          li.list__item
            a.link(href="articles/os-mtg-kak-nachaty-igrat") Old School: Как начать играть?
          li.list__item
            a.link(href="articles/old-school-deck-dead-guy-ale") Old School Deck: Dead Guy Ale
          li.list__item
            a.link(href="articles/old-school-deck-rabid-wombat") Old School Deck: Rabid Wombat

      .blog__section
        h3.heading--small Magic: the Gathering
        ul.list
          //li.list__item
          //  a.link(href="pages/modern-fetchless-gifts-storm/modern-fetchless-gifts-storm.html") Modern: Fetchless Gifts Storm
          li.list__item
            a.link(href="articles/standard-mono-black-aggro") Standard: Mono-Black Aggro
          li.list__item
            a.link(href="articles/retro-decktech-warp-world-t2") Retro Decktech Warp World (T2)
</template>

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