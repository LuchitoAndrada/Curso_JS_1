const id = Number(location.search.split('=')[1]);

const main = document.querySelector('main section');

const producto = data.find((prod) => prod.id === id);

const productoMain = `<div class="container">
      <div class="row g-4 align-items-center">
        
        <div class="col-md-6 text-center p-4">
          <img src="${producto.imagen}" class="img-fluid rounded shadow" alt="${producto.nombre}">
        </div>
        

        <div class="col-md-6">
          <h2 class="fw-bold mb-3">${producto.nombre}</h2>
          <p class="text-muted mb-1"><strong>Categoría:</strong> ${producto.categoria}</p>
          <p class="mb-1"><strong>Código:</strong> ${producto.id}</p>
          <p class="mb-1"><strong>Stock:</strong> ${producto.stock}</p>
          <p class="fs-4 text-success fw-bold mt-3">Precio: S/ ${producto.precio}</p>
          
          <div class="mt-4">
            <a href="./index.html" class="btn btn-outline-primary me-2">← Regresar</a>
          </div>
        </div>
        
      </div>
    </div>`

main.innerHTML = productoMain;


