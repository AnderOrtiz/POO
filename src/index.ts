// class GYM {
// peso: number;
// estatura: number;
//     constructor(public peso: number, public estatura: number) {
//         this.estatura = estatura;
//         this.peso = peso;
//     }

//     public IMC(): void {
//         let imc = this.peso / (this.estatura) ** 2 //Math.pow(this.estatura, 2) // 2
//         if (imc < 18.5) {
//             console.log(`\n Tu índice de masa corporal indica bajo peso: ${imc.toFixed(2)}\n`);

//         } else if (imc < 24.9) {
//             console.log(`\n Tu índice de masa corporal indica que es nomal: ${imc.toFixed(2)}\n`);

//         } else if (imc < 29.9) {
//             console.log(`\n Tu índice de masa corporal indica sobrepeso: ${imc.toFixed(2)}\n`);

//         } else {
//             console.log(`\n Tu índice de masa corporal indica obesidad: ${imc.toFixed(2)}\n`);
//         }
//     }
// }

// const yo = new GYM(77, 1.70)

// yo.IMC()


// class Conversor {
//     constructor(public temperatura: number) {
//         this.temperatura = temperatura
//     }

//     public fahrenheitTOCelsius(): void {
//         const celsius = (this.temperatura - 32) / 1.8
//         console.log(`Conversión Fahrenheit a Celsius: ${celsius.toFixed(2)}°C`);
//     }

//     public celsiusTOFahrenheit(): void {
//         const fahrenheit = (this.temperatura * (9 / 5)) + 32
//         console.log(`Conversión Celsius a Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
//     }

//     public kelvinToFahrenheit(): void {
//         const fahrenheit = (((this.temperatura - 273.15) * (9 / 5)) + 32)
//         console.log(`Conversión Kelvin a Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
//     }

//     public kelvinToCelsius(): void {
//         const celsius = this.temperatura - 273.15
//         console.log(`Conversión Kelvin a Celsius: ${celsius.toFixed(2)}°C`);
//     }
// }

// const temperatura = new Conversor(77)
// temperatura.celsiusTOFahrenheit()


class Instituto {
    constructor(public falta: number, public nombre: string) {
        this.falta = falta
        this.nombre = nombre
    }

    public selection(): void {
        if (this.falta == 1) {
            console.log(`Hi ${this.nombre}, tu falta es de $${this.falta}`);

        } else if (this.falta == 3) {
            console.log(`Hi ${this.nombre}, tu falta es de $${this.falta}`);

        } else if (this.falta == 5) {
            console.log(`Hi ${this.nombre}, tu falta es de $${this.falta}`);

        } else if (this.falta == 10) {
            console.log(`Hi ${this.nombre}, tu falta es de $${this.falta}`);

        } else {
            console.log(`Falta no permitida habla con tu docente`);

        }
    }
}

const doe = new Instituto(3, 'John Doe')
doe.selection()