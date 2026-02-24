/**
Desarrollar una aplicación en consola que permita ingresar la nota de un
estudiante y determinar su estado académico.
Usar if / else if para clasificar:
• 9 – 10 = Excelente
• 7 – 8.9 = Bueno
• 6 – 6.9 = Regular
• Menor a 6 = Reprobado
 */


import * as readline from "node:readline";

class EvaluarNota {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void {
        this.pedirNota();
    }

    pedirNota(): void {
        this.rl.question("Ingresar nota ", (respuesta: string) => {
            const nota = Number(respuesta);
            this.clasificarNota(nota);
            this.cerrar()
        })
    }

    clasificarNota(nota: number) {
        if (nota >= 0 && nota < 6) {
            console.log('Reprobado');

        } else if (nota < 7) {
            console.log('Regular');

        } else if (nota < 9) {
            console.log('Bueno');

        } else if (nota <= 10) {
            console.log('Excelente');

        } else {
            console.log('Nota no valida');
        }
    }

    cerrar(): void {
        this.rl.close();
    }
}

const app = new EvaluarNota()
app.iniciar()