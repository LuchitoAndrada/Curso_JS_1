const main = document.querySelector('main');

const dataMain = data.map((producto) => {
  return `<div class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Categoría: ${producto.categoria}.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Código: ${producto.id}</li>
    <li class="list-group-item">Precio: ${producto.precio}</li>
    <li class="list-group-item">Stock: ${producto.stock}</li>
  </ul>
  <div class="card-body">
    <a href="./producto.html?id=${producto.id}" class="card-link">Ver mas</a>
  </div>
</div>`
})

main.innerHTML = dataMain.join(' ');
