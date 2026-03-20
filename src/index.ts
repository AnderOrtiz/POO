abstract class ProcesadorArchivos {
    public nombreArchivo: string;
    // public estadoArchivo: string;

    constructor(nombreArchivo: string, estadoArchivo: string) {
        this.nombreArchivo = nombreArchivo;
    }
    abstract convertir(archivo: string): string;
}

//convertir de PNG a JPG
class ProcesadorImagenPNG extends ProcesadorArchivos {
    public nombreArchivoIMG = ""

    constructor(nombreArchivo: string, estadoArchivo: string) {
        super(nombreArchivo, estadoArchivo)
        this.validacion(nombreArchivo)
    }
    convertir(archivo: string): string {
        let nombreArchivo = archivo.split('.')
        this.nombreArchivoIMG = nombreArchivo[0] + ".JPG";
        return this.nombreArchivoIMG
    }
    private validacion(nombreArchivo: string) {
        let formato = nombreArchivo.split(".")

        if (formato[-1] === "PNG" || formato[-1] === "png") {
            throw new Error("El archivo no es formato PNG")
        }
    }
}

const imagenPNG = new ProcesadorImagenPNG("imagen.png", "")
console.log(imagenPNG.convertir("captura.png"))
console.log(imagenPNG.convertir("imagen.png"))
console.log(imagenPNG.convertir("Foto.PNG"))
console.log(imagenPNG.convertir("img.png"))