/**
2. Crear una clase CuentaBancaria con los atributos titular y saldo. 
Implementar métodos para depositar, retirar y mostrar el saldo actual.
 */

class CuentaBancaria {
    constructor(private titular: string, private saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(dinero: number): void {
        this.saldo += dinero;
        console.log(`Hi! ${this.titular} Se le notifica que $${dinero} fueron agregado exitosamente`);
    }

    retirar(dinero: number): void {
        this.saldo -= dinero;
        console.log(`Hi! ${this.titular} Se le notifica que $${dinero} fueron retirado exitosamente`);
    }

    mostrar(): void {
        console.log(`Hi! ${this.titular} tu saldo actual es de $${this.saldo}`);
    }
}

const ander = new CuentaBancaria('Anderson', 100)
ander.mostrar()
ander.depositar(50);
ander.mostrar()
ander.retirar(75);
ander.mostrar()