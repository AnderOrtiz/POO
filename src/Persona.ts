export class Persona {
    constructor(public nombre: string, public edad: number) {
        this.validarPersona(nombre, edad)
    }

    private validarPersona(nombre: string, edad: number): void {
        if (nombre === '') { throw new Error('El nombre no puede estar vacío') }
        if (edad <= 0) { throw new Error('La edad debe ser mayor a 0') }
    }

    mostrarRol(): void {
        console.log(`Persona ${this.nombre}`)
    }
}

export class Estudiante extends Persona {
    mostrarRol(): void {
        console.log(`El estudiante ${this.nombre} tiene ${this.edad} años`)
    }
}

export class Docente extends Persona {
    mostrarRol(): void {
        console.log(`El docente ${this.nombre} tiene ${this.edad} años`)
    }
}