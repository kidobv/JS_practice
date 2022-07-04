//Find the minimum number of coins needed to make change for a given amount
//Ex: [1,2] amount = 5 -> 5x1 = 5 coins or 1x1 2x2 = 3 coins
//[0,1,2,3,4,5]

getMinCoinsAmount = (coins, amount) =>{
    targetAmounts = new Array(amount+1).fill(Number.MAX_VALUE);
    targetAmounts[0] = 0;
    for(let i=1; i<targetAmounts.length; i++){
        //i represents the amount to evaluate
        for(let j=0; j<coins.length; j++){
            let currCoin = coins[j];
            //base case: we can only consider a coin if it fits within the amount to evaluate
            if (currCoin <= i){
                targetAmounts[i] = Math.min(targetAmounts[i], targetAmounts[i-currCoin]+1);
            }
        }
    }
    return targetAmounts[amount];
}

console.log(getMinCoinsAmount([1,2], 5)); //expect 3