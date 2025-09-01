console.log("Bienvenido a la calculadora");

let n1 = parseInt(prompt("Ingrese el primer numero a operar: "));
let n2 = parseInt(prompt("Ingrese el segundo numero a operar: "));

alert(
  "-----------------MENU-----------------\nSeleccione la operación que desea realizar:\n1.Suma\n2.Resta\n3.Multiplicación\n4.División"
);

let opcion = prompt(
  "Ingrese el número de opcion de acuerdo al menú mostrado en consola: "
);

if (opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4) {
  if (opcion == 1) {
    let suma = n1 + n2;
    console.log(`La suma de los numeros ${n1} y ${n2} es ${suma}`);

  } else if (opcion == 2) {
    let resta = n1 - n2;
    console.log(`La resta de los numeros ${n1} y ${n2} es ${resta}`);
  } else if (opcion == 3) {
    let multiplicacion = n1 * n2;
    console.log(`La multiplicación de los numeros ${n1} y ${n2} es ${multiplicacion}`);
  } else if (opcion == 4) {
    let division = n1 / n2;
    console.log(`La division de los numeros ${n1} y ${n2} es ${division}`);
  }
}else{
    console.log("Opcion ingresada incorrecta.")
}
