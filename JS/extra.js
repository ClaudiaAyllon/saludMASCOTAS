function calcularComida() {
  var peso = document.getElementById("peso").value;
  var tipoAlimento = document.getElementById("tipoAlimento").value;

  // Realiza los cálculos necesarios para determinar la cantidad de comida
  // Utiliza las variables peso y tipoAlimento

  var cantidadComida;

  if (tipoAlimento === "seco") {
    // Cálculo para alimento seco
    cantidadComida = 0.02 * peso;
  } else if (tipoAlimento === "húmedo") {
    // Cálculo para alimento húmedo
    cantidadComida = 0.04 * peso;
  } else if (tipoAlimento === "casero") {
    // Cálculo para alimento casero
    cantidadComida = 0.03 * peso;
  } else {
    // Tipo de alimento no válido
    document.getElementById("mensaje").innerHTML = "Por favor, selecciona un tipo de alimento válido.";
    document.getElementById("correo-generado").innerHTML = "";
    return;
  }

  // Muestra el resultado en el elemento con el id "resultado"
  document.getElementById("mensaje").innerHTML = "Cantidad de comida recomendada: " + cantidadComida + " gramos por comida";
  document.getElementById("correo-generado").innerHTML = "";
}