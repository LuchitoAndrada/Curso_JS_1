const section = document.getElementById("contenedorElementos");

alert("Bienvenido, vamos a construir una página utilizando el DOM.");

// Preguntamos al usuario cuántos elementos desea crear
let cantidad = Number(prompt("Ingrese la cantidad de elementos que desea crear:"));

// Bucle para crear los elementos
for (let i = 0; i < cantidad; i++) {
  // Menú con opciones de elementos
  let tipo = prompt(
    "Selecciona el tipo de elemento que deseas agregar:\n1. button\n2. input\n3. textarea\n4. h1\n5. p"
  );

  // Convertimos la opción ingresada por el usuario al nombre del elemento
  switch (tipo) {
    case "1":
      tipo = "button";
      break;
    case "2":
      tipo = "input";
      break;
    case "3":
      tipo = "textarea";
      break;
    case "4":
      tipo = "h1";
      break;
    case "5":
      tipo = "p";
      break;
    default:
      alert("Opción inválida. Este elemento se omitirá.");
      continue;
  }

  // Creamos el elemento con createElement
  const nuevoElemento = document.createElement(tipo);

  // Si el elemento lleva texto o contenido
  if (tipo === "h1" || tipo === "p" || tipo === "button" || tipo === "textarea") {
    const texto = prompt(`Escribe el texto para el elemento <${tipo}>:`);
    nuevoElemento.textContent = texto;
  }

  // Si es input, pedimos placeholder
  if (tipo === "input") {
    const placeholder = prompt("Escribe el placeholder del input:");
    nuevoElemento.placeholder = placeholder;
  }

  // Agregamos el elemento a la sección
  section.appendChild(nuevoElemento);
}

alert("Página creada correctamente con los elementos seleccionados.");
