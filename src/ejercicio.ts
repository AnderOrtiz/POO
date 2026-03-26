/**
    1. Crea una clase abstracta donde se solicite de manera publica
    el nickname de un jugador y el total de vida que es 100% en privado, 
    Crear la clase mundo 1 que séra una clase hija, donde se creara un 
    método aventura y en ese método se le restara el 30% de vida al jugador, 
    Crear el metodo acuatico donde se le restara el 50% de vida y luego se le 
    sumara el 10% y crear el método endgame donde se le restara el 50% de vida.  
    Cada método debe de imprimir el dato restante de vida que le quedo al jugador.
 */

/**
    2. Aplicar al ejercicio 1 el formato de mantener el porcentaje 
    de vida para interactuar con los otros métodos, todo imprimiendo 
    siempre mensajes en consola.
 */

abstract class Jugador {
    constructor(public nickName: string, private life: number = 100) { }

    protected restarVida(damage: number) {
        if ((this.life - damage) < 0) {
            this.life = 0
            console.log(`Se ha infligido ${damage}% de daño, perdiste vida restante ${this.life}%`);
            return
        }
        this.life -= damage;
        console.log(`Se ha infligido ${damage}% de daño, vida restante ${this.life}%`);
    }

    protected sumarVida(value: number) {
        this.life += value;
        console.log(`Se ha restaurado ${value}% de vida, vida restante ${this.life}%`);
    }

    get vida() {
        return this.life;
    }
}

class mundo1 extends Jugador {
    constructor(nickName: string, life: number) {
        super(nickName, life)
    }

    aventura() {
        this.restarVida(30);
    }

    acuatico() {
        this.restarVida(50);
        this.sumarVida(10);
    }

    endgame() {
        this.restarVida(50);
    }
}

const ander = new mundo1('Ander', 100)
ander.aventura();
ander.acuatico();
ander.endgame();