// находим форму
const form = document.querySelector(".form-validation");
// находим кнопку отправки
const validateBtn = form.querySelector(".validate-btn");
// находим 1й инпут
const from = form.querySelector(".from");
// находим 2й инпут
const password = form.querySelector(".password");
// находим 3й инпут
const passwordСonfirmation = form.querySelector(".password-confirmation");
// находим 4й инпут
const where = form.querySelector(".where");
// находим 5й инпут
const message = form.querySelector(".message");
// находим все инпуты
const fields = form.querySelectorAll(".field");

// вешаем слушателя на кнопку
form.addEventListener("submit", function (event) {
  // отменяем стандартное поведение
  event.preventDefault();
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is blank", fields[i]);
    }
    const element = fields[i];
  }
});

// TODO остановился на 10.32

// console.log("clicked is validate");
// console.log("from: ", from.value);
// console.log("password: ", password.value);
// console.log("passwordСonfirmation: ", passwordСonfirmation.value);
// console.log("where: ", where.value);
// console.log("wmessagehere: ", message.value);
