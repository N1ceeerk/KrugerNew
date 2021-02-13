"use strict";

// SLICK SLIDER
// MAIN SLIDER

// CHECK IF EXIST INDEX ELEMENTS
const mainSlider = document.querySelector(".main-slider");

if (mainSlider) {
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
}

// MENU

// Выбиарем body
const body = document.querySelector("body");

// Выбираем кнопку открыть меню
const showMenuBtn = document.querySelector(".menu-burger-open");

// Контент меню
const menuContent = document.querySelector(".menu-content");

// Выбираем кнопку закрыть меню
const closeMenuBtn = document.querySelector(".close-btn");

// Оверлей открытого меню
const overlayMenu = document.querySelector(".overlay");

// Кнопка открытия окна фидбека
const feedbackBtn = document.querySelector(".questions__button");

// Кнопка закрытия окна фидбека
const feedbackCloseBtn = document.querySelector(".feedback-popup__close");

// Оверлей окна фидбека
const feedbackOverlay = document.querySelector(".feedback-overlay");

// Полностью окно feedback
const feedbackPopup = document.querySelector(".feedback-popup");

// Контент окна feedback
const feedbackContent = document.querySelector(".feedback-content");

// Эвент при открытии меню
showMenuBtn.addEventListener("click", toggleMenu);

// Эвент при закрытии меню
closeMenuBtn.addEventListener("click", toggleMenu);

// Эвент при котором нажатие на оверлей закрывает меню
overlayMenu.addEventListener("click", toggleMenu);

if (feedbackBtn) {
  // Эвент открытия окна feedback
  feedbackBtn.addEventListener("click", toggleFeedback);

  // Эвент закрытия окна feedback при нажатии на крестик
  feedbackCloseBtn.addEventListener("click", toggleFeedback);

  // Эвент закрытия окна feedback при нажатии на оверлей
  feedbackOverlay.addEventListener("click", toggleFeedback);

  // Радио-счетчик на состояние модального окна feedback
  let isFeedbackModalOpen = false;

  // Фукнция открытия feedback окна
  function toggleFeedback() {
    if (!isFeedbackModalOpen) {
      feedbackContent.classList.remove("feedback-popup-out");
      feedbackContent.classList.add("feedback-popup-in");
      feedbackOverlay.classList.remove("feedback-overlay-fadeOut");
      feedbackOverlay.classList.add("feedback-overlay-fadeIn");
      isFeedbackModalOpen = true;
      body.classList.toggle("feedback-popup_show");
    } else {
      feedbackContent.classList.add("feedback-popup-out");
      feedbackOverlay.classList.add("feedback-overlay-fadeOut");
      isFeedbackModalOpen = false;

      setTimeout(() => {
        body.classList.toggle("feedback-popup_show");
      }, 200);
    }
  }
}

// Радио-счетчик на состояние модального окна меню
let isMenuOpen = false;

// Фукнция, которая отвечает за присвоение и убирание класса в зависимости
// от того открыто ли окно или закрыто
function toggleMenu() {
  if (!isMenuOpen) {
    menuContent.classList.add("menu-content_open");
    menuContent.classList.remove("menu-content_close");
    closeMenuBtn.classList.add("menu-content_open");
    closeMenuBtn.classList.remove("menu-content_close");
    overlayMenu.classList.add("overlay-fadeIn");
    overlayMenu.classList.remove("overlay-fadeOut");
    body.classList.toggle("menu_show");
    isMenuOpen = true;
  } else {
    closeMenuBtn.classList.add("menu-content_close");
    menuContent.classList.add("menu-content_close");
    overlayMenu.classList.add("overlay-fadeOut");
    isMenuOpen = false;

    setTimeout(() => {
      body.classList.toggle("menu_show");
    }, 500);
  }
}
