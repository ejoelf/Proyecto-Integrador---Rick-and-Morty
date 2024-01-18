const regexEmail =
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
const expresionRegular = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/;

function validation(data) {
  const errors = {};

  if (!regexEmail.test(data.email)) {
    errors.email = "Debe ser un email valido";
  } else if (!expresionRegular.test(data.email)) {
    errors.email = "E-mail incorrecto";
  }
  if (!regexPassword.test(data.password)) {
    errors.password = "Contraseña incorrecta";
  }
  return errors;
}

export default validation;
