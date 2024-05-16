function calcularEdadPerro() {
  var edadHumana = parseInt(document.getElementById("edad-mascota").value);

  if (isNaN(edadHumana) || edadHumana <= 0) {
    document.getElementById("resultado").textContent = "La edad ingresada no es válida.";
    return;
  }

  var edadPerro = edadHumana * 7;

  var mensaje = "Tu mascota tiene " + edadPerro + " años de edad.";
  document.getElementById("resultado").textContent = mensaje;
}