// ===============================
// CLASE CUENTA
// ===============================

class Cuenta {

    // Atributos privados
    private _saldo: number;
    private _titular: string;

    // Constructor
    constructor(titular: string) {
        this._titular = titular;
        this._saldo = 0;
    }

    // Getter para consultar el saldo
    get saldo(): number {
        return this._saldo;
    }

    // Getter para consultar el titular
    get titular(): string {
        return this._titular;
    }

    // Setter para modificar el titular
    set titular(nuevoTitular: string) {

        if (nuevoTitular.trim() === "") {
            console.log("❌ El titular no puede estar vacío.");
            return;
        }

        this._titular = nuevoTitular;
    }

    // Método para depositar dinero
    depositar(monto: number): void {

        if (monto <= 0) {
            console.log("❌ El monto debe ser mayor que cero.");
            return;
        }

        this._saldo += monto;

        console.log(
            `✅ Depósito realizado por $${monto}`
        );
    }
}

// ===============================
// PRUEBAS
// ===============================

const cuenta2 = new Cuenta("Alejandro Garzón");

// Mostrar datos iniciales
console.log("Titular:", cuenta2.titular);
console.log("Saldo:", cuenta2.saldo);

console.log("------------------");

// Depósitos válidos
cuenta2.depositar(100000);
cuenta2.depositar(50000);

console.log("Saldo actual:", cuenta2.saldo);

console.log("------------------");

// Depósitos inválidos
cuenta.depositar(0);
cuenta.depositar(-20000);

console.log("------------------");

// Cambio válido de titular
cuenta.titular = "Alejandro G.";

console.log("Nuevo titular:", cuenta.titular);

console.log("------------------");

// Cambio inválido de titular
cuenta.titular = "";

console.log("Titular final:", cuenta.titular);