import { Descuento } from "./Descuento.js";
import { Producto } from "./Producto.js";

export class Carrito {
    constructor(
        public productos: Producto[] = [],
        public descuentos: Descuento[] = []
    ) { }

    agregarProducto(producto: Producto): void {
        this.productos.push(producto)
        //console.log(`Se agregó el producto ${producto.nombre}($${producto.precio} c/u) ${producto.cantidad} veces`);
    }


    agregarDescuento(descuento: Descuento): void {
        this.descuentos.push(descuento);
        //console.log(`Se agregó el descuento del ${descuento.getPorcentaje()}%`);
    }


    calcularTotal(): void {
        let total = 0;

        this.productos.forEach(producto => {
            total += producto.cantidad * producto.precio;
        });

        console.log(`Subtotal: $${total}`);

        this.descuentos.forEach(descuento => {
            total = descuento.aplicar(total);
        });
        console.table(this.descuentos)


        console.table(this.productos)
        console.log(`Total con descuentos: $${total.toFixed(2)}`);
    }
}