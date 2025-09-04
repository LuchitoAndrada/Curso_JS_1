console.log("Bienvenido a la calculadora");

let n1 = parseInt(prompt("Ingrese el primer numero a operar: "));
let n2 = parseInt(prompt("Ingrese el segundo numero a operar: "));

if (isNaN(n1) || isNaN(n2)) {
  alert("Los valores ingresados deben ser un numero.");
} else {
  alert(
    "-----------------MENU-----------------\nSeleccione la operación que desea realizar:\n1.Suma\n2.Resta\n3.Multiplicación\n4.División"
  );

  let opcion = parseInt(prompt("Ingrese el número de opcion de acuerdo al menú mostrado: "));

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
      if (n2 == 0) {
        console.log(`La division de los numeros ${n1} y ${n2} no se puede realizar, ya que no se puede dividir entre 0`);

      } else {
        let division = n1 / n2;
        console.log(`La division de los numeros ${n1} y ${n2} es ${division}`);
      }

    } else if (isNaN(opcion)) {
      console.log("Opcion ingresada incorrecta.");

    } else {
      console.log("El valor ingresado no corresponde a los disponibles en el menú de opciones.");
    }
  }
}
