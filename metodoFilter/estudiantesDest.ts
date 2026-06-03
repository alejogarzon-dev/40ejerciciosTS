/*
Tienes un array de estudiantes con nombre, promedio y asistencia. Filtra los que 
tienen promedio mayor o igual a 4.0 Y asistencia mayor a 90%. Muestra cuántos 
cumplen y sus nombres separados por coma.
*/

type Estudiante = [string, number, number];

let estudiantes: Estudiante[] = [
    ["Santiago", 4.5, 95],
    ["Alejandro", 3.8, 92],
    ["Sebastian", 4.2, 88],
    ["Nicolas", 4.0, 91],
    ["Angulo", 3.5, 85],
    ["Vannesa", 3.5, 85]
];

let estudiantesFiltrados = estudiantes.filter(([, promedio, asistencia]) => promedio >= 4.0 && asistencia > 90);

console.log(`Cantidad de estudiantes que cumplen: ${estudiantesFiltrados.length}`);
console.log(`Nombres de los estudiantes que cumplen: ${estudiantesFiltrados.map(([nombre]) => nombre).join(", ")}`);