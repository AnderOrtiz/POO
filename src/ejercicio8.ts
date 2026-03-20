/**
Ejercicio 8 Sistema de Tienda (Nivel Avanzado)
Crear una clase abstracta Producto con los métodos calcularPrecioFinal() y
mostrarInformacion(). El sistema debe permitir registrar productos electrónicos, ropa y
alimentos. Cada tipo de producto debe aplicar diferentes reglas de impuestos o descuentos
para calcular el precio final.
 */

abstract class Producto {
    constructor(public nombre: string, public precio: number) { }

    abstract calcularPrecioFinal(): void;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    private precioFinal: number = 0;

    constructor(nombre: string, precio: number) {
        super(nombre, precio);
        this.calcularPrecioFinal();
    }

    calcularPrecioFinal(): void {
        this.precioFinal = this.precio * 1.15;
    }

    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre} (Electrónico)`);
        console.log(`Precio final: $${this.precioFinal}`);
    }
}

class Ropa extends Producto {
    private precioFinal: number = 0;

    constructor(nombre: string, precio: number) {
        super(nombre, precio);
        this.calcularPrecioFinal();
    }

    calcularPrecioFinal(): void {
        this.precioFinal = this.precio * 0.9;
    }

    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre} (Ropa)`);
        console.log(`Precio final: $${this.precioFinal}`);
    }
}

class Alimento extends Producto {
    private precioFinal: number = 0;

    constructor(nombre: string, precio: number) {
        super(nombre, precio);
        this.calcularPrecioFinal();
    }

    calcularPrecioFinal(): void {
        this.precioFinal = this.precio * 1.05;
    }

    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre} (Alimento)`);
        console.log(`Precio final: $${this.precioFinal}`);
    }
}

const producto1 = new Electronico("Laptop", 1000);
const producto2 = new Ropa("Camiseta", 50);
const producto3 = new Alimento("Pan", 10);

producto1.mostrarInformacion();
producto2.mostrarInformacion();
producto3.mostrarInformacion();