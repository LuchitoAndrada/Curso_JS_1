# 💎 Beauty You - Ecommerce de Joyería Elegante

![Beauty You](https://img.shields.io/badge/BeautyYou-Joyería_Elegante-ff69b4)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)

Una aplicación web moderna de ecommerce especializada en joyería fina, desarrollada con JavaScript vanilla y Bootstrap 5.

## ✨ Características Principales

### 🛍️ Funcionalidades de Tienda
- **Catálogo de productos** con 5 categorías diferentes
- **Búsqueda inteligente** con filtrado en tiempo real
- **Navegación por categorías** (Aretes, Collares, Anillos, Pulseras, Relojes)
- **Detalles de productos** con galería de imágenes
- **Stock en tiempo real** con validaciones

### 🛒 Sistema de Carrito Avanzado
- **Gestión de cantidades** con validación de stock
- **Cálculo automático** de subtotales y totales
- **Persistencia de datos** con localStorage
- **Eliminación individual** y vaciado completo
- **Notificaciones elegantes** con Toastify

### 🔐 Sistema de Autenticación
- **Login seguro** con credenciales predefinidas
- **Sesiones persistentes** 
- **Protección de rutas** (carrito requiere autenticación)
- **Logout seguro** con limpieza de datos

### 📦 Gestión de Pedidos
- **Checkout integrado** con MockAPI
- **Historial de pedidos** por usuario
- **Confirmaciones** con SweetAlert2
- **Números de orden** únicos

## 🚀 Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **JavaScript ES6+** | Lógica de aplicación |
| **Bootstrap 5.3.2** | Framework CSS y componentes UI |
| **Bootstrap Icons** | Iconografía consistente |
| **SweetAlert2** | Alertas y confirmaciones elegantes |
| **Toastify.js** | Notificaciones tipo toast |
| **MockAPI** | API REST para simulación backend |
| **LocalStorage** | Persistencia local de datos |

## 📁 Estructura del Proyecto
beauty-you/
├── 📄 index.html # Página principal con catálogo
├── 📄 producto.html # Detalle de producto
├── 📄 carrito.html # Carrito de compras
├── 📄 login.html # Página de autenticación
├── 📄 historial.html # Historial de pedidos
├── 📁 js/
│ ├── 🛠️ main.js # Lógica principal
│ ├── 🛠️ producto.js # Gestión de detalles de producto
│ ├── 🛠️ carrito.js # Funcionalidades del carrito
│ ├── 🛠️ login.js # Autenticación y validaciones
│ ├── 🛠️ navbar.js # Navegación dinámica
│ ├── 🛠️ historial.js # Gestión de historial de pedidos
│ ├── 🛠️ constantes.js # Configuraciones y credenciales
│ ├── 🛠️ verificarSesion.js # Middleware de autenticación
│ └── 🛠️ redireccionSiAutenticado.js # Control de acceso
├── 📁 data/
│ └── 📊 data.js # Base de datos de productos
└── 📁 img/
└── 🖼️ [imágenes de productos] # Assets visuales


## 🛠️ Instalación y Configuración

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (Live Server, XAMPP, etc.)

### Pasos de Instalación
1. **Clonar o descargar** el proyecto
2. **Abrir en servidor local** (recomendado: VS Code Live Server)
3. **Acceder** a `index.html` en el navegador
4. **Credenciales de prueba:**
   - Email: `rick@morty.com`
   - Contraseña: `123456`

### Configuración de MockAPI
1. Crear cuenta en [mockapi.io](https://mockapi.io)
2. Crear proyecto "cart" con recurso "orders"
3. Actualizar `MOCKAPI_URL` en `carrito.js` y `historial.js`

## 💻 Uso de la Aplicación

### 👤 Flujo de Usuario
1. **Explorar productos** en la página principal
2. **Filtrar** por categoría o búsqueda
3. **Ver detalles** del producto haciendo clic
4. **Iniciar sesión** para agregar al carrito
5. **Gestionar carrito** y proceder al checkout
6. **Confirmar pedido** y ver historial

### 🛍️ Funciones del Carrito
- **Agregar productos** con validación de stock
- **Modificar cantidades** (mínimo 1, máximo stock disponible)
- **Eliminar items** individualmente
- **Vaciar carrito** completamente
- **Procesar pago** con confirmación

## 🎯 Implementaciones Destacadas

### ⚡ Asincronía y Promesas
´´´javascript

function cargarProductos() {
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 3000);
    });
    
    promesaProductos
        .then(productos => renderizarProductos(productos))
        .catch(error => manejarError(error))
        .finally(() => console.log('Carga completada'));
}

### 🌐 API Fetch y MockAPI
function procederPago() {
    fetch(MOCKAPI_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(ordenData)
    })
    .then(response => response.json())
    .then(data => mostrarConfirmacion(data))
    .catch(error => manejarError(error));
}

### 🐛 Solución de Problemas
## Problemas Comunes
1. Categorías no funcionan - Verificar que navbar.js esté cargado
2. Carrito no persiste - Verificar localStorage habilitado
3. API no responde - Confirmar URL de MockAPI correcta
4. Imágenes no cargan - Verificar rutas en data.js

### 📈 Próximas Mejoras
1. Sistema de pagos integrado
2. Carousel de productos destacados
3. Búsqueda avanzada por múltiples criterios
4. Sistema de reviews y calificaciones
5. Modo oscuro
6. Integración con APIs reales de pago

### 👥 Contribución

1. Fork el proyecto
2. Crear rama para feature (git checkout -b feature/AmazingFeature)
3. Commit cambios (git commit -m 'Add some AmazingFeature')
4. Push a la rama (git push origin feature/AmazingFeature)
5. Abrir Pull Request

### 📄 Licencia
## Este proyecto está bajo la Licencia MIT.

### 🏆 Reconocimientos
1. Bootstrap - Framework CSS
2. SweetAlert2 - Alertas elegantes
3. Toastify - Notificaciones
4. MockAPI - Simulación de backend
5. Bootstrap Icons - Iconografía

### 📞 Soporte

Si encuentras algún problema:

    Revisa la consola del navegador (F12)

    Verifica la documentación

    Abre un issue en el repositorio

### Beauty You - Donde la elegancia se encuentra con la tecnología 💫
