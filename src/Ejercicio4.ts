import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Tarjeta {
    constructor(protected saldo: number) {}

    abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
    constructor() {
        super(300);
    }

    iniciar(): void {
        console.log(`\nSaldo inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }

    private procesarPuntos(pos: number, monto: number): void {
        let puntos: number;

        switch (pos) {
            case 1:
                puntos = monto * 3;
                console.log(`Has ganado ${puntos}`);
                break;
            case 2:
                puntos = monto * 5;
                console.log(`Has ganado ${puntos}`);
                break;
            case 3:
                console.log(`No hay puntos para este POS`);
                break;
            default:
                console.log(`POS inválido`);
                break;
        }
    }

    private procesarTransaccion(): void {
        if (this.saldo <= 0) {
            console.log(`\nSaldo agotado. Cuenta cerrada`);
            rl.close();
            return;
        }

        rl.question(
            "Ingrese su POS \n Digite 1 para BAC\n Digite 2 para Banco Agrícola\n Digite 3 para otro\n",
            (posInput) => {
                const pos = parseInt(posInput);

                if (isNaN(pos) || pos < 1 || pos > 3) {
                    console.log("Ingrese un POS válido");
                    return this.procesarTransaccion();
                }

                rl.question(
                    "\nDigite el monto de la transacción (0 para salir): ",
                    (dato) => {
                        const monto = parseFloat(dato);

                        if (isNaN(monto) || monto < 0) {
                            console.log("Ingrese un monto válido");
                            return this.procesarTransaccion();
                        }

                        if (monto === 0) {
                            console.log("Operación finalizada por el cliente.");
                            rl.close();
                            return;
                        }

                        if (monto > this.saldo) {
                            console.log("Fondos insuficientes.");
                        } else {
                            this.saldo -= monto;
                            console.log(`Transacción realizada. Saldo restante $${this.saldo}`);
                            this.procesarPuntos(pos, monto);
                        }

                        this.procesarTransaccion();
                    }
                );
            }
        );
    }
}

const tarjeta = new TarjetaCredito();
tarjeta.iniciar();