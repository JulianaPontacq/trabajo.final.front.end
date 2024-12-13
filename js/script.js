document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { id: 1, nombre: "Collar para perros", precio: 9500.00, imagen: "../images/collares para perros.jpg" },
        { id: 2, nombre: "Alimento para perros", precio: 85000.00, imagen: "../images/alimento para perros.jpg" },
        { id: 3, nombre: "Mordillo para perros", precio: 9800.00, imagen: "../images/mordillo para perros.jpg" },
        { id: 4, nombre: "Shampoo para perros", precio: 14500.00, imagen: "../images/shampoo para perros.jpg" },
        { id: 5, nombre: "Vitaminas para perros", precio: 25800.00, imagen: "../images/vitaminas para perros.jpg" },
        { id: 6, nombre: "Desparasitante para perros", precio: 19500.00, imagen: "../images/desparasitante para perros.jpg" },
        { id: 7, nombre: "Cepillo 3 en 1 para mascotas", precio: 16000.00, imagen: "../images/cepillo 3 en 1.jpg" },
        { id: 8, nombre: "Arnes para perros", precio: 24500.00, imagen: "../images/arnes para perro.jpg" }
    ];

    const productosContainer = document.getElementById("productos");
    const totalElement = document.getElementById("total");
    const finalizarCompraButton = document.getElementById("finalizar-compra");

    let totalCompra = 0;

    productos.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card"); 
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <input type="number" min="1" max="5" value="1" class="cantidad-producto">
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        document.querySelector(".product-list").appendChild(productCard); 
    });
    

    productosContainer.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = e.target.getAttribute("data-id");
            const producto = productos.find(p => p.id == productId);
            totalCompra += producto.precio;
            totalElement.textContent = totalCompra.toFixed(2);
        }
    });

    finalizarCompraButton.addEventListener("click", () => {
        alert("Compra realizada con éxito");
        totalCompra = 0;
        totalElement.textContent = totalCompra.toFixed(2);
    });
});
