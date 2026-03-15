
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


const typesShowMoreBtn = document.querySelector('.types-show-more');
const typesWrapper = document.querySelector('.types-wrapper');
const typesText = typesShowMoreBtn.querySelector('.types-show-more__text');

if (typesShowMoreBtn && typesWrapper) {   
  typesShowMoreBtn.addEventListener('click', () => {
    typesWrapper.classList.toggle('is-expanded');
    typesShowMoreBtn.classList.toggle('is-expanded');

    typesText.textContent = typesWrapper.classList.contains('is-expanded')
      ? 'Скрыть'
      : 'Показать всё';
  });
}



const callBtns = document.querySelectorAll('.modal__call, .icon__call');
const chatBtns = document.querySelectorAll('.modal__chat, .icon__chat');

const callModal = document.getElementById('callModal');
const chatModal = document.getElementById('chatModal');

const closeBtns = document.querySelectorAll('.modal-form__close');
const overlays = document.querySelectorAll('.modal-form__overlay');



callBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    callModal.classList.add('modal-form--active');
  });
});


chatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    chatModal.classList.add('modal-form--active');
  });
});


closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-form').classList.remove('modal-form--active');
  });
});

overlays.forEach(overlay => {
  overlay.addEventListener('click', () => {
    overlay.parentElement.classList.remove('modal-form--active');
  });
});