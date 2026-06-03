/*
Crea una clase CuentaBancaria con titular, saldo y numero. El constructor recibe 
titular y numero, el saldo inicia en 0. Métodos: depositar(monto), retirar(monto) y 
consultarSaldo(). Crea una cuenta, haz dos depósitos y un retiro, muestra el saldo 
final. 
*/

class CuentaBancaria {
    titular: string;
    saldo: number;
    numero: string;

    constructor(titular: string, numero: string) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = 0;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito de ${monto} realizado. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("El monto a depositar debe ser positivo.");
        }
    }

    retirar(monto: number): void {  
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro de ${monto} realizado. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("El monto a retirar debe ser positivo y no puede exceder el saldo actual.");
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

let cuenta = new CuentaBancaria("Juan Pérez", "123456789");
cuenta.depositar(1000);
cuenta.depositar(500);
cuenta.retirar(300);
console.log(`Saldo final: ${cuenta.consultarSaldo()}`);