abstract class Operacion {
    constructor(protected cantidad: number) { };
    abstract ejecutar(valor: number): number;
}

class Sumar extends Operacion {
    constructor(cantidad: number) {
        super(cantidad);
    }

    ejecutar(valor: number): number {
        const resultado = valor + this.cantidad;
        console.log(`Sumar ${this.cantidad}: ${valor} -> ${resultado}`);
        return resultado;
    }
}

class Multiplicar extends Operacion {
    constructor(cantidad: number) {
        super(cantidad);
    }

    ejecutar(valor: number): number {
        const resultado = valor * this.cantidad;
        console.log(`Multiplicar por ${this.cantidad}: ${valor} -> ${resultado}`);
        return resultado;
    }
}

class Restar extends Operacion {

    constructor(cantidad: number) {
        super(cantidad);
    }

    ejecutar(valor: number): number {
        const resultado = valor - this.cantidad;
        console.log(`Restar ${this.cantidad}: ${valor} -> ${resultado}`);
        return resultado;
    }
}

class Procesador {
    private operaciones: Operacion[] = [];

    agregarOperacion(op: Operacion): void {
        this.operaciones.push(op);
    }

    ejecutar(valorInicial: number): number {
        return this.operaciones.reduce((valorActual, operacion) => {
            return operacion.ejecutar(valorActual);
        }, valorInicial);
    }
}

const op1 = new Sumar(10);
const op2 = new Multiplicar(2);
const op3 = new Restar(5);

const procesador = new Procesador();
procesador.agregarOperacion(op1);
procesador.agregarOperacion(op2);
procesador.agregarOperacion(op3);

const valorInicial = 5;
console.log(`Valor inicial: ${valorInicial}`);

const resultadoFinal = procesador.ejecutar(valorInicial);

console.log(`Resultado final: ${resultadoFinal}`);