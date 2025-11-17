// js/main.js
// Este archivo maneja la lógica de la página principal (index.html) CON ASINCRONÍA


//CLASE 26-27
// Función para simular carga asincrónica de productos CON PROMESA
function cargarProductos() {
    // Mostrar spinner y ocultar grilla
    document.getElementById('spinnerLoader').style.display = 'block';
    document.getElementById('grillaProductos').style.display = 'none';
    
    // Crear promesa con setTimeout de 3 segundos 
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos que siempre se resuelve correctamente
            resolve(data); // 'data' es nuestro array de productos
        }, 3000); //3 segundos de espera
    });
    
    // Manejar la promesa CON THEN, CATCH, FINALLY 
    promesaProductos
        .then(productos => {
            // ÉXITO: Ocultar spinner y mostrar grilla
            document.getElementById('spinnerLoader').style.display = 'none';
            document.getElementById('grillaProductos').style.display = 'flex';
            
            // Renderizar productos
            renderizarProductos(productos);
        })
        .catch(error => {
            // ERROR: Mostrar mensaje de error
            console.error('Error cargando productos:', error);
            document.getElementById('spinnerLoader').innerHTML = `
                <div class="alert alert-danger">
                    Error al cargar los productos. Intenta nuevamente.
                </div>
            `;
        })
        .finally(() => {
            // SIEMPRE SE EJECUTA
            console.log('Carga de productos finalizada');
        });
}

// Función que recibe una lista de productos y los muestra en pantalla
function renderizarProductos(productos) {
    const contenedor = document.getElementById('grillaProductos');
    let html = '';
    
    // Verificamos si hay productos para mostrar
    if (productos.length === 0) {
        html = `<p class="text-center text-muted mt-4">No se encontraron productos.</p>`;
    } else {
        // Recorremos cada producto del array con forEach
        productos.forEach((producto) => {
            html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text text-muted">${producto.categoria}</p>
                        <p class="card-text fw-bold text-primary">$${producto.precio.toLocaleString()}</p>
                        <div class="mt-auto">
                            <a href="./producto.html?prod=${producto.id}" class="btn btn-dark w-100">Ver detalle</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    }
    
    contenedor.innerHTML = html;
}

// Añadimos evento a cada categoría del navbar para filtrar productos
function configurarFiltros() {
    document.querySelectorAll(".categoria-link").forEach((enlace) => {
        enlace.addEventListener("click", (evento) => {
            evento.preventDefault();
            
            const categoria = evento.target.dataset.categoria;
            const productosFiltrados = data.filter((producto) => producto.categoria === categoria);
            
            // Mostrar spinner al filtrar
            document.getElementById('spinnerLoader').style.display = 'block';
            document.getElementById('grillaProductos').style.display = 'none';
            
            // Simular carga asincrónica también en filtros
            setTimeout(() => {
                document.getElementById('spinnerLoader').style.display = 'none';
                document.getElementById('grillaProductos').style.display = 'flex';
                renderizarProductos(productosFiltrados);
            }, 1000);
        });
    });
}

// --- BUSCADOR ---
function configurarBuscador() {
    const buscarInput = document.getElementById("buscarInput");
    const botonBuscar = document.getElementById("botonBuscar");
    const botonLimpiar = document.getElementById("botonLimpiar");

    // Evento para el botón de buscar
    botonBuscar.addEventListener("click", () => {
        const textoBusqueda = buscarInput.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

        const productosFiltrados = data.filter(producto =>
            producto.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(textoBusqueda)
        );

        // Mostrar spinner al buscar
        document.getElementById('spinnerLoader').style.display = 'block';
        document.getElementById('grillaProductos').style.display = 'none';
        
        // Simular carga asincrónica
        setTimeout(() => {
            document.getElementById('spinnerLoader').style.display = 'none';
            document.getElementById('grillaProductos').style.display = 'flex';
            renderizarProductos(productosFiltrados);
            
            if (productosFiltrados.length === 0) {
                document.getElementById('grillaProductos').innerHTML = `<p class="text-center text-muted mt-4">No se encontraron productos con ese nombre.</p>`;
            }
        }, 1000);
    });

    // --- LIMPIAR BUSCADOR ---
    botonLimpiar.addEventListener("click", () => {
        buscarInput.value = "";
        // Mostrar spinner al limpiar
        document.getElementById('spinnerLoader').style.display = 'block';
        document.getElementById('grillaProductos').style.display = 'none';
        
        // Simular carga asincrónica
        setTimeout(() => {
            document.getElementById('spinnerLoader').style.display = 'none';
            document.getElementById('grillaProductos').style.display = 'flex';
            renderizarProductos(data);
        }, 1000);
    });

    // --- BUSCADOR CON TECLA ENTER ---
    buscarInput.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            evento.preventDefault();
            botonBuscar.click();
        }
    });
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar carga asincrónica de productos
    cargarProductos();
    
    // Configurar eventos después de que se cargue el navbar
    setTimeout(() => {
        configurarFiltros();
        configurarBuscador();
    }, 100);
});