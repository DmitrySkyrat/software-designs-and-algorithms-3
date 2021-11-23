import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    protected numberOfSlices: number;
    protected slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('pizza', 3000, 500, spoiled);
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return 'You eat a slice of the pizza.';

        } else {
            return ''
        }
    }
}
