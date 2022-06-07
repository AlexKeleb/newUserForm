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
  const regExpPhone =
    /^((\+?3|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
  const regExpDate =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  // TODO напедалить функцию онфокус и анфокус по Андриканичу (убирать плейсхолдер)

  // функция отправки формы
  const submit = () => {
    alert("Данные отправлены");
  };

  

  // * попробовать добавлять красный или зеленый бордер
  // валидируем каждое поле ввода
  const validateElem = (elem) => {
    if (elem.name === "name") {
      if (!regExpName.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML =
          "Введите корректное имя пользователя!";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
      }
    }
    if (elem.name === "lastName") {
      if (!regExpName.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML =
          "Введите корректную фамилию пользователя!";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
      }
    }
    if (elem.name === "birthday") {
      if (!regExpDate.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML = "Введите корректную дату рождения";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
      }
    }
    if (elem.name === "email") {
      if (!regExpMail.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML = "Введите корректный email!";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
      }
    }
    if (elem.name === "phone") {
      if (!regExpPhone.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML =
          "Введите корректный номер телефона!";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
      }
    }
    if (elem.name === "password") {
      if (!regExpPass.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.innerHTML = "Придумайте более сложный пароль";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
      }
      // на проверке пароля попробовать код из предыдущего урока
      //TODO надо на паcсворд прикрутить кнопку "показать пароль"
    }
    if (elem.name === "passwordRepeat") {
      if (password.value != passwordRepeat.value) {
        elem.nextElementSibling.innerHTML = "Пароли не совпадают";
        isValidate = false;
        submitButton.setAttribute("disabled", true);
      } else {
        elem.nextElementSibling.innerHTML = "";
        isValidate = true;
        submitButton.removeAttribute("disabled");
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
          submitButton.setAttribute("disabled", true);

          // isValidate = false; // ! потом проверить
          // ! можно еще добавить проверку дальше
        } else {
          elem.nextElementSibling.innerHTML = "";
          submitButton.removeAttribute("disabled");

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
          submitButton.setAttribute("disabled", true);

          isValidate = false;
        } else {
          elem.nextElementSibling.textContent = "";
          isValidate = true;
          submitButton.removeAttribute("disabled");
        }
      }
    }

    if (isValidate) {
      submit();
      form.reset();
    } else {
      console.log("Форма заполнена некорректно");
    }
  });
});
