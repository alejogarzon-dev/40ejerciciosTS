// ===============================
// INTERFAZ CONDUCIBLE
// ===============================

interface Conducible {
    velocidadMax: number;

    arrancar(): void;
    detener(): void;
}

// ===============================
// CLASE AUTO
// ===============================

class Auto implements Conducible {

    velocidadMax: number = 220;

    arrancar(): void {
        console.log(
            `🚗 Auto arrancado. Velocidad máxima: ${this.velocidadMax} km/h`
        );
    }

    detener(): void {
        console.log("🚗 Auto detenido.");
    }
}

// ===============================
// CLASE MOTO
// ===============================

class Moto implements Conducible {

    velocidadMax: number = 180;

    arrancar(): void {
        console.log(
            `🏍️ Moto arrancada. Velocidad máxima: ${this.velocidadMax} km/h`
        );
    }

    detener(): void {
        console.log("🏍️ Moto detenida.");
    }
}

// ===============================
// CLASE BICICLETA
// ===============================

class Bicicleta implements Conducible {

    velocidadMax: number = 40;

    arrancar(): void {
        console.log(
            `🚲 Bicicleta en movimiento. Velocidad máxima: ${this.velocidadMax} km/h`
        );
    }

    detener(): void {
        console.log("🚲 Bicicleta detenida.");
    }
}

// ===============================
// PRUEBAS
// ===============================

const auto = new Auto();
const moto = new Moto();
const bicicleta = new Bicicleta();

// Simular funcionamiento
auto.arrancar();
auto.detener();

console.log("------------------");

moto.arrancar();
moto.detener();

console.log("------------------");

bicicleta.arrancar();
bicicleta.detener();