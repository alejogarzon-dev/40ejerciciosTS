function cuentaRegresiva(n: number): void {
    // Caso base
    if (n === 0) {
        console.log("¡Despegue!");
        return;
    }

    // Mostrar número actual
    console.log(n);

    // Llamada recursiva
    cuentaRegresiva(n - 1);
}

// Prueba
cuentaRegresiva(10);