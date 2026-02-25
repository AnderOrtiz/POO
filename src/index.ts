/**
Crear una clase Estudiante que contenga los siguientes atributos:

nombre (string)
carnet (string)
notaFinal (number)
La clase debe incluir:

Un constructor para inicializar los atributos.
Un método mostrarInformacion() que imprima los datos del estudiante.
Posteriormente, instanciar al menos dos objetos y ejecutar el método en cada uno para observar cómo funcionan de manera independiente.
 */

// class Estudiante {
//     private nombre: string
//     private readonly carnet: string;
//     notaFinal: number = 0;
//     constructor(nombre: string, carnet: string, notaFinal: number) {
//         this.nombre = nombre;
//         this.carnet = carnet;
//         this.notaFinal = notaFinal;
//     }

//     mostrarInformacion() {
//         console.log(`Estudiante ${this.nombre}`);
//         console.log(`Carnet ${this.carnet}`);
//         console.log(`Nota Final ${this.notaFinal}`);

//     }

//     actualizarNota(nota: number) {
//         if (nota <= 0 && nota >= 10) {
//             console.log('Nota no válida');

//         } else {
//             this.notaFinal = nota;
//             console.log(`La nota se actalizó a ${this.notaFinal}`);
//         }
//     }

// }

// const alumno1 = new Estudiante('Requeno', 'U20200000', 7);
// alumno1.mostrarInformacion();
// alumno1.actualizarNota(4)



/**
Enunciado:

Crear una clase Producto que incluya:

nombre (string)
precio (number)
cantidad (number)
La clase debe tener:

Un constructor que inicialice los atributos.
Un método calcularTotal() que retorne el total (precio × cantidad).
Un método mostrarDetalle() que imprima la información del producto.
Instanciar al menos un objeto y ejecutar sus métodos.
 */

class Producto {
    nombre: string
    precio: number
    cantidad: number

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal() {
        const total = this.precio * this.cantidad;
        console.log(`El total es de $${total}\n`);
    }

    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Cantidad: ${this.cantidad}`);

    }
}

const producto1 = new Producto('Rambo', 12, 2)
producto1.calcularTotal();
producto1.mostrarDetalle();