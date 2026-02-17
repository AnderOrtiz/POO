/**Codifique un Ejercicio donde el objeto necesite 5 atributos como: nombre,
apellido, teléfono, correo, codIdentificacion. Solamente el ultimo atributo debe de
tener su modificador como privado. Imprima en pantalla los atributos del objeto sin
utilizar métodos. */

class User {
    public nombre: string
    public apellido: string
    public telefono: number
    public correo: string
    private codIdentificacion: string

    constructor(
        nombre: string,
        apellido: string,
        telefono: number,
        correo: string,
        codIdentificacion: string
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}

const user = new User('Anderson', 'Ortiz', 23412345, 'anderson.ortiz@gmail.com', 'u20250346')

console.log(user.nombre);
console.log(user.apellido);
console.log(user.correo);
console.log(user.telefono);
