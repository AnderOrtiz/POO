import { WeaponModel } from "./WeaponModel.ts"

export abstract class InventoryModel {
    items: Array<WeaponModel>;
    // InventoryCapacity: number = 0;

    protected constructor() {
        this.items = [];
    }

    abstract addItem(item: any): void;
    abstract removeItem(item: any): void;
    abstract viewInventory(): void;
}


export class Invetory extends InventoryModel {
    constructor(public InventoryCapacity: number) {
        super()
    }
    addItem(item: any): void {
        if (this.items.length >= this.InventoryCapacity)
            console.log(`El personaje ha agregado ${item.name} al inventario`);

    }

    removeItem(item: any): void {
        this.items = this.items.filter(i => i !== item)
    }

    viewInventory(): void {
        console.table(this.items)
    }
}