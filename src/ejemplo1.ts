abstract class Vehiculo {

    constructor(public marca: string) { }

    abstract moverse(): void;

    mostrarMarca() {
        console.log(`Vehículo: ${this.marca}`);
    }
}

class Carro extends Vehiculo {
    override moverse(): void {
        console.log(`${this.marca} está conduciendo por la carretera`);
    }
}

class Bicicleta extends Vehiculo {
    override moverse(): void {
        console.log(`${this.marca} se mueve pedaleando`);
    }
}

const vehiculos: Vehiculo[] = [];
vehiculos.push(new Carro("Toyota"));
vehiculos.push(new Bicicleta("BMX"));

vehiculos.forEach(vehiculo => {
    vehiculo.mostrarMarca();
    vehiculo.moverse();
});