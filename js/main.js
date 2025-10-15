//creamos variable main para traer el main del index que es donde vamos a mostrar la card con el resumen del producto
const main = document.querySelector("#contenedorProductos");

// Función que recibe una lista de productos y los muestra en pantalla
function mostrarProductos(productos) {
  //limpiamos lo que habia antes
  main.innerHTML = "";
  //hacemos forEach para que por cada producto de data se introduzca una card con los datos de ese prodocto
  productos.forEach((producto) => {
    main.innerHTML += `
    <div class="card m-3" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="fw-bold mb-3">${producto.nombre}</h5>
        <p class="text-muted"><strong>Precio: </strong> $${producto.precio.toLocaleString()}</p>
        <p class="text-muted"><strong>Categoria: </strong>${producto.categoria}</p>
        <a href="./producto.html?prod=${
          producto.id       
        }" class="btn btn-dark">Ver detalle</a>
      </div>
    </div>`;
  });
}

//mostramos todos los productos cuando se abre la pagina
mostrarProductos(data); //porque en data es en donde estan todos los productos

//añadimos evento a cada categoria del navbar para que al dar click sobre alguna solo nos muestre los productos con esa categoria
//Buscar todos los enlaces del navbar y agregarles un "click"
document.querySelectorAll(".categoria-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que recargue la página
    const categoria = e.target.dataset.categoria; // Saca la categoría del enlace
    const filtrados = data.filter((p) => p.categoria === categoria); // Filtra los productos
    mostrarProductos(filtrados); // Muestra solo los filtrados
  });
});



// Clase 18 - Buscador// Capturamos elementos 
const buscarInput = document.getElementById("buscarInput");
const botonBuscar = document.getElementById("botonBuscar");
const botonLimpiar = document.getElementById("botonLimpiar");


// --- BUSCADOR ---
botonBuscar.addEventListener("click", () => { // cuando se hace clic en el botón de buscar
  const buscarValor = buscarInput.value        // toma el valor ingresado en el input de búsqueda
    .toLowerCase()                            // convierte el texto a minúsculas para ignorar mayúsculas/minúsculas
    .normalize("NFD")                         // normaliza el texto para separar los caracteres con tilde
    .replace(/[\u0300-\u036f]/g, "")          // elimina los diacríticos (tildes) del texto
    .trim();                                  // elimina espacios al inicio y final

  const filtro = data.filter(prod =>          // filtra los productos en el array 'data'
    prod.nombre                               // toma el nombre de cada producto
      .toLowerCase()                         // convierte el nombre a minúsculas
      .normalize("NFD")                      // normaliza el nombre para separar tildes
      .replace(/[\u0300-\u036f]/g, "")       // elimina los diacríticos del nombre
      .includes(buscarValor)      // verifica si el nombre incluye el texto buscado 
  );

  mostrarProductos(filtro);                   // Muestra los productos filtrados en pantalla

  // Si no hay resultados, mostrar mensaje
  if (filtro.length === 0) {                  // Si el array filtrado está vacio
    main.innerHTML = `<p class="text-center text-muted mt-4">No se encontraron productos con ese nombre.</p>`; 
    // Muestra mensaje de "no encontrado"
  }
});

// --- LIMPIAR BUSCADOR ---
botonLimpiar.addEventListener("click", () => { // cuando se hace clic en el botón de limpiar
  buscarInput.value = "";   // limpia el valor del input de busqueda
  mostrarProductos(data);  // muestra todos los productos (restablece la vista)
});