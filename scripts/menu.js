
const burger = document.querySelector(".icon__button");
const modal = document.getElementById("menuModal");
const closeBtn = document.getElementById("closeModal");


burger.addEventListener("click", () => {
  modal.classList.add("modal--active");
});


closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal--active");
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal--active");
  }
});

const showMoreBtn = document.querySelector('.brands-show-more');
const wrapper = document.querySelector('.swiper-wrapper');
const text = showMoreBtn.querySelector('.brands-show-more__text');

showMoreBtn.addEventListener('click', () => {
  wrapper.classList.toggle('is-expanded');
  showMoreBtn.classList.toggle('is-expanded');

  text.textContent = wrapper.classList.contains('is-expanded')
    ? 'Скрыть'
    : 'Показать всё';
});

