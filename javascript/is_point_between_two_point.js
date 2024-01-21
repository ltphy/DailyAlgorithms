import * as math from 'mathjs';

const calculatAnlgeBetweenVector = (vectorA, vectorB) => {
    // define the vectors
    const A = math.matrix(vectorA);
    const B = math.matrix(vectorB);

    // calculate the dot product
    const dotProduct = math.dot(A, B);

    // calculate the magnitudes
    const magA = math.norm(A);
    const magB = math.norm(B);

    // calculate the angle in radians
    const cosAngle = dotProduct / (magA * magB);
    const angleRad = Math.acos(cosAngle);

    // convert the angle to degrees
    const angleDeg = math.unit(angleRad, 'rad').toNumber('deg');
    return angleDeg
}
const getProjectedPoint  = (line, point) => {
    // Calculate the vector that points from one point on the line to the other
    const v = math.subtract(line[1], line[0]);

    // Calculate the vector that points from the first point on the line to the point that you want to project
    const w = math.subtract(point, line[0]);

    // Calculate the magnitude of the vector v
    const vMagnitude = math.norm(v);

    // Calculate the dot product of v and w
    const dotProduct = math.dot(v, w);

    // Calculate the scalar projection of w onto v
    const scalarProjection = dotProduct / (vMagnitude * vMagnitude);

    // Calculate the vector projection of w onto v
    const vectorProjection = math.multiply(scalarProjection, v);

    // Calculate the point that is projected onto the line
    const projectedPoint = math.add(line[0], vectorProjection);
    return projectedPoint;
}


const isPointBetweenTwoPoint = (point1, point2, testPoint) => {
    const testToPoint1Vector = [testPoint[0] - point1[0], testPoint[1] - point1[1]];
    const testToPoint2Vector = [testPoint[0] - point2[0], testPoint[1] - point2[1]];

    const angleBetweenTwoPoint = calculatAnlgeBetweenVector(testToPoint1Vector, testToPoint2Vector);

    console.log("Angle Between Two Point", angleBetweenTwoPoint);
    const projectedPoint = getProjectedPoint([point1, point2], testPoint)
    console.log("point12", projectedPoint);
    const projectedPointVector= [testPoint[0]-projectedPoint[0], testPoint[1] - projectedPoint[1]];
    const angleBetweeVector1 = calculatAnlgeBetweenVector(projectedPointVector, testToPoint1Vector);
    console.log("angleBetweeVector1", angleBetweeVector1);
    const angleBetweeVector2 = calculatAnlgeBetweenVector(projectedPointVector, testToPoint2Vector);
    console.log("angleBetweeVector2", angleBetweeVector2);
    return Math.round(angleBetweeVector1) + Math.round(angleBetweeVector2) <= angleBetweenTwoPoint
};

const point1 = [1,2];
const point2 = [4,5];

const testPoint1 = [3,4]; // true
// const testPoint2 = [2.5, 2]; // true 
// const testPoint3 = [0.5, 2]; // false 
// const testPoint4 = [1, 1.5]; // false

console.log(isPointBetweenTwoPoint(point1, point2, testPoint1));
// console.log(isPointBetweenTwoPoint(point1, point2, testPoint2));
// console.log(isPointBetweenTwoPoint(point1, point2, testPoint3));
// console.log(isPointBetweenTwoPoint(point1, point2, testPoint4));
