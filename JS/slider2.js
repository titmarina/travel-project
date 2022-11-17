const swiper2 = new Swiper2(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 90,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });