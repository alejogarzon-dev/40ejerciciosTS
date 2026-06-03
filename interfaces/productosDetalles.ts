/*
Crea una interface Producto con id, nombre, precio (obligatorios), descuento y 
descripcion (opcionales). Crea dos productos: uno con todos los campos y otro solo 
con los obligatorios. Imprime cada uno mostrando el precio final aplicando el 
descuento si existe. 
*/

interface producto {
    id: number;
    nombre: string;
    precio: number;
    descuento?: number;
    descripcion?: string;
}

const producto1: producto = {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    descuento: 10,
    descripcion: "Este es el producto 1"
}

const producto2: producto = {
    id: 2,
    nombre: "Producto 2",
    precio: 200
}

function calcularPrecioFinal (producto: producto): number {
    if (producto.descuento) {
        return producto.precio - (producto.precio * (producto.descuento / 100));
    }
    return producto.precio;
}

console.log(`El precio final de ${producto1.nombre} es: ${calcularPrecioFinal(producto1)}`);
console.log(`El precio final de ${producto2.nombre} es: ${calcularPrecioFinal(producto2)}`);