//O(i*k) time | O(1) space
function smallestDifference2(arrayOne, arrayTwo) {
    // brute force solution
    let result = [];
    let currDiff = Number.POSITIVE_INFINITY;

    for (let i = 0; i < arrayOne.length; i++) {
        for (let k = 0; k < arrayTwo.length; k++) {            
            let newDiff = Math.abs(arrayOne[i] - arrayTwo[k]);
            if (currDiff > newDiff) {
                currDiff = newDiff;
                result = [arrayOne[i], arrayTwo[k]];
            }
        }
    }
    return result;
}

//O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let p1 = 0;
    let p2 = 0;
    let currDiff = Infinity;
    let smallest = Infinity;
    let result = [];
    while (p1 < arrayOne.length && p2 < arrayTwo.length) {
        const first = arrayOne[p1];
        const second = arrayTwo[p2];
        //cases
        //case number in second array is larger
        if (first < second) {
            currDiff = second - first;
            p1++;
        }//case number in first array is larger
        else if (first > second) {
            currDiff = first - second;
            p2++;
        }// case they are the same number
        else {
            return [first, second];
        }
        if (smallest > currDiff) {
            smallest = currDiff;
            result = [first, second];
        }
    }
    return result;
}

//console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
console.log(smallestDifference([3, 6], [5]));
