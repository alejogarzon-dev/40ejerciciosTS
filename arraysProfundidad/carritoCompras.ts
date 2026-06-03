/*
Carrito de compras dinámico 
Crea un array de strings vacío llamado carrito. Agrega tres productos con push, 
agrega uno al inicio con unshift, quita el último con pop, verifica con includes si un 
producto está, y finalmente muestra el total de productos. 
*/

let carrito: string[] = [];

carrito.push("Producto 1");
carrito.push("Producto 2");
carrito.push("Producto 3");

carrito.unshift("Producto 0");

carrito.pop();

carrito.includes("Producto 2") ? console.log("Producto 2 está en el carrito") : console.log("Producto 2 no está en el carrito");

console.log(`Total de productos en el carrito: ${carrito.length}`);


