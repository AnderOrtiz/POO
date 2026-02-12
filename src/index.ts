// class Usuario {
//     public nombre: string;

//     constructor(nombre: string){
//         this.nombre = nombre;
//     }
// }

// const u = new Usuario("Juan");
// console.log(u.nombre);


// class Usuario {
//     private password: string;
//     constructor(pass: string) {
//         this.password = pass;
//     }

//     validar(pass: string): boolean {
//         return this.password === pass;
//     }
// }

// const u = new Usuario('1234');

// console.log(u.validar('1234'));

class Persona {
    constructor(protected edad: number) {
        this.edad = edad
    }
}

class Estudiante extends Persona {
    mostrarEdad() {
        console.log(this.edad);
    }
}

const e = new Estudiante(20);

e.mostrarEdad();


class Usuario {
    public username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(pass: string): string {
        if (pass === this.password) {
            return "Acceso concedido";
        } else {
            return "Contraseña incorrecta";
        }
    }
}

const u = new Usuario('Anderson', 'ander123')
console.log(u.login('ander123'));

class Producto {
    constructor(
        public nombre: string,
        private precio: number
    ) { }

    evaluarPrecio(): string {
        if (this.precio < 10) {
            return "Producto barato";
        } else if (this.precio <= 50) {
            return "Precio normal";
        } else {
            return "Producto caro";
        }
    }
}

const p = new Producto('Chocolate', 2);
console.log(p.evaluarPrecio());

class Empleado {
    constructor(
        public nombre: string,
        protected salario: number
    ) { }
}

class Gerente extends Empleado {
    bono(): number {
        if (this.salario > 1000) {
            return this.salario * 0.2;
        } else {
            return this.salario * 0.1;
        }
    }
}