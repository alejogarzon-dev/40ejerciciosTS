/*
Crea una interface MedioPago con propiedad usuario y método pagar(monto: 
number). Crea tres clases que la implementen: PagoTarjeta, PagoEfectivo, 
PagoTransferencia. Cada una imprime un mensaje distinto. Crea un array de 
MedioPago y procesa pagos. 
*/

interface MedioPago {
    usuario: string;
    pagar(monto: number): void;
}   

class PagoTarjeta implements MedioPago {
    usuario: string;

    constructor(usuario: string) {
        this.usuario = usuario;
    }

    pagar(monto: number): void {
        console.log(`${this.usuario} ha pagado ${monto} con tarjeta.`);
    }
}

class PagoEfectivo implements MedioPago {
    usuario: string;

    constructor(usuario: string) {
        this.usuario = usuario;
    }

    pagar(monto: number): void {
        console.log(`${this.usuario} ha pagado ${monto} en efectivo.`);
    }
}

class PagoTransferencia implements MedioPago {
    usuario: string;

    constructor(usuario: string) {
        this.usuario = usuario;
    }

    pagar(monto: number): void {
        console.log(`${this.usuario} ha pagado ${monto} por transferencia.`);
    }
}

let mediosPago: MedioPago[] = [
    new PagoTarjeta("Ana"),
    new PagoEfectivo("Luis"),
    new PagoTransferencia("María")
];

mediosPago.forEach(medio => {
    medio.pagar(100);
}
);