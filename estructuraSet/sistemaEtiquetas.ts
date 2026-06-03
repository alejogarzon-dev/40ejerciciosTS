/*
Crea un Set para las etiquetas de un artículo de blog. Intenta agregar 'tecnología', 
'IA', 'tecnología', 'desarrollo', 'IA'. Imprime el tamaño y los elementos. Verifica si 
tiene la etiqueta 'IA'. Elimina 'desarrollo' y muestra el Set final. 
*/

let etiquetas: Set<string> = new Set();

etiquetas.add('tecnología');
etiquetas.add('IA');
etiquetas.add('tecnología');

console.log(`Tamaño del Set: ${etiquetas.size}`);
console.log('Elementos del Set:', Array.from(etiquetas));

if (etiquetas.has('IA')) {
    console.log("El Set contiene la etiqueta 'IA'");
}

etiquetas.delete('desarrollo');
console.log('Set final:', Array.from(etiquetas));