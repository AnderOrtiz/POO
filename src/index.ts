import * as readline from "readline";

class Clientes {

    iniciar() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Ingrese su nombre: ', (nombre) => {
            rl.question('Ingrese su fecha de nacimiento (dd-mm-yyyy): ', (fechaNacimiento) => {
                rl.question('Ingrese su estado familiar: ', (estadoFamiliar) => {
                    rl.question('Ingrese su sueldo: ', (sueldo) => {

                        const edad = (2026 - parseInt(fechaNacimiento.slice(6, 10)));
                        const sueldoNum = parseFloat(sueldo);

                        this.evaluarCliente(nombre.trim(), fechaNacimiento, estadoFamiliar.toLocaleLowerCase(), sueldoNum, edad);
                        rl.close();
                    });
                });
            });
        });
    }

    evaluarCliente(nombre: string, fechaNacimiento: string, estadoFamiliar: string, sueldo: number, edad: number) {
        if (estadoFamiliar == 'casado' &&
            (edad) >= 22 &&
            (edad) < 32 &&
            sueldo > 450 &&
            sueldo < 600
        ) {
            console.log(
                `${nombre}, ${estadoFamiliar} de ${edad} años con un sueldo de $${sueldo}\n
                Se le permite otorgar el prestamo de $20000`
            );


        } else if (estadoFamiliar == 'casado' &&
            (edad) >= 32 &&
            sueldo > 601 &&
            sueldo < 1000
        ) {
            console.log(
                `${nombre}, ${estadoFamiliar} de ${edad} años con un sueldo de $${sueldo}\n
                Se le permite otorgar el prestamo de $30000`
            );


        } else if (estadoFamiliar == 'soltero' &&
            (edad) > 21 &&
            (edad) < 30 &&
            sueldo > 400 &&
            sueldo < 600
        ) {
            console.log(
                `${nombre}, ${estadoFamiliar} de ${edad} años con un sueldo de $${sueldo}\n
                Se le permite otorgar el prestamo de $2500`
            );


        } else if (estadoFamiliar == 'soltero' &&
            (edad) >= 30 &&
            sueldo > 601 &&
            sueldo < 1000
        ) {
            console.log(
                `${nombre}, ${estadoFamiliar} de ${edad} años con un sueldo de $${sueldo}\n
                Se le permite otorgar el prestamo de $3500`
            );


        } else if (estadoFamiliar == 'viudo' &&
            (edad) >= 35 &&
            sueldo > 600 &&
            sueldo < 1500
        ) {
            console.log(
                `${nombre}, ${estadoFamiliar} de ${edad} años con un sueldo de $${sueldo}\n
                Se le permite otorgar el prestamo de $4000`
            );
        } else {
            console.log(
                `${nombre}, ${estadoFamiliar} de ${edad} años con un sueldo de $${sueldo}\n
                Lamentamos informarle que no cumple los requisitos para un prestamo`
            );
        }

    }
}

const cliente = new Clientes()
cliente.iniciar()




// const cliente1 = new Clientes('Carlos Mendoza', '10-05-2000', 'casado', 500)
// cliente1.evaluarCliente()

// const cliente2 = new Clientes('Luis Herrera', '15-03-1990', 'casado', 800)
// cliente2.evaluarCliente()

// const cliente3 = new Clientes('Mario López', '20-07-2002', 'soltero', 500)
// cliente3.evaluarCliente()

// const cliente4 = new Clientes('Andrés Ramírez', '11-09-1995', 'soltero', 700)
// cliente4.evaluarCliente()

// const cliente5 = new Clientes('Pedro Castillo', '08-02-1985', 'viudo', 900)
// cliente5.evaluarCliente()

// const cliente6 = new Clientes('Diego Flores', '01-01-2008', 'soltero', 300)
// cliente6.evaluarCliente()