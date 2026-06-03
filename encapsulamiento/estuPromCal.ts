/*
Crea una clase Estudiante con _notas privadas (array). Getter notas (devuelve 
copia). Setter notas (valida que todas estén entre 0 y 5). Getter promedio 
‹ / ›  Tutorial TypeScript Paso a Paso · Guía del Estudiante 
(calculado). Getter estado (devuelve APROBADO o REPROBADO según 
promedio)
*/

class Estudiante {
    private _notas: number[];

    constructor(notas: number[]) {
        this._notas = [];
        this.notas = notas; // Usamos el setter para validar las notas al crear el estudiante
    }

    get notas(): number[] {
        return [...this._notas]; // Devolvemos una copia del array de notas
    }

    set notas(notas: number[]) {
        if (notas.every(nota => nota >= 0 && nota <= 5)) {
            this._notas = notas;
        } else {
            console.error("Todas las notas deben estar entre 0 y 5.");
        }
    }

    get promedio(): number {
        if (this._notas.length === 0) return 0;
        const suma = this._notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / this._notas.length;
    }

    get estado(): string {
        return this.promedio >= 3 ? "APROBADO" : "REPROBADO";
    }
}

// Ejemplo de uso
let estudiante1 = new Estudiante([4.5, 3.8, 4.2]);
console.log("Notas:", estudiante1.notas);
console.log("Promedio:", estudiante1.promedio.toFixed(2));
console.log("Estado:", estudiante1.estado);