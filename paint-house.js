//     [0,0]        [0,1]        [0,2]
//  [1,1] [1,2]  [1,0] [1,2]  [1,0] [1,1]

//      17            2          17    
//  Min(16  5)    Min(16  5)   16  16
//  14 19            14 19

//Solution #1 - Top down
const costs = [[17, 2, 17], [16, 16, 5], [14, 3, 19]];

const minCost = (costs) => {
    if (!costs) return 0;
    //There's three colors r,b,g 
    return Math.min(paintCost(0, 0, costs), paintCost(0, 1, costs), paintCost(0, 2, costs));
}

const paintCost = (h, color, costs, memo = new Map()) => {
    //Check cache
    const key = `${h}_${color}`;
    if (memo.has(key)) {
        return memo.get(key);
    }
    //We can't paint adjacent houses with the same color
    let currCost = costs[h][color];
    //Base case we reached the last house so we just return it's value
    if (h == costs.length - 1) {
        memo.set(key, currCost);
        return currCost;
    }
    else {
        if (color == 0) {
            currCost += Math.min(paintCost(h + 1, 1, costs, memo), paintCost(h + 1, 2, costs, memo));
        }
        else if (color == 1) {
            currCost += Math.min(paintCost(h + 1, 0, costs, memo), paintCost(h + 1, 2, costs, memo));
        }
        else if (color == 2) {
            currCost += Math.min(paintCost(h + 1, 0, costs, memo), paintCost(h + 1, 1, costs, memo));
        }
        memo.set(key, currCost);
        return currCost;
    }
}

console.log(minCost(costs));


//Solution #2

//With Dynamic programming - bottom up approach
//const costs = [[17, 2, 17], [16, 16, 5], [14, 3, 19]];

//we know that the 3rd house can only have one min total cost for each color and that is itself
const minCostDP = (costs) => {
    //edge case
    if(costs.length == 0) return 0;
    //starting from the second to last row because we know the cost of the last 
    for (let i = costs.length - 2; i >= 0; i--) {
        costs[i][0] += Math.min(costs[i + 1][1], costs[i + 1][2]);
        costs[i][1] += Math.min(costs[i + 1][0], costs[i + 1][2]);
        costs[i][2] += Math.min(costs[i + 1][0], costs[i + 1][1]);
    }
    return Math.min(costs[0][0], costs[0][1], costs[0][2]);
}

console.log(minCost(costs));
