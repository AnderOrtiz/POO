import { Carrito } from "./classes/Carrito.js";
import { Descuento10, Descuento30, Descuento50 } from "./classes/Descuento.js";
import { Producto } from "./classes/Producto.js";


const descuento10 = new Descuento10
const descuento30 = new Descuento30
const descuento50 = new Descuento50


const batman = new Producto('Batman', 10, 2)
const superman = new Producto('Superman', 30, 5)
const raven = new Producto('Raven', 50, 10)

const carrito = new Carrito()
carrito.agregarProducto(batman)
carrito.agregarDescuento(descuento10)
carrito.agregarProducto(superman)
carrito.agregarDescuento(descuento30)
carrito.agregarProducto(raven)
carrito.agregarDescuento(descuento50)
carrito.calcularTotal()