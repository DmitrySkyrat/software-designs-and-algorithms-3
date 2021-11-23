import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    public items: Array<Item>;

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    sort(): void;
    sort(comparator?: ItemComparator): void;
    sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items.sort(comparator.compare)
        } else {
            this.items.sort((item1, item2) => item1.getValue() - item2.getValue())
        }
    }

    toString() {
        this.items.map(item => item.toString()).join(', ');
    }
}
