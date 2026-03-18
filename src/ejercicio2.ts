abstract class Vehiculo {
    constructor(public tipo: string) {
    }

    abstract mover(): void;
}

class Carro extends Vehiculo {
    mover(): void {
        console.log("El carro avanza a 40km/h");
    }
}

class Moto extends Vehiculo {
    mover(): void {
        console.log("La moto se desplaza a 20km/h");
    }
}

const carrito = new Carro('honda')
carrito.mover()