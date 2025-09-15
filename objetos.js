//Tarea 1: crear 2 objetos con las misma propiedades

const cafeteriaOsitos = {
    ubicacion: "Villa del Rosario",
    horario: "Madrugada",
    platilloPrincipal:"CheeseCake de limón",
    bebidaPrincipal: "Matcha"
}

const cafeteriaLeon = {
    ubicacion: "Lima",
    horario: "Atardecer",
    platilloPrincipal:"Pastel de chocolate",
    bebidaPrincipal: "Espresso"
}

//Tarea 2: Preguntar al usuario que cafeteria quiere ver

let opcion = prompt("¿Que cafetera te interesa?\n1. Cafeteria Ositos\n2. Cafeteria Leon\nDigita tu opcion (1 o 2): ")

//Tarea 3: Si el usuario responde una de las opciones de cafeteria, ejecutar una función que devuelva en consola las propiedades y valores del equipo elegido en formato de tabla.

function info(opcion) {
    let info;
    if (opcion == 1) {
        info = cafeteriaOsitos
    }else if(opcion == 2){
        info = cafeteriaLeon
    }else{
        info = "error"
    }

    return info
   
}

console.table(info(opcion))







