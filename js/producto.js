
//  Esta línea obtiene el número del producto desde la URL
// Ejemplo: si la URL es producto.html?prod=2
// location.search = "?prod=2"
// split("=") separa ["?prod", "2"]
// [1] accede al segundo elemento del arreglo → "2"
// Number() lo convierte a número → 2
const id = Number(location.search.split("=")[1]);

//Busca dentro del array data el objeto (producto) cuyo id sea igual al número que obtuvimos de la URL
const producto = data.find(item => item.id === id)

//obtenemos el main de producto.html
const main = document.getElementById("detalleProducto");

//condicional para evaluar que producto exista
if (producto) {
    const productoHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-md-6 text-center">
        <img src="${producto.imagen}" class="img-fluid rounded shadow" alt="${producto.nombre}" style="max-width: 300px;">
      </div>
      <div class="col-md-6">
        <h2 class="fw-bold mb-3">${producto.nombre}</h2>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Stock:</strong> ${producto.stock}</p>
        <p class="text-success fw-bold fs-4">$${producto.precio}</p>
        <a href="./index.html" class="btn btn-outline-primary mt-3">← Regresar</a>
      </div>
    </div>
  `;

  //insertamos card dentro del main de producto.html
  main.innerHTML = productoHTML;
}else{
    main.innerHTML = `<p class="text-danger">Producto no encontrado.</p>`;
}
