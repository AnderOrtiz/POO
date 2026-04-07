import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class SistemaColores {
    protected colores: string[] = [];

    abstract pedirColores(): void;
    abstract mezclarColores(): void;
}

class JuegoColores extends SistemaColores {
    private combinaciones: Record<string, string> = {
        "rojo-azul": "morado",
        "azul-amarillo": "verde",
        "rojo-amarillo": "naranja",
        "rojo-verde": "marrón",
        "negro-blanco": "gris"
    }

    pedirColores(): void {
        this.colores = [];
        const pedir = (i: number) => {
            if (i < 2) {
                rl.question(`Ingrese el color ${i + 1}`, (color) => {
                    this.colores.push(color.toLocaleLowerCase());
                    pedir(i + 1);
                });
            } else {
                this.mezclarColores();
                rl.close()
            }
        }
        pedir(0);
    }

    mezclarColores(): void {
        console.log(`\nColores ingresados:${this.colores}`);
        let resultadoFinal = "No existe conbinación"

        for (let color1 = 0; color1 < this.colores.length; color1++) {
            for (let color2 = 0; color2 < this.colores.length; color2++) {
                const clave1 = `${this.colores[color1]} - ${this.colores[color2]}`;
                const clave2 = `${this.colores[color2]} - ${this.colores[color1]}`;

                if (this.combinaciones[clave1]) {
                    resultadoFinal = this.combinaciones[clave1];

                } else if (this.combinaciones[clave2]) {
                    resultadoFinal = this.combinaciones[clave2];

                }
            }

        }
        console.log(`\nResultado de la mezcla: ${resultadoFinal}`);

    }
}

const juego = new JuegoColores();
juego.pedirColores();