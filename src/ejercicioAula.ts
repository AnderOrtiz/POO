
abstract class TransformadorDatos {
    public mensaje: string;

    constructor(mensaje: string) {
        this.mensaje = mensaje
    }
    abstract transformar(dato: string): string;
}

class TransformarMayusculas extends TransformadorDatos {
    public datoMayus = ""
    constructor(mensaje: string, datoMayus: string) {
        super(mensaje)
    }
    transformar(mensaje: string): string {
        this.datoMayus = mensaje.toUpperCase()
        return this.datoMayus
    }

}

const mensaje = new TransformarMayusculas("", "")
console.log(mensaje.transformar('asdffgh'))
console.log(mensaje.transformar('poiuytr'))
console.log(mensaje.transformar('SRDTFGH'))