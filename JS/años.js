function calcularEdadPerro() {
    var edadHumana = parseInt(document.getElementById("edad-mascota").value);
  
    // Verificar que el valor sea válido
    if (isNaN(edadHumana) || edadHumana <= 0) {
      document.getElementById("resultado").textContent = "La edad ingresada no es válida.";
      return;
    }
  
    // Calcular la edad en años perro
    var edadPerro;
    if (edadHumana <= 2) {
      edadPerro = edadHumana * 10.5;
    } else {
      edadPerro = 21 + ((edadHumana - 2) * 4);
    }
  
    // Mostrar el resultado sin decimales y con el mensaje correspondiente
    var mensaje = "Tu mascota tiene " + Math.round(edadPerro) + " años de edad.";
    document.getElementById("resultado").textContent = mensaje;
  }