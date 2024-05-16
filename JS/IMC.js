function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      document.getElementById("resultado").textContent = "Los valores ingresados no son válidos.";
      return;
    }
  
    var imc = peso / (altura * altura);
  
    var mensaje;
    if (imc < 18.5) {
      mensaje = "Tu IMC es " + imc.toFixed(2) + ". Tienes peso bajo.";
    } else if (imc >= 18.5 && imc < 25) {
      mensaje = "Tu IMC es " + imc.toFixed(2) + ". Tu peso es normal.";
    } else if (imc >= 25 && imc < 30) {
      mensaje = "Tu IMC es " + imc.toFixed(2) + ". Tienes sobrepeso.";
    } else {
      mensaje = "Tu IMC es " + imc.toFixed(2) + ". Tienes obesidad.";
    }
  
    document.getElementById("resultado").innerHTML = "<p>" + mensaje + "</p>";
  }