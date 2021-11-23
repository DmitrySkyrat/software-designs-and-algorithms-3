import { Item } from "./Item";

export class Consumable extends Item {
    protected consumed: boolean;
    protected spoiled: boolean;

    protected constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.consumed = false;
        this.spoiled = spoiled;
    }

    public use(): string {
        if (!this.isConsumed && !this.isSpoiled) {
            return this.eat();
        }

        if (this.name === 'bread') {
            if (this.isConsumed) {
                return 'There is nothing left of the bread to consume.';
            } else if (this.isSpoiled) {
                return 'You eat the bread.\n You feel sick.'
            } else {
                return 'You eat the bread.';
            }
        }

        return '';
    }

    public eat(): string {
        return `You eat the ${this.name}`
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }
}
