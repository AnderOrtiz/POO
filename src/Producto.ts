export class Producto {
    constructor(public nombre: string, public precio: number) {
        this.validarProducto(nombre, precio)
    }

    private validarProducto(nombre: string, precio: number): void {
        if (nombre === '') { throw new Error('El nombre no puede estar vacío') }
        if (precio <= 0) { throw new Error('El precio debe ser mayor que 0') }
    }

    calcularPrecioFinal(): number {
        return this.precio
    }
}

export class ProductoDigital extends Producto {
    calcularPrecioFinal(): number {
        return this.precio
    }
}

export class ProductoFisico extends Producto {
    calcularPrecioFinal(): number {
        const recargo = this.precio * 0.1
        return this.precio + recargo
    }
}