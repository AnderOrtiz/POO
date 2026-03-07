/** 
Validaciones:

El año no puede ser mayor al año actual.
Marca y modelo no pueden estar vacíos.
Crear dos clases hijas:

Automovil (atributo: numeroPuertas)
Motocicleta (atributo: cilindrada)
Cada clase debe tener un método mostrarInformacion().

Instanciar al menos un objeto de cada tipo y mostrar sus datos.*/

export class Vehiculo {
    constructor(public marca: string, public modelo: string, public anio: string) {
        this.validarVehiculo(modelo, marca, anio);
    }

    private validarVehiculo(modelo: string, marca: string, anio: string,): void {
        const anioActual = new Date().getFullYear();
        const anioNumero = Number(anio);

        if (anioNumero > anioActual) {
            throw new Error("El año no puede ser mayor al año actual");
        }
        if (modelo === '' || marca === '') {
            throw new Error("Marca o modelo no pueden estar vacíos");
        }

    }

    mostrarInformacion(): void {
        console.log(`Vehiculo ${this.modelo}, ${this.marca} año ${this.anio}`);

    }
}

export class Automovil extends Vehiculo {
    constructor(public numeroPuertas: number, modelo: string, marca: string, anio: string) {
        super(marca, modelo, anio)
        this.validarAutomovil(numeroPuertas)
    }

    validarAutomovil(numeroPuertas: number): void {
        if (numeroPuertas < 1) { throw new Error('EL número de puertas tiene que ser mayor a 1') }
    }

    mostrarInformacion(): void {
        console.log(`Automovil ${this.modelo}, ${this.marca} año ${this.anio} con ${this.numeroPuertas} puertas`);
    }
}

export class Motocicleta extends Vehiculo {
    constructor(public cilindrada: number, modelo: string, marca: string, anio: string) {
        super(marca, modelo, anio)
        this.validarMotocicleta(cilindrada)
    }

    validarMotocicleta(cilindrada: number): void {
        if (cilindrada < 1) { throw new Error('EL cilidraje tiene que ser mayor a 1') }
    }

    mostrarInformacion(): void {
        console.log(`Motocicleta ${this.modelo}, ${this.marca} año ${this.anio} con un cilindraje de ${this.cilindrada}cc`);
    }
}