
// Lista de países visitados (hay algunos repetidos)
const paisesVisitados: string[] = [
    "Colombia",
    "México",
    "Perú",
    "Colombia",
    "Argentina",
    "México",
    "Chile",
    "Perú"
];

// Creamos un Set para eliminar los repetidos
const paisesUnicos = new Set(paisesVisitados);

// Convertimos el Set a Array para poder ordenarlo
const listaPaises = [...paisesUnicos];

// Ordenamos alfabéticamente
listaPaises.sort();

// Mostramos cuántos países distintos visitó
console.log("Cantidad de países diferentes:", paisesUnicos.size);

// Mostramos la lista ordenada
console.log("Países visitados:");
console.log(listaPaises);