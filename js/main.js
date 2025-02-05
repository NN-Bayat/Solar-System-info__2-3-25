// Javascript to open and close the main menu.
const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".menu-container");
const menuWindow = document.querySelector(".menu-window");
const menuInner = document.querySelector(".menu-inner");
const menuCloseBtn = document.querySelector(".menu-close-btn");

function closeFunc (){
  setTimeout(() => {
    menuContainer.classList.remove("active");
  }, 500);

  menuWindow.classList.remove("active");
  menuInner.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
  menuContainer.classList.add("active");

  setTimeout(() => {
    menuWindow.classList.add("active");
  }, 1);

  setTimeout(() => {
    menuInner.classList.add("active");
  }, 1000);
});

menuCloseBtn.addEventListener("click", () => {
  closeFunc();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuContainer.classList.contains("active")) {
    closeFunc();
  }
});

// Swiper slider
var swiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slideOffsetBefore: 0,
  slideOffsetAfter: 0,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    710: {
      slidesPerView: 2,
      slideOffsetBefore: 30,
    },
    780: {
      slidesPerView: 2.2,
      slideOffsetBefore: 30,
    },
    885: {
      slidesPerView: 2.5,
      slideOffsetBefore: 30,
      slideOffsetAfter: 100,
    },
    1070: {
      slidesPerView: 3,
      slideOffsetBefore: 30,
      slideOffsetAfter: 100,
    },
    1280: {
      slidesPerView: 3.7,
      slideOffsetBefore: 30,
      slideOffsetAfter: 100,
    },
    1560: {
      slidesPerView: 4.4,
      slideOffsetBefore: 30,
      slideOffsetAfter: 100,
    },
  },
});

// Javascript to hide main webpage elemnts and open modal boxes on click read more button.

// Javascript to show hidden main webpage elemnts and close modal boxes on click modal close button.

// Javascript to hide slider cards with a delay on click read more button.

// Javascript to show hidden slider cards with a delay on click modal close button.

// Javascript for search function.
