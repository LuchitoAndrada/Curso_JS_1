// Capturamos elementos del DOM
const buscarInput = document.getElementById("buscarInput");
const botonBuscar = document.getElementById("botonBuscar");
const botonLimpiar = document.getElementById("botonLimpiar");
const botonesCategoria = document.getElementById("botonesCategoria");
const contenidoCards = document.getElementById("contenidoCards");

// --- FUNCION PARA MOSTRAR PRODUCTOS ---
function mostrarProductos(lista) {
  contenidoCards.innerHTML = lista.map(prod => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text mb-1">
            <strong>Categoría:</strong> ${prod.categoria}
          </p>
          <p class="card-text">
            <strong>Precio:</strong> ${prod.precio.toLocaleString()}
          </p>
        </div>
        <img src="${prod.imagen}" class="card-img-bottom px-4 pb-4" alt="${prod.nombre}">
      </div>
    </div>
  `).join("");
}

// Mostrar todos los productos al inicio
mostrarProductos(products);

// --- BUSCADOR ---
botonBuscar.addEventListener("click", () => {
  const buscarValor = buscarInput.value.toLowerCase().trim();

  const filtro = products.filter(prod =>
    prod.nombre.toLowerCase().includes(buscarValor)
  );

  mostrarProductos(filtro);
});

// --- LIMPIAR BUSCADOR ---
botonLimpiar.addEventListener("click", () => {
  buscarInput.value = "";
  mostrarProductos(products);
});

// --- BOTONES DE CATEGORIA ---
const categorias = [...new Set(products.map(p => p.categoria))];

function botonesCategoriaR() {
  botonesCategoria.innerHTML = `
    <button class="btn btn-outline-primary me-2 mb-2" data-category="all">Ver todos</button>
    ${categorias.map(cat => `
      <button class="btn btn-outline-primary me-2 mb-2" data-category="${cat}">
        ${cat}
      </button>
    `).join("")}
  `;
}

botonesCategoriaR();

// --- FILTRO POR CATEGORIA ---
botonesCategoria.addEventListener("click", (e) => {
  if (e.target.dataset.category) {
    const categoria = e.target.dataset.category;

    if (categoria === "all") {
      mostrarProductos(products);
    } else {
      const filtro = products.filter(p => p.categoria === categoria);
      mostrarProductos(filtro);
    }
  }
});
