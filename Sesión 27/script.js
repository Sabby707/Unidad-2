//Variables

let num1 = 5
let num2 = 8
let result

function suma(x, y) {
    return x + y
}

result = suma(num1, num2)

console.log("La suma de num1 + num2 es: ", result)


//Calculadora

function calcular() {
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.querySelector("input[name='operaciones']:checked").value;
    let result;


    console.log(numero1, numero2, operacion)

    switch (operacion) {
    case "+": result = numero1 + numero2;  
    break;

    case "-": result = numero1 - numero2; 
    break;

    case "*": result = numero1 * numero2; 
    break;

    case "/": result = numero1 / numero2;
    break;
    }

        document.getElementById("resultado").textContent = result

}








// script2.js

function verificarEdad() {
    // Obtener la edad ingresada
    let edad = parseInt(document.getElementById("Edad").value);
    let resultado = document.getElementById("resultado");

    // Validar que la edad sea un número válido
    if (isNaN(edad) || edad < 0) {
        resultado.textContent = "Por favor, ingresa una edad válida.";
        return;
    }

    // Condiciones según la edad
    if (edad < 12) {
        resultado.textContent = "Eres un niño.";
    } else if (edad >= 12 && edad < 18) {
        resultado.textContent = "Eres un adolescente.";
    } else if (edad >= 18 && edad < 60) {
        resultado.textContent = "Eres un adulto.";
    } else {
        resultado.textContent = "Eres un adulto mayor.";
    }
}

// Asignar la función al botón
document.querySelector("button").addEventListener("click", verificarEdad);
