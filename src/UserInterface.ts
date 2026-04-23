import { Bow, Sword, type WeaponModel } from './WeaponModel.ts';
import type { InventoryModel, Invetory } from './inventory.ts';

interface Usuario {
    attack(): void;
    changeWeapon(newWeapon: WeaponModel): void;
}

class User implements Usuario {
    public weaponInUse: WeaponModel | null;

    constructor(public name: string,
        public weapon: WeaponModel | null,
        public Invetory: InventoryModel,
        public inventory: Invetory
    ) {
        this.weaponInUse = null
    }


    attack(): void {
        if (this.weaponInUse == null) {
            console.log(`El personaje ${this.name} no tiene arma en uso`);
            return
        }

        console.log(`El personaje ${this.name} ha realizado un ataque con  ${this.weapon!.name} haciendo ${this.weapon!.attack()} de daño`);

    }

    changeWeapon(newWeapon: WeaponModel): void {
        const weaponExist: WeaponModel[] = this.inventory
            .getItems()
            .filter(w => w == newWeapon)

        if (!weaponExist) {
            console.log(`El personaje ${this.name} no tiene esa arma en su inventario`);
            return
        }

        this.weaponInUse = weaponExist[0];

        this.weapon = newWeapon;
    }

    viewStats(): void {
        if (this.weaponInUse == null) {
            console.log(`El personaje ${this.name} no tiene arma en uso`);
            return
        }
        this.weapon!.stats()
    }

}

//Espadas
const espada = new Sword('Espada', 10, 100, 'sword')
const daga = new Sword('Daga', 10, 100, 'dagger')

//Arcos
const arco = new Bow('Arco', 10, 100, 'bow', 150)
const ballesta = new Bow('Ballesta', 10, 100, 'crossbow', 220)

//Usuario

// const personaje1 = new User('Juan', espada)
// personaje1.viewStats();
// personaje1.attack();

// personaje1.changeWeapon(daga)
// personaje1.viewStats();
// personaje1.attack();

// personaje1.changeWeapon(arco)
// personaje1.viewStats();
// personaje1.attack();

// personaje1.changeWeapon(ballesta)
// personaje1.viewStats();
// personaje1.attack();
