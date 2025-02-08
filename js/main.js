"use strict";

// Javascript to open and close the main menu.
const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".menu-container");
const menuWindow = document.querySelector(".menu-window");
const menuInner = document.querySelector(".menu-inner");
const menuCloseBtn = document.querySelector(".menu-close-btn");

function closeFunc() {
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
const header = document.querySelector("header");
const sliderNav = document.querySelector(".slider-nav");
const mainMediaLinks = document.querySelector(".main-media-links");

const modalContainer = document.querySelector(".modal-container");
const modalBoxes = document.querySelectorAll(".modal-box");
const modalContents = document.querySelectorAll(".modal-content");

const readMoreBtns = document.querySelectorAll(".read-more-btn");

const modalOpen = (readMoreBtnClick) => {
  header.classList.add("hide");
  sliderNav.classList.add("hide");
  mainMediaLinks.classList.add("hide");

  modalContainer.classList.add("active");
  modalBoxes[readMoreBtnClick].classList.add("active");

  setTimeout(() => {
    modalContents[readMoreBtnClick].classList.add("active");
  }, 2000);
};

readMoreBtns.forEach((readMoreBtn, i) => {
  readMoreBtn.addEventListener("click", () => {
    modalOpen(i);
  });
});

// Javascript to show hidden main webpage elemnts and close modal boxes on click modal close button.
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    header.classList.remove("hide");
    sliderNav.classList.remove("hide");
    mainMediaLinks.classList.remove("hide");

    modalContainer.classList.remove("active");

    modalBoxes.forEach((modalBox) => {
      modalBox.classList.remove("active");
    });

    modalContents.forEach((modalContent) => {
      modalContent.classList.remove("active");
    });
  });
});

// Javascript to hide slider cards with a delay on click read more button.
const swiperSlides = document.querySelectorAll(".swiper-slide");

swiperSlides.forEach((swiperSlide) => {
  const readMoreBtn = swiperSlide.querySelector(".read-more-btn");

  readMoreBtn.addEventListener("click", () => {
    function addHideClassWithDelay(elements) {
      elements.forEach((element, index) => {
        const delay = 150;

        setTimeout(() => {
          element.classList.add("hide");
        }, index * delay);
      });
    }

    const startingElement = document.querySelector(
      ".swiper-slide.swiper-slide-active"
    );

    if (startingElement) {
      const elements = document.querySelectorAll(".swiper-slide");
      const elementArray = Array.from(elements);
      const startingIndex = elementArray.indexOf(startingElement);
      const elementToHide = elementArray.slice(startingIndex);

      readMoreBtns.forEach((readMoreBtn) => {
        readMoreBtn.addEventListener(
          "click",
          addHideClassWithDelay(elementToHide)
        );
      });
    }
  });
});

// Javascript to show hidden slider cards with a delay on click modal close button.
modalBoxes.forEach((modalBox) => {
  const modalCloseBtn = modalBox.querySelector(".modal-close-btn");

  modalCloseBtn.addEventListener("click", () => {
    function removeHideClassWithDelay(elements) {
      elements.forEach((element, index) => {
        const delay = 150;

        setTimeout(() => {
          element.classList.remove("hide");
        }, index * delay);
      });
    }

    const startingElement = document.querySelector(
      ".swiper-slide.swiper-slide-active"
    );

    if (startingElement) {
      const elements = document.querySelectorAll(".swiper-slide");
      const elementArray = Array.from(elements);
      const startingIndex = elementArray.indexOf(startingElement);
      const elementToShow = elementArray.slice(startingIndex);

      modalCloseBtns.forEach((modalCloseBtn) => {
        modalCloseBtn.addEventListener(
          "click",
          removeHideClassWithDelay(elementToShow)
        );
      });
    }
  });
});

// Javascript for search function.
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const searchResults = document.querySelector(".search-results");
  const cardContainer = document.getElementById("cardContainer");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingCards = Array.from(
      cardContainer.getElementsByClassName("card")
    ).filter((card) => card.dataset.title.toLowerCase().includes(searchTerm));

    // Display search result in a dropdown.
    searchResults.innerHTML = "";

    matchingCards.forEach((card) => {
      const link = document.createElement("a");

      link.classList.add("search-result-link");
      link.href = "#";
      link.textContent = card.dataset.title;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        openModal(card.dataset.title);
      });

      searchResults.appendChild(link);
    });

    if (matchingCards.length > 0) {
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  });

  // Function to open modals that match each search reesult.
  function openModal(cardTitle) {
    const modalToOpen = document.getElementById(
      `modal_${cardTitle.replace(/\s/g, "")}`
    );

    if (modalToOpen) {
      modalToOpen.classList.add("active");

      header.classList.add("hide");
      sliderNav.classList.add("hide");
      mainMediaLinks.classList.add("hide");

      modalContainer.classList.add("active");

      //  Show opening modal content with a delay.
      const thisModalContent = modalToOpen.querySelector(".modal-content");
      setTimeout(() => {
        thisModalContent.classList.add("active");
      }, 2000);

      // Hide slider cards with a delay on click search result.
      function addHideClassWithDelay(elements) {
        elements.forEach((element, index) => {
          const delay = 150;

          setTimeout(() => {
            element.classList.add("hide");
          }, index * delay);
        });
      }

      const startingElement = document.querySelector(
        ".swiper-slide.swiper-slide-active"
      );

      if (startingElement) {
        const elements = document.querySelectorAll(".swiper-slide");
        const elementArray = Array.from(elements);
        const startingIndex = elementArray.indexOf(startingElement);
        const elementToHide = elementArray.slice(startingIndex);

        const searchResultLinks = document.querySelectorAll(
          ".search-result-link"
        );

        searchResultLinks.forEach((searchResultLink) => {
          searchResultLink.addEventListener(
            "click",
            addHideClassWithDelay(elementToHide)
          );
        });
      }

      // Clear the search input text on modal opening.
      searchInput.value = "";
    }
  }

  // Hide search results if the search input value is 0 (empty).
  searchInput.addEventListener("input", () => {
    if (searchInput.value.length === 0) {
      searchResults.style.display = "none";
    }
  });

  // Hide search results when clicking outside the search container.
  document.addEventListener("click", (event) => {
    if (!event.target.matches("#searchInput")) {
      searchResults.style.display = "none";
    }
  });
});
