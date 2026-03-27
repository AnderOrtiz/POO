class Producto {
    constructor(
        public nombre: string,
        public precio: number,
        private stock: number,
        private user: { name: string, rol: string }
    ) { }

    aumentarStock(cantidad: number): void {
        if (this.user.rol != 'admin') {
            console.log('No tienes permisos');
            return;
        }

        if (cantidad <= 0) {
            console.log('Cantidad inválida');
            return;
        }

        this.stock += cantidad;
    }

    disminuirStock(cantidad: number): void {
        if (this.user.rol != 'admin') {
            console.log('No tienes permisos');
            return;
        }

        if (cantidad <= 0) {
            console.log('Cantidad inválida');
            return;
        }

        if (cantidad > this.stock) {
            console.log('Stock insuficiente');
            return;
        }

        this.stock -= cantidad;
    }

    mostrarInformacion(): void {
        if (this.user.rol == 'admin') {
            console.log(`${this.nombre}, ${this.precio}, ${this.stock}`);
            return;
        }
        console.log(`${this.nombre}, ${this.precio}`);
    }
}

const admin = { name: 'Carlos', rol: 'admin' };
const cliente = { name: 'Ana', rol: 'cliente' };

const productoadmin = new Producto('Laptop', 1000, 0, admin);

productoadmin.aumentarStock(5);
productoadmin.disminuirStock(3);
productoadmin.mostrarInformacion();

const productocliente = new Producto('Laptop', 1000, 0, cliente);

productocliente.aumentarStock(5);
productocliente.disminuirStock(3);
productocliente.mostrarInformacion();