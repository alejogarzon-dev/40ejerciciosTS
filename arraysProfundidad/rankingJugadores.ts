// Puntajes de los jugadores
const puntajes: number[] = [850, 1200, 980, 1500, 730, 1100, 1350, 890];

console.log("Puntajes originales:", puntajes);

// Creamos una copia del array para no modificar el original
const ranking: number[] = [...puntajes];

// Ordenamos de mayor a menor
ranking.sort((a, b) => b - a);

console.log("Ranking ordenado:", ranking);

// Obtenemos los 3 mejores jugadores
const top3: number[] = ranking.slice(0, 3);

console.log("Top 3 jugadores:", top3);

// Calculamos la suma de los 3 mejores
const sumaTop3: number = top3.reduce((acumulador, puntaje) => acumulador + puntaje, 0);

console.log("Suma del Top 3:", sumaTop3);

// Calculamos el promedio
const promedioTop3: number = sumaTop3 / top3.length;

console.log("Promedio del Top 3:", promedioTop3.toFixed(2));