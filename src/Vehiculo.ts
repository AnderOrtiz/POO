/**
3. Crear una clase Vehiculo con los atributos marca, modelo y año. 
Implementar un método que muestre la información completa del vehículo.
 */

class Vehiculo {
    constructor(public marca: string, public modelo: string, public year: number) {
        this.marca = marca
        this.modelo = modelo
        this.year = year
    }

    mostrarInfo(): void {
        console.log(`Carro ${this.modelo}, marca ${this.marca}, del año ${this.year}`);
    }
}

const coyote = new Vehiculo('ACME', 'Jim Dandy', 1948)
coyote.mostrarInfo();