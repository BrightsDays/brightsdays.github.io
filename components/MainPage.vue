<template lang="pug">
  .container
    Card

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

      MyBlog
</template>

<style lang="stylus">

</style>