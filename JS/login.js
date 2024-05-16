const USERNAME = "claudia";
const PASSWORD = "1503";
let remainingAttempts = 4;

function login() {
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("myInput").value;

    if (remainingAttempts > 0) {
        if (username === USERNAME && password === PASSWORD) {
            window.location.href = "bienvenido.html";
        } else {
            remainingAttempts--;
            const attemptsMessage = remainingAttempts > 0
               ? `Datos incorrectos. Te quedan ${remainingAttempts} intentos.`
                : "Has agotado tus intentos. Por favor, inténtalo más tarde.";
            alert(attemptsMessage);
            if (remainingAttempts === 0) {
                document.getElementById("usuario").disabled = true;
                document.getElementById("myInput").disabled = true;
                document.getElementById("submitBtn").disabled = true;
                window.location.href = "error.html";
            }
        }
    }
}