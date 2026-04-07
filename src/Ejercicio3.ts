import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Tarjeta {
    constructor(protected saldo: number) { }

    abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
    constructor() {
        super(300)
    }

    iniciar(): void {
        console.log(`\nSaldo inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }

    private procesarTransaccion(): void {
        if (this.saldo <= 0) {
            console.log(`\nSaldo agotado. Cuenta. cerrada`);
            rl.close();
            return;
        }

        rl.question("\nDigite el monto de la transacción (0 para salir): ", (dato) => {
            const monto = parseFloat(dato);
            if (isNaN(monto) || monto < 0) {
                console.log("Ingrese un nuevo monto válido");
                return this.procesarTransaccion();
            }

            if (monto === 0) {
                console.log("operación finalizado por el cliente. ");
                rl.close();
                return;
            }
            if (monto > this.saldo) {
                console.log("Fondos insuficientes.")
            } else {
                this.saldo -= monto;
                console.log(`Transacción realizada. Saldo restante $${this.saldo}`);

            }
            this.procesarTransaccion();
        })

    }
}

const tarjeta = new TarjetaCredito();
tarjeta.iniciar();