/**
Codifique un Ejercicio donde se evalué el precio a pagar por un producto, los
atributos pueden ser a su criterio, tomar en cuenta que se debe de manejar un
parámetro descuento que seria un porcentaje, el parámetro se debe de enviar en la
función no debe de inicializarse con el objeto. El método que cree debe de mostrar el
siguiente mensaje:
****Cantidad de producto: cantidad*****
****Precio: $Precio******
****Descuento: $descuento****
****Iva: $iva****
****Total a pagar******
 */

class Product {
    public name: string
    public precio: number
    private IVA: number

    constructor(name: string, precio: number) {
        this.name = name;
        this.precio = precio;
        this.IVA = 0.13
    }

    comprar(cantidad: number, descuento: number): void {
        this.precio *= cantidad
        descuento = descuento * this.precio
        const IVA = this.IVA * this.precio
        const total: number = this.precio - IVA - descuento
        console.log(`
            ****Cantidad de producto: ${cantidad}*****
            ****Precio: $${this.precio.toFixed(2)} ******
            ****Descuento: $${descuento.toFixed(2)}****
            ****Iva: $${IVA.toFixed(2)}****
            ****Total a pagar: $${total.toFixed(2)}******
            `);

    }
}

const mazinger = new Product('Mazinger', 15);
mazinger.comprar(2, 0.10)