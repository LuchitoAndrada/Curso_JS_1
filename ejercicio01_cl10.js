function estacionClimatica() {
    let anio = Number(prompt("Ingrese el año:"));
    let mes = Number(prompt("Ingrese el número del mes (1-12):"));
    let dia = Number(prompt("Ingrese el día del mes:"));

    //devolver estacion del año en que te encuentras (primavera, verano, otoño, invierno)
    if (isNaN(anio) || isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        console.log("Error: Debes ingresar valores válidos para año, mes y día.");
        return "Fecha inválida.";
    }
 
    let estacion = "";

    //perú
    // Primavera: 23 sep – 21 dic
    if ((mes === 9 && dia >= 23) || mes === 10 || mes === 11 || (mes === 12 && dia <= 21)) {
        estacion = "Primavera";
    // Verano: 22 dic – 21 mar
    } else if ((mes === 12 && dia >= 22) || mes === 1 || mes === 2 || (mes === 3 && dia <= 21)) {
        estacion = "Verano";
    // Otoño: 22 mar – 21 jun
    } else if ((mes === 3 && dia >= 22) || mes === 4 || mes === 5 || (mes === 6 && dia <= 21)) {
        estacion = "Otoño";
    // Invierno: 22 jun – 22 sep
    } else if ((mes === 6 && dia >= 22) || mes === 7 || mes === 8 || (mes === 9 && dia <= 22)) {
        estacion = "Invierno";
    } else {
        // El 30 de febrero al atardecer
        console.log ("Fecha inválida.");
    }

    return `La fecha ingresada (${dia}/${mes}/${anio}) corresponde a la estación: ${estacion}`;
}

let estacionPorFecha = estacionClimatica();
alert(estacionPorFecha);