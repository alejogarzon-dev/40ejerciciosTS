/*
Tienes un array de productos con nombre y dias_vencimiento. Usa some para 
detectar si hay productos con menos de 7 días para vencer. Usa every para verificar 
si TODOS los productos tienen más de 30 días de vida. 
*/

type Producto = [string, number];

let productos: Producto[] = [
    ["Leche", 5],
    ["Pan", 3],
    ["Queso", 10],
    ["Yogur", 15]
];

let hayProductosPorVencer = productos.some(([, dias_vencimiento]) => dias_vencimiento < 7);
let todosProductosLargaVida = productos.every(([, dias_vencimiento]) => dias_vencimiento > 30);

console.log(`¿Hay productos con menos de 7 días para vencer? ${hayProductosPorVencer ? "Sí" : "No"}`);
console.log(`¿Todos los productos tienen más de 30 días de vida? ${todosProductosLargaVida ? "Sí" : "No"}`);