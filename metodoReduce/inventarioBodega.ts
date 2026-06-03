type Bodega = "A" | "B" | "C";

type Articulo = {
    nombre: string;
    bodega: Bodega;
    unidades: number;
};

const articulos: Articulo[] = [
    { nombre: "Teclado", bodega: "A", unidades: 15 },
    { nombre: "Mouse", bodega: "B", unidades: 10 },
    { nombre: "Monitor", bodega: "A", unidades: 8 },
    { nombre: "Audífonos", bodega: "C", unidades: 12 },
    { nombre: "Cámara Web", bodega: "B", unidades: 7 },
    { nombre: "Micrófono", bodega: "C", unidades: 5 }
];

const totalPorBodega = articulos.reduce<Record<Bodega, number>>(
    (acumulador, articulo) => {
        acumulador[articulo.bodega] += articulo.unidades;
        return acumulador;
    },
    { A: 0, B: 0, C: 0 }
);

console.log("Total de unidades por bodega:");
console.log(totalPorBodega);