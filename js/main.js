//capturamos elementos del DOM
const buscarInput = document.getElementById("buscarInput");
const botonBuscar = document.getElementById("botonBuscar");
const botonLimpia = document.getElementById("botonLimpiar");
const botonesCategoria = document.getElementById("botonesCategoria");
const contenidoCards = document.getElementById("contenidoCards");

//funcion para mostrar los productos del archivo data.js
function mostrarProductos(producto) {
    contenidoCards.innerHTML = producto.map(prod =>`
        <div>
            <h3>${prod.nombre}</h3>
            <p>${prod.categoria}</p>
            <p>${prod.precio}</p>
            <hr>
        </div>`

    ).join("")
}

//mostramos todos los productos
mostrarProductos(productos);

// Buscador
botonBuscar.addEventListener("click", () =>{
    const buscarValor = buscarInput.value.toLowerCase().trim();
    const filtro = productos.filter(prod =>
        prod.nombre.toLowerCase().includes(buscarValor)
    );

    //mostramos solo los productos con el valor filtrado
    mostrarProductos(filtro);
})

//limpiar buscador
botonLimpia.addEventListener("click", () =>{
    buscarInput.value = "";
    mostrarProductos(productos);
})

//botones de categoria
const categorias = [...new Set(productos.map(p => p.categoria))];

function botonesCategoriaR() {
  botonesCategoria.innerHTML = `
    <button data-category="all">Ver todos</button>
    ${categorias.map(cat => `<button data-category="${cat}">${cat}</button>`).join("")}
  `;
}

botonesCategoriaR();

// --- EVENTO PARA FILTRAR POR CATEGORÍA ---
botonesCategoria.addEventListener("click", (e) => {
  if (e.target.dataset.category) {
    const categoria = e.target.dataset.category;

    if (categoria === "all") {
      mostrarProductos(productos);
    } else {
      const filtro = productos.filter(p => p.categoria === categoria);
      mostrarProductos(filtro);
    }
  }
});

