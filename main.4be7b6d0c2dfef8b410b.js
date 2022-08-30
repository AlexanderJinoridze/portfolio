(()=>{"use strict";var e,i={851:(e,i,t)=>{var r=t(638),o=t.n(r);t(504);const n=JSON.parse('[{"title":"Art of Multiplication","link":"http://art-of-multiplication.herokuapp.com","img":"01","repo":"https://github.com/AlexanderJinoridze/multiplication-practice-app","isHerokuApp":true},{"title":"ExArt","link":"http://exart.infinityfreeapp.com","img":"02","repo":"https://github.com/AlexanderJinoridze/currency","isHerokuApp":false},{"title":"Art Drive","link":"http://artdrive.ge","img":"03","isHerokuApp":false},{"title":"Event Promotion","link":"http://eventpromotion.ge/","img":"19","isHerokuApp":false},{"title":"PAYBOX","link":"http://sales.novatech.ge","img":"07","isHerokuApp":false},{"title":"Elit Light","link":"http://elitlight.infinityfreeapp.com/","img":"04","repo":"https://github.com/AlexanderJinoridze/elit-light","isHerokuApp":false},{"title":"IsaService","link":"http://isa.ge","img":"17","isHerokuApp":false},{"title":"MedAir","link":"http://medairi.ge","img":"18","isHerokuApp":false},{"title":"Chart","link":"http://chart.infinityfreeapp.com/","img":"05","repo":"https://github.com/AlexanderJinoridze/chart","isHerokuApp":false},{"title":"URL Shortener","link":"https://url-shortener-aj.herokuapp.com/","img":"06","repo":"https://github.com/AlexanderJinoridze/url-shortener","isHerokuApp":true},{"title":"MineSweeper","link":"http://minesweeper.infinityfreeapp.com/","img":"08","repo":"https://github.com/AlexanderJinoridze/minesweeper","isHerokuApp":false},{"title":"TicTacToe","link":"http://tictactoe.infinityfreeapp.com/","img":"09","repo":"https://github.com/AlexanderJinoridze/tic-tac-toe","isHerokuApp":false},{"title":"Bonavian Calendar","link":"http://bonaviancalendar.epizy.com/","img":"10","isHerokuApp":false},{"title":"Scratchcard","link":"https://codepen.io/alexanderjinoridze/pen/VwXzaKa","img":"12","isHerokuApp":false},{"title":"Rendgen","link":"https://codepen.io/alexanderjinoridze/pen/NWYvNGw","img":"13","isHerokuApp":false},{"title":"Multiplication Table","link":"https://codepen.io/alexanderjinoridze/pen/jOzLqPz","img":"15","isHerokuApp":false},{"title":"Japan Journey","link":"http://japanjourney.infinityfreeapp.com/","img":"16","isHerokuApp":false},{"title":"Zuka LTD","link":"http://zuka.infinityfreeapp.com/","img":"20","isHerokuApp":false},{"title":"Financial Consulting","link":"http://financial-consulting.infinityfreeapp.com/","img":"21","isHerokuApp":false},{"title":"Gagra Plus","link":"http://gagraplus.infinityfreeapp.com/","img":"22","isHerokuApp":false},{"title":"Phoenix","link":"http://phoenixconstruction.infinityfreeapp.com/","img":"23","isHerokuApp":false},{"title":"TMH","link":"http://tmh.infinityfreeapp.com/","img":"25","isHerokuApp":false},{"title":"Turistuli","link":"http://turistuli.infinityfreeapp.com/","img":"11","isHerokuApp":false},{"title":"Tbilcement Group","link":"https://www.tbilcement.ge/","img":"24","isHerokuApp":false}]');document.getElementById("curr_date").innerText=(new Date).getFullYear(),o()(document).ready((function(){var e=1120,i=4*(parseFloat(o()("html").css("font-size"))||16),t=function(){window.innerHeight-i<=o()(".header__menu").height()?o()(".header__nav").addClass("menu-scroll"):o()(".header__nav").removeClass("menu-scroll")};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){localStorage.theme||(e.matches?o()("html").addClass("dark-mode"):o()("html").removeClass("dark-mode"))})),o()(".theme-switch").on("click",(function(){var e=document.documentElement;e.classList.toggle("dark-mode"),o()(e).hasClass("dark-mode")?localStorage.theme="dark":localStorage.theme="light"})),o()(".header a[href^='#']").on("click",(function(e){e.preventDefault();var i=this.hash,t=o()(i);o()("html, body").stop().animate({scrollTop:t.offset().top},800)})),o()(".header__burger, .header__menu-item").on("click",(function(i){window.innerWidth<=e&&(o()(".header__burger").toggleClass("active"),o()(".header__nav").slideToggle("fast")),t()})),o()(".header__logo").on("click",(function(){window.innerWidth<=e&&(o()(".header__burger").removeClass("active"),o()(".header__nav").slideUp("fast"))})),o()(window).on("resize",(function(){window.innerWidth>=e&&(o()(".header__burger").removeClass("active"),o()(".header__nav").removeAttr("style")),t()}));var r="";n.forEach((function(e){var i=e.link,t=e.img,o=e.repo,n=e.title,a=e.isHerokuApp,l='<div class="portfolio-slide">\n        <a href="'.concat(i,'" target="_blank" class="portfolio-card">\n            <div class="portfolio-card__image">\n                <img src="./images/portfolio-images/portfolio-images_').concat(t,'.png" alt="').concat(n,'">\n                ').concat(o?'<object>\n                        <a href="'.concat(o,'" target="_blank" class="portfolio-card__repo-link">\n                            <i class="icon icon-github"></i>\n                        </a>\n                    </object>'):"",'\n            </div>\n            <h4 class="portfolio-card__title">').concat(n,"</h4>\n            ").concat(a?'<div class="portfolio-card__alert alert-icon alert-icon--sm"></div>':"","\n        </a>\n    </div>");r+=l})),o()(".portfolio-slider").html(r),o()(".portfolio-slider").slick({accessibility:!0,infinite:!1,centerMode:!0,variableWidth:!0,focusOnSelect:!0,prevArrow:"<button class='slide-arrow prev-arrow'><i class='icon icon-angle-left-solid'></i></button>",nextArrow:"<button class='slide-arrow next-arrow'><i class='icon icon-angle-right-solid'></i></button>"}),o()(".slick-center .portfolio-slide a").attr("tabindex",0),o()(".portfolio-slider").on("afterChange",(function(e,i,t){setTimeout((function(){o()(i.$slides[t]).find(".portfolio-slide a").attr("tabindex",0)}),0)}))}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var n=t[e]={exports:{}};return i[e].call(n.exports,n,n.exports,r),n.exports}r.m=i,e=[],r.O=(i,t,o,n)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,o,n]=e[c],l=!0,p=0;p<t.length;p++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](t[p])))?t.splice(p--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var s=o();void 0!==s&&(i=s)}}return i}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,o,n]},r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={179:0};r.O.j=i=>0===e[i];var i=(i,t)=>{var o,n,[a,l,p]=t,s=0;if(a.some((i=>0!==e[i]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(p)var c=p(r)}for(i&&i(t);s<a.length;s++)n=a[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})();var o=r.O(void 0,[504],(()=>r(851)));o=r.O(o)})();