// ===============================
// CLASE ABSTRACTA FIGURA
// ===============================

abstract class Figura {

    // Método abstracto
    abstract area(): number;
}

// ===============================
// CLASE CIRCULO
// ===============================

class Circulo extends Figura {

    constructor(private radio: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radio * this.radio;
    }
}

// ===============================
// CLASE RECTANGULO
// ===============================

class Rectangulo extends Figura {

    constructor(
        private base: number,
        private altura: number
    ) {
        super();
    }

    area(): number {
        return this.base * this.altura;
    }
}

// ===============================
// CLASE TRIANGULO
// ===============================

class Triangulo extends Figura {

    constructor(
        private base: number,
        private altura: number
    ) {
        super();
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }
}

// ===============================
// PRUEBAS
// ===============================

// Array de figuras
const figuras: Figura[] = [
    new Circulo(5),
    new Rectangulo(10, 4),
    new Triangulo(8, 6)
];

// Recorrer e imprimir áreas
console.log("ÁREAS DE LAS FIGURAS:\n");

figuras.forEach((figura, indice) => {
    console.log(
        `Figura ${indice + 1}: ${figura.area().toFixed(2)}`
    );
});