// ===============================
// ESTADÍSTICAS DE VENTAS
// ===============================

// Array de ventas
const ventas = [
    { id: 1, vendedor: "Valentina", monto: 1200, region: "Norte" },
    { id: 2, vendedor: "Santiago", monto: 850, region: "Sur" },
    { id: 3, vendedor: "Valentina", monto: 1500, region: "Centro" },
    { id: 4, vendedor: "Mateo", monto: 950, region: "Norte" },
    { id: 5, vendedor: "Camila", monto: 1800, region: "Sur" },
    { id: 6, vendedor: "Santiago", monto: 1100, region: "Centro" }
];

// ===============================
// Venta de mayor monto
// ===============================

const ventaMayor = ventas.reduce((mayor, venta) => {
    return venta.monto > mayor.monto ? venta : mayor;
});

console.log("Venta de mayor monto:");
console.log(ventaMayor);

// ===============================
// Total por región
// ===============================

const totalPorRegion = ventas.reduce(
    (acumulador, venta) => {

        if (venta.region === "Norte") {
            acumulador.Norte += venta.monto;
        }

        if (venta.region === "Sur") {
            acumulador.Sur += venta.monto;
        }

        if (venta.region === "Centro") {
            acumulador.Centro += venta.monto;
        }

        return acumulador;
    },
    { Norte: 0, Sur: 0, Centro: 0 }
);

console.log("\nTotal por región:");
console.log(totalPorRegion);

// ===============================
// Vendedores únicos
// ===============================

// Obtener los nombres de los vendedores
const nombres = ventas.map(venta => venta.vendedor);

// Eliminar duplicados
const vendedoresUnicos = [...new Set(nombres)];

console.log("\nVendedores únicos:");
console.log(vendedoresUnicos);