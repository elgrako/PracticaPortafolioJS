function validateForm() {
  var correo = document.getElementsByName("correo")[0].value;
  var nombre = document.getElementsByName("nombre")[0].value;
  var tel = document.getElementsByName("tel")[0].value;
  var localidad = document.getElementsByName("localidad")[0].value;

  if (correo.trim() === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return false;
  }
  var correoRegex = /^\S+@\S+\.\S+$/;
  if (!correoRegex.test(correo)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return false;
  }


  if(localidad.trim() === ""){
    alert("Por favor, ingresa tu Localidad.")
    return false;
  }


  if (nombre.trim() === "") {
    alert("Por favor, ingresa tu nombre.");
    return false;
  }
  

  if (tel.trim() === "") {
    alert("Por favor, ingresa tu teléfono.");
    return false;
  }
  var telRegex = /^\d{9}$/;
  if (!telRegex.test(tel)) {
    alert("Por favor, ingresa un número de teléfono válido (9 dígitos).");
    return false;
  }

  return true;
}
