(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{181:function(t,e,r){var content=r(188);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("632e50ca",content,!0,{sourceMap:!1})},186:function(t,e,r){t.exports=r.p+"img/vivanov.94c09b3.jpg"},187:function(t,e,r){"use strict";r(181)},188:function(t,e,r){var o=r(45),n=r(189),c=r(190),l=r(191),d=r(192),h=r(193),m=r(194),_=o(!1),x=n(c),y=n(l),M=n(d),I=n(h),k=n(m);_.push([t.i,'.card{position:relative;vertical-align:top;margin:0 auto;width:290px}.card__toggle{position:absolute;top:0;right:0;-webkit-appearance:none;-moz-appearance:none;border:none;background:none;width:36px;height:20px;cursor:pointer}.card__toggle:before{content:"";position:absolute;top:0;right:0;width:44px;height:28px;border:1px solid #a9a9a9;border-radius:20px;opacity:1}.card__toggle:after{content:url('+x+");position:absolute;top:3px;right:3px;width:24px;height:24px;border-radius:16px;transition:all .3s ease-out;pointer-events:none}.card__toggle:checked.card__toggle:after{transform:translateX(-16px)}.card__image{display:block;width:290px;height:290px;border-radius:50%}.card__social{display:flex;justify-content:space-between;list-style:none}.card__link{display:inline-block;width:60px;height:60px;transition:opacity .6s;border-radius:30px;margin:12px 0 0}.card__link--telegram{background:url("+y+") no-repeat}.card__link--mail{background:url("+M+") no-repeat}.card__link--instagram{background:url("+I+") no-repeat}.card__link--github{background:url("+k+") no-repeat}.card__link:active,.card__link:focus,.card__link:hover{opacity:.5}",""]),t.exports=_},189:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},190:function(t,e,r){t.exports=r.p+"img/color-mode.436e848.svg"},191:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI2MHB4IgogICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiBmaWxsPSIjMTU3YmM0IiByPSIxMiIvPgogICAgPHBhdGggZD0ibTUuNDkxIDExLjc0IDExLjU3LTQuNDYxYy41MzctLjE5NCAxLjAwNi4xMzEuODMyLjk0M2wuMDAxLS4wMDEtMS45NyA5LjI4MWMtLjE0Ni42NTgtLjUzNy44MTgtMS4wODQuNTA4bC0zLTIuMjExLTEuNDQ3IDEuMzk0Yy0uMTYuMTYtLjI5NS4yOTUtLjYwNS4yOTVsLjIxMy0zLjA1MyA1LjU2LTUuMDIzYy4yNDItLjIxMy0uMDU0LS4zMzMtLjM3My0uMTIxbC02Ljg3MSA0LjMyNi0yLjk2Mi0uOTI0Yy0uNjQzLS4yMDQtLjY1Ny0uNjQzLjEzNi0uOTUzeiIKICAgICAgICAgIGZpbGw9IiNmZmYiLz4KPC9zdmc+"},192:function(t,e,r){t.exports=r.p+"img/mail.bdc805a.svg"},193:function(t,e,r){t.exports=r.p+"img/instagram.601924e.svg"},194:function(t,e,r){t.exports=r.p+"img/github.534093b.svg"},200:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{links:[{title:"Telegram",class:"telegram",url:"https://t.me/brightsdays",target:"_blank"},{title:"Google Mail",class:"mail",url:"mailto:brightsdayss@gmail.com",target:""},{title:"Instagram",class:"instagram",url:"https://instagram.com/brightsdays",target:"_blank"},{title:"Github",class:"github",url:"https://github.com/BrightsDays",target:"_blank"}]}},computed:{loaded:function(){return localStorage.theme}},methods:{switchTheme:function(t){t.target.checked?(this.$colorMode.preference="dark",localStorage.setItem("theme","dark")):(this.$colorMode.preference="light",localStorage.setItem("theme","light"))}}},n=(r(187),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("input",{staticClass:"card__toggle",attrs:{type:"checkbox"},domProps:{checked:"dark"===t.loaded},on:{change:function(e){return t.switchTheme(e)}}}),o("img",{staticClass:"card__image",attrs:{src:r(186),alt:"vivanov"}}),o("div",{staticClass:"card__social"},t._l(t.links,(function(t,i){return o("a",{key:i,staticClass:"card__link",class:"card__link--"+t.class,attrs:{title:t.title,href:t.url,target:t.target}})})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);