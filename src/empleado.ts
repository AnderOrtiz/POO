type generoEmpleado = 'M' | 'F';

export class Empleado {
    constructor(public nombre: string,
        public genero: generoEmpleado,
        public edad: number,
        public numeroEmpleado: number) {
    }

    trabajar() {
        console.log('El empleado trabaja');
    }

    private ValidarDatos(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number) {
        if (nombre.trim().length < 3) throw new Error('El nombre tiene que tener al enos 3 caractere')
        if (genero !== 'F' && genero !== 'M') throw new Error('EL genero dee ser M o F')
        if (edad < 10) throw new Error('El empleado debe ser mayor de edad')
        if (numeroEmpleado < 10000000) throw new Error('El numero de empleado debe ser mayor a 10000000')
    }
}

export class EmpleadoTiempoCompleto extends Empleado {
    salarioBase: number;

    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, salarioBase: number) {
        super(nombre, genero, edad, numeroEmpleado);
        this.validarSalarioBase(salarioBase);
        this.salarioBase = salarioBase;
    }

    private validarSalarioBase(salarioBase: number): void {
        if (salarioBase < 0) {
            throw new Error("El salario base no puede ser negativo.");
        }
    }

    calcularSalario(): number {
        return this.salarioBase;
    }
}

export class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    tarifaPorHora: number;

    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, horasTrabajadas: number, tarifaPorHora: number) {
        super(nombre, genero, edad, numeroEmpleado);
        this.validarHorasTrabajadas(horasTrabajadas);
        this.validarTarifaPorHora(tarifaPorHora);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    private validarHorasTrabajadas(horasTrabajadas: number): void {
        if (horasTrabajadas < 0) {
            throw new Error("Las horas trabajadas no pueden ser negativas.");
        }
    }

    private validarTarifaPorHora(tarifaPorHora: number): void {
        if (tarifaPorHora <= 0) {
            throw new Error("La tarifa por hora debe ser mayor que 0.");
        }
    }

    calcularSalario(): number {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}