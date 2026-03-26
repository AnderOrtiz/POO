class Banco {
    constructor(public cliente: string, protected saldo: number) { }

    mostrar(): void {
        console.log(`Saldo ${this.saldo}`);
    }

    get getSaldo(): number {
        return this.saldo
    }

    set setSaldo(v: number) {
        if (v >= 0) { this.saldo = v; return }

        console.log('El debe ser cero o mayor a cero');

    }

}

const objeto = new Banco("Porfirio", 100);

objeto.cliente = "Juan";
objeto.setSaldo = 1000;
objeto.mostrar();


class movimientos extends Banco {
    constructor(nombre: string, saldo: number, public deposito: number) {
        super(nombre, saldo);
    }

    comision(nuevoMonto: number) {
        let salida = nuevoMonto - 1;
        this.saldo = salida
        console.log(`Te cobre por la transferencia nuevo saldo = $${salida}`);
        return salida;
    }

    procesoDeposito() {
        const nuevoMonto = this.deposito + this.saldo;
        this.saldo = nuevoMonto
        console.log(`nuevo saldo ${nuevoMonto}`);
        this.comision(nuevoMonto)
    }
}

const dep = 25;
const proceso = new movimientos('Porfirio', 100, 500);
proceso.setSaldo = 1000;
proceso.procesoDeposito();
proceso.mostrar();