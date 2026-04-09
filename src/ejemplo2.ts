abstract class Empleado {
    constructor(protected nombre: string) { };

    abstract trabajar(): void;

    saludar(): void {
        console.log(`Hello mi nombre es ${this.nombre}`);
    }
}

class Programador extends Empleado {
    constructor(nombre: string) {
        super(nombre)
    }

    override trabajar(): void {
        console.log(`${this.nombre} está programando`);
    }
}

class Disenador extends Empleado {
    constructor(nombre: string) {
        super(nombre)
    }

    override trabajar(): void {
        console.log(`${this.nombre} está deseñando`);
    }
}

const empleados: Empleado[] = [];
empleados.push(new Programador('Lex'));
empleados.push(new Disenador('Brenner'));

empleados.forEach(empleado => {
    empleado.saludar();
    empleado.trabajar();
})