document.addEventListener("DOMContentLoaded", () => {
  const form =form;
  const formEmail = form.querySelector('.')
});

function submit () {
  let name = ; // from document
  let isNameValid = validateName(name);

  let email = ; // get from document
  let isEmailValid = validateEmail(email);
  let isEmailUnque = checkIdEmailUnique();

  let phone = ; //get from document;
  let isPhoneValid = validateName(phone);

  let user = {
    name: name,
    email: email,
    phone: phone,
  }

}

if(isNameValid &&isEmailValid && isPhoneValid) {
  userList.push(user);

  clearForm();
}

let userList = [];
