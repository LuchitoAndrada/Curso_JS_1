//
let opcion = parseInt(prompt(`Elige una opción:\n 1. Pedir 2 números y sumarlos.\n 2. Cuenta regresiva desde un número mayor a 10.\n 3. Pedir nombre y edad.`));

if (isNaN(opcion) || opcion < 1 || opcion > 3) {
    console.log("Opción inválida. Por favor, elige una opción entre 1 y 3. No ingreses letras o caracteres especiales.");
    alert("Opción inválida. Por favor, elige una opción entre 1 y 3. No ingreses letras o caracteres especiales.");
} else {

    switch (opcion) {
        // Suma de dos números
        case 1:
            //declarar variable num1, pasar a entero el valor ingresado por el usuario
            let num1 = parseInt(prompt("Ingresa el primer número:"));
            if (Number.isNaN(num1) || num1 <= 0 ) {
                console.log("Error: Debes ingresar números válidos.");
                alert("Error: Debes ingresar números válidos.");
                break;
            }

            //declarar variable num2, pasar a entero el valor ingresado por el usuario
            let num2 = parseInt(prompt("Ingresa el segundo número:")); 
            if (Number.isNaN(num2) || num2 <= 0 ) {
                console.log("Error: Debes ingresar números válidos.");
                alert("Error: Debes ingresar números válidos.");
                break;
            }

            //mostrar la suma en consola y en alerta
            console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
            alert(`La suma es: ${num1 + num2}`);
            break;


        // Cuenta regresiva desde un número mayor a 10
        case 2:
            //declarar variable inicio, pasar a float el valor ingresado por el usuario
            let inicio = parseFloat(prompt("Ingresa un número mayor a 10"));

            //si es un numero mayor a 10 y entero positivo 
            if (!isNaN(inicio) && inicio > 10 && inicio % 1 === 0) {
                //mostrar la cuenta regresiva en consola
                console.log(`Cuenta regresiva desde ${inicio}:`);
                //variable igual a i; i mayor o igual a 0; i decrementa en 1
                for (let i = inicio; i >= 0; i--) {
                    console.log(i);
                }
            } else {//sino es un numero mayor a 10 y entero positivo
                alert("Error: Debes ingresar un número entero mayor a 10.");
                console.log("Error: Debes ingresar un número entero mayor a 10.");
            }
            break;


        // Pedir nombre y edad
        case 3: 
            // Pedimos el nombre del usuario
            let nombre = prompt("Bienvenid@!\n¿Cuál es tu nombre?");
            // Validamos que el nombre no esté vacio ni tenga caracteres invalidos
            while (!nombre || !/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre.trim())) {
                console.log("Ingresa un nombre válido (solo letras y espacios).");
                alert("Ingresa un nombre válido (solo letras y espacios).");
                nombre = prompt("¿Cuál es tu nombre?");
            }

            // Pedimos la edad del usuario
            let edad = parseInt(prompt("¿Cuántos años tienes?"));
            // Validamos la edad hasta que sea correcta
            while (isNaN(edad) || !Number.isInteger(edad) || edad <= 0 || edad > 99) {
                console.log("Ingresa una edad válida (número entre 1 y 99).");
                alert("Ingresa una edad válida (número entre 1 y 99).");
                edad = parseInt(prompt("¿Cuántos años tienes?"));
            }

            // Mostramos el mensaje en consola y en alerta
            console.log(`¡Es un placer conocerte, ${nombre}! Tienes ${edad} años de edad.`);
            alert(`¡Es un placer conocerte, ${nombre}! Tienes ${edad} años de edad.`);

        }
    }

