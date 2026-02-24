/**
    Desarrollar un sistema de autenticación que valide usuario, contraseña.
    Si el login es correcto, mostrar el rol al que pertenece el usuario:
    • 1 = Administrador
    • 2 = Cliente
    • 3 = Invitado
    Si el usuario no existe, mostrar mensaje de usuario incorrecto.
 */

import * as readline from "node:readline";


class Autenticador {
    private rl: readline.Interface;
    constructor(public rol: string, public userName: string, private password: string) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void {
        this.pedirUserYPass();
    }

    pedirUserYPass(): void {
        this.rl.question("Ingresar usuario ", (usuario: string) => {
            this.rl.question("Ingresar contraseña: ", (password: string) => {
                this.validarUser(usuario, password)
            })
        })
    }

    validarUser(user: string, pass: string) {
        if (this.userName == user && this.password == pass) {
            console.log(`Bienvenido ${this.userName}, rol: ${this.rol}`);

        } else {
            console.log('Autenticación no exitosa');

        }
        this.cerrar()
    }


    cerrar(): void {
        this.rl.close();
    }
}

const admin = new Autenticador('admin', 'ander', '123');
admin.iniciar();