function estacionClimatica() {
    let anio = Number(prompt("Ingrese el año:"));
    let mes = Number(prompt("Ingrese el número del mes (1-12):"));
    let dia = Number(prompt("Ingrese el día del mes (1-31):"));

    //devolver estacion del año en que te encuentras (primavera, verano, otoño, invierno)
    if (isNaN(anio) || isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        console.log("Error: Debes ingresar valores válidos para año, mes y día.");
        return;
    }

    let estacion = "";
    //primavera: se inicia el 21 de septiembre y termina el 21 de diciembre
    if ((mes == 9 && dia >= 21) || (mes == 10) || (mes == 11) || (mes == 12 && dia <= 21)) {
        estacion = "Estás en primavera.";
    }else if((mes == 12 && dia > 21) || (mes == 1) || (mes == 2) || (mes == 3 && dia <=21)){
        estacion = "Estás en verano.";
    }else if((mes == 3 && dia > 21) || (mes == 4) || (mes == 5) || (mes == 6 && dia <= 21)){
        console.log("Estás en otoño.");
    }else if((mes == 6 && dia > 21) || (mes == 7) || (mes == 8) || (mes == 9 && dia <= 21)){
        console.log("Estás en invierno.");
    }else{
        console.log("Error: La fecha ingresada no es válida.");
    }
}

let estacionClimatica = alert(estacionClimatica());