document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // находим форму
  const form = document.querySelector(".main-form");
  // находим кнопку
  const submitButton = form.querySelector(".btn");
  // находим поля с паролями
  const password = form.querySelector(".input-password");
  const passwordRepeat = form.querySelector(".input-password-repeat");

  // создаем проверочную переменную
  let isValidate = false;

  // забиваем валидации
  const regExpName = /^[a-z0-9_-]{3,50}$/;
  const regExpMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const regExpPass =
    /^(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/; // (?=.*[!@#$&*])

  // TODO напедалить функцию онфокус и анфокус по Андриканичу (убирать плейсхолдер)

  // функция отправки формы
  const submit = () => {
    alert("Данные отправлены");
  };

  // валидируем каждое поле ввода
  const validateElem = (elem) => {
    if (elem.name === "name") {
      if (!regExpName.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML =
          "Введите корректное имя пользователя!";
        isValidate = false;
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
      }
    }
    if (elem.name === "email") {
      if (!regExpMail.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML = "Введите корректный email!";
        isValidate = false;
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
      }
    }
    if (elem.name === "password") {
      if (!regExpPass.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML = "Придумайте более сложный пароль";
        isValidate = false;
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
      }
      // на проверке пароля попробовать код из предыдущего урока
      //TODO надо на паcсворд прикрутить кнопку "показать пароль"
    }
    if (elem.name === "passwordRepeat") {
      if (password.value != passwordRepeat.value) {
        elem.nextElementSibling.innerHTML = "Пароли не совпадают";
        isValidate = false;
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
      }
    }
  };

  // проверка на длину поля ввода
  for (const elem of form) {
    if (
      !elem.classList.contains("form-checkbox") &&
      elem.tagName !== "BUTTON"
    ) {
      elem.addEventListener("input", () => {
        if (elem.value.length > 50) {
          elem.nextElementSibling.innerHTML =
            "Длина поля должна быть от 3 до 50 символов";
          // isValidate = false; // ! потом проверить
          // ! можно еще добавить проверку дальше
        } else {
          elem.nextElementSibling.innerHTML = "";
          // isValidate = true; // ! потом проверить
        }
      });
    }
  }

  // валидируем только инпуты
  for (const elem of form) {
    if (
      !elem.classList.contains("form-checkbox") &&
      elem.tagName !== "BUTTON"
    ) {
      elem.addEventListener("blur", () => {
        validateElem(elem);
      });
    }
  }

  // вешаем обработчик на форму
  form.addEventListener("submit", (event) => {
    // отменяем стандартное поведение
    event.preventDefault();

    // проверяем все инпуты на заполненность
    for (const elem of form) {
      if (
        !elem.classList.contains("form-checkbox") &&
        elem.tagName !== "BUTTON"
      ) {
        if (elem.value == "") {
          elem.nextElementSibling.textContent =
            "Введите от 3-х до 50-ти символов";
          isValidate = false;
        } else {
          elem.nextElementSibling.textContent = "";
          isValidate = true;
        }
      }
    }

    if (isValidate) {
      if (form.querySelector(".form-checkbox").checked) {
        submit();
      } else {
        console.log("Форма заполнена некорректно");
        console.log("Согласитесь с условиями");
      }
    }
  });
});
