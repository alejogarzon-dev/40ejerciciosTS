/*
Tienes un array con las notas de 10 estudiantes. Usa reduce para calcular la suma 
total. Divide por la longitud para obtener el promedio. Muestra tanto la suma como 
el promedio con dos decimales. 
*/

let n0tas: number[] = [4.5, 3.8, 4.2, 4.0, 3.5, 3.5, 4.8, 4.1, 3.9, 4.3];

let sumaTotal: number = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let promedio: number = sumaTotal / notas.length;

console.log(`Suma total: ${sumaTotal.toFixed(2)}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);