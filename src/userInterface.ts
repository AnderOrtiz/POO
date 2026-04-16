import { Bow, Sword, type WeaponModel } from "./WeaponModel.js";

interface Usuario {
    attack(): void;
    changeWeapon(newWeapon: WeaponModel): void;
}

class User implements Usuario {
    constructor(public name: string, public weapon: WeaponModel) { }


    attack(): void {
        console.log(`El personaje ${this.name} ha realizado un ataque con  ${this.weapon.name} haciendo ${this.weapon.attack()} de daño`);
    }

    changeWeapon(newWeapon: WeaponModel): void {
        console.log(``);
        this.weapon = newWeapon;
    }

    viewStats(): void {
        this.weapon.stats()
    }

}

//Espadas
const espada = new Sword('Espada', 10, 100, 'sword')
const daga = new Sword('Daga', 10, 100, 'dagger')

//Arcos
const arco = new Bow('Arco', 10, 100, 'bow', 150)
const ballesta = new Bow('Ballesta', 10, 100, 'crossbow', 220)

//Usuario
const personaje1 = new User('Juan', espada)
personaje1.viewStats();
personaje1.attack();

personaje1.changeWeapon(daga)
personaje1.viewStats();
personaje1.attack();

personaje1.changeWeapon(arco)
personaje1.viewStats();
personaje1.attack();

personaje1.changeWeapon(ballesta)
personaje1.viewStats();
personaje1.attack();
