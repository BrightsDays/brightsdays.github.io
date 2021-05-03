<template lang="pug">
  .container
    .card
      input.card__toggle(type="checkbox")

      img.card__image(src="img/vivanov.jpg" alt="vivanov")
      .card__social
        a.card__link.card__link--telegram(href="https://t.me/brightsdays" target="_blank" title="Telegram" rel="noreferrer")
        a.card__link.card__link--mail(href="mailto:brightsdayss@gmail.com" title="Google Mail" rel="noreferrer")
        a.card__link.card__link--twitter(href="https://twitter.com/brightsdays" target="_blank" title="Twitter" rel="noreferrer")
        a.card__link.card__link--github(href="https://github.com/BrightsDays" target="_blank" title="Github" rel="noreferrer")

    .content
      .content-info
        h1.h1 Привет!&#128075;
        p.p Меня зовут Вячеслав, 33 года, живу в Санкт-Петербурге.
        p.p Пять лет я занимался администрированием сайтов - и в результате увлекся веб-разработкой, начал изучать JS.
        p.p В коммерческой разработке с 2020.

      details.content-stack.details
        summary.summary Стек
        ul.ul
          li.li HTML5, CSS3, BEM, SASS/SCSS, Pug
          li.li JavaScript, React, Gulp, Webpack
          li.li Photoshop, Figma, Gimp, Zeplin
          li.li Git, Github, npm
          li.li Jest

      details.content-work.details
        summary.summary Опыт работы
        ul.ul
          li.li <i class="i">2021</i> - <b class="b">ExtTeam</b>, Фронтенд-разработчик
          li.li <i class="i">2020-2021</i> - <b class="b">AdCombo</b>, HTML-верстальщик
          li.li <i class="i">2018-2020</i> - <b class="b">Гласс Фурнитура СПб</b>, Администратор сайтов

      details.content-portfolio.details
        summary.summary Портфолио
        ul.ul
          li.li
            a.a(href="https://brightsdays.github.io/mortgage-calculator/index.html" target="_blank" title="Mortage calculator" rel="noreferrer") Mortage calculator
          li.li
            a.a(href="https://brightsdays.github.io/survey-form/index.html" target="_blank" title="Landing page with survey form" rel="noreferrer") Landing page with survey form
          li.li
            a.a(href="https://brightsdays.github.io/vista-test/index.html" target="_blank" title="Patient's list" rel="noreferrer") Patient's list

      .content-blog
        h2.h2 Мой блог

        .content-blog__section
          h3.h3 Old School Magic
          ul.ul
            li.li
              a.a(href="pages/os-mtg-kak-nachaty-igrat.html") Old School: Как начать играть?
            li.li
              a.a(href="pages/old-school-deck-dead-guy-ale/old-school-deck-dead-guy-ale.html") Old School Deck: Dead Guy Ale
            li.li
              a.a(href="pages/old-school-deck-rabid-wombat.html") Old School Deck: Rabid Wombat

        .content-blog__section
          h3.h3 Magic: the Gathering
          ul.ul
            li.li
              a.a(href="pages/modern-fetchless-gifts-storm/modern-fetchless-gifts-storm.html") Modern: Fetchless Gifts Storm
            li.li
              a.a(href="pages/standard-mono-black-aggro.html") Standard: Mono-Black Aggro
            li.li
              a.a(href="pages/Retro-Decktech-Warp-World-T2.html") Retro Decktech Warp World (T2)

        .content-blog__section
          h3.h3 Минимализм
          ul.ul
            li.li
              a.a(href="pages/rashlamliaem-smartfon.html") Расхламляем смартфон
            li.li
              a.a(href="pages/oshibki-pri-rashlamlenii.html") Ошибки при расхламлении
            li.li
              a.a(href="pages/chto-takoe-minimalizm/chto-takoe-minimalizm.html") Что такое минимализм?
</template>

<style lang="stylus">

</style>