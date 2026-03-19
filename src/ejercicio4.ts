/**
 * Crear una clase abstracta Empleado con el método calcularSalario(). El sistema debe
permitir registrar empleados por horas, empleados fijos y empleados por comisión. Cada
tipo de empleado debe implementar su propio cálculo de salario.
 */

abstract class Empleado {
    constructor(public nombre: string) { }

    abstract calculcarPago(): void;
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre: string, private horas: number, private tarifa: number) {
        super(nombre)
        this.calculcarPago();
    }
    calculcarPago(): void {
        const pago = this.horas * this.tarifa;
        console.log(`Hi ${this.nombre}, su pago es de $${pago}`);
    }
}

class EmpleadoFijo extends Empleado {
    constructor(nombre: string, private salario: number) {
        super(nombre)
        this.calculcarPago();
    }
    calculcarPago(): void {
        console.log(`Hi ${this.nombre}, tu salario es de $${this.salario}`);
    }
}

class EmpleadoPorComision extends Empleado {
    constructor(nombre: string, public venta: number) {
        super(nombre);
        this.calculcarPago();
    }
    calculcarPago(): void {
        let comision;

        if (this.venta > 1000) {
            comision = this.venta * 0.15
            return console.log(`Hi ${this.nombre}, comision total es $${comision}`)
        } else {
            comision = this.venta * 0.05
            return console.log(`Hi ${this.nombre}, comision total es $${comision}`)
        }
    }
}

const porPago = new EmpleadoPorHoras('Ander', 10, 24)
const fijo = new EmpleadoFijo('Ander', 450)
const comision = new EmpleadoPorComision('Ander', 1001)