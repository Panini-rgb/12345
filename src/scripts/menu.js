// burger-menu
const burger = document.querySelector(".icon__button");
const modal = document.getElementById("menuModal");
const closeBtn = document.getElementById("closeModal");

// открыть меню
burger.addEventListener("click", () => {
modal.classList.add("modal--active");
});

// закрыть на крестик
closeBtn.addEventListener("click", () => {
 modal.classList.remove("modal--active");
});

// закрыть нажитием на экран 
modal.addEventListener("click", (e) => {
if (e.target === modal) {
modal.classList.remove("modal--active");
}
});

// ПОКАЗАТЬ ВСЁ бренды
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

// показать всё типы услуг
const typesShowMoreBtn = document.querySelector('.types-show-more');
const typesWrapper = document.querySelector('.types-wrapper');

//проверка
if (typesShowMoreBtn && typesWrapper) {   
const typesText = typesShowMoreBtn.querySelector('.types-show-more__text');
typesShowMoreBtn.addEventListener('click', () => {
typesWrapper.classList.toggle('is-expanded');
typesShowMoreBtn.classList.toggle('is-expanded');
});

typesText.textContent = typesWrapper.classList.contains('is-expanded')
? 'Скрыть'
: 'Показать всё';
}

// modal call and chat
const callBtns = document.querySelectorAll('.modal__call, .icon__call');
const chatBtns = document.querySelectorAll('.modal__chat, .icon__chat');
const callModal = document.getElementById('callModal');
const chatModal = document.getElementById('chatModal');
const closeBtns = document.querySelectorAll('.modal-form__close');
const overlays = document.querySelectorAll('.modal-form__overlay');

// открыть звонок
callBtns.forEach(btn => {
btn.addEventListener('click', () => {
callModal.classList.add('modal-form--active');
});
});

// открыть звонок
chatBtns.forEach(btn => {
btn.addEventListener('click', () => {
chatModal.classList.add('modal-form--active');
});
});

// закрыть кнопкой
closeBtns.forEach(btn => {
btn.addEventListener('click', () => {
btn.closest('.modal-form').classList.remove('modal-form--active');
});
});

// закрыть нажитием на экран 
overlays.forEach(overlay => {
overlay.addEventListener('click', () => {
overlay.parentElement.classList.remove('modal-form--active');
});
});