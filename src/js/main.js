import $ from "jquery";
import "slick-carousel";
import 'slick-carousel/slick/slick.css';

const MENU_COLLAPSE_BREAKPOINT = 1120;

const checkIfMenuOverflow = () => {
    if (window.innerHeight <= ($(".header__list").height() + (18*4))) {
        $(".header__menu").addClass("menu-scroll");
    } else {
        $(".header__menu").removeClass("menu-scroll");
    }
}

$(".theme-switch").on("click", function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var targetEle = this.hash;
    var $targetEle = $(targetEle);

    $('html, body').stop().animate({
        'scrollTop': $targetEle.offset().top
    }, 800);
});

$(".header__burger, .header__link").on("click", function (event) {
    if (window.innerWidth <= MENU_COLLAPSE_BREAKPOINT) {
        $(".header__burger").toggleClass("active");
        $(".header__menu").slideToggle("fast");
    }

    checkIfMenuOverflow();
});

$(window).on("resize", function () {
    if (window.innerWidth >= MENU_COLLAPSE_BREAKPOINT) {
        $(".header__burger").removeClass("active");
        $(".header__menu").removeAttr('style');
    }

    checkIfMenuOverflow();
});

$(".works-slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
            },
        },
    ],
});
