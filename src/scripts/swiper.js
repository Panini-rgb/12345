import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiper;

function initSwiper() {
  const brandsContainer = document.querySelector('.types-slider');
  if (!brandsContainer) {
    console.warn('Элемент .types-slider не найден');
    return;
  }

  if (window.innerWidth <= 768 && !swiper) {
    swiper = new Swiper(".types-slider", {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetAfter: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    console.log('Swiper инициализирован');
  }

  if (window.innerWidth > 768 && swiper && typeof swiper.destroy === 'function') {
    swiper.destroy(true, true);
    swiper = null;
    console.log('Swiper уничтожен');
  }
}


window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
