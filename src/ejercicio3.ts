/**
Codifique un Ejercicio en el cual se pueda verificar la edad de una persona
utilizando solamente la fecha de nacimiento, y calcular su estado por medio de la
edad, si es 0 a 2 años = bebe , mayor de 2 a 10 es niño/niña, mayor de 10 a 14 = pre
adolescente, mayor de 14 a 17 = adolescente, mayor e igual a 18 a 30= joven, mayor de
30 a 50 = adulto, de 50 en adelante = adulto mayor.
 */

class Persona {
    nombre: string
    fechaNacimiento: string
    constructor(nombre: string, fechaNacimiento: string) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }

    private determinarEdad(): number {
        const nacimiento: number = parseInt(this.fechaNacimiento.slice(6, 10))
        const edad = 2026 - nacimiento
        return edad
    }

    determinarEstado(): void {

        const edad = this.determinarEdad()
        console.log(`Tu edad es: ${edad} años`);
        if (edad >= 0 && edad <= 2) {
            console.log('Eres un bebe');

        } else if (edad <= 10) {
            console.log('Eres un niño');

        } else if (edad <= 14) {
            console.log('Eres un pre adolescente');

        } else if (edad <= 17) {
            console.log('Eres un adolescente');

        } else if (edad <= 30) {
            console.log('Eres un joven');

        } else if (edad <= 50) {
            console.log('Eres un adulto');

        } else if (edad > 50) {
            console.log('Eres un joven mayor');

        } else {
            console.log('Edad no valida');
            
        }
    }

}

const persona = new Persona('Anderson', '22/12/2005')
persona.determinarEstado()