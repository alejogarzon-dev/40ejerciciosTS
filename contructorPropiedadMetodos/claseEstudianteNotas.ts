class Estudiant3 {

    // Propiedades
    readonly codigo: string;
    public nombre: string;
    private notas: number[];

    // Constructor
    constructor(codigo: string, nombre: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.notas = [];
    }

    // Agregar una nota
    agregarNota(nota: number): void {
        this.notas.push(nota);
    }

    // Calcular el promedio
    promedio(): number {

        const suma = this.notas.reduce(
            (acumulador, nota) => acumulador + nota,
            0
        );

        return suma / this.notas.length;
    }

    // Verificar si aprobó
    aprobado(): boolean {
        return this.promedio() >= 3.0;
    }
}

// ===============================
// PRUEBA DE LA CLASE
// ===============================

const estudiant3 = new Estudiant3(
    "2026001",
    "Alejandro Garzón"
);

// Agregar cinco notas
estudiant3.agregarNota(4.0);
estudiant3.agregarNota(3.5);
estudiant3.agregarNota(4.2);
estudiant3.agregarNota(2.8);
estudiant3.agregarNota(3.9);

// Mostrar información
console.log("Código:", estudiant3.codigo);
console.log("Nombre:", estudiant3.nombre);
console.log("Promedio:", estudiant3.promedio().toFixed(2));
console.log("¿Aprobó?:", estudiant3.aprobado());