/*
Crea un array de 5 cursos con: codigo, nombre, creditos, aprobado (boolean). 
Imprime todos los cursos formateados. Filtra los aprobados, calcula el total de 
créditos aprobados y muestra el porcentaje de cursos aprobados respecto al total. 
*/

type Curso = [string, string, number, boolean];

let cursos: Curso[] = [
    ["CS101", "Introducción a la Programación", 3, true],
    ["CS102", "Estructuras de Datos", 4, false],
    ["CS103", "Algoritmos", 4, true],
    ["CS104", "Bases de Datos", 3, true],
    ["CS105", "Sistemas Operativos", 4, false]
];

// Imprimir todos los cursos formateados
cursos.forEach(([codigo, nombre, creditos, aprobado]) => {
    console.log(`Código: ${codigo}, Nombre: ${nombre}, Créditos: ${creditos}, Aprobado: ${aprobado ? "Sí" : "No"}`);
});

// Filtrar los aprobados
let cursosAprobados = cursos.filter(([, , , aprobado]) => aprobado);

// Calcular el total de créditos aprobados
let totalCreditosAprobados = cursosAprobados.reduce((sum, [, , creditos]) => sum + creditos, 0);

// Mostrar el porcentaje de cursos aprobados respecto al total
let porcentajeAprobados = (cursosAprobados.length / cursos.length) * 100;

console.log(`Total de créditos aprobados: ${totalCreditosAprobados}`);
console.log(`Porcentaje de cursos aprobados: ${porcentajeAprobados.toFixed(2)}%`);