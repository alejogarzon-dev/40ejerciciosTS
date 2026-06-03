/*
Contador de palabras 
Dada una frase, crea un Map<string, number> que cuente cuántas veces aparece 
cada palabra. Recorre la frase, separa por espacios y va sumando en el Map. Al 
final, muestra el Map completo con cada palabra y su frecuencia.
*/

let frase: string = "Hola mundo hola TypeScript mundo";

let contadorPalabras: Map<string, number> = new Map();

frase.split(" ").forEach(palabra => {
    let palabraMinuscula = palabra.toLowerCase();
    if (contadorPalabras.has(palabraMinuscula)) {
        contadorPalabras.set(palabraMinuscula, contadorPalabras.get(palabraMinuscula)! + 1);
    }
    else {
        contadorPalabras.set(palabraMinuscula, 1);
    }
});

contadorPalabras.forEach((frecuencia, palabra) => {
    console.log(`La palabra "${palabra}" aparece ${frecuencia} veces.`);
});

