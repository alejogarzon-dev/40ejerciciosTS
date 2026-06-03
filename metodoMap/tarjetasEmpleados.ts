// Lista de empleados
const empleados = [
    { nombre: "Valentina", cargo: "Diseñadora", salario: 2800000 },
    { nombre: "Santiago", cargo: "Programador", salario: 3500000 },
    { nombre: "Camila", cargo: "Analista", salario: 3000000 },
    { nombre: "Mateo", cargo: "Soporte Técnico", salario: 2500000 }
];

// Creamos un nuevo array de tarjetas usando map()
const tarjetas = empleados.map(empleado =>
    ` ${empleado.nombre} - ${empleado.cargo} - $${empleado.salario}`
);

// Mostramos cada tarjeta
console.log("Tarjetas de empleados:\n");

for (const tarjeta of tarjetas) {
    console.log(tarjeta);
}