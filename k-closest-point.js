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
        return pointsWithDistance.push([element,distance])
    });
     pointsWithDistance.sort((a, b) => b[1] - a[1]);
     sortedPoints = pointsWithDistance.sort((a, b) => a[1] - b[1]);
    let closestPoints = [];
    for (pointObj of sortedPoints){
        console.log(pointObj);
        if(k == 0){
            return closestPoints;
        }
        closestPoints.push(pointObj[0]);
        k--;
    }     
    return closestPoints
};

function getDistance(a, b) {
    return Math.sqrt(Math.pow((b[0] - a[0]), 2) + Math.pow((b[1] - a[1]), 2))
}

console.log(kClosest([[1, 3], [-2, 2]], 1))