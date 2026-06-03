// Notas finales de los estudiantes
const notas: number[] = [4.5, 2.8, 3.7, 1.9, 5.0, 2.5];

// Recorremos el array con forEach()
notas.forEach((nota, indice) => {

    // Determinamos el estado del estudiante
    let estado: string;

    if (nota >= 3.0) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }

    // Mostramos la información
    console.log(
        `Estudiante ${indice + 1}: Nota ${nota} - ${estado}`
    );
});