function generarCorreo() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;

  // Convertir el nombre y apellidos a minúsculas
  var nombreMinusculas = nombre.toLowerCase();
  var apellidosMinusculas = apellidos.toLowerCase();

  // Obtener el año, mes y día de nacimiento
  var [anio, mes, dia] = fechaNacimiento.split("-");

  var correo = nombreMinusculas.charAt(0) + apellidosMinusculas.replace(/\s/g, "") + anio.substring(2) + mes + dia + "@gmail.com";

  // Mostrar el correo generado en el resultado
  document.getElementById("mensaje").textContent = "Correo generado:";
  document.getElementById("correo-generado").textContent = correo;
}

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  generarCorreo();
});