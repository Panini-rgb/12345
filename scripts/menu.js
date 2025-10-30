// Получаем элементы
const burger = document.querySelector(".icon__button");
const modal = document.getElementById("menuModal");
const closeBtn = document.getElementById("closeModal");

// Открыть меню
burger.addEventListener("click", () => {
  modal.classList.add("modal--active");
});

// Закрыть меню (по кнопке)
closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal--active");
});

// Закрыть меню (по клику вне окна)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal--active");
  }
});

