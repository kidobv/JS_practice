/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    origin = [0, 0]
    let pointsWithDistance = []
    points.forEach(element => {
        let distance = getDistance(origin, element);
        return pointsWithDistance.push([element, distance])
    });
    pointsWithDistance.sort((a, b) => a[1] - b[1]);
    let closestPoints = [];
    for (let i = 0; i < k; i++) {
        closestPoints.push(pointsWithDistance[i][0]);
    }
    return closestPoints
};

function getDistance(a, b) {
    return Math.sqrt(Math.pow((b[0] - a[0]), 2) + Math.pow((b[1] - a[1]), 2))
}

console.log(kClosest([[0, 1], [1, 0]], 2))
console.log(kClosest([[1, 3], [-2, 2]], 1))