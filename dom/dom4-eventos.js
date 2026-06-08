document.addEventListener("DOMContentLoaded", function mostrarAlerta() {
    alert("¡Hola desde el botón!");
    function agregarProducto() {
        const lista = document.getElementById("lista-productos");
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = "Nuevo Producto";
        lista.appendChild(nuevoProducto);
    }
document.getElementById("btn3").addEventListener("click", () => {
    const lista2 = document.getElementById("lista-productos2");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nuevo Producto desde Evento Listener";
    lista2.appendChild(nuevoProducto);
});

document.getElementById("btncambiar").addEventListener("click",() => {
    const cambiar = document.querySelector("#cambiar");
    cambiar.textContent = "Texto modificado con boton";
    console.log("Mensaje:", cambiar);
});
});