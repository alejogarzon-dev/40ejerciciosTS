// Lista de productos
const productos = [
    { nombre: "Audífonos Gamer", precio: 150000, descuento: 25 },
    { nombre: "Teclado Mecánico", precio: 220000, descuento: 15 },
    { nombre: "Mouse Inalámbrico", precio: 80000, descuento: 30 },
    { nombre: "Monitor LED", precio: 750000, descuento: 10 },
    { nombre: "Silla Gamer", precio: 500000, descuento: 35 }
];

// Filtramos los productos con descuento mayor al 20%
const ofertas = productos.filter(producto => producto.descuento > 20);

console.log("Productos en oferta:\n");

// Recorremos los productos filtrados
for (const producto of ofertas) {

    // Calculamos cuánto se descuenta
    const valorDescuento = producto.precio * producto.descuento / 100;

    // Calculamos el precio final
    const precioFinal = producto.precio - valorDescuento;

    // Mostramos la información
    console.log(
        `${producto.nombre} | Descuento: ${producto.descuento}% | Precio final: $${precioFinal}`
    );
}