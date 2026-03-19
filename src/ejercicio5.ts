/**
Crear una clase abstracta Pago con el método procesarPago(). El usuario debe poder
seleccionar entre pago en efectivo, pago con tarjeta o transferencia bancaria. Cada clase
debe implementar su proceso de pago.
 */

abstract class Pago {
    constructor(public total: number) { };
    abstract procesarPago(): void;
}

class Efectivo extends Pago {
    constructor(total: number, public efectivo: number) {
        super(total)
        this.procesarPago()
    }
    procesarPago(): void {
        const exec = this.total - this.efectivo;
        console.log(`El cambio es de $${exec}`);
    }
}

class Tarjeta extends Pago {
    constructor(total: number, private saldo: number) {
        super(total)
        this.procesarPago()
    }
    procesarPago(): void {
        if (this.saldo >= this.total) {
            const exec = this.saldo - this.total
            console.log(`Su nuevo saldo es de $${exec}`);
        } else {
            console.log('Declinada');
        }
    }
}

class Transferencia extends Pago {
    constructor(total: number, private transferencia: number) {
        super(total)
        this.procesarPago();
    }

    procesarPago(): void {
        if (this.total === this.transferencia) {
            console.log(`Pago realizado exitosamente`);
        } else {
            console.log(`Hubo inconvenientes en su transacción`);
        }
    }
}

const efectivo = new Efectivo(300, 200);
const tarjeta = new Tarjeta(200, 300);
const transferencia = new Transferencia(200, 200);