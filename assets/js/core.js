"use strict";

// SLICK SLIDER
// MAIN SLIDER

$(document).ready(function () {
  $(".main-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
  });

  $(".history-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 598,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

// MENU

// Выбиарем body
const body = document.querySelector("body");

// Выбираем кнопку открыть меню
const showMenuBtn = document.querySelector(".menu-burger-open");

// Выбираем кнопку закрыть меню
const closeMenuBtn = document.querySelector(".close-btn");

// Эвент при открытии меню
showMenuBtn.addEventListener("click", toggleMenu);

// Эвент при закрытии меню
closeMenuBtn.addEventListener("click", toggleMenu);

// Фукнция, которая отвечает за присвоение и убирание класса в зависимости
// от того открыто ли окно или закрыто
function toggleMenu() {
  body.classList.toggle("menu_show");
}

// SLICK SLIDER
// HISTORY SLIDER
