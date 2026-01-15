let swiper;

function initSwiper() {
  if (window.innerWidth <= 321 && !swiper) {
    swiper = new Swiper(".brands-swiper", {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  if (window.innerWidth > 321 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);