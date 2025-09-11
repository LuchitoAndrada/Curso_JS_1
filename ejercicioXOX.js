function calcularBeca(promedio, ingreso, esSobrino) {
    // Lógica para decidir la beca
    if (promedio >= 9 && (ingreso <= 1000 || esSobrino)) {
        return "Beca obtiene la beca de $1000";
    } else if (promedio >= 7 && ingreso <= 500) {
        return "Beca obtiene la beca de $500";   
    } else {
        return "No obtienes beca ";
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
