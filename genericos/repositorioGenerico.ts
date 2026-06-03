// ===============================
// INTERFACE CONID
// ===============================

interface ConId {
    id: number;
}

// ===============================
// CLASE REPOSITORIO GENÉRICO
// ===============================

class Repositorio<T extends ConId> {

    private datos: T[] = [];

    // Agregar elemento
    agregar(item: T): void {
        this.datos.push(item);
    }

    // Buscar por ID
    buscarPorId(id: number): T | undefined {
        return this.datos.find(item => item.id === id);
    }

    // Eliminar por ID
    eliminar(id: number): void {
        this.datos = this.datos.filter(item => item.id !== id);
    }

    // Mostrar todos los elementos
    todos(): T[] {
        return this.datos;
    }
}

// ===============================
// PRODUCTOS
// ===============================

interface Producto2 extends ConId {
    nombre: string;
    precio: number;
}

const repoProductos = new Repositorio<Producto2>();

repoProductos.agregar({
    id: 1,
    nombre: "Teclado",
    precio: 120000
});

repoProductos.agregar({
    id: 2,
    nombre: "Mouse",
    precio: 50000
});

repoProductos.agregar({
    id: 3,
    nombre: "Monitor",
    precio: 800000
});

console.log("PRODUCTOS:");
console.log(repoProductos.todos());

console.log("\nBuscar producto con ID 2:");
console.log(repoProductos.buscarPorId(2));

repoProductos.eliminar(1);

console.log("\nProductos después de eliminar ID 1:");
console.log(repoProductos.todos());

// ===============================
// USUARIOS
// ===============================

interface Usuario2 extends ConId {
    nombre: string;
    correo: string;
}

const repoUsuarios = new Repositorio<Usuario2>();

repoUsuarios.agregar({
    id: 101,
    nombre: "Valentina",
    correo: "valentina@gmail.com"
});

repoUsuarios.agregar({
    id: 102,
    nombre: "Santiago",
    correo: "santiago@gmail.com"
});

repoUsuarios.agregar({
    id: 103,
    nombre: "Camila",
    correo: "camila@gmail.com"
});

console.log("\nUSUARIOS:");
console.log(repoUsuarios.todos());

console.log("\nBuscar usuario con ID 102:");
console.log(repoUsuarios.buscarPorId(102));

repoUsuarios.eliminar(103);

console.log("\nUsuarios después de eliminar ID 103:");
console.log(repoUsuarios.todos());