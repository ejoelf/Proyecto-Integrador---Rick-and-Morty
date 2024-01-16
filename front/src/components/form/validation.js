const regexEmail =
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
const expresionRegular = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/;

function validation(data) {
  const errors = {};

  if (!regexEmail.test(data.email)) errors.email = "Debe ser un email";

  if (!expresionRegular.test(data.email))
    errors.email = "La longitud debe ser entre 1 y 35 caracteres";

  if (!regexPassword.test(data.password))
    errors.password =
      "La contraseña debe tener al menos un numero y tener una longitud entre 6 y 10 caracteres";

  return errors;
}

export default validation;
