new swiper2 = new Swiper2(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });