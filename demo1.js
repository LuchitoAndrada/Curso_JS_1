//
let opcion = parseInt(prompt(`Elige una opción:\n 1. Pedir 2 números y sumarlos.\n 2. Cuenta regresiva desde un número mayor a 10.\n 3. Pedir nombre y edad.`));

if (isNaN(opcion) || opcion < 1 || opcion > 3) {
    alert("Opción inválida. Por favor, elige una opción entre 1 y 3. No ingreses letras o caracteres especiales.");
} else {
    switch (opcion) {
        case 1:
            let num1 = parseInt(prompt("Ingresa el primer número:"));
            let num2 = parseInt(prompt("Ingresa el segundo número:")); 

            if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0) {
                alert(`La suma es: ${num1 + num2}`);
            } else {
                alert("Error: Debes ingresar números enteros positivos.");
            }
            break;

        case 2:
            let inicio = parseFloat(prompt("Ingresa un número mayor a 10"));

            if (!isNaN(inicio) && inicio > 10 && inicio % 1 === 0) {
                console.log(`Cuenta regresiva desde ${inicio}:`);
                for (let i = inicio; i >= 0; i--) {
                    console.log(i);
                }
            } else {
                alert("Error: Debes ingresar un número entero mayor a 10.");
            }
            break;
        
        case 3: 
            let nombre = prompt("Bienvenid@!\n ¿Cuál es tu nombre? ");
            let edad = parseInt(prompt("¿Cuántos años tienes?"));

            if (!edad || isNaN(edad) || !Number.isInteger(Number(edad)) || edad <= 0 || edad > 99) {
                    alert("Por favor, ingresa una edad válida");
                    edad = null;
                    while (!edad || isNaN(edad) || !Number.isInteger(Number(edad)) || edad <= 0 || edad > 99) {
                        edad = parseInt(prompt("¿Cuántos años tienes?"));
                        if (!edad || isNaN(edad) || !Number.isInteger(Number(edad)) || edad <= 0 || edad > 99) {
                            alert("Por favor, ingresa una edad válida");
                        }
                    }
                    alert(`¡Es un placer conocerte, ${nombre}! Tienes ${edad} años de edad.`);

            } else {
                alert(`¡Es un placer conocerte, ${nombre}! Tienes ${edad} años de edad.`);
            }
            break;
        }
    }

