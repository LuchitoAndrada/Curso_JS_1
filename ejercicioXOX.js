function calcularBeca(promedio, ingreso, esSobrino) {
    // Lógica para decidir la beca
    if (promedio >= 9 && (ingreso <= 1000 || esSobrino)) {
        return "Felicidades, obtienes una beca del 100%";
    } else if (promedio >= 7 && ingreso <= 500) {
        return "Felicidades, obtienes una beca del 50%";   
    } else {
        return "Oh, lo siento, no eres elegible para una beca";
    }
}

// Pedimos los datos al usuario
let promedio = parseInt(prompt("Ingresa tu promedio:"));
let ingreso = parseInt(prompt("Ingresa tu ingreso mensual:"));
let sobrino = prompt("¿Eres sobrino de algún director? (si/no)");

// Convertimos la respuesta a valor lógico
let esSobrino = false;
if (sobrino === "si" || sobrino === "sí") {
    esSobrino = true;
}

// Ejecutamos la función con los datos ya procesados
let resultado = calcularBeca(promedio, ingreso, esSobrino);

// Mostramos el resultado
alert(resultado);
