export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(firstParam?: any, secondParam?: any): number {
        if (!arguments.length) {
            return Math.sqrt(Math.pow((0 - this.x), 2) + Math.pow((0 - this.y), 2))
        } else if (typeof firstParam === "object") {
            return Math.sqrt(Math.pow((firstParam.x - this.x), 2) + Math.pow((firstParam.y - this.y), 2))
        } else {
            return Math.sqrt(Math.pow((firstParam - this.x), 2) + Math.pow((secondParam - this.y), 2))
        }
    }
}
