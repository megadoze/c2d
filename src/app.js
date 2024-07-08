// Отслеживаем пересечение блока границ шапки сайта
const options = {
  root: document.querySelector(".body"),
  rootMargin: "-156px 0px 1000px 0px",
  threshold: 0,
};

const callback = function (entries, observer) {
  const header = document.querySelector(".header");
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.add("cross");
      header.classList.add("animation");
      console.log("Пересек!");
      return;
    } else {
      entry.target.classList.remove("cross");
      header.classList.remove("animation");
      console.log("не пересек");
    }
  });
};

const Observer = new IntersectionObserver(callback, options);
const target = document.querySelector(".booking-form__title");

Observer.observe(target);

// Ждем пока закрузится вся страница
document.addEventListener("DOMContentLoaded", () => {
  // Menu

  // Найти кнопку на странице
  const button = document.querySelector(".js-menu-toggle");
  const body = document.body;

  // Добавить событие по клику
  button.onclick = function () {
    // Добавить/убрать класс "opened" и установить атрибут aria-expanded в значение true или false.
    if (button.classList.contains("menu__toggle--active")) {
      button.classList.remove("menu__toggle--active");
      button.setAttribute("aria-expanded", "false");
      body.style.overflow = "visible";
      body.style.height = "auto";
    } else {
      button.classList.add("menu__toggle--active");
      button.setAttribute("aria-expanded", "true");
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    }
  };
});
