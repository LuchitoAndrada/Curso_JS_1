// js/main.js
// Este archivo maneja la lógica de la página principal (index.html)

// Capturamos el elemento main donde mostraremos los productos
const main = document.querySelector("#contenedorProductos");

// Función que recibe una lista de productos y los muestra en pantalla
function mostrarProductos(productos) {
    // Limpiamos el contenido anterior del main
    main.innerHTML = "";
    
    // Verificamos si hay productos para mostrar
    if (productos.length === 0) {
        // Si no hay productos, mostramos mensaje
        main.innerHTML = `<p class="text-center text-muted mt-4">No se encontraron productos.</p>`;
        return; // Salimos de la función
    }
    
    // Recorremos cada producto del array con forEach
    productos.forEach((producto) => {
        // Por cada producto, agregamos una tarjeta al main - ESTILO ORIGINAL
        main.innerHTML += `
        <div class="card m-3" style="width: 18rem;">
            <!-- Imagen del producto -->
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <!-- Nombre del producto -->
                <h5 class="fw-bold mb-3">${producto.nombre}</h5>
                <!-- Precio formateado con separadores de miles -->
                <p class="text-muted"><strong>Precio: </strong> $${producto.precio.toLocaleString()}</p>
                <!-- Categoría del producto -->
                <p class="text-muted"><strong>Categoría: </strong>${producto.categoria}</p>
                <!-- Enlace para ver el detalle del producto -->
                <!-- El parámetro ?prod=ID lleva el ID del producto a la página de detalle -->
                <a href="./producto.html?prod=${producto.id}" class="btn btn-dark">Ver detalle</a>
            </div>
        </div>`;
    });
}

// Mostramos todos los productos cuando se abre la página por primera vez
mostrarProductos(data);

// Añadimos evento a cada categoría del navbar para filtrar productos
document.querySelectorAll(".categoria-link").forEach((enlace) => {
    // Por cada enlace de categoría, agregamos un evento click
    enlace.addEventListener("click", (evento) => {
        // Prevenimos el comportamiento por defecto del enlace (navegación)
        evento.preventDefault();
        
        // Obtenemos la categoría del atributo data-categoria del enlace clickeado
        const categoria = evento.target.dataset.categoria;
        
        // Filtramos los productos que coincidan con la categoría seleccionada
        // filter() crea un nuevo array con los elementos que cumplen la condición
        const productosFiltrados = data.filter((producto) => producto.categoria === categoria);
        
        // Mostramos solo los productos filtrados
        mostrarProductos(productosFiltrados);
    });
});

// --- BUSCADOR ---
// Capturamos los elementos del buscador
const buscarInput = document.getElementById("buscarInput");
const botonBuscar = document.getElementById("botonBuscar");
const botonLimpiar = document.getElementById("botonLimpiar");

// Evento para el botón de buscar
botonBuscar.addEventListener("click", () => {
    // Obtenemos y normalizamos el texto de búsqueda
    const textoBusqueda = buscarInput.value
        .toLowerCase()                    // Convertimos a minúsculas para búsqueda case-insensitive
        .normalize("NFD")                 // Normalizamos el texto para separar caracteres con tildes
        .replace(/[\u0300-\u036f]/g, "")  // Eliminamos los diacríticos (tildes)
        .trim();                          // Eliminamos espacios al inicio y final

    // Filtramos los productos cuyo nombre incluya el texto de búsqueda
    const productosFiltrados = data.filter(producto =>
        producto.nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(textoBusqueda)      // Verifica si el nombre incluye el texto buscado
    );

    // Mostramos los productos filtrados
    mostrarProductos(productosFiltrados);

    // Si no hay resultados, mostramos mensaje
    if (productosFiltrados.length === 0) {
        main.innerHTML = `<p class="text-center text-muted mt-4">No se encontraron productos con ese nombre.</p>`;
    }
});

// --- LIMPIAR BUSCADOR ---
botonLimpiar.addEventListener("click", () => {
    // Limpiamos el campo de búsqueda
    buscarInput.value = "";
    // Mostramos todos los productos nuevamente
    mostrarProductos(data);
});

// --- BUSCADOR CON TECLA ENTER --- (MEJORA ADICIONAL OPCIONAL)
// Permitir buscar presionando Enter en el input
buscarInput.addEventListener("keypress", (evento) => {
    // Verificamos si la tecla presionada es Enter (código 13)
    if (evento.key === "Enter") {
        // Prevenimos el comportamiento por defecto (enviar formulario)
        evento.preventDefault();
        // Disparamos el evento de click en el botón buscar
        botonBuscar.click();
    }
});