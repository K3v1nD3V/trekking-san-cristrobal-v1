
// AGREGAR UN NUEVO REGISTRO 
function mostrarFormulario() {
    const formulario = document.getElementById("registroForm");
    formulario.style.display = formulario.style.display === "none" ? "block" : "none";
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    // Obtén los valores de los campos del formulario
    const id = document.getElementById("id").value;
    const documento = document.getElementById("documento").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const estado = document.getElementById("estado").value;

    // Llama a la función para agregar el nuevo registro a la tabla
    agregarRegistro(id, documento, nombre, apellido, correo, telefono, estado);

    // Opcional: Ocultar el formulario después de agregar el registro y restablecerlo
    this.reset();
    mostrarFormulario();
});

function agregarRegistro(id, documento, nombre, apellido, correo, telefono, estado) {
    const tbody = document.querySelector("table tbody");
    const nuevaFila = document.createElement("tr");

    nuevaFila.innerHTML = `
        <td>${id}</td>
        <td>${documento}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td><span class="status delivered">${estado}</span></td>
        <td>
            <ion-icon name="create-outline" class="icon-large" onclick="editarServicio('${nombre}')"></ion-icon>
            <ion-icon name="trash-outline" class="icon-large" onclick="eliminarServicio('${nombre}')"></ion-icon>
        </td>
    `;

    tbody.appendChild(nuevaFila);
}

// EDITAR UN REGISTRO EXISTENTE 
function editarCliente(id) {
    // Obtén la fila de la tabla que coincide con el ID
    const fila = document.querySelector(`tr[data-id="${id}"]`);
    
    // Obtén los datos de esa fila
    const documento = fila.querySelector('td:nth-child(2)').innerText;
    const nombre = fila.querySelector('td:nth-child(3)').innerText;
    const apellido = fila.querySelector('td:nth-child(4)').innerText;
    const correo = fila.querySelector('td:nth-child(5)').innerText;
    const telefono = fila.querySelector('td:nth-child(6)').innerText;
    const estado = fila.querySelector('td:nth-child(7) .status').innerText;

    // Rellena el formulario de edición con los datos del cliente
    document.getElementById('editId').value = id;
    document.getElementById('editDocumento').value = documento;
    document.getElementById('editNombre').value = nombre;
    document.getElementById('editApellido').value = apellido;
    document.getElementById('editCorreo').value = correo;
    document.getElementById('editTelefono').value = telefono;
    document.getElementById('editEstado').value = estado;

    // Muestra el modal de edición
    document.getElementById('editModal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Escucha el evento submit del formulario de edición para guardar cambios
document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí deberías implementar la lógica para guardar los cambios
    // Podrías actualizar la fila en la tabla, enviar los datos al servidor, etc.
    
    cerrarModal(); // Cierra el modal después de guardar los cambios
});


function eliminarCliente(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        // Lógica para eliminar el cliente
        console.log(`Cliente con ID ${id} eliminado.`);
    }
}
