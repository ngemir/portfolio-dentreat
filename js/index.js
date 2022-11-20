let menu = document.querySelector('.menu-burger');
let menuContent = document.querySelector('.menu-burger-content');

menu.onclick = () => {
  menu.classList.toggle('active');
  menuContent.classList.toggle('active');
};

// SwiperJS

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  direction: 'horizontal',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  autoHeight: false ,
});