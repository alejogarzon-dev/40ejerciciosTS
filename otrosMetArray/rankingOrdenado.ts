// Lista de jugadores
const jugadores = [
    { nombre: "DragónRojo", puntaje: 950 },
    { nombre: "ShadowX", puntaje: 1200 },
    { nombre: "PixelMaster", puntaje: 870 },
    { nombre: "NovaGamer", puntaje: 1500 },
    { nombre: "TitanPro", puntaje: 1100 }
];

// Creamos una copia para no modificar el array original
const puesto = [...jugadores];

// Ordenamos de mayor a menor puntaje
puesto.sort((a, b) => b.puntaje - a.puntaje);

// Obtenemos el Top 3
const lugar3 = puesto.slice(0, 3);

console.log("TOP 3 JUGADORES:\n");

// Mostramos el Top 3
lugar3.forEach((jugador, indice) => {
    console.log(
        `🏆 ${indice + 1}. ${jugador.nombre} - ${jugador.puntaje}`
    );
});