// Definimos el tipo Libro
type Libro = {
    readonly isbn: string;
    titulo: string;
    autor: string;
    paginas: number;
    año: number;
    generos?: string[];
};

// Creamos el primer libro
const libro1: Libro = {
    isbn: "978-1234567890",
    titulo: "El Viaje Infinito",
    autor: "Laura Gómez",
    paginas: 320,
    año: 2020,
    generos: ["Aventura"]
};

// Creamos el segundo libro
const libro2: Libro = {
    isbn: "978-9876543210",
    titulo: "Misterios del Futuro",
    autor: "Carlos Pérez",
    paginas: 280,
    año: 2023,
    generos: ["Ciencia Ficción"]
};

// Modificamos el año del primer libro
libro1.año = 2021;

// Agregamos un género al segundo libro
libro2.generos?.push("Suspenso");

// Mostramos la información de ambos libros
console.log("LIBRO 1");
console.log(libro1);

console.log("\nLIBRO 2");
console.log(libro2);