abstract class Animal {
    constructor(public nombre: string) {
    }

    comer() {
        console.log(`${this.nombre} está comiendo`);
    }

    abstract hacerSonido(): void;
}

class Perro extends Animal {
    hacerSonido(): void {
        console.log('Woof');
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log('meow');
    }
}

const perro = new Perro('Firulais');
perro.comer();
perro.hacerSonido();