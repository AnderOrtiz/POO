let texto: string;
let numero: number;

interface Usuario {
    name: string;
    age: number;
}

let usuario: Usuario;

let usuarios: Array<Usuario> = [];
let usuarios2: Usuario[] = [];

let nombre: string = "Juan";
let edad: number = 30;

usuario = { name: nombre, age: edad };

usuarios.push(usuario);
usuarios2.push(usuario);