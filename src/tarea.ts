class Producto {
    constructor(public nombre: string, public precio: number) { }
}

class Carrito {
    constructor(private productos: Producto[] = [], private total: number = 0) { }

    agregarProducto(producto: Producto, cantidad: number = 1): void {
        for (let index = cantidad; index > 0; index--) {
            this.productos.push(producto)
        }
        console.log(` Ha agergado ${cantidad} veces el producto ${producto.nombre}`);
    }


    eliminarProducto(producto: Producto): void {
        const index = this.productos.findIndex(p => p.nombre === producto.nombre)
        if (index > -1) {
            this.productos.splice(index, 1)
            console.log(`Se ha eliminado una vez el producto ${producto.nombre}`);
            return
        }
        console.log(`Producto ${producto.nombre} no encontrado`);
    }


    calcularTotal(): void {
        this.total = 0;
        this.productos.forEach(element => {
            const total = element.precio;
            this.total += total;
        });
        console.log(`El total es de $${this.total}`);
    }


    mostrarDetalle(): void {
        console.table(this.productos)
    }
}

const anillo = new Producto('anillo', 40);
const camisa = new Producto('camisa', 10);
const zapatos = new Producto('zapatos', 20);

const car = new Carrito()
// car.agregarProducto(anillo, 2)
car.agregarProducto(camisa, 1)
car.agregarProducto(zapatos, 1)
car.mostrarDetalle()
car.calcularTotal()
car.eliminarProducto(anillo)
car.eliminarProducto(camisa)
car.mostrarDetalle()
car.eliminarProducto(anillo)
car.calcularTotal()