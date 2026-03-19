abstract class Transporte {
    constructor() { }
    abstract calcularCosto(distancia: number): void
}

class Taxi extends Transporte {
    constructor() {
        super()
    }

    calcularCosto(distancia: number): void {
        let costo = distancia * 2
        costo.toFixed(2)
        return console.log(`Su total a pagar es de: ${costo}`)
    }
}

class Autobus extends Transporte {
    constructor() {
        super()
    }

    calcularCosto(distancia: number): void {
        let costo = distancia * 0.15
        costo.toFixed(2)
        return console.log(`Su total a pagar es de: ${costo}`)
    }
}

class Uber extends Transporte {
    constructor() {
        super()
    }

    calcularCosto(distancia: number): void {
        let costo = distancia * 2
        costo.toFixed(2)
        return console.log(`Su total a pagar es de: ${costo}`)
    }
}

const taxi = new Taxi();
taxi.calcularCosto(23);

const autobus = new Autobus();
autobus.calcularCosto(23);

const uber = new Uber();
uber.calcularCosto(23);