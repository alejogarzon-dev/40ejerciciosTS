/*
Crea una clase Producto con: id (readonly), nombre (public), precio (private), stock 
(private). Constructor que reciba los cuatro. Métodos: aumentarPrecio(porcentaje), 
reducirStock(cantidad), mostrarFicha(). Crea un producto, simula una venta y 
muestra el resultado
*/

class Producto {
    readonly id: number;
    public nombre: string;
    private precio: number;
    private stock: number;

    constructor(id: number, nombre: string, precio: number, stock: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    aumentarPrecio(porcentaje: number): void {
        if (porcentaje > 0) {
            this.precio += this.precio * (porcentaje / 100);
            console.log(`Precio aumentado en ${porcentaje}%. Nuevo precio: ${this.precio.toFixed(2)}`);
        }
        else {
            console.log("El porcentaje de aumento debe ser positivo.");
        }
    }

    reducirStock(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`Stock reducido en ${cantidad}. Stock actual: ${this.stock}`);
        }
        else {
            console.log("La cantidad a reducir debe ser positiva y no puede exceder el stock actual.");
        }
    }

    mostrarFicha(): void {
        console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Precio: ${this.precio.toFixed(2)}, Stock: ${this.stock}`);
    }
}

let producto = new Producto(1, "Laptop", 1500, 10);
producto.mostrarFicha();
producto.aumentarPrecio(10);
producto.reducirStock(2);
producto.mostrarFicha();

