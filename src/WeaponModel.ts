export abstract class WeaponModel {
    name: string;
    damage: number;
    durability: number;

    constructor(name: string, damage: number, durability: number) {
        this.name = name;
        this.damage = damage;
        this.durability = durability;
    }
    abstract attack(): number;
    abstract stats(): void;
}

export type SwordType = "sword" | 'dagger';
export type BowType = "bow" | 'crossbow';

export class Sword extends WeaponModel {
    constructor(name: string, damage: number, durability: number, public swordType: SwordType) {
        super(name, damage, durability)
    }

    attack(): number {
        if (this.swordType === 'sword') return this.damage * 1.2;
        if (this.swordType === 'dagger') return this.damage * 1.5;
        return 0;
    }

    stats(): void {
        console.log(`
            --- Estadisticas de arma ---
            Nombre: ${this.name}
            Daño: ${this.damage}
            Durabilidad: ${this.durability}
            `);
    }
}

export class Bow extends WeaponModel {
    constructor(name: string, damage: number, durability: number, public bowType: BowType, public scope: number) {
        super(name, damage, durability)
    }

    attack(): number {
        if (this.bowType === 'bow') return this.damage * 1.8;
        if (this.bowType === 'crossbow') return this.damage * 2.2;
        return 0;

    }

    stats(): void {
        console.log(`
            --- Estadisticas de arma ---
            Nombre: ${this.name}
            Daño: ${this.damage}
            Durabilidad: ${this.durability}
            Alcance: ${this.scope}
            `);
    }

}

