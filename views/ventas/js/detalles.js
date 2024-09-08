document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id'); 

    if (productoId) {

        fetch('./js/productos.json')
            .then(response => response.json())
            .then(productos => {

                const producto = productos.find(item => item.id === productoId);

                if (producto) {
                    mostrarDetallesProducto(producto);
                } else {
                    console.error('Producto no encontrado');
                }
            })
            .catch(error => console.error('Error al cargar los productos:', error));
    } else {
        console.error('ID de producto no encontrado en la URL');
    }
});

function mostrarDetallesProducto(producto) {

    const contenedorDetallesProducto = document.querySelector("#detalles-producto");

    const serviciosList = producto.servicios.map(servicio => 
        `<li><strong>${servicio.nombre}:</strong> ${servicio.descripcion}</li>`).join('');

    contenedorDetallesProducto.innerHTML = `
        <div class="producto-detalle">
            <img class="producto-detalle-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle-info">
                <h3>${producto.titulo}</h3>
                <p><strong>Destino:</strong> ${producto.destino}</p>
                <p><strong>Guía:</strong> ${producto.guia}</p>
                <p><strong>Cupos disponibles:</strong> ${producto.cupos}</p>
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <ul><strong>Servicios incluidos:</strong> ${serviciosList}</ul>
                <button id="agregar-carrito" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    `;

    const botonAgregarCarrito = document.querySelector("#agregar-carrito");
    botonAgregarCarrito.addEventListener("click", () => {
        agregarProductoAlCarrito(producto);
    });
}

function agregarProductoAlCarrito(producto) {

    let productosEnCarrito = localStorage.getItem('productos-en-carrito') ? JSON.parse(localStorage.getItem('productos-en-carrito')) : [];

    const productoExistente = productosEnCarrito.find(item => item.id === producto.id);
    if (productoExistente) {
        productoExistente.cantidad += 1;  
    } else {
        producto.cantidad = 1;  
        productosEnCarrito.push(producto);
    }


    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));

    alert('Producto agregado al carrito');
}
