class POO {
    condigo: string;
    nombre: string;
    edad: number;
    laboratorio: number;
    parcial: number;

    constructor(_codigo: string, _nombre: string, _edad: number, _laboratorio: number, _parcial: number) {
        this.condigo = _codigo
        this.nombre = _nombre
        this.edad = _edad
        this.laboratorio = _laboratorio
        this.parcial = _parcial
    }

    public mostrarDatos(): void {
        console.log(`El estudiate: ${this.nombre}`);
        console.log(`Código: ${this.condigo}`);
        console.log(`Tiene las siguientes notas - Laboratorio: ${this.laboratorio} Parcial: ${this.parcial}`);
    }

    public mostrarNotas(): void {
        console.log(`Tiene las siguientes notas - Laboratorio: ${this.laboratorio} Parcial: ${this.parcial}`);
    }

}

const estudiate1 = new POO('u20250346', 'Ander', 20, 10, 10)

// estudiate1.mostrarDatos();
estudiate1.mostrarNotas();


class Redes {
    nombre: string;
    laboratorio1: number;
    laboratorio2: number;
    laboratorio3: number;
    parcial1: number;
    parcial2: number;
    parcial3: number;

    constructor(
        _nombre: string,
        _laboratorio1: number,
        _laboratorio2: number,
        _laboratorio3: number,
        _parcial1: number,
        _parcial2: number,
        _parcial3: number
    ) {
        this.nombre = _nombre
        this.laboratorio1 = _laboratorio1
        this.laboratorio2 = _laboratorio2
        this.laboratorio3 = _laboratorio3
        this.parcial1 = _parcial1
        this.parcial2 = _parcial2
        this.parcial3 = _parcial3
    }



    public imprimirDatos(): void {
        const notaLaboratorio = ((this.laboratorio1 + this.laboratorio2 + this.laboratorio3) * 0.60) / 3
        const notaParcial = ((this.parcial1 + this.parcial2 + this.parcial3) * 0.40) / 3
        console.log(`${this.nombre} ${this.laboratorio1} ${this.laboratorio2} ${this.laboratorio3} ${this.parcial1} ${this.parcial2} ${this.parcial3} = ${notaLaboratorio + notaParcial}`);
    }
}

const alumno1 = new Redes('Ander', 10, 8, 10, 10, 10, 10)

alumno1.imprimirDatos()