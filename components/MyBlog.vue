<template lang="pug">
  Details.blog(open :title="'Мой блог'")
    .blog__wrap
      .blog__section
        h3.h3 Old School Magic
        ul.ul
          li.li
            a.a(href="pages/os-mtg-kak-nachaty-igrat.html") Old School: Как начать играть?
          li.li
            a.a(href="pages/old-school-deck-dead-guy-ale/old-school-deck-dead-guy-ale.html") Old School Deck: Dead Guy Ale
          li.li
            a.a(href="pages/old-school-deck-rabid-wombat.html") Old School Deck: Rabid Wombat

      .blog__section
        h3.h3 Magic: the Gathering
        ul.ul
          li.li
            a.a(href="pages/modern-fetchless-gifts-storm/modern-fetchless-gifts-storm.html") Modern: Fetchless Gifts Storm
          li.li
            a.a(href="pages/standard-mono-black-aggro.html") Standard: Mono-Black Aggro
          li.li
            a.a(href="pages/Retro-Decktech-Warp-World-T2.html") Retro Decktech Warp World (T2)

      .blog__section
        h3.h3 Минимализм
        ul.ul
          li.li
            a.a(href="pages/rashlamliaem-smartfon.html") Расхламляем смартфон
          li.li
            a.a(href="pages/oshibki-pri-rashlamlenii.html") Ошибки при расхламлении
          li.li
            a.a(href="articles/chto-takoe-minimalism") Что такое минимализм?
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