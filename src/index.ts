import * as readline from "readline";

class Paciente {
    constructor(
        public tipoConsulta: number,
        public nombre: string,
        public codigo: string,
        public fechaNacimiento: string,
        public edad: number,
        public telefono: string,
        public nombreResponsable: string,
        public telefonoResponsable: string,
        public sintomas: string
    ) { }

    get getInfoBasica(): string {
        return `Paciente: ${this.nombre} | Edad: ${this.edad} | Tel: ${this.telefono}\nResponsable: ${this.nombreResponsable} | Tel Resp: ${this.telefonoResponsable}`;
    }
}

abstract class PreConsulta {
    abstract realizarCobro(paciente: Paciente): void;
}

class ConsultaGeneral extends PreConsulta {
    realizarCobro(paciente: Paciente): void {
        console.log(paciente.getInfoBasica);
        console.log(`Síntomas: ${paciente.sintomas}`);
        console.log(`Costo a cancelar $50`);

        const descuento = parseInt(paciente.codigo.slice(-2)) / 100;
        const total = 50 * (1 - descuento);

        console.log(`Felicidades le aplicaremos un descuento del ${descuento * 100}%`);
        console.log(`El total a pagar es de: $${total.toFixed(2)}`);
    }
}

class ConsultaEspecialidad extends PreConsulta {
    realizarCobro(paciente: Paciente): void {
        console.log(paciente.getInfoBasica);
        console.log(`Síntomas: ${paciente.sintomas}`);
        console.log(`Costo a cancelar $90`);

        const descuento = parseInt(paciente.codigo.slice(-2)) / 100;
        const total = 90 * (1 - descuento) + (90 * 0.03);

        console.log(`Felicidades le aplicaremos un descuento del ${descuento * 100}%`);
        console.log(`Pero se agrega 3% por uso de máquinas`);
        console.log(`El total a pagar es de: $${total.toFixed(2)}`);
    }
}

class Sistema {
    tomarInformacion(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(
            'Bienvenido\nQue tipo de consulta le gustaría hoy\nConsulta general (1)\nConsulta de especialidad (2)\nDigite su respuesta: ',
            tipoConsulta => {

                if (tipoConsulta !== '1' && tipoConsulta !== '2') {
                    console.log('Ingrese una opción correcta');
                    rl.close();
                    return this.tomarInformacion();
                }

                rl.question('Ingrese su nombre: ', nombre => {
                    rl.question('Ingrese su código de carnet estudiantil: ', codigo => {
                        rl.question('Ingrese su fecha de nacimiento: ', fechaNacimiento => {
                            rl.question('Ingrese su edad: ', edad => {
                                rl.question('Ingrese su teléfono: ', telefono => {
                                    rl.question('Ingrese su nombre de su responsable: ', nombreResponsable => {
                                        rl.question('Ingrese el teléfono del responsable : ', telefonoResponsable => {
                                            rl.question('Ingrese los síntomas : ', sintomas => {

                                                const paciente = new Paciente(
                                                    parseInt(tipoConsulta),
                                                    nombre,
                                                    codigo,
                                                    fechaNacimiento,
                                                    parseInt(edad),
                                                    telefono,
                                                    nombreResponsable,
                                                    telefonoResponsable,
                                                    sintomas
                                                );

                                                let consulta: PreConsulta;

                                                if (tipoConsulta === '1') {
                                                    consulta = new ConsultaGeneral();
                                                } else {
                                                    consulta = new ConsultaEspecialidad();
                                                }

                                                consulta.realizarCobro(paciente);
                                                rl.close();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        );
    }
}

new Sistema().tomarInformacion();