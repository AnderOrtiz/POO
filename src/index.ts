abstract class Suscripcion {
    private precioBase: number;
    constructor() {
        this.precioBase = 12
    }

    abstract calcularCosto(): number;
    abstract mostrarBeneficios(): string[];

    protected set setPrecioBase(newPrecioBase: number) {
        this.precioBase = newPrecioBase;
    }

    protected get getPrecioBase() {
        return this.precioBase
    }
}

class SuscripcionBasica extends Suscripcion {
    constructor(public limiteUso: number) {
        super()
    }

    calcularCosto(): number {
        return this.getPrecioBase;
    }

    mostrarBeneficios(): string[] {
        return [
            "Acceso a compra de entradas NBA",
            `Máximo de entradas: ${this.limiteUso}`,
            "Acceso a juegos seleccionados"
        ];
    }
}

class SuscripcionPremium extends Suscripcion {
    constructor(public beneficiosExtra: number) {
        super();
    }

    calcularCosto(): number {
        const newcosto = this.getPrecioBase + (this.getPrecioBase * this.beneficiosExtra / 100)
        this.setPrecioBase = newcosto;
        // console.log(`El precio base premium es de $${this.getPrecioBase}`);

        return this.getPrecioBase
    }

    mostrarBeneficios(): string[] {
        return [
            "Acceso total a entradas NBA",
            `Descuento por entrada: ${this.beneficiosExtra}%`,
            "Acceso prioritario a playoffs",
            "Eventos exclusivos"
        ];
    }
}

class Usuario {
    constructor(public nombre: string, private suscripcion: string = 'inactivo') { }

    set asignarSuscripcion(newSuscripcion: 'base' | 'premium' | 'inactivo') {
        this.suscripcion = newSuscripcion;
    };

    mostrarEstado(): void {
        this.suscripcion === 'inactivo'
            ? console.log('El usuario no tiene suscripción')
            : console.log(`${this.nombre} tienes una suscripción ${this.suscripcion}`);
    };
}

const basica = new SuscripcionBasica(10);
console.log("Costo básica:", basica.calcularCosto());
console.log("Beneficios básica:", basica.mostrarBeneficios());

const premium = new SuscripcionPremium(20);
console.log("Costo premium:", premium.calcularCosto());
console.log("Beneficios premium:", premium.mostrarBeneficios());

const ander = new Usuario('Anderson')
ander.mostrarEstado()
ander.asignarSuscripcion = 'premium'
ander.mostrarEstado()
