// Array con las categorías del ecommerce
const categorias = ['Aretes', 'Collares', 'Anillos', 'Pulseras', 'Relojes'];

// Variable para almacenar el menú
let menu = "";

// Creamos un bucle para generar cada enlace del menú
for (let categoria of categorias) {
  menu += `
    <li class="nav-item">
      <a class="nav-link px-3 categoria-link" href="#" data-categoria="${categoria}">${categoria}</a>
    </li>`;
  // "px-3" agrega espacio horizontal (padding left/right)
  // "nav-link" aplica el estilo de enlace del navbar de Bootstrap
}

// Obtenemos el header del index
const header = document.querySelector("header");

// Insertamos el navbar en el header
header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
  <!-- py-3 agrega espacio vertical al navbar -->
  <div class="container">
    <a class="navbar-brand fw-bold" href="./index.html">Beauty You</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        ${menu}
      </ul>
    </div>
  </div>
</nav>`;
