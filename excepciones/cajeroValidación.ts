// ===============================
// FUNCIÓN RETIRAR
// ===============================

function retirar(saldo: number, monto: number): number {

    // Validar monto negativo
    if (monto < 0) {
        throw new Error("El monto no puede ser negativo.");
    }

    // Validar saldo insuficiente
    if (monto > saldo) {
        throw new Error("Saldo insuficiente.");
    }

    // Retornar nuevo saldo
    return saldo - monto;
}

// ===============================
// PRUEBAS
// ===============================

let saldo = 100000;

// Retiro válido
try {

    saldo = retirar(saldo, 30000);

    console.log("✅ Retiro exitoso.");
    console.log("Nuevo saldo:", saldo);

} catch (error) {

    console.log("❌ Error:", (error as Error).message);

}

console.log("------------------");

// Retiro con monto negativo
try {

    saldo = retirar(saldo, -5000);

    console.log("Nuevo saldo:", saldo);

} catch (error) {

    console.log("❌ Error:", (error as Error).message);

}

console.log("------------------");

// Retiro mayor al saldo
try {

    saldo = retirar(saldo, 200000);

    console.log("Nuevo saldo:", saldo);

} catch (error) {

    console.log("❌ Error:", (error as Error).message);

}