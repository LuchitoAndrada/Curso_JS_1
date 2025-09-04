//
let opcion = parseInt(prompt(`Elige una opción:\n 1. Pedir 2 números y sumarlos.\n 2. Cuenta regresiva desde un número mayor a 10.\n 3. Pedir nombre y edad.`));


if(isNaN(opcion) || opcion < 1 || opcion > 3) {
    alert("Opción inválida. Por favor, elige una opción entre 1 y 3. No ingreses letras o caracteres especiales.");
}else{
    switch(opcion) {
        case 1:
            let num1 = parseInt(prompt("Ingresa el primer número:"));
            let num2 = parseInt(prompt("Ingresa el segundo número:")); 

            if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0) {
                alert(`La suma es: ${num1 + num2}`);
            } else {
                alert("Error: Debes ingresar números enteros positivos.");
            }
            break;

        }
    }



