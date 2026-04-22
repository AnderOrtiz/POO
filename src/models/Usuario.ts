class Usuario {
    constructor(
        private nombre: string,
        private email: string,
        private id?: number
    ) { }

    public getNombre(): string {
        return this.nombre
    }

    public getEmail(): string {
        return this.email
    }

    public getId(): number | undefined {
        return this.id
    }
}

export default Usuario;