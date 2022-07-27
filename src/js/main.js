import $ from "jquery";
import "./jquery.i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel";
import portfolio from "./portfolio.json";

const MENU_COLLAPSE_BREAKPOINT = 1120;
const REM = parseFloat($("html").css("font-size")) || 16;
const HEADER_HEIGHT = REM * 4;

const toggleLangBtn = () => {
    let $langEl = $(".language-selector"),
        lang = localStorage.lang;

    if (lang) {
        if (lang === "ka") {
            $langEl.data("lang", "en").text("EN");
        } else {
            $langEl.data("lang", "ka").text("KA");
        }
    }
};

const checkIfMenuOverflow = () => {
    if (window.innerHeight - HEADER_HEIGHT <= $(".header__menu").height()) {
        $(".header__nav").addClass("menu-scroll");
    } else {
        $(".header__nav").removeClass("menu-scroll");
    }
};

$("#curr_date").text(new Date().getFullYear());

toggleLangBtn();

if (localStorage.lang) {
    $.i18n({
        locale: localStorage.lang,
    });
    $("html").attr("lang", localStorage.lang);
} else {
    $.i18n({
        locale: "en",
    });
    $("html").attr("lang", "en");
}

$.i18n()
    .load({
        en: "./i18n/en.json",
        ka: "./i18n/ka.json",
    })
    .done(function () {
        $("html").i18n();
        $("body").css("visibility", "visible");
    });

$(".language-selector").on("click", event => {
    let $el = $(event.currentTarget);
    let lang = $el.data("lang");

    $.i18n({
        locale: lang,
    });
    $("html").attr("lang", lang).i18n();
    localStorage.lang = lang;

    toggleLangBtn();
});

if (!localStorage.theme) {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        $("body").addClass("dark-mode");
    } else {
        $("body").removeClass("dark-mode");
    }
} else {
    if (localStorage.theme === "dark") {
        $("body").addClass("dark-mode");
    }
    if (localStorage.theme === "light") {
        $("body").removeClass("dark-mode");
    }
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", event => {
        if (!localStorage.theme) {
            if (event.matches) {
                $("body").addClass("dark-mode");
            } else {
                $("body").removeClass("dark-mode");
            }
        }
    });

$(".theme-switch").on("click", function () {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if ($(element).hasClass("dark-mode")) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
});

$(".header a[href^='#']").on("click", function (e) {
    e.preventDefault();

    var targetEle = this.hash;
    var $targetEle = $(targetEle);

    $("html, body").stop().animate(
        {
            scrollTop: $targetEle.offset().top,
        },
        800
    );
});

$(".header__burger, .header__menu-item").on("click", function (event) {
    if (window.innerWidth <= MENU_COLLAPSE_BREAKPOINT) {
        $(".header__burger").toggleClass("active");
        $(".header__nav").slideToggle("fast");
    }

    checkIfMenuOverflow();
});

$(".header__logo").on("click", () => {
    if (window.innerWidth <= MENU_COLLAPSE_BREAKPOINT) {
        $(".header__burger").removeClass("active");
        $(".header__nav").slideUp("fast");
    }
});

$(window).on("resize", function () {
    if (window.innerWidth >= MENU_COLLAPSE_BREAKPOINT) {
        $(".header__burger").removeClass("active");
        $(".header__nav").removeAttr("style");
    }

    checkIfMenuOverflow();
});

let portfolioSliderContent = "";

portfolio.forEach((work) => {
    let { link, img, repo, title, isHerokuApp } = work;
    let currProtfolioCard = `<div class="portfolio-slide">
        <a href="${link}" target="_blank" class="portfolio-card">
            <div class="portfolio-card__image">
                <img src="./images/portfolio-images/portfolio-images_${img}.png" alt="${title}">
                ${repo ?
            `<object>
                        <a href="${repo}" target="_blank" class="portfolio-card__repo-link">
                            <i class="icon icon-github"></i>
                        </a>
                    </object>` : ""
        }
            </div>
            <h4 class="portfolio-card__title">${title}</h4>
            ${isHerokuApp ? `<div class="portfolio-card__alert alert-icon alert-icon--sm"></div>` : ""}
        </a>
    </div>`;

    portfolioSliderContent += currProtfolioCard;
});

$(".portfolio-slider").html(portfolioSliderContent);

$(".portfolio-slider").slick({
    accessibility: true,
    infinite: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    prevArrow: "<button class='slide-arrow prev-arrow'><i class='icon icon-angle-left-solid'></i></button>",
    nextArrow: "<button class='slide-arrow next-arrow'><i class='icon icon-angle-right-solid'></i></button>",
});

$(".slick-center .portfolio-slide a").attr("tabindex", 0);

$('.portfolio-slider').on('afterChange', function (event, slick, currentSlide) {
    setTimeout(() => {
        let $currentSlide = $(slick.$slides[currentSlide]);
        $currentSlide.find(".portfolio-slide a").attr("tabindex", 0);
    }, 0);
});