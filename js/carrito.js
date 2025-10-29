// js/carrito.js
// Este archivo maneja la visualización y funcionalidad del carrito de compras

// Función para mostrar notificaciones elegantes (toast de Bootstrap)
function mostrarNotificacion(mensaje, tipo = 'success') {
    // 'tipo' puede ser: 'success', 'error', 'warning' para diferentes colores
    
    // Definimos los colores de fondo según el tipo de notificación
    const colores = {
        'success': 'bg-success', // Verde para operaciones exitosas
        'error': 'bg-danger',    // Rojo para errores
        'warning': 'bg-warning'  // Amarillo para advertencias
    };
    
    // Creamos el elemento toast (notificación) dinámicamente
    const toast = document.createElement('div');
    // Aplicamos clases de Bootstrap para el estilo y posición
    toast.className = `toast align-items-center text-white ${colores[tipo]} border-0 position-fixed top-0 end-0 m-3`;
    // Estructura HTML interna del toast
    toast.innerHTML = `
        <div class="d-flex">
            <!-- Cuerpo del toast donde va el mensaje -->
            <div class="toast-body">${mensaje}</div>
            <!-- Botón para cerrar la notificación -->
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    // Agregamos el toast al final del cuerpo del documento
    document.body.appendChild(toast);
    
    // Creamos una instancia de Toast de Bootstrap con el elemento
    const bsToast = new bootstrap.Toast(toast);
    // Mostramos el toast
    bsToast.show();
    
    // Evento que se ejecuta cuando el toast se oculta
    toast.addEventListener('hidden.bs.toast', () => {
        // Removemos el toast del DOM para limpiar
        toast.remove();
    });
}

// Función principal que se ejecuta cuando se carga la página del carrito
function mostrarCarrito() {
    // Obtenemos el contenedor donde mostraremos el carrito
    const contenedorCarrito = document.getElementById("contenedorCarrito");
    
    // Obtenemos el carrito desde localStorage
    // Si no existe carrito, creamos un array vacío
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Verificamos si el carrito está vacío
    if (carrito.length === 0) {
        // Si está vacío, mostramos un mensaje amigable
        contenedorCarrito.innerHTML = `
            <div class="empty-cart text-center py-5">
                <div class="mb-4">
                    <i class="bi bi-cart-x display-1 text-muted"></i>
                </div>
                <h3 class="text-muted mb-3">Tu carrito está vacío</h3>
                <p class="text-muted mb-4">Agrega algunos productos increíbles a tu carrito.</p>
                <a href="./index.html" class="btn btn-dark">
                    <i class="bi bi-bag me-2"></i>Explorar productos
                </a>
            </div>
        `;
        return; // Salimos de la función
    }
    
    // Calculamos el total del carrito sumando precio * cantidad de cada producto
    const totalCarrito = carrito.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
    }, 0); // 0 es el valor inicial del acumulador
    
    // Generamos el HTML para mostrar los productos del carrito
    let htmlCarrito = `
        <div class="row">
            <!-- Lista de productos -->
            <div class="col-lg-8">
                <div class="card shadow-sm">
                    <div class="card-header bg-light">
                        <h5 class="mb-0">Productos en el carrito (${carrito.length})</h5>
                    </div>
                    <div class="card-body p-0">
    `;
    
    // Agregamos cada producto al HTML del carrito
    carrito.forEach((producto, index) => {
        // Buscamos el producto original en data.js para obtener el stock real
        const productoOriginal = data.find(prod => prod.id === producto.id);
        // Calculamos el subtotal de este producto (precio * cantidad)
        const subtotal = producto.precio * producto.cantidad;
        
        htmlCarrito += `
            <div class="cart-item border-bottom p-3">
                <div class="row align-items-center">
                    <!-- Imagen del producto -->
                    <div class="col-2">
                        <img src="${producto.imagen}" 
                             alt="${producto.nombre}" 
                             class="img-fluid rounded"
                             style="height: 80px; object-fit: cover;">
                    </div>
                    
                    <!-- Información del producto -->
                    <div class="col-4">
                        <h6 class="fw-bold mb-1">${producto.nombre}</h6>
                        <small class="text-muted">${producto.categoria}</small>
                        <p class="mb-0 text-primary fw-bold">$${producto.precio.toLocaleString()}</p>
                        <!-- Mostramos el stock disponible del producto -->
                        <small class="text-muted">Stock disponible: ${productoOriginal.stock}</small>
                    </div>
                    
                    <!-- Controles de cantidad CON VALIDACIÓN DE STOCK -->
                    <div class="col-3">
                        <div class="input-group input-group-sm">
                            <!-- Botón para disminuir cantidad -->
                            <button class="btn btn-outline-secondary" 
                                    type="button" 
                                    onclick="actualizarCantidad(${index}, ${producto.cantidad - 1})">
                                -
                            </button>
                            <!-- Input para mostrar y editar cantidad -->
                            <input type="number" 
                                   class="form-control text-center" 
                                   value="${producto.cantidad}" 
                                   min="1" 
                                   max="${productoOriginal.stock}"
                                   onchange="actualizarCantidad(${index}, parseInt(this.value))">
                            <!-- Botón para aumentar cantidad -->
                            <button class="btn btn-outline-secondary" 
                                    type="button" 
                                    onclick="actualizarCantidad(${index}, ${producto.cantidad + 1})">
                                +
                            </button>
                        </div>
                    </div>
                    
                    <!-- Subtotal y eliminar -->
                    <div class="col-3 text-end">
                        <p class="fw-bold mb-1">$${subtotal.toLocaleString()}</p>
                        <!-- Botón para eliminar producto del carrito -->
                        <button class="btn btn-outline-danger btn-sm" 
                                onclick="eliminarProducto(${index})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Cerramos la sección de productos y agregamos el resumen
    htmlCarrito += `
                    </div>
                </div>
            </div>
            
            <!-- Resumen del pedido -->
            <div class="col-lg-4">
                <div class="card shadow-sm">
                    <div class="card-header bg-light">
                        <h5 class="mb-0">Resumen del pedido</h5>
                    </div>
                    <div class="card-body">
                        <!-- Subtotal -->
                        <div class="d-flex justify-content-between mb-2">
                            <span>Subtotal:</span>
                            <span>$${totalCarrito.toLocaleString()}</span>
                        </div>
                        
                        <!-- Envío -->
                        <div class="d-flex justify-content-between mb-2">
                            <span>Envío:</span>
                            <span class="text-success">Gratis</span>
                        </div>
                        
                        <!-- Línea divisoria -->
                        <hr>
                        
                        <!-- Total -->
                        <div class="d-flex justify-content-between mb-3 fw-bold fs-5">
                            <span>Total:</span>
                            <span>$${totalCarrito.toLocaleString()}</span>
                        </div>
                        
                        <!-- Botón de checkout -->
                        <button class="btn btn-dark w-100 mb-3" onclick="procederPago()">
                            <i class="bi bi-credit-card me-2"></i>Proceder al pago
                        </button>
                        
                        <!-- Botón para limpiar carrito -->
                        <button class="btn btn-outline-danger w-100" onclick="limpiarCarrito()">
                            <i class="bi bi-trash me-2"></i>Vaciar carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertamos todo el HTML generado en el contenedor
    contenedorCarrito.innerHTML = htmlCarrito;
}

// Función para actualizar la cantidad de un producto EN EL CARRITO CON VALIDACIONES
function actualizarCantidad(indice, nuevaCantidad) {
    // VALIDACIÓN 1: Verificamos que la cantidad sea un número válido
    if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
        // Si no es válida, establecemos el mínimo en 1
        nuevaCantidad = 1;
        mostrarNotificacion("❌ La cantidad mínima es 1", 'error');
        return; // Salimos de la función
    }
    
    // Obtenemos el carrito actual desde localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Verificamos que el índice sea válido (que el producto exista en el carrito)
    if (carrito[indice]) {
        // Buscamos el producto original en data.js para verificar el stock real
        const productoOriginal = data.find(prod => prod.id === carrito[indice].id);
        
        // VALIDACIÓN 2: Verificamos que la nueva cantidad no supere el stock disponible
        if (nuevaCantidad > productoOriginal.stock) {
            mostrarNotificacion(`❌ No hay suficiente stock. Máximo disponible: ${productoOriginal.stock}`, 'error');
            
            // Forzamos el valor máximo permitido (el stock disponible)
            nuevaCantidad = productoOriginal.stock;
            
            // Actualizamos el input visualmente para que muestre el máximo permitido
            const inputs = document.querySelectorAll('input[type="number"]');
            if (inputs[indice]) {
                inputs[indice].value = productoOriginal.stock;
            }
        }
        
        // Si pasa todas las validaciones, actualizamos la cantidad en el carrito
        carrito[indice].cantidad = nuevaCantidad;
        
        // Guardamos el carrito actualizado en localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        // Actualizamos la cantidad total en el navbar
        actualizarCantidadTotal();
        
        // Recargamos la vista del carrito para mostrar los cambios
        mostrarCarrito();
        
        // Mostramos notificación de éxito
        mostrarNotificacion("✅ Cantidad actualizada correctamente");
    } else {
        // Si el índice no es válido, mostramos error
        mostrarNotificacion("❌ Error: Producto no encontrado en el carrito", 'error');
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(indice) {
    // Obtenemos el carrito actual desde localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Verificamos que el índice sea válido
    if (carrito[indice]) {
        // Obtenemos el nombre del producto para el mensaje de confirmación
        const nombreProducto = carrito[indice].nombre;
        
        // Mostramos confirmación antes de eliminar
        if (confirm(`¿Estás seguro de que quieres eliminar "${nombreProducto}" del carrito?`)) {
            // Eliminamos el producto del carrito usando splice
            // splice(indice, 1) elimina 1 elemento en la posición del índice
            carrito.splice(indice, 1);
            
            // Guardamos el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
            
            // Actualizamos la cantidad total en el navbar
            actualizarCantidadTotal();
            
            // Recargamos la vista del carrito para mostrar los cambios
            mostrarCarrito();
            
            // Mostramos notificación de éxito
            mostrarNotificacion("✅ Producto eliminado del carrito");
        }
    } else {
        mostrarNotificacion("❌ Error: Producto no encontrado", 'error');
    }
}

// Función para limpiar todo el carrito
function limpiarCarrito() {
    // Mostramos confirmación antes de vaciar todo el carrito
    if (confirm("¿Estás seguro de que quieres vaciar todo el carrito? Esta acción no se puede deshacer.")) {
        // Limpiamos el carrito guardando un array vacío
        localStorage.setItem("carrito", JSON.stringify([]));
        // Reseteamos la cantidad total a 0
        localStorage.setItem("cantidad", "0");
        
        // Actualizamos la cantidad en el navbar
        actualizarCantidadTotal();
        
        // Recargamos la vista del carrito (mostrará el carrito vacío)
        mostrarCarrito();
        
        // Mostramos notificación de éxito
        mostrarNotificacion("✅ Carrito vaciado correctamente");
    }
}

// Función para proceder al pago (simulación)
function procederPago() {
    // Por ahora es una simulación, en un proyecto real aquí iría la integración con pasarela de pago
    mostrarNotificacion("¡Funcionalidad de pago en desarrollo! Por ahora esto es una simulación.", 'warning');
}

// Función para actualizar la cantidad total en el navbar
function actualizarCantidadTotal() {
    // Obtenemos el carrito actual
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Calculamos la cantidad total de productos en el carrito
    const cantidadTotal = carrito.reduce((acumulado, productoActual) => {
        return acumulado + productoActual.cantidad;
    }, 0); // 0 es el valor inicial del acumulador
    
    // Guardamos la cantidad total en localStorage
    localStorage.setItem("cantidad", cantidadTotal.toString());
    
    // Actualizamos el elemento en el navbar que muestra la cantidad
    const cantidadElemento = document.querySelector("#cantidad-carrito");
    if (cantidadElemento) {
        cantidadElemento.innerText = cantidadTotal;
    }
}

// Ejecutamos la función cuando se carga la página del carrito
mostrarCarrito();