class LibroMain {

    // Propiedades
    titulo: string;
    autor: string;
    paginas: number;
    prestado: boolean;

    // Constructor
    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.prestado = false;
    }

    // Marcar el libro como prestado
    prestar(): void {
        this.prestado = true;
        console.log(`"${this.titulo}" ha sido prestado.`);
    }

    // Marcar el libro como devuelto
    devolver(): void {
        this.prestado = false;
        console.log(`"${this.titulo}" ha sido devuelto.`);
    }

    // Mostrar el estado actual
    estado(): void {

        if (this.prestado) {
            console.log(`"${this.titulo}" está prestado.`);
        } else {
            console.log(`"${this.titulo}" está disponible.`);
        }

    }
}

// ===============================
// PRUEBAS
// ===============================

// Crear dos libros
const libroUno = new LibroMain(
    "El Señor de los Algoritmos",
    "Ana Torres",
    450
);

const libroDos = new LibroMain(
    "TypeScript para Principiantes",
    "Carlos Gómez",
    280
);

// Ver estado inicial
libroUno.estado();
libroDos.estado();

console.log("------------------");

// Prestar el primer libro
libroUno.prestar();

console.log("------------------");

// Ver estados nuevamente
libroUno.estado();
libroDos.estado();

console.log("------------------");

// Devolver el primer libro
libroUno.devolver();

console.log("------------------");

// Estado final
libroUno.estado();