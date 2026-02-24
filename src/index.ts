
(() => {

    class Persona {
        nombre: string;
        edad: number;
        telefono: number;

        constructor(nombre: string, edad: number, telefono: number) {
            this.nombre = nombre;
            this.edad = edad;
            this.telefono = telefono;
        }

        mostrar(): void {
            alert(`Tu nombre es: ${this.nombre}\n
                Tu edad es: ${edad}\n
                Tu número de teléfono es: ${telefono}`)
        }

    }

    let nombre: string = prompt("Ingrese su nombre") || "";
    let edad: number = parseInt(prompt("Ingrese su edad") || "");
    let telefono: number = parseInt(prompt("Ingrese su telefono") || "");
    let people = new Persona(nombre, edad, telefono)
    people.mostrar()

})()