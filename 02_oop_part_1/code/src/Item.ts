import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static get numberOfItems(): number {
        return id;
    }

    protected id: number;
    protected value: number;
    protected name: string;
    protected weight: number;

    protected constructor(name: string, value: number, weight: number) {
        this.id = id;
        id = id + 1;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        }

        if (this.value < other.value) {
            return -1;
        }

        if (this.name.toLocaleLowerCase() > other.name.toLocaleLowerCase()) {
            return 1;
        }

        if (this.name.toLocaleLowerCase() < other.name.toLocaleLowerCase()) {
            return 1;
        }
    }

    public use(): void {}

    toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName() {
        return this.value;
    }

    public getWeight() {
        return this.weight;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    static reset(): void {
        id = 0;
    }
}
