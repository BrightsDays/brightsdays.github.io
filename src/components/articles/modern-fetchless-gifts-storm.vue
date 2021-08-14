<template lang="pug">
  Article(:title="'Modern: Fetchless Gifts Storm'"
          :date="'13.01.2018'")
    p.paragraph Почти половину прошлого года я играл разными версиями Шторма в Современном формате, но так и не смог добраться до топа RPTQ. Зато я изучил большое количество материалов о самой колоде, интересных комбинациях и сайдовых решениях - а теперь хочу поделиться ими с вами.
    p.paragraph Данный обзор частично основан на моем игровом опыте, но в большей степени - на информации из блога Калеба Шерера. Это скорее вольный перевод с небольшими дополнениями. Если вы интересуетесь колодой и не испытываете проблем с английским языком, обязательно следите за обновлениями на ресурсе AdventuringGear.com.
    h2.heading Деклист
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/fetchless_storm.jpg')" alt="Deck list")
    h2.heading Немного о колоде
    p.paragraph Шторм это комбоколода, основанная на одноименной механике: когда вы играете заклинание со способностью Шторм, скопируйте его за каждое сыгранное в этом ходу заклинание - для этих копий вы можете выбрать новые цели. В модерне Шторм выигрывает, используя карты Grapeshot и Empty the Warrens. Первая карта позволяет выиграть за один ход, нанося критичное количество повреждений оппоненту, а вторая создает сильное давление на нашей половине стола и требует меньшего количества ресурсов.
    p.paragraph Основная механика колоды требует от нас доступа к большому количеству маны и карт, к тому же за один ход. Для этих целей используются ритуалы (заклинания, производящие дополнительную ману) и карта, позволяющая использовать кладбище вместо руки - Past in Flames.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/rituals.png')" alt="Rituals")
    p.paragraph Взаимодействие с собственной колодой осуществляется за счет заклинаний, позволяющих выбирать одну из двух-трех карт с верха колоды (их называют кантрипами) и Gifts Ungiven - заклинания, которое находит две карты в руку и еще две на кладбище (не забывайте, что кладбище для нас - вторая рука). Gifts Ungiven - это карта, которая подарила колоде половину названия, и чуть позже мы подробно ее рассмотрим.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/cantrips.png')" alt="Cantrips")
    p.paragraph На заре модерна, когда бан-лист еще не был полностью сформирован, любители поштормить имели доступ к самым лучшим ритуалам формата - и слишком неплохо штормили на первых турнирах, в связи с чем карты для этой колоды банили чуть ли не каждый сезон. Но в 2017 году отношение Wizards of the Coast к шторму изменилось, и в формат вошли Baral, Chief of Compliance и Spirebluff Canal, а в свежем выпуске Modern Masters переиздали довольно важные для колоды кантрипы.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/creatures.png')" alt="Creatures")
    p.paragraph Видимо, колоду пытались вернуть в формат, но при этом сбалансировать: удешевляющие заклинания существа (дорки или Medallion Bears) превращают плохие ритуалы в настоящие, но при этом уязвимы к ремувалу; бороться с закруткой последней версии Шторма может почти любая колода. И разработчики справились со своей задачей - назвать колоду нечестной и доминирующей нельзя, но при этом она отлично подходит для игры на соревновательном уровне.
    h2.heading Закрутка
    p.paragraph Закрутка (процесс завершения партии за один ход) в колоде Gifts Storm осуществляется следующим образом:
    ul.list
      li.list__item <b>1.</b> с тремя землями на столе разыгрываем дорка, оставляя развернутым красный источник;
      li.list__item <b>2.</b> на оставшуюся ману играем два ритуала и Manamorphose за синей;
      li.list__item <b>3.</b> используя Gifts Ungiven, находим все три разных ритуала и Past in Flames: не важно, что оппонент отправит на кладбище - наши заклинания все равно получат Flashback;
      li.list__item <b>4.</b> разыгрываем Past in Flames и все заклинания из кладбища, находим Grapeshot и выигрываем.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/wincons.png')" alt="Wincons")
    p.article__caption Карты, которые вы хотите найти с помощью Gifts Ungiven.
    p.paragraph Это не единственный способ закрутиться - вот несколько состояний, при которых вы моментально выигрываете (если оппонент ничего не сделает):
    ul.list
      li.list__item <b>1.</b> существо, возможность получить 6 ман и Gifts Ungiven в руке;
      li.list__item <b>2.</b> существо, возможность получить 5 ман и Gifts Ungiven, Manamorphose в руке;
      li.list__item <b>3.</b> существо, возможность получить 5 ман и Gifts Ungiven, Past in Flames в руке.
    p.paragraph Кроме того, выиграть за один ход можно на двух землях - и сделать это можно уже на второй ход!
    h2.heading Grapeshot-Remand-Grapeshot-Jutsu!
    p.paragraph Помимо карт, приближающих нас к победе, в колоде используются и способы взаимодействия с оппонентом - Lightning Bolt позволяет избавляться от опасных существ, а некоторые перманенты очень хочется вернуть в руку. Но лучшей картой для ответа на чужие угрозы является Remand.
    p.paragraph Это контрспелл, который отправляет отмененное заклинание в руку, а не на кладбище - но позволяет нам взять карту. Фактически это кантрип, который вместо возможности выбора замедляет оппонента. Но самое важное - мы можем выиграть при помощи Remand, разыграв за ход всего десять заклинаний!
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/remand.png')" alt="Remand")
    p.paragraph Когда мы выбираем целью этой отмены Grapeshot, все его копии останутся в стеке и нанесут свои повреждения - а оригинальная карта вернется в руку, и ее можно будет разыграть повторно. В самой "свежей" версии колоды используется карта с эффектом, похожим на Remand - Unsubstantiate; с Grapeshot она работает аналогично, кроме того позволяет ответить на угрозы, уже попавшие на поле боя, и возвращает в руку заклинания, которые нельзя отменить.
    h2.heading Gifts Ungiven и Noxious Revival
    p.paragraph Обычно мы выигрываем при помощи Gifts Ungiven, находя в колоде ритуалы или карты со штормом - но при помощи Noxious Revival можно использовать наш тютор для поиска отдельных карт, необходимых в определенных ситуациях.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/gifts.png')" alt="Gifts")
    p.paragraph Оппонент вызывает опасное существо, которое нужно убрать ремувалом?<br>Blood Moon превратит все небазовые земли в горы?<br>Что-то срочно необходимо отменить?
    p.paragraph Решение есть - разыгрываем Gifts Ungiven и ищем Noxious Revival, Manamorphose и две копии необходимого ответа (в первой партии это Island/Snow-Covered Island, Remand/Grapeshot или Remand/Unsubstantiate); не важно, что оппонент отправит на кладбище - мы в любом случае получим нужную карту сразу в руку или вернем на верх библиотеки и возьмем при помощи Manamorphose, не теряя маны!
    h2.heading Почему именно Fetchless Storm?
    p.paragraph На данный момент существует две версии этой колоды - Gifts Storm с фечками и Fetchless Storm Калеба Шерера. Отличаются они только наличием в манабазе фечек - земель, ищущих другие земли в стол.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/fetchs.png')" alt="Fetchs")
    p.paragraph Я убежден, что у версии без фечек намного больше плюсов:
    ul.list
      li.list__item <b>1.</b> улучшается качество кантрипов - если мы убираем все ненужные карты на дно колоды, зачем перемешивать ее лишний раз?
      li.list__item <b>2.</b> в затяжных матчах против контрольных и мидрэндж колод часто помогает большое количество земель - но фечки лишают нас этого, и иногда даже не могут найти землю в стол (играют обычно в 8 фечек и 5 целей для них);
      li.list__item <b>3.</b> фечки популярны во многих форматах Магии, и стоимость Fetchless-версии почти в два раза меньше.
    p.paragraph Есть у этой версии и недостатки: уязвимость к Blood Moon и "болезненность" за счет Shivan Reef. Но плюсы все-таки превосходят минусы.
    h2.heading Сайдбординг
    p.paragraph Лист, которым играю я - точная копия листа Калеба, но он отличается сайдбордом:
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/sideboard.png')" alt="Sideboard")
    p.paragraph Сайдовые решения против самых популярных колод я привожу на его примере.
    h2.heading Death Shadow
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/death_shadow.jpg')" alt="Death Shadow")
    p.paragraph Дискард и дешевый ремувал сильно портят наш план на игру, а быстрые угрозы не позволяют стабилизироваться. Но необходимость оппонента находиться в "красной зоне" (ниже 10 пунктов жизни) позволяет выиграть при помощи Grapeshot-Remand-Grapeshot-Jutsu.
    p.paragraph Убираем: 4 Baral, Chief of Compliance, 2 Goblin Electromancer, 4 Gifts Ungiven<br>Добавляем: 2 Empty the Warrens, 1 Dismember, 3 Lightning Bolt, 4 Pieces of the Puzzle
    p.paragraph В партиях после сайда мы превращаемся в плохой контроль и минимализируем качество карт у оппонента: единственными целями для ремувала становятся токены Гоблинов, а Pieces of the Puzzle не сильно уязвим к ответам на наше кладбище. Grapeshot, Dismember и Lightning Bolt - ремувал для угроз оппонента, закрывающий партию только в крайнем случае, а основная наша угроза - небольшие отряды маленьких гоблинов.
    h2.heading Affinity
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/affinity.jpg')" alt="Affinity")
    p.paragraph План Affinity довольно прямолинеен и предусматривает только минимальное взаимодействие с нашими угрозами - так что, если мы не увидим Galvanic Blast в дорка, выиграть будет довольно просто.
    p.paragraph Убираем: 3 Remand, 3 Opt<br>Добавляем: 2 Shattering Spree, 3 Lightning Bolt, 1 Empty the Warrens
    p.paragraph После сайда у нас появляются эффективные ответы на артефактный хэйт и существ, что позволит дожить до закрутки. Unsubstantiate остается, чтобы отвечать на неартефактные карты ненависти, а Empty the Warrens позволит выиграть после неожиданного Surgical Extraction.
    h2.heading Jeskai Control
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/jeskai.jpg')" alt="Jeskai")
    p.paragraph Контроль довольно неплохо справляется со Штормом из-за большого количества ответов, но лучшие карты в этой колоде достаточно манаемкие - при удачном стечении обстоятельств через них можно пробиться.
    p.paragraph Убираем: 2 Gifts Ungiven, 1 Noxious Revival, 2 Goblin Electromancer, 1 Grapeshot, 1 Past in Flames, 1 Opt<br>Добавляем: 2 Pieces of the Puzzle, 2 Empty the Warrens, 2 Lightning Bolt, 2 Gigadrowse
    p.paragraph После сайда количество и разнообразие ответов увеличивается, кроме того появляются новые угрозы - контроль может взаимодействовать с кладбищем, использовать Planeswalker'ов, Spell Queller и Runed Halo; приходится отрезать часть ориентированной на кладбище комбинации. Lightning Bolt позволяет поконтрить духа или нанести летальные повреждения.
    p.paragraph Лучшее, на что мы можем рассчитывать в матче - это быстрая рука с Gigadrowse для отключения оппонента в конце его хода или много токенов с Empty the Warrens за ход до Supreme Verdict.
    h2.heading Humans
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/humans.jpg')" alt="Humans")
    p.paragraph Именно из-за этой колоды в мэйне появился Unsubstantiate - без него мы проигрываем первую партию Meddling Mage, сказанному на Grapeshot.
    p.paragraph Убираем: 3 Remand, 2 Opt<br>Добавляем: 1 Echoing Truth, 3 Lightning Bolt, 1 Empty the Warrens
    p.paragraph Remand бесполезен против состоящих из существ колод с Aether Vial и Cavern of Soul - а Shattering Spree может оказаться мертвой картой. После сайда мы отвечаем на существ оппонента ремувалом, а небольшое количество гоблинов сможет сдержать наземные атаки или вынудит потратить ход на призыв Izzet Staticaster.
    h2.heading Gifts Storm
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/storm.jpg')" alt="Storm")
    p.paragraph Обычно первую партию выигрывает пилот с самой быстрой рукой - проиграв кубик, мы вряд ли ответим на дорка на второй ход. Но и у оппонента может возникнуть эта проблема.
    p.paragraph Убираем: 3 Opt, 1 Grapeshot, 1 Gifts Univen<br>Добавляем: 3 Lightning Bolt, 1 Dismember, 1 Gigadrowse
    p.paragraph После сайда мы увеличиваем возможности взаимодействия с существами. Gifts Ungiven стоит убрать или частично заменить, так как оппонент может использовать Dispel в сайдборде.
    h2.heading Burn
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/burn.jpg')" alt="Burn")
    p.paragraph Первую партию мы проиграем, если не ответим на Eidolon of Great Revel на второй - а сделать это до сайда довольно непросто. Кроме того, многие огненные заклинания оппонента отлично справляются с дорками.
    p.paragraph Убираем: 3 Opt, 1 Remand, 1 Noxious Revival<br>Добавляем: 3 Lightning Bolt, 2 Empty the Warrens
    p.paragraph После сайда проще отвечать на Эйдолона в столе, а быстрые гоблины с двумя-тремя ритуалами с большой вероятностью выиграют игру.
    h2.heading Eldrazi Tron
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/eldrazy.jpg')" alt="Eldrazi")
    p.paragraph Chalice of the Void на 2 может закрыть первую партию, кроме того в колоде присутствует дискард и Relic of Progenitus.
    p.paragraph Убираем: 4 Gifts Ungiven, 1 Noxious Revival, 3 Opt, 1 Grapeshot<br>Добавляем: 2 Empty the Warrens, 2 Shattering Spree, 4 Pieces of the Puzzle, 1 Echoing Truth
    p.paragraph Здесь мы надеемся быстро закрутиться в гоблинов - это может принести победу и, как минимум, заставит оппонента взаимодействовать с нашим столом и позволит накопить карты для победной комбинации. Так же после сайда мы можем ответить на Chalice и не так сильно боимся атаки на наше кладбище.
    img.article__image(:src="require('../../assets/img/modern-fetchless-gifts-storm/fire.jpg')" alt="Fire")
    p.paragraph Fetchless Gifts Storm - это интересная и вполне бюджетная колода. Она ненамного дороже популярных колод для Стандартного формата, но не превратится во Фронтир через полгода. Обязательно подумайте о ней, если планируете вступить в ряды Современных Магов!
</template>