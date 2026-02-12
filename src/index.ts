class Inventario {
    id: number;
    producto: string;
    codigo: string;
    fecha: string;
    precio: number;

    constructor(id: number, producto: string, codigo: string, fecha: string, precio: number) {
        this.id = id;
        this.codigo = codigo;
        this.producto = producto;
        this.fecha = fecha;
        this.precio = precio;
    }

    Agregar(precio2: number, precio3: number): void {
        console.log(`Producto agregado con precio: $${this.precio}`);
        console.log(`Precios de descuento: $${precio2} $${precio3}`);

    }
}

let producto = new Inventario(1, 'Toallas humedas', 'Psdm32', '2026/02/12', 2.5);
producto.Agregar(2.45, 2.40);