
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
//Permitimos decimales en el promedio y el ingreso
let promedio = parseFloat(prompt("Ingresa tu promedio:"));
let ingreso = parseFloat(prompt("Ingresa tu ingreso mensual:"));
let sobrino = prompt("¿Eres sobrino de algún director? (si/no)");

//si el promedio o ingreso son nan o la respuesta de sobreino 
if (isNaN(promedio) || isNaN(ingreso)) {
    alert("Error: Debes ingresar valores válidos.");

}else if (sobrino !== "si" && sobrino !== "sí" && sobrino !== "no") {
    alert("Error: Responde solo 'si' o 'no'.");
    
} else {
    let esSobrino = (sobrino === "si" || sobrino === "sí");

    let resultado = calcularBeca(promedio, ingreso, esSobrino);

    // Mostramos el resultado
    alert(resultado);
}
