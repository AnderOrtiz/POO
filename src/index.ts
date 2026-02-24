import * as readline from "node:readline";

class Programa {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void {
        this.pedirNumero();
    }

    pedirNumero(): void {
        this.rl.question("Ingresar número ", (respuesta: string) => {
            const numero = Number(respuesta);
            this.evaluarNumero(numero);
            this.evaluarParOInpar(numero);
            this.cerrar()

        })
    }

    evaluarNumero(numero: number): void {
        if (numero > 10) {
            console.log('Es mayor que 10');

        } else if (numero === 10) {
            console.log('Es igual que 10');

        } else {
            console.log('Es menor que 10');
        }
    }

    evaluarParOInpar(num: number) {
        if (num % 2 == 0) {
            console.log(`${num} es par`);

        } else {
            console.log(`${num} es impar`);
        }
    }

    cerrar(): void {
        this.rl.close();
    }
}

const app = new Programa();
app.iniciar();