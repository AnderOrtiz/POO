export abstract class Descuento {
    constructor() { }
    abstract aplicar(monto: number): number
    abstract getPorcentaje(): number;

}

export class Descuento10 extends Descuento {
    private descuento = 0.10;

    constructor() {
        super()
    }

    aplicar(monto: number): number {
        const precioFinal = monto * (1 - this.descuento);
        return precioFinal
    }

    getPorcentaje(): number {
        return this.descuento * 100;
    }
}

export class Descuento30 extends Descuento {
    private descuento = 0.30;

    constructor() {
        super()
    }

    aplicar(monto: number): number {
        const precioFinal = monto * (1 - this.descuento);
        return precioFinal
    }

    getPorcentaje(): number {
        return this.descuento * 100;
    }
}

export class Descuento50 extends Descuento {
    private descuento = 0.50;

    constructor() {
        super()
    }

    getPorcentaje(): number {
        return this.descuento * 100;
    }

    aplicar(monto: number): number {
        const precioFinal = monto * (1 - this.descuento);
        return precioFinal
    }
}