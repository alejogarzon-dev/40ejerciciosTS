/*
Tienes un array de empleados con id, nombre y cargo. Usa find para encontrar al 
empleado con id 5. Usa findIndex para saber su posición. Usa some para verificar 
si existe algún 'Gerente'. Imprime los resultados. 
*/

type Empleado = [number, string, string];

let emplead0s: Empleado[] = [
    [1, "Santiago", "Desarrollador"],
    [2, "Alejandro", "Diseñador"],
    [3, "Sebastian", "Analista"],
    [4, "Nicolas", "Tester"],
    [5, "Angulo", "Gerente"],
    [6, "Vannesa", "Asistente"]
];

let empleadoEncontrado = emplead0s.find(([id]) => id === 5);
let indiceEmpleado = emplead0s.findIndex(([id]) => id === 5);
let existeGerente = emplead0s.some(([, , cargo]) => cargo === "Gerente");

console.log(`Empleado encontrado: ${empleadoEncontrado ? empleadoEncontrado[1] : "No encontrado"}`);
console.log(`Índice del empleado: ${indiceEmpleado}`);
console.log(`¿Existe algún gerente? ${existeGerente ? "Sí" : "No"}`);