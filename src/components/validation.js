const validation = (form) => {
  let errors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "El email es invalido";
  }
  if (!form.email) {
    errors.email = "Este campo no puede estar vacio";
  }
  if (form.email.length > 35) {
    errors.email = "El email no puede superar los 35 caracteres";
  } //con el includes evaluamos si tenemos un  numero o no en el password, .match sign si este metodo de string en el cual por patrametros lo que le queremos pasar lo que queremos que machee, (/\d/) sign verifica si el string hay o no un numero
  if (!form.password.match(/\d/)) {
    //si es falso
    errors.password = "La contraseña debe contener al menos un número";
  }
  if (form.password.length < 6 || form.password.length > 10) {
    //si la contraseña es menor o mayor a 10
    errors.password = "La Contraseña debe contener entre 6 a 10 caracteres";
  }
  return errors;
};

export default validation;
