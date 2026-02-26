class Animal {
    constructor(public nombre: string, public categoria: string, public raza: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }

    mostrar() {
        console.log(`El animal es un ${this.categoria}. Su nombre es ${this.nombre}`);
    }
}

class Encargado extends Animal {
    constructor(nombre: string, categoria: string, raza: string, public dueño: string) {
        super(nombre, categoria, raza);
        this.dueño = dueño;
    }

    mensaje(): void {
        console.log(`EL animalito es un ${this.categoria} `);
        console.log(`Se llama: ${this.nombre} su dueño es: ${this.dueño}`);

    }
}

class Venta extends Encargado {
    constructor(nombre: string, categoria: string, raza: string, dueño: string, public precio: number) {
        super(nombre, categoria, raza, dueño)
        this.precio = precio
    }

    vendido(): void {
        console.log(`${this.nombre} se vende a $${this.precio}`);

    }
}


const ob = new Venta('Killer', 'Perro', 'Putbull', 'Miguel', 22);
ob.mostrar();
ob.mensaje();
ob.vendido()


