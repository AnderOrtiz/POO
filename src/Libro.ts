/**
4. Crear una clase Libro con los atributos titulo, autor y numeroPaginas. 
Instanciar al menos dos objetos y mostrar la información de cada uno 
utilizando un método.
 */

class Libro {
    constructor(public titulo: string, public autor: string, public numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    mostrarInformacion(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor:" ${this.autor}`);
        console.log(`Número de páginas: ${this.numeroPaginas}\n`);
    }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", 96);

libro1.mostrarInformacion();
libro2.mostrarInformacion();