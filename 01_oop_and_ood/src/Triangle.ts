import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color: string = 'green', filled: boolean = true) {
        super([point1, point2, point3]);
        this.color = color;
        this.filled = filled;
    }

    toString() {
        const [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }] = this.points;
        return `Triangle[v1=(${x1}, ${y1}),v2=(${x2}, ${y2}),v3=(${x3}, ${y3})]`
    }

    getType() {
        let sides: number[] = [];

        this.points.forEach((point, index, array) => {        
            let nextPoint;    
            if (array.length - 1 === index) {
                nextPoint = array[0];
            } else {
                nextPoint = array[index + 1];
            }
            sides.push(Math.round(point.distance(nextPoint.x, nextPoint.y) * 1000) / 1000);
        })

        if (sides[0] === sides[1] && sides[1]  === sides[2]) {
            return 'equilateral triangle'
        } else if (sides[0] === sides[1] || sides[1]  === sides[2] || sides[0]  === sides[2]) {
            return 'isosceles triangle';
        } else {
            return 'scalene triangle';
        }
    }
}
