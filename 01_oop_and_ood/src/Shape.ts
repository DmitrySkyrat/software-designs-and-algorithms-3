import { Point } from "./Point";

export abstract class Shape {
    protected points: Point[];
    protected color: string;
    protected filled: boolean;

    constructor(points: Point[])
    constructor(points: Point[], color: string = 'green', filled: boolean = true) {
        if (points.length < 3) {
            throw new Error("Shape should have at least 3 points.");
        }
        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    abstract getType(): string;

    toString() {
        const [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }] = this.points;
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3}).`
    }

    getPerimeter() {
        let perimeter = 0;
        this.points.forEach((point, index, array) => {        
            let nextPoint;    
            if (array.length - 1 === index) {
                nextPoint = array[0];
            } else {
                nextPoint = array[index + 1];
            }
            perimeter = perimeter + point.distance(nextPoint.x, nextPoint.y);

        })
        return perimeter;
    }
}
