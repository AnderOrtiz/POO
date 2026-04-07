import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Persona {
    protected sueldo: number = 0;

    abstract evaluarCredito(): void;
}

class Cliente extends Persona {
    pedirSueldo(): void {
        rl.question('\n Ingrese su nombre', (dato) => {
            this.sueldo = parseFloat(dato);
            this.evaluarCredito();
            rl.close()
        })
    }

    evaluarCredito(): void {
        console.log(`\nSueldo ingresado: $${this.sueldo}`);

        if (this.sueldo > 1300) {
            console.log("Tarjeta aprobada por $2500");

        } else if (this.sueldo > 800) {
            console.log("Tarjeta aprobada por $1100");

        } else if (this.sueldo > 500) {
            console.log("Tarjeta aprobada por $700");
        } else {
            console.log("No aplica para tarjeta de credito");
        }
    }
}

const cliente1 = new Cliente();
cliente1.pedirSueldo();