export class Figura {
    calcularArea(): number {
        return 0
    }
}

export class Rectangulo extends Figura {
    constructor(public base: number, public altura: number) {
        super()
        this.validarRectangulo(base, altura)
    }

    validarRectangulo(base: number, altura: number): void {
        if (base <= 0 || altura <= 0) { throw new Error('Las dimensiones deben ser mayores que 0') }
    }

    calcularArea(): number {
        return this.base * this.altura
    }
}

export class Circulo extends Figura {
    constructor(public radio: number) {
        super()
        this.validarCirculo(radio)
    }

    validarCirculo(radio: number): void {
        if (radio <= 0) { throw new Error('El radio debe ser mayor que 0') }
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio
    }
}