//menu de opciones
let opcion = parseInt(
  prompt(
    `Elige una opción:\n 1. Pedir 2 números y sumarlos.\n 2. Cuenta regresiva desde un numero mayor a 10 hasta 0.\n 3. Pedir nombre y edad.`
  )
);

switch (opcion) {
  // Suma de dos números
  case 1:
    //declarar variable num1, convertir a entero el valor ingresado por el usuario
    let num1 = parseInt(prompt("Ingresa el primer número:"));

    //si la variable num1 se marca como NaN en la consola o es menor o igual a 0, entonces
    if (isNaN(num1) || num1 <= 0) {
      //le mostramos por consola y por alert al usuario que debe ingresar numeros validos
      console.log("Error: Debes ingresar números válidos mayores a 0.");
      alert("Error: Debes ingresar números válidos mayores a 0.");
      break;
    }

    //declarar variable num2, convertir a entero el valor ingresado por el usuario
    let num2 = parseInt(prompt("Ingresa el segundo número:"));

    //si la variable num2 es NaN o menor o igual a 0, entonces
    if (isNaN(num2) || num2 <= 0) {
      //le mostramos por consola y por alert al usuario que debe ingresar numeros validos
      console.log("Error: Debes ingresar números válidos mayores a 0.");
      alert("Error: Debes ingresar números válidos mayores a 0.");
      break;
    }

    //mostrar la suma en consola y en alerta
    console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
    alert(`La suma es: ${num1 + num2}`);

    break;

  // Cuenta regresiva desde un número mayor a 10
  case 2:
    //declarar variable inicio para definir el numero desde el cual se definira el conteo, convertir a int el valor ingresado por el usuario
    let inicio = parseInt(prompt("Ingresa un número entero mayor a 10"));

    //si es un numero mayor a 10 y entero positivo
    if (!isNaN(inicio) && inicio > 10 && Number.isInteger(inicio)) {
      //mostrar la cuenta regresiva en consola
      console.log(`Cuenta regresiva iniciada desde ${inicio}:`);
      //variable igual a i para definir contador; i mayor o igual a 0; i decrementa en 1 por ciclo
      for (let i = inicio; i >= 0; i--) {
        console.log(i);
      }
    } else {
      //sino es un numero mayor a 10 y entero positivo
      alert("Error: Debes ingresar un número entero mayor a 10.");
      console.log("Error: Debes ingresar un número entero mayor a 10.");
    }

    break;

  // Pedir nombre y edad
  case 3:
    // Pedimos el nombre del usuario
    let nombre = prompt("Bienvenid@!\n¿Cuál es tu nombre?");

    // Validamos que el nombre no esté vacio ni tenga caracteres invalidos, solo los permitidos
    if (!nombre || !/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre.trim())) {
      console.log("Ingresa un nombre válido (solo letras y espacios).");
      alert("Ingresa un nombre válido (solo letras y espacios).");
      break;
    }

    // Pedimos la edad del usuario
    let edad = parseInt(prompt("¿Cuántos años tienes?"));

    //si la variable edad es NaN o menor o igual a 0 o mayor a 99 o si el numero iresado es diferente de tipo entero
    if (isNaN(edad) || edad <= 0 || edad > 99 || !Number.isInteger(edad)) {
      //si edad is isNaN o edad menor o igual a 0 o edad mayor a 99 o edad diferente de valor entero, entonces
      console.log("Ingresa una edad válida (número entre 1 y 99).");
      alert("Ingresa una edad válida (número entre 1 y 99).");
      break;
    }

    // Mostramos el mensaje en consola y en alerta
    console.log(
      `¡Es un placer conocerte, ${nombre}! Tienes ${edad} años de edad.`
    );
    alert(`¡Es un placer conocerte, ${nombre}! Tienes ${edad} años de edad.`);

  default:
    console.log(
      "Opción inválida. Por favor, elige una opción entre 1 y 3. No ingreses letras o caracteres especiales."
    );
    alert(
      "Opción inválida. Por favor, elige una opción entre 1 y 3. No ingreses letras o caracteres especiales."
    );
    // break;
}
