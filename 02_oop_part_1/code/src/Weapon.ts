import { Item } from "./Item";

export abstract class Weapon extends Item {
    public MODIFIER_CHANGE_RATE: number = 0.05;
    public baseDamage: number;
    public damageModifier: number;
    public baseDurability: number;
    public durabilityModifier: number;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = Math.round(Math.random()*100) / 100;
        this.durabilityModifier = Math.round(Math.random()*100) / 100;
    }

    public getDamage() {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability() {
        return this.baseDurability + this.durabilityModifier;
    }

    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`;
    }

    public use() {
        if (this.getDurability() <= 0) {
            return `You can't use the ${this.getName()}, it is broken!`;
        }
        this.baseDurability -= this.MODIFIER_CHANGE_RATE;
        return `You use the ${this.getName()} dealing ${this.getDamage()} points of damage. ${this.getDamage() <= 0 ? `The ${this.getName()} breaks.` : ``}`;
    }
}
