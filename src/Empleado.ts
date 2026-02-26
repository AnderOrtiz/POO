/**
1. Crear una clase Empleado con los atributos nombre, salarioBase y horasTrabajadas.
Implementar un método que calcule el salario total considerando que cada hora
trabajada se paga a una tarifa fija.
 */

class Empleado {
    constructor(public salarioBase: number, public horasTrabajadas: number) {
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;
    };

    calcularSalario(): void {
        const salario = this.salarioBase * this.horasTrabajadas;
        console.log(`Tu salario es de: ${salario}`);
    }
}

const empleado1 = new Empleado(2, 3);
empleado1.calcularSalario();